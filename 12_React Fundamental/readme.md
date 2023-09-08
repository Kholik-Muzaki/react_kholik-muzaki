# REACT FUNDAMENTAL

### Apa itu JSX?

JSX adalah singkatan dari Javascript XML, yang merupakan ekstensi dari javascript. JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI (Separation of technology -> Separation of concerns). Kita tidak harus menggunakan JSX, namun JSX memudahkan kita menulis aplikasi react. Pada JSX kita juga bisa untuk menulisakn ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal. Selain itu, setelah dikompilasi, ekspresi JSX akan menjadi panggilan fungsi javascript biasa dan menjadi objek javascript.

### Spesifikasi jenis elemen react

    - Kapitalisasi untuk komponen react
    - Huruf kecil (lowercase) untuk komponen bawaan

### Menentukan atribut dengan JSX

    - Tanda kutip untuk menentukan string literal
    - Kurung kurawal untuk menyematkan ekspresi javascript
    - React DOM menggunakan camelCase sebagai konvensi penamaan

### Menspesifikasikan elemen anak dengan JSX

Jika tag bersifat kosong (tidak memiliki elemen anak), kita bisa saja menutupnya secara langsung dengan />
Pengenalan React Komponen
Komponenn React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI.

### Komposisi Komponen(Component Composite) dan Props

Props adalah singkatan dari properties, membuat kita dapat memberikan argumen / data pada component. Props juga membantu untuk membuat komponen menjadi lebih dinamis. Props dioper ke component sama seperti memberikan atribut pada tag HTML. Props pada component adalah read-only dan tidak dapat diubah.

### React Lifecycle

Lifecycle methid yang umum diantaranya :

1. render()
   Merupakan fungsi yang paling sering dipakai. Render() juga memiliki required pada class component, serta pure function, artinya tidak boleh ada setState()

2. componentDidMount()
   Dipanggil ketika komponen sudah di render untuk pertama kali, componentDidMount() juga merupakan tempat yang tepat untuk pemanggilan API dan juga boleh memiliki setState()

3. componentDidUpdate()
   Dipanggil ketika terjadi update (props atau state berubah)

4. componentWillUnmount()

   Dipanggil ketika component akan dihancurkan dan sangat cocok untuk clean up actions

Selain ke-4 lifcycle yang ada diatas, tedapat beberapa lifecycle yang lain, diantaranya :

1. shouldComponentUpdate()
2. staic getDerivedStateFromProps()
3. getSnapshotBeforeUpdate()

### Condition dan list

### Render bersyarat dan list

Pada react kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi kita. - Menggunakan if - Inline if dengan operator && - Inline if-else dengan ternary conditional operator - Mencegah komponen untuk rendering

### Render list

Kita dapat membangun koleksi dari beberapa elemen dan menyertakan dalam JSX menggunakan tanda kurung kurawal{}.
Key
Key membantu react untuk mengidentifikasi item mana yang telah diubah, ditambahkan atau dihilangkan.

### Directory Structure

React tidak memiliki pendapat (unopinionated) tentang bagaimana cara memasukan file ke folder. Directory structure dibagi menjadi 2, yaitu:

1. Pengelompokan berdasarkan fitur atur rute
2. Pengelompokan berdasarkan jenis file

Hal-hal yang perlu diperhatikan dalam data structure:

1. Hindari terlalu banyak nesting
2. Jangan terlalu memikirkannya

### Styling inline

Ada beberapa styling yang sering digunakan, diantaranya:

1. Classes dan CSS
2. Atribut style
3. Modul CSS
