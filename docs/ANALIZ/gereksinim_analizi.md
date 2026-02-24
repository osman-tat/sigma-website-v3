# 📋 6 Sigma Eğitim Kurumları — Gereksinim Analizi

> **Kaynak:** `analiz_master.md` — 10 Round, 67 Soru, %97 Tamamlanma
> **Tarih:** 2026-02-24
> **Hazırlayan:** HAVSAN Antigravity

---

## 1. Proje Özeti

**Müşteri:** 6 Sigma Eğitim Kurumları (Elazığ)
**Slogan:** "Hep Bir Adım Önde"
**Konum:** Ataşehir, Şelale Sk. No:29, 23040 Elazığ Merkez/Elazığ
**Faaliyet:** YKS ve LGS sınav hazırlık dershanesi (tek şube, iki program)
**Öne Çıkan Başarı:** 10 yılda 463 tıp öğrencisi, 10 senedir Elazığ birincisi

**Proje Amacı:** Kurumsal tanıtım web sitesi + admin paneli + öğrenci karne/sonuç görüntüleme sistemi.

---

## 2. Teknoloji Yığını (Tech Stack)

| Katman | Teknoloji | Açıklama |
|--------|-----------|----------|
| **Frontend** | Next.js (React) | SSR/SSG destekli, SEO uyumlu |
| **Backend** | .NET 8 LTS (ASP.NET Core Web API) | Tüm iş mantığı ve API gateway |
| **Veritabanı** | Supabase (PostgreSQL) | Veri saklama + Storage (dosyalar) |
| **Auth** | .NET Custom Auth (JWT) | Admin paneli yetkilendirmesi |
| **Geliştirme** | Docker (Docker-first) | İzole geliştirme ortamı |
| **Deployment** | ⏳ Henüz belirlenmedi | Coolify/Azure/VPS sonra kararlaştırılacak |
| **Dil** | Sadece Türkçe | Çoklu dil desteği yok |

### 2.1. Mimari Prensipler

```
┌──────────────┐    REST API    ┌──────────────────┐    SQL   ┌──────────────┐
│   Next.js    │ ────────────── │  .NET 8 Backend  │ ──────── │   Supabase   │
│  (Frontend)  │                │  (Web API)       │          │  (PostgreSQL │
│              │                │                  │ ──────── │  + Storage)  │
└──────────────┘                │  ┌─────────────┐ │          └──────────────┘
                                │  │ Harici API  │ │
                                │  │ (Karne Srv.)│ │
                                │  └─────────────┘ │
                                └──────────────────┘
```

**Temel Kurallar:**
- Frontend'de **hiçbir bilgi hardcode** olmayacak (çalışma saatleri, linkler, adres dahil)
- **Tüm veri trafiği** .NET backend üzerinden geçecek (Frontend → .NET → Supabase)
- Backend harici API'lere istek atabilecek (karne servisi, ileride eklenecek servisler)

---

## 3. Sayfa Yapısı ve İçerik

### 3.1. Navbar (Üst Menü)

| Menü Öğesi | Sayfa |
|------------|-------|
| Anasayfa | `/` |
| Hakkımızda | `/hakkimizda` |
| Başarılarımız | `/basarilar` |
| Duyurular | `/duyurular` |
| YKS | `/yks` |
| LGS | `/lgs` |

> Hero bölümü **OLMAYACAK**. Navbar altından direkt içerik başlayacak.

---

### 3.2. Anasayfa (`/`)

Daha önce netleştirilen yapıya göre; navbar altından direkt içerik bölümleri sıralanacak. **Hero/banner alanı yok.**

**İçerik bölümleri (önerilen sıra):**
1. Kurumsal tanıtım alanı (slogan + kısa açıklama)
2. Neden Biz? (özet özellikler)
3. Başarılarımız özeti (tıp grafiği preview)
4. Son duyurular listesi (preview)
5. İletişim CTA (WhatsApp yönlendirme)

---

### 3.3. Hakkımızda (`/hakkimizda`)

**Anahtar veriler (metin AI tarafından oluşturulacak):**
- 6 Sigma Eğitim Kurumları — "Hep Bir Adım Önde"
- 10 senedir Elazığ birincisi ve sıralamaları çıkarıyor
- 10 yılda 463 tıp öğrencisi çıkardı

---

### 3.4. Başarılarımız (`/basarilar`)

