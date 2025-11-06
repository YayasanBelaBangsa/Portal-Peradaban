/* =====================================================
   DATA ARTIKEL - BERITA DAN OPINI YAYASAN BELA BANGSA
   ===================================================== */

// Siapkan data artikel dalam bentuk array
const articles = [
    // ============================================
    // ARTIKEL 1: PENDIDIKAN - Transformasi Pendidikan di Era Digital
    // ============================================
    {
        id: 1,
        title: "Transformasi Pendidikan di Era Digital",
        category: "Pendidikan",
        authors: [
            "Riskia Putra",
            "Denny Prabu Syahputra",
            "Achmad Kholif Rosyidi"
        ],
        excerpt: "Digitalisasi pendidikan telah membawa perubahan fundamental dalam cara kita mengajar dan belajar. Teknologi memberikan akses yang lebih luas kepada siswa untuk mengakses sumber belajar dari berbagai belahan dunia dan menciptakan pengalaman belajar yang lebih personal dan interaktif.",
        date: "2025-11-01",
        readTime: "8 menit",
        image: "images/education-digital.jpg",
        slug: "transformasi-pendidikan-era-digital",
        fullContent: `
            <h2>Pendahuluan</h2>
            <p>Digitalisasi pendidikan telah membawa perubahan fundamental dalam cara kita mengajar dan belajar. Teknologi tidak hanya menjadi alat pelengkap, tetapi telah menjadi bagian integral dari sistem pendidikan modern. Platform pembelajaran online, aplikasi edukatif, dan artificial intelligence dalam pendidikan membuka peluang baru untuk menciptakan pengalaman belajar yang lebih personal, interaktif, dan inklusif.</p>
            <p>Transformasi pendidikan di era digital bukan sekadar tren, melainkan kebutuhan yang mendesak untuk mempersiapkan generasi muda menghadapi tantangan abad ke-21. Artikel ini mengeksplorasi berbagai aspek dari transformasi ini, mulai dari peluang hingga tantangan yang dihadapi.</p>

            <h2>Peluang Era Digital dalam Pendidikan</h2>

            <h3>1. Akses Pendidikan yang Lebih Luas</h3>
            <p>Teknologi digital telah menghilangkan batasan geografis dalam pendidikan. Siswa dari daerah terpencil kini dapat mengakses pembelajaran berkualitas dari instruktur terbaik di dunia melalui platform online. Kursus online terbuka besar (MOOC) seperti Coursera, edX, dan Udemy telah demokratisasi pendidikan tinggi, membuat pengetahuan menjadi lebih accessible bagi semua orang.</p>

            <h3>2. Personalisasi Pembelajaran</h3>
            <p>Artificial Intelligence dan machine learning memungkinkan sistem pembelajaran adaptif yang dapat menyesuaikan konten dan kecepatan pembelajaran berdasarkan kebutuhan individual setiap siswa. Ini berarti tidak ada lagi pendekatan "one-size-fits-all" dalam pendidikan. Setiap siswa dapat belajar dengan kecepatan dan gaya mereka sendiri.</p>

            <h3>3. Engagement dan Interaktivitas</h3>
            <p>Gamification, virtual reality, dan augmented reality membuat pembelajaran menjadi lebih menarik dan interaktif. Siswa tidak hanya menerima informasi secara pasif, tetapi aktif berpartisipasi dalam proses pembelajaran. Contohnya, siswa dapat melakukan simulasi eksperimen sains virtual, menjelajahi sejarah dengan VR, atau menyelesaikan tantangan dalam bentuk game untuk memperkuat konsep.</p>

            <h3>4. Kolaborasi Global</h3>
            <p>Platform digital memfasilitasi kolaborasi antar siswa dari berbagai negara dan budaya. Proyek-proyek kolaboratif internasional tidak hanya mengajarkan materi pelajaran, tetapi juga soft skills seperti komunikasi, kerja tim, dan pemahaman lintas budaya yang sangat penting di era global ini.</p>

            <h2>Tantangan yang Masih Harus Dihadapi</h2>

            <h3>1. Kesenjangan Digital (Digital Divide)</h3>
            <p>Meskipun teknologi menawarkan banyak peluang, masih ada kesenjangan signifikan antara sekolah-sekolah di kota besar dengan sekolah-sekolah di daerah tertinggal. Akses internet yang tidak merata, infrastruktur yang terbatas, dan ketidakmampuan finansial menjadi hambatan utama. Tanpa intervensi pemerintah yang serius, teknologi justru dapat memperlebar ketimpangan dalam pendidikan.</p>

            <h3>2. Kualitas Konten dan Validasi</h3>
            <p>Tidak semua konten online yang tersedia memiliki kualitas akademik yang baik. Informasi yang tersebar di internet tidak selalu terverifikasi atau akurat. Pendidik dan siswa perlu memiliki kemampuan literasi digital yang kuat untuk membedakan informasi yang kredibel dari yang tidak.</p>

            <h3>3. Kesehatan Mental dan Physical Wellness</h3>
            <p>Pembelajaran yang terlalu banyak menggunakan layar dapat menyebabkan kelelahan mata, gangguan postur, dan masalah kesehatan mental seperti anxiety dan isolasi sosial. Keseimbangan antara pembelajaran digital dan aktivitas offline sangat penting untuk kesejahteraan holistik siswa.</p>

            <h3>4. Keamanan Data dan Privacy</h3>
            <p>Dengan meningkatnya penggunaan data pribadi siswa dalam platform digital, keamanan dan privasi menjadi isu yang sangat kritis. Perlu ada regulasi yang ketat dan praktik terbaik untuk melindungi data-data sensitif siswa dari misuse dan cyber threats.</p>

            <h2>Best Practices dalam Transformasi Pendidikan Digital</h2>

            <h3>Strategi 1: Blended Learning Model</h3>
            <p>Model pembelajaran hybrid yang menggabungkan pembelajaran online dan offline memberikan hasil terbaik. Guru dapat menggunakan teknologi untuk tugas-tugas yang lebih cocok dilakukan online (seperti akses konten dan kolaborasi asynchronous), sementara interaksi face-to-face tetap dimanfaatkan untuk diskusi mendalam, mentoring, dan membangun hubungan.</p>

            <h3>Strategi 2: Capacity Building untuk Educators</h3>
            <p>Guru memerlukan pelatihan berkelanjutan tentang bagaimana mengintegrasikan teknologi secara efektif dalam pembelajaran. Bukan hanya tentang menguasai tools teknologi, tetapi tentang mengubah pedagogi untuk memanfaatkan potensi teknologi secara optimal. Program pelatihan yang komprehensif dan berkelanjutan sangat diperlukan.</p>

            <h3>Strategi 3: Infrastruktur dan Akses yang Inklusif</h3>
            <p>Investasi dalam infrastruktur digital harus merata ke seluruh negeri. Program subsidi internet, penyediaan perangkat, dan akses ke platform pembelajaran berkualitas harus menjangkau sekolah-sekolah di daerah tertinggal agar tidak ada yang tertinggal dalam transformasi ini.</p>

            <h3>Strategi 4: Fokus pada 21st Century Skills</h3>
            <p>Kurikulum harus disesuaikan untuk mengembangkan keterampilan abad ke-21 seperti critical thinking, creativity, communication, dan collaboration. Teknologi harus digunakan sebagai enabler untuk mengembangkan soft skills ini, bukan hanya untuk mengirimkan konten.</p>

            <blockquote>
                "Technology is best when it brings people together. Pendidikan digital seharusnya membawa semua orang lebih dekat, bukan mengasing mereka."
            </blockquote>

            <h2>Peran Guru di Era Digital</h2>
            <p>Peran guru tidak menghilang di era digital, tetapi berevolusi. Guru bukan lagi satu-satunya sumber pengetahuan, tetapi lebih menjadi fasilitator, mentor, dan guide. Guru membantu siswa menavigasi lautan informasi yang ada online, mengajarkan cara berpikir kritis, dan membangun karakter. Hubungan guru-siswa tetap menjadi inti dari proses pembelajaran yang bermakna.</p>

            <h2>Kesimpulan dan Rekomendasi</h2>
            <p>Transformasi pendidikan di era digital membawa peluang dan tantangan yang seimbang. Kesuksesan transformasi ini bergantung pada bagaimana kita mengatasi tantangan dan memaksimalkan peluang yang ada. Beberapa rekomendasi kunci:</p>
            <ul>
                <li><strong>Investasi Strategis:</strong> Pemerintah dan institusi pendidikan harus menginvestasikan sumber daya yang cukup dalam infrastruktur digital dan pelatihan guru.</li>
                <li><strong>Regulasi yang Tepat:</strong> Kebijakan yang jelas tentang keamanan data, privacy, dan kualitas konten online harus ditetapkan.</li>
                <li><strong>Kolaborasi Multi-Stakeholder:</strong> Kerjasama antara pemerintah, institusi pendidikan, industri teknologi, dan masyarakat sipil sangat penting.</li>
                <li><strong>Fokus pada Equity:</strong> Memastikan bahwa semua siswa, terlepas dari latar belakang ekonomi atau geografis, mendapat akses yang sama terhadap pendidikan berkualitas di era digital.</li>
                <li><strong>Continuous Adaptation:</strong> Karena teknologi terus berkembang, sistem pendidikan harus terus beradaptasi dan berinovasi untuk tetap relevan.</li>
            </ul>
            <p>Transformasi pendidikan digital bukan tentang menggantikan pendidikan tradisional, tetapi tentang memanfaatkan kekuatan teknologi untuk menciptakan pengalaman pembelajaran yang lebih baik, lebih inklusif, dan lebih relevan dengan kebutuhan abad ke-21. Dengan komitmen dan kerja sama yang solid, kita dapat memastikan bahwa setiap siswa memiliki kesempatan untuk berkembang dan mencapai potensi penuh mereka di era digital ini.</p>
        `
    },

    // ============================================
    // ARTIKEL 2: PENDIDIKAN
    // ============================================
    {
        id: 2,
        title: "Pentingnya Literasi dalam Kurikulum Merdeka",
        category: "Pendidikan",
        authors: ["Tim Redaksi"],
        excerpt: "Kurikulum Merdeka menekankan pentingnya literasi sebagai fondasi pembelajaran. Literasi bukan hanya kemampuan membaca dan menulis, tetapi juga memahami dan menganalisis informasi secara kritis.",
        date: "2025-10-28",
        readTime: "6 menit",
        image: "images/literacy-education.jpg",
        slug: "pentingnya-literasi-kurikulum-merdeka",
        fullContent: `
            <h2>Pengenalan Literasi dalam Pendidikan Modern</h2>
            <p>Literasi merupakan salah satu fondasi terpenting dalam pendidikan abad ke-21. Dengan adanya Kurikulum Merdeka, dimensi literasi menjadi semakin luas dan mendalam...</p>
        `
    },

    // ============================================
    // ARTIKEL 3: SOSIAL
    // ============================================
    {
        id: 3,
        title: "Membangun Komunitas yang Inklusif",
        category: "Sosial",
        authors: ["Tim Redaksi"],
        excerpt: "Inklusivitas adalah kunci dalam membangun masyarakat yang harmonis. Setiap individu, tanpa memandang latar belakang, memiliki hak yang sama untuk berpartisipasi dalam kehidupan sosial.",
        date: "2025-10-25",
        readTime: "5 menit",
        image: "images/inclusive-community.jpg",
        slug: "membangun-komunitas-inklusif",
        fullContent: `
            <h2>Makna Komunitas Inklusif</h2>
            <p>Komunitas yang inklusif adalah komunitas yang membuka pintu bagi semua orang, tanpa terkecuali...</p>
        `
    },

    // ============================================
    // ARTIKEL 4: SOSIAL
    // ============================================
    {
        id: 4,
        title: "Peran Pemuda dalam Pembangunan Sosial",
        category: "Sosial",
        authors: ["Tim Redaksi"],
        excerpt: "Pemuda adalah agen perubahan yang memiliki energi dan ide-ide segar untuk memajukan masyarakat. Keterlibatan aktif pemuda dalam program sosial sangat penting untuk keberlanjutan pembangunan.",
        date: "2025-10-20",
        readTime: "5 menit",
        image: "images/youth-social.jpg",
        slug: "peran-pemuda-pembangunan-sosial",
        fullContent: `
            <h2>Potensi Pemuda sebagai Agen Perubahan</h2>
            <p>Pemuda memiliki potensi luar biasa untuk menjadi agen perubahan dalam masyarakat...</p>
        `
    },

    // ============================================
    // ARTIKEL 5: BUDAYA
    // ============================================
    {
        id: 5,
        title: "Melestarikan Budaya Lokal Jember",
        category: "Budaya",
        authors: ["Tim Redaksi"],
        excerpt: "Jember memiliki kekayaan budaya yang luar biasa, dari tari-tarian tradisional hingga kerajinan khas. Upaya pelestarian budaya lokal perlu dilakukan agar warisan leluhur tidak hilang.",
        date: "2025-10-15",
        readTime: "7 menit",
        image: "images/jember-culture.jpg",
        slug: "melestarikan-budaya-lokal-jember",
        fullContent: `
            <h2>Kekayaan Budaya Jember</h2>
            <p>Jember adalah kota yang kaya akan tradisi dan budaya lokal yang perlu dilestarikan...</p>
        `
    },

    // ============================================
    // ARTIKEL 6: BUDAYA
    // ============================================
    {
        id: 6,
        title: "Seni dan Identitas Bangsa",
        category: "Budaya",
        authors: ["Tim Redaksi"],
        excerpt: "Seni adalah cerminan identitas suatu bangsa. Melalui seni, kita dapat memahami nilai-nilai, sejarah, dan karakter masyarakat. Mendukung seniman lokal berarti menjaga kekayaan budaya Indonesia.",
        date: "2025-10-10",
        readTime: "6 menit",
        image: "images/art-identity.jpg",
        slug: "seni-identitas-bangsa",
        fullContent: `
            <h2>Seni sebagai Ekspresi Budaya</h2>
            <p>Seni memiliki peran penting dalam mengekspresikan identitas dan nilai-nilai suatu bangsa...</p>
        `
    }
];

