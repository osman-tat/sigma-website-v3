import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-primary/10">
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
            <h1 className="text-primary text-2xl font-black tracking-tight mt-1">
              6 SIGMA
            </h1>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-slate-700 hover:text-primary font-medium transition-colors"
          >
            Anasayfa
          </Link>
          <Link
            href="/basarilarimiz"
            className="text-slate-700 hover:text-primary font-medium transition-colors"
          >
            Başarılarımız
          </Link>
          <Link
            href="/duyurular"
            className="text-slate-700 hover:text-primary font-medium transition-colors"
          >
            Duyurular
          </Link>
          <Link
            href="/yks"
            className="text-slate-700 hover:text-primary font-medium transition-colors"
          >
            YKS
          </Link>
          <Link
            href="/lgs"
            className="text-slate-700 hover:text-primary font-medium transition-colors"
          >
            LGS
          </Link>
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
