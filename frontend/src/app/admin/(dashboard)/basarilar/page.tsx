"use client";

import Link from "next/link";
import { useState } from "react";

const initialData = [
    { id: 1, year: "2023", name: "Ahmet Yılmaz", type: "YKS", location: "Hacettepe Üniversitesi Tıp Fakültesi" },
    { id: 2, year: "2023", name: "Ayşe Durmuş", type: "LGS", location: "Ankara Fen Lisesi (%0.2 Dilim)" },
    { id: 3, year: "2023", name: "Can Eren", type: "LGS", location: "ODTÜ Fen Lisesi (%0.5 Dilim)" },
    { id: 4, year: "2023", name: "Mehmet Demir", type: "YKS", location: "ODTÜ Bilgisayar Mühendisliği" },
    { id: 5, year: "2023", name: "Elif Şahin", type: "LGS", location: "Galatasaray Lisesi (%0.05 Dilim)" },
];

export default function BasarilarPage() {
    const [basarilar, setBasarilar] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    
    // Modal states
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    // Form state for editing
    const [editForm, setEditForm] = useState({ id: 0, year: "", name: "", type: "", location: "" });

    const itemsPerPage = 3;
    const totalPages = Math.ceil(basarilar.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = basarilar.slice(startIndex, startIndex + itemsPerPage);

    const handleDeleteClick = (item: any) => {
        setSelectedItem(item);
        setIsDeleteOpen(true);
    };

    const confirmDelete = () => {
        setBasarilar(basarilar.filter(b => b.id !== selectedItem.id));
        setIsDeleteOpen(false);
        setSelectedItem(null);
        // adjust pagination if we delete last item of page
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
        setBasarilar(basarilar.map(b => b.id === editForm.id ? editForm : b));
        setIsEditOpen(false);
        setSelectedItem(null);
    };

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
                                {currentItems.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-[#0d1b4a]/5 transition-colors group">
                                        <td className="px-6 py-4 font-medium text-[#0d1b4a]">{startIndex + index + 1}</td>
                                        <td className="px-6 py-4 font-medium text-[#0d1b4a]">{item.year}</td>
                                        <td className="px-6 py-4 text-[#0d1b4a] font-bold">{item.name}</td>
                                        <td className="px-6 py-4">
                                            <span className={`border text-xs font-semibold px-2.5 py-1 rounded-full ${item.type === 'YKS' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-purple-100 text-purple-800 border-purple-200'}`}>
                                                {item.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-[#0d1b4a]">{item.location}</td>
                                        <td className="px-6 py-4 text-right">
                                            {/* We keep the opacity transitions but they become completely solid on group hover. We could also just show them permanently, but user just said "ogrencının uzerine geldıgınde duzenleme isareti ve silme isareti geliyor", which means keeping hover is fine. */}
                                            <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => handleEditClick(item)} className="text-slate-400 hover:text-[#0d1b4a] transition-colors p-1.5 rounded hover:bg-slate-100" title="Düzenle">
                                                    <span className="material-symbols-outlined text-sm">edit</span>
                                                </button>
                                                <button onClick={() => handleDeleteClick(item)} className="text-slate-400 hover:text-red-600 transition-colors p-1.5 rounded hover:bg-red-50" title="Sil">
                                                    <span className="material-symbols-outlined text-sm">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {currentItems.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-slate-500">Kayıt bulunamadı.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
                        <span className="text-sm text-slate-500 font-medium hidden sm:block">Toplam: <span className="font-bold text-[#0d1b4a]">{basarilar.length} kayıt</span></span>
                        <nav className="flex items-center gap-1 w-full sm:w-auto justify-end">
                            <button 
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="p-1 rounded hover:bg-slate-200 text-slate-400 disabled:opacity-50 transition-colors">
                                <span className="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-8 h-8 rounded text-sm font-semibold transition-colors ${currentPage === page ? 'bg-[#0d1b4a] text-white shadow-sm' : 'hover:bg-slate-200 text-[#0d1b4a]'}`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button 
                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages || totalPages === 0}
                                className="p-1 rounded hover:bg-slate-200 text-slate-500 disabled:opacity-50 transition-colors">
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                        </nav>
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
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Başarıyı Sil</h3>
                            <p className="text-slate-500 text-sm mb-6">
                                <span className="font-semibold text-slate-700">{selectedItem?.name}</span> isimli öğrencinin kaydını silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
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
                            <h3 className="text-lg font-bold text-[#0d1b4a]">Başarı Düzenle</h3>
                            <button onClick={() => setIsEditOpen(false)} className="text-slate-400 hover:text-slate-600">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={confirmEdit} className="p-6 flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Öğrenci Adı</label>
                                <input required type="text" value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0d1b4a] outline-none" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Sınav Tipi</label>
                                    <select value={editForm.type} onChange={e => setEditForm({...editForm, type: e.target.value})} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0d1b4a] outline-none">
                                        <option value="YKS">YKS</option>
                                        <option value="LGS">LGS</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Yıl</label>
                                    <input required type="text" value={editForm.year} onChange={e => setEditForm({...editForm, year: e.target.value})} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0d1b4a] outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Kazanılan Yer / Dilim</label>
                                <input required type="text" value={editForm.location} onChange={e => setEditForm({...editForm, location: e.target.value})} className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0d1b4a] outline-none" />
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

