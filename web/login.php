<?php
ob_start();
$dogru_kullanici = "b2412100001@sakarya.edu.tr";
$dogru_sifre = "b2412100001";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $kullanici_adi = $_POST["username"];
    $sifre = $_POST["password"];

    if ($kullanici_adi == $dogru_kullanici && $sifre == $dogru_sifre) {
       
        header("Location: anasayfa.php");
        exit();
    } else {
        header("Location: login.html");
        exit();
    }
} else {
    header("Location: login.html");
    exit();
}
?>

