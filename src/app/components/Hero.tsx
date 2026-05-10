export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-400/5 rounded-full blur-[128px]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="animate-fade-up">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-6">
            UGC Creator &middot; Content Strategist
          </p>
        </div>

        <h1 className="animate-fade-up animation-delay-100 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          I create content that{" "}
          <span className="gradient-text">drives sales</span>
        </h1>

        <p className="animate-fade-up animation-delay-200 text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10">
          $4,000+ in commissions earned in my first month on Trybe.
          Over 3 million impressions across campaigns. I make videos that
          convert browsers into buyers.
        </p>

        <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dim text-white font-medium px-8 py-3.5 rounded-full transition-colors text-base"
          >
            See My Work
          </a>
          <a
            href="#rates"
            className="inline-flex items-center justify-center border border-card-border hover:border-accent/40 text-foreground font-medium px-8 py-3.5 rounded-full transition-colors text-base"
          >
            View Rates
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in animation-delay-700 mt-20">
          <div className="w-6 h-10 rounded-full border-2 border-muted/40 mx-auto flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
