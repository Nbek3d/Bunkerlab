const div = document.querySelector('.div');

function display(k = 0) {
    for (let i = 1; i < 101; i++) {
        const item = document.createElement('button');
        item.innerText = i % k == 0 ? '*' : i;
        div.append(item);
    }
}
display();

function divisible(e) {
    let k = +e.target.innerText;
    div.innerHTML = '';
    display(k);
}

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.onclick = (e) => divisible(e);
});