**Yapı:**
1. **Yıllara göre tıp kazanımı grafiği** (son 8 yıl, sadece Tıp, bar chart)
2. **Yıl bazında detay** — Tab/Accordion yapısı:
   - Yıl seçildiğinde o yılın öğrenci listesi açılır
   - Her öğrenci: İsim + Kazandığı Üniversite/Bölüm
   - Fotoğraf yok, sadece metin
   - Diğer bölümler de (Hukuk, Mühendislik vb.) yıl detayında gösterilecek

**Veri girişi:** Admin panelinden her sene ayrı ayrı girilecek.

---

### 3.5. Duyurular (`/duyurular`)

**Özellikler:**
- Sadece listeleme (kategori filtresi yok)
- Bildirim sistemi yok (sosyal medya üzerinden yapılıyor)
- Eski duyurular arşivlenmeyecek, sadece güncel duyurular gösterilecek
- Duyuru tipleri:
  - Genel duyurular (metin)
  - Deneme cevap anahtarı (PDF — herkese açık)
  - Deneme sınav sonucu görüntüleme (öğrenci girişi gerekli - aşağıda detaylı)
  - Tatil bilgisi

**Cevap Anahtarı:** Admin panelinden PDF olarak yüklenir, herkese açık listelenir.

---

### 3.6. YKS ve LGS Sayfaları (`/yks`, `/lgs`)

**İçerik (her iki sayfa için):**
- Takvim/program yok
- Hazırlık sürecinin nasıl yapıldığı
- Öğrencilere kazandırılan kazanımlar

**"Neden Bizi Tercih Etmelisiniz" bölümü:**
- Kütüphane
- Etüt odaları
- Özel ders imkanı
- Soru çözüm saatleri
- "Açık büfe" ders imkanı
- Kaliteli yayınlar
- Sık deneme sınavları
- Rehberlik imkanı

---

### 3.7. İletişim

**Ayrı bir sayfa yok**, footer ve WhatsApp yönlendirmesi yeterli. Mesaj formu yok.

---

### 3.8. Footer (Tüm Sayfalarda)

| Öğe | Detay |
|-----|-------|
| Sosyal Medya | Instagram, Facebook, WhatsApp |
| Adres | Ataşehir, Şelale Sk. No:29, 23040 Elazığ |
| Telefon | 0543 267 44 62 (WhatsApp ile aynı) |
| Harita | Google Maps embed (iframe kodu mevcut) |
| Çalışma Saatleri | DB'den çekilecek |
| Telif Hakkı | Telif hakkı notu |

**Sosyal Medya Linkleri:**
- 📸 Instagram: https://www.instagram.com/6sigmaegitim
- 📘 Facebook: https://www.facebook.com/6SigmaEgitimKurumlari
- 💬 WhatsApp: https://wa.me/905432674462

---

## 4. Deneme Sonucu / Karne Görüntüleme Sistemi

### 4.1. Kullanıcı Akışı

```
Öğrenci "Deneme Sonuçlarım" butonuna tıklar
        │
        ▼
Öğrenci numarasını girer (+ ileride ek bilgiler gerekebilir)
        │
        ▼
Frontend → .NET Backend → Harici Karne API'sine istek atar
        │
        ▼
API'den PDF döner
        │
        ▼
PDF Önizleme + "İndir" butonu gösterilir
```

> [!WARNING]
> **Öğrenci sisteme giriş yapmıyor!** Şifre/kullanıcı adı yok. Sadece karne/sonuç görmek istediğinde gerekli bilgileri giriyor.

### 4.2. Karne Türleri

1. **Standart deneme karnesi** — Bazı denemelerde verilen karne (PDF indirme)
2. **Yapay zeka destekli karne** — Ayrı bir programda hazırlanıp Drive klasöründe saklanan karneler

### 4.3. Harici API Entegrasyonu

| Parametre | Değer |
|-----------|-------|
| Yanıt formatı | PDF |
| API URL | ⏳ Sonra belirlenecek |
| İstek parametreleri | ⏳ Sonra belirlenecek (öğrenci no + ek bilgiler?) |
| Protokol | ⏳ Sonra belirlenecek (muhtemelen REST) |

---

## 5. Admin Paneli

### 5.1. Genel Özellikler

- **Erişim:** Kurum sahibi + Rehberlik birimi (aynı yetki seviyesi, tek rol)
- **Yetkilendirme:** .NET custom auth (JWT tabanlı)
- **Ayrı URL:** Admin paneli ayrı bir route'ta (`/admin`)

