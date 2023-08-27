# Bootstrap

### Apa itu Frontend Framework?

Front end framework adalah sekumpulan aturan kode yang bisa kita gunakan untuk mempermudah dalam membuat suatu tampilan website. Bootstrap merupakan salah satu framework CSS yang digunakan khusus untuk suatu pengembangan front-end website. Sebagai sebuah framework, Bootstrap menyediakan template untuk mendefiniskan style dasar seluruh elemen HTML dalam sebuah website. Hal ini akan mempermudah dalam pembuatan website dengan keseragaman visual tanpa harus mendefinisikan style attribute untuk setiap elemen HTML secara berulang-ulang.

### Kenapa harus memilih bootstraps?

1. Gratis
2. Mudah dipelajari
3. Cepat
4. Mendukung Responsif

### Sistem Breakpoint

Breakpoint adalah ukuran lebar yang menentukan tampilan responsif terhadap ukuran viewport perangkat tertentu.

### Sistem Grid pada bootstraps

Sistem Grid adalah sistem yang digunakan Bootstrap untuk mengatur tata letak (layout). Sistem ini terdiri dari 12 kolom dan 6 breakpoint. Satu kolom penuh panjangnya adalah 12. Jika kolom dibagi dua maka panjangnya akan menjadi 6. Jika dibagi lagi, maka panjang kolomnya akan semakin kecil, hingga yang paling kecil adalah 1. Ini artinya, kolom pada grid hanya bisa dibagi sampai 12 saja. Selain untuk menentukan tata letak, Grid juga berfungsi sebagai guide line bagi desainer. Sehingga nanti akan membuat desain lebih mudah diterapkan ke dalam kode.

### Class container

Container adalah fondasi dasar dari blok layout. Container berfungsi untuk membungkus blok di dalamnya, sehingga terlihat rapi terhadap ukuran layar.

### Class row dan col

Class row dan col merupakan class untuk membuat baris dan kolom. Kedua class ini lah yang kita gunakan untuk membuat grid. Class row berfungsi untuk membuat baris. Class ini menggunakan flex, namun breakpoint tidak berlaku untuk class ini.
Class col berfungsi untuk membuat kolom. Class ini harus dibungkus oleh class row agar menjadi grid. Class col memiliki ukuran dan breakpoint. Ukuran paling panjang adalah 12, dan ukuran paling pendek adalah 1.
