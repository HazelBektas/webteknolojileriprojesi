 <!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>Giriş Kontrolü</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body class="d-flex justify-content-center align-items-center vh-100"> 


<?php
ob_start();
$dogru_kullanici = "b241210001@sakarya.edu.tr";
$dogru_sifre = "b241210001";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $kullanici_adi = $_POST["username"];
    $sifre = $_POST["password"];

    if ($kullanici_adi == $dogru_kullanici && $sifre == $dogru_sifre) {
       
        header("Location: anasayfa.php");
        exit();
    } else {
        header("Location: login.html?error=1");
        exit();
        
    }
} else {
    header("Location: login.html");
    exit();
}

?>

</body>
</html> 
