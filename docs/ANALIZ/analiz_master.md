# 🧠 6 Sigma - Analiz Master Belgesi

Bu belge, HAVSAN İteratif Analiz Sistemi (Rule 7) uyarınca oluşturulmuştur. Lütfen soruların yanındaki yorum alanlarına yanıtlarınızı yazınız.

---
**İlerleme:** Round 1/10, Tamamlanma: 0/5 (%0)

## 📝 Round 1 Soruları

- [x] **Soru 1:** Dershanenin kurumsal renkleri veya logosu mevcut mu? Eğer varsa, baskın renkler nelerdir? (Örn: Lacivert-Turuncu, Yeşil-Siyah vb.)
  → **YANIT:** Dershane logosu mevcut ve baskın renkler beyaz lacivert ve kırmızı.

- [x] **Soru 2:** "Deneme sonuçları ve analizleri" denilince tam olarak neyi kastediyoruz? Öğrenci sadece puanını mı görecek, yoksa Türkiye geneli sıralama, konu analizi gibi detaylı grafikler olacak mı?
  → **YANIT:** Bazı denemelerde karne veriliyor hem onu indirebilecek hem de bazı denemelere özgü yapay zeka analizli deneme karneleri olacak. Bunları indirebilecek.

- [x] **Soru 3:** Duyurular kısmında sadece metin mi olacak, yoksa PDF/Görsel paylaşımı (Örn: Haftalık ders programı) yapılacak mı?
  → **YANIT:** Genel olarak metin olacak ama haftada bir deneme sınav cevap anahtarı paylaşımı yapılıyor duyurular kısmından admin paneli ile bu deneme cevap anahtarları deneme sınavında sonra öğrencilerle paylaşılacak. 

- [x] **Soru 4:** Web sitesinde "Online Kayıt" veya "İletişim Formu" gibi aktif bir veri toplama mekanizması istiyor musunuz?
  → **YANIT:** Online olarak kayıt alamayacağız ancak müşteriyi veliyi yüz yüze kayıda ve görüşmeye yönlendirecek.

- [x] **Soru 5:** Sitenin dili sadece Türkçe mi olacak, yoksa İngilizce vb. başka diller de düşünülüyor mu?
  → **YANIT:** Tamamen Türkçe olacak.

---
**İlerleme:** Round 2/10, Tamamlanma: 5/10 (%50)

## 📝 Round 2 Soruları (Derinleşme)

- [x] **Soru 6 (Öğrenci Girişi):** Öğrenciler panele nasıl giriş yapacak? (Örn: TC Kimlik No + Telefon, veya önceden tanımlanmış bir şifre?)
  → **YANIT:** Panel daha çok websitesini yönetenlere yönelik olacak. Öğrencilerin ise deneme sonuçlarını yüklemesi ve indirmesi için TC ve dogum tarıhı ile giriş yapması gerekecek. Sadece yapay zeka desteklı sonuz apısınden gelen PDF i gorucek. Bunun dısında baska hıcbır seye erısemıcek.API den tum yapay zeka desteklı karneler donucek, bu karnelerın hepsı gorunucek.API de uc farklı endpoint olucak, tum heosını donen ve sade son karneyı donen ve tum karnelerı donen endpointler olucak.  

- [x] **Soru 7 (AI Analiz):** "Yapay zeka analizli karneler" hazır PDF olarak mı sisteme yüklenecek, yoksa ham veriler yüklenecek ve site içinde mi oluşturulacak?
  → **YANIT:** yapay zeka destekli karne rapor uygulaması havsan.cloud domain inden bir api istegi ile çekilecek. Gelen yanıt govdesınde ogrencı bılgılerı sınav bilgisi ve PDF base 64 olarak servisten yanıt gelicek.

- [x] **Soru 8 (Admin Paneli):** Duyuru ve cevap anahtarı yüklemek için bir Admin Paneli ihtiyacımız net. Bu paneli kimler kullanacak? (Sadece kurum sahibi mi, yoksa sekreterlik/rehberlik birimi de olacak mı?)
  → **YANIT:** Kurum sahibine ek olarak bu panele rehberlik birimi de erişebilecek.

