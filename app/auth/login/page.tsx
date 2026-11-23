
import React, { useState } from "react";
import {
  Camera,
  QrCode,
  Heart,
  Sparkles,
  Smile,
  Lock,
  Mail,
  ArrowRight,
  Aperture,
} from "lucide-react";

export default function LoginSnapFrame() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: logic login
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-4">
      <div className="w-full max-w-5xl h-[680px] flex bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* ===== KIRI: FORM ===== */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Aperture className="w-5 h-5 text-blue-500" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-extrabold text-slate-800">
              Snap<span className="text-blue-500">Frame</span>
            </span>
          </div>

          <h1 className="text-4xl font-extrabold text-slate-800 leading-tight mb-3">
            Masuk ke <br />
            <span className="text-blue-500">SnapFrame</span> kamu.
          </h1>
          <p className="text-slate-500 mb-8 text-sm leading-relaxed">
            Kelola booth, pilih frame, dan lihat hasil foto tamu dalam satu
            dashboard yang simpel.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="kamu@email.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-slate-100 bg-slate-50 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-slate-100 bg-slate-50 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm transition shadow-lg shadow-blue-200"
            >
              Masuk
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-sm text-slate-400 mt-6">
            Belum punya akun?{" "}
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              Daftar gratis
            </a>
          </p>
        </div>

        {/* ===== KANAN: VISUAL ===== */}
        <div className="hidden md:flex flex-1 relative bg-gradient-to-br from-blue-50 to-blue-100 items-center justify-center overflow-hidden">
          {/* Blob dekorasi */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-200/40 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl" />

          {/* Kartu utama ala frame foto */}
          <div className="relative w-64 aspect-[3/4] bg-white rounded-3xl shadow-2xl rotate-[-6deg] flex flex-col items-center justify-center gap-3 border-[6px] border-blue-200">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Smile className="w-8 h-8 text-blue-500" strokeWidth={2.2} />
            </div>
            <p className="text-sm font-bold text-slate-700">Senyum dulu!</p>
            <p className="text-xs text-slate-400">SnapFrame photobooth</p>
          </div>

          {/* Floating card: Filter AI */}
          <div className="absolute top-24 left-10 bg-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2 animate-[float_6s_ease-in-out_infinite]">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-semibold text-slate-700">Filter AI</span>
          </div>

          {/* Floating card: 2.4rb suka */}
          <div className="absolute bottom-28 left-6 bg-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2 animate-[float_7s_ease-in-out_infinite]">
            <Heart className="w-4 h-4 text-blue-500" fill="currentColor" />
            <span className="text-xs font-semibold text-slate-700">2.4rb suka</span>
          </div>

          {/* Floating icon: QR */}
          <div className="absolute bottom-16 right-10 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-[float_5s_ease-in-out_infinite]">
            <QrCode className="w-5 h-5 text-blue-500" />
          </div>

          {/* Floating icon: Camera */}
          <div className="absolute top-16 right-14 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-[float_8s_ease-in-out_infinite]">
            <Camera className="w-5 h-5 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Keyframes untuk animasi float (Tailwind arbitrary) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}