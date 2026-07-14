export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/95 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>© {new Date().getFullYear()} Tanishka Tawate. Designed for placements and internship success.</p>
        <p className="text-slate-500">Built with React, Tailwind, and accessible design.</p>
      </div>
    </footer>
  )
}
