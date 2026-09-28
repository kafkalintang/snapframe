import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SMALL = [
  {
    name: "Dimas Prakoso",
    role: "Panitia wisuda kampus",
    text: "Antrean 300 mahasiswa habis dalam dua jam. Tidak ada yang menunggu lama, dan semua dapat fotonya.",
  },
  {
    name: "Sari Wulandari",
    role: "Pemilik rental photobooth",
    text: "Sekarang satu tablet cukup untuk satu booth. Modal alat turun banyak, pesanan malah naik.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-500" aria-label="Rating 5 dari 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading title="Cerita dari mereka yang sudah memakainya" />

      <div className="mt-14 grid gap-5 lg:grid-cols-5">
        <figure className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-900 p-8 text-white shadow-deep sm:p-10 lg:col-span-3">
          <Quote size={120} strokeWidth={1} className="absolute -right-4 -top-4 text-white/10" />
          <div>
            <Stars />
            <blockquote className="mt-5 font-display text-2xl font-extrabold leading-snug sm:text-3xl">
              Tamu kami langsung paham cara pakainya tanpa dijelaskan. Pengantin senang, orang tua juga senang
              karena fotonya bisa langsung dikirim ke HP.
            </blockquote>
          </div>
          <figcaption className="mt-8 flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white font-display text-lg font-extrabold text-brand-700">
              RA
            </span>
            <span>
              <span className="block font-bold">Rania Anggraini</span>
              <span className="text-sm text-brand-200">Wedding organizer, Batam</span>
            </span>
          </figcaption>
        </figure>

        <div className="grid gap-5 lg:col-span-2">
          {SMALL.map((t) => (
            <figure key={t.name} className="rounded-[1.5rem] border border-brand-200 bg-white p-7 shadow-sm">
              <Stars />
              <blockquote className="mt-4 leading-relaxed text-brand-900/80">{t.text}</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="block font-bold text-brand-950">{t.name}</span>
                <span className="text-brand-900/60">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
