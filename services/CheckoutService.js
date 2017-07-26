(function () {

  'use strict';

  /* jshint validthis:true */
  var STREAMS = 'streams';

  function getSouthIndianMenu() {
    return [
      {
        "name": "Idly",
        "price": 40
      },
      {
        "name": "Vada",
        "price": 50
      },
      {
        "name": "Plain Dosa",
        "price": 50
      },
      {
        "name": "Masala Dosa",
        "price": 80
      },
      {
        "name": "Paneer Dosa",
        "price": 90
      },
      {
        "name": "Onion Uthappam",
        "price": 80
      }
    ];
  }

  function getNorthIndianMenu() {
    return [
      {
        "name": "Samosa",
        "price": 20
      },
      {
        "name": "Poori Aloo Dum",
        "price": 40
      },
      {
        "name": "Aloo Paratha",
        "price": 50
      },
      {
        "name": "Masala Paratha",
        "price": 80
      },
      {
        "name": "Chana Kulcha",
        "price": 80
      },
      {
        "name": "Chola Bhatura",
        "price": 100
      }
    ];
  }

  function checkoutDataService() {
    var _service = this;

    function getCheckoutData() {
      return _service.data;
    }

    function setCheckoutData(data) {
      _service.data = data;
    }

    function addItem(data, item) {
      var increamentCounter = false;
      _.each(data.selectedItems, function (selectedItem, index) {
        if ((selectedItem.name == item.name)) {
          increamentCounter = true;
          data.totalAmount += data.selectedItems[index].originalPrice;
          data.selectedItems[index].price += data.selectedItems[index].originalPrice;
          data.selectedItems[index].count++;
        }
      });
      if (!increamentCounter) {
        var length = data.selectedItems.length;
        data.selectedItems.push(angular.copy(item));
        data.totalAmount += data.selectedItems[length].price;
        data.selectedItems[length].originalPrice = item.price;
        data.selectedItems[length].count = 1;
      }
      data.numberOfItems++;
    }

    function removeItem(data, selectedItem) {
      _.each(data.selectedItems, function (item, index) {
        if (selectedItem.name == item.name) {
          if (data.selectedItems[index].count === 1) {
            data.selectedItems[index].count--;
            data.totalAmount -= data.selectedItems[index].originalPrice;
            data.selectedItems.splice(index, 1);
          } else {
            data.totalAmount -= data.selectedItems[index].originalPrice;
            data.selectedItems[index].price -= data.selectedItems[index].originalPrice;
            data.selectedItems[index].count--;
          }
          data.numberOfItems--;
        }
      });
    }

    return _.create(checkoutDataService, {
      getCheckoutData: getCheckoutData,
      setCheckoutData: setCheckoutData,
      getSouthIndianMenu: getSouthIndianMenu,
      getNorthIndianMenu: getNorthIndianMenu,
      addItem: addItem,
      removeItem: removeItem
    });

  }

  angular.module('joveo')
    .factory('checkoutDataService', checkoutDataService);

})();