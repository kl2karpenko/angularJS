(function () {
    angular
        .module('BooksModule', ['BooksCtrl'])
        .controller('BooksCtrl', [ '$scope',
            function($scope){
                //$http.get('books.json').success(function(data) {
                    $scope.books = [
                        {
                            "name" : "20 Steps",
                            "price" : "$10"
                        },
                        {
                            "name" : "21 Steps",
                            "price" : "$15"
                        }
                    ];
                //});
            }]);
})();