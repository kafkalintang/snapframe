"use client";

import { useState } from "react";
import { Check, Heart, Smile, Star, Users, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SITE } from "@/lib/site";

type Frame = { id: string; name: string; desc: string; grad: string };

const FRAMES: Frame[] = [
  { id: "ocean", name: "Ocean Wave", desc: "Gradasi biru laut yang segar", grad: "from-sky-300 via-blue-500 to-blue-700" },
  { id: "sky", name: "Sky Classic", desc: "Biru langit yang bersih dan ringan", grad: "from-sky-200 via-sky-400 to-blue-500" },
  { id: "midnight", name: "Midnight Neon", desc: "Biru tua dengan aksen cyan", grad: "from-blue-950 via-blue-700 to-cyan-400" },
  { id: "ice", name: "Ice Crystal", desc: "Biru es yang lembut dan elegan", grad: "from-cyan-100 via-sky-200 to-blue-300" },
  { id: "cobalt", name: "Cobalt Pop", desc: "Kobalt cerah dengan sentuhan ungu", grad: "from-blue-600 via-indigo-500 to-violet-500" },
];

const ICONS: LucideIcon[] = [Smile, Users, Heart, Star];

function Strip({ frame, scale = 1 }: { frame: Frame; scale?: number }) {
  return (
    <div
      className={`w-[132px] rounded-xl bg-gradient-to-b ${frame.grad} p-3 shadow-deep ring-1 ring-white/30`}
      style={{ transform: `scale(${scale})` }}
    >
      <div className="space-y-2">
        {ICONS.map((Icon, i) => (
          <div key={i} className="grid h-[76px] place-items-center rounded-md bg-white/30 text-white ring-1 ring-white/40">
            <Icon size={28} />
          </div>
        ))}
      </div>
      <p className="pt-2.5 text-center font-display text-xs font-extrabold tracking-wide text-white">{SITE.name}</p>
    </div>
  );
}

export default function FrameShowcase() {
  const [active, setActive] = useState(0);
  const left = FRAMES[(active + FRAMES.length - 1) % FRAMES.length];
  const right = FRAMES[(active + 1) % FRAMES.length];
  const current = FRAMES[active];

  return (
    <section id="frame" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading
        title="Frame yang bisa disesuaikan dengan tema acaramu"
        description="Pilih dari koleksi frame biru, atau unggah desainmu sendiri. Pratinjau di sebelah kanan berubah langsung saat kamu memilih."
      />

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div role="radiogroup" aria-label="Pilih frame" className="flex flex-col gap-3">
          {FRAMES.map((frame, i) => {
            const selected = i === active;
            return (
              <button
                key={frame.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 rounded-2xl border p-3.5 text-left transition ${
                  selected
                    ? "border-brand-500 bg-white shadow-glow"
                    : "border-brand-200 bg-white/60 hover:border-brand-300 hover:bg-white"
                }`}
              >
                <span className={`h-14 w-11 shrink-0 rounded-lg bg-gradient-to-b ${frame.grad} ring-1 ring-brand-900/10`} />
                <span className="flex-1">
                  <span className="block font-display text-lg font-extrabold text-brand-950">{frame.name}</span>
                  <span className="block text-sm text-brand-900/65">{frame.desc}</span>
                </span>
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full transition ${
                    selected ? "bg-brand-500 text-white" : "border border-brand-200 text-transparent"
                  }`}
                >
                  <Check size={14} />
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="relative flex min-h-[460px] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-800 to-brand-950 p-8"
          style={{ perspective: "1200px" }}
        >
          <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
          <div className="preserve-3d relative flex items-center justify-center gap-5" style={{ transform: "rotateX(6deg)" }}>
            <div className="hidden opacity-70 sm:block" style={{ transform: "rotateY(28deg) translateZ(-70px)" }}>
              <Strip frame={left} scale={0.88} />
            </div>
            <div style={{ transform: "translateZ(50px)" }}>
              <div key={current.id} className="animate-float">
                <Strip frame={current} scale={1.12} />
              </div>
            </div>
            <div className="hidden opacity-70 sm:block" style={{ transform: "rotateY(-28deg) translateZ(-70px)" }}>
              <Strip frame={right} scale={0.88} />
            </div>
          </div>
          <p className="absolute bottom-5 left-0 right-0 text-center text-sm font-semibold text-brand-200" aria-live="polite">
            Frame terpilih: {current.name}
          </p>
        </div>
      </div>
    </section>
  );
}
