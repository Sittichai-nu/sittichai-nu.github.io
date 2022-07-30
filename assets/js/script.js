const allBtnLink = document.querySelectorAll(".control");
const contList = document.querySelector(".my-lists");
const allSect = document.querySelectorAll(".section");

// Link button
contList.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".control");
  console.log(clicked);
  if (!clicked) return;

  //Remove activate tab
  allBtnLink.forEach((i) => i.classList.remove("active-btn"));
  allSect.forEach((i) => i.classList.remove("section-active"));


  // Activate tab
  clicked.classList.add("active-btn");
  document
    .querySelector(`.operetor__section--${clicked.dataset.tab}`)
    .classList.add("section-active");
});
