import Image from "next/image";
import { profile } from "@/lib/profile";

export function Headshot() {
  const { src, alt } = profile.headshot;

  return (
    <figure className="hero-headshot">
      <div className="headshot-frame">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 440px) 88px, 120px"
            unoptimized
          />
        ) : (
          <div className="headshot-empty">
            <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
              <circle cx="40" cy="33" r="15" />
              <path d="M13 91V82C13 67 25 57 40 57S67 67 67 82V91" />
            </svg>
            <span>Your photo here</span>
          </div>
        )}
      </div>
      {!src ? <figcaption>Headshot placeholder</figcaption> : null}
    </figure>
  );
}
