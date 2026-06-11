"use client";
import { useEffect, useRef } from "react";

const SPEED = 0.4;

function shot(domain: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(domain)}?w=1200&h=2800`;
}

type Props = {
  domain: string;
  cardHeight: number;
};

export default function TemoignageScroll({ domain, cardHeight }: Props) {
  const imgRef  = useRef<HTMLImageElement>(null);
  const frameId = useRef<number>(0);
  const dir     = useRef<1 | -1>(1);
  const pos     = useRef(0);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    let timerId: ReturnType<typeof setTimeout>;

    function tick() {
      const el = imgRef.current;
      if (!el) return;
      const max = Math.max(0, el.offsetHeight - cardHeight);
      if (max === 0) { frameId.current = requestAnimationFrame(tick); return; }
      pos.current += SPEED * dir.current;
      if (pos.current >= max) { pos.current = max; dir.current = -1; }
      if (pos.current <= 0)   { pos.current = 0;   dir.current =  1; }
      el.style.transform = `translateY(-${pos.current}px)`;
      frameId.current = requestAnimationFrame(tick);
    }

    function start() {
      timerId = setTimeout(() => { frameId.current = requestAnimationFrame(tick); }, 800);
    }

    if (img.complete && img.naturalHeight > 0) start();
    else img.addEventListener("load", start, { once: true });

    return () => {
      clearTimeout(timerId);
      cancelAnimationFrame(frameId.current);
    };
  }, [cardHeight]);

  return (
    <div className="overflow-hidden w-full h-full">
      <img
        ref={imgRef}
        src={shot(domain)}
        alt={domain}
        className="w-full block"
        style={{ willChange: "transform" }}
        loading="eager"
      />
    </div>
  );
}
