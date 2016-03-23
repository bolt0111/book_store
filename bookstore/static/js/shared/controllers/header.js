angular.module("bookStore").controller('headerCtrl',['$scope','CartService',function($scope,CartService){
	$scope.toggleSideBar= function(e){
		$("#book-store-container").toggleClass("toggle-sidebar");
	}
	
	var getCart= function(){
		CartService.getCartByUser("adit21").then(function(res){
			$scope.cart = res.data.cart;
		})
	}
	var init = function(){
		getCart();
	}
	init();
}])