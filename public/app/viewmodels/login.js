/**
 * Created by danle on 4/7/16.
 */
define(function(require) {
   var ko = require('knockout');

   return {
      userEmail: ko.observable(),
      userPassword: ko.observable(),
      login: function() {
         console.log('this is userEmail',this.userEmail());
         console.log('this is password',this.userPassword());
      },
      signup: function() {
         var user = {
            email: this.userEmail(),
            password: this.userPassword()
         };
         return $http({
            method: 'POST',
            url: 'auth/login',
            data: user
         }).then(function(response) {
            return response.data
         })
      }
   };
});