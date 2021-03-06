var mapa; // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var posicionCentral = {lat: -32.958, lng: -60.655};

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
  mapa = new google.maps.Map(document.getElementById('map'), {
    center: posicionCentral,
    zoom: 12
  });

  geocodificadorModulo.inicializar();
  marcadorModulo.inicializar();
  direccionesModulo.inicializar();
  lugaresModulo.inicializar();
  streetViewModulo.inicializar();
}
