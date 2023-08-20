# VERSION CONTROL AND BRANCH MANAGEMENT(GIT)

## 1. GIT

Salah satu version control system yang populer digunakan para developer untuk mengembangkan software secara bersama-sama. Dengan adanya git membuat kita dapat berkolaborasi secara tim. GIT juga merupakan VSC yang terdistribusi bukan tersentralisasi artinya setiap orang memiliki kode program sendiri-sendiri yang dapat dimasukkan kedalam server, sehingga ketika server sedang bermasalah setiap orang dapat memperbarui datanya yang masih tersmimpan di local storage masing-masing. GIT dibuat oleh Linus Torvalds pada tahun 2005.

## 2. GIT REPOSITORY

Git repository berisi 2 hal, yaitu : folder dan files, dan history yang berisi tanggal perubahan, dirubah oleh siapa dan hal-hal lain.

## 3. GITHUB

Github merupakan salah satu Version Control System yang sering digunakan. Sehingga kita bisa melakukan kolaborasi dengan tim dalam mengerjakan suatu pekerjaan dalam dunia pemrograman.

## 4. Beberapa perintah dalam GIT

a. Git config –global user.name “kholik muzaki”

Untuk konfigurasi username pada git

b. Git config –global user.email “kholiqmuzakky01@gmail.com”

Untuk konfigurasi email pada git

c. Git clone

Untuk menduplikasi suatu project yang sudah ada di sebuah repository github. Yang harus dilakukan :
Melalui git bash

- Masuk ke sebuah folder di local storage
- Lalu klik kanan dan pilih Git bash here
- Lalu ketikan git clone link ssh yang berasal dari repository github
- Masuk ke folder yang sudah dibuat sebelumnya
- Klik kanan lalu open with visual studio code
- Buat suatu file melalui visual studio code
  Untuk memasukkan file kedalam repository perlu mengetikkan beberapa perintah diantaranya
- git add . (untuk menambhkan semua file yang akan di push),
- git commit -m “berisi pesan/inisialisasi file yang akan di push” (dapat diibaratkan file \*sudah dibungkus dalam suatu package),
- git push origin
- Maka file yang sudah dibuat akan masuk kedalam repository

d. Git diff

Untuk melihat perubahan yang dibuat sebelum di push kedalah repository.

e. Git stash

Untuk melihat seperti history yang pernah kita edit/rubah dalam sebuah file

f. File .gitignore

Berfungsi untuk memfilter file apa saja yang diperbolehkan masuk kedalam repository

## 5. THE STAGING AREA

Alur dalam suatu local storage untuk dapat masuk ke github repository itu terdapat beberapa tahapan diantaranya.

a. Working directory

Kondisi dimana file masih berasa di local storage, dan untuk masuk kedalam staging directory perlu yang dinamakan sebuah git add

b. Staging directory

Kondisi dimana file masih berada di local storage dan sudah siap untuk masuk kedalam repository, namun untuk dapat masuk kedalam repository perlu yang dinamakan git commit

c. Repository

Kondisi dimana file sudah masuk kedalam repository

## 6. INSPECTING REPOSITORY

a. Git log –oneline

Untuk menampilkan setiap commit yang sudah pernah dibuat. Setelah perintah ini diketikkan maka kita bisa melihat apa saja commit yang sudah pernah kita buat dan juga kita dapat beralih ke commit yang pernah kita buat sebelumnya dengan mengetikkan perintah git checkout nama commit yang akan dituju

b. Git reset

--soft
--hard

## 7. SYNCING

a. Git remote -v

Unutuk mengetahui link/remote dari repository

b. Git pull origin main

Digunakan untuk melakukan pull(mengembalikan) file seperti yang ada pada repository

c. Git push origin main

Digunakan untuk memindahkan file dari local storage kedalam repository

d. Git fetch

###8. BRANCHES
Branches(percabangan) dalam pembuatan github, berfungsi untuk melindungi main project yang sedang kita buat.

a. Git branch –list

Digunakan untuk melihat semua branch

b. Git branch nama branch

Digunakan untuk membuat branch baru

c. Git push -u origin nama branch

Untuk push branch baru

d. Git branch -d nama branch

Untuk menghapus branch

e. Git branch -a

Untuk melihat list remote branch

f. Git checkout nama branch

Digunakan untuk berpindah branch

g. Git merge

Untuk memindahkan suatu perubahan dari suatu beanch kedalam main. Contoh: Kita sudah membuat perubahan dan kita push kedalam branch Developer, dan file tersebut sudah fix tanpa ada kendala. Kita ingin memasukan file tersebut kedalam main repository maka tahapan yang harus dilakukan adalah :

- Masuk kedalam branch main
- Ketikkan git merge Developer
- Maka file yang ada di branch Developer sekarang sudah berada juga di main repository

## 9. PULL REQUEST

Digunakan untuk kita berkontribusi terhadap repository yang sudah ada.
Langkah-langkahnya sebagai berikut.

a. Masuk kedalam repositorynya

b. Lalu klik bagian fork

c. Setelah itu lakukan clone pada repository tersebut

d. Lalu lakukan kontribusi didalamnya

e. Lalu git add

f. Commit kearah repository kita

g. Lalu push kedalam branch fork kita sebelumnya

h. Setelah itu tinggal menunggu request disetujui oleh pemilik

i. Lalu bisa kita klik compare & pull request

j. Kita bisa menulisakn pesan kita kepada pemilik repository

k. Setelah disetujui tinggal klik bagian merge

Pull and Request dapat juga dilakukan dalam sebuah case apabila kite memiliki satu project bersama namun dalam pengembangannya dilakukan oleh beberapa collaborate, sehingga setiap collaborate mengerjakan suatu pekerjaan dalam sebuah branch baru yang nantinya dijadikan satu(merge) kedalam main branch. Adapun langkahnya sebagai berikut.

a. Create new branch

b. Lakukan changes file yang nantinya akan di merge ke branch utama

c. Commit file tersebut kedalam branch baru

d. Lakukan push kedalam repository

e. Lalu pilih pull & request untuk melakukan merge file tersebut kedalam branch utama

## 10. WORKFLOW COLLABORATION

Tujuan dari workflow collaboration bagaimana kita mengolah branch secara baik dan mengoptimalisasikan workflow dalam sebuah github. Rekomendasi yang sangat baik dalam sebuah workflow adalah Kita mempunyai branch master, lalu kita clone branch tersebut kedalah branch develop. Semua fitur dan perubahan kita kembangkan dari branch develop tersebut, ketika sudah fix baru kita merge ke branch develop dan tahap terakhir adalah kita merge ke branch master.

## 11. TIPS SEPUTAR GITHUB REPOSITORY

a. Biarkan branch master tidak terdistribusi

Buat branch baru(branch development contohnya) untuk media pengeditan, jangan mengedit langsung pada branch master

b. Hindari mengedit langsung dari branch master atau development branch

Untuk mengedit pada bagian branch developer sebaiknya dibuat branch baru lagi(feature 1, featur 2,…).

c. Merge feature yang sudah fix kedalam branch development

Untuk feature yang sudah fix, merge kedalam branch development. Jangan di merge kedalam branch master.

d. Merge pada bagian branch development kedalam branch master

Ketika semua fitur sudah di merge kedalam branch development, tahap selanjutnya adalah merge bagian branch development kedalam branch master.
