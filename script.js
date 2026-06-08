/* =========================================
   BUBUB WEBSITE — script.js
   Ahmad Rival Fikir untuk Gheriya Rahima
   ========================================= */

// ==============================
// ⚙️ SUPABASE CONFIG
// Ganti dengan URL & KEY dari Supabase kamu!
// (lihat tutorial di bawah / README.md)
// ==============================
const SUPABASE_URL = "https://svilquwuuujxgebnoqrz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2aWxxdXd1dXVqeGdlYm5vcXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MTQ2NjksImV4cCI6MjA5NjQ5MDY2OX0.42_kD2I-I9xLBag5KM1LwgwRCVwelh1kbS0CMvcq_hs";

// ==============================
// 🎵 PLAYLIST CONFIG
// Tambahkan lagu di folder music/
// Format: { file: 'music/namafile.mp3', title: 'Judul Lagu', artist: 'Artis', lyrics: [...] }
// ==============================
const PLAYLIST = [
  {
    file: "music/Nuca - Masa ini, Nanti, dan Masa Indah Lainnya - (192 Kbps).mp3",
    title: "Masa ini, Nanti, dan Masa Indah Lainnya",
    artist: "Nuca",
    lyrics: [
      { time: 11.88, text: "Hai" },
      { time: 14.46, text: "Kau datang di saat yang tepat" },
      { time: 20.34, text: "Kau ajarkan apa itu cinta" },
      { time: 24.93, text: "Lewat mata kau berbicara" },
      { time: 35.04, text: "Hai" },
      { time: 37.67, text: "Mungkin aku telah menanti lama" },
      { time: 43.45, text: "Tapi ternyata tak sia-sia" },
      { time: 48.19, text: "Tuhan berikan malaikat surga" },
      { time: 58.28, text: "Izinkan ku berjalan bersamamu" },
      { time: 63.63, text: "Mimpi yang telah lama kudambakan" },
      { time: 71.26, text: "Kau adalah semua jawaban" },
      { time: 76.91, text: "Dari doa yang kupanjatkan" },
      { time: 82.77, text: "Dengan hadirmu di hidupku" },
      { time: 87.88, text: "Sudah ku merasa cukup" },
      { time: 101.51, text: "Izinkan ku berjalan bersamamu" },
      { time: 107.07, text: "Mimpi yang telah lama kudambahkan" },
      { time: 112.9, text: "Kini semua terasa indah" },
      { time: 118.85, text: "hitam putih pun mulai berwarna" },
      { time: 126.15, text: "kau adalah semua jawaban" },
      { time: 131.95, text: "dari doa yang kupanjatkan" },
      { time: 137.78, text: "dengan hadirmu dihidupku" },
      { time: 142.68, text: "sudah ku merasa cukup" },
      { time: 144.74, text: "engkaulah jawaban untuk hatiku" },
      { time: 149.27, text: "hati ini telah menetapkan" },
      { time: 155.17, text: "engkau sosok yang kan temani" },
      { time: 160.78, text: "dimasa ini, dimasa nanti" },
      { time: 165.93, text: "dan masa indah lainnya" },
      { time: 170.16, text: "♪" },
      { time: 179.23, text: "Semua kata yang terucap" },
      { time: 182.18, text: "Semua tertuju padamu, oh" },
      { time: 190.76, text: "Semua arah yang kutempuh" },
      { time: 193.72, text: "Semua tertuju padamu, ho-oh-oh" },
      { time: 201.37, text: "Kau adalah semua jawaban" },
      { time: 207.02, text: "Dari doa yang kupanjatkan" },
      { time: 212.66, text: "Dengan hadirmu di hidupku" },
      { time: 217.9, text: "Sudah ku merasa cukup" },
      { time: 220.07, text: "(Engkaulah jawaban untuk hatiku)" },
      { time: 224.53, text: "Hati ini telah menetapkan" },
      { time: 230.36, text: "Engkau sosok yang 'kan (temani) menemaniku" },
      { time: 235.86, text: "(Di masa ini) di masa ini, (di masa nanti)" },
      { time: 240.01, text: "Oh, dan masa indah lainnya" },
      { time: 244.04, text: "♪" },
      { time: 247.49, text: "Di masa ini, masa nanti" },
      { time: 252.53, text: "Dan masa indah lainnya" },
      { time: 257.23, text: "baris lirik 45" },
    ],
  },
  // Tambah lagu lagi di sini:
  // {
  //   file: 'music/lagu2.mp3',
  //   title: 'Judul Lagu 2',
  //   artist: 'Artis 2',
  //   lyrics: [...]
  // },
];

