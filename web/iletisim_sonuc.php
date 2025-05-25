<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>İletişim Formu Sonucu</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body class="bg-light">
  <div class="container mt-5">
    <h2 class=" mb-4">Gönderilen Bilgiler</h2>
    <div class="card p-4">
      <p><strong>Ad Soyad:</strong> <?php echo htmlspecialchars($_POST["adsoyad"]); ?></p>
      <p><strong>E-posta:</strong> <?php echo htmlspecialchars($_POST["email"]); ?></p>
      <p><strong>Telefon:</strong> <?php echo htmlspecialchars($_POST["telefon"]); ?></p>
      <p><strong>Cinsiyet:</strong> <?php echo htmlspecialchars($_POST["cinsiyet"]); ?></p>
      <p><strong>Şehir:</strong> <?php echo htmlspecialchars($_POST["sehir"]); ?></p>
      <p><strong>Mesaj:</strong> <?php echo nl2br(htmlspecialchars($_POST["mesaj"])); ?></p>

      <p><strong>İlgi Alanları:</strong><br>
        <?php
          if (isset($_POST["ilgialanlari"])) {
            foreach ($_POST["ilgialanlari"] as $alan) {
              echo htmlspecialchars($alan) . "<br>";
            }
          } else {
            echo "Belirtilmemiş.";
          }
        ?>
      </p>

      <a href="iletisim.html" class="btn btn-primary mt-3">Geri Dön</a>
    </div>
  </div>
</body>
</html>

