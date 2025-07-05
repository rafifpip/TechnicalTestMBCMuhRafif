# 💻 MBC LAB | Technical Test by Muhamad Rafif Rahmatullah

Website ini dikembangkan sebagai bagian dari _technical test_ untuk menampilkan profil **MBC Laboratory**, yang berfokus pada bidang **Multimedia Application**, **Big Data**, dan **Cybersecurity**. Website ini dibangun menggunakan **HTML, CSS, dan JavaScript murni**, serta di-_deploy_ melalui **Vercel** dengan dukungan _form backend_ via **EmailJS**.

🌐 **Live Demo:** [https://muhrafifr-technicaltest.vercel.app](https://muhrafifr-technicaltest.vercel.app)

---

## 📁 Struktur Proyek

Berikut adalah struktur direktori utama dari proyek ini:

```
📦 root/
├── 📁 CSS/
│   └── style.css         # Semua styling halaman
├── 📁 image/
│   ├── logo.png          # Logo MBC Lab
│   ├── icon.svg          # Ikon dalam format SVG
│   ├── foto.jpeg         # Foto developer
│   └── LAB.png           # Gambar untuk hero section
├── 📁 js/
│   └── script.js         # Interaksi menu mobile & EmailJS form
├── index.html            # Halaman utama website
└── README.md             # Dokumentasi proyek
```

### 📌 Penjelasan Singkat

- **HTML (`index.html`)**  
  Berisi struktur utama website mulai dari navbar, hero, tentang, visi-misi, divisi, kontak, hingga bagian developer.
- **CSS (`style.css`)**  
  Berisi desain responsif dengan palet warna yang disesuaikan untuk menampilkan kesan profesional dan modern.
- **JavaScript (`script.js`)**  
  Menangani:
  - Menu mobile toggle
  - Event klik luar untuk menutup menu
  - Integrasi Feather Icons
  - Pengiriman form via EmailJS

---

## ⚙️ Instalasi Lokal

Berikut adalah langkah-langkah menjalankan website ini secara lokal di perangkat Anda:

1. **Clone repositori**

   ```bash
    git clone https://github.com/rafifpip/mbc-lab-technicaltest.git
    cd mbc-lab-technicaltest
   ```

2. **Buka di browser lokal**
   Cukup klik dua kali `index.html`, atau gunakan _Live Server_ di VS Code untuk pengalaman pengembangan yang lebih baik.

3. **Struktur file harus tetap utuh**  
   Pastikan folder `CSS/`, `js/`, dan `image/` berada pada level yang sama dengan `index.html`.

---

## 🚀 Deployment

Website ini dideploy menggunakan platform **[Vercel](https://vercel.com)** karena kemudahan integrasi dengan GitHub dan dukungan _HTTPS otomatis_.

**Link Deployment**: [https://muhrafifr-technicaltest.vercel.app](https://muhrafifr-technicaltest.vercel.app)

Langkah singkat deployment:

1. Login ke Vercel
2. Import repository dari GitHub
3. Klik “Deploy”
4. Vercel akan otomatis membangun dan menyediakan link HTTPS

---

## 🔐 SSL Configuration

Website secara default menggunakan HTTPS karena didukung langsung oleh **Vercel**. Tidak perlu konfigurasi manual SSL tambahan.

Contoh:  
`https://muhrafifr-technicaltest.vercel.app` — menggunakan HTTPS aman dari awal.

---

## 📮 Backend Form: EmailJS Integration

Form pada bagian **Contact** terhubung langsung ke email menggunakan **EmailJS** — tanpa server backend.

### 🔧 Konfigurasi EmailJS

- **Service ID:** `service_fv51mhn`
- **Template ID:** `template_o4a9ize`
- **Public Key:** `EcMlHxNHlpGpxL_S8`

### Cara Kerja:

1. Pengguna mengisi form (nama, subject, email, pesan)
2. EmailJS akan mengirimkan email ke alamat tujuan yang sudah dikonfigurasi
3. Notifikasi alert akan muncul jika pengiriman berhasil/gagal

Berikut Script JS untuk Form kontak dengan EmailJS (Detail lengkap ada pada file script.js):

```js
emailjs.sendForm(serviceID, templateID, this).then(
  () => {
    alert("Email berhasil terkirim!");
  },
  (err) => {
    alert("Gagal mengirim email:\n" + JSON.stringify(err));
  }
);
```

---

## 🧑‍💻 Developer

Website ini dikembangkan oleh:

**Muhamad Rafif Rahmatullah**

- [LinkedIn](https://www.linkedin.com/in/muhamadrafifrahmatullah/)
- [GitHub](https://github.com/rafifpip)

---

## 📜 Lisensi

Proyek ini dibuat oleh Muhamad Rafif Rahmatullah untuk keperluan technical test MBC Lab. Silahkan gunakan sebagai referensi pengembangan front-end sederhana berbasis HTML/CSS/JS.

---
