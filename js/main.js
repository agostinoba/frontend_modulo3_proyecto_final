const headerOpacity = () => {
    const navi = document.querySelector('nav');
    let opacityHeader = "#FFFFFF00";
    if(document.documentElement.scrollTop > 580) {
        /* PARA ESTE CASO TAMBIEN TENGO QUE MODIFICAR EL COLOR DE LA LETRA */
        opacityHeader = "#FFFFFFFF";
    }
    else if (document.documentElement.scrollTop > 300) {
        opacityHeader = "#FFFFFF9F";
    }
    else if (document.documentElement.scrollTop > 100) {
        opacityHeader = "#FFFFFF5F";
    }
    navi.style.backgroundColor = opacityHeader;
}

/* FUNCION PARA CAMBIAR LA IMAGEN DE FONDO. ROMPE TODO
// const setHeaderBackground = (backgroundPath) => {
const setHeaderBackground = () => {
    let header = document.querySelector('header');
    // header.style.backgound = url(backgroundPath) 50% 0 fixed;
    header.style.backgound = url(../img/base-background.jpg) 50% 0 fixed;
}
// setHeaderBackground(../img/base-background.jpg);
*/

const init = () => {
    let body = document.getElementsByTagName('body')[0];
    body.onscroll = () => {headerOpacity()};
}

init();
