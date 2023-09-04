// script2.js

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector("button.btn-primary");
    const table = document.querySelector("table.table tbody");

    submitButton.addEventListener("click", function () {
        const firstName = document.querySelector("#firstName").value;
        const lastName = document.querySelector("#lastName").value;
        const userName = document.querySelector("#userName").value;
        const email = document.querySelector("#email").value;
        const gender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
        const address = document.querySelector("#address").value;
        const address2 = document.querySelector("#address2").value;
        const nationality = document.querySelector("#validationDefault04").value;

        const languages = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(function (checkbox) {
            languages.push(checkbox.nextElementSibling.textContent);
        });

        // Buat baris baru di tbody tabel dengan data yang dimasukkan oleh pengguna
        const newRow = table.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);

        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = userName;
        cell4.innerHTML = email;
        cell5.innerHTML = gender;
        cell6.innerHTML = address;
        cell7.innerHTML = address2;
        cell8.innerHTML = languages.join(", ");

        // Reset nilai input setelah ditambahkan ke dalam tabel
        document.querySelector("form").reset();
    });
});
