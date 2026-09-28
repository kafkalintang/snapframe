import { ArrowRight, MessageCircle } from "lucide-react";
import Cube from "./Cube";

export default function Cta() {
  return (
    <section className="px-5 pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-900 px-6 py-20 text-center text-white shadow-deep sm:px-12">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-25" />
        <div aria-hidden="true" className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

        <div aria-hidden="true" className="absolute left-8 top-10 hidden lg:block" style={{ perspective: "800px" }}>
          <Cube size={72} />
        </div>
        <div aria-hidden="true" className="absolute bottom-10 right-10 hidden lg:block" style={{ perspective: "800px" }}>
          <Cube size={52} />
        </div>

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Acaramu berikutnya pantas punya photobooth sendiri
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
            Buat akun dalam satu menit dan jalankan booth pertamamu hari ini. Tanpa kartu kredit.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/login"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-4 font-bold text-brand-700 shadow-lg transition hover:-translate-y-0.5"
            >
              Buat akun gratis
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#faq"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-white/40 bg-white/10 px-7 py-4 font-bold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <MessageCircle size={18} />
              Tanya dulu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
