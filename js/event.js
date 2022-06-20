const inputBox = document.querySelector(".input-box form input");
const headerInputBox = document.querySelector(".header-input-box");
const smallBox = document.querySelector(".small-box");
const spanBox = document.querySelector(".small-box span");

inputBox.onfocus = () => {
    headerInputBox.classList.toggle("change-header-input-box");
    inputBox.classList.toggle("change-input-box");
    smallBox.classList.toggle("remove-small-box");
    spanBox.classList.toggle("remove-span-box");
}

inputBox.onblur = () => {
    headerInputBox.classList.toggle("change-header-input-box");
    inputBox.classList.toggle("change-input-box");
    smallBox.classList.toggle("remove-small-box");
    spanBox.classList.toggle("remove-span-box");
}