/* =====================================================
   FUNGSI UTAMA WEBSITE
   ===================================================== */

// 1. RENDER FEATURED ARTICLES (3 artikel pertama)
function renderFeaturedArticles() {
    const featured = articles.slice(0, 3);
    const container = document.getElementById('featuredArticles');
    
    container.innerHTML = featured.map(article => `
        <div class="article-card" onclick="viewArticle(${article.id})">
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-body">
                <span class="article-category ${article.category.toLowerCase()}">${article.category}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta-small">
                    <span>${article.date}</span>
                    <span>${article.readTime}</span>
                </div>
                <button class="read-more-btn">Baca Selengkapnya</button>
            </div>
        </div>
    `).join('');
}

// 2. RENDER ALL ARTICLES (tampilan list)
function renderAllArticles() {
    const container = document.getElementById('allArticles');
    
    container.innerHTML = articles.map(article => `
        <div class="article-list-item" onclick="viewArticle(${article.id})">
            <img src="${article.image}" alt="${article.title}" class="article-list-image">
            <div class="article-list-content">
                <span class="article-category ${article.category.toLowerCase()}">${article.category}</span>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <div class="article-meta-small">
                    <span>${article.date}</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 3. VIEW SINGLE ARTICLE
function viewArticle(id) {
    const article = articles.find(a => a.id === id);
    if (!article) return;

    // Sembunyikan semua section
    document.getElementById('featuredArticles').parentElement.style.display = 'none';
    document.getElementById('allArticles').parentElement.style.display = 'none';
    document.getElementById('categorySection').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('contactPage').style.display = 'none';
    document.getElementById('articleDetail').style.display = 'block';

    // Tampilkan artikel
    document.getElementById('articleImage').src = article.image;
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleCategory').textContent = article.category;
    document.getElementById('articleCategory').className = `category-badge ${article.category.toLowerCase()}`;
    document.getElementById('articleDate').textContent = formatDate(article.date);
    document.getElementById('articleReadTime').textContent = article.readTime + ' baca';
    document.getElementById('articleAuthors').textContent = article.authors.join(', ');
    document.getElementById('articleContent').innerHTML = article.fullContent;

    // Setup share buttons
    setupShareButtons(article);

    // Tampilkan related articles
    renderRelatedArticles(article);

    // Scroll ke atas
    window.scrollTo(0, 0);
}

// 4. FORMAT TANGGAL
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', locale: 'id-ID' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

// 5. SETUP SHARE BUTTONS
function setupShareButtons(article) {
    const baseUrl = window.location.href.split('#')[0];
    const text = `${article.title} - Yayasan Bela Bangsa`;
    
    document.querySelector('.share-btn.facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`;
    document.querySelector('.share-btn.twitter').href = `https://twitter.com/intent/tweet?text=${text}&url=${baseUrl}`;
    document.querySelector('.share-btn.whatsapp').href = `https://wa.me/?text=${text} ${baseUrl}`;
    document.querySelector('.share-btn.linkedin').href = `https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}`;
}

// 6. RENDER RELATED ARTICLES
function renderRelatedArticles(currentArticle) {
    const related = articles.filter(a => 
        a.category === currentArticle.category && a.id !== currentArticle.id
    ).slice(0, 3);

    const container = document.getElementById('relatedArticles');
    
    if (related.length === 0) {
        container.innerHTML = '<p>Tidak ada artikel terkait.</p>';
        return;
    }

    container.innerHTML = related.map(article => `
        <div class="article-card" onclick="viewArticle(${article.id})">
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-body">
                <span class="article-category ${article.category.toLowerCase()}">${article.category}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
            </div>
        </div>
    `).join('');
}

// 7. FILTER ARTICLES BY CATEGORY
function filterByCategory(category) {
    const categoryArticles = articles.filter(a => a.category === category);
    const container = document.getElementById('categoryArticles');
    
    document.getElementById('categoryTitle').textContent = `Artikel: ${category}`;
    
    container.innerHTML = categoryArticles.map(article => `
        <div class="article-card" onclick="viewArticle(${article.id})">
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-body">
                <span class="article-category ${article.category.toLowerCase()}">${article.category}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta-small">
                    <span>${article.date}</span>
                    <span>${article.readTime}</span>
                </div>
                <button class="read-more-btn">Baca Selengkapnya</button>
            </div>
        </div>
    `).join('');

    // Tampilkan category section
    document.getElementById('articleDetail').style.display = 'none';
    document.getElementById('featuredArticles').parentElement.style.display = 'none';
    document.getElementById('allArticles').parentElement.style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('contactPage').style.display = 'none';
    document.getElementById('categorySection').style.display = 'block';
    
    window.scrollTo(0, 0);
}

// 8. NAVIGATION HANDLERS
document.addEventListener('DOMContentLoaded', function() {
    // Render konten awal
    renderFeaturedArticles();
    renderAllArticles();

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const category = this.getAttribute('data-category');
            
            if (category) {
                e.preventDefault();
                filterByCategory(category);
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            } else if (this.textContent === 'Home') {
                e.preventDefault();
                showHome();
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            } else if (this.textContent === 'Tentang') {
                e.preventDefault();
                showAbout();
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            } else if (this.textContent === 'Kontak') {
                e.preventDefault();
                showContact();
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Back buttons
    document.getElementById('backBtn').addEventListener('click', showHome);
    document.getElementById('backBtnAbout').addEventListener('click', showHome);
    document.getElementById('backBtnContact').addEventListener('click', showHome);

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo(0, 0);
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah dikirim.');
            this.reset();
        });
    }
});

// 9. SHOW HOME PAGE
function showHome() {
    document.getElementById('articleDetail').style.display = 'none';
    document.getElementById('categorySection').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('contactPage').style.display = 'none';
    document.getElementById('featuredArticles').parentElement.style.display = 'block';
    document.getElementById('allArticles').parentElement.style.display = 'block';
    
    window.scrollTo(0, 0);
}

// 10. SHOW ABOUT PAGE
function showAbout() {
    document.getElementById('articleDetail').style.display = 'none';
    document.getElementById('categorySection').style.display = 'none';
    document.getElementById('contactPage').style.display = 'none';
    document.getElementById('featuredArticles').parentElement.style.display = 'none';
    document.getElementById('allArticles').parentElement.style.display = 'none';
    document.getElementById('aboutPage').style.display = 'block';
    
    window.scrollTo(0, 0);
}

// 11. SHOW CONTACT PAGE
function showContact() {
    document.getElementById('articleDetail').style.display = 'none';
    document.getElementById('categorySection').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('featuredArticles').parentElement.style.display = 'none';
    document.getElementById('allArticles').parentElement.style.display = 'none';
    document.getElementById('contactPage').style.display = 'block';
    
    window.scrollTo(0, 0);
}
