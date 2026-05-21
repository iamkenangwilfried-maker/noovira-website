"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

/**
 * Hero — Matter.js physics, clone exact de Sher Agency
 *
 * v5 — 2 corrections :
 * ① SCROLL FIX DÉFINITIF : override canvas.addEventListener AVANT Mouse.create
 *   → Matter.js ne peut plus enregistrer de wheel listener non-passif
 *
 * ② TAGS SHER-LIKE : 220×58px, 6 colonnes, 3 rangées pour 17 projets
 *   → pile ~200px, tous les projets visibles, comme Sher
 */

const SHOT = (url: string) =>
  `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=480&h=320`;

// Palette : toutes les couleurs claires → visibles sur fond #1C1C1C
// (pas de dark-on-dark qui disparaît comme avant)
const TAG_COLORS = [
  { bg: "#FFFFFF",   fg: "#1A1A1A" },  // blanc pur
  { bg: "#F5F2EC",   fg: "#1A1A1A" },  // crème
  { bg: "#EBE5DC",   fg: "#1A1A1A" },  // sable clair
  { bg: "#DDD5C8",   fg: "#1A1A1A" },  // sable
  { bg: "#CBC0B0",   fg: "#1A1A1A" },  // beige brand
  { bg: "#B8AC9C",   fg: "#1A1A1A" },  // pierre
];

