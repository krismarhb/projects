# projects
proyectos de uni 

<html>
<title> saludo </title>
<head>

<body>
 <form method="post" action="sal.php">

                     Ingresa tu nombre: <input name="nombre" type="text" value="aquí" />
      
<input type="submit" value="saludo" />

   
 </form>
</body>
</html>
<?php

    $mensaje = "buenos días";
    if (Date("H") > 8 && Date("H")< 13) $mensaje = "Buenos dias"; 
    elseif (Date("H") > 14 && Date("H") < 20) $mensaje = "Buenas tardes"; 
    elseif (Date("H") > 21 && Date("H") <= 7) $mensaje = "Buenas noches"; 
    
   
	echo $_POST['nombre']."<p>$mensaje</p> ";
  
?>
