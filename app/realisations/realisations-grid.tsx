"use client";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { useLazyVideo } from "@/hooks/use-lazy-video";

function shot(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=700&h=480`;
}

function VideoCard({ project }: { project: Project }) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useLazyVideo(containerRef as React.RefObject<Element>, videoRef, `/videos/${project.slug}/01.mp4`);

  function handleEnter() { videoRef.current?.play(); }
  function handleLeave() {
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
  }

  return (
    <a
      ref={containerRef}
      href={`/realisations/${project.slug}`}
      className="group relative rounded-2xl overflow-hidden bg-dark block"
      style={{ height: "360px" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Screenshot — fades out on hover */}
      <Image
        src={shot(project.url)}
        alt={project.title}
        fill
        sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 33vw"
        className="object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
        loading="lazy"
        unoptimized
      />

      {/* Video — src injected by IO, plays on hover */}
      <video
        ref={videoRef}
        muted playsInline loop preload="none"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/5 z-10" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
          {project.category}
        </div>
        <div className="flex items-end justify-between gap-3">
          <h3
            className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
          >
            {project.title}
          </h3>
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-beige flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 z-20">
            <ArrowUpRight size={16} className="text-white" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function RealisationsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <VideoCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
