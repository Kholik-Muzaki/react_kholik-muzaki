# REACT TESTING

### Apa itu testing?

Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

### Manfaat Testing

1. Ketika aplikasi kita memiliki coverage yang baik (mayoritas codebase tercakup oleh test), kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken, kita akan segera mengetahuinya.

2. Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

### Kategori Testing

Secara umum, cara mengakses di React terbagi menjadi dua kategori, yaitu:

1. **Rendering Component Trees:** Didalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya.
2. **Menjalankan Aplikasi Lengkap:** Didalam environment peramban (browser) asli. Ini dikenal sebagai tes "end-to-end".

### Pertimbangan memilih Perkakas

1. **Kecepatan iterasi vs environment yang realistis**

Beberapa kakas menawarkan feedback loop yang sangat cepat antara membuat sebuah perubahan dan melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. Tools lain mungkin menggunakan environment peramban asli, tetapi mengurangi kecepatan iterasi dan lebih flakier pada server integrasi berkelanjutan.

2. **Seberapa banyak mock**

Dengan komponen, perbedaan antara tes "unit" dan tes "integrasi" bisa tidak sesuai. Jika kita mengetes sebuah form, haruskah tes yang dilakukan juga menguji tombol yang ada didalamnya? Atau haruskah komponen memiliki rangkaian tes sendiri? Haruskah refactoring pada tombol merusak tes pada form?

Pertimbangan memilih perkakas untuk testing tentu saja dikembalikan kepada kebutuhan masing-masing.

### Rekomendasi Tools untuk Testing

1. **Jest**
2. **React Testing Library**

### Create Basic Testing With RTL

#### Render dan Debug

Fungsi render RTL akan merender file JSX apapun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terrender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL. React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan mengapa kita melihat struktur HTML sebagai output dari fungsi render.

#### Memilih Element

React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL. Salah satu contohnya adalah `getByText` untuk memilih teks dari elemen yang sudah dipilih.

#### Testing Custom Hook

Untuk library yang digunakan untuk custom hook, kita menggunakan **React Hooks Testing Library**. Ini akan memberikan kita alat-alat untuk mengetes hooks tanpa merender satu komponen.
