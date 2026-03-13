"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DuyurularPage() {
    const [filter, setFilter] = useState("Tümü");

    return (
        <>
            <main className="flex-grow max-w-5xl mx-auto w-full px-4 py-16 pt-32">
                <header className="mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <h2 className="text-[#1a237e] text-5xl font-black mb-4 tracking-tight">Duyurular</h2>
                            <p className="text-slate-500 text-lg max-w-2xl">Kurum Haberleri, Sınav Takvimi ve Cevap Anahtarları</p>
                            <div className="h-1.5 w-24 bg-accent-gold mt-6 rounded-full"></div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/60 backdrop-blur-md border border-slate-200/50 rounded-xl shadow-sm">
                            <button
                                onClick={() => setFilter("Tümü")}
                                className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-all ${filter === "Tümü" ? "bg-[#1a237e] text-white shadow-md" : "text-slate-600 hover:bg-slate-100 border border-transparent"}`}>
                                Tümü
                            </button>
                            <button
                                onClick={() => setFilter("Deneme Sınavları")}
                                className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${filter === "Deneme Sınavları" ? "bg-[#1a237e] text-white shadow-md" : "text-slate-600 hover:bg-slate-100 border border-transparent"}`}>
                                Deneme Sınavları
                            </button>
                            <button
                                onClick={() => setFilter("Genel Duyurular")}
                                className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${filter === "Genel Duyurular" ? "bg-[#1a237e] text-white shadow-md" : "text-slate-600 hover:bg-slate-100 border border-transparent"}`}>
                                Genel Duyurular
                            </button>
                        </div>
                    </div>
                </header>

                <div className="space-y-6">
                    {(filter === "Tümü" || filter === "Deneme Sınavları") && (
                        <article className="bg-white rounded-xl shadow-sm border-l-4 border-[#1a237e] p-6 md:p-8 transition-transform hover:translate-x-1 duration-300">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="flex-1">
                                    <span className="inline-block bg-accent-gold/10 text-accent-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">5 Mart 2026</span>
                                    <h3 className="text-[#1a237e] text-2xl font-bold mb-3">LGS Deneme 3 - Cevap Anahtarları Yayınlandı</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">Son yapılan LGS deneme sınavının A ve B kitapçığı cevap anahtarları dijital ortamda yayınlanmıştır. Öğrencilerimiz sonuçlarını kontrol edebilir ve analizlerini gerçekleştirebilirler.</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-accent-red">picture_as_pdf</span>
                                                <div>
                                                    <p className="text-sm font-semibold">A Kitapçığı.pdf</p>
                                                    <p className="text-[10px] text-slate-400 uppercase">1.2 MB</p>
                                                </div>
                                            </div>
                                            <button className="text-[#1a237e] hover:bg-[#1a237e]/10 p-2 rounded-full transition-colors">
                                                <span className="material-symbols-outlined text-xl">download</span>
                                            </button>
                                        </div>

                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-accent-red">picture_as_pdf</span>
                                                <div>
                                                    <p className="text-sm font-semibold">B Kitapçığı.pdf</p>
                                                    <p className="text-[10px] text-slate-400 uppercase">1.1 MB</p>
                                                </div>
                                            </div>
                                            <button className="text-[#1a237e] hover:bg-[#1a237e]/10 p-2 rounded-full transition-colors">
                                                <span className="material-symbols-outlined text-xl">download</span>
                                            </button>
                                        </div>
                                    </div>

                                    <Link href="#" className="text-[#1a237e] font-bold text-sm inline-flex items-center gap-2 group">
                                        Devamını Oku
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>

                                <div className="hidden md:block w-48 h-32 rounded-lg overflow-hidden shrink-0 relative">
                                    <Image
                                        src="/images/homepage_announcement_camp.png"
                                        alt="LGS Sınavı"
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </article>
                    )}

                    {(filter === "Tümü" || filter === "Genel Duyurular") && (
                        <article className="bg-white rounded-xl shadow-sm border-l-4 border-[#1a237e] p-6 md:p-8 transition-transform hover:translate-x-1 duration-300">
                            <span className="inline-block bg-accent-gold/10 text-accent-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">2 Mart 2026</span>
                            <h3 className="text-[#1a237e] text-2xl font-bold mb-3">YKS Motivasyon Semineri: Sınav Kaygısıyla Başa Çıkma</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">Rehberlik birimimiz tarafından organize edilen, uzman psikologlar eşliğinde gerçekleşecek olan motivasyon seminerimize tüm 12. sınıf öğrencilerimiz ve velilerimiz davetlidir. Konferans salonumuzda gerçekleşecek etkinlikte interaktif soru-cevap seansı yapılacaktır.</p>

                            <Link href="#" className="text-[#1a237e] font-bold text-sm inline-flex items-center gap-2 group">
                                Devamını Oku
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </article>
                    )}

                    {(filter === "Tümü" || filter === "Genel Duyurular") && (
                        <article className="bg-[#1a237e] text-white rounded-xl shadow-xl p-8 relative overflow-hidden group mt-8">
                            <div className="relative z-10">
                                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Yeni Dönem</span>
                                <h3 className="text-3xl font-black mb-4">Bahar Dönemi Kayıt Başvuruları Başladı!</h3>
                                <p className="text-white/80 leading-relaxed mb-8 max-w-xl">Erken kayıt avantajlarından yararlanmak ve sınırlı kontenjanımızda yerinizi ayırtmak için bizimle iletişime geçebilirsiniz. 6 Sigma farkıyla geleceğinizi inşa edin.</p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-3 rounded-lg font-bold transition-all">Bilgi Al</button>
                                </div>
                            </div>
                            <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700 flex items-center justify-end pr-4">
                                <span className="material-symbols-outlined text-[150px] leading-none text-white overflow-hidden">campaign</span>
                            </div>
                        </article>
                    )}
                </div>
            </main>
        </>
    );
}
