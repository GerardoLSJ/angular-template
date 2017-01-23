app
    .controller('LoginCtrl', function($scope, $state) {


        $scope.login = function() {
            console.log('submit click')
            $scope.LoggedIn = true;
            $scope.$emit('LoggedIn', true)
            $state.go('brand')
        }


    })