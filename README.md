# 🩷 Bubub Website — README & Tutorial

## 📁 Struktur Folder

```
bubub-website/
├── index.html        ← halaman utama
├── style.css         ← styling
├── script.js         ← logic & fitur
├── README.md         ← ini file tutorialnya
├── asset/            ← TARUH FOTO & VIDEO DI SINI
│   ├── foto1.jpg
│   ├── foto2.png
│   ├── video1.mp4
│   └── ...
└── music/            ← TARUH FILE MUSIK DI SINI
    ├── lagu1.mp3
    └── ...
```

---

## 🖼️ Cara Tambah Foto & Video (Kolase)

1. Taruh file foto/video ke folder `asset/`
2. Buka `script.js`, cari bagian `ASSETS`
3. Daftarkan nama file kamu:

```javascript
const ASSETS = [
  { file: 'asset/foto1.jpg',  type: 'image' },
  { file: 'asset/foto2.png',  type: 'image' },
  { file: 'asset/video1.mp4', type: 'video' },
  { file: 'asset/foto3.jpeg', type: 'image' },
  // tambah terus...
];
```

**Format yang didukung:**
- Gambar: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
- Video: `.mp4`, `.mov`, `.webm`

---

## 🎵 Cara Tambah Musik & Lirik

1. Taruh file `.mp3` ke folder `music/`
2. Buka `script.js`, cari bagian `PLAYLIST`
3. Edit seperti ini:

```javascript
const PLAYLIST = [
  {
    file: 'music/lagu1.mp3',
    title: 'Judul Lagunya',
    artist: 'Nama Artis',
    lyrics: [
      { time: 0,   text: 'Bait pertama lirik' },
      { time: 5,   text: 'Lanjutan bait' },
      { time: 10,  text: 'Reff lagu' },
      // time = detik ke berapa lirik muncul
    ]
  },
];
```

**Cara tau waktu lirik (time):**
- Buka lagu di media player
- Catat menit:detik setiap baris lirik muncul
- Ubah ke detik total (misal 1:30 = 90 detik)

---

## 🗄️ Tutorial Setup Supabase (Database Komentar)

### Langkah 1: Buat Akun Supabase
1. Buka [https://supabase.com](https://supabase.com)
2. Klik **"Start your project"** → Sign up dengan GitHub atau email

### Langkah 2: Buat Project Baru
1. Klik **"New Project"**
2. Isi nama project (misal: `bubub-website`)
3. Buat password database (simpan baik-baik!)
4. Pilih region: **Southeast Asia (Singapore)**
5. Klik **"Create new project"** → tunggu 1-2 menit

### Langkah 3: Buat Tabel Komentar
1. Di sidebar kiri, klik **"Table Editor"**
2. Klik **"New Table"**
3. Isi:
   - **Name:** `comments`
   - **Enable Row Level Security (RLS):** OFF dulu (bisa diaktifkan nanti)
4. Tambahkan kolom berikut (klik "+ Add Column"):

| Column Name | Type | Default | Nullable |
|-------------|------|---------|----------|
| `id` | int8 | (auto, sudah ada) | No |
| `name` | varchar | — | No |
| `message` | text | — | No |
| `created_at` | timestamptz | `now()` | No |

5. Klik **"Save"**

### Langkah 4: Aktifkan Akses Publik (untuk komentar)
1. Di sidebar klik **"Authentication"** → **"Policies"**
2. Cari tabel `comments`
3. Klik **"New Policy"** → pilih **"Get started quickly"**
4. Pilih template **"Enable read access for all users"** → Save
5. Ulangi untuk **"Enable insert access for all users"**

### Langkah 5: Ambil API Keys
1. Di sidebar klik **"Settings"** (ikon gear ⚙️)
2. Klik **"API"**
3. Copy dua hal ini:
   - **Project URL** (contoh: `https://abcxyz.supabase.co`)
   - **anon/public key** (key yang panjang)

### Langkah 6: Pasang ke script.js
Buka `script.js`, ganti di bagian paling atas:

```javascript
const SUPABASE_URL = 'https://XXXXX.supabase.co';   // ← ganti ini
const SUPABASE_KEY = 'eyJhbGc...XXXXX';              // ← dan ini
```

---

## 🌐 Deploy ke GitHub Pages (GRATIS)

### Langkah 1: Install Git
Download di [https://git-scm.com](https://git-scm.com) kalau belum ada.

### Langkah 2: Buat Akun GitHub
Daftar di [https://github.com](https://github.com)

### Langkah 3: Buat Repository
1. Klik **"New Repository"**
2. Nama repo: `bubub` (atau apapun)
3. Pilih **Public**
4. Klik **"Create repository"**

### Langkah 4: Upload File
Buka terminal / VS Code terminal di folder `bubub-website/`, ketik:

```bash
git init
git add .
git commit -m "first commit 🩷"
git branch -M main
git remote add origin https://github.com/USERNAMEKAMU/bubub.git
git push -u origin main
```

### Langkah 5: Aktifkan GitHub Pages
1. Di repo GitHub, klik **"Settings"**
2. Scroll ke **"Pages"**
3. Source: **Deploy from a branch**
4. Branch: **main** → folder: **/ (root)**
5. Klik **Save**

Tunggu 2-3 menit, website live di:
`https://USERNAMEKAMU.github.io/bubub`

---

## 🔧 Kustomisasi Teks

Cari teks berikut di `index.html` dan ganti sesuai kebutuhan:
- `sayang` → panggilan si dia
- `seng` → panggilanmu
- `arrval` → namamu
- `gea` → nama dia
- Isi surat cinta di section `.letter-body`
- Alasan suka di `.reasons-grid`

---

## ❓ Troubleshooting

**Musik tidak muncul?**
- Pastikan file `.mp3` ada di folder `music/`
- Nama file harus sama persis dengan yang di `script.js`

**Foto tidak muncul?**
- Pastikan nama file sama persis (huruf besar/kecil sensitif)
- Format yang didukung: jpg, png, webp, mp4

**Komentar tidak tersimpan?**
- Cek SUPABASE_URL dan SUPABASE_KEY sudah benar
- Pastikan RLS policy sudah diaktifkan untuk INSERT

---

*Semoga suka ya~ ♡*
*— Ahmad Rival Fikir (si Sayang)*