- [x] **Soru 9 (Landing Page):** Ana sayfada "Başarılarımız" (Örn: Kazanan öğrenciler listesi) veya "Öğretmen Kadromuz" gibi bölümler istiyor musunuz?
  → **YANIT:** Evet başarılarımız kısmında öğrencilerimizin başarıları yer alacak ve bu başarılar her sene değişebilecek. Panelden girip verileri güncelleyebilecekler. Öğretmen kadrosu istenmiyor.

- [x] **Soru 10 (Lokasyon):** Dershanenin kaç şubesi var? İletişim sayfasında tek bir harita/adres mi olacak yoksa çoklu mu?
  → **YANIT:** Bir şubesi var, biri YKS biri LGS üzerine yoğunlaşmış durumda.

---
**İlerleme:** Round 3/10, Tamamlanma: 10/15 (%66)

## 📝 Round 3 Soruları (Teknik ve İçerik Detayları)

- [x] **Soru 11 (Drive Entegrasyonu):** Google Drive üzerindeki karnelerle öğrencileri nasıl eşleştireceğiz? (Örn: Dosya isimleri öğrenci numarası mı olacak? `12345.pdf` gibi?)
  → **YANIT:** Öğrenci ismi ve soy ismi ile eşleştirme yapılacak.

- [x] **Soru 12 (YKS & LGS Ayrımı):** Tek şube olmasına rağmen YKS ve LGS kursları için ana sayfada ayrı bölümler/butonlar istiyor musunuz? (Girişte "LGS için tıkla" / "YKS için tıkla" gibi bir karşılama mı istersiniz?)
  → **YANIT:** Şüphesiz olmalı. YKS ve LGS için iki ayrı üst kısımda buton olmalı ve ayrı sayfalar açılıp detay verilmeli. Hakkımızda, Başarılarımız, Duyurular (içinde deneme sonuçları bulunmalı), YKS, LGS butonları/sayfaları olmalı ve de anasayfa olmalı.

- [x] **Soru 13 (Başarılar Görselliği):** Başarılar kısmında öğrencilerin fotoğrafları olacak mı yoksa sadece isim ve yerleştikleri okul bilgisi mi yeterli?
  → **YANIT:** Fotoğraf olmayacak yalnızca öğrenci ismi ve başarısı yer alacak. Her sene kaç tıp kazanıldığı gibi detaylı bilgiler de mevcut.

- [x] **Soru 14 (İletişim ve Formlar):** İletişim sayfasından veya "Kayıt için bilgi al" butonundan gelen mesajların nereye gitmesini istersiniz? (WhatsApp, E-posta veya direkt Admin Paneli?)
  → **YANIT:** WhatsApp ve telefonla aramaya yönlendirsin.

- [x] **Soru 15 (Hosting & Deployment):** Projeyi HAVSAN standartlarında (Coolify üzerinden havsan.cloud altyapısına) mı kuracağız? (Eğer özel bir tercihiniz yoksa standart prosedürle ilerleyeceğim.)
  → **YANIT:** Hayır, farklı bir hosting ile yayına alınacak.

---
**İlerleme:** Round 4/10, Tamamlanma: 15/20 (%75)

- [x] **Soru 16 (Duyuru Detayları):** Duyurular sadece metin olabiliyordu. Peki bu duyurulara "Kategori" (Örn: Sınav Takvimi, Genel Duyuru, Tatil Bilgisi) eklemeli miyiz? Ayrıca her duyuru için bir "Bitiş Tarihi" (Süresi dolunca otomatik kalksın mı?) istiyor musunuz?
  → **YANIT:** Evet her duyuru için bir kategori belirlenebilir. Deneme cevap anahtarı, deneme sınav sonucu görüntüleme (bu kısımda öğrenci girişi olmalı), genel duyurular, tatil bilgisi gibi kategoriler olacak.

