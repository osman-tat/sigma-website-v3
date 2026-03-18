"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ClassKey = "9" | "10" | "11" | "12" | "mezun" | null;

const classDetails: Record<
  Exclude<ClassKey, null>,
  {
    title: string;
    description: string;
    features: string[];
    highlights: { icon: string; text: string }[];
    hasGallery?: boolean;
    galleryImages?: { src: string; alt: string; caption: string }[];
    isMezun?: boolean;
  }
> = {
  "9": {
    title: "9. Sınıf Programı — Erken Hazırlık",
    description:
      "9. sınıf programımız, öğrencilerin lise hayatına güçlü bir akademik temel kurarak başlamalarını sağlar. YKS'ye yönelik alışkanlıklar bu süreçte kazandırılır. Mantıksal düşünce, temel matematik ve Türkçe becerileri geliştirilerek sağlam bir zemin oluşturulur.",
    features: [
      "Temel Matematik ve Geometri Kampı",
      "Hızlı Okuma ve Anlama Teknikleri",
      "Hafızayı Güçlendirme Seminerleri",
      "Ders Çalışma Planlama Koçluğu",
      "Kişilik ve Meslek Keşfi Atölyeleri",
      "Motivasyon ve Zaman Yönetimi",
    ],
    highlights: [
      { icon: "school", text: "Küçük gruplarda birebir ilgi" },
      { icon: "psychology", text: "Kariyer odaklı rehberlik" },
      { icon: "calendar_month", text: "Yıllık akademik plan" },
    ],
  },
  "10": {
    title: "10. Sınıf Programı — Güçlendirme",
    description:
      "10. sınıf, YKS hazırlığının derinleşmeye başladığı kritik bir dönemdir. 9. sınıf eksikliklerinin giderilmesi ve 10. sınıf müfredatının TYT mantığıyla pekiştirilmesi bu süreçte gerçekleşir. Branş denemeleri ve düzenli problem çözme seansları ile öğrenciler sınav temposuna alıştırılır.",
    features: [
      "TYT Temel Matematik Takviyesi",
      "Türkçe ve Edebiyat Yoğunlaştırma",
      "Fen ve Sosyal Branş Denemeleri",
      "Haftalık Mini Deneme Sınavları",
      "Problem Çözme Stratejileri Atölyesi",
      "Ayrıntılı Karne ve Analiz Raporları",
    ],
    highlights: [
      { icon: "trending_up", text: "Düzenli performans takibi" },
      { icon: "quiz", text: "Haftalık deneme sınavları" },
      { icon: "groups", text: "Akran öğrenme grupları" },
    ],
  },
  "11": {
    title: "11. Sınıf Programı — Yoğunlaştırma",
    description:
      "11. sınıf, AYT temelinin atıldığı en stratejik dönemdir. Haftalık konu tarama testleri ve disiplinli hazırlık programıyla öğrenciler, kritik bir ivme kazanır. Yaz kampı ile tüm 11. sınıf konularının tekrarı yapılarak 12. sınıfa güçlü girilmesi sağlanır.",
    features: [
      "AYT İlk Adım Programı",
      "Yoğun Yaz Kampı (Tüm Branşlar)",
      "Haftalık Konu Tarama Testleri",
      "Biyoloji, Kimya, Fizik Sınavları",
      "Türk Dili ve Edebiyatı Yoğunlaştırma",
      "Deneme Sınavı Çözüm Etütleri",
    ],
    highlights: [
      { icon: "speed", text: "Turbo hazırlık programı" },
      { icon: "event", text: "Yoğun yaz kampı" },
      { icon: "analytics", text: "Konu bazlı analiz sistemi" },
    ],
  },
  "12": {
    title: "12. Sınıf Programı — Final Süreci",
    description:
      "12. sınıf, tüm emeğin taçlandırıldığı final sürecidir. Haftalık Türkiye geneli deneme sınavları, birebir koçluk desteği ve sınav simülasyonları ile öğrenciler hedefe odaklanır. Soru çözüm ofisleri ve 7/24 destek hattı ile hiçbir soru yanıtsız kalmaz.",
    features: [
      "Haftalık Türkiye Geneli Denemeler",
      "Birebir Koçluk ve Mentorluk",
      "Sınav Simülasyonu ve Strateji",
      "Soru Çözüm Ofisi (7 Gün Açık)",
      "Psikolojik Destek ve Sınav Kaygısı Koçluğu",
      "Son Tekrar Yoğun Kampı",
    ],
    highlights: [
      { icon: "military_tech", text: "Elazığ'ın 1 numaralı kursu" },
      { icon: "support_agent", text: "7/24 öğrenci destek hattı" },
      { icon: "emoji_events", text: "200+ tıp fakültesi kazanımı" },
    ],
    hasGallery: true,
    galleryImages: [
      {
        src: "/images/sinif12_calisma.png",
        alt: "12. Sınıf öğrencileri çalışıyor",
        caption: "Yoğun YKS hazırlık seansı",
      },
      {
        src: "/images/mezun_toplu_foto.png",
        alt: "Başarıyla mezun olan öğrenciler",
        caption: "Mezuniyet töreni kutlaması",
      },
    ],
  },
  mezun: {
    title: "Mezun Programı — Hedefi Yakalamak İçin Son Hamle",
    description:
      "Mezun programımız, üniversite sınavında bir kez daha şansını deneyen kararlı öğrenciler için özel olarak tasarlanmıştır. Güçlü bir motivasyon ortamı, deneyimli öğretmen kadrosu ve kapsamlı içerikle mezun öğrencilerimiz her yıl büyük başarılar elde etmektedir.",
    features: [
      "Kişiye Özel Eksik Analizi ve Program",
      "Yoğun TYT + AYT Çalışma Programı",
      "Aylık Psikolojik Motivasyon Seansları",
      "Haftalık Türkiye Geneli Denemeleri",
      "Başarı Hikayeleri ve Rol Model Etkinlikleri",
      "Online + Yüz Yüze Hibrit Seçenek",
    ],
    highlights: [
      { icon: "autorenew", text: "Yeniden başlama gücü" },
      { icon: "workspace_premium", text: "Deneyimli mezun koçları" },
      { icon: "diversity_3", text: "Güçlü mezun topluluğu" },
    ],
    hasGallery: true,
    isMezun: true,
    galleryImages: [
      {
        src: "/images/mezun_toplu_foto.png",
        alt: "Mezunlar toplu fotoğraf",
        caption: "6 Sigma Mezunlar Aile Fotoğrafı — 2024",
      },
      {
        src: "/images/sinif12_calisma.png",
        alt: "Mezun öğrenciler çalışıyor",
        caption: "Hedefe odaklı hazırlık dönemi",
      },
    ],
  },
};

