Fitur Javascript:
✅ 1. Menampilkan Daftar Tempat Wisata
Apa yang dilakukan:
Mengambil elemen <ul id="daftar-wisata">.

Membuat daftar tempat wisata dari array tempatWisata.

Untuk setiap item:

Membuat elemen <li> berisi:

<p> sebagai nama tempat.

<img> sebagai gambar tempat.

Gambar diberi ukuran tetap (300px x 200px) dan object-fit: cover agar gambar tidak terdistorsi.

Tujuannya:
Menampilkan kartu tempat wisata dalam bentuk list yang rapi dan bergambar.

✅ 2. Menampilkan Sejarah Kota Medan
Apa yang dilakukan:
Mengambil elemen <ul id="daftar-sejarah">.

Array sejarahList berisi teks sejarah.

Setiap item dibuat menjadi elemen <li> lalu ditambahkan ke daftar.

Tujuannya:
Menampilkan beberapa paragraf sejarah Kota Medan dalam bentuk list.

✅ 3. Slider Kuliner Medan (Gambar + Caption + Tombol Navigasi)
Apa yang dilakukan:
Array sliderImages berisi nama kuliner dan path gambar.

Elemen HTML yang digunakan:

<img id="slider-img"> untuk menampilkan gambar.

<p id="slider-caption"> untuk nama kuliner.

Tombol #next-btn dan #prev-btn untuk navigasi manual.

Fungsi updateSlider() mengganti gambar dan caption sesuai indeks saat ini.

Tombol next dan prev akan mengubah currentImageIndex dan memanggil updateSlider().

Tujuannya:
Menampilkan slider galeri kuliner Medan dengan fitur klik tombol sebelumnya dan selanjutnya.

✅ 4. Dropdown Menu Navigasi yang Bisa Diklik
Apa yang dilakukan:
Mengambil tombol .dropbtn dan konten dropdown #dropdown-content.

Saat tombol diklik:

Toggle (show/hide) menu dropdown.

e.stopPropagation() mencegah klik dari bubbling ke document.

Jika klik di luar (pada document), dropdown akan disembunyikan.

Tujuannya:
Menambahkan navigasi menu dropdown yang bisa dibuka dan otomatis tertutup jika klik di luar menu.

