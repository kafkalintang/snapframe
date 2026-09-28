import { Camera, Heart, Smile, Sparkles, Star, Zap, type LucideIcon } from "lucide-react";

/** Kubus 3D yang berputar. Harus berada di dalam elemen ber-perspective atau preserve-3d. */
export default function Cube({ size = 64 }: { size?: number }) {
  const half = size / 2;
  const faces: { transform: string; Icon: LucideIcon }[] = [
    { transform: `translateZ(${half}px)`, Icon: Camera },
    { transform: `rotateY(180deg) translateZ(${half}px)`, Icon: Heart },
    { transform: `rotateY(90deg) translateZ(${half}px)`, Icon: Sparkles },
    { transform: `rotateY(-90deg) translateZ(${half}px)`, Icon: Smile },
    { transform: `rotateX(90deg) translateZ(${half}px)`, Icon: Star },
    { transform: `rotateX(-90deg) translateZ(${half}px)`, Icon: Zap },
  ];

  return (
    <div className="preserve-3d animate-spin-cube" style={{ width: size, height: size }}>
      {faces.map(({ transform, Icon }, i) => (
        <div
          key={i}
          className="absolute inset-0 grid place-items-center rounded-xl border border-white/50 bg-gradient-to-br from-brand-300/95 to-brand-600/95 text-white shadow-inner"
          style={{ transform }}
        >
          <Icon size={Math.round(size * 0.42)} />
        </div>
      ))}
    </div>
  );
}
