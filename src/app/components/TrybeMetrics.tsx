const METRICS = [
  {
    value: "48.5%",
    label: "Avg Watch Time",
    description: "Nearly half of all viewers watch through the entire video",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "39%",
    label: "Hook Rate",
    description: "4 out of 10 viewers are hooked within the first 3 seconds",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    value: "1%",
    label: "Click Through Rate",
    description: "Consistent CTR driving qualified traffic to product pages",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
  },
];

export default function TrybeMetrics() {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono text-accent tracking-wider uppercase">
              Verified on Trybe
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Content That Performs
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Real engagement metrics from the Trybe platform. These numbers show
            why brands keep coming back.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="glow-card bg-card border border-card-border rounded-2xl p-6 sm:p-8 group hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                  {metric.icon}
                </div>
                <p className="text-sm font-medium text-muted">{metric.label}</p>
              </div>
              <p className="text-4xl sm:text-5xl font-bold gradient-text mb-3">
                {metric.value}
              </p>
              <p className="text-sm text-muted/80 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted/60 mt-8">
          Stats pulled directly from Trybe creator dashboard — updated regularly
        </p>
      </div>
    </section>
  );
}
