import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0d1b4a] text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-1 rounded-lg flex items-center justify-center w-12 h-12">
                                <Image src="/images/sigma_logo.png" alt="6 Sigma Logo" width={40} height={40} className="object-contain" />
                            </div>
                            <h2 className="text-white text-2xl font-black tracking-tight">6 SIGMA</h2>
                        </div>
                        <p className="text-white/60 leading-relaxed text-sm">
                            Eğitimde mükemmelliği hedefleyen, başarı odaklı ve modern yaklaşımlarıyla Türkiye'nin öncü eğitim kurumlarından biridir.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/6sigmaegitim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E1306C] transition-all group">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </Link>
                            <Link href="https://www.facebook.com/6SigmaEgitimKurumlari" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1877F2] transition-all group">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </Link>
                            <Link href="https://wa.me/905432674462" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#25D366] transition-all group">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold">Hızlı Menü</h4>
                        <ul className="flex flex-col gap-4 text-white/60 text-sm">
                            <li><Link href="/yks" className="hover:text-white transition-colors">Eğitim Programları</Link></li>
                            <li><Link href="/basarilarimiz" className="hover:text-white transition-colors">Başarı Tablomuz</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">İletişim</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold">İletişim Bilgileri</h4>
                        <ul className="flex flex-col gap-4 text-white/60 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-accent-gold">location_on</span>
                                <span>Ataşehir, Şelale Sk. No:29, 23040 <br />Elazığ Merkez/Elazığ, Park 23 Karşısı</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent-gold">call</span>
                                <span>+90 (543) 267 44 62</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent-gold">mail</span>
                                <span>info@6sigma.edu.tr</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent-gold">schedule</span>
                                <span>Hafta içi: 08:30 - 21:00 <br />Hafta sonu: 09:00 - 18:00</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold">Lokasyonumuz</h4>
                        <div className="h-48 rounded-xl bg-white/5 border border-white/10 overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.1957954556074!2d39.177001000000004!3d38.665206999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4076c02139962f01%3A0x13e8d1077be750fb!2zNiBTxLBHTUEgRcSfaXRpbSBLdXJ1bWxhcsSx!5e1!3m2!1str!2str!4v1773163622445!5m2!1str!2str"
                                className="absolute inset-0 w-full h-full border-0 transition-all duration-500"
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
                    <p>© 2024 6 Sigma Eğitim Kurumları. Tüm Hakları Saklıdır.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
                        <Link href="#" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
