app
    .controller('AppCtrl', function($window, $scope) {

        $scope.focus = true;

        $window.onfocus = function() {
            console.log("focused");
            $scope.focus = true;
            console.warn($scope.focus)
            $scope.$apply()
        }
        $window.onblur = function() {
            console.log('>onblur');
           /* $scope.focus = false;
            console.warn($scope.focus)
            $scope.$apply()*/
        };



    })