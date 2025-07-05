// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu-mobile di klik
document.querySelector("#menu-mobile").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk hilangin navbar
const menu = document.querySelector("#menu-mobile");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// agar pada saat memencat tombol menu (pojok kanan atas apabila di layar kecil) tidak langsung ke home.
const menuButton = document.getElementById("menu-mobile");

// Tambahkan event listener saat diklik
menuButton.addEventListener("click", function (event) {
  // Cegah link agar tidak reload atau scroll ke atas
  event.preventDefault();
});

// agar pada saat memencat feather-icon langsung ke tab baru.
document.addEventListener("DOMContentLoaded", function () {
  // Seleksi semua link dalam .social-icons
  const socialLinks = document.querySelectorAll(".social-icons a");

  socialLinks.forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // Aktifkan feather icons
  feather.replace();
});

// Form kontak with EmailJS
const btn = document.getElementById("button");

document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.innerText = "Mengirim...";

    const serviceID = "service_fv51mhn"; // Ganti dengan ID service EmailJS kamu
    const templateID = "template_o4a9ize"; // Ganti dengan ID template EmailJS kamu

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.innerText = "Kirim";
        alert("Email berhasil terkirim!");
        this.reset(); // Reset form setelah sukses
      },
      (err) => {
        btn.innerText = "Kirim";
        alert("Gagal mengirim email:\n" + JSON.stringify(err));
      }
    );
  });
