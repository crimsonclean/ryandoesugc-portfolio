const BRANDS = [
  "Huron",
  "Liftoff",
  "Rone Nutrition",
  "Nakie",
  "Roll",
  "Reality Racing",
  "HiStrips",
  "Spotr",
  "Runnr Active",
  "Menerals",
  "Slurp",
  "Byble",
  "Three Nails",
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            Trusted By
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Brands I&apos;ve Worked With
          </h2>
          <p className="text-muted">50+ brand partnerships and counting</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="glow-card group bg-card border border-card-border rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-accent/30 transition-colors min-h-[100px]"
            >
              <div className="w-10 h-10 rounded-xl bg-card-border/60 flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                <span className="text-base font-bold text-muted group-hover:text-accent transition-colors">
                  {brand[0]}
                </span>
              </div>
              <p className="font-semibold text-sm">{brand}</p>
            </div>
          ))}
          <div className="glow-card bg-card border border-card-border rounded-2xl p-5 flex items-center justify-center text-center min-h-[100px]">
            <p className="text-sm text-muted font-medium">+ many more</p>
          </div>
        </div>
      </div>
    </section>
  );
}
