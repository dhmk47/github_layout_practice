const inputBox = document.querySelector(".input-box form input");
const headerInputBox = document.querySelector(".header-input-box");
const smallBox = document.querySelector(".small-box");
const spanBox = document.querySelector(".small-box span");
const addDivBox = document.querySelector(".if-check-add-readme-box");
const checkbox = document.querySelector("#add-readme-file-box");

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

checkbox.onchange = () => {
    addDivBox.classList.toggle("add-div-box");
}