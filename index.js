const shareButton = document.getElementById("share-button");

const authorSection = document.querySelector(".card-footer");
const shareSection = document.querySelector(".card-share");
const computedStyle = window.getComputedStyle(shareSection);

shareButton.addEventListener("click", function () {
  if (computedStyle.display === "none") {
    console.log(shareSection.style);
    shareSection.style.display = "flex";
  } else {
    console.log(true);
    shareSection.style.display = "none";
  }
});
