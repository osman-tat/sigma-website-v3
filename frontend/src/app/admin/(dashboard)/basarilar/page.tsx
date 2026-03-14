"use client";

import Link from "next/link";
import { useState } from "react";

export default function BasarilarPage() {
    return (
        <div className="flex flex-col gap-6 w-full">
            <header className="flex items-center justify-between border-b border-border-dark pb-4">
                <div className="flex items-center gap-2">
                    <span className="text-primary text-2xl font-bold tracking-tight">Başarı Yönetimi</span>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-[#0d1b4a] text-sm font-semibold transition-colors">
                        <span className="material-symbols-outlined text-sm">upload_file</span>
                        Excel İle Toplu Yükle
                    </button>
                    <Link href="/admin/basarilar/yeni" className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-[#0d1b4a] hover:bg-blue-900 text-white text-sm font-semibold transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-sm">add</span>
                        Yeni Başarı Ekle
                    </Link>
                </div>
            </header>

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4 flex-wrap bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex border-b border-slate-200 gap-8 h-full">
                        <button className="flex flex-col items-center justify-center border-b-2 border-[#0d1b4a] text-[#0d1b4a] pb-3 pt-2">
                            <span className="text-sm font-bold tracking-wide">Tümü</span>
                        </button>
                        <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 hover:text-[#0d1b4a] pb-3 pt-2 transition-colors">
                            <span className="text-sm font-semibold tracking-wide">YKS</span>
                        </button>
                        <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 hover:text-[#0d1b4a] pb-3 pt-2 transition-colors">
                            <span className="text-sm font-semibold tracking-wide">LGS</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <select className="appearance-none bg-white border border-slate-200 text-[#0d1b4a] font-medium text-sm rounded-lg focus:ring-[#0d1b4a] focus:border-[#0d1b4a] outline-none block w-full p-2.5 pr-8 cursor-pointer">
                                <option>2024</option>
                                <option>2023</option>
                                <option>2022</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </div>
                        </div>
                        <div className="relative w-64">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
                            </div>
                            <input className="bg-white border border-slate-200 text-[#0d1b4a] text-sm rounded-lg focus:ring-[#0d1b4a] focus:border-[#0d1b4a] outline-none block w-full pl-10 p-2.5 placeholder-slate-400 shadow-sm" placeholder="Öğrenci Ara..." type="text" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-slate-500">
                            <thead className="text-xs text-[#0d1b4a] uppercase bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 font-bold w-16" scope="col">#</th>
                                    <th className="px-6 py-4 font-bold w-24" scope="col">Yıl</th>
                                    <th className="px-6 py-4 font-bold" scope="col">Öğrenci Adı</th>
                                    <th className="px-6 py-4 font-bold w-32" scope="col">Sınav Tipi</th>
                                    <th className="px-6 py-4 font-bold" scope="col">Kazanılan Yer / Dilim</th>
                                    <th className="px-6 py-4 font-bold text-right w-32" scope="col">İşlemler</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr className="hover:bg-[#0d1b4a]/5 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-[#0d1b4a]">1</td>
                                    <td className="px-6 py-4 font-medium text-[#0d1b4a]">2023</td>
                                    <td className="px-6 py-4 text-[#0d1b4a] font-bold">Ahmet Yılmaz</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-100 text-blue-800 border border-blue-200 text-xs font-semibold px-2.5 py-1 rounded-full">YKS</span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-[#0d1b4a]">Hacettepe Üniversitesi Tıp Fakültesi</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="text-slate-400 hover:text-[#0d1b4a] transition-colors p-1.5 rounded hover:bg-slate-100" title="Düzenle">
                                                <span className="material-symbols-outlined text-sm">edit</span>
                                            </button>
                                            <button className="text-slate-400 hover:text-red-600 transition-colors p-1.5 rounded hover:bg-red-50" title="Sil">
                                                <span className="material-symbols-outlined text-sm">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-[#0d1b4a]/5 transition-colors bg-slate-50 group">
                                    <td className="px-6 py-4 font-medium text-[#0d1b4a]">2</td>
                                    <td className="px-6 py-4 font-medium text-[#0d1b4a]">2023</td>
                                    <td className="px-6 py-4 text-[#0d1b4a] font-bold">Ayşe Durmuş</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-purple-100 text-purple-800 border border-purple-200 text-xs font-semibold px-2.5 py-1 rounded-full">LGS</span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-[#0d1b4a]">Ankara Fen Lisesi <span className="text-[#0d1b4a] font-bold ml-1">(%0.2 Dilim)</span></td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="text-slate-400 hover:text-[#0d1b4a] transition-colors p-1.5 rounded hover:bg-slate-100" title="Düzenle">
                                                <span className="material-symbols-outlined text-sm">edit</span>
                                            </button>
                                            <button className="text-slate-400 hover:text-red-600 transition-colors p-1.5 rounded hover:bg-red-50" title="Sil">
                                                <span className="material-symbols-outlined text-sm">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-[#0d1b4a]/5 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-[#0d1b4a]">3</td>
                                    <td className="px-6 py-4 font-medium text-[#0d1b4a]">2023</td>
                                    <td className="px-6 py-4 text-[#0d1b4a] font-bold">Can Eren</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-purple-100 text-purple-800 border border-purple-200 text-xs font-semibold px-2.5 py-1 rounded-full">LGS</span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-[#0d1b4a]">ODTÜ Fen Lisesi <span className="text-[#0d1b4a] font-bold ml-1">(%0.5 Dilim)</span></td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="text-slate-400 hover:text-[#0d1b4a] transition-colors p-1.5 rounded hover:bg-slate-100" title="Düzenle">
                                                <span className="material-symbols-outlined text-sm">edit</span>
                                            </button>
                                            <button className="text-slate-400 hover:text-red-600 transition-colors p-1.5 rounded hover:bg-red-50" title="Sil">
                                                <span className="material-symbols-outlined text-sm">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
                        <span className="text-sm text-slate-500 font-medium hidden sm:block">Toplam: <span className="font-bold text-[#0d1b4a]">53 kayıt</span></span>
                        <nav className="flex items-center gap-1 w-full sm:w-auto justify-end">
                            <button className="p-1 rounded hover:bg-slate-200 text-slate-400 disabled:opacity-50 transition-colors">
                                <span className="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            <button className="w-8 h-8 rounded bg-[#0d1b4a] text-white text-sm font-semibold shadow-sm">1</button>
                            <button className="w-8 h-8 rounded hover:bg-slate-200 text-[#0d1b4a] text-sm font-medium transition-colors">2</button>
                            <button className="w-8 h-8 rounded hover:bg-slate-200 text-[#0d1b4a] text-sm font-medium transition-colors">3</button>
                            <span className="px-2 text-slate-400">...</span>
                            <button className="p-1 rounded hover:bg-slate-200 text-slate-500 transition-colors">
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
