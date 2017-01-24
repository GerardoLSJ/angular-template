app
    .controller('MainCtrl', function($scope, $state, $stateParams, $localstorage, $window) {
$scope.dynamic = 40;

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