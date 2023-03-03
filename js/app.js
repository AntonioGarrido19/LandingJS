let amesti = document.getElementById('inicio')

let nosotros = document.getElementById('target1');

let nuestrosProductos = document.getElementById('target2');

let masVendidos = document.getElementById('target3');

let contacto = document.getElementById('target4');


function scrollAmesti() {
    var llevame = amesti;
    llevame.scrollIntoView({ behavior: 'smooth' });
}


function scrollNosotros() {
    var llevame = nosotros;
    llevame.scrollIntoView({ behavior: 'smooth' });
}


function scrollNuestrosProductos() {
     var llevame = nuestrosProductos; 
     llevame.scrollIntoView({ behavior: 'smooth' }); 
    }


function scrollMasVendidos() {
    var llevame = masVendidos; 
    llevame.scrollIntoView({ behavior: 'smooth' });
}

function scrollContacto() { 
    var llevame = contacto; 
    llevame.scrollIntoView({ behavior: 'smooth' }); 
}

const hamburguer = document.querySelector (".ham");
const navMenu = document.querySelector (".enlaces__nav__container");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav__a").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active")
    navMenu.classList.remove("active")
}))