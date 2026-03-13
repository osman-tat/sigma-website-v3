import Image from "next/image";
import Link from "next/link";

export default function LGSPage() {
    return (
        <>
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-red via-[#d32f2f] to-[#1a237e] opacity-10"></div>
                <div className="absolute inset-0">
                    <Image
                        src="/images/lgs_hero_bg.png"
                        alt="Modern Education Environment"
                        fill
                        priority
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>
                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <h1 className="text-[#1a237e] text-5xl md:text-6xl font-black mb-6 tracking-tight">LGS Programları</h1>
                    <p className="text-slate-700 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10">
                        Hedef Fen Lisesi? Doğru Yerdesiniz.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="#iletisim" className="bg-[#1a237e] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#1a237e]/90 transition-all shadow-lg">
                            Bize Ulaşın
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-[#1a237e] text-3xl md:text-4xl font-black mb-4">6 Sigma'da LGS Süreci Nasıl İşler?</h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-[#1a237e]/10 rounded-2xl flex items-center justify-center text-[#1a237e] mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-4xl">school</span>
                        </div>
                        <h3 className="text-[#1a237e] text-xl font-bold mb-4">6. ve 7. Sınıf - Temel Atma Dönemi</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Temel bilimlerin ve çalışma disiplininin oluşturulduğu gelişim süreci. Akademik eksiklerin erkenden kapatılması sağlanır.
                        </p>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-accent-red/10 rounded-2xl flex items-center justify-center text-accent-red mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-4xl">target</span>
                        </div>
                        <h3 className="text-[#1a237e] text-xl font-bold mb-4">8. Sınıf - Hedef Odaklı Çalışma</h3>
                        <p className="text-slate-600 leading-relaxed">
                            LGS müfredatına tam hakimiyet ve yoğunlaştırılmış sınav pratiği. MEB kazanımlarına uygun derinlemesine hazırlık.
                        </p>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-4xl">psychology</span>
                        </div>
                        <h3 className="text-[#1a237e] text-xl font-bold mb-4">Soru Tiplerine Göre Stratejik Hazırlık</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Yeni nesil sorular için mantık muhakeme ve hız kazandıran yöntemler. Zaman yönetimi ve sınav psikolojisi eğitimi.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                                <Image
                                    src="/images/homepage_announcement_camp.png"
                                    alt="Students studying together"
                                    fill
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#1a237e]/10"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-[#1a237e] text-3xl md:text-4xl font-black mb-8">Neden 6 Sigma LGS?</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-[#1a237e]">
                                        <span className="material-symbols-outlined font-bold">person_search</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[#1a237e] text-lg font-bold mb-2">Birebir Rehberlik Desteği</h4>
                                        <p className="text-slate-600">Her öğrenciye özel akademik koç atanır ve haftalık gelişim planı çıkarılır.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-[#1a237e]">
                                        <span className="material-symbols-outlined font-bold">assignment</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[#1a237e] text-lg font-bold mb-2">Haftalık Deneme Sınavları</h4>
                                        <p className="text-slate-600">Türkiye geneli denemeler ile öğrencinin sıralaması ve eksikleri düzenli takip edilir.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-[#1a237e]">
                                        <span className="material-symbols-outlined font-bold">smart_toy</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[#1a237e] text-lg font-bold mb-2">AI Destekli Performans Takibi</h4>
                                        <p className="text-slate-600">Yapay zeka sistemimiz, öğrencinin en çok hata yaptığı soru tiplerini analiz ederek özel ödevler üretir.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="iletisim" className="py-20 max-w-5xl mx-auto px-6 mb-24">
                <div className="bg-gradient-to-r from-[#1a237e] to-[#0d1b4a] rounded-[2rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Daha Fazla Bilgi İçin Arayınız</h2>
                    <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
                        Çocuğunuzun akademik seviyesini belirleyelim ve ona özel çalışma planını birlikte oluşturalım.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="#" className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg">
                            <span className="material-symbols-outlined">chat</span>
                            WhatsApp'tan Yazın
                        </Link>
                        <Link href="#" className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-[#1a237e] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-lg border border-indigo-100">
                            <span className="material-symbols-outlined">call</span>
                            0212 555 66 77
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
