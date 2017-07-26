(function () {

  'use strict';

  function CheckoutController($scope, checkoutDataService, $state, $q) {

    var _instance = this;
    _instance.data = {};
    _instance.southIndianMenu = checkoutDataService.getSouthIndianMenu();

    _instance.northIndianMenu = checkoutDataService.getNorthIndianMenu();

    _instance.data.selectedItems = [];
    _instance.data.numberOfItems = 0;
    _instance.data.totalAmount = 0;

    _instance.addItem = function (item) {
      checkoutDataService.addItem(_instance.data, item);
    };

    _instance.removeItem = function (selectedItem) {
      checkoutDataService.removeItem(_instance.data, selectedItem);
    };

    _instance.checkout = function () {
      if (_instance.data.selectedItems.length > 0) {
        var data = {};
        data.selectedItems = _instance.data.selectedItems;
        data.totalAmount = _instance.data.totalAmount;
        data.numberOfItems = _instance.data.numberOfItems;
        checkoutDataService.setCheckoutData(data);
        $state.go('order', {});
      }
    }

  }
  angular.module('joveo')
    .controller('CheckoutController', CheckoutController);

})();