angular.module("students").controller("HomeController",function(StudentService,$scope){
 
$scope.students = [];
$scope.search = "";
$scope.sorter = ""; 
// $scope.test = StudentService.read();
StudentService.read().then(function(students){
// console.log("students",students);
$scope.students = students;
},
function(){

});


//service-> http -> capture teh repsonse -> controller
//inside success function 
$scope.buttons = ["Creates", "Updates", "Deletes"];
$scope.onBtnClick = function(btn){
    console.log("asdf")
            }

})