// ==============================
// 🖼️ ASSET CONFIG
// File di folder asset/ akan otomatis dibaca
// Daftarkan nama file gambar/video di sini:
// ==============================
const ASSETS = [
  // Contoh pengisian (sesuaikan nama file kamu):
  { file: 'asset/foto-1.webp',  type: 'image' },
  { file: 'asset/foto-2.webp',  type: 'image' },
  { file: 'asset/foto-3.webp',  type: 'image' },
  { file: 'asset/foto-4.webp',  type: 'image' },
  { file: 'asset/foto-5.webp',  type: 'image' },
  { file: 'asset/foto-6.webp',  type: 'image' },
  { file: 'asset/mo-ba.webp',  type: 'image' },
];

// ==============================
// 🧩 QUIZ DATA
// ==============================
const QUIZ_DATA = [
  {
    q: "Siapa yang lebih sering kangen duluan? 🥺",
    options: ["Si Sayang", "Bubub", "Sama-sama", "Engga ada yang kangen 😐"],
    correct: 2,
    response_correct: "Jujur banget! Emang sama-sama kangen kok wkwk 🥺",
    response_wrong:
      "Yakin? Kayaknya si Sayang yang lebih sering kangen deh... 😭",
  },
  {
    q: "Apa panggilan Bubub untuk si Sayang? 😊",
    options: ["Aa", "Rival", "Si Sayang", "Mas"],
    correct: 0,
    response_correct:
      'Benerr! Dan setiap kali dipanggil "aa" si Sayang meleleh wkwk (gaje bet) ',
    response_wrong: 'Hmm salah! Jawabannya "aa" dong, masa lupa 😆',
  },
  {
    q: "Kira-kira si Sayang nulis website ini berapa lama? 😅",
    options: [
      "1 jam",
      "Sebentar aja",
      "Lama banget karena penuh perasaan",
      "Copy paste dari internet",
    ],
    correct: 2,
    response_correct: "Betul banget~ penuh perasaan soalnya (pucing bangettt)",
    response_wrong:
      "Salah! Ini dibuat dengan penuh perasaan tau, effort banget kecewa cihhh 🥺",
  },
  {
    q: "Status hubungan si Sayang dan Bubub saat ini? 🤭",
    options: [
      "Pacaran 💑",
      "Musuhan 😤",
      "Teman dekat yang ada rasa 🤍",
      "Tidak ada apa-apa sama sekali",
    ],
    correct: 2,
    response_correct: "Jujur kan akhirnya Bubub~ 🤭",
    response_wrong:
      "Hmm, yakin itu jawabannya? Si Sayang harap-harap cemas nih wkwk 🥺",
  },
  {
    q: 'Kalau si Sayang bilang "kangen", Bubub ngerasa gimana? 💬',
    options: [
      "Biasa aja 😐",
      "Senang tapi pura-pura biasa 🙈",
      "Langsung balas kangen juga 🚀 ",
      "Malah kabur 😂",
    ],
    correct: 1,
    response_correct: "Ahaha ketahuan Bubub~ senang tapi malu-malu 🙈💕",
    response_wrong: "Hehe, si Sayang tau kok sebenernya Bubub senang 🤭",
  },
];

// ==============================
// GLOBAL STATE
// ==============================
let currentSong = 0;
let quizIndex = 0;
let quizScore = 0;
let isPlaying = false;
let lyricsInterval = null;
const audio = document.getElementById("main-audio");

// ==============================
// 🚀 START EXPERIENCE
// ==============================
function startExperience() {
  const overlay = document.getElementById("music-overlay");
  overlay.style.animation = "fadeOut 0.6s ease forwards";
  setTimeout(() => {
    overlay.style.display = "none";
    document.getElementById("music-player").classList.remove("hidden");
    loadSong(0);
    audio
      .play()
      .then(() => {
        isPlaying = true;
        document.getElementById("play-pause-btn").textContent = "⏸";
        document.getElementById("music-player").classList.add("playing");
        startLyricsSync();
      })
      .catch(() => {
        console.log("Autoplay blocked, user can press play");
      });
  }, 600);
  createParticles();
  initFloatingHearts();
  loadCollage();
  initQuiz();
  setLetterDate();
  loadComments();
}