- [x] **Soru 17 (Cevap Anahtarı Yönetimi):** Admin paneline cevap anahtarı yüklerken; sadece bir PDF mi yüklenecek, yoksa cevaplar dijital olarak (A-B-C-D gibi) sisteme girilecek mi? (Hızlı kontrol ekranı gibi bir şey isterseniz teknik detay değişir.)
  → **YANIT:** Cevap anahtarının PDF olarak yüklenmesi sağlanacak.

- [x] **Soru 18 (Başarılar Modülü):** "Her sene kaç tıp kazanıldığı" bilgisini grafiksel olarak (bar chart, pie chart vb.) göstermek ister misiniz? Verileri girerken "Öğrenci Adı - Kazandığı Yer" formatında mı gireceğiz yoksa sadece "Tıp: 15 Kişi" gibi sayısal bir özet mi olacak?
  → **YANIT:** Yıllara göre bir grafik yapacağız (son 8 senede kaç tıp kazanıldı şeklinde). Ayrı olarak her sene o senenin öğrencileri neler kazandı, onlar da ek olarak girilecek.

- [x] **Soru 19 (Google Drive Teknik):** Drive klasöründen "İsim Soyisim" ile eşleştirme yaparken; eğer dosyada "Ali Yilmaz" yazıyor ama sistemdeki öğrenci "Ali Yılmaz" (Türkçe karakter farkı) ise sistem hata verir. Bu tür durumlar için teknik bir "Normalization" (Karakter temizleme) süreci planlamamı ister misiniz?
  → **YANIT:** Bunu sonra tekrar konuşalım.

- [x] **Soru 20 (YKS/LGS İçerikleri):** Açılacak olan YKS ve LGS özel sayfalarında; sadece ders programı mı olacak, yoksa "Neden bizimle hazırlanmalısınız?" gibi uzun tanıtım yazıları ve fotoğraflar mı paylaşacağız? (İçerik yoğunluğunu anlamak için soruyorum.)
  → **YANIT:** Neden bizi tercih etmelisiniz diye bir bölüm olacak. Altında; kütüphane, etüt odaları, özel ders imkanı, soru çözüm saatleri, "açık büfe" ders imkanı, kaliteli yayınlar, sık deneme sınavları, rehberlik imkanı gibi hususlar yer alacak.

- [x] **Soru 21 (Hosting Kısıtı):** DB Supabase olacak mı?
  → **YANIT:** Evet, DB Supabase olacak.

---
**İlerleme:** Round 5/10, Tamamlanma: 21/26 (%80)

- [x] **Soru 22 (Öğrenci Veri Yükleme):** Öğrencilerin sistem üzerinde tanınması için verileri Admin paneline nasıl gireceğiz?
  → **YANIT:** Öğrencilerin verilerinin Excel tablosu mevcut.

- [x] **Soru 23 (Başarı Listesi Detayı):** Yıllara göre başarılar panelden mi girilecek?
  → **YANIT:** O bilgiler panelden yazılacak her sene ayrı ayrı. Üniversite ve bölüm detaylı olacak.

- [x] **Soru 24 (Drive Yetkilendirme):** Drive klasörü kurumun kendi mailinde mi?
  → **YANIT:** Kendi adresinde değil. (Harici bir adresten paylaşım veya yetkilendirme yapılacak.)

- [x] **Soru 25 (Görsel İçerik):** Görseller AI ile mi üretilsin?
  → **YANIT:** Fotoğraflar anlık olarak mevcut değil, şu anlık AI ile üretelim sonrasında gerçek fotoları ekleriz.

- [x] **Soru 26 (Duyuru Arşivi):** Eski duyurular saklansın mı?
  → **YANIT:** Gerek yok arşivde tutmaya, sadece güncel duyurular olsun.

---
**İlerleme:** Round 6/10, Tamamlanma: 30/31 (%96)

## 📝 Round 6 Soruları (Format, Erişim ve Stil Detayları)

- [ ] **Soru 27 (Excel Yapısı):** Elinizdeki Excel tablosunda sütun başlıkları nelerdir? (Örn: Ad, Soyad, Öğrenci No, Şifre vb.) İçe aktarma (import) motorunu bu başlıkları otomatik tanıyacak şekilde kodlayabilirim.
  → **YANIT:** ⏳ Kuruma sorulduktan sonra Excel tablosuna erişilecek. (Beklemede).

