angular
  .module('app')
  .controller('BanderasCtrl', function($scope, banderas, i18nService, uiGridConstants) {
    $scope.titulo = "BANDERAS";

    $scope.gridPaises={};
    $scope.gridPaises.paginationPageSizes = [25, 50, 75];
      // Configuracion de la paginacion
    $scope.gridPaises.paginationPageSize = 25;
    $scope.gridPaises.columnDefs = columPaises();
      // Activo la busqueda en todos los campos.
    $scope.gridPaises.enableFiltering = true;
    i18nService.setCurrentLang('es');

    function callbackTodo(dato)
    {
      console.info(dato);
      $scope.gridPaises.data = dato;
    }

    function callback(dato)
    {
      console.info(dato);
    }

    function error(err)
    {
      console.log(err);
    }

    banderas.traerTodo().then(callbackTodo, error);
    banderas.traerNombre().then(callback, error);
    banderas.traerBanderas().then(callback, error);

    function columPaises () {
      return [
            { field: 'Nombre', name: 'nombre'},
            { field: 'Bandera', name: 'bandera', cellTemplate:"<img width=\"50px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>" },
            { field: 'Boton', displayName: 'Boton', cellTemplate:"<button ng-click='grid.appScope.paisDetalle(row.entity)'>DETALLE</button>"}
          ];
        }

    $scope.paisDetalle=function(row){
      console.info(row);
    }

  })
