"use client";

import Link from "next/link";
import { useRef, useState, type PointerEvent } from "react";
import type { Project } from "@/lib/projects";
import { ProjectPreview } from "@/components/project-preview";

export function MotionGallery({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flat, setFlat] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const project = projects[activeIndex];

  function resetTilt() {
    stage.current?.style.setProperty("--pointer-x", "0deg");
    stage.current?.style.setProperty("--pointer-y", "0deg");
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (flat || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.current?.style.setProperty("--pointer-x", `${-y * 7}deg`);
    stage.current?.style.setProperty("--pointer-y", `${x * 9}deg`);
  }

  if (!project) return null;

  return (
    <div className="motion-gallery" aria-label="Featured project gallery">
      <div className="gallery-stage" ref={stage} data-theme={project.theme} data-flat={flat} onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
        <div className="gallery-layer gallery-layer-back" aria-hidden="true" />
        <div className="gallery-layer gallery-layer-middle" aria-hidden="true" />
        <div className="gallery-front" id="gallery-preview">
          <div className="gallery-preview-enter" key={project.slug}><ProjectPreview project={project} /></div>
          <Link className="gallery-open" href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}><span>Explore the project</span><span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="gallery-controls">
        <div className="gallery-picker" aria-label="Choose a featured project">
          {projects.map((item, index) => <button key={item.slug} type="button" aria-label={`Show ${item.title}`} aria-pressed={index === activeIndex} aria-controls="gallery-preview" onClick={() => setActiveIndex(index)}>{String(index + 1).padStart(2, "0")}</button>)}
        </div>
        <button className="depth-button" type="button" aria-pressed={flat} onClick={() => { resetTilt(); setFlat(!flat); }}><span className="layers-symbol" aria-hidden="true">◇</span>{flat ? "Bring back the depth" : "Flatten the layers"}</button>
      </div>
      <p className="sr-only" role="status">Showing {project.title}, project {activeIndex + 1} of {projects.length}.</p>
    </div>
  );
}