function makeSprite(text: string, bg: string, fg: string, w: number, h: number): string {
  const c = document.createElement("canvas");
  c.width = w * 2;
  c.height = h * 2;
  const ctx = c.getContext("2d")!;
  ctx.scale(2, 2);

  const r = h / 2;
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(w - r, 0);
  ctx.arcTo(w, 0, w, r, r);
  ctx.lineTo(w, h - r);
  ctx.arcTo(w, h, w - r, h, r);
  ctx.lineTo(r, h);
  ctx.arcTo(0, h, 0, h - r, r);
  ctx.lineTo(0, r);
  ctx.arcTo(0, 0, r, 0, r);
  ctx.closePath();
  ctx.fillStyle = bg;
  ctx.fill();

  ctx.fillStyle = fg;
  const fontSize = Math.max(11, Math.round(h * 0.22)); // police proportionnelle (pas trop grande)
  ctx.font = `700 ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const maxW = w - Math.round(h * 0.55);
  let t = text;
  while (ctx.measureText(t).width > maxW && t.length > 4) t = t.slice(0, -2) + "…";
  ctx.fillText(t, w / 2, h / 2);

  return c.toDataURL();
}

interface Preview {
  visible: boolean; x: number; y: number;
  title: string; imgUrl: string; slug: string;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [preview, setPreview] = useState<Preview>({
    visible: false, x: 0, y: 0, title: "", imgUrl: "", slug: "",
  });

  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!sectionRef.current || !canvasRef.current) return;
      const Matter = await import("matter-js");
      if (cancelled) return;

      const { Engine, Render, Runner, Bodies, Body, Composite, Mouse, MouseConstraint } = Matter;

      const section = sectionRef.current!;
      const canvas  = canvasRef.current!;
      const W = section.offsetWidth;
      const H = section.offsetHeight;

      canvas.width  = W;
      canvas.height = H;

      const engine = Engine.create({ gravity: { y: 2.0 } });

      const render = Render.create({
        element: section,
        engine,
        canvas,
        options: { width: W, height: H, wireframes: false, background: "transparent" },
      });

      // ── DIMENSIONS RESPONSIVES ──
      // Taille calculée depuis la vraie largeur → fonctionne sur tous écrans
      const GAP  = 12;
      const wall = 60;
      // 5 cols desktop → 4 rangées × 52px = pile 244px (zone violette y=656-900)
      // tagW capé à 200px max → taille proche de Sher (180-200px)
      const cols = W > 900 ? 5 : W > 500 ? 4 : 3;
      const tagW = Math.min(200, Math.max(90, Math.floor((W - (cols + 1) * GAP) / cols)));
      const tagH = Math.max(40,  Math.round(tagW * 0.26)); // 200×0.26 = 52px

      // Floor: la BASE du rang inférieur est à y=H (canvas edge)
      // → tag center à y=H-tagH/2 → tag entier visible dans le canvas
      // (avant: center à y=H → seulement le demi-haut visible → bug)
      const FLOOR_Y = H + wall / 2;

      const floor = Bodies.rectangle(W / 2, FLOOR_Y, W * 4, wall, {
        isStatic: true, label: "__floor",
        render: { fillStyle: "transparent", strokeStyle: "transparent", lineWidth: 0 },
      });
      const wallL = Bodies.rectangle(-wall / 2, H / 2, wall, H * 3, {
        isStatic: true,
        render: { fillStyle: "transparent", strokeStyle: "transparent", lineWidth: 0 },
      });
      const wallR = Bodies.rectangle(W + wall / 2, H / 2, wall, H * 3, {
        isStatic: true,
        render: { fillStyle: "transparent", strokeStyle: "transparent", lineWidth: 0 },
      });
      Composite.add(engine.world, [floor, wallL, wallR]);

      // ── TAGS ──
      // 220×58px, 6 colonnes → 3 rangées pour 17 projets
      // Pile finale ~200px, tous visibles dans le tiers inférieur
      const tagBodies: any[] = [];

      PROJECTS.forEach((project, i) => {
        const color  = TAG_COLORS[i % TAG_COLORS.length];
        const sprite = makeSprite(project.title, color.bg, color.fg, tagW, tagH);

        const col = i % cols;
        const row = Math.floor(i / cols);

        // X : centré par colonne, offset ±30% (réduit vs avant pour garder tags visibles)
        const x = (col + 0.5) * (W / cols) + (Math.random() - 0.5) * (W / cols * 0.3);

        // Y : spawn AU-DESSUS du viewport, cascade rangée par rangée
        const y = -(row + 1) * (tagH + GAP) - Math.random() * 20;

        const body = Bodies.rectangle(x, y, tagW, tagH, {
          restitution: 0.12,
          friction: 0.9,
          frictionAir: 0.03,
          chamfer: { radius: tagH / 2 },
          render: {
            sprite: { texture: sprite, xScale: 0.5, yScale: 0.5 },
          },
          label: `tag_${project.slug}`,
        });

        (body as any)._project = project;
        Body.setAngle(body, (Math.random() - 0.5) * 0.4);
        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 2,
          y: Math.random() * 2 + 1,
        });
        tagBodies.push(body);
      });

      Composite.add(engine.world, tagBodies);

      // ── SCROLL FIX DÉFINITIF ──
      // On overrides canvas.addEventListener AVANT Mouse.create
      // → Matter.js enregistre ses wheel listeners en mode { passive: true }
      // → le scroll de la page n'est plus jamais bloqué
      const origAdd = canvas.addEventListener.bind(canvas);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (canvas as any).addEventListener = (type: string, listener: EventListenerOrEventListenerObject, options?: AddEventListenerOptions | boolean) => {
        if (type === "wheel" || type === "mousewheel" || type === "DOMMouseScroll") {
          origAdd(type as keyof HTMLElementEventMap, listener, { passive: true });
        } else {
          origAdd(type as keyof HTMLElementEventMap, listener, options);
        }
      };

      const mouse = Mouse.create(canvas);

      // Restaurer l'addEventListener original
      (canvas as any).addEventListener = origAdd;

      const mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.18, render: { visible: false } },
      });
      Composite.add(engine.world, mc);
      (render as any).mouse = mouse;

      // ── HOVER + CLICK ──
      let lastBody: any = null;
      let mouseDown = { x: 0, y: 0 };

      canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = (e.clientX - rect.left) * (W / rect.width);
        const my = (e.clientY - rect.top)  * (H / rect.height);
        let found: any = null;
        for (const b of tagBodies) {
          if (Matter.Bounds.contains(b.bounds, { x: mx, y: my })) { found = b; break; }
        }
        if (found !== lastBody) {
          lastBody = found;
          if (found?._project) {
            const p = found._project;
            setPreview({ visible: true, x: e.clientX, y: e.clientY, title: p.title, imgUrl: SHOT(p.url), slug: p.slug });
          } else {
            setPreview(s => ({ ...s, visible: false }));
          }
        } else if (found) {
          setPreview(s => s.visible ? { ...s, x: e.clientX, y: e.clientY } : s);
        }
      });

      canvas.addEventListener("mouseleave", () => {
        lastBody = null;
        setPreview(s => ({ ...s, visible: false }));
      });

      canvas.addEventListener("mousedown", (e) => { mouseDown = { x: e.clientX, y: e.clientY }; });
      canvas.addEventListener("mouseup",   (e) => {
        const dist = Math.hypot(e.clientX - mouseDown.x, e.clientY - mouseDown.y);
        if (dist < 6 && lastBody?._project) {
          window.location.href = `/realisations/${lastBody._project.slug}`;
        }
      });

      // ── RESIZE ──
      const onResize = () => {
        const nW = section.offsetWidth;
        const nH = section.offsetHeight;
        render.canvas.width  = nW;
        render.canvas.height = nH;
        (render.options as any).width  = nW;
        (render.options as any).height = nH;
        Body.setPosition(floor,  { x: nW / 2, y: nH + wall / 2 });
        Body.setPosition(wallR,  { x: nW + wall / 2, y: nH / 2 });
      };
      window.addEventListener("resize", onResize);

      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      cleanupRef.current = () => {
        window.removeEventListener("resize", onResize);
        Render.stop(render);
        Runner.stop(runner);
        Engine.clear(engine);
      };
    }

    init();
    return () => { cancelled = true; cleanupRef.current?.(); };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="section-dark relative overflow-hidden"
        style={{ height: "90vh", minHeight: "580px" }}
      >
        {/* Canvas : top:0, couvre tout le 100vh */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "100%",
            zIndex: 1,
          }}
        />

        {/* Texte */}
        <div
          className="relative flex flex-col items-center text-center px-6"
          style={{ zIndex: 10, pointerEvents: "none", paddingTop: "100px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-1.5 mb-6"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 fill-yellow-400">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm text-text-light/50 font-medium">
              5.0 · Plus de 50 avis clients
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-heading font-extrabold text-text-light tracking-tight leading-[1.05] mb-8 max-w-4xl"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            Nous créons des sites qui{" "}
            <span className="font-extrabold">Remplissent votre Carnet.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-3"
            style={{ pointerEvents: "auto" }}
          >
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-beige text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-white hover:text-dark transition-all">
              Réserver un appel <ArrowUpRight size={16} />
            </a>
            <a href="#portfolio"
              className="inline-flex items-center gap-2 bg-beige text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-white hover:text-dark transition-all">
              Voir nos réalisations
            </a>
          </motion.div>
        </div>
      </section>

      {/* Preview popup — fixed, jamais rogné */}
      {preview.visible && (
        <div
          className="fixed pointer-events-none"
          style={{ left: preview.x + 18, top: preview.y - 100, width: 240, zIndex: 9999 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.12)" }}>
            <div style={{ height: 148, overflow: "hidden" }}>
              <img src={preview.imgUrl} alt={preview.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
            </div>
            <div style={{ padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, justifyContent: "space-between" }}>
              <span style={{ color: "#F7F4EF", fontSize: 13, fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {preview.title}
              </span>
              <ArrowUpRight size={13} style={{ color: "rgba(247,244,239,0.4)", flexShrink: 0 }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
