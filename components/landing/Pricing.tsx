import { ArrowRight, Check, Crown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

const PLANS = [
  {
    name: "Starter",
    price: "Rp0",
    period: "selamanya",
    desc: "Untuk mencoba SnapBooth di acara kecil.",
    cta: "Mulai gratis",
    featured: false,
    features: ["1 booth aktif", "30 sesi foto per bulan", "5 frame dasar", "Bagikan lewat QR", "Watermark SnapBooth"],
  },
  {
    name: "Pro",
    price: "Rp149rb",
    period: "per bulan",
    desc: "Pilihan utama untuk fotografer dan penyelenggara acara.",
    cta: "Pilih Pro",
    featured: true,
    features: [
      "3 booth aktif",
      "Sesi foto tanpa batas",
      "50+ frame dan frame kustom",
      "Filter dan efek AI",
      "Cetak instan",
      "Galeri cloud 50 GB",
    ],
  },
  {
    name: "Studio",
    price: "Rp399rb",
    period: "per bulan",
    desc: "Untuk bisnis rental booth dan brand besar.",
    cta: "Hubungi kami",
    featured: false,
    features: ["Booth tanpa batas", "Logo dan domain sendiri", "Analitik dan ekspor data acara", "Dukungan prioritas", "Integrasi API"],
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="bg-gradient-to-b from-brand-100/60 to-brand-50 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          title="Harga yang jelas, tanpa biaya tersembunyi"
          description="Mulai gratis, upgrade kapan pun dibutuhkan. Batalkan langganan kapan saja."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <TiltCard
              key={plan.name}
              max={7}
              wrapperClassName={plan.featured ? "lg:-my-5" : ""}
              className={`relative flex flex-col rounded-[2rem] p-8 ${
                plan.featured
                  ? "bg-gradient-to-b from-brand-500 to-brand-800 text-white shadow-deep"
                  : "border border-brand-200 bg-white shadow-sm"
              }`}
            >
              {plan.featured && (
                <span
                  className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <Crown size={13} />
                  Paling dipilih
                </span>
              )}
              <h3 className="font-display text-2xl font-extrabold" style={{ transform: "translateZ(30px)" }}>
                {plan.name}
              </h3>
              <p className={`mt-1.5 text-sm ${plan.featured ? "text-brand-100" : "text-brand-900/65"}`}>{plan.desc}</p>
              <p className="mt-6 flex items-baseline gap-2" style={{ transform: "translateZ(45px)" }}>
                <span className="font-display text-5xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? "text-brand-100" : "text-brand-900/60"}`}>{plan.period}</span>
              </p>

              <ul className="mt-7 flex-1 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px]">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        plan.featured ? "bg-white text-brand-600" : "bg-brand-100 text-brand-600"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/login"
                className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-bold transition hover:-translate-y-0.5 ${
                  plan.featured
                    ? "bg-white text-brand-700 shadow-lg"
                    : "bg-brand-950 text-white hover:bg-brand-800"
                }`}
                style={{ transform: "translateZ(30px)" }}
              >
                {plan.cta}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
