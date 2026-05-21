"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

/**
 * Hero — Matter.js physics, clone exact de Sher Agency
 *
 * v4 — 3 corrections majeures :
 * ① TAILLE ×2 : tags 480×124px — police 26px bold
 *   → Avec 17 tags de 480px sur 1440px écran = 3 tags/rangée
 *   → Pile finale ~700px de hauteur (couvre 78% du 900px viewport)
 *
 * ② GRAVITÉ RÉDUITE : 3.2 → 1.2
 *   → Tags visibles pendant la chute (0.5-1.5s), pas que le fond
 *
 * ③ SCROLL FIX : wheel passif sans preventDefault
 */

const SHOT = (url: string) =>
  `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=480&h=320`;

// Palette identique à Sher Agency
const TAG_COLORS = [
  { bg: "#C9BAAC", fg: "#1A1A1A" }, // beige brand
  { bg: "#1A1A1A", fg: "#F7F4EF" }, // dark
  { bg: "#FFFFFF", fg: "#1A1A1A" }, // blanc
  { bg: "#EDE8E2", fg: "#1A1A1A" }, // beige clair
  { bg: "#8B7F75", fg: "#F7F4EF" }, // beige foncé
  { bg: "#F7F4EF", fg: "#1A1A1A" }, // off-white
];

function makeSprite(text: string, bg: string, fg: string, w: number, h: number): string {
  const c = document.createElement("canvas");
  c.width = w * 2;
  c.height = h * 2;
  const ctx = c.getContext("2d")!;
  ctx.scale(2, 2);

  // Pill shape
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
  ctx.font = `700 26px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const maxW = w - 56;
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

      const engine = Engine.create({ gravity: { y: 1.2 } });

      const render = Render.create({
        element: section,
        engine,
        canvas,
        options: { width: W, height: H, wireframes: false, background: "transparent" },
      });

      // Boundaries
      const wall = 60;
      const floor = Bodies.rectangle(W / 2, H + wall / 2, W * 4, wall, {
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
      // 480×124 px (2× bigger) — 3 colonnes — pile finale ~700px de hauteur
      const tagW = 480;
      const tagH = 124;
      const tagBodies: any[] = [];

      PROJECTS.forEach((project, i) => {
        const color  = TAG_COLORS[i % TAG_COLORS.length];
        const sprite = makeSprite(project.title, color.bg, color.fg, tagW, tagH);

        // 3 colonnes pour les tags de 480px
        const cols = 3;
        const col  = i % cols;
        const row  = Math.floor(i / cols);

        // Distribués sur toute la largeur, ±25% aléatoire par colonne
        const x = (col + 0.5) * (W / cols) + (Math.random() - 0.5) * (W / cols * 0.5);

        // Spawn réparti sur toute la hauteur visible :
        // 6 rangées × (124+24px) ≈ 888px → couvre tout le 100vh
        // Visibles immédiatement dès le chargement, tombent lentement
        const y = H * 0.08 + row * (tagH + 24) + Math.random() * 18;

        const body = Bodies.rectangle(x, y, tagW, tagH, {
          restitution: 0.18,
          friction: 0.7,
          frictionAir: 0.04,
          chamfer: { radius: tagH / 2 },
          render: {
            sprite: { texture: sprite, xScale: 0.5, yScale: 0.5 },
          },
          label: `tag_${project.slug}`,
        });

        (body as any)._project = project;
        Body.setAngle(body, (Math.random() - 0.5) * 0.35);
        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 3,
          y: Math.random() * 1.5 + 0.5,
        });
        tagBodies.push(body);
      });

      Composite.add(engine.world, tagBodies);

      // ── MOUSE DRAG ──
      const mouse = Mouse.create(canvas);
      const mc    = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.18, render: { visible: false } },
      });
      Composite.add(engine.world, mc);
      (render as any).mouse = mouse;

      // ── FIX SCROLL ──
      // Matter.js ajoute wheel/mousewheel/DOMMouseScroll qui appellent
      // event.preventDefault() → bloque le scroll de la page.
      // On remplace mouse.mousewheel par un handler passif (no preventDefault).
      const noopWheel = (event: Event) => {
        const we = event as WheelEvent;
        (mouse as any).wheelDelta = Math.max(-1, Math.min(1, we.deltaY || -(we as any).wheelDelta || (we as any).detail));
        // PAS de event.preventDefault() ici → scroll page autorisé
      };

      // Retirer tous les listeners wheel de Matter.js (noms anciens + nouveau)
      const m = mouse as any;
      canvas.removeEventListener("wheel",          m.mousewheel);
      canvas.removeEventListener("mousewheel",     m.mousewheel);
      canvas.removeEventListener("DOMMouseScroll", m.mousewheel);

      // Remplacer par notre version passive
      m.mousewheel = noopWheel;
      canvas.addEventListener("wheel", noopWheel, { passive: true });

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
        canvas.removeEventListener("wheel", noopWheel);
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
        style={{ height: "100vh", minHeight: "640px" }}
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

        {/* Texte — paddingTop 100px pour laisser la place à la navbar fixe */}
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
