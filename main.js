//menu//
const btnmenu = document.querySelector("#btnmenu");
const menu = document.querySelector("#menu");
btnmenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});
//submenu//
const submenubtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<submenubtn.length; i++) {
    submenubtn[i].addEventListener("click", function(){
        if(window.innerWidth < 1326){
            const submenu = this.nextElementSibling;
            const height = submenu.scrollHeight;
            
            if(submenu.classList.contains("desplegar")){
                submenu.classList.remove("desplegar");
                submenu.removeAttribute("style");
            }else{
                submenu.classList.add("desplegar");
                submenu.style.height = height + "px";
            }

           
           
        }
    });
}


//carousel//

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
//document.addEventListener('DOMContentLoaded',() => {
  //  const elementosCarousel = document.querySelectorAll('.carousel');
    //M.Carousel.init(elementosCarousel , {
      //  duration:150,
        //dist:0,
       // shift:5,
       // padding:5,
       // numVsible:3,
       // indicators:true,
       // noWrap:true,

   // });

//});

