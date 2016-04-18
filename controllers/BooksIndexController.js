angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;
  $http({
    url:"https://super-crud.herokuapp.com/books",
    method:'GET'
  }).then(function (response) {
    vm.books = response.data.books;
    console.log(response.data);
  }).then(function callError(err) {
    console.log(err);
  });
}
