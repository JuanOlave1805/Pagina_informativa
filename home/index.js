function openNav(){
    document.getElementById("Menu__Mobile").style.width = "100%";
}

function closeNav(){
    document.getElementById("Menu__Mobile").style.width = "0%";
}

window.addEventListener("scroll", function(){
    var header = document.querySelector(".Header__Box");
    header.classList.toggle("abajo",window.scrollY>0);
  })