# Javasscript Refreshment

### Pendahuluan javascript

Javascript adalah bahasa pemrograman high-level, scripting, untyped dan interpreted atau dapat dikatakan javascript merupakan bahasa tingkat tinggi yang artinya semakin tinggi bahasa tersebut maka semakin mudah bahasa tersebut difahami oleh manusia. Scripting artinya bahasa yang dibuat untuk berinteraksi dengan halaman web. Untyped artinya tidak terpengaruh dengan tipe data. Interpreted artinya bahasanya mudah dipelajari dan juga memiliki banyak framework seperti React.JS, Vue.JS dll.

### Values

Declaration adalah proses pembuatan variable utuk menyimpan data. Scoping adalah menentukan dimana variable, fungsi dan objek diatur dan dapat diakses dalam kode kita. Ini berarti ruang lingkup variable dikedalika oleh lokasi deklarasi variable. Hoisting adalah membuat beberapa jenis variable atau fungsi dapat diakses / digunakan dalam kode sebelum dideklarasikan.
Dari beberapa pegertian diatas dapat dispesifikasikan bahwa :

- Deklarasi var dan functionn adalah hoisted, oleh karena itu mereka dapat digunakan bahkan sebelum deklarasi itu sendiri terjadi
- Sedangkan let dan const tidak hoisted, oleh karena itu mereka tidak dapat digunakan bahkan sebelum dekalarasi terjadi

### Understanding Variable

    #### Values and References

Primitive dalam pemrograman adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman. Primitive dapat berupa : String, Boolean, number, bigint, undefined, null dan symbol. Sedangkan object adalah unit yang menyimpan properti dan fungsi (method). Object dapat berupa : object, array, function, date, set, map, weak set, dan weak map. Aturan sederhana untuk meneruskan nilai adalah bahwa semua nilai primitif dalam javascript diteruskan oleh nilai. Sedangkan references bagaimanapun, akan memberikan references yang sama.

### Destructuring

Destructuring adalah ekspresi dari javascript yang memungkinkan untuk menyalin nilai dari array, atau properti dari object kedalam variable yang berbeda. Spread Syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam semacam daftar.

### Method

    #### Method pada array

Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya sesederhana mungkin sesuai kegunaan masing-masing. Beberapa klasifikasi dalam method, diantaranya :

1. Concat
   Menggabungkan dua atau lebih array, dan mengembalikan salianan array yang digunakan.
2. Map
   Membuat array baru dengan hasil fungsi untuk setiap elemen array
3. Foreach
   Memanggil fungsi untuk setiap elemen array
4. Slice
   Memilih bagian dari array dan mengembalikan array baru
5. Filter
   Membuat array baru dengan setiap elemen dalam array yang lulus seleksi
6. Reduce
   Melakukan operasi pada setiap elemen array menjadi nilai tunggal (dari kiri ke kanan)

### Control Flow

Normal flow merupakan pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan. Sedangkan control flow itu sendiri merupakan mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita. Beberapa hal yang perlu diperhatikan dalam control flow:

1. Pengulangan (Loop/Iterasi)
   Bisa menggunakan for, while, do while
2. Pengkodisian (percabangan)
   Bisa menggunakan if else, switch, block, try ctach, breakm continue, dan throw
3. Try catch
   Tru bertugas mengeksekusi statement didalam arraynya, sedangkan catch bertugas menagkap error yang terjadi padas statement didalam try
4. Throw
   Throw terjadi didalam block try, bertugas melemparkan error sesuai kondisi yang diinginkan, error itu akan ditangkap oleh catch

### Function

    Function didalam javascript adalah sebuah object, karena memiliki properti dan juga method. Funtion didalam javascript digunakan untuk melakukan serangkaian komputasi / prosedur yang dapat digunakan berulang kali.

### Class

    Class adalahh protoype dari suatu object yang akan kita buat. Constructor adalah method di dalam class yang akan selalu terpanggil pertama kali ketika mmebuat object. Method adalah sebuah fungsi yang berada di dalam class. Dan attributes adlah kumpulan variable yang membentuk object yang dimiliki oleh suatu class. Sedangkan digunakan untuk membuat kelas anak dari kelas induk. Kelas anak mewarisi semua atribut dan metode dari kelas induk.

### Async Wait

    Synchronus mengkeksekusi setiap perintah satu persatu sesuai urutan kode yang dituliskan. Output dari suatu kode seduai dengan urutanm karena setiap perintah harus menuggu perintah sebelumnya selasi. Asynchronus hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetpai berdasarkan waktu proses. setTimeout digunakan untuk menunda eksekusi, karena ada salah satu eksekusi membutuhkan proses yang agak lama, sembari menunggu proses tersebut javascript mengeksekusi perintah selanjutnya.
    Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain atau callback adalh fungsi yang dieksekusi setelah fungsi lain selesai dijalankan. Promise adlah object yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronus dimasa mendatang.
    Asynchronus function adlah sebuah function yang bekerja secara asynchronus yang menghasilkan promise sebagai return valuenya, tetapi cara penulisan codenya menggunakan penulisan yang synchronus(standar). Await adalah sebuah keyword yang terdapat pada async function yang tujuannya mengehentikan eksekusi sambil menunggu promissenya selesai.

### DOM (Document Object Model)

    Document object model adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object
