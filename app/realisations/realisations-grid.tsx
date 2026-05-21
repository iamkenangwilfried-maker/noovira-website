"use client";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

function shot(url: string) {
  return `https://s.wordpress.com/mshots/v1/https%3A%2F%2F${encodeURIComponent(url)}?w=700&h=480`;
}

function VideoCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <a
      href={`/realisations/${project.slug}`}
      className="group relative rounded-2xl overflow-hidden bg-dark block"
      style={{ height: "360px" }}
      onMouseEnter={() => { videoRef.current?.play(); }}
      onMouseLeave={() => {
        const v = videoRef.current;
        if (v) { v.pause(); v.currentTime = 0; }
      }}
    >
      {/* Static screenshot — fades out on hover */}
      <img
        src={shot(project.url)}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
      />

      {/* Video — fades in on hover */}
      <video
        ref={videoRef}
        src={`/videos/${project.slug}/01.mp4`}
        muted
        playsInline
        loop
        preload="none"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/5" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
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
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-beige flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
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
