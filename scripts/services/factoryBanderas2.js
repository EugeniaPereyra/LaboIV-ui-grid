angular
  .module('app')
  .factory('banderasFac2', function (banderas) {
    
    var url = "http://www.egos27.somee.com/api/bandera";
    var objeto = {};
    objeto.nombreDelFactory = "FACTORIA DE BANDERAS";
    objeto.traerTodo = traerTodo;
    objeto.traerNombre = traerNombre;
    objeto.traerBanderas = traerBanderas;


    function traerTodo () {
      return banderas.traerTodo();
    }

    function traerNombre(){
      return banderas.traerNombre();
    }

    function traerBanderas (){
      return banderas.traerBanderas();
    }

    return objeto;

  })
