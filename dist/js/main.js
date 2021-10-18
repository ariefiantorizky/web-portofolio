const allImage = document.querySelectorAll("img");

for (let i = 0; i < allImage.length; i++) {
    allImage[i].setAttribute("loading", "lazy");
}