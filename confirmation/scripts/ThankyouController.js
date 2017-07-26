(function () {

  'use strict';

  function ThankyouController($scope, $state, checkoutDataService) {

    var _instance = this;
    _instance.data = checkoutDataService.getCheckoutData();
    _instance.goBackToHome = function () {
      $state.go('home', {});
    };
  }
  angular.module('joveo')
    .controller('ThankyouController', ThankyouController);

})();