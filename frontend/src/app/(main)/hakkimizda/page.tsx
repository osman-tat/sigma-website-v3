import Image from "next/image";
import Link from "next/link";

export default function HakkimizdaPage() {
  return (
    <>
      <section className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b4a]/80 to-[#0d1b4a]/40 z-10 w-full"></div>
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/image.png"
            alt="Modern Eğitim Ortamı"
            fill
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl pt-24">
          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-lg">Hakkımızda</h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Geleceği başarıyla inşa eden, Elazığ&apos;ın öncü eğitim kurumu ile tanışın. Sınavlara değil, geleceğe hazırlıyoruz.
          </p>
          <div className="mt-8 h-1 w-24 bg-accent-gold mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-20 lg:px-40 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent-red font-bold tracking-widest uppercase text-sm">Biz Kimiz?</span>
            <h2 className="text-[#0d1b4a] text-3xl md:text-4xl font-extrabold mt-2 mb-6">6 Sigma Eğitim Kurumları</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
              6 Sigma Eğitim Kurumları, Elazığ&apos;da akademik mükemmeliyet ve kişiselleştirilmiş koçluk odaklı eğitim veren lider bir kuruluştur. Öğrencilerimizin potansiyellerini en üst seviyeye çıkarmak için modern metodolojilerle yanlarındayız.
              6 Sigma Eğitim Kurumları olarak, ismimizi dünyaca kabul görmüş "mükemmeliyet" standardından alıyoruz. İstatistikte en düşük hata payını ifade eden 6 Sigma felsefesini eğitime uyarlayarak; öğrencilerimizin sınav hazırlık sürecindeki belirsizlikleri ortadan kaldırıyor, eksiklerini veri odaklı analizlerle tespit ediyoruz. Bizim için eğitim, sadece ders anlatmak değil; her öğrencinin potansiyelini en yüksek verimle (sıfır hata hedefiyle) ortaya çıkarmaktır. Uzman kadromuz, bireysel takip sistemimiz ve disiplinli çalışma programımızla, öğrencimizi sadece bir sınava değil, hayalindeki geleceğe hazırlıyoruz. Başarıda tesadüfe yer bırakmıyor, 6 Sigma standartlarında bir gelecek inşa ediyoruz.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Sadece bir dershane değil, öğrencinin her anında yanında olan bir yol arkadaşıyız. Deneyimli eğitim kadromuz ve inovatif yaklaşımımızla hem YKS hem LGS hazırlığında fark yaratıyoruz. Bizimle başarı kaçınılmaz bir sistemin sonucudur.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Kişiselleştirilmiş Eğitim Modeli",
                "Deneyimli Öğretmen Kadrosu",
                "Düzenli Performans Takibi (Yapay Zeka Destekli)",
                "Birebir Psikolojik Rehberlik",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-[#0d1b4a]/10 flex items-center justify-center text-[#0d1b4a]">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </div>
                  <span className="text-slate-700 font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="#iletisim" className="inline-flex items-center justify-center gap-2 bg-[#0d1b4a] text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-[#0d1b4a]/30 hover:bg-[#1a237e] transition-colors">
              Bizimle İletişime Geçin
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
          </div>

          <div className="relative mt-8 md:mt-0">
            {/* Dekoratif kareler */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-gold/20 rounded-2xl -z-10 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0d1b4a]/10 rounded-2xl -z-10"></div>

            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/sinif12_calisma.png"
                alt="Güçlü Eğitim Ortamı"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-6">
                  <div className="size-16 rounded-full bg-accent-gold flex items-center justify-center text-white shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-3xl">award_star</span>
                  </div>
                  <div>
                    <p className="text-[#0d1b4a] text-xl font-extrabold mb-1">3.000+ Öğrenci</p>
                    <p className="text-slate-600 font-medium text-sm">Hedeflerine başarıyla ulaştı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Yönlendirmesi */}
      <section id="iletisim" className="py-24 bg-[#0d1b4a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold rounded-full opacity-5 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white rounded-full opacity-5 blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Eğitimde Fark Yaratmak İçin Buradayız</h2>
          <p className="text-white/80 text-lg md:text-xl font-medium mb-12">Detaylı bilgi ve danışmanlık hizmetlerimizden yararlanmak için Eğitim Merkezimizi ziyaret edebilir veya bizi arayabilirsiniz.</p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="tel:+905432674462" className="flex items-center justify-center gap-3 bg-white text-[#0d1b4a] px-8 py-5 rounded-2xl font-bold shadow-xl hover:bg-slate-50 transition-colors text-lg">
              <span className="material-symbols-outlined">call</span>
              Bizi Arayın
            </Link>
            <Link href="https://wa.me/905432674462" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold shadow-xl shadow-green-500/20 hover:bg-[#128C7E] transition-colors text-lg">
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
