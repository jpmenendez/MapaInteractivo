lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar () {
    /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
    página (las direcciones ingresables por el usuario).
    Para esto creá un círculo con radio de 20000 metros y usalo para fijar
    los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
    var autocomplete;

    var busquedaDireccion = document.getElementById('direccion');
    var busquedaDesde = document.getElementById('desde');
    var busquedaHasta = document.getElementById('hasta');
    var busquedaAgregar = document.getElementById('agregar');

    autocompleteDireccion = new google.maps.places.Autocomplete(busquedaDireccion);
    autocompleteDesde = new google.maps.places.Autocomplete(busquedaDesde);
    autocompleteHasta = new google.maps.places.Autocomplete(busquedaHasta);
    autocompleteAgregar = new google.maps.places.Autocomplete(busquedaAgregar);

    limitarBusqueda(autocompleteDireccion);
    limitarBusqueda(autocompleteDesde);
    limitarBusqueda(autocompleteHasta);
    limitarBusqueda(autocompleteAgregar);
  }

  //Limita el área de búsqueda de un autocomplete
  function limitarBusqueda(autocomplete) {
        var posicionCentral = {
            lat: -32.958,
            lng: -60.675
          };
        var circle = new google.maps.Circle({
          center: posicionCentral,
          radius: 20000
        });
        autocomplete.setBounds(circle.getBounds());
  }

  // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

  // Busca lugares con el tipo especificado en el campo de TipoDeLugar
  function buscarCerca (posicion) {
    var tipoDeLugar = document.getElementById('tipoDeLugar').value;
    var radio = document.getElementById('radio').value;
    var request = {
      location: posicion,
      radius: radio,
      type: [tipoDeLugar]
    };
    servicioLugares.nearbySearch(request, marcadorModulo.marcarLugares);
  }
  return {
    inicializar,
    buscarCerca
  }
})()
