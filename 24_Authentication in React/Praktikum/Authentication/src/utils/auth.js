import Cookies from "js-cookie";

const auth = {
  isAuthorized() {
    return Cookies.get("token") ? true : false;
  },
  storeAuthCredential(token) {
    Cookies.set("token", token, { expires: 1 }); // Simpan token dalam cookie dengan masa berlaku 1 hari (sesuaikan sesuai kebutuhan)
  },
  logout() {
    Cookies.remove("token");
    window.location.href = "/";
  },
};

export default auth;
