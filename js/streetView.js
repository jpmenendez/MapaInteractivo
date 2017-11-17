streetViewModulo = (function () {
  var paronama; // 'Visor' de StreetView
  var ubicacion;

  function inicializar () {
    // Crea un panorama cuando se hace click en una ubicación en el mapa
    google.maps.event.addListener(mapa, "click", function (event) {
      var latitud = event.latLng.lat();
      var longitud = event.latLng.lng();
      ubicacion = new google.maps.LatLng(latitud, longitud);

      creaPanorama(ubicacion);
    })
  }
    // Actualiza la ubicación del Panorama después de buscar un lugar
    function fijarStreetView (ubicacion) {
      var centro = mapa.getCenter();
      creaPanorama(centro);
      mapa.setStreetView(panorama);
    }

    // Crea el panorama Street View dado una variable google.maps.LatLng
    function creaPanorama(coordenadas){
      panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: coordenadas,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
    }

  return {
    inicializar,
    fijarStreetView
  }
})()
