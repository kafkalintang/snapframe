import { Palette, Share2, Smile, Timer } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    Icon: Palette,
    title: "Pilih frame",
    text: "Tamu memilih frame dan filter favorit dari layar sentuh.",
  },
  {
    Icon: Timer,
    title: "Tekan mulai",
    text: "Hitung mundur tiga detik memberi waktu untuk bersiap.",
  },
  {
    Icon: Smile,
    title: "Berpose",
    text: "Kamera mengambil empat foto berurutan, semua langsung tampil di layar.",
  },
  {
    Icon: Share2,
    title: "Cetak dan bagikan",
    text: "Strip foto tercetak, dan kode QR muncul untuk diunduh ke HP.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="relative overflow-hidden bg-brand-950 py-28 text-white">
      <div aria-hidden="true" className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-400/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          light
          title="Dari antre sampai foto di tangan, hanya empat langkah"
          description="Alurnya sengaja dibuat sederhana supaya tamu dari segala usia bisa memakainya sendiri."
        />

        <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-9 hidden border-t-2 border-dashed border-brand-500/50 lg:block"
          />
          {STEPS.map(({ Icon, title, text }, i) => (
            <li key={title} className="relative text-center">
              <div className="relative mx-auto grid h-[72px] w-[72px] place-items-center rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow ring-8 ring-brand-950">
                <Icon size={30} />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-white font-display text-sm font-extrabold text-brand-700">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-extrabold">{title}</h3>
              <p className="mx-auto mt-2 max-w-[16rem] leading-relaxed text-brand-200">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
