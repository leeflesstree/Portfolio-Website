"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore, type PointerEvent } from "react";
import type { Project } from "@/lib/projects";
import { ProjectPreview } from "@/components/project-preview";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function subscribeToVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

function getDocumentVisibility() {
  return document.visibilityState === "visible";
}

function getServerSnapshot() {
  return false;
}

export function MotionGallery({ projects, autoRotate = false }: { projects: Project[]; autoRotate?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flat, setFlat] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(true);
  const [announcement, setAnnouncement] = useState("");
  const gallery = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const rotationWasPaused = useRef<boolean | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeToReducedMotion, getReducedMotion, getServerSnapshot);
  const documentVisible = useSyncExternalStore(subscribeToVisibility, getDocumentVisibility, getServerSnapshot);
  const projectCount = projects.length;
  const currentIndex = projectCount > 0 ? activeIndex % projectCount : 0;
  const project = projects[currentIndex];
  const hasRotation = autoRotate && projectCount > 1;
  const shouldRotate = hasRotation && !paused && !hovered && inView && documentVisible && !reducedMotion;

  useEffect(() => {
    const element = gallery.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [projectCount]);

  useEffect(() => {
    if (!shouldRotate) return;

    const timer = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % projectCount);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [shouldRotate, projectCount]);

  function resetTilt() {
    stage.current?.style.setProperty("--pointer-x", "0deg");
    stage.current?.style.setProperty("--pointer-y", "0deg");
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (flat || reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.current?.style.setProperty("--pointer-x", `${-y * 7}deg`);
    stage.current?.style.setProperty("--pointer-y", `${x * 9}deg`);
  }

  function selectProject(index: number) {
    setActiveIndex(index);
    setAnnouncement(`Selected ${projects[index].title}, project ${index + 1} of ${projectCount}.`);
  }

  if (!project) return null;

  return (
    <div
      className="motion-gallery"
      ref={gallery}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project collection"
      onPointerEnter={event => { if (event.pointerType !== "touch") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setPaused(true)}
    >
      {hasRotation ? <div className="gallery-rotation-control">
        <button
          className="rotation-button"
          type="button"
          disabled={reducedMotion}
          aria-controls="gallery-preview"
          aria-describedby="gallery-rotation-status"
          onPointerDown={() => { rotationWasPaused.current = paused; }}
          onPointerCancel={() => { rotationWasPaused.current = null; }}
          onClick={event => {
            // Pointer focus pauses first; retain the action the user clicked.
            const previousPause = event.detail > 0 ? rotationWasPaused.current : null;
            rotationWasPaused.current = null;
            setPaused(value => previousPause === null ? !value : !previousPause);
          }}
        >{reducedMotion ? "Rotation off" : paused ? "Resume rotation" : "Pause rotation"}</button>
      </div> : null}
      <div className="gallery-stage" ref={stage} data-theme={project.theme} data-flat={flat} onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
        <div className="gallery-layer gallery-layer-back" aria-hidden="true" />
        <div className="gallery-layer gallery-layer-middle" aria-hidden="true" />
        <div className="gallery-front" id="gallery-preview" role="group" aria-roledescription="slide" aria-label={`${currentIndex + 1} of ${projectCount}: ${project.title}`}>
          <div className="gallery-preview-enter" key={project.slug}><ProjectPreview project={project} /></div>
          <Link className="gallery-open" href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}><span>Explore the project</span><span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <p className="gallery-caption"><span className="eyebrow">Collection / {String(currentIndex + 1).padStart(2, "0")}</span><span>{project.title}</span></p>
      <div className="gallery-controls">
        <div className="gallery-picker" role="group" aria-label="Choose a project">
          {projects.map((item, index) => <button key={item.slug} type="button" aria-label={`Show ${item.title}`} aria-pressed={index === currentIndex} aria-controls="gallery-preview" onClick={() => selectProject(index)}>{String(index + 1).padStart(2, "0")}</button>)}
        </div>
        <div className="gallery-transport">
          <button className="depth-button" type="button" aria-pressed={flat} onClick={() => { resetTilt(); setFlat(value => !value); }}><span className="layers-symbol" aria-hidden="true">◇</span>{flat ? "Bring back the depth" : "Flatten the layers"}</button>
        </div>
      </div>
      {hasRotation ? <p className="sr-only" id="gallery-rotation-status">{reducedMotion ? "Automatic rotation is off to respect your reduced-motion setting." : paused ? "Automatic rotation is paused. Use Resume rotation to start it again." : "Projects rotate every six seconds. Focusing a control stops rotation until you resume it. Hovering or hiding the gallery pauses it temporarily."}</p> : null}
      <p className="sr-only" role="status" aria-atomic="true">{announcement}</p>
    </div>
  );
}
