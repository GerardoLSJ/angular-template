app
    .controller('MainCtrl', function($scope, $state, $stateParams, $localstorage, $window) {

        $scope.max = 200;
        $scope.fedex_val = 0;
        $scope.estafeta_val = 0;
        $scope.dhl_val = 0;
        $scope.random = function() {
            var value = Math.floor((Math.random() * 70) + 30);
            var value_estafeta = Math.floor((Math.random() * 70) + 30);
            var value_dhl = Math.floor((Math.random() * 70) + 30);
            /** Siempre FEDEX va a ser el mayor no matter what */
            if(value_estafeta > value || value_dhl > value){
                let aux = value;
                value = value_estafeta;
                value_estafeta = aux;
                if(value < value_dhl){
                    let aux = value;
                    value = value_dhl;
                    value_dhl = aux;

                }
            }


            $scope.fedex_val = value;
            $scope.estafeta_val = value_estafeta;
            $scope.dhl_val = value_dhl;
        };
        /**Singles  */
        var newBrandInfo = {}
        var params = $stateParams.brandId;
        $scope.brands = $localstorage.getObject('my_brands');
        $scope.brand = $scope.brands[params - 1];
        console.log($scope.brand)

        $scope.destinatiom = false;
        $scope.items = [{
            'name': 'Item 1'
        }, {
            'name': 'Item 2'
        }, {
            'name': 'Account 3'
        }, {
            'name': 'Account 4'
        }, {
            'name': 'Item 5'
        }, {
            'name': 'Item 6'
        }, {
            'name': 'User 7'
        }, {
            'name': 'User 8'
        }, {
            'name': 'Item 9'
        }, {
            'name': 'Item 10'
        }, {
            'name': 'Item 11'
        }, {
            'name': 'Item 12'
        }, {
            'name': 'Item 13'
        }, {
            'name': 'Item 14'
        }, {
            'name': 'User 15'
        }, {
            'name': 'User 16'
        }, {
            'name': 'Person 17'
        }, {
            'name': 'Person 18'
        }, {
            'name': 'Person 19'
        }, {
            'name': 'Item 20'
        }, ];



        $scope.selectedItem = function(item) {
            console.log(item)
            $scope.destination = item;
        }


        $scope.stopEvent = function(ev) {
            console.log(ev)
            ev.stopPropagation();
        }

    })