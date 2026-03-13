import Image from "next/image";
import Link from "next/link";

export default function YKSPage() {
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
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest shadow-xl">
                        Akademik Başarı Yolculuğu
                    </span>
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-md">
                        YKS Programları
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
                        Üniversite hayallerinize giden yolda, 6 Sigma disiplini ile güçlü bir başlangıç yapın. Kişiselleştirilmiş eğitim modelleriyle zirveyi hedefliyoruz.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="#iletisim" className="bg-primary text-[#1a237e] font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-primary/30">
                            Bize Ulaşın <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* İstatistikler */}
            <section className="relative -mt-16 z-20 max-w-5xl mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#1a237e]/5 grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1a237e]/5">
                    <div className="flex items-center gap-4 pb-6 md:pb-0">
                        <div className="size-12 rounded-full bg-[#1a237e]/5 flex items-center justify-center text-[#1a237e]">
                            <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                        </div>
                        <div>
                            <p className="text-[#1a237e] font-bold text-xl">200+</p>
                            <p className="text-[#1a237e]/60 text-sm">Tıp Fakültesi Kazanımı</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 py-6 md:py-0 md:px-8">
                        <div className="size-12 rounded-full bg-[#1a237e]/5 flex items-center justify-center text-accent-red">
                            <span className="material-symbols-outlined text-3xl">query_stats</span>
                        </div>
                        <div>
                            <p className="text-[#1a237e] font-bold text-xl">%98</p>
                            <p className="text-[#1a237e]/60 text-sm">Öğrenci Memnuniyeti</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 pt-6 md:pt-0 md:pl-8">
                        <div className="size-12 rounded-full bg-[#1a237e]/5 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl">event_available</span>
                        </div>
                        <div>
                            <p className="text-[#1a237e] font-bold text-xl">45.000+</p>
                            <p className="text-[#1a237e]/60 text-sm">Yıllık Çözülen Soru</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Süreç */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[#1a237e] text-3xl md:text-4xl font-extrabold mb-4">6 Sigma'da YKS Süreci Nasıl İşler?</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group bg-white p-8 rounded-2xl border border-[#1a237e]/5 hover:border-primary/50 transition-all hover:shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#1a237e]/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors"></div>
                        <div className="text-[#1a237e] mb-6">
                            <span className="material-symbols-outlined text-5xl">foundation</span>
                        </div>
                        <h3 className="text-[#1a237e] text-xl font-bold mb-3">9. Sınıf - Erken Hazırlık</h3>
                        <p className="text-[#1a237e]/60 text-sm leading-relaxed mb-6">
                            Temel bilimler ve mantık yürütme odaklı, lise hayatına güçlü bir akademik temel ile başlangıç süreci.
                        </p>
                        <ul className="space-y-2 text-xs font-semibold text-[#1a237e]/80">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Temel Matematik Kampı</li>
                            <li className="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-sm">check_circle</span> Hızlı Okuma Teknikleri</li>
                        </ul>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl border border-[#1a237e]/5 hover:border-accent-red/50 transition-all hover:shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent-red/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-accent-red/10 transition-colors"></div>
                        <div className="text-accent-red mb-6">
                            <span className="material-symbols-outlined text-5xl">fitness_center</span>
                        </div>
                        <h3 className="text-[#1a237e] text-xl font-bold mb-3">10. Sınıf - Güçlendirme</h3>
                        <p className="text-[#1a237e]/60 text-sm leading-relaxed mb-6">
                            9. sınıf eksiklerinin giderilmesi ve 10. sınıf müfredatının TYT mantığı ile pekiştirilmesi süreci.
                        </p>
                        <ul className="space-y-2 text-xs font-semibold text-[#1a237e]/80">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-red text-sm">check_circle</span> Branş Denemeleri</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-red text-sm">check_circle</span> Problem Çözme Stratejileri</li>
                        </ul>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl border border-[#1a237e]/5 hover:border-[#1a237e]/50 transition-all hover:shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#1a237e]/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#1a237e]/10 transition-colors"></div>
                        <div className="text-[#1a237e] mb-6">
                            <span className="material-symbols-outlined text-5xl">speed</span>
                        </div>
                        <h3 className="text-[#1a237e] text-xl font-bold mb-3">11. Sınıf - Yoğunlaştırma</h3>
                        <p className="text-[#1a237e]/60 text-sm leading-relaxed mb-6">
                            AYT temelinin atıldığı, haftalık konu tarama testleri ile disiplinli bir hazırlık dönemidir.
                        </p>
                        <ul className="space-y-2 text-xs font-semibold text-[#1a237e]/80">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#1a237e] text-sm">check_circle</span> AYT İlk Adım Programı</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[#1a237e] text-sm">check_circle</span> Yaz Kampı Programı</li>
                        </ul>
                    </div>
                    <div className="group bg-[#0d1b4a] p-8 rounded-2xl border border-white/10 hover:shadow-2xl hover:-translate-y-2 hover:shadow-[#1a237e]/40 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/20 transition-colors"></div>
                        <div className="text-primary mb-6">
                            <span className="material-symbols-outlined text-5xl">military_tech</span>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-3">12. Sınıf &amp; Mezun - Final</h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Sınav simülasyonları, birebir koçluk ve her hafta Türkiye geneli deneme sınavları ile hedefe odaklı final.
                        </p>
                        <ul className="space-y-2 text-xs font-semibold text-white/90">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Haftalık Seri Denemeler</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Soru Çözüm Ofisleri</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* İletişim Form Yönlendirmesi */}
            <section id="iletisim" className="py-24 max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-[#1a237e] text-4xl font-extrabold mb-4">Sizin İçin En Uygun Programı Belirleyelim</h2>
                <p className="text-[#1a237e]/60 text-lg mb-12">Detaylı bilgi, fiyatlar ve kurum turu randevusu için eğitim danışmanlarımızla iletişime geçin.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-green-500/20 transition-all">
                        <span className="material-symbols-outlined">chat</span>
                        WhatsApp ile İletişime Geç
                    </button>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#1a237e] border-2 border-[#1a237e]/10 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#1a237e]/5 transition-all">
                        <span className="material-symbols-outlined">call</span>
                        0212 555 66 77
                    </button>
                </div>
            </section>
        </>
    );
}
