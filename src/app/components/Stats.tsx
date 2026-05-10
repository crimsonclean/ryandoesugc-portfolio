const STATS = [
  { value: "$4K+", label: "Commissions Earned", sublabel: "First month on Trybe" },
  { value: "3M+", label: "Impressions", sublabel: "Across campaigns" },
  { value: "50+", label: "Brands Partnered", sublabel: "And growing" },
  { value: "3 Days", label: "Avg. Turnaround", sublabel: "Fast delivery guaranteed" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`glow-card bg-card border border-card-border rounded-2xl p-6 sm:p-8 text-center animate-fade-up animation-delay-${(i + 1) * 100}`}
            >
              <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base font-medium text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
