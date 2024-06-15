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

let comentarios = [
    {
        autor: "Juan Perez",
        comentario: "El personal se comporto de una excelente forma, muy buena atencion y la casa que me ofrecieron cumple con todas mis expectativas."
    }
]

let blogs = [
    {
        titulo: "Terraza en el techo de tu casa",
        img: "./images/blog1.jpg",
        fecha: "20/10/2019",
        autor: "Admin",
        descripcion: "Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero"
    },
    {
        titulo: "Guía para la decoración de tu hogar",
        img: "./images/blog2.jpg",
        fecha: "20/10/2019",
        autor: "Admin",
        descripcion: "Maximiza el espacio de tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio" 
    }
]

function onInit(){
    console.log("Entro al init");
    cargarPropiedades(viviendas);
    cargarComentarios(comentarios);
    cargarBlogs(blogs)
    cargarFooter();
}

function cargarPropiedades(propiedades){
    let sectionCasas = document.getElementById("anuncios")
    propiedades.forEach(element => {
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
        casa.className = 'casa card';
        casa.id = element.id;
        foto.src = element.imagen;
        nombre.textContent = element.titulo;
        nombre.classList = 'card-title'
        descripcion.textContent = element.descripcion;
        precio.textContent = `U$S${element.precio}`;
        precio.classList = "precio";
        cuartos.id = "cuartos";
        detBanios.classList= "cuartos";
        iconBanios.src = "images/icono_wc.svg";
        cantBanios.textContent = element.banios;
        detGarage.classList= "cuartos";
        iconGarage.src = "images/icono_estacionamiento.svg";
        cantGarage.textContent = element.garages;
        detDorm.classList= "cuartos"
        iconDorm.src = "images/icono_dormitorio.svg";
        cantDorm.textContent = element.habitaciones;
        verPropiedad.textContent = "Ver Propiedad";
        verPropiedad.classList = 'text-decoration-none text-white'
        verPropiedad.href="";

        cuartos.appendChild(detBanios);
        detBanios.appendChild(iconBanios);
        detBanios.appendChild(cantBanios);
        cuartos.appendChild(detGarage);
        detGarage.appendChild(iconGarage);
        detGarage.appendChild(cantGarage);
        cuartos.appendChild(detDorm);
        detDorm.appendChild(iconDorm);
        detDorm.appendChild(cantDorm);
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

function cargarComentarios(lista){
    let sectionComentarios = document.getElementById("comentarios")
    lista.forEach(element => {
        let comentario = document.createElement('div');
        let comText = document.createElement('p');
        let comAutor = document.createElement('p');
        let comilla = document.createElement('img')

        comentario.classList = 'comentario';
        comilla.src = './images/comilla.svg';
        comText.id = 'com-text'
        comAutor.id = 'com-aut'
        comText.textContent = element.comentario;
        comAutor.textContent = `-${element.autor}`;
        sectionComentarios.appendChild(comentario);

        comentario.appendChild(comilla);
        comentario.appendChild(comText);
        comentario.appendChild(comAutor);

    });
}

function cargarBlogs(lista){
    let sectionBlogs = document.getElementById('blog')
    lista.forEach(element =>{
        let blog = document.createElement('div');
        let datos = document.createElement('div');
        let imagen = document.createElement('img');
        let titulo = document.createElement('h3');
        let separador = document.createElement('div');
        let autorYFecha = document.createElement('p');
        let fecha = document.createElement('p');
        let autor = document.createElement('p');
        let descripcion = document.createElement('p');

        blog.classList = 'blog';
        datos.classList = 'datos-blog';
        imagen.src = element.img;
        titulo.textContent = element.titulo;
        separador.classList = 'separador'
        autorYFecha.classList = "fecha-y-autor";
        fecha.textContent = element.fecha;
        fecha.classList = "fecha-blog";
        autor.textContent = element.autor;
        autor.classList = "autor-blog";
        autorYFecha.innerHTML = `Escrito el:<span style="color: #E08709; margin-left:2%; margin-right:2%;">${fecha.innerText}</span> por:<span style="color: #E08709;margin-left:2%; margin-right:2%;">${autor.innerText}</span>`;
        descripcion.textContent = element.descripcion ;

        sectionBlogs.appendChild(blog);
        blog.appendChild(imagen);
        blog.appendChild(datos);
        datos.appendChild(titulo);
        datos.appendChild(separador);
        datos.appendChild(autorYFecha);
        datos.appendChild(descripcion);
    })
}

function getYear(){
    let fecha = new Date();
    return fecha.getFullYear();
}

function cargarFooter(){
    let footer = document.getElementById("derechos");
    footer.textContent += getYear()+' \u00A9';
}