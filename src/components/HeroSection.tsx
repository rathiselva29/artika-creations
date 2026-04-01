import React from "react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative z-10">
      <span className="material-icons text-6xl text-[hsl(var(--primary))] mb-4 animate-bounce">brush</span>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        Where <span className="text-[hsl(var(--primary))]">Art</span> Comes Alive
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl text-[hsl(var(--muted-foreground))] mb-10">
        Discover handcrafted paintings that capture emotion, beauty, and passion. Each piece tells a unique story on canvas.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => scrollTo("#gallery")}
          className="px-8 py-3 rounded-full bg-[hsl(var(--primary))] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <span className="material-icons align-middle mr-2 text-lg">collections</span>
          View My Gallery
        </button>
        <button
          onClick={() => scrollTo("#contact")}
          className="px-8 py-3 rounded-full border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] font-semibold hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-300"
        >
          <span className="material-icons align-middle mr-2 text-lg">email</span>
          Contact Me
        </button>
      </div>
    </section>
  );
}
