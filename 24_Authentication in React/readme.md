# AUTHENTICATION IN REACT

Authentication merupakan fungsi menentukan hak akses/hak istimewa terhadap sumber daya, yang berkaitan dengan keamanan informasi umum dan keamanan komputer, dan kontrol akses pada khususnya. Secara lebih formal, "mengotorisasi" berarti mendefinisikan kebijakan akses.

### Cara Kerja Autentikasi

1. User melakukan registrasi terlebih dahulu (seperti mengisi username, password, dan email).
2. Server akan memberikan response sukses ketika user sudah berhasil registrasi.
3. User akan melakukan proses login dengan memasukkan username dan password yang sudah dibuat.
4. Kemudian server akan mencocokan data yang kita kirim dengan database pengguna milik mereka.
5. Apabila data yang dimasukkan cocok, maka akses login akan langsung diberikan, dan sistem akan mencatat aktivitas login kita. Tetapi, apabila tidak ada kecocokan data, maka permintaan akses kita ditolak.
6. Kemudian, jika kita mencoba berulang kali, biasanya akan terjadi blokir sementara karena dianggap sebagai aktivitas yang mencurigakan, seperti pembobolan akun.

## Login pada React

Dalam keamanan komputer, login adalah proses di mana seseorang memperoleh akses ke sistem komputer dengan mengidentifikasi dan mengautentikasi dirinya sendiri.
