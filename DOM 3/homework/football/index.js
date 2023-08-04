const ball=document.querySelector('.ball');
const footballImg=document.querySelector('.football');

function footBall(event){
    const rect = footballImg.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element.
    const y = event.clientY - rect.top;  // y position within the element.
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    console.log(event);
}

footballImg.onclick = (e) => footBall(e);