// ==============================
// 🎵 MUSIC PLAYER
// ==============================
function loadSong(index) {
  if (PLAYLIST.length === 0) return;
  const song = PLAYLIST[index];
  audio.src = song.file;
  document.getElementById("song-title").textContent = song.title;
  document.getElementById("song-artist").textContent = song.artist;
  document.getElementById("lyrics-song-name").textContent =
    `${song.title} — ${song.artist}`;
  renderLyrics(song.lyrics);
  audio.load();
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    document.getElementById("play-pause-btn").textContent = "▶";
    document.getElementById("music-player").classList.remove("playing");
  } else {
    audio.play();
    isPlaying = true;
    document.getElementById("play-pause-btn").textContent = "⏸";
    document.getElementById("music-player").classList.add("playing");
    startLyricsSync();
  }
}

function toggleLyrics() {
  const lyricsSection = document.getElementById("lyrics-section");
  const btn = document.getElementById("lyrics-toggle-btn");
  lyricsSection.classList.toggle("hidden");
  const isHidden = lyricsSection.classList.contains("hidden");
  btn.textContent = isHidden ? "🎤 Lirik" : "🔽 Lirik";
}

function prevSong() {
  currentSong = (currentSong - 1 + PLAYLIST.length) % PLAYLIST.length;
  loadSong(currentSong);
  if (isPlaying) audio.play();
}

function nextSong() {
  currentSong = (currentSong + 1) % PLAYLIST.length;
  loadSong(currentSong);
  if (isPlaying) audio.play();
}

function seekMusic(e) {
  const bar = e.currentTarget;
  const ratio = e.offsetX / bar.offsetWidth;
  audio.currentTime = ratio * audio.duration;
}

function setVolume(val) {
  audio.volume = parseFloat(val);
}

audio.addEventListener("timeupdate", () => {
  const pct = (audio.currentTime / audio.duration) * 100 || 0;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("current-time").textContent = formatTime(
    audio.currentTime,
  );
  document.getElementById("total-time").textContent = formatTime(
    audio.duration,
  );
});

audio.addEventListener("ended", nextSong);

