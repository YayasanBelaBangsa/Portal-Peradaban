// Data artikel dalam array objek
const articles = [
  {
    id: 1,
    title: "Transformasi Pendidikan di Era Digital",
    category: "Pendidikan",
    authors: ["Riskia Putra", "Denny Prabu Syahputra", "Achmad Kholif Rosyidi"],
    excerpt:
      "Digitalisasi pendidikan membawa perubahan fundamental dalam cara belajar dengan teknologi yang memberikan akses luas dan pengalaman interaktif.",
    date: "2025-11-01",
    readTime: "8 menit",
    image: "images/education-digital.jpg",
    slug: "transformasi-pendidikan-era-digital",
    fullContent: `
      <h2>Pendahuluan</h2>
      <p>Digitalisasi pendidikan telah membawa perubahan fundamental dalam cara kita mengajar dan belajar...</p>
      <!-- content truncated for brevity -->
    `,
  },
  // Tambah artikel berikutnya...
];

// Fungsi untuk render 3 artikel featured
function renderFeaturedArticles() {
  const featured = articles.slice(0, 3);
  const container = document.getElementById("featuredArticles");
  container.innerHTML = featured
    .map(
      (article) => `
    <div class="article-card" onclick="viewArticle(${article.id})">
      <img src="${article.image}" alt="${article.title}" class="article-image" />
      <div class="article-body">
        <span class="article-category ${article.category.toLowerCase()}">${article.category}</span>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
        <div class="article-meta-small">
          <span>${formatDate(article.date)}</span>
          <span>${article.readTime}</span>
        </div>
        <button class="read-more-btn">Baca Selengkapnya</button>
      </div>
    </div>
  `
    )
    .join("");
}

