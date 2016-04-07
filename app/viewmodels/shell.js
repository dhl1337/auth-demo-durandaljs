/**
 * Created by danle on 4/7/16.
 */
define(function (require) {
    var app = require('durandal/app'),
        ko = require('knockout');

    return {
        name: ko.observable(),
        sayHello: function() {
            app.showMessage('Hello ' + this.name() + '! Nice to meet you.', 'Greetings');
        }
    };
});