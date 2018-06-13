angular.module("students").config(function($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'home',
    url: '/',
    templateUrl: './partials/home.tpl.html',
    controller: 'HomeController'
  }

  var studentState = {
    name: 'student',
    url: '/student/:id',
    templateUrl: './partials/student.tpl.html',
    controller: 'StudentController',
    params:  {
              id: {
                     value: null,
                     squash: true
                  }
                }
  }
//$urlRouterProvider.otherwise('/');
  $stateProvider.state(homeState);
  $stateProvider.state(studentState);
 // $stateProvider
  //  .state("otherwise", { url : '/'})
});