function formatTime(s) {
  if (!s || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${sec}`;
}

// ==============================
// 🎤 LYRICS SYNC
// ==============================
function renderLyrics(lyrics) {
  const container = document.getElementById("lyrics-container");
  container.innerHTML = "";
  if (!lyrics || lyrics.length === 0) {
    container.innerHTML =
      '<p class="lyrics-placeholder">♪ lirik belum ditambahkan ♪</p>';
    return;
  }
  lyrics.forEach((line, i) => {
    const el = document.createElement("p");
    el.className = "lyric-line";
    el.id = `lyric-${i}`;
    el.textContent = line.text;
    container.appendChild(el);
  });
}

function startLyricsSync() {
  if (lyricsInterval) clearInterval(lyricsInterval);
  lyricsInterval = setInterval(() => {
    if (!isPlaying || PLAYLIST.length === 0) return;
    const song = PLAYLIST[currentSong];
    if (!song || !song.lyrics) return;
    const now = audio.currentTime;

    // Cari index lirik yang aktif
    let activeIdx = -1;
    song.lyrics.forEach((line, i) => {
      if (now >= line.time) activeIdx = i;
    });

    // Update class semua lirik
    const allLines = document.querySelectorAll(".lyric-line");
    allLines.forEach((el, i) => {
      // Reset semua class
      el.className = "lyric-line";

      const diff = i - activeIdx;

      if (diff === 0) {
        el.classList.add("active", "visible");
      } else if (diff === -1) {
        el.classList.add("visible", "prev-1");
      } else if (diff === -2) {
        el.classList.add("visible", "prev-2");
      } else if (diff === 1) {
        el.classList.add("visible", "next-1");
      } else if (diff === 2) {
        el.classList.add("visible", "next-2");
      }
      // selain itu: opacity 0, max-height 0 → tersembunyi
    });

    // TIDAK ada scrollIntoView — user bebas scroll ke mana saja
  }, 300);
}

// ==============================
// 🖼️ COLLAGE (dari folder asset/)
// ==============================
function loadCollage() {
  const grid = document.getElementById("collage-grid");
  if (ASSETS.length === 0) return; // tampilkan placeholder
  grid.innerHTML = "";
  ASSETS.forEach((asset, i) => {
    const item = document.createElement("div");
    item.className = "collage-item";
    if (asset.type === "video") {
      item.innerHTML = `<video src="${asset.file}" muted loop playsinline preload="metadata"
        onclick="openLightbox('${asset.file}', 'video')" style="cursor:pointer"></video>`;
      const video = item.querySelector("video");
      video.addEventListener("mouseenter", () => video.play());
      video.addEventListener("mouseleave", () => video.pause());
    } else {
      item.innerHTML = `<img src="${asset.file}" alt="memory ${i + 1}" loading="lazy"
        onclick="openLightbox('${asset.file}', 'image')" style="cursor:pointer" />`;
    }
    grid.appendChild(item);
  });
  // Buat efek masonry animate in
  grid.querySelectorAll(".collage-item").forEach((el, i) => {
    el.style.animationDelay = `${i * 0.08}s`;
    el.classList.add("animate-in");
  });
}

// ==============================
// 🔍 LIGHTBOX
// ==============================
function openLightbox(src, type) {
  let lb = document.getElementById("lightbox");
  if (!lb) {
    lb = document.createElement("div");
    lb.id = "lightbox";
    lb.innerHTML = `
      <button id="lightbox-close" onclick="closeLightbox()">✕</button>
      <div id="lightbox-inner"></div>`;
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLightbox();
    });
    document.body.appendChild(lb);
  }
  const inner = document.getElementById("lightbox-inner");
  inner.innerHTML =
    type === "video"
      ? `<video src="${src}" controls autoplay style="max-width:90vw;max-height:85vh;border-radius:16px"></video>`
      : `<img src="${src}" style="max-width:90vw;max-height:85vh;border-radius:16px;object-fit:contain" />`;
  lb.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (lb) {
    lb.classList.remove("active");
    document.body.style.overflow = "";
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ==============================
// 🤭 SAYANG METER (tombol kabur)
// ==============================
function escapeButton(btn) {
  const container = document.getElementById("sayang-options");
  // Batas area kabur = dalam container, tidak boleh keluar
  const maxX = container.offsetWidth - btn.offsetWidth - 16;
  const maxY = container.offsetHeight - btn.offsetHeight - 16;
  // Random posisi tapi tetap dalam batas
  const randX = 8 + Math.random() * Math.max(0, maxX);
  const randY = 8 + Math.random() * Math.max(0, maxY);
  btn.style.left = randX + "px";
  btn.style.top = randY + "px";
}

function selectSayang(btn, msg) {
  document.querySelectorAll(".sayang-btn").forEach((b) => {
    b.disabled = true;
    b.style.opacity = "0.4";
  });
  btn.disabled = false;
  btn.style.opacity = "1";
  btn.style.background = "linear-gradient(135deg, #f06292, #ff85b3)";
  btn.style.color = "white";
  const result = document.getElementById("sayang-result");
  result.classList.remove("hidden");
  let message = "";
  if (msg.includes("Sayang banget")) {
    message = `😊 "${msg}" — si Sayang bahagia banget bacanya Bubub!! 🤭`;
  } else if (msg.includes("Lumayan")) {
    message = `😊 "${msg}" — oke deh, lumayan ya~ si Sayang terima `;
  } else {
    message = `😢 "${msg}" — bohong yakin? Si Sayang ga percaya wkwk 🤭`;
  }
  result.innerHTML = message;
  // confetti effect
  if (msg.includes("Sayang banget")) launchConfetti();
}

// ==============================
// 🎊 CONFETTI
// ==============================
function launchConfetti() {
  const emojis = ["🥳", "✨", "🌸", "💕", "🎀", "💝"];
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.cssText = `
        position:fixed; left:${Math.random() * 100}vw; top:-30px;
        font-size:${1 + Math.random()}rem;
        z-index:9000; pointer-events:none;
        animation: confettiFall ${1.5 + Math.random() * 2}s ease forwards;`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }, i * 80);
  }
}

// Inject confetti keyframes
const confettiStyle = document.createElement("style");
confettiStyle.textContent = `
  @keyframes confettiFall {
    from { transform: translateY(0) rotate(0deg); opacity: 1; }
    to   { transform: translateY(110vh) rotate(720deg); opacity: 0; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to   { opacity: 0; pointer-events: none; }
  }`;
document.head.appendChild(confettiStyle);

// ==============================
// 🎭 QUIZ
// ==============================
function initQuiz() {
  quizIndex = 0;
  quizScore = 0;
  renderQuiz();
}

function renderQuiz() {
  if (quizIndex >= QUIZ_DATA.length) {
    document.getElementById("quiz-card").innerHTML = `
      <div style="text-align:center;padding:2rem">
        <div style="font-size:3rem;margin-bottom:1rem">🏆</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:1.5rem;color:var(--text-dark);margin-bottom:0.75rem">
          Selesai! Skor Kejujuran: ${quizScore}/${QUIZ_DATA.length}
        </h3>
        <p style="color:var(--text-mid);font-style:italic;margin-bottom:1.5rem">
          ${
            quizScore >= 4
              ? "♡ Jujur banget Bubub! Si Sayang senang~"
              : quizScore >= 2
                ? "😄 Lumayan jujur nih wkwk"
                : "🤭 Kayaknya Bubub jadi suka bohong nih wkwk"
          }
        </p>
        <button class="quiz-next-btn" style="display:inline-flex" onclick="initQuiz()">Main Lagi? 🔄</button>
      </div>`;
    return;
  }
  const q = QUIZ_DATA[quizIndex];
  document.getElementById("quiz-question").textContent = q.q;
  const optContainer = document.getElementById("quiz-options");
  optContainer.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.textContent = opt;
    btn.onclick = () => answerQuiz(i);
    optContainer.appendChild(btn);
  });
  document.getElementById("quiz-result").classList.add("hidden");
  document.getElementById("quiz-next-btn").classList.add("hidden");
  document.getElementById("score-display").textContent = quizScore;
}

function answerQuiz(selected) {
  const q = QUIZ_DATA[quizIndex];
  const btns = document.querySelectorAll(".quiz-option-btn");
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    else if (i === selected && selected !== q.correct)
      btn.classList.add("wrong");
  });
  const isCorrect = selected === q.correct;
  if (isCorrect) quizScore++;
  const result = document.getElementById("quiz-result");
  result.textContent = isCorrect ? q.response_correct : q.response_wrong;
  result.classList.remove("hidden");
  document.getElementById("quiz-next-btn").classList.remove("hidden");
  document.getElementById("score-display").textContent = quizScore;
}

function nextQuiz() {
  quizIndex++;
  renderQuiz();
}

// ==============================
// 💌 SURAT — SET TANGGAL
// ==============================
function setLetterDate() {
  const opts = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("letter-date").textContent =
    new Date().toLocaleDateString("id-ID", opts);
}

// ==============================
// 📅 HITUNG HARI KENAL
// ==============================
function calcDays() {
  const val = document.getElementById("known-date").value;
  if (!val) return;
  const start = new Date(val);
  const today = new Date();
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  const el = document.getElementById("days-known");
  el.textContent = diff.toLocaleString("id-ID");
  el.style.animation = "none";
  requestAnimationFrame(() => {
    el.style.animation = "fadeInUp 0.5s ease";
  });
}

// ==============================
// ✨ PARTICLES
// ==============================
function createParticles() {
  const container = document.getElementById("particles-container");
  const symbols = ["🌸", "✨", "💕", "🌷", "🦋", "💫", "🎀"];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      --dur: ${6 + Math.random() * 8}s;
      --delay: ${Math.random() * 8}s;
      font-size: ${0.7 + Math.random() * 0.8}rem;`;
    container.appendChild(p);
  }
}

// ==============================
// 💞 FLOATING HEARTS (hero)
// ==============================
function initFloatingHearts() {
  const container = document.getElementById("floating-hearts");
  const hearts = ["🦋", "💕", "✨", "🌸"];
  for (let i = 0; i < 12; i++) {
    const h = document.createElement("div");
    h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    const dur = 5 + Math.random() * 6;
    const delay = Math.random() * 6;
    h.style.cssText = `
      position:absolute;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      font-size:${0.8 + Math.random() * 1.5}rem;
      opacity:0;
      animation: floatHeart ${dur}s ease-in-out ${delay}s infinite;
      pointer-events:none;`;
    container.appendChild(h);
  }
  const hs = document.createElement("style");
  hs.textContent = `
    @keyframes floatHeart {
      0%   { opacity:0; transform:translateY(0) scale(0.5); }
      20%  { opacity:0.5; }
      80%  { opacity:0.3; }
      100% { opacity:0; transform:translateY(-80px) scale(1.3); }
    }`;
  document.head.appendChild(hs);
}

// ==============================
// 💬 SUPABASE COMMENTS
// ==============================
async function submitComment() {
  const name = document.getElementById("comment-name").value.trim();
  const text = document.getElementById("comment-text").value.trim();
  const status = document.getElementById("comment-status");

  if (!name || !text) {
    showStatus("Isi nama dan pesan dulu ya 🥺", "error");
    return;
  }

  if (SUPABASE_URL === "GANTI_DENGAN_SUPABASE_URL_KAMU") {
    showStatus(
      "⚠️ Setup Supabase dulu ya! Cek README.md untuk tutorialnya.",
      "error",
    );
    return;
  }

  const btn = document.querySelector(".comment-submit-btn");
  btn.disabled = true;
  btn.textContent = "Mengirim... 💌";

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, message: text }),
    });

    if (res.ok) {
      showStatus("Pesan terkirim! Si Sayang pasti baca 🩷", "success");
      document.getElementById("comment-name").value = "";
      document.getElementById("comment-text").value = "";
      loadComments();
    } else {
      throw new Error("Gagal kirim");
    }
  } catch (e) {
    showStatus("Gagal kirim pesan 😢 Coba lagi ya", "error");
  } finally {
    btn.disabled = false;
    btn.textContent = "Kirim Pesan 💌";
  }
}

