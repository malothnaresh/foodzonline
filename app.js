(function () {

  'use strict';

  function registerStates(stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise("/home");
    var home = {
      name: 'home',
      parent: '',
      url: '/home',
      templateUrl: 'checkout/templates/checkout.tpl.html',
      controller: 'CheckoutController',
      controllerAs: 'checkoutController'
    };

    var order = {
      name: "order",
      parent: '',
      url: '/order',
      templateUrl: 'confirmation/templates/confirmation.tpl.html',
      controller: 'ConfirmationController',
      controllerAs: 'confirmationController'
    };

    var thankyou = {
      name: 'thankyou',
      parent: '',
      url: '/thankyou',
      templateUrl: 'confirmation/templates/thankyou.tpl.html',
      controller: 'ThankyouController',
      controllerAs: 'thankyouController'
    }

    stateProvider
      .state(home)
      .state(order)
      .state(thankyou);
  }

  // Function which configures the module
  function configureModule($stateProvider, $urlRouterProvider) {
    registerStates($stateProvider, $urlRouterProvider);
  }

  var module = angular.module('joveo', ["ui.router"]);

  // Configure the Module
  module.config(configureModule);

})();