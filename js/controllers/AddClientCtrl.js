app
    .controller('AddClientCtrl', function($scope, $state, $stateParams, $localstorage) {


        /**Singles  */
        var newBrandInfo = {}
        var params = $stateParams.brandId;
        $scope.brands = $localstorage.getObject('my_brands');
        console.log($scope.brands)
            //$window.localStorage.clear();


        $scope.saveChanges = function() {
            newBrandInfo = {
                id: params,
                'logo': $scope.brand.logo,
                'company': $scope.brand.company,
                'contact': $scope.brand.contact,
                'country': $scope.brand.country,
                'address': $scope.brand.address,
                'zip'    : $scope.brand.zip,
                'rfc'    : $scope.brand.rfc,
                'telephone': $scope.brand.telephone
            }
            $scope.brands.push(newBrandInfo);
            $localstorage.setObject('my_brands', $scope.brands);
            console.log('Nuevo cliente agregado');
            $state.go('brand')
        }



    })