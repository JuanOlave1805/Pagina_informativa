import {data} from "./module.js";
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






//Manejo de dom para noticias del mundo

const $fragmen = document.createDocumentFragment();
const $contenedor = document.querySelector(".seccion_Noticias");

data.map((obj) => {
  const $card = document.createElement("div");
  const $card_article = document.createElement("article");
  const $card_header = document.createElement("section");
  const $card_body = document.createElement("section");
  const $card_img = document.createElement("img");
  const $card_title_primary = document.createElement("h3");
  const $card_title_secondary = document.createElement("h3");
  const $card_paragraph = document.createElement("p");
  const $card_link = document.createElement("div");
  const $card_link_A = document.createElement("a");


  






  $card.appendChild($card_article);
  $card_article.appendChild($card_header);
  $card_header.appendChild($card_img);
  $card_header.appendChild($card_title_primary);
  $card_article.appendChild($card_body);
  $card_body.appendChild($card_title_secondary);
  $card_body.appendChild($card_paragraph);
  $card_body.appendChild($card_link);
  $card_link.appendChild($card_link_A);





  $card.classList.add("swiper-slide");
  $card_article.classList.add("card");
  $card_header.classList.add("card__Face", "card__Front");
  $card_title_primary.classList.add("card__Title")
  $card_body.classList.add("card__Face", "card__Back");
  $card_title_secondary.classList.add("card__Title--modif");
  $card_paragraph.classList.add("card__Text");
  $card_link.classList.add("card__Link");


  




  $card_img.setAttribute("src", obj.img);
  $card_img.setAttribute("alt", "Image");
  $card_title_primary.innerText = obj.titulo;
  $card_title_secondary.innerText = obj.titulo;
  $card_paragraph.innerText = obj.paragraph;
  $card_link_A.innerText = "Ver mas";
  $card_link_A.href = obj.url;
  $card_link_A.setAttribute("target", "_blank");
  


  console.log($card);

  $fragmen.appendChild($card);
});

$contenedor.appendChild($fragmen);