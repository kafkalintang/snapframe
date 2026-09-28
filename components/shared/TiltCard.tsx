"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Kelas untuk elemen kartu yang ikut miring (tampilan kartu). */
  className?: string;
  /** Kelas untuk pembungkus luar (grid span, tinggi, dsb). */
  wrapperClassName?: string;
  /** Sudut kemiringan maksimum dalam derajat. */
  max?: number;
};

export default function TiltCard({
  children,
  className = "",
  wrapperClassName = "",
  max = 9,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${-py * max}deg) rotateY(${px * max}deg)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className={`h-full ${wrapperClassName}`} style={{ perspective: "1000px" }}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`preserve-3d h-full transition-transform duration-200 ease-out will-change-transform ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
