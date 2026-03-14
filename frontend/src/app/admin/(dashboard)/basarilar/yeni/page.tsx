"use client";

import Link from "next/link";
import { useState } from "react";

export default function BasariEklePage() {
    const [year, setYear] = useState("2024");
    const [examType, setExamType] = useState<"YKS" | "LGS">("YKS");
    const [studentName, setStudentName] = useState("");
    const [resultText, setResultText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Öğrenci başarısı eklendi! (Dummy Action)");
        window.location.href = "/admin/basarilar";
    };

    return (
        <div className="max-w-3xl mx-auto w-full">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/admin/basarilar" className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                <h2 className="text-2xl font-bold text-[#0d1b4a] tracking-tight">Yeni Başarı Ekle</h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
                <div className="p-6 md:p-8 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#0d1b4a]">Yıl</label>
                            <input
                                required
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="bg-white border border-slate-300 text-[#0d1b4a] font-medium text-sm rounded-lg focus:ring-2 focus:ring-[#0d1b4a] focus:border-[#0d1b4a] outline-none block w-full p-2.5 transition-shadow"
                                type="number"
                                min="2000"
                                max="2099"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#0d1b4a]">Sınav Tipi</label>
                            <div className="flex bg-slate-100 rounded-lg p-1 border border-slate-200">
                                <button
                                    type="button"
                                    onClick={() => setExamType("YKS")}
                                    className={`flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${examType === "YKS" ? "bg-white text-[#0d1b4a] shadow-sm border border-slate-200" : "text-slate-500 hover:text-[#0d1b4a]"}`}
                                >
                                    YKS
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setExamType("LGS")}
                                    className={`flex-1 py-1.5 text-sm font-bold rounded-md transition-all ${examType === "LGS" ? "bg-white text-[#0d1b4a] shadow-sm border border-slate-200" : "text-slate-500 hover:text-[#0d1b4a]"}`}
                                >
                                    LGS
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#0d1b4a]">Öğrenci Adı</label>
                        <input
                            required
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className="bg-white border border-slate-300 text-[#0d1b4a] font-medium text-sm rounded-lg focus:ring-2 focus:ring-[#0d1b4a] focus:border-[#0d1b4a] outline-none block w-full p-2.5 placeholder-slate-400 transition-shadow"
                            placeholder="Örn: Ali Veli"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col gap-3 bg-blue-50/50 p-6 rounded-lg border border-blue-100">
                        <label className="text-sm font-bold text-[#0d1b4a] flex items-center gap-2">
                            <span className="material-symbols-outlined text-base">school</span>
                            {examType === "YKS" ? "Kazanılan Üniversite ve Bölüm" : "Kazanılan Lise ve Yüzdelik Dilim"}
                        </label>
                        <input
                            required
                            value={resultText}
                            onChange={(e) => setResultText(e.target.value)}
                            className="bg-white border border-slate-300 text-[#0d1b4a] font-medium text-sm rounded-lg focus:ring-2 focus:ring-[#0d1b4a] focus:border-[#0d1b4a] outline-none block w-full p-2.5 placeholder-slate-400 transition-shadow mt-1"
                            placeholder={examType === "YKS" ? "Örn: Boğaziçi Üniversitesi Bilgisayar Mühendisliği" : "Örn: Ankara Fen Lisesi (%0.2)"}
                            type="text"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50 rounded-b-xl">
                    <Link href="/admin/basarilar" className="px-5 py-2.5 text-sm font-semibold text-[#0d1b4a] bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
                        İptal
                    </Link>
                    <button type="submit" className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0d1b4a] rounded-lg hover:bg-blue-900 shadow-sm transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">save</span>
                        Kaydet
                    </button>
                </div>
            </form>
        </div>
    );
}
