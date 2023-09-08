document.addEventListener("DOMContentLoaded", function () {
  const productNameInput = document.getElementById("product-name");
  const productCategorySelect = document.getElementById("product-category");
  const productImageInput = document.getElementById("product-image");
  const productFreshnessInputs = document.querySelectorAll('input[name="flexRadioDefault"]');
  const additionalDescriptionTextarea = document.getElementById("textarea");
  const productPriceInput = document.querySelector("input[aria-label='Amount (to the nearest dollar)']");
  const submitButton = document.querySelector("button[type='submit']");
  const form = document.querySelector("form");

  // Data produk yang akan ditampilkan di tabel
  const productList = [];

  // Memperbarui tabel produk
  function updateProductTable() {
    const table = document.querySelector(".table");
    table.innerHTML = "";

    if (productList.length === 0) {
      table.innerHTML = "<p>No products available.</p>";
      return;
    }

    // Header tabel
    const tableHeader = `
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Category</th>
          <th>Image</th>
          <th>Freshness</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
    `;
    table.innerHTML += tableHeader;

    // Menambahkan setiap produk ke tabel
    const tableBody = document.createElement("tbody");
    for (const product of productList) {
      const row = document.createElement("tr");
      const { productName, productCategory, productImage, productFreshness, additionalDescription, productPrice } = product;
      row.innerHTML = `
        <td>${productName}</td>
        <td>${productCategory}</td>
        <td>${productImage}</td>
        <td>${productFreshness}</td>
        <td>${additionalDescription}</td>
        <td>$${productPrice}</td>
      `;
      tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
  }

  // Validasi form
  function validateForm() {
    const productName = productNameInput.value;
    const productCategory = productCategorySelect.value;
    const productImage = productImageInput.value;
    const productFreshness = Array.from(productFreshnessInputs).find(input => input.checked);
    const additionalDescription = additionalDescriptionTextarea.value;
    const productPrice = productPriceInput.value;

    // Validasi Product Name
    const isProductNameValid = productName.trim() !== "" && productName.length <= 25 && !/[@#{}]/.test(productName);

    if (!isProductNameValid) {
      alert("Product Name must not contain symbols.");
      return false;
    }

    // Validasi Product Category
    const isProductCategoryValid = productCategory !== "";

    // Validasi Product Image (Tambahkan validasi tambahan jika diperlukan)
    const isProductImageValid = productImage.trim() !== "";

    // Validasi Product Freshness
    const isProductFreshnessValid = !!productFreshness;

    // Validasi Additional Description
    const isAdditionalDescriptionValid = additionalDescription.trim() !== "";

    // Validasi Product Price
    const isProductPriceValid = productPrice.trim() !== "";

    // Beri atau hilangkan border merah pada input sesuai validasi
    productNameInput.style.border = isProductNameValid ? "" : "1px solid red";
    productCategorySelect.style.border = isProductCategoryValid ? "" : "1px solid red";
    productImageInput.style.border = isProductImageValid ? "" : "1px solid red";
    additionalDescriptionTextarea.style.border = isAdditionalDescriptionValid ? "" : "1px solid red";
    productPriceInput.style.border = isProductPriceValid ? "" : "1px solid red";

    // Kembalikan apakah form valid secara keseluruhan
    return (
      isProductNameValid &&
      isProductCategoryValid &&
      isProductImageValid &&
      isProductFreshnessValid &&
      isAdditionalDescriptionValid &&
      isProductPriceValid
    );
  }

  // Event listener untuk input pada form
  form.addEventListener("input", function () {
    submitButton.disabled = !validateForm();
  });

  // Event listener untuk submit form
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form standar

    const isValid = validateForm();

    if (isValid) {
      // Mengambil data yang telah divalidasi
      const productName = productNameInput.value;
      const productCategory = productCategorySelect.options[productCategorySelect.selectedIndex].text;
      const productImage = productImageInput.value;
      const productFreshness = Array.from(productFreshnessInputs).find(input => input.checked).id;
      const additionalDescription = additionalDescriptionTextarea.value;
      const productPrice = productPriceInput.value;

      // Menambahkan data produk ke daftar produk
      productList.push({ productName, productCategory, productImage, productFreshness, additionalDescription, productPrice });

      // Menampilkan data produk dalam tabel
      updateProductTable();

      // Mereset form
      form.reset();
    }
  });

  // Menghapus produk berdasarkan nama produk
  function deleteProduct(productName) {
    const index = productList.findIndex(product => product.productName === productName);
    if (index !== -1) {
      productList.splice(index, 1);
      updateProductTable();
    }
  }

  // Mencari produk berdasarkan nama produk
  function searchProduct(productName) {
    const filteredProducts = productList.filter(product => product.productName.toLowerCase().includes(productName.toLowerCase()));
    if (filteredProducts.length === 0) {
      alert("No matching products found.");
    } else {
      productList.length = 0; // Mengosongkan productList
      productList.push(...filteredProducts); // Menambahkan hasil pencarian ke productList
      updateProductTable();
    }
  }

  // Event listener untuk tombol "Deletion"
  document.getElementById("deleteButton").addEventListener("click", function () {
    const productName = prompt("Enter the name of the product you want to delete:");
    if (productName) {
      deleteProduct(productName);
    }
  });

  // Event listener untuk tombol "Search"
  document.getElementById("searchButton").addEventListener("click", function () {
    const searchInput = document.getElementById("searchInput").value;
    if (searchInput) {
      searchProduct(searchInput);
    }
  });

  // Memanggil fungsi updateProductTable saat halaman dimuat
  updateProductTable();
});