async function loadComments() {
  const list = document.getElementById("comments-list");

  if (SUPABASE_URL === "https://svilquwuuujxgebnoqrz.supabase.co") {
    list.innerHTML =
      '<div class="comments-loading">⚙️ Koneksikan hati untuk melihat komentar</div>';
    return;
  }

  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/comments?select=*&order=created_at.desc&limit=20`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      },
    );
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      list.innerHTML =
        '<div class="comments-loading">Belum ada pesan. Jadilah yang pertama! </div>';
      return;
    }
    list.innerHTML = data
      .map(
        (c) => `
      <div class="comment-item">
        <div class="comment-item-header">
          <span class="comment-item-name"> ${escapeHtml(c.name)}</span>
          <span class="comment-item-time">${formatDate(c.created_at)}</span>
        </div>
        <div class="comment-item-text">${escapeHtml(c.message)}</div>
      </div>`,
      )
      .join("");
  } catch (e) {
    list.innerHTML =
      '<div class="comments-loading">Gagal memuat pesan 😢</div>';
  }
}

function showStatus(msg, type) {
  const el = document.getElementById("comment-status");
  el.textContent = msg;
  el.className = `comment-status ${type}`;
  setTimeout(() => el.classList.add("hidden"), 4000);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ==============================
// 👀 SCROLL ANIMATE IN
// ==============================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll(".reason-card, .stat-card, .quiz-card, .letter-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Custom cursor pakai div (lebih reliable dari CSS cursor)
const cursorEl = document.createElement("div");
cursorEl.style.cssText = `
  position: fixed; pointer-events: none; z-index: 99999;
  font-size: 1.2rem; transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
  user-select: none;`;
cursorEl.textContent = "🎀";
document.body.appendChild(cursorEl);

document.addEventListener("mousemove", (e) => {
  cursorEl.style.left = e.clientX + "px";
  cursorEl.style.top = e.clientY + "px";
});

document.addEventListener("mousedown", () => {
  cursorEl.style.transform = "translate(-50%, -50%) scale(1.4)";
});
document.addEventListener("mouseup", () => {
  cursorEl.style.transform = "translate(-50%, -50%) scale(1)";
});
