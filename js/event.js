// input 태그
const inputBox = document.querySelector(".input-box input");

// input태그의 조상
const headerInputBox = document.querySelector(".header-input-box");

// input박스 안에 있는 작은 div태그
const smallBox = document.querySelector(".small-box");

// 작은 div안에 있는 span 태그
const spanBox = document.querySelector(".small-box span");

// checkbox type의 input 태그
const checkbox = document.querySelector("#add-readme-file-box");

// 위 checkbox를 체크하면 나타날 div 박스
const addDivBox = document.querySelector(".if-check-add-readme-box");

inputBox.onfocus = () => {
    // 흰바탕으로 변경
    headerInputBox.classList.toggle("change-header-input-box");
    inputBox.classList.toggle("change-input-box");

    // smallBox 숨기기
    smallBox.classList.toggle("remove-small-box");
}

inputBox.onblur = () => {
    headerInputBox.classList.toggle("change-header-input-box");
    inputBox.classList.toggle("change-input-box");
    smallBox.classList.toggle("remove-small-box");
}

checkbox.onchange = () => {
    // 숨긴 div박스 나타내기
    addDivBox.classList.toggle("add-div-box");
}