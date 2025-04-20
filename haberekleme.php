<?php
// Form gönderildiğinde
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Haber başlığı, resim ve açıklama verilerini al
    $haber_baslik = $_POST['haber_baslik'];
    // Resim yüklenmişse, geçici dosya yolu al
    $haber_resim_tmp = $_FILES['haber_resim']['tmp_name'];
    $haber_resim = ''; // Dosya yolu için bir değişken tanımla
    // Eğer resim yüklendiyse
    if (!empty($haber_resim_tmp)) {
        // Resmi belirtilen klasöre taşı
        $haber_resim_klasor = 'uploads/';
        $haber_resim_ad = $_FILES['haber_resim']['name'];
        $haber_resim = $haber_resim_klasor . $haber_resim_ad;
        move_uploaded_file($haber_resim_tmp, $haber_resim);
    }
    $haber_aciklama = $_POST['haber_aciklama'];

    // Haberi dosyaya ekle
    $dosya = 'haberler.txt';
    $haber = $haber_baslik . '|' . $haber_resim . '|' . $haber_aciklama . "\n";
    file_put_contents($dosya, $haber, FILE_APPEND | LOCK_EX);
    
    // Başarılı ekleme mesajı
    echo "Haber başarıyla eklendi!";
}
?>
