import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section - navbar arkasına uzanmak için -mt-20 */}
      <section className="relative w-full h-screen overflow-hidden -mt-20">
        <style>{`
          @keyframes heroZoomOut {
            from { transform: scale(1.10); }
            to   { transform: scale(1.00); }
          }
          .hero-bg {
            animation: heroZoomOut 6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        `}</style>

        {/* Arka Plan Görseli */}
        <div className="hero-bg absolute inset-0 w-full h-full">
          <Image
            src="/images/image.png"
            alt="6 Sigma Eğitim Kurumu"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Karartma Katmanı */}
        <div className="absolute inset-0 bg-[#0d1b4a]/65" />

        {/* İçerik */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl w-full text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
              Zirveye Ulaşanların
              <br />
              <span className="text-[#e53935]">Buluşma Noktası</span>
            </h1>
            <p className="text-white/85 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Elazığ&apos;ın en köklü eğitim kurumunda, uzman kadromuz ve birebir koçluk sistemiyle YKS ve LGS&apos;de hedeflerinize birlikte ulaşalım.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/yks" className="bg-[#e53935] text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-red-900/30">
                YKS Programları <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link href="/lgs" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2">
                LGS Programları <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Bizi Tercih Etmelisiniz? */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <h2 className="text-primary text-3xl lg:text-5xl font-black tracking-tight uppercase">Neden Bizi Tercih Etmelisiniz?</h2>
            <div className="h-1.5 w-24 bg-accent-gold rounded-full"></div>
            <p className="text-slate-500 max-w-2xl text-lg mt-2">Başarıya giden yolda ihtiyacınız olan her şeyi bir araya getirdik.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:bg-primary/[0.02] transition-all flex flex-col gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">restaurant</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Açık Büfe Ders Ortamı</h3>
              <p className="text-slate-500 leading-relaxed text-sm">Esnek ve verimli ders çalışma alanları ile her öğrenciye özel çalışma imkanı sunuyoruz.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:bg-primary/[0.02] transition-all flex flex-col gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">auto_stories</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Lüks Kütüphane &amp; Etüt Salonları</h3>
              <p className="text-slate-500 leading-relaxed text-sm">Sessiz, modern ve konforlu ortamlarımızla odaklanma sorununuzu ortadan kaldırıyoruz.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:bg-primary/[0.02] transition-all flex flex-col gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">query_stats</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Zengin Deneme Ağı</h3>
              <p className="text-slate-500 leading-relaxed text-sm">Türkiye geneli geniş kapsamlı sınav simülasyonları ile seviyenizi anlık görün.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:bg-primary/[0.02] transition-all flex flex-col gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">smart_toy</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">AI Destekli Karne Analizi</h3>
              <p className="text-slate-500 leading-relaxed text-sm">Yapay zeka algoritmalarımızla eksiklerinizi nokta atışı belirliyor ve yol haritası çiziyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Başarı Özeti */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-blue-900 p-10 lg:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="flex flex-col gap-4 text-center lg:text-left z-10">
              <span className="bg-accent-gold/20 text-accent-gold px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest border border-accent-gold/30 w-fit mx-auto lg:mx-0">Başarı Özeti</span>
              <h2 className="text-4xl lg:text-5xl font-black">2023&apos;te 45 Tıp Fakültesi Kazanımı!</h2>
              <p className="text-white/80 text-lg">Türkiye&apos;nin en seçkin üniversitelerine binlerce öğrenci yerleştirdik.</p>
            </div>
            <Link href="/basarilarimiz" className="group z-10 flex items-center gap-4 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-gold hover:text-white transition-all">
              Tüm Başarılarımızı Gör
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
            <div className="absolute right-0 top-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </section>

      {/* Güncel Duyurular (Vitrin) */}
      <section className="py-24 px-6 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-primary text-3xl font-black uppercase">Güncel Duyurular</h2>
              <div className="h-1 w-16 bg-accent-red rounded-full"></div>
            </div>
            <Link href="/duyurular" className="text-primary font-bold hover:underline flex items-center gap-1">
              Tüm Duyurular <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Duyuru Kartı 1 */}
            <Link href="/duyurular" className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 group block hover:shadow-md transition-all">
              <div className="h-48 rounded-xl bg-slate-100 mb-6 overflow-hidden relative">
                <Image
                  src="/images/homepage_announcement_exam.png"
                  alt="Examination papers and pencil"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-4 pb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">Sınav Kayıt</span>
                  <span className="text-slate-400 text-xs font-medium">15 Mart 2024</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                  Mart Ayı Türkiye Geneli Deneme Kayıtları Başladı!
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">
                  Gerçek sınav provası için yerinizi hemen ayırtın. Son başvuru tarihini kaçırmayın.
                </p>
              </div>
            </Link>

            {/* Duyuru Kartı 2 */}
            <Link href="/duyurular" className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 group block hover:shadow-md transition-all">
              <div className="h-48 rounded-xl bg-slate-100 mb-6 overflow-hidden relative">
                <Image
                  src="/images/homepage_announcement_seminar.png"
                  alt="Student consultation session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-4 pb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent-red/10 text-accent-red text-xs font-bold px-3 py-1 rounded-full uppercase">Rehberlik</span>
                  <span className="text-slate-400 text-xs font-medium">12 Mart 2024</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                  Sınav Kaygısı ve Motivasyon Semineri
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">
                  Uzman psikoloğumuz eşliğinde gerçekleşecek olan seminerimiz tüm öğrencilerimize açıktır.
                </p>
              </div>
            </Link>

            {/* Duyuru Kartı 3 */}
            <Link href="/duyurular" className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 group block hover:shadow-md transition-all">
              <div className="h-48 rounded-xl bg-slate-100 mb-6 overflow-hidden relative">
                <Image
                  src="/images/homepage_announcement_camp.png"
                  alt="Students working together"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-4 pb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent-gold/10 text-accent-gold text-xs font-bold px-3 py-1 rounded-full uppercase">Yeni Dönem</span>
                  <span className="text-slate-400 text-xs font-medium">10 Mart 2024</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                  Yaz Kampı Kayıtlarımız Erken Dönem Avantajıyla!
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">
                  Gelecek yılın hazırlıklarına erkenden başlayın, avantajlı fiyatlardan yararlanın.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