- [x] **Soru 28 (Drive Erişimi):** Drive klasörü harici bir adresteyse; sistemin bu dosyalara erişebilmesi için ya klasörün "Bağlantıya sahip olan herkes görüntüleyebilir" şeklinde açık olması ya da bizim sistemimize (Service Account) bir "Görüntüleyici" yetkisi verilmesi gerekir. Hangisi sizin için daha uygun?
  → **YANIT:** Klasör doğrudan görüntülenmeyecek. Sisteme giriş yapan öğrenci, kendi karnesini sistemde görebilecek ve indirebilecek. (Yani karneler sisteme yüklenecek, Drive'dan anlık çekim yapılmayacak.)

- [x] **Soru 29 (AI Görsel Tarzı):** Sitede kullanacağımız AI fotoğraflarının "vibe"ı/havası nasıl olsun? (Örn: Çok modern, teknolojik, cam duvarlı ferah sınıflar mı; yoksa daha sıcak, klasik dershane atmosferi mi?)
  → **YANIT:** Aşırı modern değil, daha çok normal bir sınıf olsun, içinde akıllı tahta bulunsun.

- [x] **Soru 30 (Sosyal Medya):** Sitede footer veya iletişim kısmında yer alacak sosyal medya (Instagram, Twitter, Facebook vb.) linkleriniz mevcut mu?
  → **YANIT:** Instagram, Facebook ve WhatsApp linkleri eklenecek. Adres ve iletişim bilgileri de yer alacak.
  - 📸 Instagram: https://www.instagram.com/6sigmaegitim
  - 📘 Facebook: https://www.facebook.com/6SigmaEgitimKurumlari
  - 💬 WhatsApp: https://wa.me/905432674462
  - 📍 Adres: Ataşehir, Şelale Sk. No:29, 23040 Elazığ Merkez/Elazığ

- [x] **Soru 31 (Hakkımızda Metni):** "Hakkımızda" sayfası için hazır bir kurumsal metniniz var mı, yoksa anahtar kelimeleri verirseniz ben mi bir taslak oluşturayım?
  → **YANIT:** Hazır metin yok, anahtar veriler verildi. Metin oluşturulacak. Anahtar bilgiler: "6 Sigma Eğitim Kurumları — Hep Bir Adım Önde", 10 senedir Elazığ birincisi ve sıralamaları çıkarıyor, 10 yılda 463 tıp öğrencisi çıkardı.

---
**İlerleme:** Round 7/10, Tamamlanma: 36/37 (%97)

## 📝 Round 7 Soruları (Sayfa Yapısı ve UX Detayları)

- [x] **Soru 32 (Deneme Sonuçları Akışı):** Öğrenci giriş yapıp deneme sonucunu gördükten sonra; sadece "PDF İndir" butonu mu olacak, yoksa ekranda bir önizleme/özet de gösterilecek mi?
  → **YANIT:** Önizleme olacak ve PDF İndir butonu da olacak.

- [x] **Soru 33 (YKS/LGS Sayfa İçerikleri):** YKS ve LGS sayfalarında; ders programı takvimi (haftalık/aylık tablo gibi) de yer alacak mı, yoksa sadece metin ve özellik listesi mi olacak?
  → **YANIT:** Herhangi bir takvim bulunmayacak. Sadece LGS ve YKS için hazırlıkların nasıl yapıldığı, öğrencilere bu süreçte ne gibi kazanımlar kazandırıldığı yazılacak.

- [x] **Soru 34 (Admin Paneli Rolleri):** Admin panelinde "Kurum Sahibi" ve "Rehberlik Birimi" kullanıcıları aynı yetkilere mi sahip olacak, yoksa bazı işlemler (Örn: öğrenci silme, başarı verisi güncelleme) sadece kurum sahibine mi açık olacak?
  → **YANIT:** Kurum sahibi ve rehberlik birimi aynı yetkilere sahip olacak. (Tek rol seviyesi yeterli.)

- [x] **Soru 35 (Mobil Uyumluluk):** Site mobil cihazlarda da kullanılacak mı? (Responsive tasarım) Yoksa sadece masaüstü yeterli mi?
  → **YANIT:** Hem mobil hem de masaüstü uyumlu olacak. (Full responsive tasarım.)

- [x] **Soru 36 (SEO ve Alan Adı):** Sitenin yayınlanacağı alan adı belli mi? (Örn: 6sigmaegitim.com) Ayrıca Google'da aranabilirlik (SEO) için özel bir beklentiniz var mı?
  → **YANIT:** Alan adı henüz belli değil. SEO hedefi: "Elazığ dershane" yazıldığında en başta çıkması gerekiyor.

- [x] **Soru 37 (Karne Yükleme Süreci):** Karneler Drive'dan çekilmeyecekse; admin panelinden manuel mi yüklenecek, yoksa toplu yükleme (birden fazla PDF'i tek seferde) özelliği de olmalı mı?
  → **YANIT:** Karneler backend'in başka bir servise istek atmasıyla çekilecek. Bu istekte kullanılacak parametreler daha sonra verilecek. (Entegrasyon detayları beklemede.)

