(function(){
   
   document.addEventListener('DOMContentLoaded', function(){
        // // mapa
        var map = L.map('mapa').setView([13.706231, -89.203942], 18);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([13.706231, -89.203942]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .bindPopup ('GDLWebCamp 2018 <br> boletos ya disponibe')
            .openPopup();
    });//DOMContentLoaded

})();