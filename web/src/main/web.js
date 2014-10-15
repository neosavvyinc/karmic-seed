angular.module('karmic-web', ['karmic-core'])
    .config([function () {
        // karmic-web-specific config tasks go here.
        // add karmic-web-specific routes to the karmic-web config/routes.js file
    }])
    .run([function () {
        console.log('karmic-web: run');
    }])
