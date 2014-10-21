angular.module('karmic-core')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state({
                name: 'root',
                url: '/',
                controllerAs: 'rootCtrl',
                template: '<p>Welcome to the {{rootCtrl.name}} route template</p>',
                controller: [function () {
                    this.name = 'ROOT'; 
                }]
            });
    }])
    .run(function ($state) {
        console.log('karmic-core: run');
    });
