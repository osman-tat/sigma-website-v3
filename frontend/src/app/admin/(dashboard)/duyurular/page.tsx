"use client";

import Link from "next/link";
import { useState } from "react";

const initialData = [
    { id: 1, title: "LGS Deneme 3 Cevap Anahtarları", category: "Deneme Sonuçları", publishDate: "10.05.2023", endDate: "17.05.2023", status: "Yayında", statusColor: "emerald" },
    { id: 2, title: "YKS Motivasyon Semineri", category: "Genel Duyuru", publishDate: "12.05.2023", endDate: "12.05.2023", status: "Yayında", statusColor: "emerald" },
    { id: 3, title: "Yarıyıl Etüt Programı", category: "Genel Duyuru", publishDate: "01.02.2023", endDate: "28.02.2023", status: "Süresi Doldu", statusColor: "red" },
    { id: 4, title: "Ara Tatil Kampı Başvuruları", category: "Genel Duyuru", publishDate: "15.11.2023", endDate: "20.11.2023", status: "Yayında", statusColor: "emerald" },
    { id: 5, title: "Yaz Dönemi Kurs Kayıtları", category: "Deneme Sonuçları", publishDate: "01.06.2023", endDate: "30.06.2023", status: "Taslak", statusColor: "slate" },
];

export default function DuyurularPage() {
    const [duyurular, setDuyurular] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    
    // Modal states
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    // Form state for editing
    const [editForm, setEditForm] = useState({ id: 0, title: "", category: "", publishDate: "", endDate: "", status: "", statusColor: "" });

    const itemsPerPage = 3;
    const totalPages = Math.ceil(duyurular.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = duyurular.slice(startIndex, startIndex + itemsPerPage);

    const handleDeleteClick = (item: any) => {
        setSelectedItem(item);
        setIsDeleteOpen(true);
    };

    const confirmDelete = () => {
        setDuyurular(duyurular.filter(b => b.id !== selectedItem.id));
        setIsDeleteOpen(false);
        setSelectedItem(null);
        if (currentItems.length === 1 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleEditClick = (item: any) => {
        setSelectedItem(item);
        setEditForm(item);
        setIsEditOpen(true);
    };

    const confirmEdit = (e: React.FormEvent) => {
        e.preventDefault();
        setDuyurular(duyurular.map(b => b.id === editForm.id ? editForm : b));
        setIsEditOpen(false);
        setSelectedItem(null);
    };

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
                    <option>Genel Duyuru</option>
                    <option>Deneme Sonuçları</option>
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
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {currentItems.map((item, index) => (
                                <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-6 py-4 text-sm text-slate-500 font-medium">{startIndex + index + 1}</td>
                                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">{item.title}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            item.category === "Deneme Sonuçları" ? "bg-blue-50 text-blue-700 border border-blue-200" :
                                            "bg-purple-50 text-purple-700 border border-purple-200"
                                        }`}>
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500">{item.publishDate}</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">{item.endDate}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-${item.statusColor}-50 text-${item.statusColor}-700 border border-${item.statusColor}-200`}>
                                            <span className={`size-1.5 rounded-full bg-${item.statusColor}-500`}></span> {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => handleEditClick(item)} className="p-1.5 text-slate-400 hover:text-[#0d1b4a] rounded-md hover:bg-slate-100 transition-colors" title="Düzenle">
                                                <span className="material-symbols-outlined text-[18px]">edit</span>
                                            </button>
                                            <button onClick={() => handleDeleteClick(item)} className="p-1.5 text-slate-400 hover:text-red-600 rounded-md hover:bg-red-50 transition-colors" title="Sil">
                                                <span className="material-symbols-outlined text-[18px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {currentItems.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="px-6 py-8 text-center text-slate-500">Kayıt bulunamadı.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
                    <span className="text-sm text-slate-500 hidden sm:block">Toplam {duyurular.length} kayıt</span>
                    <div className="flex gap-1 w-full sm:w-auto justify-end">
                        <button 
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="p-1 rounded bg-white border border-slate-200 text-slate-400 disabled:opacity-50 hover:bg-slate-50">
                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${currentPage === page ? 'bg-[#0d1b4a] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                            >
                                {page}
                            </button>
                        ))}

                        <button 
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages || totalPages === 0}
                            className="p-1 rounded bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50">
                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal - Silme Onayı */}
            {isDeleteOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
                                <span className="material-symbols-outlined text-3xl">warning</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Duyuruyu Sil</h3>
                            <p className="text-slate-500 text-sm mb-6">
                                <span className="font-semibold text-slate-700">{selectedItem?.title}</span> başlıklı duyuruyu silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
                            </p>
                            <div className="flex gap-3 w-full">
                                <button onClick={() => setIsDeleteOpen(false)} className="flex-1 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-colors">
                                    İptal
                                </button>
                                <button onClick={confirmDelete} className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                                    Evet, Sil
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal - Düzenleme */}
            {isEditOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <h3 className="text-lg font-bold text-[#0d1b4a]">Duyuru Düzenle</h3>
                            <button onClick={() => setIsEditOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={confirmEdit} className="p-6 flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Başlık</label>
                                <input required type="text" value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0d1b4a] outline-none" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Kategori</label>
                                    <select value={editForm.category} onChange={e => setEditForm({...editForm, category: e.target.value})} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0d1b4a] outline-none">
                                        <option value="Genel Duyuru">Genel Duyuru</option>
                                        <option value="Deneme Sonuçları">Deneme Sonuçları</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Yayın Tarihi</label>
                                    <div className="w-full border border-slate-100 bg-slate-50 rounded-lg px-3 py-2 text-sm text-slate-400">{editForm.publishDate}</div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Bitiş Tarihi</label>
                                <input required type="text" value={editForm.endDate} onChange={e => setEditForm({...editForm, endDate: e.target.value})} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0d1b4a] outline-none" placeholder="17.05.2023" />
                            </div>
                            <div className="flex gap-3 mt-4 justify-end">
                                <button type="button" onClick={() => setIsEditOpen(false)} className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg font-medium transition-colors text-sm">
                                    İptal
                                </button>
                                <button type="submit" className="px-5 py-2.5 bg-[#0d1b4a] hover:bg-blue-900 text-white rounded-lg font-medium transition-colors text-sm">
                                    Kaydet
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
