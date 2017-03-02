angular.module("OpenSourceTacos")
  .controller("restaurant", restaurantCtrl)

restaurantCtrl.$inject = ["restaurantInfo"]

function restaurantCtrl(restaurantInfo) {
  var restaurant = this;

  restaurant.tacoStand = restaurantInfo.tacoStand;
  console.log(restaurantInfo);
  restaurant.order = [];

  restaurant.name = "Open Source World of Tacos";

  restaurant.buy = function (item) {
    confirm("Do you want to add this " + item.name + " to your basket?");
    if (item) {
       restaurant.order.push(item);
       console.log(restaurant.order);
    }
  }

  // restaurant.checkOut () {
  //   restaurant.cart = true;
  //
  // }

  restaurant
  // var something = new Order(order)
}
