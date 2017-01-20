app
    .controller('EditCtrl', function($scope, $stateParams,$localstorage,$window) {


        /**Singles  */
        var newBrandInfo = {}
  var params = $stateParams.brandId;
    $scope.brands = $localstorage.getObject('my_brands');
    $scope.brand = $scope.brands[params-1 ];
    console.log($scope.brand)
//$window.localStorage.clear();


$scope.saveChanges = function(){
    newBrandInfo = {
            id: params,
            'logo': $scope.brand.logo,
            'company': $scope.brand.company,
            'contact': $scope.brand.contact,
            'country': $scope.brand.country,
            'address': $scope.brand.address,
            'zip': $scope.brand.zip,
            'rfc': $scope.brand.rfc,
            'telephone': $scope.brand.telephone
    }
$scope.brands[params-1] = newBrandInfo;
$localstorage.setObject('my_brands',$scope.brands);
console.log('Nuevo valor guardado')


}

    })