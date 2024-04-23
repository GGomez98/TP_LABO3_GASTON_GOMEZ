console.log("Cargando la pagina")

document.addEventListener("DOMContentLoaded",onInit);

let viviendas = [
    {
        id: 1,
        titulo: "Casa de Lujo en el Lago",
        imagen : "./images/anuncio1.jpg",
        descripcion: "Casa en el lago con excelente vista, acabados de lujo a un excelente precio",
        precio: 350000,
        banios:3,
        garages: 3,
        habitaciones: 4
    },
    {
        id: 1,
        titulo: "Casa terminados de lujo",
        imagen : "./images/anuncio2.jpg",
        descripcion: "Casa con diseño moderno, así como tecnología inteligente y amueblada",
        precio: 275000,
        banios:3,
        garages: 3,
        habitaciones: 4
    },
    {
        id: 1,
        titulo: "Casa con Pileta",
        imagen : "./images/anuncio3.jpg",
        descripcion: "Casa con pileta y acabados de lujo en la ciudad, excelente oportunidad",
        precio: 250000,
        banios:3,
        garages: 3,
        habitaciones: 4
    }
]

function onInit(){
    console.log("Entro al init");
    cargarPropiedades(viviendas);
}

function cargarPropiedades(propiedades){
    propiedades.forEach(element => {
        let sectionCasas = document.getElementById("anuncios")
        let casa = document.createElement("div");
        let foto = document.createElement("img");
        let nombre = document.createElement("h3");
        let descripcion = document.createElement("p");
        let verPropiedad = document.createElement("a");
        let detalles = document.createElement("div");
        let precio = document.createElement("p");
        let cuartos = document.createElement("div");
        let detBanios = document.createElement("div");
        let iconBanios = document.createElement("img");
        let cantBanios = document.createElement("p");
        let detGarage = document.createElement("div");
        let iconGarage = document.createElement("img");
        let cantGarage = document.createElement("p");
        let detDorm = document.createElement("div");
        let iconDorm = document.createElement("img");
        let cantDorm = document.createElement("p");
        detalles.className = 'casa-detalles'
        casa.className = 'casa';
        casa.id = element.id;
        foto.src = element.imagen;
        nombre.textContent = element.titulo;
        descripcion.textContent = element.descripcion;
        precio.textContent = `U$S${element.precio}`;
        precio.classList = "precio";
        cuartos.id = "cuartos";
        detBanios.classList= "cuartos";
        iconBanios.src = "./images/icono_wc.svg";
        cantBanios.textContent = element.banios;
        cuartos.appendChild(detBanios);
        detBanios.appendChild(iconBanios);
        detBanios.appendChild(cantBanios);
        detGarage.classList= "cuartos";
        iconGarage.src = "./images/icono_estacionamiento.svg";
        cantGarage.textContent = element.garages;
        cuartos.appendChild(detGarage);
        detGarage.appendChild(iconGarage);
        detGarage.appendChild(cantGarage);
        detDorm.classList= "cuartos"
        iconDorm.src = "./images/icono_dormitorio.svg";
        cantDorm.textContent = element.habitaciones;
        cuartos.appendChild(detDorm);
        detDorm.appendChild(iconDorm);
        detDorm.appendChild(cantDorm);
        verPropiedad.textContent = "Ver Propiedad";
        verPropiedad.href="";
        casa.appendChild(foto);
        detalles.appendChild(nombre);
        detalles.appendChild(descripcion);
        detalles.appendChild(precio);
        detalles.appendChild(cuartos);
        detalles.appendChild(verPropiedad);
        casa.appendChild(detalles);
        sectionCasas.appendChild(casa);
    });
}