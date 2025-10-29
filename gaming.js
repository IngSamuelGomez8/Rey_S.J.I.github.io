document.addEventListener("DOMContentLoaded", function () {
    const videoOverlay = document.getElementById("video-overlay");
    const video = document.getElementById("local-video");
    const cerrarBtn = document.getElementById("cerrar-video");

    // destinos
    const destinoVideo = "https://emulatorgames.onl/soccer";       // al terminar el video
    const destinoCerrar = "../Inicios/index.html";       // al presionar cerrar

    // mostrar el overlay con el video automáticamente
    if (videoOverlay && video) {
        videoOverlay.style.display = "flex";
        video.play();
        document.body.classList.add("no-scroll");
    }

    // función de redirección con un pequeño delay
    function doRedirect(url) {
        setTimeout(() => {
            window.location.href = url;
        }, 500);
    }

    // cuando el video termine → ir a Google
    if (video) {
        video.addEventListener("ended", function () {
            doRedirect(destinoVideo);
        });
    }

    // cuando se presione CERRAR → ir al Inicio
    if (cerrarBtn) {
        cerrarBtn.addEventListener("click", function (e) {
            e.preventDefault();
            doRedirect(destinoCerrar);
        });
    }
});