const cards = [
  {
    key: "9" as ClassKey,
    icon: "foundation",
    color: "primary",
    cardBg: "bg-white",
    iconColor: "text-[#1a237e]",
    borderHover: "hover:border-primary/50",
    decorBg: "bg-[#1a237e]/5",
    decorHover: "group-hover:bg-primary/10",
    title: "9. Sınıf",
    subtitle: "Erken Hazırlık",
    desc: "Temel bilimler ve mantık yürütme odaklı, lise hayatına güçlü bir akademik temel ile başlangıç süreci.",
    checks: ["Temel Matematik Kampı", "Hızlı Okuma Teknikleri"],
    checkColor: "text-primary",
    textColor: "text-[#1a237e]",
    subTextColor: "text-[#1a237e]/60",
    listColor: "text-[#1a237e]/80",
    dark: false,
  },
  {
    key: "10" as ClassKey,
    icon: "fitness_center",
    color: "accent-red",
    cardBg: "bg-white",
    iconColor: "text-accent-red",
    borderHover: "hover:border-accent-red/50",
    decorBg: "bg-accent-red/5",
    decorHover: "group-hover:bg-accent-red/10",
    title: "10. Sınıf",
    subtitle: "Güçlendirme",
    desc: "9. sınıf eksikliklerinin giderilmesi ve 10. sınıf müfredatının TYT mantığı ile pekiştirilmesi süreci.",
    checks: ["Branş Denemeleri", "Problem Çözme Stratejileri"],
    checkColor: "text-accent-red",
    textColor: "text-[#1a237e]",
    subTextColor: "text-[#1a237e]/60",
    listColor: "text-[#1a237e]/80",
    dark: false,
  },
  {
    key: "11" as ClassKey,
    icon: "speed",
    color: "navy",
    cardBg: "bg-white",
    iconColor: "text-[#1a237e]",
    borderHover: "hover:border-[#1a237e]/50",
    decorBg: "bg-[#1a237e]/5",
    decorHover: "group-hover:bg-[#1a237e]/10",
    title: "11. Sınıf",
    subtitle: "Yoğunlaştırma",
    desc: "AYT temelinin atıldığı, haftalık konu tarama testleri ile disiplinli bir hazırlık dönemidir.",
    checks: ["AYT İlk Adım Programı", "Yaz Kampı Programı"],
    checkColor: "text-[#1a237e]",
    textColor: "text-[#1a237e]",
    subTextColor: "text-[#1a237e]/60",
    listColor: "text-[#1a237e]/80",
    dark: false,
  },
  {
    key: "12" as ClassKey,
    icon: "military_tech",
    color: "primary",
    cardBg: "bg-[#0d1b4a]",
    iconColor: "text-primary",
    borderHover: "hover:shadow-[#1a237e]/40",
    decorBg: "bg-white/5",
    decorHover: "group-hover:bg-primary/20",
    title: "12. Sınıf & Mezun",
    subtitle: "Final",
    desc: "Sınav simülasyonları, birebir koçluk ve haftalık Türkiye geneli deneme sınavları ile hedefe odaklı final.",
    checks: ["Haftalık Seri Denemeler", "Soru Çözüm Ofisleri"],
    checkColor: "text-primary",
    textColor: "text-white",
    subTextColor: "text-white/70",
    listColor: "text-white/90",
    dark: true,
  },
];

