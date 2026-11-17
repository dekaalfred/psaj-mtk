
    // ================================================================
    // 1. DATA
    // ================================================================

    const LEVEL_DATA = [
      { level: 1, expNeeded: 100, title: "Number Novice" },
      { level: 2, expNeeded: 150, title: "Counting Champion" },
      { level: 3, expNeeded: 200, title: "Math Adventurer" },
      { level: 4, expNeeded: 280, title: "Algebra Apprentice" },
      { level: 5, expNeeded: 350, title: "Geometry Explorer" },
      { level: 6, expNeeded: 450, title: "Function Fighter" },
      { level: 7, expNeeded: 550, title: "Trigonometry Titan" },
      { level: 8, expNeeded: 650, title: "Logarithm Lord" },
      { level: 9, expNeeded: 750, title: "Matrix Master" },
      { level: 10, expNeeded: 850, title: "Calculus Crusader" },
      { level: 11, expNeeded: 950, title: "Integral Invoker" },
      { level: 12, expNeeded: 1050, title: "Probability Prophet" },
      { level: 13, expNeeded: 1150, title: "Statistics Sage" },
      { level: 14, expNeeded: 1250, title: "Math Knight" },
      { level: 15, expNeeded: 1350, title: "Math Master" },
    ];

    const AVATAR_DATA = [
      { emoji: "🧑‍🚀", name: "Astronot", levelReq: 1 },
      { emoji: "🧙", name: "Penyihir", levelReq: 2 },
      { emoji: "🦸", name: "Pahlawan", levelReq: 3 },
      { emoji: "🧝", name: "Elf", levelReq: 4 },
      { emoji: "🧛", name: "Vampir", levelReq: 5 },
      { emoji: "🦹", name: "Penjahat", levelReq: 6 },
      { emoji: "🤖", name: "Robot", levelReq: 7 },
      { emoji: "👾", name: "Monster", levelReq: 8 },
      { emoji: "🎅", name: "Sinterklas", levelReq: 9 },
      { emoji: "🧜", name: "Putri Duyung", levelReq: 10 },
      { emoji: "🧚", name: "Peri", levelReq: 12 },
      { emoji: "🐱", name: "Kucing", levelReq: 14 },
      { emoji: "⭐", name: "Bintang", levelReq: 15 },
    ];

    // Item-item toko: bingkai avatar, tema HUD, booster
    const SHOP_ITEMS = [
      {
        id: "frame_perunggu",
        type: "frame",
        cssClass: "frame-perunggu",
        icon: "🥉",
        name: "Bingkai Perunggu",
        desc: "Bingkai avatar warna perunggu.",
        cost: 50,
        currency: "coin",
      },
      {
        id: "frame_perak",
        type: "frame",
        cssClass: "frame-perak",
        icon: "🥈",
        name: "Bingkai Perak",
        desc: "Bingkai avatar berkilau perak.",
        cost: 120,
        currency: "coin",
      },
      {
        id: "frame_emas",
        type: "frame",
        cssClass: "frame-emas",
        icon: "🥇",
        name: "Bingkai Emas",
        desc: "Bingkai avatar mewah warna emas.",
        cost: 250,
        currency: "coin",
      },
      {
        id: "frame_pelangi",
        type: "frame",
        cssClass: "frame-pelangi",
        icon: "🌈",
        name: "Bingkai Pelangi",
        desc: "Bingkai animasi warna-warni langka!",
        cost: 8,
        currency: "diamond",
      },
      {
        id: "theme_malam",
        type: "theme",
        dataTheme: "malam",
        icon: "🌙",
        name: "Tema Malam",
        desc: "HUD gelap elegan bertema malam.",
        cost: 80,
        currency: "coin",
      },
      {
        id: "theme_laut",
        type: "theme",
        dataTheme: "laut",
        icon: "🌊",
        name: "Tema Laut",
        desc: "HUD biru segar bertema samudra.",
        cost: 80,
        currency: "coin",
      },
      {
        id: "theme_sunset",
        type: "theme",
        dataTheme: "sunset",
        icon: "🌅",
        name: "Tema Sunset",
        desc: "HUD hangat bertema matahari terbenam.",
        cost: 80,
        currency: "coin",
      },
      {
        id: "theme_hutan",
        type: "theme",
        dataTheme: "hutan",
        icon: "🌲",
        name: "Tema Hutan",
        desc: "HUD hijau menyegarkan bertema hutan.",
        cost: 3,
        currency: "diamond",
      },
      {
        id: "boost_exp_small",
        type: "booster",
        icon: "⚡",
        name: "Booster EXP Kecil",
        desc: "Langsung dapat +30 EXP instan.",
        cost: 40,
        currency: "coin",
        consumable: true,
        effect: { exp: 30 },
      },
      {
        id: "boost_exp_big",
        type: "booster",
        icon: "🚀",
        name: "Booster EXP Besar",
        desc: "Langsung dapat +100 EXP instan.",
        cost: 4,
        currency: "diamond",
        consumable: true,
        effect: { exp: 100 },
      },
      {
        id: "boost_coin",
        type: "booster",
        icon: "💰",
        name: "Kantong Koin",
        desc: "Tukar 2 diamond untuk 60 koin instan.",
        cost: 2,
        currency: "diamond",
        consumable: true,
        effect: { coin: 60 },
      },
    ];

    const ACHIEVEMENTS = [
      {
        id: 1,
        icon: "🏆",
        name: "FIRST STEP",
        desc: "Jawab 1 soal pertama",
        unlocked: false,
        coinReward: 10,
      },
      {
        id: 2,
        icon: "🔥",
        name: "STREAK MASTER",
        desc: "7 hari streak",
        unlocked: false,
        coinReward: 20,
      },
      {
        id: 3,
        icon: "🎯",
        name: "PERFECT",
        desc: "Nilai 100% di quiz",
        unlocked: false,
        coinReward: 30,
      },
      {
        id: 4,
        icon: "⚡",
        name: "SPEED SOLVER",
        desc: "Jawab 50 soal",
        unlocked: false,
        coinReward: 40,
      },
      {
        id: 5,
        icon: "👑",
        name: "MATH MASTER",
        desc: "Level 10+",
        unlocked: false,
        coinReward: 100,
      },
      {
        id: 6,
        icon: "🎨",
        name: "AVATAR COLLECTOR",
        desc: "Buka 5 avatar",
        unlocked: false,
        coinReward: 30,
      },
      {
        id: 7,
        icon: "📚",
        name: "RAJIN BELAJAR",
        desc: "Buka 5 materi berbeda",
        unlocked: false,
        coinReward: 25,
      },
      {
        id: 8,
        icon: "👾",
        name: "BOSS SLAYER",
        desc: "Kalahkan 3 boss",
        unlocked: false,
        coinReward: 60,
      },
      {
        id: 9,
        icon: "🪙",
        name: "KAYA RAYA",
        desc: "Kumpulkan 500 koin",
        unlocked: false,
        coinReward: 0,
      },
      {
        id: 10,
        icon: "💎",
        name: "DIAMOND HUNTER",
        desc: "Kumpulkan 10 diamond",
        unlocked: false,
        coinReward: 20,
      },
      {
        id: 11,
        icon: "🛍️",
        name: "SHOPAHOLIC",
        desc: "Beli 3 item di toko",
        unlocked: false,
        coinReward: 15,
      },
      {
        id: 12,
        icon: "🔗",
        name: "COMBO KING",
        desc: "Raih combo 5x jawaban benar",
        unlocked: false,
        coinReward: 25,
      },
      {
        id: 13,
        icon: "💯",
        name: "CENTURY CLUB",
        desc: "Jawab 100 soal",
        unlocked: false,
        coinReward: 80,
      },
      {
        id: 14,
        icon: "🧠",
        name: "MULTI TALENTA",
        desc: "Selesaikan materi dari SD, SMP, dan SMA",
        unlocked: false,
        coinReward: 50,
      },
    ];

    // ================================================================
    // 2. MATERI & SOAL
    // ================================================================

    const MATERI_DATA = {
      sd: {
        sd1: {
          name: "Operasi Bilangan",
          icon: "🔢",
          desc: "Pelajari penjumlahan, pengurangan, perkalian, dan pembagian.",
          pdf: "pdfs/sd/PDF_1_Operasi_Bilangan.pdf",
          content: `
                        <h3>📌 Operasi Bilangan Dasar</h3>
                        <p>Ada 4 operasi dasar: <b>+</b> (penjumlahan), <b>−</b> (pengurangan), <b>×</b> (perkalian), dan <b>÷</b> (pembagian). Urutan pengerjaan mengikuti aturan <b>KaBaTaKuJumKu</b>: Kurung, Pangkat, Kali/Bagi (kiri ke kanan), Jumlah/Kurang (kiri ke kanan).</p>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>25 + 37 = 62</b></p><p><b>8 × 5 − 2 = 38</b> (kalikan dulu: 40, baru kurangi: 38)</p></div>
                        <div class="rumus">(a + b) × c = a×c + b×c</div>
                        <div class="tip">💡 <b>Tips:</b> Perkalian dengan 10 = tambahkan 0 di belakang. Perkalian dengan 100 = tambahkan dua 0.</div>
                        <div class="salah-kaprah">⚠️ <b>Hati-hati:</b> Kalikan/bagi dulu sebelum menjumlah/mengurangi jika tidak ada tanda kurung!</div>
                    `,
        },
        sd2: {
          name: "Pecahan",
          icon: "🍕",
          desc: "Pelajari operasi penjumlahan dan pengurangan pecahan.",
          pdf: "pdfs/sd/PDF_2_Pecahan.pdf",
          content: `
                        <h3>📌 Pecahan</h3>
                        <p>Pecahan adalah bagian dari keseluruhan, ditulis <b>a/b</b> di mana a = pembilang, b = penyebut. Untuk menjumlah/mengurangi pecahan, penyebutnya harus sama dulu (samakan dengan KPK).</p>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>1/2 + 1/4 = 2/4 + 1/4 = 3/4</b></p></div>
                        <div class="rumus">a/b × c/d = (a×c) / (b×d)</div>
                        <div class="tip">💡 <b>Tips:</b> Samakan penyebut sebelum menjumlahkan atau mengurangkan!</div>
                        <div class="salah-kaprah">⚠️ <b>Hati-hati:</b> Membagi pecahan = kalikan dengan kebalikan (balik pembilang & penyebut pecahan kedua).</div>
                    `,
        },
        sd3: {
          name: "Persentase",
          icon: "💯",
          desc: "Pelajari cara menghitung persentase.",
          pdf: "pdfs/sd/PDF_3_Persentase.pdf",
          content: `
                        <h3>📌 Persentase</h3>
                        <p>Persentase artinya "per seratus". Rumus: Persentase = (Nilai / Total) × 100%.</p>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>25% dari 80 = 80 × 25/100 = 20</b></p></div>
                        <div class="rumus">Nilai = Persen/100 × Total</div>
                        <div class="tip">💡 <b>Tips:</b> 50% = setengah, 25% = seperempat, 10% = geser koma satu angka ke kiri.</div>
                    `,
        },
        sd4: {
          name: "Bangun Ruang",
          icon: "📦",
          desc: "Pelajari volume dan luas permukaan kubus, balok, dan tabung.",
          pdf: "pdfs/sd/PDF_4_Bangun_Ruang.pdf",
          content: `
                        <h3>📌 Bangun Ruang</h3>
                        <p>Bangun ruang punya volume (isi ruang) dan luas permukaan (luas seluruh sisi).</p>
                        <div class="rumus">Kubus: V = s³, Luas Permukaan = 6s²</div>
                        <div class="rumus">Balok: V = p × l × t</div>
                        <div class="rumus">Tabung: V = π × r² × t</div>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>Kubus s=4cm → V = 4³ = 64 cm³</b></p></div>
                        <div class="tip">💡 <b>Tips:</b> Satuan volume selalu pangkat 3 (cm³, m³), satuan luas pangkat 2 (cm², m²).</div>
                    `,
        },
        sd5: {
          name: "Pengukuran & Satuan",
          icon: "⏱️",
          desc: "Pelajari konversi satuan waktu, panjang, berat, dan kecepatan.",
          pdf: "pdfs/sd/PDF_5_Pengukuran_dan_Satuan.pdf",
          content: `
                        <h3>📌 Pengukuran & Satuan</h3>
                        <p>Satuan panjang: km-hm-dam-m-dm-cm-mm (setiap turun 1 tangga ×10). Kecepatan = Jarak ÷ Waktu.</p>
                        <div class="rumus">Kecepatan (v) = Jarak (s) ÷ Waktu (t)</div>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>Jarak 120 km ditempuh 2 jam → v = 60 km/jam</b></p></div>
                        <div class="tip">💡 <b>Tips:</b> 1 jam = 60 menit, 1 menit = 60 detik. Naik tangga satuan panjang = bagi 10, turun tangga = kali 10.</div>
                    `,
        },
      },
      smp: {
        smp1: {
          name: "Aljabar",
          icon: "🧮",
          desc: "Pelajari persamaan linear satu variabel.",
          pdf: "pdfs/smp/01_Aljabar.pdf",
          content: `
                        <h3>📌 Aljabar</h3>
                        <p>Aljabar menggunakan huruf (variabel) untuk mewakili angka yang belum diketahui. Tujuannya adalah mengisolasi variabel di satu sisi.</p>
                        <div class="rumus">ax + b = c → x = (c - b) / a</div>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>2x + 6 = 16 → 2x = 10 → x = 5</b></p></div>
                        <div class="tip">💡 <b>Tips:</b> Apa pun yang dilakukan di satu sisi persamaan, harus dilakukan juga di sisi lain agar tetap seimbang.</div>
                    `,
        },
        smp2: {
          name: "Geometri",
          icon: "📐",
          desc: "Pelajari rumus luas dan keliling bangun datar & ruang.",
          pdf: "pdfs/smp/02_Geometri.pdf",
          content: `
                        <h3>📌 Bangun Datar & Ruang</h3>
                        <div class="rumus">Persegi: L = s², K = 4s</div>
                        <div class="rumus">Lingkaran: L = πr², K = 2πr</div>
                        <div class="rumus">Segitiga: L = ½ × alas × tinggi</div>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>Luas persegi s=8cm → 64 cm²</b></p></div>
                        <div class="tip">💡 <b>Tips:</b> Gunakan π ≈ 22/7 jika jari-jari kelipatan 7, atau π ≈ 3,14 untuk angka lain.</div>
                    `,
        },
        smp3: {
          name: "Statistika",
          icon: "📊",
          desc: "Pelajari mean, median, dan modus.",
          pdf: "pdfs/smp/03_Statistika.pdf",
          content: `
                        <h3>📌 Ukuran Pemusatan Data</h3>
                        <ul><li><b>Mean</b>: Jumlah data ÷ Banyak data</li><li><b>Median</b>: Nilai tengah setelah data diurutkan</li><li><b>Modus</b>: Nilai yang paling sering muncul</li></ul>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>Data 5,7,8,6,9 → Mean = 7</b></p></div>
                        <div class="tip">💡 <b>Tips:</b> Selalu urutkan data dulu sebelum mencari median!</div>
                    `,
        },
        smp4: {
          name: "SPLDV",
          icon: "🔀",
          desc: "Pelajari sistem persamaan linear dua variabel.",
          pdf: "pdfs/smp/04_SPLDV.pdf",
          content: `
                        <h3>📌 Sistem Persamaan Linear Dua Variabel</h3>
                        <p>SPLDV terdiri dari dua persamaan dengan dua variabel (biasanya x dan y) yang diselesaikan bersamaan, menggunakan metode substitusi atau eliminasi.</p>
                        <div class="rumus">x + y = 7 dan x − y = 1 → x = 4, y = 3</div>
                        <div class="contoh"><div class="label">Contoh (Eliminasi):</div><p><b>Jumlahkan kedua persamaan untuk hilangkan y: 2x = 8 → x = 4</b></p></div>
                        <div class="tip">💡 <b>Tips:</b> Pilih metode eliminasi jika koefisien salah satu variabel mudah disamakan atau berlawanan tanda.</div>
                    `,
        },
        smp5: {
          name: "Bilangan Berpangkat & Akar",
          icon: "√",
          desc: "Pelajari operasi eksponen dan bentuk akar.",
          pdf: "pdfs/smp/05_Bilangan_Berpangkat_dan_Akar.pdf",
          content: `
                        <h3>📌 Bilangan Berpangkat & Bentuk Akar</h3>
                        <div class="rumus">aᵐ × aⁿ = aᵐ⁺ⁿ &nbsp;&nbsp; aᵐ ÷ aⁿ = aᵐ⁻ⁿ &nbsp;&nbsp; (aᵐ)ⁿ = aᵐˣⁿ</div>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>2³ × 2² = 2⁵ = 32</b></p><p><b>√16 = 4 (karena 4² = 16)</b></p></div>
                        <div class="tip">💡 <b>Tips:</b> a⁰ = 1 untuk semua a ≠ 0. a⁻ⁿ = 1/aⁿ.</div>
                    `,
        },
      },
      sma: {
        sma1: {
          name: "Fungsi & Limit",
          icon: "📈",
          desc: "Pelajari konsep fungsi dan limit.",
          pdf: "pdfs/sma/06_Fungsi_dan_Limit.pdf",
          content: `
                        <h3>📌 Fungsi</h3>
                        <p>Fungsi f(x) memetakan setiap input x ke satu output. Bentuk umum linear: f(x) = ax + b.</p>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>f(x)=2x+3, f(5)=13</b></p></div>
                        <h3>📌 Limit</h3>
                        <p>Limit menunjukkan nilai yang didekati fungsi saat x mendekati suatu titik. Jika bentuk 0/0 muncul, faktorkan dulu.</p>
                        <div class="rumus">lim(x→1) (x²-1)/(x-1) = lim(x→1) (x+1) = 2</div>
                        <div class="tip">💡 <b>Tips:</b> Substitusi langsung dulu; jika hasilnya 0/0, gunakan pemfaktoran atau L'Hopital.</div>
                    `,
        },
        sma2: {
          name: "Trigonometri",
          icon: "🌀",
          desc: "Pelajari sinus, cosinus, dan tangen.",
          pdf: "pdfs/sma/07_Trigonometri.pdf",
          content: `
                        <h3>📌 Trigonometri</h3>
                        <ul><li><b>sin θ</b> = depan/miring</li><li><b>cos θ</b> = samping/miring</li><li><b>tan θ</b> = depan/samping = sin θ/cos θ</li></ul>
                        <div class="rumus">sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1</div>
                        <div class="rumus">sin²θ + cos²θ = 1</div>
                        <div class="tip">💡 <b>Tips:</b> Hafalkan nilai sudut istimewa 0°, 30°, 45°, 60°, 90° — ini kunci banyak soal!</div>
                    `,
        },
        sma3: {
          name: "Matriks",
          icon: "🧩",
          desc: "Pelajari operasi dasar matriks.",
          pdf: "pdfs/sma/08_Matriks.pdf",
          content: `
                        <h3>📌 Matriks</h3>
                        <div class="rumus" style="display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap;">
                            det 
                            <span style="display: inline-flex; align-items: center;">
                                <span style="font-size: 2.5rem; font-weight: 300; line-height: 1; transform: translateY(-2px);">(</span>
                                <span style="display: inline-grid; grid-template-columns: 1fr 1fr; gap: 0 12px; text-align: center; padding: 0 4px; font-size: 1rem;">
                                    <span>a</span><span>b</span>
                                    <span>c</span><span>d</span>
                                </span>
                                <span style="font-size: 2.5rem; font-weight: 300; line-height: 1; transform: translateY(-2px);">)</span>
                            </span>
                            = a×d - b×c
                        </div>
                        <div class="contoh">
                            <div class="label">Contoh:</div>
                            <p style="display: flex; align-items: center; gap: 8px; font-weight: bold; margin-top: 8px; flex-wrap: wrap;">
                                det 
                                <span style="display: inline-flex; align-items: center;">
                                    <span style="font-size: 2.5rem; font-weight: 300; line-height: 1; transform: translateY(-2px);">(</span>
                                    <span style="display: inline-grid; grid-template-columns: 1fr 1fr; gap: 0 12px; text-align: center; padding: 0 4px; font-size: 1rem;">
                                        <span>1</span><span>2</span>
                                        <span>3</span><span>4</span>
                                    </span>
                                    <span style="font-size: 2.5rem; font-weight: 300; line-height: 1; transform: translateY(-2px);">)</span>
                                </span>
                                = -2
                            </p>
                        </div>
                        <div class="tip">💡 <b>Tips:</b> Penjumlahan/pengurangan matriks dilakukan elemen per elemen pada posisi yang sama. Ukuran matriks harus sama.</div>
                    `,
        },
        sma4: {
          name: "Barisan & Deret",
          icon: "🔢",
          desc: "Pelajari barisan aritmetika dan geometri.",
          pdf: "pdfs/sma/09_Barisan_dan_Deret.pdf",
          content: `
                        <h3>📌 Barisan Aritmetika</h3>
                        <p>Selisih antar suku berurutan selalu sama (disebut beda, b).</p>
                        <div class="rumus">Un = a + (n-1)b</div>
                        <h3>📌 Barisan Geometri</h3>
                        <p>Rasio antar suku berurutan selalu sama (disebut rasio, r).</p>
                        <div class="rumus">Un = a × r⁽ⁿ⁻¹⁾</div>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>2,5,8,11,... → a=2, b=3, U5 = 2+(5-1)3 = 14</b></p></div>
                        <div class="tip">💡 <b>Tips:</b> Jika selisih tetap → aritmetika. Jika perbandingan tetap → geometri.</div>
                    `,
        },
        sma5: {
          name: "Peluang",
          icon: "🎲",
          desc: "Pelajari dasar teori peluang (probabilitas).",
          pdf: "pdfs/sma/10_Peluang.pdf",
          content: `
                        <h3>📌 Peluang</h3>
                        <p>Peluang suatu kejadian A adalah perbandingan banyak kejadian A dengan banyak seluruh kejadian yang mungkin (ruang sampel).</p>
                        <div class="rumus">P(A) = n(A) / n(S)</div>
                        <div class="contoh"><div class="label">Contoh:</div><p><b>Peluang dadu muncul angka genap: n(A)=3 {2,4,6}, n(S)=6 → P = 3/6 = 1/2</b></p></div>
                        <div class="tip">💡 <b>Tips:</b> Nilai peluang selalu antara 0 dan 1. P=0 mustahil terjadi, P=1 pasti terjadi.</div>
                    `,
        },
      },
    };

    // Soal generators
    function generateSoalSD1() {
      return [
        {
          q: "25 + 37 = ?",
          o: ["62", "52", "72", "61"],
          c: 0,
          exp: "25 + 37 = 62",
        },
        {
          q: "84 - 29 = ?",
          o: ["55", "65", "45", "54"],
          c: 0,
          exp: "84 - 29 = 55",
        },
        {
          q: "13 × 8 = ?",
          o: ["94", "104", "114", "98"],
          c: 1,
          exp: "13 × 8 = 104",
        },
        {
          q: "96 ÷ 6 = ?",
          o: ["14", "16", "18", "15"],
          c: 1,
          exp: "96 ÷ 6 = 16",
        },
        {
          q: "7 × 9 + 8 = ?",
          o: ["71", "72", "73", "63"],
          c: 0,
          exp: "7×9=63, 63+8=71",
        },
        {
          q: "(15 + 5) ÷ 4 = ?",
          o: ["4", "5", "6", "3"],
          c: 1,
          exp: "15+5=20, 20÷4=5",
        },
        {
          q: "2/3 + 1/3 = ?",
          o: ["1", "2/3", "3/6", "1/3"],
          c: 0,
          exp: "2/3+1/3=3/3=1",
        },
        {
          q: "3/4 - 1/4 = ?",
          o: ["1/2", "1/4", "2/4", "3/8"],
          c: 0,
          exp: "3/4-1/4=2/4=1/2",
        },
        {
          q: "15% dari 200 = ?",
          o: ["20", "30", "40", "25"],
          c: 1,
          exp: "200×15/100=30",
        },
        {
          q: "120 × 5 = ?",
          o: ["500", "600", "700", "550"],
          c: 1,
          exp: "120×5=600",
        },
        {
          q: "6 × (4 + 3) = ?",
          o: ["40", "42", "44", "46"],
          c: 1,
          exp: "4+3=7, 6×7=42",
        },
        {
          q: "100 - 8 × 7 = ?",
          o: ["42", "44", "46", "48"],
          c: 1,
          exp: "8×7=56, 100-56=44",
        },
        { q: "9 × 9 = ?", o: ["81", "72", "99", "89"], c: 0, exp: "9×9=81" },
        {
          q: "144 ÷ 12 = ?",
          o: ["10", "11", "12", "13"],
          c: 2,
          exp: "144÷12=12",
        },
        {
          q: "250 + 175 = ?",
          o: ["415", "425", "435", "445"],
          c: 1,
          exp: "250+175=425",
        },
      ];
    }

    function generateSoalSD2() {
      return [
        {
          q: "1/2 + 1/4 = ?",
          o: ["2/4", "3/4", "1/4", "2/6"],
          c: 1,
          exp: "1/2=2/4, 2/4+1/4=3/4",
        },
        {
          q: "3/5 - 1/5 = ?",
          o: ["2/5", "2/10", "4/5", "1/5"],
          c: 0,
          exp: "3/5-1/5=2/5",
        },
        {
          q: "2/3 × 3/4 = ?",
          o: ["6/12", "1/2", "5/7", "3/6"],
          c: 1,
          exp: "2/3×3/4=6/12=1/2",
        },
        {
          q: "2/3 ÷ 4/5 = ?",
          o: ["8/15", "10/12", "5/6", "3/4"],
          c: 2,
          exp: "2/3÷4/5=2/3×5/4=10/12=5/6",
        },
        {
          q: "1 1/2 + 2 1/3 = ?",
          o: ["3 5/6", "3 1/5", "4 1/6", "3 2/5"],
          c: 0,
          exp: "1 1/2=3/2, 2 1/3=7/3, 3/2+7/3=9/6+14/6=23/6=3 5/6",
        },
        {
          q: "2 1/4 - 1 1/2 = ?",
          o: ["3/4", "1/4", "1 3/4", "2/4"],
          c: 0,
          exp: "2 1/4=9/4, 1 1/2=3/2=6/4, 9/4-6/4=3/4",
        },
        {
          q: "3/8 + 5/8 = ?",
          o: ["1", "6/8", "7/8", "1/2"],
          c: 0,
          exp: "3/8+5/8=8/8=1",
        },
        {
          q: "7/10 - 3/10 = ?",
          o: ["2/5", "5/10", "3/5", "2/10"],
          c: 0,
          exp: "7/10-3/10=4/10=2/5",
        },
        {
          q: "1/4 × 1/2 = ?",
          o: ["1/6", "1/8", "2/6", "1/4"],
          c: 1,
          exp: "1/4×1/2=1/8",
        },
        {
          q: "3/4 ÷ 1/2 = ?",
          o: ["3/8", "1 1/2", "3/2", "2/3"],
          c: 1,
          exp: "3/4÷1/2=3/4×2=3/2=1 1/2",
        },
        {
          q: "5/6 - 1/3 = ?",
          o: ["1/2", "2/3", "1/3", "4/6"],
          c: 0,
          exp: "1/3=2/6, 5/6-2/6=3/6=1/2",
        },
        {
          q: "2/5 + 3/10 = ?",
          o: ["1/2", "5/15", "7/10", "5/10"],
          c: 2,
          exp: "2/5=4/10, 4/10+3/10=7/10",
        },
      ];
    }

    function generateSoalSD3() {
      return [
        {
          q: "25% dari 80 = ?",
          o: ["15", "20", "25", "30"],
          c: 1,
          exp: "80×25/100=20",
        },
        {
          q: "10% dari 250 = ?",
          o: ["15", "20", "25", "30"],
          c: 2,
          exp: "250×10/100=25",
        },
        {
          q: "50% dari 360 = ?",
          o: ["160", "170", "180", "190"],
          c: 2,
          exp: "360×50/100=180",
        },
        {
          q: "75% dari 120 = ?",
          o: ["80", "85", "90", "95"],
          c: 2,
          exp: "120×75/100=90",
        },
        {
          q: "15% dari 300 = ?",
          o: ["35", "40", "45", "50"],
          c: 2,
          exp: "300×15/100=45",
        },
        {
          q: "5% dari 600 = ?",
          o: ["20", "25", "30", "35"],
          c: 2,
          exp: "600×5/100=30",
        },
        {
          q: "120% dari 50 = ?",
          o: ["50", "55", "60", "65"],
          c: 2,
          exp: "50×120/100=60",
        },
        {
          q: "8% dari 150 = ?",
          o: ["10", "11", "12", "13"],
          c: 2,
          exp: "150×8/100=12",
        },
        {
          q: "40 dari 200 = berapa persen?",
          o: ["15%", "20%", "25%", "30%"],
          c: 1,
          exp: "40/200×100%=20%",
        },
        {
          q: "60% dari 90 = ?",
          o: ["50", "52", "54", "56"],
          c: 2,
          exp: "90×60/100=54",
        },
      ];
    }

    function generateSoalSD4() {
      return [
        {
          q: "Volume kubus s=4cm?",
          o: ["48", "56", "64", "72"],
          c: 2,
          exp: "V=4³=64 cm³",
        },
        {
          q: "Volume balok 5×4×3?",
          o: ["50", "55", "60", "65"],
          c: 2,
          exp: "V=5×4×3=60 cm³",
        },
        {
          q: "Luas permukaan kubus s=3cm?",
          o: ["48", "52", "54", "56"],
          c: 2,
          exp: "LP=6×3²=54 cm²",
        },
        {
          q: "Volume tabung r=7,t=10 (π=22/7)?",
          o: ["1400", "1450", "1540", "1600"],
          c: 2,
          exp: "V=22/7×7²×10=1540 cm³",
        },
        {
          q: "Volume kubus s=6cm?",
          o: ["196", "206", "216", "226"],
          c: 2,
          exp: "V=6³=216 cm³",
        },
        {
          q: "Volume balok 8×5×2?",
          o: ["70", "75", "80", "85"],
          c: 2,
          exp: "V=8×5×2=80 cm³",
        },
        {
          q: "Luas permukaan balok 4×3×2?",
          o: ["48", "50", "52", "54"],
          c: 2,
          exp: "LP=2(12+8+6)=52 cm²",
        },
        {
          q: "Volume kubus s=10cm?",
          o: ["800", "900", "1000", "1100"],
          c: 2,
          exp: "V=10³=1000 cm³",
        },
      ];
    }

    function generateSoalSD5() {
      return [
        {
          q: "2 jam = ? menit",
          o: ["100", "110", "120", "130"],
          c: 2,
          exp: "2×60=120 menit",
        },
        {
          q: "3 km = ? m",
          o: ["300", "3000", "30000", "30"],
          c: 1,
          exp: "3km=3000m",
        },
        {
          q: "Jarak 100km, waktu 2 jam, kecepatan?",
          o: ["40km/j", "50km/j", "60km/j", "70km/j"],
          c: 1,
          exp: "v=100/2=50km/jam",
        },
        {
          q: "5000 gram = ? kg",
          o: ["3", "4", "5", "6"],
          c: 2,
          exp: "5000/1000=5kg",
        },
        {
          q: "Jarak 240km ditempuh dgn v=60km/j, waktu?",
          o: ["3jam", "4jam", "5jam", "6jam"],
          c: 1,
          exp: "t=240/60=4 jam",
        },
        {
          q: "1.5 jam = ? menit",
          o: ["80", "90", "100", "110"],
          c: 1,
          exp: "1.5×60=90 menit",
        },
        {
          q: "4500 m = ? km",
          o: ["4.5", "45", "0.45", "450"],
          c: 0,
          exp: "4500/1000=4.5km",
        },
        {
          q: "Kecepatan 80km/j selama 3 jam, jarak?",
          o: ["220km", "230km", "240km", "250km"],
          c: 2,
          exp: "s=80×3=240km",
        },
      ];
    }

    function generateSoalSMP1() {
      return [
        {
          q: "2x + 6 = 16, x = ?",
          o: ["3", "4", "5", "6"],
          c: 2,
          exp: "2x=10 → x=5",
        },
        {
          q: "3x - 7 = 14, x = ?",
          o: ["5", "6", "7", "8"],
          c: 2,
          exp: "3x=21 → x=7",
        },
        {
          q: "4x + 5 = 25, x = ?",
          o: ["4", "5", "6", "7"],
          c: 1,
          exp: "4x=20 → x=5",
        },
        {
          q: "5x - 3 = 22, x = ?",
          o: ["4", "5", "6", "7"],
          c: 1,
          exp: "5x=25 → x=5",
        },
        {
          q: "2x + 3x = 25, x = ?",
          o: ["3", "4", "5", "6"],
          c: 2,
          exp: "5x=25 → x=5",
        },
        {
          q: "6x - 4 = 2x + 12, x = ?",
          o: ["2", "3", "4", "5"],
          c: 2,
          exp: "4x=16 → x=4",
        },
        {
          q: "x/3 + 2 = 7, x = ?",
          o: ["12", "13", "14", "15"],
          c: 3,
          exp: "x/3=5 → x=15",
        },
        {
          q: "2x/3 = 8, x = ?",
          o: ["10", "11", "12", "13"],
          c: 2,
          exp: "2x=24 → x=12",
        },
        {
          q: "7x - 2 = 5x + 10, x = ?",
          o: ["4", "5", "6", "7"],
          c: 2,
          exp: "2x=12 → x=6",
        },
        {
          q: "3(x+2)=21, x = ?",
          o: ["3", "4", "5", "6"],
          c: 2,
          exp: "3x+6=21 → 3x=15 → x=5",
        },
        {
          q: "10 - 2x = 4, x = ?",
          o: ["2", "3", "4", "5"],
          c: 1,
          exp: "-2x=-6 → x=3",
        },
        {
          q: "4(2x-1)=28, x = ?",
          o: ["3", "4", "5", "6"],
          c: 1,
          exp: "8x-4=28 → 8x=32 → x=4",
        },
      ];
    }

    function generateSoalSMP2() {
      return [
        {
          q: "Luas persegi s=8cm?",
          o: ["48", "56", "64", "72"],
          c: 2,
          exp: "L=8²=64 cm²",
        },
        {
          q: "Keliling persegi panjang 12×5?",
          o: ["30", "32", "34", "36"],
          c: 2,
          exp: "K=2(12+5)=34 cm",
        },
        {
          q: "Luas segitiga a=10, t=6?",
          o: ["25", "30", "35", "40"],
          c: 1,
          exp: "L=½×10×6=30 cm²",
        },
        {
          q: "Luas lingkaran r=7 (π=22/7)?",
          o: ["143", "150", "154", "160"],
          c: 2,
          exp: "L=22/7×7²=154 cm²",
        },
        {
          q: "Keliling lingkaran r=14 (π=22/7)?",
          o: ["66", "77", "88", "99"],
          c: 2,
          exp: "K=2×22/7×14=88 cm",
        },
        {
          q: "Volume kubus s=5?",
          o: ["100", "115", "125", "135"],
          c: 2,
          exp: "V=5³=125 cm³",
        },
        {
          q: "Luas permukaan balok 6×4×3?",
          o: ["88", "98", "108", "118"],
          c: 2,
          exp: "L=2(24+18+12)=108 cm²",
        },
        {
          q: "Luas trapesium a=8,b=12,t=5?",
          o: ["40", "45", "50", "55"],
          c: 2,
          exp: "L=½×(8+12)×5=50 cm²",
        },
        {
          q: "Keliling segitiga sisi 5,6,7?",
          o: ["16", "17", "18", "19"],
          c: 2,
          exp: "K=5+6+7=18 cm",
        },
        {
          q: "Luas belah ketupat d1=8,d2=6?",
          o: ["20", "22", "24", "26"],
          c: 2,
          exp: "L=½×8×6=24 cm²",
        },
      ];
    }

    function generateSoalSMP3() {
      return [
        {
          q: "Mean 5,7,8,6,9?",
          o: ["6", "7", "8", "9"],
          c: 1,
          exp: "(5+7+8+6+9)/5=35/5=7",
        },
        {
          q: "Median 3,4,5,5,6,7?",
          o: ["4", "5", "5.5", "6"],
          c: 1,
          exp: "Urutan: 3,4,5,5,6,7 → median=5",
        },
        {
          q: "Modus 2,3,3,4,4,4,5?",
          o: ["2", "3", "4", "5"],
          c: 2,
          exp: "Nilai terbanyak adalah 4",
        },
        {
          q: "Mean 10,12,14,16,18?",
          o: ["12", "13", "14", "15"],
          c: 2,
          exp: "(10+12+14+16+18)/5=70/5=14",
        },
        {
          q: "Modus 1,2,2,3,3,3,4,4?",
          o: ["1", "2", "3", "4"],
          c: 2,
          exp: "Nilai terbanyak adalah 3",
        },
        {
          q: "Median 5,6,7,8,9,10?",
          o: ["6.5", "7", "7.5", "8"],
          c: 2,
          exp: "Median=(7+8)/2=7.5",
        },
        {
          q: "Mean 2,4,6,8,10?",
          o: ["5", "6", "7", "8"],
          c: 1,
          exp: "(2+4+6+8+10)/5=30/5=6",
        },
        {
          q: "Median 12,15,11,18,14?",
          o: ["12", "13", "14", "15"],
          c: 2,
          exp: "Urutan:11,12,14,15,18 → median=14",
        },
      ];
    }

    function generateSoalSMP4() {
      return [
        {
          q: "x+y=7, x-y=1, x = ?",
          o: ["3", "4", "5", "6"],
          c: 1,
          exp: "2x=8 → x=4",
        },
        {
          q: "x+y=7, x-y=1, y = ?",
          o: ["2", "3", "4", "5"],
          c: 1,
          exp: "x=4, y=7-4=3",
        },
        {
          q: "2x+y=10, x+y=7, x = ?",
          o: ["2", "3", "4", "5"],
          c: 1,
          exp: "Kurangi: x=3",
        },
        {
          q: "2x+y=10, x+y=7, y = ?",
          o: ["3", "4", "5", "6"],
          c: 2,
          exp: "x=3, y=7-3=4",
        },
        {
          q: "x+2y=8, x=2, y = ?",
          o: ["2", "3", "4", "5"],
          c: 1,
          exp: "2+2y=8 → y=3",
        },
        {
          q: "3x+2y=16, x=4, y = ?",
          o: ["1", "2", "3", "4"],
          c: 1,
          exp: "12+2y=16 → y=2",
        },
        {
          q: "x-y=2, x+y=10, x = ?",
          o: ["4", "5", "6", "7"],
          c: 2,
          exp: "2x=12 → x=6",
        },
        {
          q: "x-y=2, x+y=10, y = ?",
          o: ["2", "3", "4", "5"],
          c: 2,
          exp: "x=6, y=6-2=4",
        },
      ];
    }

    function generateSoalSMP5() {
      return [
        { q: "2³ × 2² = ?", o: ["16", "24", "32", "64"], c: 2, exp: "2⁵=32" },
        { q: "3⁴ ÷ 3² = ?", o: ["3", "6", "9", "12"], c: 2, exp: "3²=9" },
        { q: "(2²)³ = ?", o: ["32", "48", "64", "72"], c: 2, exp: "2⁶=64" },
        { q: "√64 = ?", o: ["6", "7", "8", "9"], c: 2, exp: "8²=64" },
        { q: "√144 = ?", o: ["10", "11", "12", "13"], c: 2, exp: "12²=144" },
        { q: "5⁰ = ?", o: ["0", "1", "5", "10"], c: 1, exp: "a⁰=1" },
        {
          q: "2⁻² = ?",
          o: ["1/2", "1/4", "2", "4"],
          c: 1,
          exp: "2⁻²=1/2²=1/4",
        },
        { q: "√25 + √9 = ?", o: ["6", "7", "8", "9"], c: 2, exp: "5+3=8" },
        {
          q: "4² × 4⁻¹ = ?",
          o: ["2", "3", "4", "5"],
          c: 2,
          exp: "4²⁻¹=4¹=4",
        },
      ];
    }

    function generateSoalSMA1() {
      return [
        {
          q: "f(x)=2x+3, f(5)=?",
          o: ["10", "11", "12", "13"],
          c: 3,
          exp: "f(5)=2(5)+3=13",
        },
        {
          q: "f(x)=x²-4, f(3)=?",
          o: ["3", "4", "5", "6"],
          c: 2,
          exp: "f(3)=9-4=5",
        },
        {
          q: "f(g(2)) f=3x-2, g=x+1?",
          o: ["5", "6", "7", "8"],
          c: 2,
          exp: "g(2)=3, f(3)=7",
        },
        {
          q: "lim x→2 (x²+3x-2)=?",
          o: ["6", "7", "8", "9"],
          c: 2,
          exp: "4+6-2=8",
        },
        {
          q: "lim x→1 (x²-1)/(x-1)=?",
          o: ["0", "1", "2", "3"],
          c: 2,
          exp: "(x²-1)/(x-1)=x+1, limit=2",
        },
        {
          q: "f(x)=x³-2x, f(-1)=?",
          o: ["0", "1", "2", "3"],
          c: 1,
          exp: "(-1)³-2(-1)=-1+2=1",
        },
        {
          q: "lim x→3 (x²-9)/(x-3)=?",
          o: ["4", "5", "6", "7"],
          c: 2,
          exp: "(x-3)(x+3)/(x-3)=x+3, limit=6",
        },
        {
          q: "f(x)=5x-1, f(4)=?",
          o: ["17", "18", "19", "20"],
          c: 2,
          exp: "f(4)=20-1=19",
        },
      ];
    }

    function generateSoalSMA2() {
      return [
        {
          q: "sin 30° = ?",
          o: ["0", "1/2", "1/√2", "√3/2"],
          c: 1,
          exp: "sin 30°=1/2",
        },
        {
          q: "cos 60° = ?",
          o: ["0", "1/2", "1/√2", "√3/2"],
          c: 1,
          exp: "cos 60°=1/2",
        },
        {
          q: "tan 45° = ?",
          o: ["0", "1/2", "1", "√3"],
          c: 2,
          exp: "tan 45°=1",
        },
        {
          q: "sin θ=3/5, cos θ=?",
          o: ["2/5", "3/5", "4/5", "5/4"],
          c: 2,
          exp: "cos²θ=1-(3/5)²=16/25, cosθ=4/5",
        },
        {
          q: "sin 45° = ?",
          o: ["0", "1/2", "1/√2", "√3/2"],
          c: 2,
          exp: "sin 45°=1/√2",
        },
        {
          q: "cos 30° = ?",
          o: ["0", "1/2", "1/√2", "√3/2"],
          c: 3,
          exp: "cos 30°=√3/2",
        },
        {
          q: "sin 90° = ?",
          o: ["0", "1/2", "1", "√3/2"],
          c: 2,
          exp: "sin 90°=1",
        },
        {
          q: "cos 0° = ?",
          o: ["0", "1/2", "1", "√3/2"],
          c: 2,
          exp: "cos 0°=1",
        },
        {
          q: "tan 30° = ?",
          o: ["1/√3", "1/2", "1", "√3"],
          c: 0,
          exp: "tan 30°=1/√3",
        },
      ];
    }

    function generateSoalSMA3() {
      return [
        {
          q: "<span style='display:inline-flex;align-items:center;gap:6px;'>det <span style='display:inline-flex;align-items:center;'><span style='font-size:2rem;font-weight:300;line-height:1;transform:translateY(-2px);'>(</span><span style='display:inline-grid;grid-template-columns:1fr 1fr;gap:0 10px;text-align:center;padding:0 4px;font-size:0.9rem;'><span>1</span><span>2</span><span>3</span><span>4</span></span><span style='font-size:2rem;font-weight:300;line-height:1;transform:translateY(-2px);'>)</span></span> = ?</span>",
          o: ["-2", "2", "-1", "1"],
          c: 0,
          exp: "det=1×4-2×3=-2",
        },
        {
          q: "A=[[1,2],[3,4]], A+A = ?",
          o: [
            "[[2,4],[6,8]]",
            "[[2,3],[4,5]]",
            "[[1,2],[3,4]]",
            "[[0,0],[0,0]]",
          ],
          c: 0,
          exp: "A+A=[[2,4],[6,8]]",
        },
        {
          q: "A=[[1,2],[3,4]], 2A = ?",
          o: [
            "[[1,2],[3,4]]",
            "[[2,4],[6,8]]",
            "[[3,6],[9,12]]",
            "[[0,0],[0,0]]",
          ],
          c: 1,
          exp: "2A=[[2,4],[6,8]]",
        },
        {
          q: "[[1,0],[0,1]] disebut?",
          o: [
            "Matriks Nol",
            "Matriks Identitas",
            "Matriks Diagonal",
            "Matriks Segitiga",
          ],
          c: 1,
          exp: "Matriks identitas 2×2",
        },
        {
          q: "<span style='display:inline-flex;align-items:center;gap:6px;'>det <span style='display:inline-flex;align-items:center;'><span style='font-size:2rem;font-weight:300;line-height:1;transform:translateY(-2px);'>(</span><span style='display:inline-grid;grid-template-columns:1fr 1fr;gap:0 10px;text-align:center;padding:0 4px;font-size:0.9rem;'><span>2</span><span>1</span><span>4</span><span>3</span></span><span style='font-size:2rem;font-weight:300;line-height:1;transform:translateY(-2px);'>)</span></span> = ?</span>",
          o: ["1", "2", "3", "4"],
          c: 1,
          exp: "det=2×3-1×4=2",
        },
        {
          q: "A+B [[1,2],[3,4]]+[[5,6],[7,8]]",
          o: [
            "[[6,8],[10,12]]",
            "[[5,12],[21,32]]",
            "[[6,8],[8,10]]",
            "[[4,6],[8,10]]",
          ],
          c: 0,
          exp: "A+B=[[6,8],[10,12]]",
        },
        {
          q: "<span style='display:inline-flex;align-items:center;gap:6px;'>det <span style='display:inline-flex;align-items:center;'><span style='font-size:2rem;font-weight:300;line-height:1;transform:translateY(-2px);'>(</span><span style='display:inline-grid;grid-template-columns:1fr 1fr;gap:0 10px;text-align:center;padding:0 4px;font-size:0.9rem;'><span>5</span><span>2</span><span>3</span><span>1</span></span><span style='font-size:2rem;font-weight:300;line-height:1;transform:translateY(-2px);'>)</span></span> = ?</span>",
          o: ["-1", "0", "1", "2"],
          c: 0,
          exp: "det=5×1-2×3=-1",
        },
      ];
    }

    function generateSoalSMA4() {
      return [
        {
          q: "Barisan 2,5,8,11,... U6 = ?",
          o: ["15", "16", "17", "18"],
          c: 2,
          exp: "a=2,b=3, U6=2+5×3=17",
        },
        {
          q: "Barisan 3,7,11,... beda = ?",
          o: ["2", "3", "4", "5"],
          c: 2,
          exp: "b=7-3=4",
        },
        {
          q: "Barisan geometri 2,6,18,... rasio = ?",
          o: ["2", "3", "4", "6"],
          c: 1,
          exp: "r=6/2=3",
        },
        {
          q: "Barisan geometri 3,6,12,... U5 = ?",
          o: ["36", "42", "48", "54"],
          c: 2,
          exp: "a=3,r=2, U5=3×2⁴=48",
        },
        {
          q: "Barisan aritmetika a=5,b=2, U10 = ?",
          o: ["21", "22", "23", "24"],
          c: 2,
          exp: "U10=5+9×2=23",
        },
        {
          q: "Deret 1+2+3+...+10 = ?",
          o: ["45", "50", "55", "60"],
          c: 2,
          exp: "Sn=n(n+1)/2=10×11/2=55",
        },
        {
          q: "Barisan 10,7,4,... U8 = ?",
          o: ["-9", "-11", "-13", "-15"],
          c: 1,
          exp: "a=10,b=-3, U8=10+7×(-3)=-11",
        },
        {
          q: "Barisan geometri a=4,r=2, U4 = ?",
          o: ["28", "30", "32", "34"],
          c: 2,
          exp: "U4=4×2³=32",
        },
      ];
    }

    function generateSoalSMA5() {
      return [
        {
          q: "Peluang dadu muncul angka genap?",
          o: ["1/6", "1/3", "1/2", "2/3"],
          c: 2,
          exp: "n(A)=3{2,4,6}, n(S)=6, P=1/2",
        },
        {
          q: "Peluang koin muncul angka?",
          o: ["1/4", "1/3", "1/2", "1"],
          c: 2,
          exp: "n(A)=1, n(S)=2, P=1/2",
        },
        {
          q: "Peluang dadu muncul angka 5?",
          o: ["1/6", "1/5", "1/4", "1/3"],
          c: 0,
          exp: "n(A)=1, n(S)=6, P=1/6",
        },
        {
          q: "Kotak isi 4 merah 6 biru, peluang ambil merah?",
          o: ["1/5", "2/5", "3/5", "4/5"],
          c: 1,
          exp: "n(A)=4, n(S)=10, P=4/10=2/5",
        },
        {
          q: "Peluang dadu muncul angka >4?",
          o: ["1/6", "1/3", "1/2", "2/3"],
          c: 1,
          exp: "n(A)=2{5,6}, n(S)=6, P=1/3",
        },
        {
          q: "2 dadu dilempar, peluang jumlah=7?",
          o: ["1/6", "5/36", "1/9", "1/4"],
          c: 0,
          exp: "n(A)=6 kombinasi, n(S)=36, P=6/36=1/6",
        },
        {
          q: "Kartu 52, peluang terambil As?",
          o: ["1/52", "1/26", "1/13", "1/4"],
          c: 2,
          exp: "n(A)=4, n(S)=52, P=4/52=1/13",
        },
      ];
    }

    const SOAL_MAP = {
      sd1: generateSoalSD1,
      sd2: generateSoalSD2,
      sd3: generateSoalSD3,
      sd4: generateSoalSD4,
      sd5: generateSoalSD5,
      smp1: generateSoalSMP1,
      smp2: generateSoalSMP2,
      smp3: generateSoalSMP3,
      smp4: generateSoalSMP4,
      smp5: generateSoalSMP5,
      sma1: generateSoalSMA1,
      sma2: generateSoalSMA2,
      sma3: generateSoalSMA3,
      sma4: generateSoalSMA4,
      sma5: generateSoalSMA5,
    };

    function getSoalForMaterial(materialId) {
      if (SOAL_MAP[materialId]) return SOAL_MAP[materialId]();
      return [];
    }

    function getAllSoalPool() {
      let all = [];
      Object.keys(SOAL_MAP).forEach((key) => {
        all = all.concat(SOAL_MAP[key]());
      });
      return all;
    }

    // ================================================================
    // 3. STATE
    // ================================================================

    const SAVE_KEY = "mathquest-save-v1";

    let state = {
      name: "DEKA",
      level: 1,
      exp: 80,
      coins: 40,
      diamonds: 2,
      avatar: "🧑‍🚀",
      customAvatars: [],
      streak: 7,
      soalTerjawab: 0,
      soalBenar: 0,
      unlockedAchievements: [],
      unlockedAvatars: ["🧑‍🚀"],
      visitedMaterials: [],
      ownedItems: [],
      equippedFrame: null,
      equippedTheme: null,
      kelas: "sd",
      materialId: "sd1",
      bossHP: 100,
      bossDefeated: false,
      bossesDefeatedCount: 0,
      comboCount: 0,
      maxCombo: 0,
      quizIndex: 0,
      quizAnswered: false,
      quizCorrect: 0,
      quizWrong: 0,
      isOnboarded: false,
      shopTab: "frame",
      monstersDefeatedCount: 0,
    };

    // --- FIREBASE SETUP ---
    const firebaseConfig = {
      apiKey: "AIzaSyC0p6ODF6H5NZjUHwvjkImPdpTXjsr2FV0",
      authDomain: "mathquestt-app.firebaseapp.com",
      projectId: "mathquestt-app",
      storageBucket: "mathquestt-app.firebasestorage.app",
      messagingSenderId: "551120109896",
      appId: "1:551120109896:web:ac37d64a95cfc32871f37d",
      measurementId: "G-J3JXWK48YK"
    };

    let auth, db, currentUser = null;

    // Firebase akan diinisialisasi di dalam init() setelah module selesai loading

    async function loadStateFromLocalStorage() {
      try {
        // If logged in, fetch from Firestore
        if (currentUser && db) {
          const docRef = window.firebaseModules.doc(db, "users", currentUser.uid);
          const docSnap = await window.firebaseModules.getDoc(docRef);
          if (docSnap.exists()) {
            return docSnap.data().state;
          }
        }

        // Fallback to local storage
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch (error) {
        console.warn("Gagal memuat save state:", error);
        return null;
      }
    }

    let saveTimeout = null;
    function persistStateToLocalStorage() {
      try {
        const snapshot = JSON.stringify(state);
        localStorage.setItem(SAVE_KEY, snapshot);

        // Sync to Firestore if logged in (Debounced)
        if (currentUser && db) {
          clearTimeout(saveTimeout);
          saveTimeout = setTimeout(async () => {
            try {
              await window.firebaseModules.setDoc(window.firebaseModules.doc(db, "users", currentUser.uid), {
                state: state,
                lastUpdated: new Date()
              }, { merge: true });
            } catch (e) {
              console.error("Failed to sync to cloud:", e);
            }
          }, 2000);
        }
      } catch (error) {
        console.warn("Gagal menyimpan save state:", error);
      }
    }

    // ================================================================
    // 4. DOM REFS
    // ================================================================

    const $ = (s) => document.querySelector(s);
    const $$ = (s) => document.querySelectorAll(s);

    const dom = {
      onboardingOverlay: $("#onboardingOverlay"),
      onboardingAvatarPreview: $("#onboardingAvatarPreview"),
      onboardingSkipBtn: $("#onboardingSkipBtn"),
      authEmail: $("#authEmail"),
      authPassword: $("#authPassword"),
      authLoginBtn: $("#authLoginBtn"),
      authRegisterBtn: $("#authRegisterBtn"),
      authGoogleBtn: $("#authGoogleBtn"),
      userProfileMenu: $("#userProfileMenu"),
      userNameDisplay: $("#userNameDisplay"),
      logoutBtn: $("#logoutBtn"),
      navLoginCta: $("#navLoginCta"),

      gameToast: $("#gameToast"),
      gameToastIcon: $("#gameToastIcon"),
      gameToastTitle: $("#gameToastTitle"),
      gameToastText: $("#gameToastText"),

      heroLevel: $("#heroLevel"),
      heroExp: $("#heroExp"),
      heroCoin: $("#heroCoin"),
      heroDiamond: $("#heroDiamond"),
      heroSoal: $("#heroSoal"),
      heroAvatar: $("#heroAvatarDisplay"),

      navCoin: $("#navCoin"),
      navDiamond: $("#navDiamond"),

      hudCard: $("#hudCard"),
      hudAvatar: $("#hudAvatar"),
      hudName: $("#hudName"),
      hudLevel: $("#hudLevel"),
      hudTitle: $("#hudTitle"),
      hudExpFill: $("#hudExpFill"),
      hudExpLabel: $("#hudExpLabel"),
      hudStreak: $("#hudStreak"),
      hudCoin: $("#hudCoin"),
      hudDiamond: $("#hudDiamond"),

      classBtns: $$(".class-btn"),
      materialGrid: $("#materialGrid"),
      startMateriBtn: $("#startMateriBtn"),
      startQuizBtn: $("#startQuizBtn"),

      materiTitle: $("#materiTitle"),
      materiSub: $("#materiSub"),
      materiContent: $("#materiContent"),

      latihanTitle: $("#latihanTitle"),
      latihanSub: $("#latihanSub"),
      quizTag: $("#quizTag"),
      quizScore: $("#quizScore"),
      quizCombo: $("#quizCombo"),
      quizProgress: $("#quizProgress"),
      quizQNum: $("#quizQNum"),
      quizQuestion: $("#quizQuestion"),
      quizOptions: $("#quizOptions"),
      quizFeedback: $("#quizFeedback"),
      quizNextBtn: $("#quizNextBtn"),
      quizResult: $("#quizResult"),
      quizResultText: $("#quizResultText"),
      quizResetBtn: $("#quizResetBtn"),

      bossEmoji: $("#bossEmoji"),
      bossName: $("#bossName"),
      bossSub: $("#bossSub"),
      bossHpFill: $("#bossHpFill"),
      bossHpPct: $("#bossHpPct"),
      bossNote: $("#bossNote"),
      bossAttackBtn: $("#bossAttackBtn"),

      shopCoin: $("#shopCoin"),
      shopDiamond: $("#shopDiamond"),
      shopTabs: $("#shopTabs"),
      shopGrid: $("#shopGrid"),

      achGrid: $("#achGrid"),
      achToast: $("#achToast"),
      achToastName: $("#achToastName"),

      profileAvatar: $("#profileAvatar"),
      profileName: $("#profileName"),
      profileTitle: $("#profileTitle"),
      pExp: $("#pExp"),
      pCoin: $("#pCoin"),
      pDiamond: $("#pDiamond"),
      pSoal: $("#pSoal"),
      pBenar: $("#pBenar"),
      pAch: $("#pAch"),
      pLevel: $("#pLevel"),
      pAvatarCount: $("#pAvatarCount"),
      pItems: $("#pItems"),

      avatarModal: $("#avatarModal"),
      avatarGrid: $("#avatarGrid"),
      customAvatarInput: $("#customAvatarInput"),
      customAvatarPreview: $("#customAvatarPreview"),
      addCustomAvatarBtn: $("#addCustomAvatarBtn"),
      avatarCloseBtn: $("#avatarCloseBtn"),

      levelModal: $("#levelModal"),
      levelModalLevel: $("#levelModalLevel"),
      levelModalTitle: $("#levelModalTitle"),
      levelModalRewards: $("#levelModalRewards"),
      levelModalClose: $("#levelModalClose"),
    };

    // ================================================================
    // 5. CORE FUNCTIONS
    // ================================================================

    function getLevelData(level) {
      return LEVEL_DATA.find((l) => l.level === level) || LEVEL_DATA[0];
    }

    function getCurrentMateriData() {
      const kelasData = MATERI_DATA[state.kelas] || {};
      return kelasData[state.materialId] || null;
    }

    function getMateriPdfUrl(materialId) {
      const data =
        (MATERI_DATA[state.kelas] && MATERI_DATA[state.kelas][materialId]) ||
        {};
      const rawUrl = data.pdf || `pdfs/${state.kelas}/${materialId}.pdf`;
      return encodeURI(rawUrl);
    }

    function openMateriPdf() {
      const data = getCurrentMateriData();
      if (!data) return false;
      const pdfUrl = getMateriPdfUrl(state.materialId);
      if (!pdfUrl || pdfUrl === "#") {
        showGameToast({
          icon: "📄",
          title: "PDF",
          message: "PDF belum tersedia untuk materi ini.",
          tone: "warning",
        });
        return false;
      }
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
      return true;
    }

    function getMateriList() {
      return Object.keys(MATERI_DATA[state.kelas] || {}).map((id) => ({
        id: id,
        ...MATERI_DATA[state.kelas][id],
      }));
    }

    function getTotalExpForLevel(level) {
      let total = 0;
      for (let i = 1; i <= level; i++) total += getLevelData(i).expNeeded;
      return total;
    }

    function getExpProgress() {
      const data = getLevelData(state.level);
      if (!data) return 0;
      const prevExp =
        state.level > 1 ? getTotalExpForLevel(state.level - 1) : 0;
      const currentExp = getTotalExpForLevel(state.level);
      const expInLevel = state.exp - prevExp;
      const needed = currentExp - prevExp;
      return Math.min(100, (expInLevel / needed) * 100);
    }

    function getUnlockedAvatars() {
      const unlocked = [...state.unlockedAvatars];
      state.customAvatars.forEach((a) => {
        if (!unlocked.includes(a)) unlocked.push(a);
      });
      return unlocked;
    }

    function getAvatarCount() {
      return getUnlockedAvatars().length;
    }

    function isAvatarUnlocked(avatar) {
      if (state.customAvatars.includes(avatar)) return true;
      const data = AVATAR_DATA.find((a) => a.emoji === avatar);
      if (!data) return false;
      return state.level >= data.levelReq;
    }

    function addExp(amount) {
      state.exp += amount;
      updateUI();
      let leveled = false;
      while (true) {
        const nextData = getLevelData(state.level + 1);
        if (!nextData) break;
        const totalNeeded = getTotalExpForLevel(state.level + 1);
        if (state.exp >= totalNeeded) {
          state.level++;
          const newAvatars = AVATAR_DATA.filter(
            (a) => a.levelReq === state.level,
          );
          newAvatars.forEach((a) => {
            if (!state.unlockedAvatars.includes(a.emoji))
              state.unlockedAvatars.push(a.emoji);
          });
          state.diamonds += 1;
          showLevelUpModal(state.level);
          leveled = true;
          checkAchievement(5, state.level >= 10);
          checkAchievement(6, getAvatarCount() >= 5);
        } else break;
      }
      updateUI();
      return leveled;
    }

    function addCoins(amount, sourceEl) {
      state.coins += amount;
      if (sourceEl) spawnCoinPop(sourceEl, `+${amount} 🪙`);
      checkAchievement(9, state.coins >= 500);
      updateUI();
    }

    function addDiamonds(amount) {
      state.diamonds += amount;
      checkAchievement(10, state.diamonds >= 10);
      updateUI();
    }

    function getActiveSiteTheme() {
      const frameThemes = {
        "frame-perunggu": "ember",
        "frame-perak": "steel",
        "frame-emas": "royal",
        "frame-pelangi": "cyber",
      };

      if (state.equippedFrame && frameThemes[state.equippedFrame]) {
        return frameThemes[state.equippedFrame];
      }

      if (state.equippedTheme) return state.equippedTheme;
      return "default";
    }

    function applySiteTheme() {
      const panelTheme = getActiveSiteTheme();
      document.body.setAttribute("data-site-theme", panelTheme);
    }

    function spawnCoinPop(refEl, text) {
      try {
        const rect = refEl.getBoundingClientRect();
        const p = document.createElement("div");
        p.className = "coin-pop";
        p.textContent = text;
        p.style.left = rect.left + rect.width / 2 - 20 + "px";
        p.style.top = rect.top + "px";
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1200);
      } catch (e) { }
    }

    function checkAchievement(id, condition) {
      if (!condition) return;
      if (state.unlockedAchievements.includes(id)) return;
      state.unlockedAchievements.push(id);
      const ach = ACHIEVEMENTS.find((a) => a.id === id);
      if (ach && ach.coinReward) state.coins += ach.coinReward;
      showAchToast(ach);
      renderAchievements();
    }

    function showAchToast(ach) {
      if (!ach) return;
      dom.achToastName.textContent = `${ach.icon} ${ach.name}${ach.coinReward ? " (+" + ach.coinReward + " koin)" : ""}`;
      dom.achToast.classList.add("show");
      setTimeout(() => dom.achToast.classList.remove("show"), 2800);
    }

    function showGameToast({
      icon = "✨",
      title = "NOTIFIKASI",
      message = "",
      tone = "success",
    } = {}) {
      if (!dom.gameToast) return;
      dom.gameToastIcon.textContent = icon;
      dom.gameToastTitle.textContent = title;
      dom.gameToastText.textContent = message;
      dom.gameToast.dataset.tone = tone;
      dom.gameToast.classList.add("show");
      clearTimeout(showGameToast._timer);
      showGameToast._timer = setTimeout(() => {
        dom.gameToast.classList.remove("show");
      }, 2600);
    }

    window.alert = function (message) {
      showGameToast({
        icon: "✨",
        title: "NOTIFIKASI",
        message: String(message),
        tone: "info",
      });
    };

    // ================================================================
    // 6. ONBOARDING
    // ================================================================

    function startOnboarding() {
      // Modal selalu tampil jika Firebase dikonfigurasi (onAuthStateChanged yang menutupnya)
      // Hanya sembunyikan jika Firebase sama sekali tidak dikonfigurasi DAN sudah onboarded
      const firebaseConfigured = window.firebaseModules && firebaseConfig.apiKey !== "REPLACE_WITH_API_KEY";
      if (!firebaseConfigured && state.isOnboarded) {
        dom.onboardingOverlay.classList.add("hidden");
      }
      // Jika Firebase dikonfigurasi: biarkan onAuthStateChanged yang mengatur modal

      if (window.firebaseModules && auth) {
        dom.authGoogleBtn.addEventListener("click", async () => {
          try {
            const provider = new window.firebaseModules.GoogleAuthProvider();
            const result = await window.firebaseModules.signInWithPopup(auth, provider);
            completeOnboarding(result.user.displayName || "Pemain");
          } catch (e) {
            alert("Google Login Error: " + e.message);
          }
        });

        dom.authRegisterBtn.addEventListener("click", async () => {
          const email = dom.authEmail.value.trim();
          const pass = dom.authPassword.value.trim();
          if (!email || !pass) return showGameToast({ icon: "⚠️", title: "PERHATIAN", message: "Email & Password wajib diisi!", tone: "warning" });
          if (pass.length < 6) return showGameToast({ icon: "⚠️", title: "PASSWORD LEMAH", message: "Password minimal 6 karakter!", tone: "warning" });

          const btn = dom.authRegisterBtn;
          btn.disabled = true;
          btn.textContent = "Mendaftar...";
          try {
            await window.firebaseModules.createUserWithEmailAndPassword(auth, email, pass);
            // Setelah daftar: logout dulu, minta user login manual
            await window.firebaseModules.signOut(auth);
            dom.authEmail.value = "";
            dom.authPassword.value = "";
            showGameToast({ icon: "✅", title: "DAFTAR BERHASIL!", message: "Akun berhasil dibuat! Silakan Login sekarang dengan email & password kamu.", tone: "success" });
          } catch (e) {
            const msg = e.code === "auth/email-already-in-use" ? "Email sudah terdaftar! Silakan Login." :
              e.code === "auth/invalid-email" ? "Format email tidak valid!" :
                "Gagal mendaftar: " + e.message;
            showGameToast({ icon: "❌", title: "GAGAL DAFTAR", message: msg, tone: "warning" });
          } finally {
            btn.disabled = false;
            btn.innerHTML = "📝 Daftar";
          }
        });

        dom.authLoginBtn.addEventListener("click", async () => {
          const email = dom.authEmail.value.trim();
          const pass = dom.authPassword.value.trim();
          if (!email || !pass) return showGameToast({ icon: "⚠️", title: "PERHATIAN", message: "Email & Password wajib diisi!", tone: "warning" });

          const btn = dom.authLoginBtn;
          btn.disabled = true;
          btn.textContent = "Masuk...";
          try {
            await window.firebaseModules.signInWithEmailAndPassword(auth, email, pass);
            // onAuthStateChanged akan handle sisanya
          } catch (e) {
            const msg = e.code === "auth/user-not-found" ? "Akun tidak ditemukan! Silakan Daftar terlebih dahulu." :
              e.code === "auth/wrong-password" || e.code === "auth/invalid-credential" ? "Password salah! Coba lagi." :
                e.code === "auth/invalid-email" ? "Format email tidak valid!" :
                  e.code === "auth/too-many-requests" ? "Terlalu banyak percobaan. Coba lagi nanti." :
                    "Gagal login: " + e.message;
            showGameToast({ icon: "❌", title: "GAGAL LOGIN", message: msg, tone: "warning" });
          } finally {
            btn.disabled = false;
            btn.innerHTML = "🔑 Login";
          }
        });

        dom.authGoogleBtn.addEventListener("click", async () => {
          // Cek apakah dibuka via file:// (tidak support Google Auth)
          if (window.location.protocol === "file:") {
            showGameToast({ icon: "⚠️", title: "PERLU LIVE SERVER", message: "Sign in with Google hanya bisa dipakai lewat Live Server (http://). Buka via VS Code > klik kanan > Open with Live Server!", tone: "warning" });
            return;
          }
          try {
            const provider = new window.firebaseModules.GoogleAuthProvider();
            await window.firebaseModules.signInWithPopup(auth, provider);
            // onAuthStateChanged akan handle sisanya
          } catch (e) {
            const msg = e.code === "auth/popup-closed-by-user" ? "Login dibatalkan." :
              e.code === "auth/unauthorized-domain" ? "Domain tidak diizinkan. Gunakan Live Server!" :
                "Google Login Error: " + e.message;
            showGameToast({ icon: "❌", title: "GAGAL LOGIN GOOGLE", message: msg, tone: "warning" });
          }
        });

        dom.logoutBtn.addEventListener("click", () => {
          window.firebaseModules.signOut(auth);
          location.reload();
        });

        dom.navLoginCta.addEventListener("click", () => {
          dom.onboardingOverlay.classList.remove("hidden");
        });
      }

      dom.onboardingSkipBtn.addEventListener("click", function () {
        completeOnboarding("Pemain");
      });
    }

    function completeOnboarding(name) {
      state.name = name;
      state.isOnboarded = true;
      dom.onboardingOverlay.classList.add("hidden");
      updateUI();
      setTimeout(() => {
        showGameToast({
          icon: "🎉",
          title: "SELAMAT DATANG",
          message: `Halo ${name}! Mulai petualangan matematikamu, kumpulkan koin & diamond, lalu belanja di Toko!`,
          tone: "success",
        });
      }, 450);
    }

    function showWelcomeToast(name = state.name || "Pemain") {
      showGameToast({
        icon: "🚀",
        title: "QUEST READY",
        message: `Halo ${name}! Quest matematika kamu sudah siap dimulai.`,
        tone: "success",
      });
    }

    // ================================================================
    // 7. UPDATE UI
    // ================================================================

    function updateUI() {
      applySiteTheme();
      persistStateToLocalStorage();

      const data = getLevelData(state.level);
      const totalExp = getTotalExpForLevel(state.level);
      const progress = getExpProgress();
      const avatarCount = getAvatarCount();
      const unlockedAvatars = getUnlockedAvatars();

      // Pastikan avatar yang dipakai sudah terbuka
      if (!isAvatarUnlocked(state.avatar)) {
        if (unlockedAvatars.length > 0) {
          state.avatar = unlockedAvatars[0];
        } else {
          state.avatar = "🧑‍🚀";
        }
      }

      // Hero
      dom.heroLevel.textContent = state.level;
      dom.heroExp.textContent = state.exp;
      dom.heroCoin.textContent = `🪙${state.coins}`;
      dom.heroDiamond.textContent = `💎${state.diamonds}`;
      dom.heroSoal.textContent = state.soalTerjawab;
      dom.heroAvatar.textContent = state.avatar;

      // Nav wallet
      dom.navCoin.textContent = state.coins;
      dom.navDiamond.textContent = state.diamonds;

      // HUD
      dom.hudAvatar.textContent = state.avatar;
      dom.hudAvatar.className =
        "hud-avatar" + (state.equippedFrame ? " " + state.equippedFrame : "");
      dom.hudName.textContent = state.name;
      dom.hudLevel.textContent = `LEVEL ${String(state.level).padStart(2, "0")}`;
      dom.hudTitle.textContent = data ? data.title : "Number Novice";
      dom.hudExpFill.style.width = `${progress}%`;
      dom.hudExpLabel.textContent = `${state.exp} / ${totalExp} EXP`;
      dom.hudStreak.textContent = state.streak;
      dom.hudCoin.textContent = state.coins;
      dom.hudDiamond.textContent = state.diamonds;
      if (state.equippedTheme)
        dom.hudCard.setAttribute("data-theme", state.equippedTheme);
      else dom.hudCard.removeAttribute("data-theme");

      // Profile
      dom.profileAvatar.textContent = state.avatar;
      dom.profileAvatar.className =
        "profile-avatar" +
        (state.equippedFrame ? " " + state.equippedFrame : "");
      dom.profileName.textContent = state.name;
      dom.profileTitle.textContent = `LEVEL ${String(state.level).padStart(2, "0")} · ${data ? data.title : "Number Novice"}`;
      dom.pExp.textContent = `⚡ ${state.exp}`;
      dom.pCoin.textContent = `🪙 ${state.coins}`;
      dom.pDiamond.textContent = `💎 ${state.diamonds}`;
      dom.pSoal.textContent = `🎯 ${state.soalTerjawab}`;
      dom.pBenar.textContent = `✅ ${state.soalBenar}`;
      dom.pAch.textContent = `🏆 ${state.unlockedAchievements.length}`;
      dom.pLevel.textContent = `📈 ${state.level}`;
      dom.pAvatarCount.textContent = `👤 ${avatarCount}`;
      dom.pItems.textContent = `🎒 ${state.ownedItems.length}`;

      // Shop wallet
      dom.shopCoin.textContent = state.coins;
      dom.shopDiamond.textContent = state.diamonds;

      // Quiz score
      dom.quizScore.textContent = `Benar: ${state.quizCorrect} | Salah: ${state.quizWrong}`;
      if (state.comboCount >= 2) {
        dom.quizCombo.style.display = "inline-block";
        dom.quizCombo.textContent = `🔥 Combo x${state.comboCount}`;
      } else {
        dom.quizCombo.style.display = "none";
      }

      // Boss
      dom.bossHpFill.style.width = `${state.bossHP}%`;
      dom.bossHpPct.textContent = `${state.bossHP}%`;

      const bossNames = [
        "Number Goblin",
        "Fraction Fiend",
        "Decimal Demon",
        "Equation Wraith",
        "Angle Assassin",
        "Polynomial Predator",
        "Sine Shadow",
        "Log Lich",
        "Matrix Overlord",
        "Derivative Dragon",
        "Integral Titan",
        "Randomness Reaper",
        "Data Devourer",
        "Algebra Archmage",
        "Final Boss",
      ];
      const bossIdx = Math.min(state.level - 1, bossNames.length - 1);
      dom.bossName.textContent = bossNames[bossIdx] || "Final Boss";
      dom.bossSub.textContent = `"Defeat the ${bossNames[bossIdx] || "Final Boss"}!"`;
      dom.bossEmoji.textContent = state.bossHP <= 0 ? "💀" : "👾";

      renderAchievements();
      renderMaterials();
      renderAvatarGrid();
      renderShop();
      if (typeof renderMonsterGrid === "function") renderMonsterGrid();
      if (typeof updateBattleWalletDisplays === "function")
        updateBattleWalletDisplays();

      // Preview avatar hanya diperbarui jika elemennya tersedia.
      if (!state.isOnboarded && dom.onboardingAvatarPreview) {
        dom.onboardingAvatarPreview.textContent = state.avatar;
      }
    }

    // ================================================================
    // 8. RENDER FUNCTIONS
    // ================================================================

    function renderMaterials() {
      const materials = getMateriList();
      let html = "";
      materials.forEach((m) => {
        const active = m.id === state.materialId ? "active" : "";
        const badge =
          state.kelas === "sd"
            ? "badge-sd"
            : state.kelas === "smp"
              ? "badge-smp"
              : "badge-sma";
        const label =
          state.kelas === "sd" ? "SD" : state.kelas === "smp" ? "SMP" : "SMA";
        const soalCount = getSoalForMaterial(m.id).length;
        const visited = state.visitedMaterials.includes(m.id) ? " ✓" : "";
        html += `
                    <div class="material-card ${active}" data-id="${m.id}">
                        <div class="icon">${m.icon}</div>
                        <h4>${m.name}${visited}</h4>
                        <p>${m.desc}</p>
                        <span class="badge ${badge}">${label}</span>
                        <p style="font-size:.7rem;color:var(--purple);margin-top:6px;">${soalCount} soal</p>
                    </div>
                `;
      });
      dom.materialGrid.innerHTML = html;

      dom.materialGrid.querySelectorAll(".material-card").forEach((el) => {
        el.addEventListener("click", function () {
          state.materialId = this.dataset.id;
          renderMaterials();
          loadMateri();
          openMateriPdf();
          resetQuiz();
        });
      });
    }

    function loadMateri() {
      const data = getCurrentMateriData();
      if (!data) {
        dom.materiTitle.textContent = "Materi tidak ditemukan";
        dom.materiSub.textContent = "Silakan pilih materi lain.";
        dom.materiContent.innerHTML = `<div class="text-center" style="padding:40px 20px;color:var(--ink-soft);"><div style="font-size:3rem;margin-bottom:16px;">📚</div><h3 style="font-family:'Baloo 2',sans-serif;font-size:1.4rem;">Materi tidak tersedia</h3><p>Silakan pilih materi yang lain.</p></div>`;
        return;
      }

      const pdfUrl = getMateriPdfUrl(state.materialId);
      dom.materiTitle.textContent = `${data.icon} ${data.name}`;
      dom.materiSub.textContent = data.desc;
      dom.materiContent.innerHTML = `
                <div class="materi-header"><div class="icon">${data.icon}</div><h2>${data.name}</h2></div>
                <div class="materi-body">
                    <div class="tip" style="display:flex;flex-direction:column;gap:12px;align-items:flex-start;">
                        <strong>📄 Materi versi PDF</strong>
                        <p style="margin:0;">Klik tombol di bawah untuk membuka atau mengunduh file PDF materi ini.</p>
                        <div style="display:flex;flex-wrap:wrap;gap:12px;">
                            <a class="btn-primary" href="${pdfUrl}" target="_blank" rel="noopener noreferrer" download>⬇️ Download PDF</a>
                            <a class="btn-secondary" href="${pdfUrl}" target="_blank" rel="noopener noreferrer">📖 Buka PDF</a>
                        </div>
                    </div>
                    ${data.content}
                </div>
            `;

      dom.latihanTitle.textContent = `Soal Latihan - ${data.name}`;
      dom.latihanSub.textContent = `Kerjakan soal tentang ${data.name} untuk mendapatkan EXP dan koin!`;
      dom.quizTag.textContent = `📝 ${data.name}`;

      if (!state.visitedMaterials.includes(state.materialId)) {
        state.visitedMaterials.push(state.materialId);
        checkAchievement(7, state.visitedMaterials.length >= 5);
        const hasSD = state.visitedMaterials.some((id) =>
          id.startsWith("sd"),
        );
        const hasSMP = state.visitedMaterials.some((id) =>
          id.startsWith("smp"),
        );
        const hasSMA = state.visitedMaterials.some((id) =>
          id.startsWith("sma"),
        );
        checkAchievement(14, hasSD && hasSMP && hasSMA);
      }
    }

    function renderAchievements() {
      let html = "";
      ACHIEVEMENTS.forEach((ach) => {
        const unlocked = state.unlockedAchievements.includes(ach.id);
        const cls = unlocked ? "ach-card" : "ach-card locked";
        html += `
                    <div class="${cls}">
                        <div class="ach-icon">${ach.icon}</div>
                        <h4>${ach.name}</h4>
                        <p>${ach.desc}</p>
                        ${unlocked ? '<span style="font-size:.65rem;color:var(--green);">✅ Unlocked</span>' : '<span style="font-size:.65rem;color:#A199CC;">🔒 Locked</span>'}
                        ${ach.coinReward ? `<span class="ach-reward">🪙 +${ach.coinReward}</span>` : ""}
                    </div>
                `;
      });
      dom.achGrid.innerHTML = html;
    }

    function renderAvatarGrid() {
      const allAvatars = [...AVATAR_DATA];
      const customAvatars = state.customAvatars.map((a) => ({
        emoji: a,
        name: "Custom",
        levelReq: 1,
        custom: true,
      }));
      const combined = [...allAvatars, ...customAvatars];
      let html = "";

      combined.forEach((av) => {
        const unlocked = isAvatarUnlocked(av.emoji);
        const isActive = state.avatar === av.emoji;
        const levelReq = av.levelReq || 1;

        html += `
                    <div class="avatar-option ${unlocked ? "" : "locked"} ${isActive ? "active" : ""}" 
                         data-avatar="${av.emoji}" 
                         ${!unlocked ? 'style="cursor:not-allowed;"' : ""}>
                        ${av.emoji}
                        ${!unlocked ? `<span class="lock-icon">🔒</span>` : ""}
                        <span class="level-req">${unlocked ? "✅" : "🔓 Level " + levelReq}</span>
                    </div>
                `;
      });

      dom.avatarGrid.innerHTML = html;

      // Event listener untuk klik avatar
      dom.avatarGrid.querySelectorAll(".avatar-option").forEach((el) => {
        el.addEventListener("click", function () {
          if (this.classList.contains("locked")) return;
          // Hapus active dari semua
          dom.avatarGrid
            .querySelectorAll(".avatar-option")
            .forEach((b) => b.classList.remove("active"));
          // Aktifkan yang diklik
          this.classList.add("active");
          // Update preview custom avatar
          const avatar = this.dataset.avatar;
          dom.customAvatarPreview.textContent = avatar;
          // Simpan sementara untuk dipilih nanti
          dom.avatarGrid._selected = avatar;
        });
      });

      // Custom avatar preview
      dom.customAvatarInput.addEventListener("input", function () {
        const val = this.value.trim() || "😎";
        dom.customAvatarPreview.textContent = val.slice(0, 2);
      });
    }

    function renderShop() {
      const items = SHOP_ITEMS.filter((i) => i.type === state.shopTab);
      let html = "";
      items.forEach((item) => {
        const owned = state.ownedItems.includes(item.id);
        const equipped =
          (item.type === "frame" && state.equippedFrame === item.cssClass) ||
          (item.type === "theme" && state.equippedTheme === item.dataTheme);
        const canAfford =
          item.currency === "coin"
            ? state.coins >= item.cost
            : state.diamonds >= item.cost;
        const priceLabel =
          item.currency === "coin" ? `🪙 ${item.cost}` : `💎 ${item.cost}`;

        let actionHtml = "";
        if (item.consumable) {
          actionHtml = `<button class="btn-coin" data-action="buy" data-id="${item.id}" ${!canAfford ? "disabled" : ""}>Gunakan</button>`;
        } else if (owned && item.type === "frame") {
          actionHtml = equipped
            ? `<span class="equipped-tag">✅ Dipakai</span><button class="btn-equipped" data-action="unequip" data-id="${item.id}">Lepas</button>`
            : `<span class="owned-tag">🎒 Dimiliki</span><button class="btn-owned" data-action="equip" data-id="${item.id}">Pakai</button>`;
        } else if (owned && item.type === "theme") {
          actionHtml = equipped
            ? `<span class="equipped-tag">✅ Aktif</span><button class="btn-equipped" data-action="unequip" data-id="${item.id}">Nonaktifkan</button>`
            : `<span class="owned-tag">🎒 Dimiliki</span><button class="btn-owned" data-action="equip" data-id="${item.id}">Aktifkan</button>`;
        } else {
          actionHtml = `<button class="btn-coin" data-action="buy" data-id="${item.id}" ${!canAfford ? "disabled" : ""}>Beli</button>`;
        }

        html += `
                    <div class="shop-item">
                        <div class="icon">${item.icon}</div>
                        <h4>${item.name}</h4>
                        <p>${item.desc}</p>
                        <div class="price ${item.currency}">${priceLabel}</div>
                        ${actionHtml}
                    </div>
                `;
      });
      dom.shopGrid.innerHTML =
        html ||
        `<p style="color:var(--ink-soft);">Belum ada item di kategori ini.</p>`;

      dom.shopGrid.querySelectorAll("button[data-action]").forEach((btn) => {
        btn.addEventListener("click", function () {
          const id = this.dataset.id;
          const action = this.dataset.action;
          if (action === "buy") purchaseItem(id);
          else if (action === "equip") equipItem(id);
          else if (action === "unequip") unequipItem(id);
        });
      });
    }

    function purchaseItem(id) {
      const item = SHOP_ITEMS.find((i) => i.id === id);
      if (!item) return;
      const balance = item.currency === "coin" ? state.coins : state.diamonds;
      if (balance < item.cost) {
        showGameToast({
          icon: "💰",
          title: "TOKO",
          message: "Koin/diamond kamu belum cukup!",
          tone: "warning",
        });
        return;
      }

      if (item.currency === "coin") state.coins -= item.cost;
      else state.diamonds -= item.cost;

      if (item.consumable) {
        if (item.effect.exp) addExp(item.effect.exp);
        if (item.effect.coin) state.coins += item.effect.coin;
        confettiBurst();
      } else {
        state.ownedItems.push(id);
        if (item.type === "frame") state.equippedFrame = item.cssClass;
        if (item.type === "theme") state.equippedTheme = item.dataTheme;
        checkAchievement(11, state.ownedItems.length >= 3);
        confettiBurst();
      }
      updateUI();
    }

    function equipItem(id) {
      const item = SHOP_ITEMS.find((i) => i.id === id);
      if (!item) return;
      if (item.type === "frame") state.equippedFrame = item.cssClass;
      if (item.type === "theme") state.equippedTheme = item.dataTheme;
      updateUI();
    }

    function unequipItem(id) {
      const item = SHOP_ITEMS.find((i) => i.id === id);
      if (!item) return;
      if (item.type === "frame") state.equippedFrame = null;
      if (item.type === "theme") state.equippedTheme = null;
      updateUI();
    }

    // ================================================================
    // 9. QUIZ
    // ================================================================

    let currentQuestions = [];
    let quizState = {
      index: 0,
      answered: false,
      correct: 0,
      wrong: 0,
      total: 0,
    };

    function resetQuiz() {
      const soal = getSoalForMaterial(state.materialId);
      currentQuestions = [...soal];
      for (let i = currentQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuestions[i], currentQuestions[j]] = [
          currentQuestions[j],
          currentQuestions[i],
        ];
      }
      currentQuestions = currentQuestions.slice(0, 10);

      quizState.index = 0;
      quizState.answered = false;
      quizState.correct = 0;
      quizState.wrong = 0;
      quizState.total = currentQuestions.length;

      state.quizCorrect = 0;
      state.quizWrong = 0;
      state.comboCount = 0;

      dom.quizResult.classList.add("hidden");
      dom.quizNextBtn.classList.remove("show");
      dom.quizFeedback.textContent = "";
      dom.quizFeedback.className = "quiz-feedback";

      if (currentQuestions.length === 0) {
        dom.quizQuestion.textContent = "Belum ada soal untuk materi ini.";
        dom.quizOptions.innerHTML = "";
        dom.quizQNum.textContent = "SOAL 0 / 0";
        return;
      }

      renderQuizQuestion();
      updateUI();
    }

    function renderQuizQuestion() {
      if (quizState.index >= currentQuestions.length) {
        showQuizResult();
        return;
      }

      const q = currentQuestions[quizState.index];
      if (!q) return;

      dom.quizQuestion.innerHTML = q.q;
      dom.quizQNum.textContent = `SOAL ${quizState.index + 1} / ${currentQuestions.length}`;
      dom.quizProgress.style.width = `${((quizState.index + 1) / currentQuestions.length) * 100}%`;
      dom.quizFeedback.textContent = "";
      dom.quizFeedback.className = "quiz-feedback";
      dom.quizNextBtn.classList.remove("show");
      quizState.answered = false;

      const letters = ["A", "B", "C", "D"];
      let html = "";
      q.o.forEach((opt, i) => {
        html += `
                    <button class="quiz-opt" data-index="${i}" data-correct="${i === q.c ? "1" : "0"}">
                        <span class="k">${letters[i]}</span>
                        ${opt}
                    </button>
                `;
      });
      dom.quizOptions.innerHTML = html;

      dom.quizOptions.querySelectorAll(".quiz-opt").forEach((btn) => {
        btn.addEventListener("click", function () {
          if (quizState.answered) return;
          quizState.answered = true;

          const isCorrect = this.dataset.correct === "1";
          const qData = currentQuestions[quizState.index];

          dom.quizOptions
            .querySelectorAll(".quiz-opt")
            .forEach((b) => b.classList.add("disabled"));

          dom.quizOptions.querySelectorAll(".quiz-opt").forEach((b) => {
            if (b.dataset.correct === "1") b.classList.add("correct");
            if (b === this && !isCorrect) b.classList.add("wrong");
          });

          if (isCorrect) {
            quizState.correct++;
            state.quizCorrect++;
            state.soalBenar++;
            state.comboCount++;
            state.maxCombo = Math.max(state.maxCombo, state.comboCount);
            checkAchievement(12, state.maxCombo >= 5);

            const comboBonus =
              state.comboCount >= 5 ? 5 : state.comboCount >= 3 ? 3 : 0;
            const coinGain = 5 + comboBonus;

            dom.quizFeedback.className = "quiz-feedback correct";
            dom.quizFeedback.innerHTML = `✅ BENAR! <span class="expgain">+10 EXP</span> <span class="coingain">+${coinGain} 🪙</span>${comboBonus ? ' <span style="color:var(--orange);">🔥 Combo Bonus!</span>' : ""}`;
            addExp(10);
            addCoins(coinGain, this);
            confettiBurst();

            checkAchievement(1, state.soalTerjawab >= 1);
            checkAchievement(4, state.soalTerjawab >= 50);
            checkAchievement(13, state.soalTerjawab >= 100);

            if (state.bossHP > 0) {
              state.bossHP = Math.max(0, state.bossHP - 3);
              dom.bossHpFill.style.width = `${state.bossHP}%`;
              dom.bossHpPct.textContent = `${state.bossHP}%`;
              if (state.bossHP <= 0 && !state.bossDefeated) {
                defeatBoss();
              }
            }
          } else {
            quizState.wrong++;
            state.quizWrong++;
            state.comboCount = 0;
            dom.quizFeedback.className = "quiz-feedback wrong";
            dom.quizFeedback.innerHTML = `
                            ❌ SALAH! <span class="expgain">+2 EXP</span> <span class="coingain">+1 🪙</span>
                            <span class="explanation">💡 Pembahasan: ${qData.exp || "Coba periksa kembali perhitunganmu!"}</span>
                        `;
            addExp(2);
            addCoins(1, this);
          }

          state.soalTerjawab++;
          dom.quizScore.textContent = `Benar: ${state.quizCorrect} | Salah: ${state.quizWrong}`;
          updateUI();

          setTimeout(() => {
            dom.quizNextBtn.classList.add("show");
            dom.quizNextBtn.textContent =
              quizState.index + 1 >= currentQuestions.length
                ? "🏆 Lihat Hasil"
                : "➡️ Soal Berikutnya";
          }, 1000);
        });
      });
    }

    function defeatBoss() {
      state.bossDefeated = true;
      state.bossesDefeatedCount++;
      dom.bossNote.textContent =
        "💥 BOSS DEFEATED! +100 EXP, +50 Koin, +1 Diamond!";
      dom.bossEmoji.textContent = "💀";
      addExp(100);
      addCoins(50);
      addDiamonds(1);
      checkAchievement(8, state.bossesDefeatedCount >= 3);
      confettiBurst();
    }

    function showQuizResult() {
      const total = quizState.correct + quizState.wrong;
      const pct =
        total > 0 ? Math.round((quizState.correct / total) * 100) : 0;

      dom.quizResult.classList.remove("hidden");
      dom.quizOptions.innerHTML = "";
      dom.quizQuestion.textContent = "";
      dom.quizQNum.textContent = "SELESAI!";
      dom.quizProgress.style.width = "100%";
      dom.quizNextBtn.classList.remove("show");
      dom.quizFeedback.textContent = "";

      let emoji = "😅",
        msg = "Terus belajar ya!";
      if (pct === 100) {
        emoji = "🏆";
        msg = "SEMPURNA! Kamu hebat!";
      } else if (pct >= 80) {
        emoji = "🌟";
        msg = "Bagus sekali! Pertahankan!";
      } else if (pct >= 60) {
        emoji = "👍";
        msg = "Cukup baik, tingkatkan lagi!";
      } else if (pct >= 40) {
        emoji = "📚";
        msg = "Perlu belajar lagi, semangat!";
      } else {
        emoji = "💪";
        msg = "Jangan menyerah, coba lagi!";
      }

      dom.quizResultText.innerHTML = `${emoji} <br><strong>${msg}</strong><br><span style="font-size:.9rem;color:#B9B3E8;">Benar: ${quizState.correct} | Salah: ${quizState.wrong} | Nilai: ${pct}%</span>`;

      if (pct === 100) checkAchievement(3, true);

      if (pct >= 80) {
        const bonusExp = pct === 100 ? 50 : 20;
        const bonusCoin = pct === 100 ? 30 : 15;
        addExp(bonusExp);
        addCoins(bonusCoin);
        dom.quizFeedback.className = "quiz-feedback correct";
        dom.quizFeedback.innerHTML = `🎉 Bonus +${bonusExp} EXP dan +${bonusCoin} 🪙 karena nilai bagus!`;
      }
      updateUI();
    }

    // ================================================================
    // 10. LEVEL UP MODAL
    // ================================================================

    function showLevelUpModal(level) {
      const data = getLevelData(level);
      const newAvatars = AVATAR_DATA.filter((a) => a.levelReq === level);
      const avatarMsg =
        newAvatars.length > 0
          ? `🔓 Avatar Baru: ${newAvatars.map((a) => a.emoji + " " + a.name).join(", ")}`
          : "🔓 Avatar Baru Tersedia! Cek di profil!";

      dom.levelModalLevel.textContent = `LEVEL ${String(level).padStart(2, "0")}`;
      dom.levelModalTitle.textContent = `"${data ? data.title : "Math Master"}"`;
      dom.levelModalRewards.innerHTML = `
                <div>🏆 New Badge Unlocked</div>
                <div>${avatarMsg}</div>
                <div>💎 +1 Diamond Bonus</div>
            `;
      dom.levelModal.classList.add("show");
      confettiBurst();
    }

    // ================================================================
    // 11. AVATAR FUNCTIONS
    // ================================================================

    function openAvatarModal() {
      renderAvatarGrid();
      dom.avatarModal.classList.add("show");
    }

    function closeAvatarModal() {
      dom.avatarModal.classList.remove("show");
    }

    function addCustomAvatar() {
      const input = dom.customAvatarInput;
      const val = input.value.trim();
      if (!val) {
        showGameToast({
          icon: "⚠️",
          title: "AVATAR",
          message: "Masukkan emoji atau karakter untuk avatar!",
          tone: "warning",
        });
        return;
      }
      const avatar = val.slice(0, 2);
      if (state.customAvatars.includes(avatar)) {
        showGameToast({
          icon: "⚠️",
          title: "AVATAR",
          message: "Avatar ini sudah ada!",
          tone: "warning",
        });
        return;
      }
      state.customAvatars.push(avatar);
      if (!state.unlockedAvatars.includes(avatar))
        state.unlockedAvatars.push(avatar);
      state.avatar = avatar;
      input.value = "";
      dom.customAvatarPreview.textContent = "😎";
      closeAvatarModal();
      updateUI();
      confettiBurst();
    }

    // ================================================================
    // 12. CONFETTI
    // ================================================================

    function confettiBurst() {
      const colors = [
        "#6C63FF",
        "#00C2FF",
        "#FFD166",
        "#FF6B9D",
        "#5DD39E",
        "#FF9A6B",
      ];
      for (let i = 0; i < 25; i++) {
        const p = document.createElement("div");
        p.className = "confetti-piece";
        p.style.left = Math.random() * 100 + "vw";
        p.style.background =
          colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDelay = Math.random() * 0.5 + "s";
        p.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 2500);
      }
    }

    // ================================================================
    // 13. SCROLL REVEAL
    // ================================================================

    function setupScrollReveal() {
      const revealEls = document.querySelectorAll(".reveal");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 },
      );
      revealEls.forEach((el) => io.observe(el));
    }

    // ================================================================
    // 14. BOTTOM NAV
    // ================================================================

    function setupBottomNav() {
      const bnItems = document.querySelectorAll(".bn-item");
      const sections = ["dashboard", "kelas", "latihan", "toko", "profile"];
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const idx = sections.indexOf(e.target.id);
              if (idx > -1) {
                bnItems.forEach((b) => b.classList.remove("active"));
                bnItems[idx].classList.add("active");
              }
            }
          });
        },
        { threshold: 0.3 },
      );
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }

    // ================================================================
    // 15. EVENT LISTENERS
    // ================================================================

    function setupEventListeners() {
      // Class buttons
      dom.classBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          dom.classBtns.forEach((b) => b.classList.remove("active"));
          this.classList.add("active");
          state.kelas = this.dataset.class;
          const materials = getMateriList();
          if (materials.length > 0) state.materialId = materials[0].id;
          renderMaterials();
          loadMateri();
          resetQuiz();
          updateUI();
        });
      });

      dom.startMateriBtn.addEventListener("click", () =>
        document
          .getElementById("belajar")
          .scrollIntoView({ behavior: "smooth" }),
      );

      dom.startQuizBtn.addEventListener("click", function () {
        const soal = getSoalForMaterial(state.materialId);
        if (soal.length > 0) {
          resetQuiz();
          document
            .getElementById("latihan")
            .scrollIntoView({ behavior: "smooth" });
        } else {
          showGameToast({
            icon: "📚",
            title: "LATIHAN",
            message: "Belum ada soal untuk materi ini!",
            tone: "warning",
          });
        }
      });

      dom.quizNextBtn.addEventListener("click", function () {
        if (quizState.index + 1 >= currentQuestions.length) showQuizResult();
        else {
          quizState.index++;
          renderQuizQuestion();
        }
      });

      dom.quizResetBtn.addEventListener("click", resetQuiz);

      // === AVATAR ===
      dom.hudAvatar.addEventListener("click", openAvatarModal);

      dom.avatarCloseBtn.addEventListener("click", function () {
        const selected = dom.avatarGrid.querySelector(
          ".avatar-option.active",
        );
        if (selected) {
          state.avatar = selected.dataset.avatar;
          updateUI();
        } else {
          const firstUnlocked = dom.avatarGrid.querySelector(
            ".avatar-option:not(.locked)",
          );
          if (firstUnlocked) {
            state.avatar = firstUnlocked.dataset.avatar;
            updateUI();
          }
        }
        closeAvatarModal();
      });

      dom.avatarModal.addEventListener("click", function (e) {
        if (e.target === this) closeAvatarModal();
      });

      // Custom avatar
      dom.addCustomAvatarBtn.addEventListener("click", addCustomAvatar);
      dom.customAvatarInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") addCustomAvatar();
      });

      // Level modal
      dom.levelModalClose.addEventListener("click", function () {
        dom.levelModal.classList.remove("show");
      });
      dom.levelModal.addEventListener("click", function (e) {
        if (e.target === this) dom.levelModal.classList.remove("show");
      });

      // Boss attack
      dom.bossAttackBtn.addEventListener("click", function () {
        if (state.bossHP <= 0 || state.bossDefeated) return;
        state.bossHP = Math.max(0, state.bossHP - 10);
        dom.bossHpFill.style.width = `${state.bossHP}%`;
        dom.bossHpPct.textContent = `${state.bossHP}%`;
        if (state.bossHP <= 0) {
          defeatBoss();
        } else {
          dom.bossNote.textContent = `−10 HP! Boss tersisa ${state.bossHP} HP!`;
        }
        updateUI();
      });

      // Shop tabs
      dom.shopTabs.querySelectorAll(".shop-tab").forEach((tab) => {
        tab.addEventListener("click", function () {
          dom.shopTabs
            .querySelectorAll(".shop-tab")
            .forEach((t) => t.classList.remove("active"));
          this.classList.add("active");
          state.shopTab = this.dataset.tab;
          renderShop();
        });
      });

      if (state.streak >= 7) checkAchievement(2, true);
    }

    // ================================================================
    // 16. NEXT BOSS RESET (biar boss baru muncul di level naik)
    // ================================================================

    const originalAddExp = addExp;

    // ================================================================
    // 17. INIT
    // ================================================================

    async function init() {
      // Inisialisasi Firebase di sini (setelah window.firebaseModules tersedia)
      if (window.firebaseModules && firebaseConfig.apiKey !== "REPLACE_WITH_API_KEY") {
        try {
          const app = window.firebaseModules.initializeApp(firebaseConfig);
          auth = window.firebaseModules.getAuth(app);
          db = window.firebaseModules.getFirestore(app);
          console.log("✅ Firebase berhasil diinisialisasi!");
        } catch (e) {
          console.error("Firebase Init Error:", e);
        }
      }

      if (window.firebaseModules && auth) {
        window.firebaseModules.onAuthStateChanged(auth, async (user) => {
          currentUser = user;
          if (user) {
            // User sudah login → sembunyikan modal
            dom.onboardingOverlay.classList.add("hidden");
            dom.userProfileMenu.style.display = "flex";

            // Ambil nama dari Google (displayName) atau dari email
            const userName = user.displayName || user.email.split('@')[0];
            dom.userNameDisplay.textContent = userName;
            dom.navLoginCta.style.display = "none";

            const cloudState = await loadStateFromLocalStorage();
            if (cloudState) {
              state = { ...state, ...cloudState };
            }
            // Selalu update nama dari akun Firebase (biar sesuai akun yang login)
            state.name = userName;
            state.isOnboarded = true;
            updateUI();
          } else {
            // User belum login → tampilkan modal
            dom.onboardingOverlay.classList.remove("hidden");
            dom.userProfileMenu.style.display = "none";
            dom.navLoginCta.style.display = "none";
          }
        });
      }

      const saved = await loadStateFromLocalStorage();
      if (saved) {
        state = { ...state, ...saved };
      } else {
        state.exp = 80;
        state.coins = 40;
        state.diamonds = 2;
        state.unlockedAchievements = [];
        state.unlockedAvatars = ["🧑‍🚀"];
        state.visitedMaterials = [];
        state.ownedItems = [];
      }

      startOnboarding();

      if (saved) {
        setTimeout(() => {
          showWelcomeToast(state.name || "Pemain");
        }, 500);
      } else {
        setTimeout(() => {
          showWelcomeToast(state.name || "Pemain");
        }, 900);
      }

      const materials = getMateriList();
      if (
        materials.length > 0 &&
        !materials.some((m) => m.id === state.materialId)
      ) {
        state.materialId = materials[0].id;
      }

      renderMaterials();
      loadMateri();
      updateUI();
      setTimeout(resetQuiz, 200);
      setupScrollReveal();
      setupBottomNav();
      setupEventListeners();

      console.log("🚀 MathQuest initialized with Auth Support!");
    }

    let initCalled = false;
    window.initGame = function () {
      if (initCalled) return;
      initCalled = true;
      init();
    };

    document.addEventListener("DOMContentLoaded", () => {
      // Fallback: panggil init jika Firebase module tidak pernah load dalam 5 detik
      // Tapi hanya jika Firebase memang tidak dikonfigurasi (apiKey masih placeholder)
      setTimeout(() => {
        if (!initCalled) {
          console.warn("Firebase module timed out, starting without Firebase.");
          window.initGame();
        }
      }, 5000);
    });
  