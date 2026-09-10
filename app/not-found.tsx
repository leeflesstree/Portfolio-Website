import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-intro not-found">
      <p className="eyebrow">404 / A small detour</p>
      <h1>A little <em>lost?</em></h1>
      <p>That page isn’t here. Let’s get you back to the work.</p>
      <Link href="/" className="pill-link">Back home <span aria-hidden="true">↗</span></Link>
    </div>
  );
}
