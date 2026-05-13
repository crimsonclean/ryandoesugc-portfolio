const PACKAGES = [
  {
    name: "Single Video",
    description: "One high-converting UGC video for your brand",
    features: [
      "15–60 second video",
      "Vertical format (9:16)",
      "3 business day turnaround",
      "1 round of revisions",
    ],
    popular: false,
  },
  {
    name: "Multi-Video Package",
    description: "Multiple videos with creative variety",
    features: [
      "3–5 unique UGC videos",
      "Mix of formats & styles",
      "3 business day turnaround",
      "2 rounds of revisions",
      "Bundle discount",
    ],
    popular: true,
  },
  {
    name: "Campaign Suite",
    description: "Full content package for larger campaigns",
    features: [
      "5+ UGC videos",
      "Full creative variety",
      "Priority turnaround",
      "2 rounds of revisions",
      "Best per-video rate",
    ],
    popular: false,
  },
];

const ADDONS = [
  "Hooks Pack (3 hook variants)",
  "Usage rights for paid ads",
  "Whitelisting / Spark Ads",
  "Custom aspect ratios",
  "Rush delivery",
];

export default function Rates() {
  return (
    <section id="rates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What I Offer
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Custom packages tailored to your brand. Reach out for a quote based
            on your campaign goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`glow-card bg-card rounded-2xl p-8 flex flex-col relative ${
                pkg.popular
                  ? "border-2 border-accent/50"
                  : "border border-card-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold mb-3">{pkg.name}</h3>
              <p className="text-sm text-muted mb-6">{pkg.description}</p>
              <ul className="flex-1 space-y-3 mb-8">
                {pkg.features.map((feature) => (
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
                  pkg.popular
                    ? "bg-accent hover:bg-accent-dim text-white"
                    : "border border-card-border hover:border-accent/40 text-foreground"
                }`}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
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
            No full buyouts available. Usage rights are performance-based.
            Contact me for custom pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
