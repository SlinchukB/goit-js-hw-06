const textInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

textInput.oninput = function() {
  text.style.fontSize = textInput.value + "px";
};

