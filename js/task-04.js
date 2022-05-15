
let counterValue = document.querySelector("#value").textContent;
counterValue = 0;
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");

const OndecrementBtnClick = () => {
    document.querySelector("#value").textContent = counterValue -= 1;
};

const OnincrementBtnClick = () => {
    document.querySelector("#value").textContent = counterValue += 1;
};

decrementBtn.addEventListener("click", OndecrementBtnClick);
incrementBtn.addEventListener("click", OnincrementBtnClick);


