app.config(($locationProvider, $routeProvider, HOME, ADD, EDIT)=>{
    $locationProvider.hashPrefix("");

    $routeProvider.when(HOME, ({
       
        templateUrl: 'views/home.html'
    }))
    .when(ADD, ({
        templateUrl: 'views/add.html'
    }))
    .when(EDIT, ({
        templateUrl: 'views/edit.html'
    }))
})