const SERVICES = [
  {
    name: "UGC Video Ads",
    description: "High-converting video content optimized for Meta & TikTok ads",
    features: [
      "15–60 second vertical videos (9:16)",
      "Shot and edited for paid media",
      "Multiple hook variants included",
      "3 business day turnaround",
      "Revisions included",
    ],
    popular: true,
  },
  {
    name: "Content Packages",
    description: "Multi-video bundles for brands that need volume",
    features: [
      "3–10+ videos per package",
      "Full creative variety across videos",
      "Best per-video rate",
      "Priority turnaround available",
      "Bulk revisions included",
    ],
    popular: false,
  },
  {
    name: "Ongoing Partnership",
    description: "Consistent content on a recurring basis",
    features: [
      "Weekly or monthly video drops",
      "Dedicated creator relationship",
      "Performance-based iteration",
      "Fastest turnaround tier",
      "Custom terms",
    ],
    popular: false,
  },
];

const ADDONS = [
  "Hook variants (3+ per video)",
  "Usage rights for paid ads",
  "Whitelisting / Spark Ads",
  "Custom aspect ratios",
  "Rush delivery",
];

export default function Rates() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How We Can Work Together
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Every project is scoped to your goals. Tell me what you need and
            I&apos;ll put together a custom plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((svc) => (
            <div
              key={svc.name}
              className={`glow-card bg-card rounded-2xl p-8 flex flex-col relative ${
                svc.popular
                  ? "border-2 border-accent/50"
                  : "border border-card-border"
              }`}
            >
              {svc.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Requested
                </div>
              )}
              <h3 className="text-lg font-bold mb-3">{svc.name}</h3>
              <p className="text-sm text-muted mb-6">{svc.description}</p>
              <ul className="flex-1 space-y-3 mb-8">
                {svc.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <svg
                      className="w-4 h-4 text-accent mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center text-sm font-medium py-3 rounded-full transition-colors ${
                  svc.popular
                    ? "bg-accent hover:bg-accent-dim text-white"
                    : "border border-card-border hover:border-accent/40 text-foreground"
                }`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>

        <div className="bg-card border border-card-border rounded-2xl p-8">
          <h3 className="text-lg font-bold mb-6">Available Add-Ons</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ADDONS.map((addon) => (
              <div
                key={addon}
                className="flex items-center gap-2.5 bg-background/50 rounded-xl px-4 py-3"
              >
                <svg
                  className="w-4 h-4 text-accent shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="text-sm">{addon}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-4">
            No full buyouts. Usage rights are performance-based. Contact me for
            custom pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
