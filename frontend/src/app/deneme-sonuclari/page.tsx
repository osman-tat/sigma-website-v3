"use client";

import { useState } from "react";
import Link from "next/link";

export default function DenemeSonuclariPage() {
    const [isSearched, setIsSearched] = useState(false);
    const [tc, setTc] = useState("");
    const [dob, setDob] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (tc.length === 11 && dob) {
            setIsSearched(true);
        }
    };

    return (
        <>
            <main className="flex-1 min-h-screen pt-20">
                <div className="relative overflow-hidden bg-[#1a237e] py-20 px-4">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-gold via-transparent to-transparent"></div>
                    </div>
                    <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
                        <span className="material-symbols-outlined text-accent-gold text-5xl mb-6">shield_person</span>
                        <h1 className="text-white text-5xl font-black leading-tight tracking-tight mb-4">Deneme Sonuçlarım</h1>
                        <p className="text-white/80 text-lg font-medium max-w-2xl">
                            TC Kimlik Numaranız ve Doğum Tarihiniz ile Karne Analizinize Ulaşın. Kişiselleştirilmiş gelişim raporunuzu hemen görüntüleyin.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 -mt-12 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-5">
                            <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-100 relative z-20">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#1a237e]">
                                    <span className="material-symbols-outlined text-accent-gold">lock_open</span>
                                    Güvenli Sorgulama
                                </h3>

                                <form onSubmit={handleSearch} className="space-y-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-[#1a237e]">TC Kimlik No</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#1a237e]/50">fingerprint</span>
                                            <input
                                                value={tc}
                                                onChange={(e) => setTc(e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#f9a825] focus:border-[#f9a825] outline-none transition-all text-[#1a237e]"
                                                maxLength={11}
                                                placeholder="11 Haneli TC Kimlik numaranız"
                                                required
                                                type="text"
                                            />
                                        </div>
                                        <p className="text-xs text-[#1a237e]/60 mt-1">Sadece öğrenciye ait kimlik numarası ile sorgulama yapılabilir.</p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-[#1a237e]">Doğum Tarihi</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#1a237e]/50">calendar_month</span>
                                            <input
                                                value={dob}
                                                onChange={(e) => setDob(e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 rounded-lg border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-[#f9a825] focus:border-[#f9a825] outline-none transition-all text-[#1a237e]"
                                                required
                                                type="date"
                                            />
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full bg-[#f9a825] hover:bg-[#f57f17] text-[#1a237e] font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[#f9a825]/20">
                                        <span className="material-symbols-outlined">analytics</span>
                                        Sonuçlarımı Getir
                                    </button>

                                    <div className="flex items-center justify-center gap-2 pt-4 text-[#1a237e]/60">
                                        <span className="material-symbols-outlined text-sm">lock</span>
                                        <span className="text-xs font-medium">Verileriniz 256-bit SSL ile korunmaktadır</span>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative z-20">
                            <div className="bg-white p-8 rounded-xl shadow-xl border border-slate-100 h-full flex flex-col items-center justify-center text-center">
                                {!isSearched ? (
                                    <div className="opacity-50 flex flex-col items-center">
                                        <span className="material-symbols-outlined text-[#1a237e] text-6xl mb-4">search</span>
                                        <p className="text-[#1a237e] font-medium">Sonuçlarınızı görmek için TC Kimlik ve Doğum Tarihinizi girerek arama yapınız.</p>
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="text-3xl font-black text-[#1a237e] mb-2">Mehmet Yılmaz</h4>
                                        <p className="text-lg text-[#1a237e]/70 font-medium mb-8">YKS Deneme 4 - Mart 2026</p>
                                        <div className="flex justify-center gap-4">
                                            <button className="bg-[#f9a825] hover:bg-[#f57f17] text-[#1a237e] px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-lg shadow-[#f9a825]/20">
                                                <span className="material-symbols-outlined">download</span>
                                                PDF İndir
                                            </button>
                                            <button className="border-2 border-slate-200 hover:bg-slate-50 text-[#1a237e] px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors">
                                                <span className="material-symbols-outlined">print</span>
                                                Yazdır
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 relative z-10">
                        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-green-500">verified_user</span>
                            <span className="text-sm font-bold text-[#1a237e]">Rate Limited - Güvenli Erişim</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-blue-500">lock</span>
                            <span className="text-sm font-bold text-[#1a237e]">256-bit SSL Şifreleme</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-accent-gold">gavel</span>
                            <span className="text-sm font-bold text-[#1a237e]">KVKK Uyumlu</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
