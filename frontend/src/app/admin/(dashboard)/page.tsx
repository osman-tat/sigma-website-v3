import Link from "next/link";

export default function AdminDashboardPage() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center">
            <div className="max-w-4xl w-full mx-auto space-y-16 -mt-20">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d1b4a] tracking-tight">
                        Hoş Geldiniz, Yönetici
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        6 Sigma Eğitim Kurumları yönetim paneline giriş yaptınız. Lütfen yapmak istediğiniz hızlı işlemi seçin veya sol menüyü kullanın.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="/admin/duyurular/yeni" className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-slate-200 bg-white hover:border-red-600/50 hover:shadow-lg transition-all group">
                        <div className="bg-red-600/10 text-red-600 p-5 rounded-full group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-4xl">add_alert</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">Yeni Duyuru Ekle</h3>
                            <p className="text-sm text-slate-500 mt-2">Sisteme yeni bir duyuru girin</p>
                        </div>
                    </Link>

                    <Link href="/admin/basarilar/yeni" className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#eab308]/50 hover:shadow-lg transition-all group">
                        <div className="bg-[#eab308]/10 text-[#eab308] p-5 rounded-full group-hover:bg-[#eab308] group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-4xl">workspace_premium</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">Başarı Kaydı Ekle</h3>
                            <p className="text-sm text-slate-500 mt-2">Yeni bir öğrenci başarısı ekleyin</p>
                        </div>
                    </Link>

                    <Link href="/admin/ayarlar" className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#0d1b4a]/50 hover:shadow-lg transition-all group">
                        <div className="bg-[#0d1b4a]/10 text-[#0d1b4a] p-5 rounded-full group-hover:bg-[#0d1b4a] group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-4xl">tune</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900">Site Ayarları</h3>
                            <p className="text-sm text-slate-500 mt-2">Genel yapılandırmaları yönetin</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
