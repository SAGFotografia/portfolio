// Scroll animado al hacer clic en los enlaces del menú
document.querySelectorAll('.seccion').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth' });
    });
});

// VISOR DE IMÁGENES
let imagenesEvento = [
    ["images/1/1.webp", "images/1/3.webp", "images/1/4.webp", "images/1/5.webp", "images/1/2.webp", "images/1/6.webp", "images/1/7.webp", "images/1/8.webp", "images/1/9.webp", "images/1/10.webp"],
    ["images/2/1.webp", "images/2/2.webp", "images/2/3.webp", "images/2/4.webp", "images/2/5.webp", "images/2/6.webp", "images/2/7.webp", "images/2/8.webp", "images/2/9.webp", "images/2/10.webp"],
    ["images/3/1.webp", "images/3/2.webp", "images/3/3.webp", "images/3/4.webp", "images/3/5.webp", "images/3/6.webp", "images/3/7.webp", "images/3/8.webp"],
    ["images/4/1.webp", "images/4/2.webp", "images/4/3.webp", "images/4/4.webp", "images/4/5.webp", "images/4/6.webp", "images/4/7.webp", "images/4/8.webp"],
    ["images/5/1.webp", "images/5/2.webp", "images/5/3.webp", "images/5/4.webp", "images/5/6.webp", "images/5/7.webp"],
    ["images/6/1.webp", "images/6/3.webp", "images/6/5.webp", "images/6/6.webp", "images/6/7.webp", "images/6/8.webp", "images/6/9.webp", "images/6/10.webp", "images/6/2.webp", "images/6/4.webp"]
];

let indiceActual = 0;
let eventoActual = 0;
let estaTeclaPresionada = false; // Variable para evitar eventos duplicados

function abrirVisor(indice) {
    indiceActual = indice;
    console.log("Abriendo visor con la imagen en el índice:", indiceActual);
    document.getElementById("visorImg").src = imagenesEvento[eventoActual][indice];
    document.getElementById("visor").style.display = "flex";
}

function cerrarVisor() {
    document.getElementById("visor").style.display = "none";
}

function cambiarImagen(direccion) {
    indiceActual += direccion;

    if (indiceActual < 0) {
        indiceActual = imagenesEvento[eventoActual].length - 1;
    } else if (indiceActual >= imagenesEvento[eventoActual].length) {
        indiceActual = 0;
    }

    console.log("Cambiando a la imagen en el índice:", indiceActual);
    document.getElementById("visorImg").src = imagenesEvento[eventoActual][indiceActual];
}

// 👇 Evento para detectar las teclas de flechas e implementar la navegación por teclado
document.addEventListener("keydown", function (event) {
    if (document.getElementById("visor").style.display === "flex") {
        // Prevenir el desplazamiento en la página al presionar las flechas arriba o abajo
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
        }
        
        // Prevenir múltiples disparos de la tecla
        if (estaTeclaPresionada) return; // Si la tecla ya está presionada, no hacer nada
        
        if (event.key === "ArrowLeft") {
            cambiarImagen(-1); // Flecha izquierda: imagen anterior
        } else if (event.key === "ArrowRight") {
            cambiarImagen(1); // Flecha derecha: imagen siguiente
        } else if (event.key === "Escape") {
            cerrarVisor(); // Escape: cerrar el visor
        }
        
        // Marcar la tecla como presionada
        estaTeclaPresionada = true;
    }
});

// Evento para detectar cuando la tecla se ha soltado, permitiendo presionar la tecla nuevamente
document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        estaTeclaPresionada = false; // Permitir que se presione la tecla nuevamente
    }
});


// CAMBIO DE EVENTOS EN EL PORTAFOLIO
function cambiarEvento(evento) {
    eventoActual = evento;
    let gallery = document.querySelector('.gallery');
    gallery.innerHTML = "";
    
    imagenesEvento[eventoActual].forEach((imgSrc, index) => {
        let img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Fotografía " + (index + 1);
        img.onclick = () => abrirVisor(index);
        gallery.appendChild(img);
    });
}


