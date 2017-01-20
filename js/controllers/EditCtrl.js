app
    .controller('EditCtrl', function($scope, $stateParams,$localstorage,$window) {


        /**Singles  */
  var params = $stateParams.brandId;
    $scope.brands = $localstorage.getObject('my_brands');
    $scope.brand = $scope.brands[params-1 ];
    console.log($scope.brand)
//$window.localStorage.clear();

    })