function changePhone(src, color, el){

  let phone = document.getElementById("phone");
  let section = document.getElementById("section");
  let navbar = document.querySelector("header");

  /* حركة تغيير الصورة */
  phone.style.opacity = "0";

  setTimeout(() => {
    phone.src = src;
    phone.style.opacity = "1";
  }, 200);

  /* تغيير الخلفية */
  section.style.background = color;
  navbar.style.background = color;

  /* 🔥 التحكم بالوضع */
  if(color === '#f1f1f1'){
    section.classList.add("dark-text");   // الأبيض
  } else {
    section.classList.remove("dark-text"); // البرتقالي + غيره
  }

  /* 🔥 لون النيف بار */
  if(color === '#f1f1f1'){
    navbar.style.color = "#000";
  } else {
    navbar.style.color = "#fff";
  }

  /* تحديد اللون المختار */
  document.querySelectorAll(".colors img")
    .forEach(img => img.classList.remove("active"));

  el.classList.add("active");
}


