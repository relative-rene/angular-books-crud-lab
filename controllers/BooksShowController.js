angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;

  $http({
    method:"GET",
    url:'https://super-crud.herokuapp.com/books/'+$routeParams.id
  }).then(function(response) {
    vm.book= reponse.data;
  }).then(function(err) {
    console.log(err);
  });

  vm.editBook = function() {
    $http({
      method: "PUT",
      url: "https://super-crud.herokuapp.com/books/"+$routeParams.id,
      data: {
        title: vm.book.title,
        aurthor:vm.book.author,
        image:vmbook.image,
        releaseDate: vm.book.releaseDate
      }
    }).then(function(reponse) {
      vm.book = reponse.data;
      $location.path('/');
    });
}
vm.deleteBook = function() {
  $http({
    method: "DELETE",
    url: "https://super-crud.herokuapp.com/books/"+$routeParams.id
  }).then(function(response) {
    $location.path('/');
  });

vm.cancelEdits = function (){
  vm.editing = false;
  vmbooks = vm.preditedBook

vm.statsEdits = function () {
  vm.editing =true;
  vm.preditedBook = vm.book;
}

}
