// Variables
const figura1 = document.querySelector('.Figura1');
const figura2 = document.querySelector('.Figura2');
const figura3 = document.querySelector('.Figura3');
const figura4 = document.querySelector('.Figura4');
const figura5 = document.querySelector('.Figura5');

/* FUNCION Animar
    Activa o desactiva la animacion segun el objeto correspondiente
    @params figura: objeto a animar. num: el objeto especifico
*/
function Animar(figura, num) {
    if (figura.classList.contains(`Animar_f${num}`)) {
        figura.classList.remove(`Animar_f${num}`);

        setTimeout(() => {
            figura.classList.add(`Animar_f${num}`);
        }, 100);
    }
    else {
        figura.classList.add(`Animar_f${num}`);
    }
}

// Listeners de click para poder activar las animaciones-ñ
figura1.addEventListener('click', () => {
    Animar(figura1, 1);
});

figura2.addEventListener('click', () => {
    Animar(figura2, 2);
});

figura3.addEventListener('click', () => {
    Animar(figura3, 3);
});

figura4.addEventListener('click', () => {
    Animar(figura4, 4);
});

figura5.addEventListener('click', () => {
    Animar(figura5, 5);
});
