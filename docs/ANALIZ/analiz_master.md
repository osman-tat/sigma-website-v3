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
  → **YANIT:** Panel daha çok websitesini yönetenlere yönelik olacak. Öğrencilerin ise deneme sonuçlarını yüklemesi ve indirmesi için öğrenci numarası ve şifre ile giriş yapması gerekecek. Ve bu giriş sadece deneme sınav sonucu gör dediğinde gelecek. Normal websitesi ziyaretinde en başta kullanıcı adı şifre istenmeyecek.

- [x] **Soru 7 (AI Analiz):** "Yapay zeka analizli karneler" hazır PDF olarak mı sisteme yüklenecek, yoksa ham veriler yüklenecek ve site içinde mi oluşturulacak?
  → **YANIT:** Bu yapay zeka ile hazırlanmış karneler farklı bir programda hazırlanıp bir drive klasöründe saklanacak. Biz de bir istek atarak bu drive klasöründen ilgili öğrencinin karnesini çekip indirmelerini sağlayacağız.

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
**İlerleme:** Round 6/10, Tamamlanma: 26/31 (%83)

## 📝 Round 6 Soruları (Format, Erişim ve Stil Detayları)

- [ ] **Soru 27 (Excel Yapısı):** Elinizdeki Excel tablosunda sütun başlıkları nelerdir? (Örn: Ad, Soyad, Öğrenci No, Şifre vb.) İçe aktarma (import) motorunu bu başlıkları otomatik tanıyacak şekilde kodlayabilirim.
  <!-- YANIT: Bu excel tablosuna kuruma sorduktan sonra erişilecek. -->

- [ ] **Soru 28 (Drive Erişimi):** Drive klasörü harici bir adresteyse; sistemin bu dosyalara erişebilmesi için ya klasörün "Bağlantıya sahip olan herkes görüntüleyebilir" şeklinde açık olması ya da bizim sistemimize (Service Account) bir "Görüntüleyici" yetkisi verilmesi gerekir. Hangisi sizin için daha uygun?
  <!-- YANIT: Biz klaösrü görüntülemeyecez, sisteme giriş yapan kişi kendi arensini sistemde görebilecek ve indirebilecek. -->

- [ ] **Soru 29 (AI Görsel Tarzı):** Sitede kullanacağımız AI fotoğraflarının "vibe"ı/havası nasıl olsun? (Örn: Çok modern, teknolojik, cam duvarlı ferah sınıflar mı; yoksa daha sıcak, klasik dershane atmosferi mi?)
  <!-- YANIT: aşırı modern değil daha çok normal bir sınıf olsun içinde akıllı tahta bulunsun. -->

- [ ] **Soru 30 (Sosyal Medya):** Sitede footer veya iletişim kısmında yer alacak sosyal medya (Instagram, Twitter, Facebook vb.) linkleriniz mevcut mu?
  <!-- YANIT:İnstagram faceboook ve whatsapp linkleri eklenecek. Adres de yer alacak iletişim bilgileri de yer alsın.
   -->

- [ ] **Soru 31 (Hakkımızda Metni):** "Hakkımızda" sayfası için hazır bir kurumsal metniniz var mı, yoksa anahtar kelimeleri verirseniz ben mi bir taslak oluşturayım?
  <!-- YANIT: 6 Sigma eğitim kurumları Hep bir adım önde . !0 senedir türkiye birincisi ve sıralamaları çıkarıyoruz . 10 yılda 463 tıp öğrencisi çıkardık. Bu verileri kullanarak dershaneyi anlatan bir metin oluştur.  -->

---
> [!NOTE]
> Yanıtlarınızı yazdıktan sonra bana haber verin, bir sonraki round'a geçelim.
