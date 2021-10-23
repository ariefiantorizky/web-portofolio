const allImage = document.querySelectorAll("img");

for (let i = 0; i < allImage.length; i++) {
    allImage[i].setAttribute("loading", "lazy");
}

CSS.registerProperty({
    name: "--p",
    syntax: "<integer>",
    initialValue: 0,
    inherits: true,
})

window.addEventListener("load", () => {
    setInterval(() => {
        document.querySelector(".loading").style.display = "none";
        document.body.classList.remove("content-loaded");
    }, 1000);
})