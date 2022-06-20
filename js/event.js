const inputBox = document.querySelector(".input-box form input");
const headerInputBox = document.querySelector(".header-input-box");

inputBox.onfocus = () => {
    // inputBox.classList.toggle("change-bg-color");
    headerInputBox.classList.toggle("change-header-input-box");
    inputBox.classList.toggle("change-input-box");
}

inputBox.onblur = () => {
    // inputBox.classList.toggle("change-bg-color");
    headerInputBox.classList.toggle("change-header-input-box");
    inputBox.classList.toggle("change-input-box");
}