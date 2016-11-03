angular
  .module('app')
  .factory('banderasFac', function ($http) {
    
    var url = "http://www.egos27.somee.com/api/bandera";
    var objeto = {};
    objeto.nombreDelFactory = "FACTORIA DE BANDERAS";
    objeto.traerTodo = traerTodo;
    objeto.traerNombre = traerNombre;
    objeto.traerBanderas = traerBanderas;


    function traerTodo () {
      return $http.get(TraerUrl()).then(function(respuesta){
        console.info(respuesta);
        return respuesta.data.Paises;
      });
    }

    function traerNombre(){
      var nombres=[];
      return traerTodo().then(function(respuesta){
        nombres=respuesta.map(function(dato){
          return dato.Nombre;
        })
        return nombres;
      });
    }

    function traerBanderas (){
      var banderas=[];
      return this.traerTodo().then(function(respuesta){
        banderas=respuesta.map(function(dato){
          return dato.Bandera;
        })
        return banderas;
      });
    }

    function TraerUrl (parametro) {
      if(!parametro)
      {
        return url;
      }
      return url + "/" + parametro;
    }

    return objeto;

  })
