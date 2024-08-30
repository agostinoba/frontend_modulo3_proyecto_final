/*******************************************************************************/
/*                                                                             */
/*******************************************************************************/
const evImgStart = (event) => {
    let obj = event.target;
    event.dataTransfer.setData('Text', obj.getAttribute('id'));
}

const evImgDrop = (event) => {
    event.preventDefault();
    let img = event.dataTransfer.getData('Text');
    let obj = document.getElementById(img);
    event.target.innerHTML = '<img src="../img/juego-puzzle-' + img + '.png" width="275px" height="400px">';
    obj.style.display = "none";
}

const restart = () => {
    let boxes  = document.getElementsByClassName("juego-box");
    let images = document.getElementsByClassName("juego-img");

    for(let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = '<p>Arrastre y suelte la imágen aquí</p>';
    }

    for(let i = 0; i < images.length; i++) {
        images[i].style.display = "";
    }
}

const addEvents = () => {
    let boxes  = document.getElementsByClassName("juego-box");
    let images = document.getElementsByClassName("juego-img");

    for(let i = 0; i < images.length; i++) {
        images[i].addEventListener('dragstart', evImgStart);
    }

    for(let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('dragover', function(event) {
            event.preventDefault();
        }, false);

        boxes[i].addEventListener('drop', evImgDrop);
    }

    let button = document.getElementsByClassName("juego-button-restart")[0];
    button.addEventListener('click', () => {restart()});
}

addEvents();
