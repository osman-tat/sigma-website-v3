"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/sigma_logo.png"
              alt="6 Sigma Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <h1 className={`text-2xl font-black tracking-tight mt-1 transition-colors ${transparent ? "text-white drop-shadow" : "text-[#0d1b4a]"}`}>
              6 SIGMA
            </h1>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { href: "/", label: "Anasayfa" },
            { href: "/basarilarimiz", label: "Başarılarımız" },
            { href: "/duyurular", label: "Duyurular" },
            { href: "/yks", label: "YKS" },
            { href: "/lgs", label: "LGS" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-medium transition-colors ${
                transparent
                  ? "text-white/90 hover:text-white drop-shadow"
                  : "text-slate-700 hover:text-[#0d1b4a]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/deneme-sonuclari"
            className="bg-accent-gold hover:bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-accent-gold/20 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">fact_check</span>
            <span>Deneme Sonucumu Öğren</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
