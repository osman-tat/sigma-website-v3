"use client";

import Link from "next/link";
import { useState } from "react";

export default function DuyuruEklePage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Seçiniz");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Duyuru başarıyla kaydedildi! (Dummy Action)");
        window.location.href = "/admin/duyurular";
    };

    return (
        <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/admin/duyurular" className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h2 className="text-2xl font-bold text-[#0d1b4a] tracking-tight">Yeni Duyuru Ekle</h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-1.5">
                            <label className="block text-sm font-medium text-slate-700">Başlık</label>
                            <input
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-[#0d1b4a] focus:border-[#0d1b4a] placeholder-slate-400 outline-none transition-colors"
                                placeholder="Duyuru başlığını girin..."
                                type="text"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="block text-sm font-medium text-slate-700">Kategori</label>
                            <select
                                required
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-[#0d1b4a] focus:border-[#0d1b4a] outline-none transition-colors cursor-pointer"
                            >
                                <option value="" disabled>Seçiniz</option>
                                <option value="Sinav">Sınav</option>
                                <option value="Etkinlik">Etkinlik</option>
                                <option value="Program">Program</option>
                                <option value="Duyuru">Genel Duyuru</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-slate-700">Duyuru İçeriği</label>
                        <div className="border border-slate-300 rounded-lg overflow-hidden bg-white focus-within:ring-2 focus-within:ring-[#0d1b4a] focus-within:border-[#0d1b4a] transition-colors">
                            <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 p-2 bg-slate-50">
                                <button type="button" className="p-1.5 rounded text-slate-600 hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-[18px]">format_bold</span></button>
                                <button type="button" className="p-1.5 rounded text-slate-600 hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-[18px]">format_italic</span></button>
                                <button type="button" className="p-1.5 rounded text-slate-600 hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-[18px]">format_underlined</span></button>
                                <div className="w-px h-4 bg-slate-300 mx-1"></div>
                                <button type="button" className="p-1.5 rounded text-slate-600 hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-[18px]">format_list_bulleted</span></button>
                                <button type="button" className="p-1.5 rounded text-slate-600 hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-[18px]">format_list_numbered</span></button>
                                <div className="w-px h-4 bg-slate-300 mx-1"></div>
                                <button type="button" className="p-1.5 rounded text-slate-600 hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-[18px]">link</span></button>
                                <button type="button" className="p-1.5 rounded text-slate-600 hover:bg-slate-200 transition-colors"><span className="material-symbols-outlined text-[18px]">image</span></button>
                            </div>
                            <textarea
                                required
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full min-h-[200px] p-4 border-none resize-y text-sm text-slate-900 bg-transparent outline-none focus:ring-0 placeholder-slate-400"
                                placeholder="Duyuru içeriğini buraya formata uygun şekilde yazınız..."
                            ></textarea>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-slate-700">Dosya Ekle (Opsiyonel)</label>
                        <label className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group flex flex-col items-center justify-center">
                            <span className="material-symbols-outlined text-4xl text-slate-400 mb-3 group-hover:text-[#0d1b4a] transition-colors">upload_file</span>
                            <p className="text-sm font-medium text-slate-700">PDF dosyalarını sürükleyip bırakın</p>
                            <p className="text-xs text-slate-500 mt-1">veya seçmek için tıklayın (Maks 10MB)</p>
                            <input type="file" accept="application/pdf" className="hidden" multiple />
                        </label>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm font-medium text-slate-700">Bitiş Tarihi</label>
                        <div className="relative max-w-xs">
                            <input
                                className="w-full bg-white border border-slate-300 rounded-lg pl-3 pr-10 py-2.5 text-sm text-slate-900 focus:ring-2 focus:ring-[#0d1b4a] focus:border-[#0d1b4a] outline-none transition-colors"
                                type="date"
                            />
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">calendar_today</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Duyurunun yayından kalkacağı tarihi seçin. Boş bırakırsanız süresiz yayında kalır.</p>
                    </div>
                </div>

                <div className="p-5 border-t border-slate-200 flex justify-end gap-3 bg-slate-50 rounded-b-xl">
                    <Link
                        href="/admin/duyurular"
                        className="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        İptal
                    </Link>
                    <button
                        type="submit"
                        className="px-6 py-2.5 text-sm font-medium text-white bg-[#0d1b4a] hover:bg-blue-900 rounded-lg transition-colors shadow-sm flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        Yayınla
                    </button>
                </div>
            </form>
        </div>
    );
}
