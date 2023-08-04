const img = document.querySelector('#imgTr');
const ul = document.querySelector('ul');
const imgX = document.querySelectorAll('.imgX');
img.onclick = imgBtn;
let btnClick = false;

imgX.forEach(btn => {
    btn.onclick = xBtn
})

function imgBtn() {
    if (btnClick) {
        img.style.transform = `rotate(0deg)`;
        btnClick = !btnClick;
        ul.style.display = "none"
    }
    else {
        img.style.transform = `rotate(90deg)`;
        btnClick = !btnClick
        ul.style.display = "block"
    }
}

function xBtn() {

    this.parentElement.style.display = "none"

}