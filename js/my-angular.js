app = angular.module('APP', ['ngAnimate']);

app.controller('mainCtrl', ['$scope', function($scope) {

	$scope.page = 'html/home.html';

	$scope.setPage = function(newPage) {
		$scope.page = newPage;
	}

}]);

app.controller('expCtrl', ['$scope', function($scope) {

	$scope.tab = 'html/work-xp.html';

	$scope.setTab = function(newTab) {
		$scope.tab = newTab;
		console.log('set tab');
	}
}]);

app.factory('ResulSet', function() {
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