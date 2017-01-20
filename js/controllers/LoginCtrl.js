app
    .controller('LoginCtrl', function($scope, $state) {


        $scope.login = function() {
            console.log('submit click')
            $state.go('brand')
        }


    })