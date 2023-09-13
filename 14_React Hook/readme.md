# React Hook

### 1. Pengenalan React Hook

React Hook adalah fitur kuat yang diperkenalkan dalam React 16.8 yang memungkinkan pengembang menggunakan state dan fitur React lainnya tanpa harus menulis kelas. Ini membuat lebih mudah untuk menggunakan logika berkeadaan (stateful logic) dan efek samping (side-effects) dalam komponen fungsional. README ini akan memberikan pandangan singkat tentang React Hook dan mencakup dua aspek penting: mengimplementasikan hook useEffect dan membuat hook kustom.

### 2. Apa Itu React Hook?

React Hook adalah fungsi-fungsi yang memungkinkan Anda "hook" ke dalam fitur state dan siklus hidup (lifecycle) React dari komponen-komponen fungsional. Dengan React Hook, Anda dapat mengelola state, efek samping, dan fitur React lainnya tanpa harus menulis komponen berkelas (class component).

### 3. Beberapa React Hook yang sering digunakan adalah:

- useState: untuk mengelola state komponen.
- useEffect: untuk melakukan efek samping dalam komponen fungsional.
- useContext: untuk mengakses API konteks (context API).
- useReducer: untuk mengelola logika state yang kompleks.
- useRef: untuk mengakses dan berinteraksi dengan DOM.

### 4. Mengimplementasikan useEffect

Hook useEffect memungkinkan Anda untuk melakukan efek samping dalam komponen fungsional Anda. Efek samping bisa mencakup pengambilan data, menyiapkan langganan, atau mengubah DOM secara manual.
