export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
          Get Started
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Let&apos;s make your next best-performing ad
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-12">
          Send me your product and campaign details. I&apos;ll get back to you
          within 24 hours with a plan.
        </p>

        <div className="max-w-md mx-auto mb-12">
          <a
            href="mailto:ryandoesugc@outlook.com"
            className="glow-card bg-card border border-card-border rounded-2xl p-6 hover:border-accent/30 transition-colors group block"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <p className="font-semibold mb-1 group-hover:text-accent transition-colors">
              Email Me
            </p>
            <p className="text-sm text-muted">ryandoesugc@outlook.com</p>
          </a>
        </div>

        <div className="bg-card border border-card-border rounded-2xl p-8 text-left">
          <h3 className="font-bold text-lg mb-4">What to include:</h3>
          <ul className="space-y-3">
            {[
              "Your brand and product",
              "Campaign goals (awareness, conversions, ROAS target)",
              "Number of videos you need",
              "Timeline",
              "Any brand guidelines or references",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="text-accent mt-0.5">&#8227;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
