// Menangani klik tombol "Submit"
document.getElementById("submitButton").addEventListener("click", function () {
  // Mengambil nilai dari input form
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var helpYou = document.getElementById("helpYou").value;

  // Membuat pesan untuk ditampilkan dalam alert
  var message = "First Name: " + firstName + "\n";
  message += "Last Name: " + lastName + "\n";
  message += "Email: " + email + "\n";
  message += "What can we help you with: " + helpYou;

  // Menampilkan pesan dalam alert
  alert(message);
});