---
**İlerleme:** Round 8/10, Tamamlanma: 46/47 (%97)

## 📝 Round 8 Soruları (Son Detaylar ve Entegrasyon)

- [x] **Soru 38 (Navbar Yapısı):** Üst menüde şu butonlar olacak: Anasayfa, Hakkımızda, Başarılarımız, Duyurular, YKS, LGS. Bunlara ek olarak başka bir menü öğesi eklemek ister misiniz? (Örn: SSS, Blog, Galeri)
  → **YANIT:** Hayır, gerekmiyor. Mevcut menü yeterli.

- [x] **Soru 39 (Footer İçeriği):** Footer kısmında sosyal medya linkleri ve adres olacak. Bunun dışında footer'da ne olmalı? (Örn: Hızlı linkler, çalışma saatleri, harita embed'i, telif hakkı notu?)
  → **YANIT:** Embed harita olacak, telif hakkı notu olacak, çalışma saatleri olacak.

- [x] **Soru 40 (Deneme Karnesi Önizleme):** Öğrenci deneme sonucunu önizlediğinde; sadece PDF'in görsel önizlemesi mi olacak, yoksa puanlar/net sayıları gibi veriler ayrı bir "kart" olarak mı gösterilecek?
  → **YANIT:** Sadece PDF önizlemesi olacak.

- [x] **Soru 41 (Duyuru Bildirimi):** Yeni bir duyuru yayınlandığında; siteye giren öğrenci/veli bunu nasıl fark edecek? (Örn: Pop-up bildirim, anasayfada "Yeni" rozeti, veya sadece duyurular sayfasında listeleme yeterli mi?)
  → **YANIT:** Sadece duyurular sayfasında listeleme yeterli. Gerekli bilgilendirme sosyal medya hesapları üzerinden yapılacak.

- [x] **Soru 42 (Başarı Grafiği Detayı):** Son 8 yılın tıp kazanımlarını gösteren grafikte; sadece "Tıp" mı izlenecek, yoksa Hukuk, Mühendislik gibi diğer popüler bölümler de grafik üzerinde gösterilecek mi?
  → **YANIT:** Sadece tıp kazanımları gösterilecek.

- [x] **Soru 43 (Renk Paleti Onayı):** Kurumun baskın renkleri Lacivert, Beyaz ve Kırmızı. Site tasarımında bu renkleri ana palet olarak kullanayım mı? Accent (vurgu) rengi için altın/turuncu gibi bir ek renk ister misiniz?
  → **YANIT:** Evet, ana renkler lacivert, beyaz ve kırmızı olacak. Accent rengi için altın/turuncu kullanılabilir.

