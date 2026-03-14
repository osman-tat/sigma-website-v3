"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminLoginPage() {
    return (
        <div className="bg-[#f6f6f8] text-slate-900 min-h-screen flex">
            {/* Sol Panel */}
            <div className="hidden lg:flex lg:w-3/5 relative bg-gradient-to-br from-[#0d1b4a] to-blue-900 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_10%,_transparent_20%)] bg-[length:20px_20px]"></div>
                <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center">
                    <div className="flex items-center gap-4 mb-8 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                        <span className="material-symbols-outlined text-6xl text-white">school</span>
                        <div className="flex flex-col text-left">
                            <span className="text-white text-5xl font-black tracking-tighter">6 SİGMA</span>
                            <span className="text-white/80 text-xl font-medium tracking-widest uppercase">Eğitim Kurumları</span>
                        </div>
                    </div>
                    <h1 className="text-white text-4xl font-light mb-4">Yönetim Paneli</h1>
                    <p className="text-white/70 text-lg max-w-md">Türkiye'nin öncü eğitim kurumunun ayrıcalıklı yönetim platformuna hoş geldiniz.</p>
                </div>
                <div className="absolute bottom-8 left-8 text-white/50 text-sm">
                    © 2024 6 Sigma Eğitim Kurumları. Tüm hakları saklıdır.
                </div>
            </div>

            {/* Sağ Panel (Form) */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center px-8 sm:px-16 md:px-24 bg-white z-10 shadow-2xl relative">
                <div className="w-full max-w-sm mx-auto">
                    <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
                        <span className="material-symbols-outlined text-4xl text-[#0d1b4a]">school</span>
                        <div className="flex flex-col text-left">
                            <span className="text-[#0d1b4a] text-2xl font-black tracking-tighter">6 SİGMA</span>
                        </div>
                    </div>
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-[#0d1b4a] mb-2">Giriş Yap</h2>
                        <p className="text-slate-500">Yönetim paneline erişmek için bilgilerinizi giriniz.</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = '/admin'; }}>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">E-posta Adresi</label>
                            <div className="relative rounded-lg shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400">mail</span>
                                </div>
                                <input
                                    className="focus:ring-[#0d1b4a] focus:border-[#0d1b4a] block w-full pl-10 sm:text-sm border-slate-300 rounded-lg h-12 outline-none border transition-colors focus:ring-1"
                                    id="email"
                                    name="email"
                                    placeholder="ornek@6sigma.com.tr"
                                    type="email"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="password">Şifre</label>
                            <div className="relative rounded-lg shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400">lock</span>
                                </div>
                                <input
                                    className="focus:ring-[#0d1b4a] focus:border-[#0d1b4a] block w-full pl-10 pr-10 sm:text-sm border-slate-300 rounded-lg h-12 outline-none border transition-colors focus:ring-1"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    type="password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    className="h-4 w-4 text-[#0d1b4a] focus:ring-[#0d1b4a] border-slate-300 rounded cursor-pointer"
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                />
                                <label className="ml-2 block text-sm text-slate-700 cursor-pointer" htmlFor="remember-me">
                                    Beni Hatırla
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#0d1b4a] hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d1b4a] transition-colors duration-200"
                                type="submit"
                            >
                                Giriş Yap
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <span className="material-symbols-outlined text-lg">shield</span>
                        <p>Bu alan yetkili personel içindir.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
