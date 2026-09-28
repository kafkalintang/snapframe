"use client";

import { useRef, type PointerEvent } from "react";
import { Camera, Heart, Share2, Smile, Sparkles, Star, Timer, User, Users, type LucideIcon } from "lucide-react";
import Cube from "./Cube";
import { SITE } from "@/lib/site";

const REST = "rotateX(8deg) rotateY(-18deg)";

const STRIP_TILES: { Icon: LucideIcon; tone: string }[] = [
  { Icon: Smile, tone: "from-sky-200 to-sky-400" },
  { Icon: Users, tone: "from-blue-200 to-blue-400" },
  { Icon: Heart, tone: "from-cyan-200 to-sky-400" },
  { Icon: Star, tone: "from-indigo-200 to-blue-400" },
];

export default function Hero3D() {
  const sceneRef = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    scene.style.transform = `rotateX(${8 - py * 16}deg) rotateY(${-18 + px * 28}deg)`;
  };

  const onLeave = () => {
    if (sceneRef.current) sceneRef.current.style.transform = REST;
  };

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex h-[540px] w-full max-w-[520px] items-center justify-center"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {/* Cahaya latar */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/40 blur-3xl" />

      <div className="scale-[0.78] sm:scale-100">
        <div style={{ perspective: "1400px" }}>
          <div
            ref={sceneRef}
            className="preserve-3d relative h-[460px] w-[300px] transition-transform duration-200 ease-out"
            style={{ transform: REST }}
          >
            {/* Bayangan lantai */}
            <div
              className="absolute -bottom-10 left-4 right-4 h-10 rounded-full bg-brand-950/40 blur-2xl"
              style={{ transform: "translateZ(-30px)" }}
            />

            {/* Ketebalan bodi booth */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-[2.5rem] bg-brand-800"
                style={{ transform: `translateZ(${-(i + 1) * 6}px)`, filter: `brightness(${1 - i * 0.05})` }}
              />
            ))}

            {/* Muka depan booth */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/40 bg-gradient-to-b from-brand-400 via-brand-500 to-brand-700 shadow-deep">
              <div className="absolute inset-x-6 top-5 flex items-center justify-center gap-2 rounded-2xl bg-white/15 py-2.5 text-xs font-bold tracking-[0.3em] text-white ring-1 ring-white/25">
                <Camera size={14} />
                PHOTOBOOTH
              </div>

              {/* Layar bidik */}
              <div className="absolute inset-x-5 top-[76px] h-[236px] overflow-hidden rounded-3xl bg-brand-950 ring-4 ring-white/30">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-brand-400 to-brand-700" />
                <div className="absolute -bottom-6 left-5 grid h-32 w-24 place-items-center rounded-t-full bg-brand-950/35 text-white/90">
                  <User size={52} strokeWidth={1.5} />
                </div>
                <div className="absolute -bottom-6 right-5 grid h-40 w-28 place-items-center rounded-t-full bg-brand-950/45 text-white/90">
                  <User size={62} strokeWidth={1.5} />
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-8xl font-extrabold text-white drop-shadow-[0_8px_24px_rgba(6,36,75,0.5)]">
                    3
                  </span>
                </div>
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
                  LIVE
                </div>
                <span className="absolute left-3 bottom-3 h-5 w-5 rounded-bl-md border-b-2 border-l-2 border-white/80" />
                <span className="absolute right-3 bottom-3 h-5 w-5 rounded-br-md border-b-2 border-r-2 border-white/80" />
                <span className="absolute right-3 top-3 h-5 w-5 rounded-tr-md border-r-2 border-t-2 border-white/80" />
                {/* Kilatan blitz */}
                <div className="absolute inset-0 animate-flash bg-white" />
              </div>

              {/* Panel tombol */}
              <div className="absolute inset-x-5 bottom-5 flex h-[112px] items-center justify-between rounded-3xl bg-white/15 px-6 ring-1 ring-white/30">
                <div className="space-y-2">
                  <div className="h-2.5 w-14 rounded-full bg-white/60" />
                  <div className="h-2.5 w-9 rounded-full bg-white/35" />
                </div>
                <div className="grid h-16 w-16 place-items-center rounded-full bg-white text-brand-600 shadow-xl ring-8 ring-white/25">
                  <Camera size={26} />
                </div>
                <div className="space-y-2">
                  <div className="ml-auto h-2.5 w-14 rounded-full bg-white/60" />
                  <div className="ml-auto h-2.5 w-9 rounded-full bg-white/35" />
                </div>
              </div>
            </div>

            {/* Strip foto melayang */}
            <div className="absolute -right-20 top-16" style={{ transform: "translateZ(110px) rotate(9deg)" }}>
              <div className="animate-float">
                <div className="w-[108px] rounded-lg bg-white p-2 shadow-deep">
                  <div className="space-y-1.5">
                    {STRIP_TILES.map(({ Icon, tone }, i) => (
                      <div
                        key={i}
                        className={`grid h-[66px] place-items-center rounded bg-gradient-to-br ${tone} text-white`}
                      >
                        <Icon size={26} />
                      </div>
                    ))}
                  </div>
                  <p className="pt-2 text-center font-display text-[10px] font-extrabold tracking-wide text-brand-600">
                    {SITE.name}
                  </p>
                </div>
              </div>
            </div>

            {/* Chip melayang */}
            <div className="absolute -left-16 top-24" style={{ transform: "translateZ(140px)" }}>
              <div className="animate-float-slow glass flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-sm font-bold text-brand-800">
                <Sparkles size={16} className="text-brand-500" />
                Filter AI
              </div>
            </div>

            <div className="absolute -left-12 bottom-36" style={{ transform: "translateZ(120px)" }}>
              <div className="animate-float glass flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-sm font-bold text-brand-800">
                <Heart size={16} className="text-brand-500" />
                2.4rb suka
              </div>
            </div>

            <div className="absolute -right-14 bottom-14" style={{ transform: "translateZ(150px)" }}>
              <div className="animate-float-slow glass flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-sm font-bold text-brand-800">
                <Share2 size={16} className="text-brand-500" />
                Kirim ke HP
              </div>
            </div>

            <div className="absolute -right-4 -top-8" style={{ transform: "translateZ(90px)" }}>
              <div className="animate-float grid h-14 w-14 place-items-center rounded-full bg-white text-brand-600 shadow-glow">
                <Timer size={24} />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-20" style={{ transform: "translateZ(70px)" }}>
              <Cube size={56} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
