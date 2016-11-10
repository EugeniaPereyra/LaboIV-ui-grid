angular.module("app")

.directive('utnSaludo', function(){

	return{
		restrict: "AECM",
		replace: true,
		template: "<h3>Hola, mundo!</h3>"
	}

})

.directive('utnTitulo', function(){

	return{
		restrict: "E",
		replace: true,
		template: "<h3>{{titulo}}</h3>"
	}

})

.directive('utnTemplate', function(){

	return{
		restrict: "E",
		replace: true,
		templateUrl: "views/template1.html"
	}

})


;