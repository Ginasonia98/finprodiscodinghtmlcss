document.addEventListener("DOMContentLoaded", function () {
  const tempatWisata = [
    { nama: "Danau Toba", gambar: "asset/img/Danau-Toba.jpeg" },
    { nama: "Kampung Keling", gambar: "asset/img/kampung-keling.jpg" },
    { nama: "Bukit Lawang", gambar: "asset/img/bukit-lawang.jpg" },
    {
      nama: "Rahmat International Wildlife Museum & Gallery",
      gambar: "asset/img/rahmat-museum.jpg",
    },
    { nama: "Istana Maimun", gambar: "asset/img/istana-maimun.jpg" },
    {
      nama: "Graha Bunda Maria Annai Velengkanni",
      gambar: "asset/img/graha-maria.jpg",
    },
    {
      nama: "Penangkaran Buaya Asam Kumbang",
      gambar: "asset/img/penangkaran-buaya.jpeg",
    },
    { nama: "Maha Vihara Maitreya", gambar: "asset/img/maitreya.jpeg" },
    {
      nama: "Tjong Yong Hian Gallery",
      gambar: "asset/img/tjong-yong-hian.jpg",
    },
    { nama: "Taman Edukasi Avros", gambar: "asset/img/avros.jpg" },
    { nama: "Air Terjun Sipiso Piso", gambar: "asset/img/sipiso-piso.jpeg" },
    { nama: "Kampung Ladang Outbound", gambar: "asset/img/kampung-ladang.jpg" },
    { nama: "The Le Hu Garden", gambar: "asset/img/le-hu-garden.jpg" },
    { nama: "Danau Siombak", gambar: "asset/img/danau-siombak.jpg" },
    { nama: "Pantai Cermin", gambar: "asset/img/pantai-cermin.jpeg" },
    { nama: "Jembatan Titi Gantung", gambar: "asset/img/jembatantitigantung.jpg" },
  ];

  const daftarWisata = document.getElementById("daftar-wisata");
  tempatWisata.forEach((tempat) => {
    const li = document.createElement("li");

    const nama = document.createElement("p");
    nama.textContent = tempat.nama;
    nama.style.fontWeight = "bold";
    nama.style.textAlign = "center";
    nama.style.textDecoration = "underline";

    const img = document.createElement("img");
    img.src = tempat.gambar;
    img.alt = tempat.nama;
    img.style.width = "300px";
    img.style.height = "200px"; // Tetapkan tinggi tetap
    img.style.objectFit = "cover"; // Potong gambar agar pas ke dalam kotak
    img.style.display = "block";
    img.style.marginBottom = "15px";
    img.style.borderRadius = "8px"; // (Opsional) sudut membulat

    li.appendChild(nama);
    li.appendChild(img);
    daftarWisata.appendChild(li);
  });

  const daftarSejarah = document.getElementById("daftar-sejarah");

  const sejarahList = [
    `Nama Medan diyakini berasal dari kata dalam bahasa Tamil, yaitu "Maidhan", yang berarti tanah lapang atau dataran. Versi lain menyebutkan bahwa kata "Medan" berasal dari bahasa Arab, "Madinah", yang berarti kota.
Pada awalnya, wilayah Medan hanyalah sebuah kampung kecil yang dikenal dengan nama Kampung Medan Putri, yang berada di pertemuan Sungai Deli dan Sungai Babura.`,

    `Kesultanan Deli memainkan peranan penting dalam pertumbuhan Medan. Kerajaan ini didirikan pada abad ke-17 dan berkembang pesat di bawah kepemimpinan Sultan Ma'mun Al Rasyid Perkasa Alam.
Pada masa itu, Medan mulai tumbuh sebagai pusat pemerintahan dan perdagangan. Kesultanan Deli juga menjalin hubungan dagang dengan bangsa-bangsa asing, termasuk Belanda dan Inggris.`,

    `Tahun 1869 menjadi tonggak penting, ketika seorang pengusaha Belanda bernama Jacob Nienhuys mendirikan perusahaan perkebunan tembakau bernama Deli Maatschappij. Perkebunan ini tumbuh sangat pesat, menarik banyak pekerja dari luar daerah, termasuk dari Tiongkok, India, dan Jawa.
Perkembangan industri perkebunan inilah yang menjadikan Medan sebagai kota modern. Infrastruktur mulai dibangun, termasuk jalan, rel kereta api, dan pelabuhan.`,

    `Kini, Medan merupakan kota terbesar keempat di Indonesia setelah Jakarta, Surabaya, dan Bandung. Kota ini menjadi pusat perdagangan, jasa, pendidikan, dan budaya di wilayah barat Indonesia. Medan juga menjadi pintu gerbang ke Danau Toba dan destinasi wisata lain di Sumatera Utara.`,
  ];

  sejarahList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    daftarSejarah.appendChild(li);
  });

  const sliderImages = [
    "/mnt/data/b00a1c8b-75ce-4822-9399-eb3738f5d398.png",
    "/mnt/data/9bd49c3b-10c3-4313-bb14-65674e2bb459.jpg",
    "/mnt/data/967a18e0-4240-4b5e-af1f-e5fe0e35e35e.png",
  ];
  let currentImageIndex = 0;
  const sliderImg = document.getElementById("slider-img");

  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    sliderImg.src = sliderImages[currentImageIndex];
  }, 3000);

  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.getElementById("dropdown-content");
  dropbtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function () {
    dropdownContent.style.display = "none";
  });
});
