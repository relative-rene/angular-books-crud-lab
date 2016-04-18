angular.module('libraryApp', ['ngRoute'])
       .config(config)
       .controller('BooksShowController', BooksShowController)
       .controller('BooksIndexController', BooksIndexController);
////////////
// ROUTES //
////////////
var baseUrl = "https://super-crud.herokuapp.com/books";

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: "templates/index.html",/* Include the path to the index template */
      controller:  "BooksIndexController",/* Which controller do you want the main page to use */
      controllerAs: "bookIndexCtrl"/* What will you call the controller in the html? */
    })
    .when ('/show', {
      templateUrl: "templastes/show.html",
      controller: "BooksShowController",
      controllerAs: "booksShowCtrl"
    })
    /* Include the additional route here! */
    .otherwise({
      redirectTo: '/'
    });

  // this just makes it so our URLs don't have /#/ in them.
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}

BooksIndexController.$inject = ['$routeParams'];
function BooksIndexController($routeParams) {
  var vm = this;
  var bookId = $routeParams.bookId;
  $http({
    method: 'GET',
    url: 'baseUrl'+bookId,
  }).then(function successCallback (response) {
    console.log("response for all books", response);
  }), function errorCallback(error) {
    console.log('There was an error getting the data', error);
}
}
BooksShowController.$inject = ['$routeParams'];
function BooksShowController($routeParams){
  var vm = this;
  var bookId = $routeParams.bookId;
}
