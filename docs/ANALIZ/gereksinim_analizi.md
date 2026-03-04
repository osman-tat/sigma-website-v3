# 🧠 6 Sigma Eğitim Kurumları - Kapsamlı Yazılım Gereksinim Analizi (PRD & SRS)

Bu belge, **6 Sigma Eğitim Kurumları** web sitesi ve yönetim paneli projesinin **Tek Doğruluk Kaynağıdır (Single Source of Truth)**. HAVSAN İteratif Analiz Sistemi kapsamında yürütülen detaylı analiz ve kurum mülakatlarının çıktıları doğrultusunda hazırlanmış olup, projede alınacak her teknik ve kavramsal karara temel teşkil edecektir. 

Bu belge yüzeysel tanımlamalardan arındırılarak, her modülün iş mantığını, veri akışını, kısıtlarını ve mimari tercihlerini en ince ayrıntısına kadar dokümante etmeyi amaçlar.

---

## 1. Proje Genel Bakışı ve Stratejik Hedefler

### 1.1. Projenin Amacı
Geleneksel bir dershane tanıtım sitesinin ötesine geçerek; dinamik içerik yönetimine sahip, modern bir kullanıcı deneyimi (UX) sunan ve öğrencilerin dijital karne/sınav sonuçlarına otonom şekilde ulaşmasını sağlayan kurumsal bir web portalı ve bu portalı besleyen merkezi bir yönetim paneli inşa etmektir. Tamamen veri odaklı (Data-Driven) bir sistem kurgulanarak, tüm kurumsal metinler, başarı istatistikleri ve duyurular veritabanından dinamik olarak yönetilecektir.

### 1.2. Paydaşlar ve Hedef Kitle
- **Mevcut Öğrenciler ve Veliler:** Kurum duyurularını takip etmek, açık cevap anahtarlarına erişmek ve TC Kimlik No ile güvenli bir şekilde kendi AI analizi deneme karnelerini görüntülemek/indirmek için sistemi kullanacak ana kitledir.
- **Potansiyel Öğrenciler/Müşteriler:** Kurumun vizyonunu, başarılarını ve sunduğu fiziki/eğitsel olanakları inceleyip yüz yüze görüşmeye veya WhatsApp iletişimine ikna olması beklenen ziyaretçilerdir.
- **Yöneticiler ve Rehberlik Birimi:** Sistemi içerik (duyuru, başarı, ayarlar) bakımından besleyecek, kurumu dijital alanda yönetecek yetkili kullanıcılardır.

