"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

/**
 * Hero — Sher Agency exact clone using Matter.js physics:
 * • Tags fall from top with gravity, bounce, stack at bottom
 * • Users can drag tags with mouse
 * • Hover over tag → preview popup with website screenshot
 * • Click tag → navigate to /realisations/[slug]
 */

const SHOT = (url: string) =>
  `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=480&h=320`;

interface PreviewState {
  visible: boolean;
  x: number;
  y: number;
  title: string;
  url: string;
  imgUrl: string;
  slug: string;
}

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<any>(null);
  const renderRef = useRef<any>(null);
  const runnerRef = useRef<any>(null);
  const mouseConstraintRef = useRef<any>(null);
  const bodiesRef = useRef<any[]>([]);
  const animFrameRef = useRef<number>(0);

  const [preview, setPreview] = useState<PreviewState>({
    visible: false, x: 0, y: 0, title: "", url: "", imgUrl: "", slug: "",
  });

  const setupPhysics = useCallback(async () => {
    if (!canvasRef.current || !sceneRef.current) return;

    // Dynamic import to avoid SSR issues
    const Matter = await import("matter-js");
    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;

    const container = sceneRef.current;
    const W = container.offsetWidth;
    const H = container.offsetHeight;

    // Create engine with gravity
    const engine = Engine.create({ gravity: { y: 2.5 } });
    engineRef.current = engine;

    // Create renderer
    const render = Render.create({
      element: container,
      engine,
      canvas: canvasRef.current,
      options: {
        width: W,
        height: H,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio || 1,
      },
    });
    renderRef.current = render;

    // Floor and walls (invisible)
    const thickness = 60;
    const floor  = Bodies.rectangle(W / 2, H + thickness / 2, W * 3, thickness, { isStatic: true, render: { fillStyle: "transparent" }, label: "floor" });
    const wallL  = Bodies.rectangle(-thickness / 2, H / 2, thickness, H * 2, { isStatic: true, render: { fillStyle: "transparent" } });
    const wallR  = Bodies.rectangle(W + thickness / 2, H / 2, thickness, H * 2, { isStatic: true, render: { fillStyle: "transparent" } });
    Composite.add(engine.world, [floor, wallL, wallR]);

    // Create tag bodies
    const tagBodies: any[] = [];
    const tagW = 160;
    const tagH = 44;

    PROJECTS.forEach((project, i) => {
      const x = 80 + Math.random() * (W - 160);
      const y = -80 - i * 60 - Math.random() * 200; // staggered drop from above

      const body = Bodies.rectangle(x, y, tagW, tagH, {
        restitution: 0.5,
        friction: 0.3,
        frictionAir: 0.02,
        chamfer: { radius: 10 },
        render: { fillStyle: "#E8E1D5" },
        label: project.slug,
      });

      // Attach project data to body
      (body as any).projectSlug = project.slug;
      (body as any).projectTitle = project.title;
      (body as any).projectUrl = project.url;

      Body.setAngle(body, (Math.random() - 0.5) * 0.6);
      tagBodies.push(body);
    });

    Composite.add(engine.world, tagBodies);
    bodiesRef.current = tagBodies;

    // Mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Composite.add(engine.world, mouseConstraint);
    mouseConstraintRef.current = mouseConstraint;
    render.mouse = mouse;

    // Hover detection
    let lastHovered: any = null;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = render.canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;

      const allBodies = Composite.allBodies(engine.world);
      let found: any = null;

      for (const b of allBodies) {
        if (b.isStatic || b.label === "floor") continue;
        if (Matter.Bounds.contains(b.bounds, { x: mx, y: my })) {
          found = b;
          break;
        }
      }

      if (found !== lastHovered) {
        lastHovered = found;
        if (found) {
          const slug = found.projectSlug;
          const proj = PROJECTS.find(p => p.slug === slug);
          if (proj) {
            const px = found.position.x / W;
            const py = found.position.y / H;
            // Convert to page coordinates
            const rect2 = render.canvas.getBoundingClientRect();
            const pageX = rect2.left + (found.position.x / W) * rect2.width;
            const pageY = rect2.top + (found.position.y / H) * rect2.height;

            setPreview({
              visible: true,
              x: e.clientX,
              y: e.clientY,
              title: proj.title,
              url: proj.url,
              imgUrl: SHOT(proj.url),
              slug: proj.slug,
            });
          }
        } else {
          setPreview(prev => ({ ...prev, visible: false }));
        }
      } else if (found) {
        // Update position to follow mouse
        setPreview(prev => prev.visible ? { ...prev, x: e.clientX, y: e.clientY } : prev);
      }
    };

    render.canvas.addEventListener("mousemove", handleMouseMove);
    render.canvas.addEventListener("mouseleave", () => {
      setPreview(prev => ({ ...prev, visible: false }));
    });

    // Click to navigate
    let dragStart = { x: 0, y: 0 };
    render.canvas.addEventListener("mousedown", (e) => {
      dragStart = { x: e.clientX, y: e.clientY };
    });
    render.canvas.addEventListener("mouseup", (e) => {
      const dx = Math.abs(e.clientX - dragStart.x);
      const dy = Math.abs(e.clientY - dragStart.y);
      if (dx < 6 && dy < 6 && lastHovered) {
        const slug = lastHovered.projectSlug;
        if (slug) window.location.href = `/realisations/${slug}`;
      }
    });

    // Custom rendering — draw tag labels on canvas
    Events.on(render, "afterRender", () => {
      const ctx = render.context;
      const allBodies = Composite.allBodies(engine.world);
      ctx.save();
      for (const b of allBodies) {
        if (b.isStatic || !(b as any).projectTitle) continue;
        ctx.translate(b.position.x, b.position.y);
        ctx.rotate(b.angle);
        ctx.font = `600 13px Manrope, system-ui, sans-serif`;
        ctx.fillStyle = "#1C1C1C";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText((b as any).projectTitle, 0, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }
      ctx.restore();
    });

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);
    Render.run(render);

    // Handle resize
    const onResize = () => {
      const nW = container.offsetWidth;
      const nH = container.offsetHeight;
      render.canvas.width = nW;
      render.canvas.height = nH;
      render.options.width = nW;
      render.options.height = nH;
      // Move floor
      Matter.Body.setPosition(floor, { x: nW / 2, y: nH + thickness / 2 });
      Matter.Body.setPosition(wallR, { x: nW + thickness / 2, y: nH / 2 });
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      render.canvas.removeEventListener("mousemove", handleMouseMove);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    setupPhysics().then(fn => { cleanup = fn; });
    return () => { cleanup?.(); };
  }, [setupPhysics]);

  return (
    <section
      className="section-dark relative"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      {/* ── Centered text content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 lg:pt-24 pb-10 pointer-events-none">

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-1.5 mb-8"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 fill-yellow-400">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <span className="text-sm text-text-light/50 font-medium">5.0 · Plus de 50+ avis clients</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-text-light tracking-tight leading-[1.05] mb-8 max-w-4xl"
          style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
        >
          Nous créons des sites qui{" "}
          <span className="font-black">Remplissent votre Carnet.</span>
        </motion.h1>

        {/* CTAs — pointer-events re-enabled */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3 pointer-events-auto"
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

      {/* ── Physics canvas — fills remainder of hero ── */}
      <div
        ref={sceneRef}
        className="relative w-full"
        style={{ height: "55vh", minHeight: "340px" }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ cursor: "grab" }}
        />
      </div>

      {/* ── Hover preview popup ── */}
      {preview.visible && (
        <div
          className="fixed z-[200] pointer-events-none"
          style={{
            left: preview.x + 16,
            top: preview.y - 80,
            width: "230px",
          }}
        >
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div style={{ height: "140px", overflow: "hidden" }}>
              <img
                src={preview.imgUrl}
                alt={preview.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
              />
            </div>
            <div style={{ padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
              <span style={{ color: "#F7F4EF", fontSize: "13px", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {preview.title}
              </span>
              <ArrowUpRight size={13} style={{ color: "rgba(247,244,239,0.5)", flexShrink: 0 }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
