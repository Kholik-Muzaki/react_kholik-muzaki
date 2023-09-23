# GLOBAL STATE MANAGEMENT

Dalam JavaScript, status mengacu pada semua data yang dibutuhkan aplikasi agar dapat beroperasi. Status dapat disimpan dalam tipe data apa pun, termasuk array, boolean, string, atau angka. Pada React, status global adalah objek JavaScript yang menyimpan data yang digunakan oleh React untuk merender komponen dengan konten dinamis berdasarkan tindakan pengguna. Aplikasi dapat menyertakan status global ini untuk komponen fungsional dan kelas. Status dapat ditransfer ke seluruh komponen dalam aplikasi React dengan cara yang berbeda-beda bergantung pada teknik manajemen status yang digunakan.

Pada materi ini akan membahas salah satu state management library yang populer digunakan pada React, yaitu Redux.

### Kapan saat yang tepat untuk menggunakan Redux?

1. Banyak state yang perlu ditaruh di banyak tempat.
2. State pada app sering berubah.
3. Logika untuk mengubah state kompleks.
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang.
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu.

### Redux Library dan Tools

1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extensions

### Komponen Penting di Redux

1. Actions
   - Action digunakan untuk memberikan informasi dari aplikasi ke store.

2. Reducer
   - Reducer adalah pure JavaScript yang mengambil state aplikasi saat ini dan objek action lalu mengembalikan state aplikasi terbaru.

3. Store
   - Store adalah objek sentral yang menyimpan state pada aplikasi.

### Memakai dan mengubah state

Ada 2 cara memakai dan mengubah state, yaitu:

1. Hooks
2. Connect

### Redux Thunk

Redux Thunk adalah Thunk Middleware untuk Redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action.

### Kenapa perlu Redux Thunk?

1. Untuk menghandle side effect logic yang kompleks.
2. Untuk logic async seperti request data.

### Data Fetching

Data fetching adalah fungsi dasar untuk meminta sumber daya melalui jaringan, secara dasar berhubungan dengan request & response (permintaan/tanggapan) yang dapat digunakan hampir di semua jenis browser.

### Cara-cara untuk fetching data di React

1. Fetch API
2. Axios
3. React Query Library
