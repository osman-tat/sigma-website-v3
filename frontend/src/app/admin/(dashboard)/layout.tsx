"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isCurrent = (path: string) => pathname === path;

    return (
        <div className="relative flex h-screen w-full flex-row overflow-hidden bg-[#f8f5f5]">
            {/* Sidebar */}
            <div className="flex h-full w-[280px] flex-col justify-between bg-white border-r border-slate-200 shrink-0 p-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 px-3 py-4 border-b border-slate-200">
                        <div className="bg-[#0d1b4a] rounded-lg size-10 flex items-center justify-center text-white font-bold text-xl">
                            6S
                        </div>
                        <h1 className="text-[#0d1b4a] text-lg font-bold leading-normal">6 Sigma Admin</h1>
                    </div>
                    <nav className="flex flex-col gap-2 mt-2">
                        <Link
                            href="/admin"
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors font-medium ${isCurrent("/admin")
                                ? "bg-slate-50 text-[#0d1b4a] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-1 before:bg-[#eab308] before:rounded-r font-bold"
                                : "text-[#0d1b4a]/80 hover:text-[#0d1b4a] hover:bg-slate-50"
                                }`}
                        >
                            <span className="material-symbols-outlined text-[24px]">dashboard</span>
                            <p className="text-sm leading-normal">Dashboard</p>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 px-3 py-3 text-[#0d1b4a]/80 hover:text-[#0d1b4a] hover:bg-slate-50 rounded-lg transition-colors font-medium"
                        >
                            <span className="material-symbols-outlined text-[24px]">language</span>
                            <p className="text-sm leading-normal">Site Yönetimi</p>
                        </Link>
                        <Link
                            href="/admin/ayarlar"
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors font-medium ${isCurrent("/admin/ayarlar")
                                ? "bg-slate-50 text-[#0d1b4a] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-1 before:bg-[#eab308] before:rounded-r font-bold"
                                : "text-[#0d1b4a]/80 hover:text-[#0d1b4a] hover:bg-slate-50"
                                }`}
                        >
                            <span className="material-symbols-outlined text-[24px]">settings</span>
                            <p className="text-sm leading-normal">Site Ayarları</p>
                        </Link>
                        <Link
                            href="/admin/duyurular"
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors font-medium ${isCurrent("/admin/duyurular")
                                ? "bg-slate-50 text-[#0d1b4a] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-1 before:bg-[#eab308] before:rounded-r font-bold"
                                : "text-[#0d1b4a]/80 hover:text-[#0d1b4a] hover:bg-slate-50"
                                }`}
                        >
                            <span className="material-symbols-outlined text-[24px]">campaign</span>
                            <p className="text-sm leading-normal">Duyuru Yönetimi</p>
                        </Link>
                        <Link
                            href="/admin/basarilar"
                            className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors font-medium ${isCurrent("/admin/basarilar")
                                ? "bg-slate-50 text-[#0d1b4a] relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-8 before:w-1 before:bg-[#eab308] before:rounded-r font-bold"
                                : "text-[#0d1b4a]/80 hover:text-[#0d1b4a] hover:bg-slate-50"
                                }`}
                        >
                            <span className="material-symbols-outlined text-[24px]">emoji_events</span>
                            <p className="text-sm leading-normal">Başarı Yönetimi</p>
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-1 border-t border-slate-200 pt-4 mt-4">
                    <div className="flex items-center gap-3 px-3 py-2 text-[#0d1b4a]">
                        <span className="material-symbols-outlined text-[24px]">person</span>
                        <p className="text-sm font-bold leading-normal">Rehberlik Servisi</p>
                    </div>
                    <Link
                        href="/admin/login"
                        className="flex items-center gap-3 px-3 py-2 text-[#0d1b4a]/80 hover:text-red-600 transition-colors font-medium"
                    >
                        <span className="material-symbols-outlined text-[24px]">logout</span>
                        <p className="text-sm leading-normal">Çıkış Yap</p>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 overflow-hidden bg-white">
                <header className="flex items-center justify-between border-b border-slate-200 px-8 py-4 bg-white sticky top-0 z-10">
                    <div className="flex gap-2 items-center">
                        <span className="text-slate-500 text-sm font-medium">Admin</span>
                        <span className="text-slate-300 text-sm">/</span>
                        <span className="text-slate-900 text-sm font-medium">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                            <span className="material-symbols-outlined text-[24px]">notifications</span>
                            <span className="absolute top-1 right-1 size-2.5 bg-red-600 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 bg-slate-50 py-1.5 px-3 rounded-full border border-slate-200">
                            <div className="size-8 rounded-full bg-[#0d1b4a] text-white flex items-center justify-center text-sm font-bold">
                                RS
                            </div>
                            <span className="text-sm font-medium text-slate-700 pr-2">Rehberlik S.</span>
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 flex flex-col bg-slate-50">
                    {children}
                </div>
            </div>
        </div>
    );
}
