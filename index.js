const shareButton = document.getElementById("share-button");

const authorSection = document.querySelector(".card-footer");
const shareSection = document.querySelector(".card-share");
const computedStyle = window.getComputedStyle(shareSection);
const path = document.querySelector(".share svg path");

shareButton.addEventListener("click", function () {
  if (computedStyle.display === "none") {
    shareSection.style.display = "flex"; // show card share
    shareButton.classList.add("share-active"); // change button background color
    path.setAttribute("fill", "white");

    shareSection.classList.add("show"); // add animation
  } else {
    shareSection.style.display = "none"; // hide card share
    shareButton.classList.remove("share-active");
    path.setAttribute("fill", "#6E8098");

    shareSection.classList.remove("show")
  }
});