- [x] **Soru 44 (Öğrenci Giriş Güvenliği):** Öğrenci numarası + şifre ile giriş yapılacak. Şifre öğrenciye nasıl iletilecek? (Örn: İlk şifre Excel'den gelecek mi, yoksa admin panelinden tek tek mi atanacak?)
  → **YANIT:** Öğrenci siteye giriş yaparken herhangi bir şifre veya kullanıcı adı girmeyecek. Ancak yapay zeka destekli karnesini veya deneme sonucunu görmek isterse, öğrenci numarasını (parametreler değişebilir) girerek karnesini/sonucunu görebilecek. Yani bir sisteme giriş yapmak yerine, karne/sonuçları görebilmesi için gerekli bilgiler öğrenciden alınıp, bu bilgilerle harici API'ye istek atılacak.

- [x] **Soru 45 (Cevap Anahtarı Görünürlüğü):** Admin panelinden yüklenen cevap anahtarı PDF'leri; herkese açık mı olacak, yoksa sadece giriş yapmış öğrenciler mi görebilecek?
  → **YANIT:** Herkese açık olacak.

- [x] **Soru 46 (Performans ve Hız):** Sitede animasyonlar, geçiş efektleri gibi görsel zenginlikler ne kadar ağırlıklı olsun? (Örn: Minimal ve hızlı yüklenen mi tercih edersiniz, yoksa vitrini zenginleştiren animasyonlar mı?)
  → **YANIT:** Animasyonlar olabilir ama sitenin yüklenmesini yavaşlatmayacak derecede olmalı.

- [x] **Soru 47 (Logo ve Favicon):** Logonuzun dijital dosyası (SVG, PNG) elinizde var mı? Favicon (tarayıcı sekmesindeki küçük ikon) için logo kullanılacak mı?
  → **YANIT:** Evet, dijital dosya mevcut. Favicon için logo kullanılacak.

---
**İlerleme:** Round 9/10, Tamamlanma: 56/57 (%98)

## 📝 Round 9 Soruları (Kalan Boşluklar ve Son Onaylar)

- [x] **Soru 48 (Çalışma Saatleri):** Footer'da gösterilecek çalışma saatleri nedir? (Örn: Hafta içi 08:00-22:00, Cumartesi 09:00-18:00, Pazar kapalı gibi)
  → **YANIT:** Çalışma saatleri dahil sitede kullanılacak tüm bilgiler veritabanından çekilecek. (Dinamik içerik yönetimi.)

- [x] **Soru 49 (Harita Konumu):** Footer'daki embed harita için Google Maps'te tam konum linki verebilir misiniz? Yoksa "Ataşehir, Şelale Sk. No:29, 23040 Elazığ" adresini otomatik aratayım mı?
  → **YANIT:** Google Maps embed iframe kodu verildi. (6 SİGMA Eğitim Kurumları, Elazığ konumu.)

- [x] **Soru 50 (Karne API Detayı):** Backend'in istek atacağı harici servis/API hakkında şu an bildiğiniz herhangi bir detay var mı? (Örn: REST API mi, hangi URL'ye istek atılacak, yanıt formatı PDF mi JSON mu?) Yoksa bu bilgiler tamamen ileriye mi bırakılacak?
  → **YANIT:** API'den PDF dönülecek. Detaylar sonradan eklenecek.

- [x] **Soru 51 (Anasayfa Hero Bölümü):** Anasayfanın en üstünde (hero/banner alanı) ne gösterilmeli? (Örn: Kurumun sloganı + CTA butonu "Bize Ulaşın", yoksa bir slider/carousel mı olsun?)
  → **YANIT:** Hero bölümüne gerek yok.

- [x] **Soru 52 (Anasayfa İçerik Sıralaması):** Anasayfada hero'nun altına hangi bölümler hangi sırayla gelsin? Önerim: Hero → Neden Biz? → Başarılarımız Özeti → Duyurular Önizleme → İletişim CTA. Bu sıralama uygun mu?
  → **YANIT:** Hero'ya gerek yok. Daha önce netleştirilen yapı ile devam edilecek.

- [x] **Soru 53 (Duyuru Kategorisi Filtresi):** Duyurular sayfasında kategorilere göre filtreleme (sekmeler veya dropdown) olsun mu? (Örn: Tümü | Genel Duyuru | Deneme Cevap Anahtarı | Deneme Sonuçları | Tatil Bilgisi)
  → **YANIT:** Hayır, filtrelemeye gerek yok.

