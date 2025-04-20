document.addEventListener("DOMContentLoaded", function() {
    // Haber ekleme formunu seç
    var haberForm = document.querySelector('.haber-form');

    // Haber ekleme formuna submit olayı ekle
    haberForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun sayfayı yenilemesini engelle

        // Formdan girdileri al
        var haberBaslik = document.getElementById('haber-baslik').value;
        var haberResim = document.getElementById('haber-resim').value;
        var haberAciklama = document.getElementById('haber-aciklama').value;

        // Haber kartını oluştur
        var haberKarti = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${haberResim}" alt="${haberBaslik}">
                <div class="card-body">
                    <h5 class="card-title">${haberBaslik}</h5>
                    <p class="card-text">${haberAciklama}</p>
                    <a href="#" class="btn btn-primary">Detaylar</a>
                </div>
            </div>
        `;

        // Haber kartını haber listesine ekle
        var haberListesi = document.getElementById('haberListesi');
        haberListesi.innerHTML += haberKarti;

        // Formu sıfırla
        haberForm.reset();
    });
});
console.log("haberler.js dosyası yüklendi!");

document.addEventListener("DOMContentLoaded", function() {
    // Kodlar buraya gelecek
});
