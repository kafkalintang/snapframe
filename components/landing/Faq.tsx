"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  {
    q: "Perangkat apa yang dibutuhkan?",
    a: "Cukup satu tablet, laptop, atau ponsel dengan kamera dan browser modern. Untuk cetak, sambungkan printer lewat USB atau Wi-Fi.",
  },
  {
    q: "Apakah bisa dipakai tanpa internet?",
    a: "Bisa. Foto tetap diambil dan dicetak saat offline, lalu diunggah ke galeri cloud otomatis begitu koneksi kembali.",
  },
  {
    q: "Printer apa saja yang didukung?",
    a: "Printer thermal, dye-sublimation, dan sebagian besar printer inkjet yang mendukung ukuran strip 2x6 inci dan 4x6 inci.",
  },
  {
    q: "Bisakah memakai logo dan desain frame sendiri?",
    a: "Bisa. Unggah file PNG transparan dan atur posisinya. Paket Pro dan Studio mendukung frame tanpa batas.",
  },
  {
    q: "Berapa lama foto tersimpan di galeri?",
    a: "Paket Starter menyimpan foto selama 30 hari, Pro selama 1 tahun, dan Studio selama yang kamu butuhkan.",
  },
  {
    q: "Apakah data tamu aman?",
    a: "Semua foto dienkripsi saat dikirim dan disimpan. Hanya orang yang memiliki tautan galeri yang bisa melihatnya, dan kamu bisa menghapusnya kapan saja.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 pb-28">
      <SectionHeading title="Pertanyaan yang sering diajukan" />

      <div className="mt-12 space-y-3">
        {ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className={`rounded-2xl border bg-white transition ${
                isOpen ? "border-brand-400 shadow-glow" : "border-brand-200"
              }`}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg font-extrabold"
                >
                  {item.q}
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition duration-300 ${
                      isOpen ? "rotate-180 bg-brand-500 text-white" : "bg-brand-100 text-brand-600"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>
              </h3>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 leading-relaxed text-brand-900/70">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