### 5.2. Admin Paneli Modülleri

| Modül | İşlev |
|-------|-------|
| **Duyuru Yönetimi** | Duyuru oluşturma, düzenleme, silme |
| **Cevap Anahtarı Yönetimi** | PDF yükleme (Supabase Storage) |
| **Başarılar Yönetimi** | Yıl bazında öğrenci başarıları CRUD |
| **Site Ayarları** | Çalışma saatleri, iletişim bilgileri, sosyal medya linkleri, adres |
| **Öğrenci Yönetimi** | Öğrenci verileri import (Excel), listeleme |

### 5.3. Öğrenci Verileri

- Mevcut Excel tablosu var (sütun başlıkları ⏳ kuruma sorularak belirlenecek)
- Excel import özelliği olacak

---

## 6. Veritabanı Şeması (Supabase / PostgreSQL)

### 6.1. Önerilen Tablolar

```sql
-- Admin kullanıcıları
admin_kullanicilar (
  id, email, sifre_hash, ad_soyad, rol, 
  olusturulma_tarihi, son_giris
)

-- Duyurular
duyurular (
  id, baslik, icerik, kategori, 
  cevap_anahtari_url, -- Supabase Storage URL
  yayinlanma_tarihi, aktif
)

-- Başarılar (yıl bazında)
basarilar (
  id, yil, ogrenci_adi, universite, 
  bolum, kategori -- tıp, hukuk, mühendislik vb.
)

-- Site Ayarları (key-value)
site_ayarlari (
  id, anahtar, deger, aciklama
  -- Örn: calisma_saatleri, telefon, adres, 
  -- instagram_url, facebook_url, whatsapp_url
)

-- Öğrenciler
ogrenciler (
  id, ogrenci_no, ad, soyad, 
  program -- YKS/LGS
)

-- YKS/LGS Sayfa İçerikleri
sayfa_icerikleri (
  id, sayfa_kodu, -- 'yks', 'lgs', 'hakkimizda'
  baslik, icerik, sira
)
```

---

## 7. Tasarım ve UX Kararları

### 7.1. Renk Paleti

| Rol | Renk |
|-----|------|
| Ana Renk 1 | **Lacivert** (kurumsal) |
| Ana Renk 2 | **Kırmızı** (kurumsal) |
| Zemin | **Beyaz** |
| Accent/Vurgu | **Altın/Turuncu** |

### 7.2. Genel Tasarım

- **Responsive:** Tam mobil + masaüstü uyumlu
- **Animasyonlar:** Olabilir ama performansı düşürmeyecek seviyede
- **Görseller:** Şu an AI ile üretilecek, sonra gerçek fotoğraflarla değiştirilecek
- **Görsel tarzı:** Normal sınıf ortamı, akıllı tahtalı (aşırı modern değil)
- **Logo:** Dijital dosya mevcut (SVG/PNG), favicon olarak da kullanılacak

### 7.3. SEO

- **Hedef anahtar kelime:** "Elazığ Dershane" → 1. sırada çıkması gerekiyor
- **Alan adı:** ⏳ Henüz belirlenmedi
- Semantic HTML, meta tags, proper heading hierarchy

---

## 8. Beklemede Olan Konular

| # | Konu | Durum | Bağımlılık |
|---|------|-------|------------|
| 1 | Excel sütun başlıkları (Soru 27) | ⏳ Kuruma sorulacak | Öğrenci import modülü |
| 2 | Harici karne API detayları (Soru 50) | ⏳ Sonradan eklenecek | Karne görüntüleme modülü |
| 3 | Deployment platformu (Soru 64) | ⏳ Belirlenmedi | Yayına alma aşaması |
| 4 | Google Drive normalization (Soru 19) | ⏳ Sonra konuşulacak | İsim eşleştirme |

> [!NOTE]
> Bu konular projenin başlamasını engellemez. Frontend dummy data ile %100 geliştirilebilir. Beklemede olan konular backend entegrasyon aşamasında netleştirilecektir.

---

## 9. Proje Zaman Planı

- **Deadline:** Yok, yeterli süre mevcut
- **Yaklaşım:** Frontend-first (HAVSAN standardı)
- **Sıra:** Analiz ✅ → Frontend (dummy data) → Backend (.NET) → Entegrasyon → Deployment
