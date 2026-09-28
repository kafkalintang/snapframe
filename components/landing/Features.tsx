import type { ReactNode } from "react";
import { Aperture, Camera, Check, Cloud, Palette, Printer, QrCode, Wand2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

function IconTile({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`grid h-14 w-14 place-items-center rounded-2xl shadow-glow ${
        dark ? "bg-white text-brand-600" : "bg-gradient-to-br from-brand-400 to-brand-600 text-white"
      }`}
      style={{ transform: "translateZ(56px)" }}
    >
      {children}
    </div>
  );
}

export default function Features() {
  return (
    <section id="fitur" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading
        title="Semua yang dibutuhkan photobooth, dalam satu aplikasi"
        description="Tidak perlu sewa alat mahal. Kamera, cetak, frame, dan galeri sudah menyatu dan siap dipakai di acara apa pun."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-6">
        {/* Kamera */}
        <TiltCard
          wrapperClassName="lg:col-span-4"
          className="relative rounded-[2rem] bg-gradient-to-br from-brand-700 to-brand-950 p-8 text-white shadow-deep sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
            <Aperture size={280} strokeWidth={1} className="absolute -bottom-16 -right-12 text-white/10" />
          </div>
          <IconTile dark>
            <Camera size={26} />
          </IconTile>
          <h3 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl" style={{ transform: "translateZ(30px)" }}>
            Kamera dengan kualitas studio
          </h3>
          <p className="mt-3 max-w-md leading-relaxed text-brand-100/85" style={{ transform: "translateZ(20px)" }}>
            Foto tajam sampai 4K, fokus otomatis ke wajah, dan pencahayaan yang menyesuaikan ruangan. Tamu
            terlihat bagus tanpa perlu pengaturan apa pun.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm font-semibold" style={{ transform: "translateZ(35px)" }}>
            {["Resolusi 4K", "Fokus wajah otomatis", "Timer hitung mundur", "Mode kolase"].map((t) => (
              <li key={t} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 ring-1 ring-white/20">
                <Check size={14} />
                {t}
              </li>
            ))}
          </ul>
        </TiltCard>

        {/* Cetak */}
        <TiltCard
          wrapperClassName="lg:col-span-2"
          className="rounded-[1.5rem] border border-brand-200 bg-white p-7 shadow-sm"
        >
          <IconTile>
            <Printer size={26} />
          </IconTile>
          <h3 className="mt-6 font-display text-xl font-extrabold" style={{ transform: "translateZ(30px)" }}>
            Cetak instan
          </h3>
          <p className="mt-2 leading-relaxed text-brand-900/70" style={{ transform: "translateZ(20px)" }}>
            Terhubung ke printer thermal maupun dye-sublimation. Hasil cetak keluar dalam hitungan detik.
          </p>
        </TiltCard>

        {/* Frame */}
        <TiltCard
          wrapperClassName="lg:col-span-2"
          className="rounded-[1.5rem] bg-brand-100 p-7 ring-1 ring-brand-200"
        >
          <IconTile>
            <Palette size={26} />
          </IconTile>
          <h3 className="mt-6 font-display text-xl font-extrabold" style={{ transform: "translateZ(30px)" }}>
            Frame kustom
          </h3>
          <p className="mt-2 leading-relaxed text-brand-900/70" style={{ transform: "translateZ(20px)" }}>
            Pasang logo, tanggal, dan warna acaramu. Ganti frame kapan saja tanpa menghentikan sesi.
          </p>
        </TiltCard>

        {/* QR */}
        <TiltCard
          wrapperClassName="lg:col-span-2"
          className="rounded-[1.5rem] border border-brand-200 bg-white p-7 shadow-sm"
        >
          <IconTile>
            <QrCode size={26} />
          </IconTile>
          <h3 className="mt-6 font-display text-xl font-extrabold" style={{ transform: "translateZ(30px)" }}>
            Bagikan lewat QR
          </h3>
          <p className="mt-2 leading-relaxed text-brand-900/70" style={{ transform: "translateZ(20px)" }}>
            Tamu memindai kode di layar dan foto langsung tersimpan di HP mereka, tanpa install aplikasi.
          </p>
        </TiltCard>

        {/* AI */}
        <TiltCard
          wrapperClassName="lg:col-span-2"
          className="rounded-[1.5rem] bg-gradient-to-br from-brand-500 to-brand-600 p-7 text-white shadow-glow"
        >
          <IconTile dark>
            <Wand2 size={26} />
          </IconTile>
          <h3 className="mt-6 font-display text-xl font-extrabold" style={{ transform: "translateZ(30px)" }}>
            Filter dan efek AI
          </h3>
          <p className="mt-2 leading-relaxed text-brand-50/90" style={{ transform: "translateZ(20px)" }}>
            Haluskan kulit, ganti latar belakang, atau tambah stiker animasi dengan sekali sentuh.
          </p>
        </TiltCard>

        {/* Cloud */}
        <TiltCard
          wrapperClassName="lg:col-span-6"
          className="flex flex-col gap-6 rounded-[2rem] border border-brand-200 bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <div className="flex items-start gap-5">
            <IconTile>
              <Cloud size={26} />
            </IconTile>
            <div style={{ transform: "translateZ(30px)" }}>
              <h3 className="font-display text-xl font-extrabold">Galeri cloud untuk seluruh acara</h3>
              <p className="mt-2 max-w-xl leading-relaxed text-brand-900/70">
                Semua foto tersimpan otomatis dalam satu galeri. Bagikan tautannya ke panitia dan tamu, lalu
                unduh semuanya sekaligus setelah acara selesai.
              </p>
            </div>
          </div>
          <div className="w-full shrink-0 sm:w-64" style={{ transform: "translateZ(25px)" }}>
            <div className="flex justify-between text-sm font-semibold text-brand-900/70">
              <span>Penyimpanan terpakai</span>
              <span>34 GB / 50 GB</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-brand-100">
              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
