"use client";

import { useState } from "react";

export default function AyarlarPage() {
    const [phone1, setPhone1] = useState("0 (424) 233 44 55");
    const [phone2, setPhone2] = useState("0 (555) 123 45 67");
    const [email, setEmail] = useState("bilgi@6sigmaegitim.com");
    const [address, setAddress] = useState("İzzetpaşa Mah. Gazi Cad. No:123 Merkez / Elazığ");
    const [mapIframe, setMapIframe] = useState('<iframe src="https://www.google.com/maps/embed?pb=..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    const [instagram, setInstagram] = useState("https://instagram.com/6sigmaegitim");
    const [facebook, setFacebook] = useState("https://facebook.com/6sigmaegitim");
    const [whatsapp, setWhatsapp] = useState("+905551234567");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Site ayarları başarıyla güncellendi! (Dummy Action)");
    };

    return (
        <form onSubmit={handleSubmit} className="relative max-w-5xl mx-auto w-full space-y-8 pb-24">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-[#0d1b4a]">Site Ayarları</h1>
                    <p className="text-sm text-slate-500 mt-1">Sitenizin genel iletişim, marka ve harita bilgilerini buradan yönetebilirsiniz.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sol Sütun (İletişim, Harita) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* İletişim Bilgileri */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50">
                            <h3 className="text-lg font-semibold text-[#0d1b4a] flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#0d1b4a]/70">contact_phone</span>
                                İletişim Bilgileri
                            </h3>
                        </div>
                        <div className="p-6 space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Telefon 1</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                            <span className="material-symbols-outlined text-sm">phone</span>
                                        </span>
                                        <input value={phone1} onChange={(e) => setPhone1(e.target.value)} className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[#0d1b4a]/20 focus:border-[#0d1b4a] outline-none transition-all" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Telefon 2</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                            <span className="material-symbols-outlined text-sm">phone</span>
                                        </span>
                                        <input value={phone2} onChange={(e) => setPhone2(e.target.value)} className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[#0d1b4a]/20 focus:border-[#0d1b4a] outline-none transition-all" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">E-posta Adresi</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                        <span className="material-symbols-outlined text-sm">mail</span>
                                    </span>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[#0d1b4a]/20 focus:border-[#0d1b4a] outline-none transition-all" type="email" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Açık Adres (Elazığ)</label>
                                <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[#0d1b4a]/20 focus:border-[#0d1b4a] outline-none transition-all resize-none" rows={3}></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Google Harita */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50">
                            <h3 className="text-lg font-semibold text-[#0d1b4a] flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#0d1b4a]/70">map</span>
                                Google Harita (İletişim Sayfası)
                            </h3>
                        </div>
                        <div className="p-6 space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Google Harita Iframe Kodu</label>
                                <textarea value={mapIframe} onChange={(e) => setMapIframe(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[#0d1b4a]/20 focus:border-[#0d1b4a] outline-none transition-all font-mono text-xs text-slate-500" rows={4}></textarea>
                                <p className="text-xs text-slate-400 mt-1.5">Google Maps'ten aldığınız "Harita Yerleştir" iframe kodunu buraya yapıştırın.</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Harita Önizleme</label>
                                <div className="w-full h-48 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-[#0d1b4a]/5 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-4xl text-[#0d1b4a]/30">map</span>
                                    </div>
                                    <div className="text-sm text-slate-500 z-10 bg-white/80 px-3 py-1.5 rounded-md backdrop-blur-sm">Elazığ Harita Görünümü</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sağ Sütun */}
                <div className="space-y-8">
                    {/* Sosyal Medya */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50">
                            <h3 className="text-lg font-semibold text-[#0d1b4a] flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#0d1b4a]/70">share</span>
                                Sosyal Medya
                            </h3>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Instagram URL</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                        <span className="material-symbols-outlined text-sm">photo_camera</span>
                                    </span>
                                    <input value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[#0d1b4a]/20 focus:border-[#0d1b4a] outline-none transition-all" type="url" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Facebook URL</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                        <span className="material-symbols-outlined text-sm">thumb_up</span>
                                    </span>
                                    <input value={facebook} onChange={(e) => setFacebook(e.target.value)} className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[#0d1b4a]/20 focus:border-[#0d1b4a] outline-none transition-all" type="url" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">WhatsApp Numarası</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                        <span className="material-symbols-outlined text-sm">chat</span>
                                    </span>
                                    <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:ring-[#0d1b4a]/20 focus:border-[#0d1b4a] outline-none transition-all" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mesai Saatleri */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50">
                            <h3 className="text-lg font-semibold text-[#0d1b4a] flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#0d1b4a]/70">schedule</span>
                                Mesai Saatleri
                            </h3>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-slate-700">Hafta İçi</label>
                                <div className="flex items-center gap-2">
                                    <input className="w-24 px-2 py-1.5 rounded-md border border-slate-200 bg-white text-sm outline-none" type="time" defaultValue="08:30" />
                                    <span className="text-slate-400">-</span>
                                    <input className="w-24 px-2 py-1.5 rounded-md border border-slate-200 bg-white text-sm outline-none" type="time" defaultValue="19:00" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-slate-700">Cumartesi</label>
                                <div className="flex items-center gap-2">
                                    <input className="w-24 px-2 py-1.5 rounded-md border border-slate-200 bg-white text-sm outline-none" type="time" defaultValue="09:00" />
                                    <span className="text-slate-400">-</span>
                                    <input className="w-24 px-2 py-1.5 rounded-md border border-slate-200 bg-white text-sm outline-none" type="time" defaultValue="17:00" />
                                </div>
                            </div>
                            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                                <div>
                                    <label className="text-sm font-medium text-slate-700 block">Pazar</label>
                                    <span className="text-xs text-red-500 font-medium">Kapalı</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0d1b4a]"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sabit Alt Buton Çubuğu */}
            <div className="absolute -bottom-8 -left-8 -right-8 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
                <div className="max-w-5xl mx-auto flex items-center justify-end gap-3 px-8 w-full">
                    <button type="button" className="px-6 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors">
                        İptal
                    </button>
                    <button type="submit" className="px-6 py-2.5 rounded-lg bg-[#0d1b4a] text-white font-medium text-sm hover:bg-blue-900 transition-colors flex items-center gap-2 shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">save</span>
                        Değişiklikleri Kaydet
                    </button>
                </div>
            </div>
        </form>
    );
}
