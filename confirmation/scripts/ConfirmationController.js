(function () {

  'use strict';

  function ConfirmationController($scope, checkoutDataService, $state) {

    var _instance = this;
    _instance.data = checkoutDataService.getCheckoutData();

    _instance.gotoThankyou = function () {
      _instance.data.id = Math.floor((Math.random() * 1000000000) + 1);
      checkoutDataService.setCheckoutData(_instance.data);
      $state.go('thankyou', {});
    };

    _instance.addItem = function (item) {
      checkoutDataService.addItem(_instance.data, item);
    };

    _instance.removeItem = function (selectedItem) {
      checkoutDataService.removeItem(_instance.data, selectedItem);
    };

  }
  angular.module('joveo')
    .controller('ConfirmationController', ConfirmationController);

})();