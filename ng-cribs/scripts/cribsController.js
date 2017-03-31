app.controller('cribsController', function($scope, cribsFactory) {
    $scope.message = "Welcome to AngularJS Application";
    $scope.cribs;
    cribsFactory.getCribs().then(function(data) {
        $scope.cribs = data.data;
    }, function(e) {
        console.log(e);
    });

    $scope.showMessage = false;

    $scope.sayHello = function() {
        alert('Hello');
    };

    $scope.showDetails = false;

    $scope.priceInfo = {
        min: 0,
        max: 0
    };

    $scope.newListing = {};

    $scope.addCrib = function(newListing) {
        newListing.id = $scope.cribs.length + 1;
        newListing.image = 'http://astutegraphics.com/wp-content/uploads/2015/02/house-vector-illustration-illustrator-400x250.png';
        $scope.cribs.push(newListing);
        $scope.addListing = !$scope.addListing;
        console.log($scope.cribs);
    }

    $scope.editCrib = function(crib) {
        $scope.editListing = true;
        $scope.existingListing = crib;
    };

    $scope.saveCribEdit = function() {
        $scope.existingListing = {};
        $scope.editListing = false;
    };

    $scope.deleteCrib = function(existingListing) {
        var index = $scope.cribs.indexOf(existingListing);

        $scope.cribs.splice(index, 1);
        $scope.existingListing = {};
        $scope.editListing = false;
    };
});