### 1.3. Tasarım ve UI/UX Felsefesi
- **Vibe ve Atmosfer:** Çok ütopik olmayan ancak modernliği yansıtan; cam-duvarlı, aydınlık, düzenli ve teknolojiyle iç içe (akıllı tahta kullanımı vb.) bir "Yeni Nesil Eğitim Kurumu" hissi. Ziyaretçiye güven ve prestij duygusu aşılanmalıdır.
- **Renk Paleti & Kimlik:** 
  - **Ana Renkler:** Lacivert (Güven, Disiplin) ve Kırmızı (Dinamizm, Heyecan).
  - **Açık Arka Planlar:** Beyaz ve tonları (Ferahlık, Okunabilirlik).
  - **Vurgu (Accent) Rengi:** Altın/Turuncu tonları (Dikkat çekici CTA'lar, Başarı vurgusu).
- **Animasyon ve Performans:** Minimalist mikro-etkileşimler (hover efektleri, scroll ile gelen hafif fade-in geçişleri). Animasyonlar sistem performansını, LCP (Largest Contentful Paint) ve FCP (First Contentful Paint) sürelerini etkilemeyecek şekilde optimize edilecektir.

---

## 2. Web Sitesi (Frontend) - Ziyaretçi Denayimi

Web sitesi, Ziyaretçi ile Kurum arasındaki ilk temas noktasıdır. %100 Duyarlı (Responsive) olacaktır. Tüm veriler `.NET API` üzerinden Supabase'den çekilecektir. Prensip olarak *sayfalara hardcoded (sabit) veri gömülmeyecektir*.

### 2.1. Global Navigasyon (Header & Footer)
- **Header (Navbar):** 
  - Logo (Favicon ve sol üst köşe yerleşimi, SVG kalitesinde).
  - Menü Linkleri: *Anasayfa, Hakkımızda, Başarılarımız, Duyurular, YKS, LGS.*
  - CTA (Call to Action) Butonu: "Deneme Sonucumu Öğren" (Header'da göze çarpan bir buton olarak konumlandırılması UX açısından önerilir).
  - Davranış: Sayfa aşağı kaydırıldığında küçülerek ekrana yapışan (Sticky/Glassmorphism) navbar.
- **Footer:** 
  - Dinamik İçerik: Panelden yönetilen adres, e-posta ve iletişim telefonları.
  - Sosyal Medya İkonları: Instagram, Facebook, WhatsApp (Yeni sekmede açılacak şekilde yapılandırılmış).
  - Harita: Google Maps IFrame embed kodu.
  - Dinamik Mesai Saatleri Bilgisi: "Hafta İçi: 09:00 - 19:00" gibi veritabanından çekilen yapı.
  - Legal: Copyright metni, KVKK - Gizlilik Politikası linkleri (Gelecekte ihtiyaç olunabileceğinden altyapısı hazır bırakılacak).

### 2.2. Anasayfa (Landing Page) Akışı
1. **(Hero Alanına Alternatif) Minimal Karşılama:** Devasa bir slider yerine kurumun güçlü bir sloganı ve hemen altında kullanıcıyı YKS veya LGS sayfalarına yönlendiren belirgin yönlendirme kartları bulunduracaktır.
2. **"Neden Bizi Tercih Etmelisiniz?" Seksiyonu:** Kurumun sunduğu eşsiz imkanlar (Açık büfe ders ortamı, lüks kütüphane/etüt salonları, zengin deneme ağı) grid (ızgara) yapısında, uygun ikonografi ve kısa açıklamalar eşliğinde sunulacaktır.
3. **Başarı Özeti Seksiyonu:** Başarılarımız sayfasındaki dev verinin sadece bir "Özet Kartı" (Örn: "2023'te 45 Tıp Fakültesi!") şeklinde gösterilip, kullanıcıyı "Tüm Başarılarımız" sayfasına sevk eden modül.
4. **Güncel Duyurular (Vitrin):** En güncel 3 duyurunun kart yapısıyla anasayfada yer aldığı bölüm.

### 2.3. YKS ve LGS Detay Sayfaları
Bu iki sayfa birbiriyle benzer iskelete sahip ancak tamamen farklı içerik metinleri taşıyacaktır. 
- **İçerik Stratejisi:** Ders programı tablosu *kullanılmayacak*. Bunun yerine "6 Sigma'da YKS Süreci Nasıl İşler?" temasında, 9.-10.-11. ve 12. sınıf ile Mezunlara yönelik kurumsal yaklaşım metinleştirilecektir.
- LGS sayfası için de LGS yaş grubunun pedagojik ihtiyaçlarına ve soru tiplerine nasıl hazırlanıldığına dair dinamik metin blokları olacaktır.

### 2.4. Başarılarımız Portalı
Verisinin tamamı Admin Panelinden girilen, sitenin en kritik satış noktalarından (Selling Point) biridir.
- **Bölüm 1 - Grafiksel Gösterim (Veri Görselleştirme):** Yalnızca "Tıp Fakültesi" kazanımları baz alınarak son 8 (veya girilen tüm yılların) yılı kapsayan bar grafiği (Recharts veya Chart.js kütüphanesi). 
- **Bölüm 2 - Yıl Bazlı Akordeon Liste (Tabular Data):** 
  - Kullanıcı "2023" yılına tıkladığında o yıla ait bir liste açılır.
  - Bu liste, YKS için "Ahmet Y. - Hacettepe Tıp" gibiyken; LGS için "Ayşe K. - Ankara Fen Lisesi (%0.2 Dilim)" formatını destekleyecek dinamik sütun mimarisine sahip olmalıdır.

### 2.5. Duyurular ve Açık Kaynak Merkezi
- **İşleyiş:** API'den liste olarak tüm duyurular (yayında olduğu belirtilenler) çekilecek. Kategorileme UI'da bulunmayacaktır.
- **İçerik Tipleri:** Bir duyuru sadece bir metin olabileceği gibi, altında N adet PDF dosyası barındıran (Örn: LGS Deneme 3 Cevap Anahtarı A Kitapçığı.pdf, B Kitapçığı.pdf) zengin bir yapı da olabilir. Kullanıcılar bunları giriş yapmadan önizleyip indirebilecektir.
- **Yayın Süresi Mantığı:** Duyuru girilirken panelde "Bitiş Tarihi" veya "X Gün Yayında Kal" ayarlanır. Bu tarih geldiğinde UI'da (Frontend) gösterilmez. Ancak geçmiş veri kaybolmaması adına veritabanında "IsActive: false" (veya tarih filtresi) statüsü ile saklanır.

### 2.6. "Deneme Sonuçlarım" Sistemi (Kişiselleştirilmiş PDF Vizörü)
Sistemin en karmaşık ve kritik entegrasyon noktasıdır.
- **İş Akışı (Business Akışı):**
  1. Kullanıcıdan iki input alınır: **TC Kimlik No** ve **Doğum Tarihi** (DD/MM/YYYY formatında, takvim seçici ile de desteklenebilir). Form Client-Side validasyonundan (örn: TC 11 hane olmalı) geçirilir.
  2. Frontend, formu payload olarak **.NET Backend'indeki özel Proxy Endpoint'e** (`POST /api/students/exam-result`) iletir.
  3. **.NET Backend** kendi üstüne gelen isteğin API sınırlarını / IP'sini onaylar, ardından (varsa external bir Authorization header ile) ERP/Dış Kurum Servisine backend-to-backend istekte bulunur.
  4. Dış servis eğer veriyi bulursa "PDF'i Base64 formatında" veya ilgili URL linki olarak .NET'e döner. Öğrenci bulunamazsa dış sistem `404 Not Found` döner.
  5. .NET sonucu bir Result objesi içinde Frontend'e sarıp gönderir.
  6. Frontend Base64 verisini bir Client-Side PDF Görüntüleyici (PDFObject.js vb.) kullanarak Modal veya yeni sayfada render eder. Dosyayı cihazına "İndir" butonu aktive edilir.
- **Güvenlik Prensipleri:** Ziyaretçi doğrudan harici API'ye istek ATAMAZ. İstek kesinlikle Backend'in süzgecinden geçmelidir (CORS ve API Key koruması için). Rate-Limiting (Brute force TC denemelerini engellemek için aynı IP'den gelen isteklere sınır konulması) uygulanabilir.

---

## 3. Yönetim (Admin) Paneli - İçerik Kontrol Merkezi

Yönetim paneli kurum sahibinin ve vizyoner personelin siteyi yaşayan bir organizma olarak tutmasını sağlar.

### 3.1. Rol ve Yetki Yönetimi (Auth & Identity)
- **Giriş Metodolojisi:** Email/Şifre ile .NET Backend'in `POST /api/auth/login` endpoint'ine istek atılarak başlar. 
- **Token State:** Dönüşte alınan JWT, XSS saldırılarından korunmak için HttpOnly Cookie içinde (veya uygun güvenli bir state manager içinde) saklanmalıdır. 
- **Yetkiler:** Kurum Sahibi ve Rehberlik Birimi arasında Panelde özellik kısıtlaması *yapılmayacaktır*; iki rol de SuperAdmin karakteristiği taşıyacaktır.

### 3.2. Çekirdek Yönetim Modülleri (CRUD)
- **Site Ayarları Modülü:** 
  - İletişim, adres bilgileri, sosyal medya bağlantı linkleri güncellenebilir. Sistem `site_settings` tablosundaki konfigürasyondan beslenir.
- **İçerik (CMS) Modülü:** 
  - LGS metinleri, YKS metinleri, Hakkımızda sayfası metin blokları Rich Text Editor (Zengin Metin Editörü - CKEditor veya Quill benzeri) kullanılarak formatlı (kalın, italik, liste) girilebilmesi sağlanacaktır.
- **Duyuru Yönetimi Modülü:**
  - **Başlık, Kategori, Metin** alanları yer alacaktır. Seçilen PDF dosyaları (çoklu seçim ile) Supabase Storage (S3 uyumlu Bucket) içine "yüklenir", dönen path/URL veritabanında ilişkisel `duyuru_dokumanlari` tablosuna yazılır.
  - Gösterimde kalıcı olma süresi gün/tarih olarak belirlenir.
- **Tarihsel Başarı Ekleme Modülü (Bulk & Manuel):** 
  - Yıl bilgisi, Öğrenci Adı, Sınav Tipi (YKS/LGS), Kazanılan Durum/Dilim bilgileri girilebilmelidir.
  - (İleri Fazda: Bu verilerin uygun başlıklı Excel ile toplu alınabilmesi/Parse edilmesi üzerine altyapı hazırlanacaktır).

---

## 4. Teknik Mimari ve Altyapı Kararları

Sistem kalitesi (Software Quality Attributes), sürdürülebilirlik, bakım yapılabilirlik (Maintainability) ve genişletilebilirlik üzerine kurgulanmıştır.

### 4.1. Backend Uygulaması (.NET 8 LTS)
- **Sistem Mimarisi:** N-Tier (Çok Katmanlı) veya Clean Architecture (Onyon Mimari) ilkeleri. Projede `Core`, `Entities`, `DataAccess`, `Business` ve `WebAPI` katmanları keskin sınırlarla ayrılmış olacaktır.
- **Tasarım Kalıpları (Design Patterns):** 
  - Veritabanı işlemleri için `Repository Pattern` ve `Unit of Work`.
  - Servis ve API arasında veri transformasyonları için (DTO) Data Transfer Object kalıpları ve mapping toolları (AutoMapper).
- **ORM:** Entity Framework Core (EF Core 8). Prosedür: Db-First veya Code-First Migration uyumlu tasarım. Supabase PostgreSQL özelliklerini (UUID destekleri vb.) tam çalıştıracak Npgsql sağlayıcısı kullanılacaktır. 
- **Endpoint Standartlaştırması:** API'ye atılan her istek bir kalıplaşmış Wrapper class döner:
  ```json
  {
    "success": true, // veya false
    "data": { ...istenilen_model... },
    "error": { "code": "", "message": "Hata varsa buraya" },
    "timestamp": "2026-03-04T12:00:00Z"
  }
  ```
- **Güvenlik Katmanı:** CORS kısıtlamaları frontend domain'ine özel ayarlanacaktır. Admin paneli rotaları `[Authorize]` attribute ile JWT validasyonu isteyecektir.

### 4.2. Veritabanı ve Medya Yönetimi (Supabase / Postgres)
- RDBMS Gücü: Bütün ilişkisel veriler güçlü bir PostgreSQL veritabanında tutulacak. Schema yönetimi düzgün yapılmalı. Constraints (Foreign Keys vb.) kesinlikle oluşturulmalıdır.
- **Supabase Güvenliği (RLS - Row Level Security Analizi):** Proje mimarisine göre direkt supabase JS client üzerinden okuma/yazma YASAKTIR. (Role dayalı veri sızıntısını önlemek adına Backend mecburi orkestratör görevindedir). Veritabanı erişim secret/key bilgileri sadece kendi network'ündeki .NET container'ı tarafından erişilebilir olacak. Frontend DB'yi asla tanımayacaktır.
- **Supabase Storage (Bucket):** Resimler ve PDF'ler, genel ulaşıma açık `public` bucket'larda veya yetkiye bağlı `private` bucket'larda (özel imzalı URL'ler ile) sunulacak şekilde konfigüre edilecektir.

### 4.3. Frontend İstemcisi (Next.js & React)
- SSR (Server Side Rendering) ve SSG (Static Site Generation) karışımı melez (Hybrid) model. SEO için "Hakkımızda", "Anasayfa" gibi sayfalar Server'da render edilecek, Dinamik Duyurular Client-Side'da Hydrate edilebilir olacaktır.
- Zustand veya Context API yardımıyla panelin (Admin) App-wide stateleri ve bildirim/toast stateleri yürütülecektir.

### 4.4. Altyapı, Konteynerizasyon ve DevOps
- **Docker & Docker Compose:** Root dizinde bir `docker-compose.yml` olacak. Front (Next.js) `port: 3000`, API (.NET) `port: 8080` de çalışacak şekilde izole (bridge network) ağlar tanımlanacak. 
- Local development sırasında ortamlar (Environments) `.env`, `.env.development` kullanılarak veri tabanı bağlantıları dinamik hale getirilecektir. Appsettings.json production için ayrıca ezilebilecektir.
- **Deployment Senaryosu (Deployment Topology):** Hostinger vb. sunucular üzerine Coolify Paneli gibi bir CD (Continuous Deployment) çözümü kullanılıp, Private GitHub reposundan Main Branch'e push geldiğinde imajlar build edilerek down-time (kesinti süresi) yaşanmadan restart edecektir.

---

## 5. Proje İterasyon Fazları (Roadmap)
Bu PRD sonrasında çalışılacak task dağılımı şu şekildedir:

| Faz # | Faz Adı | Kapsam ve Beklenen Çıktılar | Puan / Ağırlık |
|-------|---------|------------------------------|----------------|
| **Faz 1** | **Temel Altyapı ve Konteynerizasyon** | Docker ağlarının (FE ve BE) oluşturulması, repoların initlanması. Supabase projesi açılışı, `.env` tanımları. HAVSAN klasör standartlarının oturtulması. | %10 |
| **Faz 2** | **Frontend (Dummy Model)** | Tüm web sayfalarının responsive olarak modern renk/animasyon setleriyle kodlanması. İhtiyaç olan her yerin (Başarılar, Duyurular vb.) hard-coded dummy JSON veriler ile çalışan komponentler (Component Driven Design) olarak ortaya çıkarılması. | %35 |
| **Faz 3** | **Veritabanı Şeması ve EF Core Data** | FH'de ortaya çıkan Dummy JSON objelerine bakıp, eksiksiz PostgreSQL ilişkisel tablolarını tasarlama. .NET EF Core'a Db-First mantığıyla modelleri aktarma ve Context sınıflarını hazır hale getirme. Dummy dataların gerçek SQL'e gömülmesi (Seed Data). | %15 |
| **Faz 4** | **Backend (.NET API) Servisleri N-Tier Modülü** | WebAPI endpoint'lerinin yazılması (CRUD operasyonları). JWT ve Middleware kurgularının oturtulması. Frontend servislerinin (axios/fetch yapıları) bu gerçek API'lere uçlanması. Data'nın entegre hale gelmesi. | %25 |
| **Faz 5** | **B2B Entegrasyonlar ve Admin Panel Gelişimi** | Deneme Karneyi getirecek "Dış ERP" API bağlantılarının kodlanması, hata tolerans yapıları (Polly / Retry Mechanism). Admin paneli Auth süreçleri dahil tüm giriş çıkışların neticelendirilip Prod'da çalışır demoya hazır edilmesi. Excel Import gibi lüks eklentilerin ilavesi (İsteğe bağlı opsiyonel). | %15 |

---

> **📄 Versiyon Bilgisi:** v1.1 - Detaylandırılmış Spesifikasyon Sürümü.  
> Bu belge, kodlama süreci boyunca sürekli açık olacak bir referans kitabıdır. Teknik kararlarda bu ana iskeletten çıkılması halinde değişiklik talebi (Change Request) olarak proje sürecine yansıyacak ve bu kaynak yeniden senkronlanacaktır. (Değişmez Kural 8).
