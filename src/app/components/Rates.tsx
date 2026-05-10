const PACKAGES = [
  {
    name: "1 Video",
    price: "$200",
    description: "Single high-converting UGC video",
    features: [
      "15–60 second video",
      "Vertical format (9:16)",
      "3 business day turnaround",
      "1 round of revisions",
      "Raw footage included",
    ],
    popular: false,
  },
  {
    name: "3 Videos",
    price: "$500",
    description: "Multi-video content package",
    features: [
      "3 unique UGC videos",
      "Mix of formats & styles",
      "3 business day turnaround",
      "2 rounds of revisions",
      "Raw footage + B-roll included",
      "Save $100 vs. singles",
    ],
    popular: true,
  },
  {
    name: "5 Videos",
    price: "$700",
    description: "Full campaign content suite",
    features: [
      "5 unique UGC videos",
      "Full creative variety",
      "3 business day turnaround",
      "2 rounds of revisions",
      "Raw footage + B-roll included",
      "Save $300 vs. singles",
    ],
    popular: false,
  },
];

const ADDONS = [
  { name: "Hooks Pack (3 variants)", price: "$75" },
  { name: "Usage rights for paid ads", price: "% of GMV" },
  { name: "Whitelisting / Spark Ads", price: "Varies" },
];

export default function Rates() {
  return (
    <section id="rates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Rates & Packages
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Transparent pricing. Custom packages available for multi-video deals
            and long-term partnerships.
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
                  Best Value
                </div>
              )}
              <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-3xl font-bold gradient-text">
                  {pkg.price}
                </span>
              </div>
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
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-card border border-card-border rounded-2xl p-8">
          <h3 className="text-lg font-bold mb-6">Add-Ons</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {ADDONS.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between bg-background/50 rounded-xl px-4 py-3"
              >
                <span className="text-sm">{addon.name}</span>
                <span className="text-sm font-mono text-accent ml-4 shrink-0">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-4">
            No full buyouts available. Usage rights are performance-based.
          </p>
        </div>
      </div>
    </section>
  );
}
