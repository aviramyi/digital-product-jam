contactButton = document.querySelector("#contact button");

contactButton.addEventListener("click", function contactClickhandler(el) {
  var link = "mailto:aviram.tbj@gmail.com"
    + "&subject=" + encodeURIComponent("Hi! I want to reach out from you website")
    ;

  window.location.href = link;
});

let collapsibles = document.getElementsByClassName("collapsible");
let changeStyleButton = document.getElementsByClassName("changeStyleButton");
let resetColorButton = document.getElementsByClassName("resetColorButton");
let collapseAllButton = document.getElementsByClassName("collapseAllButton");
var expandAllButton = document.getElementsByClassName("expandAllButton");
var contents = document.getElementsByClassName("content");
var body = document.body;


let i;
for (i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let currentContent = this.nextElementSibling;
    if (currentContent.style.display === "block") {
      currentContent.style.display = "none";
    } else {
      currentContent.style.display = "block";
    }
  });
}

changeStyleButton[0].addEventListener("click", function () {
  for (let i = 0; i < contents.length; i++) {
    // Generates random color for font and background
    contents[i].style.color = Math.floor(Math.random() * 16777215).toString(16);
    contents[i].style.backgroundColor = Math.floor(Math.random() * 10) % 2 == 0 ? "#f1f1f1" : "#000000";
    body.style.backgroundColor = Math.floor(Math.random() * 16777215).toString(16);
  }
});

resetColorButton[0].addEventListener("click", function () {
  for (let i = 0; i < contents.length; i++) {
    // Restores original colors
    contents[i].style.color = "#2d2c2c";
    contents[i].style.backgroundColor = "#ffffff38";
    body.style.backgroundColor = "#ffffff";
  }
})

collapseAllButton[0].addEventListener("click", function () {
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
});;

expandAllButton[0].addEventListener("click", function () {
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "block";
  }
});;