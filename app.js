angular.module('iceCreamApp', []).controller('MainController', function($scope) {
      $scope.products = [
        {
          name: 'Ice Cream',
          defaultImage: 'images/ice.jpg',
          prices: { Small: 50, Medium: 70, Large: 90 },
          flavors: [
            { name: 'Vanilla', image: 'images/vanilla.jpg', color: 'beige' },
            { name: 'Chocolate', image: 'images/chocolate.jpg', color: 'saddlebrown' },
            { name: 'Strawberry', image: 'images/strawberry.jpg', color: 'pink' }
          ]
        },
        {
          name: 'Popsicle',
          defaultImage: 'images/popsicle.jpg',
          prices: { Small: 30, Medium: 45, Large: 60 },
          flavors: [
            { name: 'Orange', image: 'images/orange.jpg', color: 'orange' },
            { name: 'Grape', image: 'images/grape.jpg', color: 'purple' },
            { name: 'Lime', image: 'images/lime.jpg', color: 'green' }
          ]
        }
      ];

      $scope.sizes = ['Small', 'Medium', 'Large'];
      $scope.currentPage = 'home';
      $scope.cartVisible = false;
      $scope.quantity = 1;

      $scope.viewProduct = function(product) {
        $scope.selectedProduct = product;
        $scope.selectedFlavor = product.flavors[0];
        $scope.selectedSize = $scope.sizes[0];
        $scope.updateImageSize();
        $scope.currentPage = 'product';
      };

      $scope.selectFlavor = function(flavor) {
        $scope.selectedFlavor = flavor;
      };

      $scope.updateImageSize = function() {
        if ($scope.selectedSize === 'Small') $scope.imageSize = 100;
        else if ($scope.selectedSize === 'Medium') $scope.imageSize = 100;
        else if ($scope.selectedSize === 'Large') $scope.imageSize = 100;
      };

      $scope.addToCart = function() {
        const size = $scope.selectedSize;
        const price = $scope.selectedProduct.prices[size];
        $scope.cartItem = {
           product: $scope.selectedProduct,
           size: size,
           flavor: $scope.selectedFlavor,
           quantity: $scope.quantity || 1,
           pricePerItem: price
        };
        $scope.cartVisible = true;
      };

      $scope.proceedToCheckout = function() {
        $scope.cartVisible = false;
        $scope.currentPage = 'billing';
        $scope.billing = {};
      };

      $scope.placeOrder = function() {
        if ($scope.billingForm.$valid) {
          $scope.orderPlaced = true;
        }
      };
      $scope.goBackToCart = function() {
      $scope.currentPage = 'product';
      $scope.cartVisible = true;
      };

      $scope.goHome = function() {
      $scope.currentPage = 'home';
      $scope.orderPlaced = false;
      $scope.cartVisible = false;
      $scope.quantity = 1;
      };

    });