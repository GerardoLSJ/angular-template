app
    .controller('BrandCtrl', function($scope, $state,$localstorage) {
$scope.$emit('LoggedIn', true)
        $scope.thisBrand = {};
        $scope.edit = function(brand){
             $scope.thisBrand = brand;
            $state.go('edit')

        }



        if($localstorage.get('my_brands',false)){
            console.log('Brands in local')
                $scope.brands = $localstorage.getObject('my_brands');
        }else{
        $scope.brands = [{
            id: 1,
            'logo': 'http://local.fedex.com/images/logos/fedex.png',
            'company': "Mis Clientes1",
            'contact': "Jesus Gonzalez",
            'country': "Mexico",
            'address': "Pedregal #45",
            'zip': 45752,
            'rfc': "AR885D415",
            'telephone': "55-32-51-52"
        }, {
            id: 2,
            'logo': 'https://assets.entrepreneur.com/content/4x3/400/20151228194913-oppfinder-express-employment-4x3.jpeg',
            'company': "Mis clientes2",
            'contact': "Victoria Perez",
            'country': "Mexico",
            'address': "Pedregal #45",
            'zip': 78424,
            'rfc': "JHGJ412",
            'telephone': "55-32-51-52"
        }, {
            id: 3,
            'logo': 'http://www.dondevive.org/wp-content/uploads/2016/02/castor.jpg',
            'company': "Mis clientes3",
            'contact': "Jesus Gonzalez",
            'country': "Mexico",
            'address': "Pedregal #45",
            'zip': 45752,
            'rfc': "AR885D415",
            'telephone': "55-32-51-52"
        }, {
            id: 4,
            'logo': 'https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738',
            'company': "Mis clientes4",
            'contact': "Sr Victor",
            'country': "Mexico",
            'address': "Pedregal #45",
            'zip': 45752,
            'rfc': "AR885D415",
            'telephone': "55-32-51-52"
        }]
            $localstorage.setObject('my_brands', $scope.brands);
            console.log('setting up brands')
        }


    })