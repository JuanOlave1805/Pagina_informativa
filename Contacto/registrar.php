<?php 
include("con_db.php");

if (isset($_POST['send'])){
    if (strlen($_POST['name']) >= 1 && 
    strlen($_POST['email']) >= 1 && 
    strlen($_POST['text']) >= 1) {
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $text = trim($_POST['text']);
        $fechareg = date("d/m/y");
        $consulta = "INSERT INTO datos (nombre, email, mensaje, fecha_registro) VALUES ('$name', '$email', '$text', '$fechareg')";
        $resultado = mysqli_query($conex,$consulta);
        if ($resultado){
            ?>
            <h3 class="ok">¡Gracias por enviar tu mensaje!</h3>
            <?php
        } else {
            ?>
            <h3 class="bad">¡Ups, algo ha salido mal!</h3>
            <?php
        }
    } else {
        ?>
        <h3 class="bad">¡Por favor completa los campos!</h3>
        <?php
    }
}
?>
