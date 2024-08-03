const shareButton = document.getElementById("share-button");

const authorSection = document.querySelector(".card-footer");
const shareSection = document.querySelector(".card-share");

shareButton.addEventListener("click", function () {
  authorSection.style.display = "none";
  shareSection.style.display = "flex";
});

const activeShareButton = document.getElementById("button-active");

activeShareButton.addEventListener("click", function () {
  shareSection.style.display = "none";
  authorSection.style.display = "flex";
});
