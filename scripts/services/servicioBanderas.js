angular
  .module('app')
  .service('banderas', function ($http) {

    this.traerBanderas = function () {
      return $http.get('http://www.egos27.somee.com/api/bandera').then(function(respuesta){
        var banderas=[];
        angular.forEach(respuesta.data.Paises, function(value){
          banderas.push(value.Bandera);
        })
        //console.info(respuesta.data);

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
          var obj={};
          obj.Nombre=dato.Nombre;
          return obj;
        })
        return nombres;
      });
    }

  })
