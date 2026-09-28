import { Camera, Facebook, Instagram, Mail, MapPin, Twitter, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";

const COLUMNS = [
  {
    title: "Produk",
    links: [
      { label: "Fitur", href: "#fitur" },
      { label: "Cara kerja", href: "#cara-kerja" },
      { label: "Frame", href: "#frame" },
      { label: "Harga", href: "#harga" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Panduan penggunaan", href: "#" },
      { label: "Hubungi kami", href: "#" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang kami", href: "#" },
      { label: "Kebijakan privasi", href: "#" },
      { label: "Syarat layanan", href: "#" },
    ],
  },
];

const SOCIALS = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Facebook, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-200">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <a href="#" className="flex items-center gap-2.5 font-display text-lg font-extrabold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600">
              <Camera size={18} />
            </span>
            {SITE.name}
          </a>
          <p className="mt-4 max-w-xs leading-relaxed">
            Aplikasi photobooth untuk semua jenis acara. Foto, cetak, dan bagikan dalam hitungan detik.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-brand-400" />
              halo@snapbooth.id
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={16} className="text-brand-400" />
              Batam, Kepulauan Riau
            </li>
          </ul>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="font-display font-extrabold text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. Hak cipta dilindungi.</p>
          <ul className="flex gap-2">
            {SOCIALS.map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 transition hover:bg-brand-500 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
