document.addEventListener("DOMContentLoaded", function () {
  const tempatWisata = [
    "Istana Maimun",
    "Masjid Raya Al-Mashun",
    "Tjong A Fie Mansion",
    "Danau Siombak",
    "Museum Sumatera Utara",
  ];

  const daftar = document.getElementById("daftar-wisata");
  tempatWisata.forEach((tempat) => {
    const li = document.createElement("li");
    li.textContent = tempat;
    daftar.appendChild(li);
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
