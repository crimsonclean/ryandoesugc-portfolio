import Image from "next/image";

const BRANDS: { name: string; logo?: string; keepColor?: boolean }[] = [
  { name: "Huron", logo: "/logos/huron.png" },
  { name: "Liftoff", logo: "/logos/liftoff.png", keepColor: true },
  { name: "Rone Nutrition", logo: "/logos/rone-nutrition.png" },
  { name: "Nakie", logo: "/logos/nakie.png" },
  { name: "Roll", logo: "/logos/roll.png", keepColor: true },
  { name: "Reality Racing", logo: "/logos/reality-racing.png" },
  { name: "HiStrips", logo: "/logos/histrips.svg" },
  { name: "Spotr", logo: "/logos/spotr.png", keepColor: true },
  { name: "Runnr Active", logo: "/logos/runnr-active.png" },
  { name: "Menerals", logo: "/logos/menerals.png" },
  { name: "Slurp", logo: "/logos/slurp.png" },
  { name: "Byble", logo: "/logos/byble.svg" },
  { name: "Three Nails", logo: "/logos/three-nails.svg" },
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3">
            Social Proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Brands That Use My Content
          </h2>
          <p className="text-muted">50+ brands and counting</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="glow-card group bg-card border border-card-border rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-accent/30 transition-colors min-h-[120px]"
            >
              {brand.logo ? (
                <div className="h-10 w-full flex items-center justify-center mb-3">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={40}
                    className={`max-h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity ${brand.keepColor ? "" : "brightness-0 invert"}`}
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-xl bg-card-border/60 flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                  <span className="text-base font-bold text-muted group-hover:text-accent transition-colors">
                    {brand.name[0]}
                  </span>
                </div>
              )}
              <p className="font-semibold text-sm">{brand.name}</p>
            </div>
          ))}
          <div className="glow-card bg-card border border-card-border rounded-2xl p-5 flex items-center justify-center text-center min-h-[120px]">
            <p className="text-sm text-muted font-medium">+ many more</p>
          </div>
        </div>
      </div>
    </section>
  );
}
