let button_play  = document.querySelector("#button-play" );
let button_pause = document.querySelector("#button-pause");

let video        = document.querySelector("video" );

let video_time;

const video_duration = () => {
    /* Obtengo el tiempo de reproducción y la duración total del video. */
    let total   = video.duration;
    let current = video.currentTime;

    /* Calculo los minutos y segundos. */
    let minutes = Math.trunc(total / 60);
    let seconds = Math.trunc(total % 60);

    /* Guardo el tiempo total Min:Sec agregando ceros para el formato. */
    total       = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

    /* Calculo los minutos y segundos. */
    minutes     = Math.trunc(current / 60);
    seconds     = Math.trunc(current % 60);

    /* Guardo el tiempo reproducido Min:Sec agregando ceros para el formato. */
    current     = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

    document.querySelector(".historia-video-time").textContent = current + " / " + total;
}


button_play.addEventListener('click', () => {
    video.play();
    video_time = setInterval(() => {
        video_duration();
    }, 1000);
});

button_pause.addEventListener('click', () => {
    video.pause();
    clearInterval(video_time);
});

/* ACA TENGO QUE CORREGIR QUE ME ARRANCA CON "00:00 / NaN:NaN" PERO SI LO SIGO PASO
 * A PASO ME APARECEN BIEN LOS NUMEROS. */
video_duration();

//button_mute.addEventListener('click', () => {
//    video.muted = video.muted ? false : true;
//});
