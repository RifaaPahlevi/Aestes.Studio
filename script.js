const whatsappNumber = "62895331366343"; // Ganti nomor WhatsApp toko kamu (pakai kode negara tanpa tanda +)

const products = [
  { name: "longsleve-zeus with flower", size: "Size M-L-XL", image: "img/zeus with flower.jpg", whatsappMessage: "Halo, can i order zeus with flower to size M-L-XL." },
  { name: "Punk With Aestes Tee", size: "M-L-XL", image: "img/Punk with aestes.jpg", whatsappMessage: "Halo, can i order Punk With Aestes to size M-L-XL." },
  { name: "Smoke Kurt Tee", size: "M-L-XL", image: "img/Smoke Kurt Tee.jpg", whatsappMessage: "Halo, can i order Smoke Liam Tee to size M-L-XL." },
  { name: "Wild Flowers Tee", size: "M-L-XL", image: "img/Wild Flowers.png", whatsappMessage: "Halo, can i order Wild Flowers Tee to size M-L-XL." },
  { name: "Scrollin Dial Tee", size: "M-L-XL", image: "img/Scrollin Dial Tee.jpg", whatsappMessage: "Halo, can i order Scorllin Dial to size M-L-XL." },
  { name: "Kissing Gods Tee", size: "M-L-XL", image: "img/Kissing Gods Tee.jpg", whatsappMessage: "Halo, saya ingin memesan Knitted Doll dari NasCute." },
  { name: "Longsleve Zeus With Flowers", size: "M-L-XL", image: "img/Zeus With Flower.jpg", whatsappMessage: "Halo, can i order Longsleve Zeus With Flowers to size M-L-XL." },
  { name: "Cowgirl Chaos Tee", size: "M-L-XL", image: "img/Cowgirl Chaos Tee.jpg", whatsappMessage: "Halo, can i order Cowgirl Chaos Tee to size M-L-XL." },
];

// Fungsi untuk membuat elemen katalog produk secara dinamis
function createCatalogCard(product, index) {
  const card = document.createElement("div");
  card.className = "catalog-item";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p class="size">${product.size}</p>
    <button data-idx="${index}">Order to WhatsApp</button>
  `;
  return card;
}

// Menampilkan katalog penuh di halaman catalog.html
const catalogGrid = document.getElementById("catalog-grid");
if (catalogGrid) {
  products.forEach((product, idx) => {
    const card = createCatalogCard(product, idx);
    catalogGrid.appendChild(card);
  });

  const buttons = catalogGrid.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-idx");
      openWhatsapp(products[idx].whatsappMessage);
    });
  });
}

// Menampilkan preview katalog di homepage (hanya 5 produk)
const catalogPreviewGrid = document.getElementById("catalog-preview-grid");
if (catalogPreviewGrid) {
  products.slice(0, 5).forEach((product, idx) => {
    const card = createCatalogCard(product, idx);
    catalogPreviewGrid.appendChild(card);
  });

  const buttons = catalogPreviewGrid.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-idx");
      openWhatsapp(products[idx].whatsappMessage);
    });
  });
}

// Fungsi untuk membuka WhatsApp dengan pesan tertentu
function openWhatsapp(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Tombol konsultasi WhatsApp di index.html
const btnWhatsappConsult = document.getElementById("btn-whatsapp-consult");
if (btnWhatsappConsult) {
  btnWhatsappConsult.addEventListener("click", () => {
    openWhatsapp("Halo, I want to ask about products from Aestes.");
  });
}
