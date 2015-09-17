angular.module('APP', ['ngAnimate']).

controller('mainCtrl', ['$scope', function($scope) {

	$scope.test = "Howdy";
	console.log($scope);
	console.log("test");

}]);

angular.module('APP', ['ngAnimate']).controller('bannerCtrl', ['$scope', function($scope) {

	$scope.test = "Howdy";
	console.log($scope);
	console.log("test");

}]);

angular.module('APP', ['ngAnimate']).factory('ResulSet', function() {
    function ResultSetInstance(dataSet) { 
        this.filter = function(){ 
            // ...
        }
    }

    return {
        createNew: function(dataSet) {
            return new ResultSetInstance(dataSet);
        }
    };
});