const STATS = [
  { value: "685", label: "Active Meta Ads", sublabel: "Running my content right now" },
  { value: "12.5M", label: "Impressions", sublabel: "Eyeballs on my videos" },
  { value: "143.9K", label: "Link Clicks", sublabel: "Real traffic to product pages" },
  { value: "35%", label: "Hook Rate", sublabel: "Stopping the scroll" },
  { value: "1.14%", label: "Click Through Rate", sublabel: "Above industry avg" },
  { value: "4.3s", label: "Avg Watch Time", sublabel: "Holding attention" },
];

export default function Stats() {
  return (
    <section id="results" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            Results
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What My Content Delivers
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            All-time performance across every brand I&apos;ve created for.
            These are real numbers from live ad campaigns.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
