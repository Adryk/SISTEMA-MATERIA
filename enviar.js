var app=angular.module("app",["ngResource"]);
app.controller("control",function($scope,datos1,datos2){
    $scope.mensaje="hola adry.!";
    $scope.mostrar=false;
     $scope.lista1=datos1.get();

    $scope.lista=datos2.get();
    $scope.BuscarAlumno=function(){
    	$scope.mostrar=false;
		var ced=$scope.cedula;
		for (var i = 0; i < $scope.lista.length; i++) {
			if(angular.equals(ced, $scope.lista[i].Cedula)){
				 $scope.mostrar=true;
				 $scope.mensaje="";
			}
			else{
				if ( $scope.mostrar==false) {
					$scope.mensaje="NO EXISTE ALUMNO";
				}
			}
		}
	}
  
});

app.factory("datos1",[ "$resource",function($resource){
    return $resource("http://127.0.0.1:8000/materia/",{},{get:{method:"GET",params:{},isArray:true}
});

}
]);
app.factory("datos2",[ "$resource",function($resource){
    return $resource("http://127.0.0.1:8000/alumno/",{},{get:{method:"GET",params:{},isArray:true}
});

}
]);


