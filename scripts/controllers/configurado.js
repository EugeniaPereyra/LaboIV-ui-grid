angular
  .module('app')
  .controller('ConfiguradoCtrl', function($scope, data, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion TP";
    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.columnDefs = columnDefs();
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

    data.datosUI().then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;
    });

    console.log(uiGridConstants);

    function columnDefs () {
      return [
        { field: 'id', name: '#', width: 45},
        // { field: 'titulo', name: 'ocupacion'
        //   ,filter:{
        //     condition: uiGridConstants.filter.STARTS_WITH,
        //     placeholder: 'comienza con...'
        //   }
        // },
        { field: 'nombre', name: 'nombre'
          ,enableFiltering: false
        },
        { field: 'apellido', name: 'apellido'},
        { field: 'email', name: 'mail'},
        { field: 'sexo', name: 'sexo'
        // filtro de busqueda.
          ,filter: {
            // term: '1',
            type: uiGridConstants.filter.SELECT,
            selectOptions: [
              {value: 'Male', label: 'Masculino'},
              {value: 'Female', label: 'Femenino'}
            ]
          }
          //filtro de los datos
          ,cellFilter: 'sexoTP'
        },
        { field: 'fechaNacimiento', name: 'Fecha_nacimiento'
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        },

        { field: 'avatar', name: 'avatar', cellTemplate:"<img width=\"30px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"},
        { field: 'foto', name: 'foto', cellTemplate:"<img width=\"20px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"},
        { field: 'Boton', displayName: 'Boton', cellTemplate:"<button ng-click='grid.appScope.Localizar(row.entity)'>LOCALIZAR</button>"},
        { field: 'Boton', displayName: 'Boton', cellTemplate:"<button ng-click='grid.appScope.Amigos(row.entity)'>AMIGOS</button>"},
        { field: 'Boton', displayName: 'Boton', cellTemplate:"<button ng-click='grid.appScope.AmigosGPS(row.entity)'>AMIGOS GPS</button>"}
      ];
    }

    $scope.Localizar=function(row){
      console.info(row);
      console.info('Latitud: '+row.latitud+', Longitud: '+row.logitud);
      $scope.latitud=row.latitud;
      $scope.longitud=row.logitud;
      $scope.nombreU=row.nombre;
      $scope.apellidoU=row.apellido;
      $scope.avatarU=row.avatar;

    }

    $scope.gridAmigos={};
    $scope.gridAmigos.paginationPageSizes = [25, 50, 75];
      // Configuracion de la paginacion
    $scope.gridAmigos.paginationPageSize = 25;
    $scope.gridAmigos.columnDefs = columAmigos();
      // Activo la busqueda en todos los campos.
    $scope.gridAmigos.enableFiltering = true;
    i18nService.setCurrentLang('es');

    function columAmigos () {
      return [
            { field: 'nombre', name: 'nombre'
              ,enableFiltering: false
            },
            { field: 'apellido', name: 'apellido'},
            { field: 'fechaNacimiento', width: 200, name: 'fechaNacimiento'
              ,type: 'date'
              ,cellFilter: "date: 'dd-MM-yyyy'"
            },
            { field: 'avatar', name: 'avatar', cellTemplate:"<img width=\"30px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>" },
            { field: 'foto', name: 'foto', cellTemplate:"<img width=\"20px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>" }
          ];
        }

    $scope.Amigos=function(row){
      console.info(row);
      $scope.gridAmigos.data = row.amigos;
      $scope.nombreA=row.nombre;
      $scope.apellidoA=row.apellido;
    }

    $scope.AmigosGPS=function(row){
      console.info(row);
      $scope.latitudG=row.latitud;
      $scope.longitudG=row.logitud;
      $scope.nombreG=row.nombre;
      $scope.apellidoG=row.apellido;
      $scope.avatarG=row.avatar;

      $scope.amigos = row.amigos;
    }
  })
