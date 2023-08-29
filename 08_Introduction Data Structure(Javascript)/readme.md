# INTRODUCTION DATA STRUCTURES (JAVASCRIPT)

### Mengapa belajar data structures?

Mempelajari data structures sangat dibutuhkan karena beberapa alasan, diantaranya untuk mengetahui kualitas kode yang dibuat dan juga efisiensi kode.

### Data Structures

Data adalah cakupan luas merujuk tipe semua tipe informasi yang tersimpan dalam memori komputer (string, number, boolean, dll). Data structure adalah bagaimana menyimpan dan mengorganisir data/value/elemen di dalam memori komputer. Data dapat dikelola dengan berbagai cara, diantaranya data dapat disimpan dalam 3 variable, data dtring dapat tersimpan dalam satu variable array.

### Operasi data structure

Terdapat 4 operasi dalam data structure yaitu :

    - Read
    - Delete
    - Search
    - Insert

### Array

Array merupakan data structure yang paling dasar dan juga serbaguna. Hal demikian disebabkan array dapat menampung elemen data dalam jumlah banyak dan memiliki indeks yang mengidentifikasi dimana posisi elemen berada.

### Reading

Reading merupakan operasi yang digunakan untuk melihat apa yang terkandung pada indeks tertentu di dalam array. Operasi reading juga merupakan operasi tercepat karena hanya membutuhkan 1 steps.
Ketika membaca sebuah value pada indeks tertentu memori komputer dapat langsung melompat ke indeks tersebut, karena : 1. Komputer bisa melompat ke alamat memori manapun dalam satu steps 2. Ketika mengalokasikan sebuah array, komputer juga membuat catatan dimana alamat memori array dimulai.

### Searching

Searching digunakan untuk mencari apakah nilai tertentu ada di dalam array atau tidak, searching juga merupakan kebalikan dari operasi reading. Ketika melakukan operasi searching pada array komputer tidak memiliki cara untuk melompat langsung ke nilai tertentu karena komputer tidak bisa mengetahui begitu saja nilai apa yang terkandung pada setiap memori.

### Insertion

Operasi insertion pada javascript dapat efisien tergantung kita memasukkan valuenya, ketika kita memasukkan value pada akhir dari array hanya akan membutuhkan satu steps saja. Seperti contoh: Jika kita memiliki array dengan ukuran lima value dimulai dari alamat memori 1020, maka akhir alamat memorinya adalah 1024. Sehingga ketika kita menambahkan value barum berarti kita menambahkannya pada alamat memori berikutnya yaitu 1025. Dan ini hanya membutuhkan satu steps saja.
Ketika kita menambahkan value baru diawal atau tengah array maka kita perlu menggeser data yang sudah ada pada array, sehingga membutuhkan step tambahan.

### Deletion

Operasi deletion merupakan operasi yang digunakan untuk menghilangkan value pada indeks tertentu. Operasi deletion membutuhkan jumlah N steps untuk array yang mengandung N data.

### Set

Data structure sama seperti array, tetapi perbedaanya hanya pada set yang tidak mengizinkan duplikat value dimasukkan kedalamnya. Dari ke-4 operasi reading, searching, insertion dan deleting terdapat perbedaan efisiensi pada operasi insertion. Sedangkan untuk operasi lainnya sama seperti array.

### Operasi pada Set

    1. Reading : dapat menggunakan forEach
    2. Searching : dapat menggunakan has method
    3. Deletion : dapat menggunakan method delete()
    4. Insertion : perlu beberapa step tambahan untuk memastikan bahwa value yang ingin dimasukkan tidak ada di dalam set, setelah itu operasi searching akan dijalankan terlebih dahulu untuk melihat valuenya (operasi searching bisa mencapai N steps).
