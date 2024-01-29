window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
  })
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header__Box");
    header.classList.toggle("abajo",window.scrollY>0);
  })
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header__Link");
    header.classList.toggle("abajo",window.scrollY>0);
  })
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header__Link--edit");
    header.classList.toggle("abajo",window.scrollY>0);
  })






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