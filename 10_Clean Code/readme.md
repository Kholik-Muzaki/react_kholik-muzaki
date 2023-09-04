# CLEAN CODE

### Apa itu clean code?

Clean code adalah istilah untuk kode yang mudah dibaca, difahami dan diubah oleh programmer. Clean code dipergunakan karena memiliki memiliki beberapa aspek yang sangat penting, diantaranya:

- Work Collaboration
- Feature Development
- Faster Development

### Karakteristik Clean Code

1. Penamaan mudah difahami
2. Mudah dieja dan dicari
3. Singkat namun mendeskripsikan konteks
4. Konsisten
5. Hindari konteks yang tidak perlu
6. Komentar
7. Good function
8. Gunakan konvensi
9. Formating
   <p> Beberapa saran untuk formatting : </p>

- Lebar baris code 80 – 120 karakter
- Satu class 300 – 500 baris
- Baris code yang berhubungan saling berdekatan
- Dekatkan fungsi dengan pemanggilnya
- Deklarasi variable berdekatan dengan penggunanya
- Perhatikan indentasi
- Menggunakan prettier atau formater

### Clean code principle

#### 1. KISS (Keep It So Simple)

Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst. Tips untuk selalu KISS :

- Fungsi atau class harus kecil
- Fungsi dibuat untuk melakukan satu tugas saja
- Jangan gunakan terlalu banyak argumen pada fungsi
- Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal

#### 2. DRY (Dry Repeat Yourself)

Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.

#### 3. Refactoring

Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.
Teknik refactoring :

- Membuat sebuah abstraksi
- Memecah kode dengan fungsi / class
- Perbaiki penamaan dan lokasi koded
- Deteksi kode yang memiliki duplikasi