- [x] **Soru 54 (İletişim Sayfası Detayı):** İletişim sayfasında harita + adres + sosyal medya + WhatsApp butonu olacak. Bunlara ek olarak bir "Mesaj Formu" (Ad, Telefon, Mesaj) da koyalım mı? Yoksa sadece WhatsApp'a yönlendirme yeterli mi?
  → **YANIT:** Mesaj formuna gerek yok, WhatsApp'a yönlendirme yeterli.

- [x] **Soru 55 (Başarılar Sayfa Yapısı):** Başarılar sayfası iki bölümden oluşacak: 1) Yıllara göre tıp kazanımı grafiği, 2) Her yılın detaylı öğrenci listesi. Bu iki bölüm tek sayfada alt alta mı olsun, yoksa yıl seçince detay açılsın (tab/accordion) mı?
  → **YANIT:** Yıl seçince detay açılsın (tab/accordion). O yılın başka bölümlerinin bilgisini de versin.

- [x] **Soru 56 (Telefon Numarası):** Sitede görünecek telefon numarası WhatsApp numarası (0543 267 44 62) ile aynı mı olacak, yoksa ayrı bir sabit hat numarası da var mı?
  → **YANIT:** Evet, aynı numara kullanılacak.

- [x] **Soru 57 (Teknoloji Onayı):** Projeyi Next.js (React framework) + Supabase (veritabanı) + Vercel veya benzeri bir hosting ile planlıyorum. Bu teknoloji seçimine onay veriyor musunuz, yoksa farklı bir tercihiniz var mı?
  → **YANIT:** Next.js (frontend) + Supabase (veritabanı) + **.NET (backend)** kullanılacak.

---
**İlerleme:** Round 10/10, Tamamlanma: 65/67 (%97) ✅

## 📝 Round 10 Soruları (Teknik Mimari ve Altyapı)

> [!IMPORTANT]
> Son round tamamlandı! Teknik mimari kararları netleştirildi.

- [x] **Soru 58 (.NET Backend Versiyon):** .NET backend için hangi versiyon tercih ediliyor? (Örn: .NET 8, .NET 9) Ve framework olarak ASP.NET Core Web API mi kullanılacak?
  → **YANIT:** Karar: .NET 8 LTS + ASP.NET Core Web API

- [x] **Soru 59 (.NET Backend Kapsamı):** .NET backend'in asıl görevi ne olacak? Aşağıdaki seçeneklerden hangisi/hangileri geçerli?
  → **YANIT:** Asıl gorevi frontend ten gelen istekleri karsılamak , is sureclerine bakarak veri tababından verileri cekmek ve frontend e servis ve endpoint saglamaktır. swegger open apı ile servisler fronterne sunulacak guvenlık mekanızması olarak JWT token kullanılacak. moduler monolit mımarı ıle gelistrilicek, middle ware kullanılıcak. backend servisleride kendı içinde haberlesirken bu apı keyı kullanmaları sarttır. endpointlerin donus tıpı standart bir result nesnesı olusturulacak, Tum apiler bu sekılde yanıt donucek. Repository design pattern kullanılacak. Entire pattern kullanılacak. n-Tier mimari kullanılacak. Db first yaklasımı ıle yazılacak. Veri tabanından entitileri EF core POWER tools ile tablo ları okuyarak entityleri otomatik olusturacak. IDE olarak VS 2022 kullanılıcak.

- [x] **Soru 60 (Frontend-Backend İletişimi):** Next.js frontend, Supabase'e doğrudan mı bağlanacak (client-side SDK), yoksa tüm veri trafiği .NET backend üzerinden mi geçecek?
  → **YANIT:** Tüm veri trafiği .NET backend üzerinden geçecek. (Frontend → .NET API → Supabase) . Frontendin dogrudan database erismesi kesınlıkle yasaktır, bu islem IP kısıtlamasıyala engellenecek. sadece backendin database erismesi olacak.

