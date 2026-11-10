import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-intro not-found">
      <h1>Page not found</h1>
      <p>That page isn’t here. Let’s get you back to the work.</p>
      <Link href="/" className="pill-link">Back home</Link>
    </div>
  );
}
