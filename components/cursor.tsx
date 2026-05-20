"use client";
import { useEffect, useRef } from "react";

/**
 * Custom cursor — exact Sher Agency implementation:
 * • Small white dot (cursor_dot1) instant position
 * • Larger ring (cursor_dot2) with lerp smoothing
 * • mix-blend-mode: difference on the wrapper → inverts colour over light/dark content
 * • Grows to 82×82px with beige fill + "DRAG" text on [data-cursor="project"] hover
 * • Hidden on touch devices
 */
export default function CustomCursor() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const dot1Ref  = useRef<HTMLDivElement>(null);
  const dot2Ref  = useRef<HTMLDivElement>(null);
  const textRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const wrap  = wrapRef.current;
    const dot1  = dot1Ref.current;
    const dot2  = dot2Ref.current;
    const text  = textRef.current;
    if (!wrap || !dot1 || !dot2 || !text) return;

    // Show cursor elements
    wrap.style.display = "block";

    const mouse  = { x: -400, y: -400 };
    const ring   = { x: -400, y: -400 };
    let raf: number;
    let larger = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // Dot1: instant
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dot1.style.transform = `translate(${mouse.x - 5}px, ${mouse.y - 5}px)`;
    };

    // Dot2: lagged ring
    const tick = () => {
      ring.x = lerp(ring.x, mouse.x, 0.1);
      ring.y = lerp(ring.y, mouse.y, 0.1);
      const half = larger ? 41 : 16;
      dot2.style.transform = `translate(${ring.x - half}px, ${ring.y - half}px)`;
      raf = requestAnimationFrame(tick);
    };

    // Hover detection
    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element).closest("[data-cursor='project']");
      if (el && !larger) {
        larger = true;
        dot2.classList.add("is--larger");
        text.style.opacity = "1";
      } else if (!el && larger) {
        larger = false;
        dot2.classList.remove("is--larger");
        text.style.opacity = "0";
      }
    };

    // Hover on interactive elements — shrink dot
    const onLink = (e: MouseEvent) => {
      const el = e.target as Element;
      const isLink = el.closest("a, button, [role='button']");
      if (isLink) {
        dot1.style.transform += " scale(0.5)";
      }
    };

    tick();
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    /* mix-blend-mode: difference makes the white dot invert whatever's behind it */
    <div
      ref={wrapRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ display: "none", mixBlendMode: "difference" }}
    >
      {/* cursor_dot1 — small instant dot */}
      <div
        ref={dot1Ref}
        className="cursor-dot1"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#ffffff",
          willChange: "transform",
          pointerEvents: "none",
        }}
      />

      {/* cursor_dot2 — large ring, grows on project hover */}
      <div
        ref={dot2Ref}
        className="cursor-dot2"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.55)",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          willChange: "transform",
          pointerEvents: "none",
          transition: "width 0.28s cubic-bezier(.4,0,.2,1), height 0.28s cubic-bezier(.4,0,.2,1), background 0.28s ease, border 0.28s ease",
        }}
      >
        <div
          ref={textRef}
          style={{
            opacity: 0,
            transition: "opacity 0.2s ease",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "0.1em",
            color: "#1C1C1C",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          DRAG
        </div>
      </div>

      <style>{`
        .cursor-dot2.is--larger {
          width: 82px !important;
          height: 82px !important;
          background: #C9BAAC !important;
          border-color: transparent !important;
        }
      `}</style>
    </div>
  );
}
