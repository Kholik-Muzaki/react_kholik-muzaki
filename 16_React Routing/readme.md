# REACT ROUTING

### Routes Learning

Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA(Single Page Application). Multi Page Application(MPA) atau yang sering disebut juga dengan traditional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru. Sedangkan single page application(SPA) adalah salah satu jenis aplikasi website yang menangani semua aktivitas yang terajadi dalam aplikasi tersebut.

### Keunggulan SPA

1. Waktu loading website jauh lebih cepat
2. Tidak ada query tambahan ke server
3. Front-end yang cepat dan responsif
4. Meningkatkan pengalaman pengguna(user experience)

### Keunggulan MPA

1. SEO website akan lebih mudah dioptimasi
2. Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda
3. Mengguanakan tools analisis seperti google alnalytics yang dapat terintegrasi langsung dengan website

### Kekurangan SPA

1. Tidak bagus dalam hal SEO
2. Berat saat di load/buka pertama kali
3. Kurang aman dibanding dengan website biasa
4. Masalah kompatibilitas browser

### Kekurangan MPA

1. Kecepatan download webiste jauh lebih lama juka dibandingkan dengan single page application
2. Kamu perlu mengintegrasikan antara front-end dan back-end
3. Lebih sering membutuhkan maintenance dan update
4. Mungkin akan lebih sering menemukan masalah performa pada website

### Browser Router

BrowserRouter digunakan sebagai router yang menggunakan API History dari HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan URL. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang.

### Route

Route digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web. Attribute path merupakan url pada browser pada proses routing. Attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang di definisikan.

### Switch

Switch digunakan untuk membungkus kumpulan beberapa component route. Exact bertugas untuk memastikan route hanya merender component yang memiliki path yang cocok, jika tidak ada yang cocok maka route yang akan di render yaitu route terkahir dengan component NotFound

### Link

Link digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan di tuju. Elemen kosong <></>tersebut adalah shorthand dari <React.Fragment></React.Fragment> yang mana bisa untuk membungkus child element tanpa menambahkan node ke dalam DOM.

### Menggunakan url parameter react

Parameter url adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.

### Perbedaan Link dan Redirect

Link :

- Dapat digunakan pada kondisi apapun
- Memberikan history baru pada browser
- Bereaksi dengan click seperti a href

Redirect :

- Lebih sering digunakan pada halaman 404
- Menimpa history pada browser
- Bereaksi dengan suatu kondisi

### Hook Routing React

#### useHistory

useHistory memberi akses ke instance riwayat yang dapat anda gunakan untuk bernavigasi. Contoh :

- Length
- Go
- goBack
- goForward
- push

##### useParams

useParams mengembalikan objek pasangan kunci/nilai parameter url. Gunakan untuk mengakses math.params dari <route> saat ini.

##### useRouteMath

useRouteMath mencoba mencocokan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>

### React Routing Baru (React Router Version 6)

Beberapa fitur update yang ada di react 6, diantaranya:

1. Penanganan routing berbasis hook
2. Pengelolaan routing yang lebih terpusat
3. Penanganan error lebih baik
4. Perunbahan pada konsep penggunaan URL
