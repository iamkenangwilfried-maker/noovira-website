"use client";
import { useEffect, useRef, RefObject } from "react";

/**
 * Lazy-load a video using IntersectionObserver.
 * The <video> element has NO src by default.
 * When the container enters the viewport, the src is set → browser can preload metadata.
 * This prevents ALL network activity for off-screen videos.
 */
export function useLazyVideo(
  containerRef: RefObject<Element>,
  videoRef: RefObject<HTMLVideoElement>,
  src: string,
  rootMargin = "200px"
) {
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    let loaded = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded) {
          loaded = true;
          video.src = src;
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [containerRef, videoRef, src, rootMargin]);
}