- [x] **Soru 61 (Admin Paneli Yetkilendirme):** Admin paneline giriş için Supabase Auth (e-posta + şifre) mi kullanılacak, yoksa .NET backend'de kendi auth mekanizmanızı mı kurmak istiyorsunuz?
  → **YANIT:** frontend ten kullanıcı gırısı endpointine kullanıcı adı ve sifre ile erislmek istendıgınde, istek backende duser, ligin endpointi  veri tabanında boyle bir kullanıcı varmı dıye sorgular, boyle bir kullanıcı varsa giris saglanir. bu istekler JWT token ile saglanir. 

- [x] **Soru 62 (Supabase Tabloları):** Veritabanında şu tablolar olacak gibi görünüyor: `duyurular`, `basarilar`, `site_ayarlari` (çalışma saatleri, iletişim bilgileri vb.), `admin_kullanicilar`. Eksik veya fazla gördüğünüz tablo var mı?
  → **YANIT:** Tabloları biz frontend bittikten sonra belirleyeceğiz. frontend te ki veri iceren kısımlar dummy veri ile doldurulacak. Frontend tasarımıda veri gelen kısımlar belirlenip entitlerimiz olusturulacak bu entityleri 2. asama olarak tablolara donustrecegız. tabloların ıcınıde dummy dataları ıle dolduracagız 3. asama olarak endpoinlerimiz bu dummy datalarını frontende servis edicek. 4. asama olarak dummy dataları gercek verıler ıle degıstırecegız. 

- [x] **Soru 63 (Docker Kullanımı):** Geliştirme ortamında Docker kullanılacak mı? (HAVSAN standardı gereği Docker-first yaklaşım önerilir.) .NET backend ve Next.js frontend için ayrı container'lar mı olacak?
  → **YANIT:** HAVSAN standardı gereği Docker-first yaklaşım uygulanacak. frontend ayrı bir proje , backend ayrı bir proje olucak ve ayrı ayrı docker container olucak ve yayına alınıcak.

- [x] **Soru 64 (Deployment Platformu):** Site hangi platformda yayınlanacak?
  → **YANIT:** Domain bilgisi: 6sigmadershaneleri.com, hostinger shared hosting. hosting bilgileri havsan sunucularında tutulacak. Repo private git e atılıcak. Main branchına commit atılıdıgında oto deploy sureci tetıklenecek. Bu kısmımda yazılımcılar olarak projeyı gite atmak. sonrasında devops ekıpı uygulamayı yayına alacak.

- [x] **Soru 65 (Deneme Sonucu Sayfası Akışı):** Öğrenci "Deneme Sonuçlarım" butonuna tıklayınca akış şu şekilde mi olacak? 1) Öğrenci numarasını girer → 2) Backend harici API'ye istek atar → 3) PDF döner → 4) Önizleme + İndir butonu gösterilir. Bu akış doğru mu?
  → **YANIT:** Evet, tam olarak bu akış olacak. Ancak ileride küçük değişiklikler olabilir; sadece öğrenci numarası değil, başka bilgiler de gerekebilir.

- [x] **Soru 66 (Cevap Anahtarı Yükleme):** Admin panelinden cevap anahtarı PDF yüklenirken; dosyalar Supabase Storage'a mı kaydedilecek, yoksa .NET backend'in dosya sistemine mi yüklenecek?
  → **YANIT:** Tüm dosyalar veritabanına (Supabase Storage) yüklenecek.

- [x] **Soru 67 (Proje Zaman Planı):** Bu projenin tahmini teslim süresi veya bir deadline'ı var mı? (Kodlama süresini doğru planlamak için önemli.)
  → **YANIT:** Hayır, yeterince uzun vakit var. Vakit kısıtlaması yok.

---

> [!NOTE]
> 🎉 **10 Round Analiz Tamamlandı!** Toplam 67 soru soruldu, 65'i yanıtlandı (%97).
> Beklemede olan konular: Soru 27 (Excel yapısı - kuruma sorulacak), Soru 50/64 (API detayları ve deployment - ileriye bırakıldı).
> Bir sonraki adım: `gereksinim_analizi.md` oluşturulacak.
