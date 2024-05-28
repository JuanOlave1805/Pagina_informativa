//Despliega el header
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
  })
//Desplega los link
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header__Link");
    header.classList.toggle("abajo",window.scrollY>0);
  })
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header__Link--edit");
    header.classList.toggle("abajo",window.scrollY>0);
  })
//NOTA: Todo se ejecuta a la vez


// Giro card
document.addEventListener("DOMContentLoaded", function () {
  // Obtén todas las tarjetas por su clase o cualquier otro selector
  var cards = document.querySelectorAll(".card");

  // Agrega un manejador de clic a cada tarjeta
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      // Alternar la clase 'flipped' en la tarjeta clicada
      card.classList.toggle("flipped");
    });
  });
});   


// Slider
let slidesToShow = 4; // Por defecto, muestra 4 slides por vista

if (window.matchMedia("(max-width: 700px)").matches) {
    slidesToShow = 1;
} else if (window.matchMedia("(max-width: 1230px)").matches) {
    slidesToShow = 2;
} else if (window.matchMedia("(max-width: 1750px)").matches) {
    slidesToShow = 3;
} else {
    slidesToShow = 4;
}

// Botones del slider 
let swiper = new Swiper(".mySwiper", {
    slidesPerView: slidesToShow, // Utiliza la variable para definir slidesPerView
    
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    touchMoveStopPropagation: true,
});


// Contador en vivo
// Verificamos si hay un registro de visitas en localStorage
let visitas = localStorage.getItem('contador visitas');

// Si no hay registro, iniciamos el contador en cero
if(!visitas){
  visitas = 0;
}

// Incrementamos el contador de visitas
visitas++;

// Guardamos el nuevo valor del contador en LocalStorage
localStorage.setItem('contador_visitas', visitas);

// Actualizamos el contenido en el elemento HTML con el contador de visitas
document.getElementById('contador').textContent = visitas
