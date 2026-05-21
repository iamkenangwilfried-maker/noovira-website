"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

/**
 * Hero — Matter.js physics (Sher Agency exact clone):
 *
 * STRUCTURE:
 * • Section = 100vh, position:relative, overflow:hidden
 * • Physics canvas = position:absolute covering full section (behind text)
 * • Stars + H1 + CTAs overlaid with z-index (pointer-events-none except buttons)
 *
 * PHYSICS:
 * • Tags spawn at top of canvas (y: 0 → -some offset) and fall WITH GRAVITY
 * • They land within the hero viewport — no scrolling needed
 * • Tags are DRAGGABLE (MouseConstraint)
 * • Each tag has TEXT BAKED IN via Canvas 2D sprite (pre-rendered)
 * • Colors: varied (white, dark, gray) — not uniform beige
 *
 * INTERACTION:
 * • Hover → preview popup with website screenshot
 * • Click → /realisations/[slug]
 */

const SHOT = (url: string) =>
  `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=480&h=320`;

// Tag color variants — varied palette (white / dark / gray)
const TAG_COLORS = [
  { bg: "#FFFFFF", fg: "#1A1A1A" }, // white
  { bg: "#1A1A1A", fg: "#F7F4EF" }, // dark
  { bg: "#D4D4D4", fg: "#1A1A1A" }, // light gray
  { bg: "#F7F4EF", fg: "#1A1A1A" }, // off-white
  { bg: "#3A3A3A", fg: "#F7F4EF" }, // charcoal
  { bg: "#ABABAB", fg: "#1A1A1A" }, // medium gray
];

/** Pre-render a tag pill to a data URL so text is baked in */
function makeSprite(text: string, bg: string, fg: string, w: number, h: number): string {
  const c = document.createElement("canvas");
  c.width = w * 2; // retina
  c.height = h * 2;
  const ctx = c.getContext("2d")!;
  ctx.scale(2, 2);

  // Rounded rect background
  const r = 10;
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

  // Text
  ctx.fillStyle = fg;
  ctx.font = `600 12.5px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  // Truncate if too long
  const maxW = w - 20;
  let displayText = text;
  while (ctx.measureText(displayText).width > maxW && displayText.length > 4) {
    displayText = displayText.slice(0, -2) + "…";
  }
  ctx.fillText(displayText, w / 2, h / 2);

  return c.toDataURL();
}

interface Preview {
  visible: boolean;
  x: number;
  y: number;
  title: string;
  imgUrl: string;
  slug: string;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

      const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

      const section = sectionRef.current!;
      const canvas = canvasRef.current!;
      const W = section.offsetWidth;
      const H = section.offsetHeight;

      // Set canvas size explicitly
      canvas.width = W;
      canvas.height = H;

      const engine = Engine.create({ gravity: { y: 2.8 } });

      const render = Render.create({
        element: section,
        engine,
        canvas,
        options: {
          width: W,
          height: H,
          wireframes: false,
          background: "transparent",
        },
      });

      // Walls + floor (invisible static bodies)
      const wall = 80;
      const floor = Bodies.rectangle(W / 2, H + wall / 2, W * 4, wall, {
        isStatic: true,
        render: { fillStyle: "transparent", strokeStyle: "transparent", lineWidth: 0 },
        label: "__floor",
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

      // Create tag bodies with pre-rendered sprites
      const tagW = 155;
      const tagH = 42;
      const tagBodies: any[] = [];

      PROJECTS.forEach((project, i) => {
        const color = TAG_COLORS[i % TAG_COLORS.length];
        const sprite = makeSprite(project.title, color.bg, color.fg, tagW, tagH);

        // Spread horizontally, stagger vertically above canvas
        const cols = 4;
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = (col + 0.5) * (W / cols) + (Math.random() - 0.5) * 60;
        const y = -tagH - row * (tagH + 20) - Math.random() * 40;

        const body = Bodies.rectangle(x, y, tagW, tagH, {
          restitution: 0.35,
          friction: 0.4,
          frictionAir: 0.015,
          chamfer: { radius: 10 },
          render: {
            sprite: {
              texture: sprite,
              xScale: 0.5, // because we drew at 2x for retina
              yScale: 0.5,
            },
          },
          label: `tag_${project.slug}`,
        });

        (body as any)._project = project;
        Matter.Body.setAngle(body, (Math.random() - 0.5) * 0.5);
        tagBodies.push(body);
      });

      Composite.add(engine.world, tagBodies);

      // Mouse control
      const mouse = Mouse.create(canvas);
      const mc = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.18, render: { visible: false } },
      });
      Composite.add(engine.world, mc);
      (render as any).mouse = mouse;

      // Hover + click detection
      let lastBody: any = null;
      let mouseDown = { x: 0, y: 0 };

      canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = (e.clientX - rect.left) * (W / rect.width);
        const my = (e.clientY - rect.top) * (H / rect.height);

        let found: any = null;
        for (const b of tagBodies) {
          if (Matter.Bounds.contains(b.bounds, { x: mx, y: my })) {
            found = b;
            break;
          }
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
      canvas.addEventListener("mouseup", (e) => {
        const dist = Math.hypot(e.clientX - mouseDown.x, e.clientY - mouseDown.y);
        if (dist < 6 && lastBody?._project) {
          window.location.href = `/realisations/${lastBody._project.slug}`;
        }
      });

      // Handle resize
      const onResize = () => {
        const nW = section.offsetWidth;
        const nH = section.offsetHeight;
        render.canvas.width = nW;
        render.canvas.height = nH;
        (render.options as any).width = nW;
        (render.options as any).height = nH;
        Matter.Body.setPosition(floor, { x: nW / 2, y: nH + wall / 2 });
        Matter.Body.setPosition(wallR, { x: nW + wall / 2, y: nH / 2 });
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
    return () => {
      cancelled = true;
      cleanupRef.current?.();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="section-dark relative overflow-hidden"
        style={{ height: "100vh", minHeight: "600px", paddingTop: "80px" }}
      >
        {/* Canvas injected here by Matter.js Render (absolute via CSS below) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ top: "80px", height: "calc(100% - 80px)", zIndex: 1 }}
        />

        {/* Text content — above canvas */}
        <div
          className="relative flex flex-col items-center text-center px-6 pt-12 lg:pt-20"
          style={{ zIndex: 10, pointerEvents: "none" }}
        >
          {/* Stars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-text-light tracking-tight leading-[1.05] mb-8 max-w-4xl"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            Nous créons des sites qui{" "}
            <span className="font-black">Remplissent votre Carnet.</span>
          </motion.h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-3"
            style={{ pointerEvents: "auto" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-beige text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-white hover:text-dark transition-all"
            >
              Réserver un appel <ArrowUpRight size={16} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-beige text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-white hover:text-dark transition-all"
            >
              Voir nos réalisations
            </a>
          </motion.div>
        </div>
      </section>

      {/* Preview popup — fixed, outside section so not clipped */}
      {preview.visible && (
        <div
          className="fixed pointer-events-none"
          style={{ left: preview.x + 18, top: preview.y - 90, width: 230, zIndex: 9999 }}
        >
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div style={{ height: 140, overflow: "hidden" }}>
              <img
                src={preview.imgUrl}
                alt={preview.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
              />
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
