import { Building2, Cake, GraduationCap, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";

const CASES = [
  {
    Icon: Heart,
    title: "Pernikahan",
    text: "Tamu pulang membawa strip foto dengan nama pengantin dan tanggal pernikahan.",
  },
  {
    Icon: Cake,
    title: "Ulang tahun dan reuni",
    text: "Frame bertema pesta, stiker lucu, dan galeri bersama yang bisa dibuka semua orang.",
  },
  {
    Icon: GraduationCap,
    title: "Wisuda dan acara kampus",
    text: "Cocok untuk ratusan mahasiswa yang antre. Satu sesi selesai kurang dari satu menit.",
  },
  {
    Icon: Building2,
    title: "Pameran dan brand activation",
    text: "Logo brand di setiap foto, plus data kontak pengunjung yang bisa diekspor setelah acara.",
  },
];

export default function UseCases() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            title="Dipakai di acara besar maupun kecil"
            description="Dari pesta keluarga sampai pameran ribuan pengunjung, SnapBooth menyesuaikan diri dengan skala acaramu."
          />
        </div>

        <ul className="divide-y divide-brand-200 rounded-[2rem] border border-brand-200 bg-white/80 px-2 shadow-sm">
          {CASES.map(({ Icon, title, text }) => (
            <li key={title} className="group flex items-start gap-5 rounded-2xl px-5 py-6 transition hover:bg-brand-50">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-glow">
                <Icon size={26} />
              </span>
              <div>
                <h3 className="font-display text-xl font-extrabold">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-brand-900/70">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
