function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


let corpo = document.querySelector('#corpo');
let h1 = document.querySelector('#drag1');

// if (corpo = h1) {
//     location.reload();
// }