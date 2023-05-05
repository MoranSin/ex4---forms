<!DOCTYPE html>
<html>
    <head>
        <title>form</title>
</head>
<body>
    <section>
        <h1>The order:</h1> <br>
        <h3>
        The shirt color:<?php $sp = $_GET["shirtColor"];
        if($sp == "#000000" || $sp == "#FFFFFF")
        echo "Out of stock". " " . $sp ;
        else
        echo $sp; ?> <br>
        The shirt size:<?php echo $_GET["shirtSize"];?> <br>
        The shirt price:<?php echo $_GET["shirtPrice"]; ?> <br>
        </h3>
</body>
</html>