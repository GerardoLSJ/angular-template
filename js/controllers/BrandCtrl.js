app
    .controller('BrandCtrl', function($scope, $state) {

        $scope.thisBrand = {};
        $scope.edit = function(brand){
             $scope.thisBrand = brand;
            $state.go('edit')

        }

        $scope.brands = [{
            id: 1,
            'logo': 'http://local.fedex.com/images/logos/fedex.png',
            'company': "Mis Clientes",
            'contact': "Jesus Gonzalez",
            'country': "Mexico",
            'address': "Pedregal #45",
            'zip': 45752,
            'rfc': "AR885D415",
            'telephone': "55-32-51-52"
        }, {
            id: 2,
            'logo': 'https://assets.entrepreneur.com/content/4x3/400/20151228194913-oppfinder-express-employment-4x3.jpeg',
            'company': "Mis clientes",
            'contact': "Victoria Perez",
            'country': "Mexico",
            'address': "Pedregal #45",
            'zip': 78424,
            'rfc': "JHGJ412",
            'telephone': "55-32-51-52"
        }, {
            id: 3,
            'logo': 'http://www.dondevive.org/wp-content/uploads/2016/02/castor.jpg',
            'company': "Mis clientes",
            'contact': "Jesus Gonzalez",
            'country': "Mexico",
            'address': "Pedregal #45",
            'zip': 45752,
            'rfc': "AR885D415",
            'telephone': "55-32-51-52"
        }, {
            id: 4,
            'logo': 'https://tctechcrunch2011.files.wordpress.com/2015/11/panda.jpg?w=738',
            'company': "Mis clientes",
            'contact': "Sr Victor",
            'country': "Mexico",
            'address': "Pedregal #45",
            'zip': 45752,
            'rfc': "AR885D415",
            'telephone': "55-32-51-52"
        }]

    })