export default function YKSPage() {
  const [activeCard, setActiveCard] = useState<ClassKey>(null);

  const handleCardClick = (key: ClassKey) => {
    setActiveCard((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/yks_hero_bg.png"
            alt="Modern Education Environment"
            fill
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d1b4a]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b4a]/40 via-transparent to-background-light/10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            YKS Programları
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Üniversite hayallerinize giden yolda, 6 Sigma disiplini ile güçlü
            bir başlangıç yapın. Kişiselleştirilmiş eğitim modelleriyle zirveyi
            hedefliyoruz.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#iletisim"
              className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-primary/30"
            >
              Bize Ulaşın{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="relative -mt-16 z-20 max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#1a237e]/5 grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1a237e]/5">
          <div className="flex items-center gap-4 pb-6 md:pb-0">
            <div className="size-12 rounded-full bg-[#1a237e]/5 flex items-center justify-center text-[#1a237e]">
              <span className="material-symbols-outlined text-3xl">
                workspace_premium
              </span>
            </div>
            <div>
              <p className="text-[#1a237e] font-bold text-xl">200+</p>
              <p className="text-[#1a237e]/60 text-sm">Tıp Fakültesi Kazanımı</p>
            </div>
          </div>
          <div className="flex items-center gap-4 py-6 md:py-0 md:px-8">
            <div className="size-12 rounded-full bg-[#1a237e]/5 flex items-center justify-center text-accent-red">
              <span className="material-symbols-outlined text-3xl">
                query_stats
              </span>
            </div>
            <div>
              <p className="text-[#1a237e] font-bold text-xl">%98</p>
              <p className="text-[#1a237e]/60 text-sm">Öğrenci Memnuniyeti</p>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-8">
            <div className="size-12 rounded-full bg-[#1a237e]/5 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">
                event_available
              </span>
            </div>
            <div>
              <p className="text-[#1a237e] font-bold text-xl">45.000+</p>
              <p className="text-[#1a237e]/60 text-sm">Yıllık Çözülen Soru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Süreç / Kartlar */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#1a237e] text-3xl md:text-4xl font-extrabold mb-4">
            6 Sigma&apos;da YKS Süreci Nasıl İşler?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const isActive = activeCard === card.key;
            return (
              <div
                key={card.key}
                onClick={() => handleCardClick(card.key)}
                className={`group cursor-pointer ${card.cardBg} p-8 rounded-2xl border ${
                  card.dark ? "border-white/10" : "border-[#1a237e]/5"
                } ${card.borderHover} transition-all hover:shadow-xl relative overflow-hidden select-none ${
                  isActive
                    ? card.dark
                      ? "ring-2 ring-primary shadow-2xl"
                      : "ring-2 ring-[#1a237e]/40 shadow-xl"
                    : ""
                }`}
              >
                {/* Dekoratif köşe */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${card.decorBg} rounded-bl-full -mr-8 -mt-8 ${card.decorHover} transition-colors`}
                ></div>

                {/* İkon */}
                <div className={`${card.iconColor} mb-4`}>
                  <span className="material-symbols-outlined text-5xl">
                    {card.icon}
                  </span>
                </div>

                {/* Başlık */}
                <h3 className={`${card.textColor} text-xl font-bold mb-1`}>
                  {card.title}
                </h3>
                <p className={`${card.subTextColor} text-xs font-semibold uppercase tracking-wider mb-3`}>
                  {card.subtitle}
                </p>

                {/* Kısa açıklama */}
                <p className={`${card.subTextColor} text-sm leading-relaxed mb-4`}>
                  {card.desc}
                </p>

                {/* Hızlı özellik listesi */}
                <ul className={`space-y-2 text-xs font-semibold ${card.listColor}`}>
                  {card.checks.map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span
                        className={`material-symbols-outlined ${card.checkColor} text-sm`}
                      >
                        check_circle
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>

                {/* "Daha fazla detay" etiketi */}
                <div
                  className={`mt-5 flex items-center gap-1.5 text-xs font-bold ${
                    card.dark ? "text-primary" : "text-[#1a237e]"
                  } transition-all`}
                >
                  <span className="material-symbols-outlined text-base">
                    {isActive ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                  </span>
                  {isActive ? "Gizlemek için tıklayınız" : "Daha fazla detay için tıklayınız"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Accordion Detay Bölümü */}
        {activeCard && classDetails[activeCard as Exclude<ClassKey, null>] && (
          <div
            className="mt-6 bg-white rounded-2xl shadow-2xl border border-[#1a237e]/10 overflow-hidden animate-in fade-in slide-in-from-top-3 duration-300"
            style={{ animation: "accordionSlide 0.35s ease" }}
          >
            <style>{`
              @keyframes accordionSlide {
                from { opacity: 0; transform: translateY(-16px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>

            <div className="bg-gradient-to-r from-[#0d1b4a] to-[#1a237e] p-6 md:p-8">
              <h3 className="text-white text-2xl font-extrabold">
                {classDetails[activeCard as Exclude<ClassKey, null>].title}
              </h3>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Sol: Açıklama + Özellikler */}
                <div>
                  <p className="text-[#1a237e]/70 text-base leading-relaxed mb-8">
                    {classDetails[activeCard as Exclude<ClassKey, null>].description}
                  </p>

                  <h4 className="text-[#1a237e] font-bold text-sm uppercase tracking-wider mb-4">
                    Program İçerikleri
                  </h4>
                  <ul className="space-y-3">
                    {classDetails[activeCard as Exclude<ClassKey, null>].features.map(
                      (f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[#1a237e]/80 text-sm"
                        >
                          <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                            check_circle
                          </span>
                          {f}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Sağ: Öne çıkan bilgiler */}
                <div>
                  <h4 className="text-[#1a237e] font-bold text-sm uppercase tracking-wider mb-4">
                    Öne Çıkan Avantajlar
                  </h4>
                  <div className="space-y-4">
                    {classDetails[activeCard as Exclude<ClassKey, null>].highlights.map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 bg-[#1a237e]/5 rounded-xl p-4"
                        >
                          <div className="size-10 rounded-full bg-[#1a237e]/10 flex items-center justify-center text-[#1a237e] shrink-0">
                            <span className="material-symbols-outlined text-xl">
                              {h.icon}
                            </span>
                          </div>
                          <p className="text-[#1a237e] font-semibold text-sm">
                            {h.text}
                          </p>
                        </div>
                      )
                    )}
                  </div>

                  {/* Galeri — Sadece 12. sınıf ve mezun için */}
                  {classDetails[activeCard as Exclude<ClassKey, null>].hasGallery && (
                    <div className="mt-8">
                      <h4 className="text-[#1a237e] font-bold text-sm uppercase tracking-wider mb-4">
                        {classDetails[activeCard as Exclude<ClassKey, null>].isMezun
                          ? "Mezunlar Toplu Fotoğraf Galerisi"
                          : "Fotoğraf Galerisi"}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {classDetails[
                          activeCard as Exclude<ClassKey, null>
                        ].galleryImages?.map((img, i) => (
                          <div
                            key={i}
                            className="relative rounded-xl overflow-hidden aspect-video shadow-md group/img"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <p className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold leading-tight">
                              {img.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Harekete Geçir CTA */}
              <div className="mt-10 pt-8 border-t border-[#1a237e]/10 flex flex-col sm:flex-row items-center gap-4">
                <p className="text-[#1a237e]/60 text-sm text-center sm:text-left flex-1">
                  Bu program hakkında daha fazla bilgi almak veya kayıt yaptırmak için eğitim danışmanlarımızla iletişime geçin.
                </p>
                <Link
                  href="#iletisim"
                  className="shrink-0 bg-[#0d1b4a] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1a237e] transition-colors flex items-center gap-2"
                >
                  Bize Ulaşın
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Mezunlar — Sonsuz Kayan Carousel */}
      <section className="py-20 bg-gradient-to-br from-[#0d1b4a] to-[#1a237e] overflow-hidden">
        <style>{`
          @keyframes scrollLeft {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .carousel-track {
            display: flex;
            gap: 1.5rem;
            width: max-content;
            animation: scrollLeft 28s linear infinite;
          }
          .carousel-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
            Başarıyla Mezun Olan Öğrencilerimiz
          </h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            6 Sigma&apos;dan mezun olan öğrencilerimiz Türkiye&apos;nin en prestijli
            üniversitelerinde eğitimlerine devam etmektedir.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        {/* Carousel — maskeleme ile kenarlar yumuşak geçiş */}
        <div
          className="relative w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="carousel-track">
            {/* Orijinal 6 kart */}
            {[
              { year: "2019", src: "/images/mezun_2019.png", count: "320", uni: "180" },
              { year: "2020", src: "/images/mezun_2020.png", count: "350", uni: "210" },
              { year: "2021", src: "/images/mezun_2021.png", count: "380", uni: "240" },
              { year: "2022", src: "/images/mezun_2022.png", count: "410", uni: "260" },
              { year: "2023", src: "/images/mezun_2023.png", count: "450", uni: "290" },
              { year: "2024", src: "/images/mezun_2024.png", count: "500", uni: "320" },
              /* Sonsuz döngü için kopya */
              { year: "2019", src: "/images/mezun_2019.png", count: "320", uni: "180" },
              { year: "2020", src: "/images/mezun_2020.png", count: "350", uni: "210" },
              { year: "2021", src: "/images/mezun_2021.png", count: "380", uni: "240" },
              { year: "2022", src: "/images/mezun_2022.png", count: "410", uni: "260" },
              { year: "2023", src: "/images/mezun_2023.png", count: "450", uni: "290" },
              { year: "2024", src: "/images/mezun_2024.png", count: "500", uni: "320" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative shrink-0 w-[420px] h-[280px] rounded-2xl overflow-hidden shadow-2xl group/card cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={`${item.year} Mezunları`}
                  fill
                  className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b4a]/90 via-[#0d1b4a]/20 to-transparent" />

                {/* Yıl etiketi — sol üst */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {item.year} Mezunları
                  </span>
                </div>

                {/* Alt bilgi */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-lg font-extrabold leading-tight">
                    {item.year} — Mezuniyet Töreni
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alt istatistik bar */}
        <div className="max-w-4xl mx-auto px-6 mt-12 grid grid-cols-3 gap-6">
          {[
            { val: "2.400+", label: "Toplam Mezun" },
            { val: "200+", label: "Tıp Fakültesi Kazananı" },
            { val: "%98", label: "Başarı Oranı" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-white font-extrabold text-3xl mb-1">{s.val}</p>
              <p className="text-white/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* İletişim Form Yönlendirmesi */}
      <section id="iletisim" className="py-24 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-[#1a237e] text-4xl font-extrabold mb-4">
          Sizin İçin En Uygun Programı Belirleyelim
        </h2>
        <p className="text-[#1a237e]/60 text-lg mb-12">
          Detaylı bilgi, fiyatlar ve kurum turu randevusu için eğitim danışmanlarımızla iletişime geçin.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="https://wa.me/905432674462"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-green-500/20 transition-all"
          >
            <span className="material-symbols-outlined">chat</span>
            WhatsApp ile İletişime Geç
          </Link>
          <Link
            href="tel:+905432674462"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#1a237e] border-2 border-[#1a237e]/10 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#1a237e]/5 transition-all"
          >
            <span className="material-symbols-outlined">call</span>
            +90 (543) 267 44 62
          </Link>
        </div>
      </section>
    </>
  );
}
