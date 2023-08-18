const buttons = document.getElementsByTagName("button");

function applyHoverEffect(event) {
  event.target.style.backgroundColor = "yellow";
  event.target.style.color = "black";
}

function removeHoverEffect(event) {
  event.target.style.backgroundColor = "rgb(59 130 246)";
  event.target.style.color = "black";
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseenter", applyHoverEffect);
  buttons[i].addEventListener("mouseleave", removeHoverEffect);
}
