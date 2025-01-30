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
    ["images/1/1.JPG", "images/1/3.JPG", "images/1/4.JPG", "images/1/5.JPG", "images/1/2.JPG", "images/1/6.JPG", "images/1/7.JPG", "images/1/8.JPG", "images/1/9.JPG", "images/1/10.JPG"],
    ["images/2/1.JPG", "images/2/2.jpg", "images/2/3.JPG", "images/2/4.JPG", "images/2/5.JPG", "images/2/6.jpg", "images/2/7.jpg", "images/2/8.JPG", "images/2/9.JPG", "images/2/10.JPG"],
    ["images/3/1.JPG", "images/3/2.jpg", "images/3/3.jpg", "images/3/4.jpg", "images/3/5.JPG", "images/3/6.JPG", "images/3/7.jpg", "images/3/8.JPG"],
    ["images/4/1.jpg", "images/4/2.jpg", "images/4/3.jpg", "images/4/4.jpg", "images/4/5.jpg", "images/4/6.jpg", "images/4/7.jpg", "images/4/8.jpg"],
    ["images/5/1.jpg", "images/5/2.JPG", "images/5/3.JPG", "images/5/4.JPG", "images/5/6.JPG", "images/5/7.JPG"],
    ["images/6/1.JPG", "images/6/3.JPG", "images/6/5.JPG", "images/6/6.JPG", "images/6/7.JPG", "images/6/8.jpg", "images/6/9.JPG", "images/6/10.JPG", "images/6/2.JPG", "images/6/4.jpg"]
];

let indiceActual = 0;
let eventoActual = 0;

function abrirVisor(indice) {
    indiceActual = indice;
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
    document.getElementById("visorImg").src = imagenesEvento[eventoActual][indiceActual];
}

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

