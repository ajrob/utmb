'use strict';

angular.module('utmbApp')
  .controller('trailCtrl', ['$scope', function ($scope) {
    $scope.regions = ['Salt Lake Valley', 'Ogden', 'Utah Valley'];
  }]);