<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <link rel="stylesheet" href="style.css"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/bd39df9d39.js" crossorigin="anonymous"></script>
  </head>
<body>
  <!-- Header -->
  <header class="Header">
    <div class="Header__Logo">
        <img src="Recurso 1.png" alt="Logo" class="Header__Image">
    </div>
    <nav>
        <ul class="Header__Nav">
            <li class="Header__Links"><a href="../index.html">Inicio</a></li>
            <li class="Header__Links"><a href="index.html">Nosotros</a></li>
       </ul>            
    </nav>
    <a class="Header__Button" href="../noticias/index.html"><button>Noti-ADSO</button></a>
    
    <a onclick="openNav()" class="Header__Menu" href="#"><button>Menu</button></a>

    <div id="Menu__Mobile" class="Header__Mobile">
        <a onclick="closeNav()" href="" class="Header__Close">&times;</a>
        <div class="Header__Content">
            <a href="../index.html">Inicio</a>
            <a href="index.html">Nosotros</a>
            <a href="../noticias/index.html">Noti-ADSO</a>
        </div>
   </div>

  </header>

<!-- Main -->
<main class="Main">
  <section class="Main__Formulary">
      <h1 class="Main__Title">Contactanos</h1>
      <p class="Main__Text">
          Valoramos la co-creación y la retroalimentación de nuestra comunidad. Si tienes ideas o sugerencias para mejorar, ¡compártelas! Tu opinión es esencial para nuestro crecimiento.
      </p>
      
      <form action="#" method="post">
          <input class="Main__Format" type="text"  name="name" placeholder="Enter your name:" required><br>
          <input class="Main__Format" type="email" name="email" placeholder="Enter your email:"><br>
          <textarea  class="Main__Format--Text" name="text" rows="4" placeholder="Message..." required></textarea><br>     
          <input class="Main__Botton" type="submit" name= "send" value="Send">
      </form>
  </section>
  <section class="Main__Box">
    <img src="Imagen_Contactanos.png" class="Main__Image">
  </section>
</main>
<?php 
include("registrar.php")
?>
<!-- Footer -->
<footer class="Footer">
  <div class="Footer__Box">
    <h3>Contactanos</h3>
    <li><a href="#">Direccion: Kilometro 7 Via Floridablanca -<br> Rincon de Giron</a></li>
    <li><a href="#">000 000 000</a></li>
    <li>Email:<a href="#" class="Footer__Email">Juan@crack</a></li>
    <li class="Footer__Icons">
      <a href="#" class="fa-brands fa-facebook"></a>
      <a href="#" class="fa-brands fa-instagram"></a> 
      <a href="#" class="fa-brands fa-twitter"></a>
    </li>
  </div>
  <div class="Footer__Box">
    <h3> Navegacion</h3>
    <li><a href="../index.html" class="Footer__Shortcuts">Inicio</a></li>
    <li><a href="index.html" class="Footer__Shortcuts">Nosotros</a></li>
    <li><a href="../noticias/index.html" class="Footer__Shortcuts">Noti-ADSO</a></li>
  </div>
</footer>
  <script type="text/javascript" src="index.js"></script>
</body>
</html>