// Fungsi render semua artikel
function renderAllArticles() {
  const container = document.getElementById("allArticles");
  container.innerHTML = articles
    .map(
      (article) => `
    <div class="article-list-item" onclick="viewArticle(${article.id})">
      <img src="${article.image}" alt="${article.title}" class="article-list-image" />
      <div class="article-list-content">
        <span class="article-category ${article.category.toLowerCase()}">${article.category}</span>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <div class="article-meta-small">
          <span>${formatDate(article.date)}</span>
          <span>${article.readTime}</span>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Fungsi untuk melihat detail artikel berdasarkan id
function viewArticle(id) {
  const article = articles.find((a) => a.id === id);
  if (!article) return;
  // Sembunyikan section lain
  document.getElementById("featuredArticles").parentElement.style.display = "none";
  document.getElementById("allArticles").parentElement.style.display = "none";
  document.getElementById("categorySection").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";
  document.getElementById("contactPage").style.display = "none";
  // Tampilkan detail artikel
  const detail = document.getElementById("articleDetail");
  detail.style.display = "block";
  document.getElementById("articleImage").src = article.image;
  document.getElementById("articleImage").alt = article.title;
  document.getElementById("articleTitle").textContent = article.title;
  const categoryBadge = document.getElementById("articleCategory");
  categoryBadge.textContent = article.category;
  categoryBadge.className = `category-badge ${article.category.toLowerCase()}`;
  document.getElementById("articleDate").textContent = formatDate(article.date);
  document.getElementById("articleReadTime").textContent = `${article.readTime} baca`;
  document.getElementById("articleAuthors").textContent = article.authors.join(", ");
  document.getElementById("articleContent").innerHTML = article.fullContent;
  setupShareButtons(article);
  renderRelatedArticles(article);
  window.scrollTo(0, 0);
}

// Format tanggal sesuai locale Indonesia
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  try {
    return new Date(dateString).toLocaleDateString("id-ID", options);
  } catch {
    return dateString;
  }
}

// Setup tombol share (Facebook, Twitter, WhatsApp, LinkedIn)
function setupShareButtons(article) {
  const baseUrl = window.location.href.split("#")[0];
  const text = encodeURIComponent(`${article.title} - Yayasan Bela Bangsa`);
  document.querySelector(".share-btn.facebook").href =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(baseUrl)}`;
  document.querySelector(".share-btn.twitter").href =
    `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(baseUrl)}`;
  document.querySelector(".share-btn.whatsapp").href =
    `https://wa.me/?text=${text} ${encodeURIComponent(baseUrl)}`;
  document.querySelector(".share-btn.linkedin").href =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl)}`;
}

// Render artikel terkait kategori yang sama, maksimal 3
function renderRelatedArticles(currentArticle) {
  const related = articles.filter(
    (a) => a.category === currentArticle.category && a.id !== currentArticle.id
  ).slice(0, 3);
  const container = document.getElementById("relatedArticles");
  if (related.length === 0) {
    container.innerHTML = "<p>Tidak ada artikel terkait.</p>";
    return;
  }
  container.innerHTML = related
    .map(
      (article) => `
    <div class="article-card" onclick="viewArticle(${article.id})">
      <img src="${article.image}" alt="${article.title}" class="article-image" />
      <div class="article-body">
        <span class="article-category ${article.category.toLowerCase()}">${article.category}</span>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
      </div>
    </div>
  `
    )
    .join("");
}

// Filter artikel berdasarkan kategori dan tampilkan section kategori
function filterByCategory(category) {
  const categoryArticles = articles.filter((a) => a.category === category);
  const container = document.getElementById("categoryArticles");
  document.getElementById("categoryTitle").textContent = `Artikel ${category}`;
  container.innerHTML = categoryArticles
    .map(
      (article) => `
    <div class="article-card" onclick="viewArticle(${article.id})">
      <img src="${article.image}" alt="${article.title}" class="article-image" />
      <div class="article-body">
        <span class="article-category ${article.category.toLowerCase()}">${article.category}</span>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
        <div class="article-meta-small">
          <span>${formatDate(article.date)}</span>
          <span>${article.readTime}</span>
        </div>
        <button class="read-more-btn">Baca Selengkapnya</button>
      </div>
    </div>
  `
    )
    .join("");
  // Tampilkan section kategori dan sembunyikan lainnya
  document.getElementById("articleDetail").style.display = "none";
  document.getElementById("featuredArticles").parentElement.style.display = "none";
  document.getElementById("allArticles").parentElement.style.display = "none";
  document.getElementById("aboutPage").style.display = "none";
  document.getElementById("contactPage").style.display = "none";
  document.getElementById("categorySection").style.display = "block";
  window.scrollTo(0, 0);
}

// Navigation handlers
document.addEventListener("DOMContentLoaded", function () {
  renderFeaturedArticles();
  renderAllArticles();

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const category = this.getAttribute("data-category");
      if (category) {
        e.preventDefault();
        filterByCategory(category);
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      } else if (this.textContent === "Home") {
        e.preventDefault();
        showHome();
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      } else if (this.textContent === "Tentang") {
        e.preventDefault();
        showAbout();
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      } else if (this.textContent === "Kontak") {
        e.preventDefault();
        showContact();
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  // Back buttons
  document.getElementById("backBtn").addEventListener("click", showHome);
  document.getElementById("backBtnAbout").addEventListener("click", showHome);
  document.getElementById("backBtnContact").addEventListener("click", showHome);

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  hamburger.addEventListener("click", () => navMenu.classList.toggle("active"));

  // Back to top button
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) backToTopBtn.classList.add("show");
    else backToTopBtn.classList.remove("show");
  });
  backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Terima kasih! Pesan Anda telah dikirim.");
      this.reset();
    });
  }
});

// Fungsi untuk tampilkan halaman utama/home
function showHome() {
  document.getElementById("articleDetail").style.display = "none";
  document.getElementById("categorySection").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";
  document.getElementById("contactPage").style.display = "none";
  document.getElementById("featuredArticles").parentElement.style.display = "block";
  document.getElementById("allArticles").parentElement.style.display = "block";
  window.scrollTo(0, 0);
}

// Fungsi tampilkan halaman Tentang
function showAbout() {
  document.getElementById("articleDetail").style.display = "none";
  document.getElementById("categorySection").style.display = "none";
  document.getElementById("contactPage").style.display = "none";
  document.getElementById("featuredArticles").parentElement.style.display = "none";
  document.getElementById("allArticles").parentElement.style.display = "none";
  document.getElementById("aboutPage").style.display = "block";
  window.scrollTo(0, 0);
}

// Fungsi tampilkan halaman Kontak
function showContact() {
  document.getElementById("articleDetail").style.display = "none";
  document.getElementById("categorySection").style.display = "none";
  document.getElementById("aboutPage").style.display = "none";
  document.getElementById("featuredArticles").parentElement.style.display = "none";
  document.getElementById("allArticles").parentElement.style.display = "none";
  document.getElementById("contactPage").style.display = "block";
  window.scrollTo(0, 0);
}
