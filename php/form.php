<!DOCTYPE html>
<html>
    <head>
        <title>form</title>
</head>
<body>
    <section>
        <h1>The order:</h1> <br>
        <h3>
        The shirt color: <?php $sc = $_GET["shirtColor"];
        if($sc == "#000000" || $sc == "#FFFFFF")
        echo "The color " . $sc . " is out of stock :(" ;
        else
        echo $sc; ?> <br>
        The shirt size:<?php echo $_GET["shirtSize"];?> <br>
        The shirt price:<?php echo $_GET["shirtPrice"]; ?> <br>
        </h3>
</body>
</html>