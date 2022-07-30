const allBtnLink = document.querySelectorAll(".control");
const contList = document.querySelector(".my-lists");
const allSect = document.querySelector(".section");

// Link button
contList.addEventListener("click", function (e) {
  const clicked = e.target.closest(".control");
  console.log(clicked);
  if (!clicked) return;
  allBtnLink.forEach(i => i.classList.remove("active-btn"));
  clicked.classList.add("active-btn");
});
