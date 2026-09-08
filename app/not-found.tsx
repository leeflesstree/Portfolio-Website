import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-32">
      <p className="font-mono text-sm text-zinc-500">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
        That page doesn&apos;t exist — it may have moved or never been here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium underline underline-offset-4 hover:no-underline"
      >
        Back home
      </Link>
    </div>
  );
}
