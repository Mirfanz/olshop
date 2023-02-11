import Cookies from "js-cookie";
import React from "react";
import Swal from "sweetalert2";

const logout = () => {
  Cookies.remove("token");
  Swal.fire({
    title: "Anda telah logout",
    text: "Terimakasih telalh menggunakan aplikasi kami, semoga hari anda cerah. Jangan lupa untuk makan ya!!",
    icon: "success",
  });
  return <div>logout</div>;
};

export default logout;
