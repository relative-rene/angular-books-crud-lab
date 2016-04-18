angular.module('libraryApp', ['ngRoute'])
       .config(config);

////////////
// ROUTES //
////////////
var baseUrl = "https://super-crud.herokuapp.com/books";

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: "templates/books/index.html",/* Include the path to the index template */
      controller:  "BooksIndexController",/* Which controller do you want the main page to use */
      controllerAs: "booksIndexCtrl"/* What will you call the controller in the html? */
    })
    .when ('/books/:id', {
      templateUrl: "templates/books/show.html",
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
