/**
 * Created by danle on 4/7/16.
 */
define(['plugins/router'], function(router) {
   return {
       router: router,
       activate: function() {
           router.map([
               {route: ['', 'login'], title: 'Login', moduleId: 'viewmodels/login'}
           ]).buildNavigationModel();

           return router.activate();
       }
   }
});