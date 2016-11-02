angular
  .module('app')
  .service('banderas', function ($http) {

    this.traerBanderas = function () {
      var banderas=[];
      return this.traerTodo().then(function(respuesta){
        banderas=respuesta.map(function(dato){
          return dato.Bandera;
        })
        return banderas;
      });
    }

    this.traerTodo = function () {
      return $http.get('http://www.egos27.somee.com/api/bandera').then(function(respuesta){
        //console.info(respuesta);
        return respuesta.data.Paises;
      });
    }

    this.traerNombre = function (nombre) {
      var nombres=[];
      return this.traerTodo().then(function(respuesta){
        nombres=respuesta.map(function(dato){
          return dato.Nombre;
        })
        return nombres;
      });
    }

  })
