app
    .controller('MainCtrl', function($scope, $state, $stateParams, $localstorage, $window) {


        /**Singles  */
        var newBrandInfo = {}
        var params = $stateParams.brandId;
        $scope.brands = $localstorage.getObject('my_brands');
        $scope.brand = $scope.brands[params - 1];
        console.log($scope.brand)

        



    })