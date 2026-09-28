import { Camera, PartyPopper, Star, Zap } from "lucide-react";

const STATS = [
  { Icon: Camera, value: "50rb+", label: "Sesi foto tercetak" },
  { Icon: PartyPopper, value: "1.200+", label: "Acara sudah terlayani" },
  { Icon: Star, value: "4,9/5", label: "Rata-rata ulasan pengguna" },
  { Icon: Zap, value: "5 detik", label: "Dari jepretan sampai cetak" },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-14 px-5">
      <div className="glass mx-auto grid max-w-5xl grid-cols-2 gap-y-8 rounded-[2rem] px-6 py-8 sm:px-10 lg:grid-cols-4 lg:divide-x lg:divide-brand-200/70">
        {STATS.map(({ Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4 lg:justify-center lg:px-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-600">
              <Icon size={22} />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold text-brand-950">{value}</p>
              <p className="text-sm text-brand-900/65">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
