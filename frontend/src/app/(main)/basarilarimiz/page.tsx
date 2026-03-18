"use client";

import { useState } from "react";
import Image from "next/image";

export default function AchievementsPage() {
    const [openYear, setOpenYear] = useState<string>("2023");

    const toggleYear = (year: string) => {
        setOpenYear(openYear === year ? "" : year);
    };

    const chartData = [
        { year: "2016", count: 12, height: "25%" },
        { year: "2017", count: 16, height: "35%" },
        { year: "2018", count: 18, height: "45%" },
        { year: "2019", count: 24, height: "60%" },
        { year: "2020", count: 26, height: "65%" },
        { year: "2021", count: 31, height: "75%" },
        { year: "2022", count: 38, height: "85%" },
        { year: "2023", count: 45, height: "100%" },
    ];

    const gururTablosuData = [
        {

            title: "Elazığ 2026 YKS Birincisi",
            subtext: '\"Zirvede Tek Başına\"'
        },
        {

            title: "Elazığ 2025 YKS Eşit Ağırlık 1.si",
            subtext: '\"Hedeflerin Ötesinde\"'
        },
        {

            title: "LGS 2024 Türkiye 1.si (Tam Puan)",
            subtext: '\"Zirve Bizim İşimiz\"'
        },
        {

            title: "2024 YKS Sayısal Elazığ 2.si",
            subtext: '\"Azim ve Başarı\"'
        },
        {

            title: "2023 YKS İlk 1000'de 15 Öğrenci",
            subtext: '\"Kitlesel Başarının Adresi\"'
        },
        {

            title: "Elazığ 2022 YKS Sayısal 1.",
            subtext: '\"Zirvede Tek Başına\"'
        },
        {

            title: "LGS 2023 Tam Puan",
            subtext: '\"Kusursuz Performans\"'
        }
    ];

    const yearData = [
        {
            year: "2023",
            title: "154 Toplam Başarı",
            isCurrent: true,
            students: [
                { name: "Mehmet A.", program: "Hacettepe Üniversitesi Tıp Fakültesi", initials: "MA" },
                { name: "Zeynep K.", program: "İstanbul Tıp Fakültesi (Çapa)", initials: "ZK" },
                { name: "Ayşe D.", program: "Ankara Fen Lisesi (%0.2 Dilim)", initials: "AD", lgs: true },
                { name: "Burak T.", program: "ODTÜ Bilgisayar Mühendisliği", initials: "BT" },
            ]
        },
        {
            year: "2022",
            title: "142 Toplam Başarı (38 Tıp, 22 Mühendislik)",
            isCurrent: false,
            students: [
                { name: "Ali Rıza", program: "Cerrahpaşa Tıp Fakültesi", initials: "AR" },
                { name: "Elif S.", program: "Boğaziçi Bilgisayar Mühendisliği", initials: "ES" },
                { name: "Kemal T.", program: "Galatasaray Lisesi", initials: "KT", lgs: true },
                { name: "Cemresu B.", program: "Bilkent Elektrik Elektronik (Burslu)", initials: "CB" },
            ]
        },
        {
            year: "2021",
            title: "128 Toplam Başarı (31 Tıp, 18 Hukuk)",
            isCurrent: false,
            students: [
                { name: "Aylin Y.", program: "Galatasaray Üniversitesi Hukuk", initials: "AY" },
                { name: "Berkcan D.", program: "Ankara Tıp Fakültesi", initials: "BD" },
                { name: "Ceyda O.", program: "İTÜ Mimarlık", initials: "CO" },
                { name: "Deniz E.", program: "Kabataş Erkek Lisesi", initials: "DE", lgs: true },
            ]
        },
        {
            year: "2020",
            title: "115 Toplam Başarı",
            isCurrent: false,
            students: [
                { name: "Erdem F.", program: "ODTÜ Endüstri Mühendisliği", initials: "EF" },
                { name: "Gizem A.", program: "Ege Üniversitesi Tıp Fakültesi", initials: "GA" },
                { name: "Hakan U.", program: "Ankara Hukuk Fakültesi", initials: "HU" },
                { name: "Irmak K.", program: "İstanbul Erkek Lisesi", initials: "IK", lgs: true },
            ]
        }
    ];

    return (
        <>
            <main className="max-w-6xl mx-auto px-6 py-12 pt-32">
                <section className="mb-16">
                    <div className="inline-block relative">
                        <h2 className="text-5xl md:text-6xl font-black text-[#1a237e] mb-4 leading-tight">Başarılarımız</h2>
                        <div className="h-2 w-32 bg-primary rounded-full mb-6"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-xl text-slate-600 font-medium italic">Yıllardır Süregelen Başarı Geleneği</p>
                        {/* Gurur Tablosu */}
                        <section className="mb-20">
                            <h2 className="text-4xl md:text-5xl font-black text-accent-gold mb-10 text-left">Gurur Tablosu</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {gururTablosuData.map((item, index) => (
                                    <div key={index} className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow min-h-[140px]">
                                        <h3 className="text-[#1a237e] font-black text-lg mb-2 leading-snug">{item.title}</h3>
                                        <p className="text-slate-500 italic font-medium text-sm">{item.subtext}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="material-symbols-outlined text-accent-red text-5xl lg:text-6xl">emoji_events</span>
                            <span className="text-4xl md:text-6xl font-extrabold text-accent-red tracking-tight">2026 Yılında 70 Tıp Fakültesi!</span>
                        </div>
                    </div>
                </section>



                <section className="bg-white rounded-xl border border-slate-200 p-8 mb-12 shadow-sm">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h3 className="text-2xl font-bold text-[#1a237e]">Tıp Fakültesi Kazanımları (Yıl Bazlı)</h3>
                            <p className="text-slate-500 mt-1">Sürekli artan başarı grafiğimizle fark yaratıyoruz.</p>
                        </div>
                        <div className="text-right">
                            <p className="text-4xl font-black text-[#1a237e]">45 Mezun</p>
                            <p className="text-sm font-bold text-emerald-600">2023 Dönemi</p>
                        </div>
                    </div>

                    <div className="relative h-64 w-full flex items-end justify-between gap-2 px-4 border-b-2 border-slate-100">
                        {chartData.map((item, index) => {
                            const current = item.year === "2023";
                            return (
                                <div key={index} className="group flex flex-col items-center justify-end flex-1 h-full">
                                    <div
                                        className={`w-full relative flex items-start justify-center pt-2 ${current ? "bg-primary shadow-lg scale-105" : "bg-[#1a237e]/50 hover:bg-[#1a237e]/80"} rounded-t-lg transition-all duration-300`}
                                        style={{ height: item.height }}
                                    >
                                        <span className={`block text-center text-xs font-bold ${current ? "text-[#1a237e]" : "text-white"}`}>
                                            {item.count}
                                        </span>
                                    </div>
                                    <span className={`mt-4 text-xs ${current ? "font-extrabold text-[#1a237e]" : "font-bold text-slate-500"}`}>
                                        {item.year}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-primary">trending_up</span>
                        <p className="text-[#1a237e] font-bold text-lg italic">8 Yılda %275 Büyüme!</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-[#1a237e] mb-8 flex items-center gap-3">
                        <span className="material-symbols-outlined">analytics</span>
                        Yıl Bazlı Detaylı Başarılar
                    </h3>
                    <div className="space-y-4">
                        {yearData.map((data) => (
                            <div
                                key={data.year}
                                className={`border-2 ${openYear === data.year ? 'border-primary shadow-md' : 'border-slate-200 hover:border-primary/50'} rounded-xl overflow-hidden bg-white transition-colors`}
                            >
                                <div
                                    onClick={() => toggleYear(data.year)}
                                    className={`px-6 py-5 flex justify-between items-center cursor-pointer ${openYear === data.year ? 'bg-primary/10' : ''}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`text-2xl font-black ${openYear === data.year ? 'text-[#1a237e]' : 'text-slate-500'}`}>{data.year}</span>
                                        {data.isCurrent && (
                                            <span className="bg-primary text-[#0d1b4a] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Güncel</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-sm font-semibold hidden md:inline ${openYear === data.year ? 'text-[#1a237e]' : 'text-slate-500'}`}>{data.title}</span>
                                        <span className={`material-symbols-outlined ${openYear === data.year ? 'text-[#1a237e]' : 'text-slate-400'}`}>
                                            {openYear === data.year ? 'expand_less' : 'expand_more'}
                                        </span>
                                    </div>
                                </div>

                                {openYear === data.year && (
                                    <div className="p-6 border-t border-slate-100">
                                        <div className="flex gap-4 border-b border-slate-100 mb-6">
                                            <button className="px-6 py-3 text-sm font-bold border-b-2 border-[#1a237e] text-[#1a237e]">Tüm Başarılar</button>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {data.students.map((student, idx) => (
                                                <div key={idx} className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-primary/30 transition-all">
                                                    <div className="size-12 rounded-full bg-[#1a237e] flex items-center justify-center text-white shrink-0 mr-4">
                                                        <span className="font-bold">{student.initials}</span>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-[#1a237e]">{student.name}</p>
                                                        <p className="text-sm text-slate-600">{student.program}</p>
                                                    </div>
                                                    <span className="ml-auto material-symbols-outlined text-primary">
                                                        {student.lgs ? 'star' : 'workspace_premium'}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 text-center">
                                            <button className="text-[#1a237e] text-sm font-bold underline hover:text-primary transition-colors">Tüm Listeyi Görüntüle ({data.year})</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
