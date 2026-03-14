"use client";

import Link from "next/link";

export default function DuyurularPage() {
    return (
        <div className="max-w-[1200px] mx-auto w-full space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-[#0d1b4a] tracking-tight">Duyuru Yönetimi</h2>
                    <p className="text-slate-500 mt-1 text-sm">Tüm duyuruları görüntüleyin, düzenleyin ve yeni duyurular oluşturun.</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
                        <input className="pl-9 pr-4 py-2.5 w-full bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-[#0d1b4a] focus:border-[#0d1b4a] text-slate-900 placeholder-slate-400 outline-none transition-all shadow-sm" placeholder="Duyuru ara..." type="text" />
                    </div>
                    <Link href="/admin/duyurular/yeni" className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0d1b4a] hover:bg-blue-900 text-white rounded-lg text-sm font-medium transition-colors shadow-sm whitespace-nowrap">
                        <span className="material-symbols-outlined text-[18px]">add</span>
                        Yeni Duyuru
                    </Link>
                </div>
            </div>

            <div className="flex gap-2">
                <select className="bg-white border border-slate-200 rounded-lg text-sm text-slate-700 py-2 px-3 focus:ring-[#0d1b4a] focus:border-[#0d1b4a] outline-none cursor-pointer">
                    <option>Tüm Kategoriler</option>
                    <option>Sınav</option>
                    <option>Etkinlik</option>
                    <option>Program</option>
                </select>
                <select className="bg-white border border-slate-200 rounded-lg text-sm text-slate-700 py-2 px-3 focus:ring-[#0d1b4a] focus:border-[#0d1b4a] outline-none cursor-pointer">
                    <option>Tüm Durumlar</option>
                    <option>Yayında</option>
                    <option>Süresi Doldu</option>
                    <option>Taslak</option>
                </select>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-16">#</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Başlık</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Kategori</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Yayın Tarihi</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Bitiş Tarihi</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Durum</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Ekler</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {/* Dummy Row 1 */}
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-4 text-sm text-slate-500 font-medium">1</td>
                                <td className="px-6 py-4 text-sm text-slate-900 font-medium">LGS Deneme 3 Cevap Anahtarları</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                                        Sınav
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">10.05.2023</td>
                                <td className="px-6 py-4 text-sm text-slate-500">17.05.2023</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        <span className="size-1.5 rounded-full bg-emerald-500"></span> Yayında
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]">attach_file</span>
                                        2 PDF
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 text-slate-400 hover:text-[#0d1b4a] rounded-md hover:bg-slate-100 transition-colors" title="Düzenle">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                        <button className="p-1.5 text-slate-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors" title="Sil">
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Dummy Row 2 */}
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-4 text-sm text-slate-500 font-medium">2</td>
                                <td className="px-6 py-4 text-sm text-slate-900 font-medium">YKS Motivasyon Semineri</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                                        Etkinlik
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">12.05.2023</td>
                                <td className="px-6 py-4 text-sm text-slate-500">12.05.2023</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                        <span className="size-1.5 rounded-full bg-emerald-500"></span> Yayında
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500 text-center">-</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 text-slate-400 hover:text-[#0d1b4a] rounded-md hover:bg-slate-100 transition-colors" title="Düzenle">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                        <button className="p-1.5 text-slate-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors" title="Sil">
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Dummy Row 3 */}
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-4 text-sm text-slate-500 font-medium">3</td>
                                <td className="px-6 py-4 text-sm text-slate-900 font-medium">Yarıyıl Etüt Programı</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                                        Program
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">01.02.2023</td>
                                <td className="px-6 py-4 text-sm text-slate-500">28.02.2023</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                                        <span className="size-1.5 rounded-full bg-red-500"></span> Süresi Doldu
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]">attach_file</span>
                                        1 PDF
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 text-slate-400 hover:text-[#0d1b4a] rounded-md hover:bg-slate-100 transition-colors" title="Düzenle">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                        </button>
                                        <button className="p-1.5 text-slate-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors" title="Sil">
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
                    <span className="text-sm text-slate-500 hidden sm:block">Toplam 24 duyurudan 1-3 arası gösteriliyor</span>
                    <div className="flex gap-1 w-full sm:w-auto justify-end">
                        <button className="p-1 rounded bg-white border border-slate-200 text-slate-400 disabled:opacity-50">
                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button className="px-3 py-1 rounded bg-[#0d1b4a] text-white text-sm font-medium">1</button>
                        <button className="px-3 py-1 rounded bg-white border border-slate-200 text-slate-600 text-sm hover:bg-slate-50">2</button>
                        <button className="px-3 py-1 rounded bg-white border border-slate-200 text-slate-600 text-sm hover:bg-slate-50">3</button>
                        <button className="p-1 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">
                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
