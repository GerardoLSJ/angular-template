app
    .controller('AppCtrl', function($window,$state, $scope) {

        $scope.focus = true;
        $scope.LoggedIn = false;

        $window.onfocus = function() {
            //console.log("focused");
            $scope.focus = true;
            //console.warn($scope.focus)
            $scope.$apply()
        }
        $window.onblur = function() {
            //console.log('>onblur');
           /* $scope.focus = false;
            console.warn($scope.focus)
            $scope.$apply()*/
        };

        $scope.$on("LoggedIn", function(evt,data){ 
            console.log(data)
        $scope.LoggedIn = data;
    });

        $scope.AddClient = function(){
            console.log('add client')
            $state.go('add-client')
        };



    })