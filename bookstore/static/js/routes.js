app.config(function($routeProvider){
	$routeProvider.when("/",{
		redirectTo:'/bookstore'
	}).
	when("/bookstore",{
		templateUrl:'static/js/components/store/templates/popular-books.html',
		controller:"storeCtrl"
	}).
	when("/store/books",{
		templateUrl:'static/js/components/books/templates/booklist.html',
		controller:"booksCtrl"
	}).
	when("/bookstore/book/info/:isbn",{
		templateUrl:'static/js/components/books/templates/bookDetails.html',
		controller:"booksCtrl"
	}).
	when("/bookstore/books/category/:categoryid/:categoryName",{
		templateUrl:'static/js/components/books/templates/booklist.html',
		controller:"booksCtrl"
	}).
	when("/bookstore/cart",{
		templateUrl:'static/js/components/cart/templates/cart.html',
		controller:"cartCtrl"
	}).
	when("/bookstore/about",{
		templateUrl:'',
		controller:"aboutCtrl"
	}).
	when("/user/profile",{
		templateUrl:'',
		controller:"profileCtrl"
	}).
	when("/orders",{
		templateUrl:'static/js/components/orders/templates/order.html',
		controller:"orderCtrl"
	}).
	when("/bookstore/contact",{
		templateUrl:'',
		controller:"contactCtrl"
	}).
	when("/checkout/shipment",{
		templateUrl:'static/js/components/checkout/shipment/shipment.html',
		controller:"shipmentCtrl"
	}).
	when("/user/wishlist",{
		templateUrl:'static/js/components/wishlist/templates/wishlist.html',
		controller:"wishlistCtrl"
	}).
	when("/checkout/payment",{
		templateUrl:'static/js/components/checkout/payment/payment.html',
		controller:"paymentCtrl"
	}).
    otherwise({
        redirectTo: '/'
    });
});