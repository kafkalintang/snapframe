import { ArrowRight, Play, Star, User } from "lucide-react";
import Hero3D from "./Hero3D";

const AVATARS = [
  "from-sky-300 to-blue-500",
  "from-blue-300 to-indigo-500",
  "from-cyan-300 to-sky-500",
  "from-blue-400 to-brand-700",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-32 lg:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-hero-glow absolute inset-0" />
        <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-6">
        <div>
          <h1
            className="animate-rise font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-950 sm:text-5xl lg:text-6xl"
          >
            Masuk booth, tekan satu tombol, foto langsung jadi.
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-brand-900/70"
            style={{ animationDelay: "120ms" }}
          >
            SnapFrame mengubah tablet atau laptop menjadi photobooth lengkap. Tamu berpose, foto tercetak
            dengan frame pilihanmu, dan hasilnya terkirim ke HP mereka lewat QR.
          </p>

          <div className="animate-rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "240ms" }}>
            <a
              href="#harga"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Coba gratis
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#cara-kerja"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-brand-200 bg-white px-6 py-3.5 text-base font-bold text-brand-800 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-brand-600">
                <Play size={12} fill="currentColor" />
              </span>
              Lihat cara kerjanya
            </a>
          </div>

          <div className="animate-rise mt-10 flex items-center gap-4" style={{ animationDelay: "360ms" }}>
            <div className="flex -space-x-3">
              {AVATARS.map((tone, i) => (
                <span
                  key={i}
                  className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-gradient-to-br ${tone} text-white`}
                >
                  <User size={18} />
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-brand-500" aria-label="Rating 4,9 dari 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-0.5 text-sm font-semibold text-brand-900/70">
                Dipakai di lebih dari 1.200 acara
              </p>
            </div>
          </div>
        </div>

        <div className="animate-rise" style={{ animationDelay: "200ms" }}>
          <Hero3D />
        </div>
      </div>
    </section>
  );
}
