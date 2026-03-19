import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
      <header className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">Artika Gallery</h1>
        <p className="max-w-2xl text-lg text-slate-200">
          Welcome to the demo site. Your React app is running and deployed successfully.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            className="rounded-lg bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            href="https://github.com/rathiselva29/Artika-canvas-creations"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
          <a
            className="rounded-lg bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            href="https://rathiselva29.github.io/Artika-canvas-creations/"
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub Pages
          </a>
        </div>
      </header>
    </div>
  );
}
