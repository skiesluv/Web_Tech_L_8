let xhrLviv = new XMLHttpRequest();
const lv = document.getElementById("test");

function lvivText() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'lviv.txt', false);

    xhr.send();
    lv.innerHTML = xhr.response;
}

function lnuText() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'lnu.txt', false);

    xhr.send();
    lv.innerHTML = xhr.response;
}

