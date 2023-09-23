# GLOBAL STATE MANAGEMENT

Status dalam JavaScript mengacu pada semua data yang diperlukan oleh aplikasi agar dapat beroperasi. Status dapat disimpan dalam berbagai tipe data, termasuk array, boolean, string, atau angka. Dalam konteks React, status global adalah objek JavaScript yang menyimpan data yang digunakan oleh React untuk merender komponen dengan konten dinamis berdasarkan tindakan pengguna. Aplikasi dapat menggunakan status global ini dalam komponen fungsional maupun kelas. Cara transfer status ke seluruh komponen dalam aplikasi React bervariasi tergantung pada teknik manajemen status yang digunakan.

### Redux: Manajemen Status yang Populer

Pada artikel ini, kami akan membahas salah satu library manajemen status yang populer digunakan dalam React, yaitu **Redux**. Redux sangat berguna dalam situasi-situasi berikut:

1. **Banyak State yang Diperlukan di Banyak Tempat**: Ketika aplikasi memiliki banyak state yang harus diakses dari berbagai komponen.

2. **State Sering Berubah**: Jika state dalam aplikasi Anda sering berubah sebagai respons terhadap tindakan pengguna.

3. **Logika Untuk Mengubah State Kompleks**: Ketika Anda memiliki logika yang kompleks untuk mengubah state aplikasi.

4. **Ukuran Codebase yang Besar dan Dikerjakan oleh Banyak Orang**: Redux mempermudah kolaborasi dalam pengembangan aplikasi yang besar.

5. **Perlu Untuk Mengetahui Bagaimana State Diupdate Seiring dengan Waktu**: Redux menyimpan jejak perubahan state, yang berguna untuk debugging.

### Redux: Library dan Alat-alat Terkait

Dalam ekosistem Redux, terdapat beberapa library dan alat-alat yang berguna:

1. **React-Redux**: Untuk mengintegrasikan Redux dengan aplikasi React.

2. **Redux Toolkit**: Memudahkan penulisan kode Redux yang lebih efisien dan mudah dipahami.

3. **Redux DevTools Extensions**: Alat pengembangan yang membantu dalam debugging aplikasi Redux.

### Komponen Penting di Redux

Dalam Redux, terdapat tiga komponen penting:

1. **Actions**: Actions digunakan untuk mengirim informasi dari aplikasi ke store Redux.

2. **Reducer**: Reducer adalah fungsi JavaScript murni yang mengambil state aplikasi saat ini dan objek action, lalu mengembalikan state aplikasi yang terbaru.

3. **Store**: Store adalah objek sentral yang menyimpan seluruh state aplikasi.

### Memakai dan Mengubah State dalam Redux

Ada dua cara untuk menggunakan dan mengubah state dalam Redux:

1. **Hooks**: Menggunakan hooks seperti `useSelector` dan `useDispatch` untuk mengakses dan mengubah state.

2. **Connect**: Menggunakan fungsi `connect` untuk menghubungkan komponen dengan store Redux.

### Redux Thunk: Menghandle Side Effect dan Logic Async

Redux Thunk adalah middleware untuk Redux yang memungkinkan pembuatan action creator yang mengembalikan fungsi bukan action. Redux Thunk berguna dalam situasi berikut:

1. **Menghandle Side Effect Logic yang Kompleks**: Ketika Anda perlu mengatasi logika sampingan yang lebih kompleks dalam aplikasi.

2. **Logic Async Seperti Request Data**: Untuk menangani operasi asinkron seperti permintaan data melalui jaringan.

### Data Fetching dalam React

Pengambilan data (data fetching) adalah fungsi dasar untuk meminta sumber daya melalui jaringan. Ini berkaitan dengan permintaan dan tanggapan yang dapat digunakan di hampir semua jenis browser. Beberapa cara umum untuk melakukan pengambilan data dalam React adalah:

1. **Fetch API**: Menggunakan Fetch API untuk melakukan permintaan HTTP.

2. **Axios**: Menggunakan Axios, sebuah library HTTP client yang populer.

3. **React Query Library**: Menggunakan React Query untuk mengelola pengambilan data dengan baik dalam aplikasi React.

Dengan menggunakan Redux dan alat-alat terkaitnya, serta teknik-teknik pengambilan data yang sesuai, Anda dapat mengelola state aplikasi dengan lebih efisien dan efektif dalam pengembangan aplikasi React Anda.
