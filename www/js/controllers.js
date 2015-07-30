angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
  // Form data for the login modal
      // You can change this url to experiment with other endpoints
  var postsApi = 'http://myphpdevelopers.com/dev/assessment/companies';

  // This should go in a service so we can reuse it
  $http.get( postsApi ).
    success(function(data, status, headers, config) {
      $scope.companies = data;
    }).
    error(function(data, status, headers, config) {
      console.log( 'Companies load error.' );
    });
})

.controller('EmployeesCtrl', function($scope, $stateParams, $sce, $http ) {

  // we get the postID from $stateParams.postId, the query the api for that post
  var singlePostApi = 'http://myphpdevelopers.com/dev/assessment/company_employees?id=' + $stateParams.companyId;

  $http.get( singlePostApi ).
    success(function(data, status, headers, config) {
      $scope.emps = data.employees;
      $scope.comp = data.company_name;

    }).
    error(function(data, status, headers, config) {
      console.log( 'Single company load error.' );
    });

});