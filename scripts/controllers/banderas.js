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

    function callback(dato)
    {
      console.info(dato);
      $scope.gridPaises.data = dato;

      //$scope.lista = dato;
    }

    function error(err)
    {
      console.log(err);
    }

    banderas.traerTodo().then(callback, error);
    banderas.traerNombre().then(callback, error);
    banderas.traerBanderas().then(callback, error);

    

    function columPaises () {
      return [
            { field: 'Nombre', name: 'nombre'},
            { field: 'BanderaChica', name: 'banderaChica', cellTemplate:"<img width=\"30px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>" },
            { field: 'Bandera', name: 'bandera', cellTemplate:"<img width=\"20px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>" }
          ];
        }

  })
