angular.module("students").controller("StudentController",StudentController);


function StudentController($stateParams,$scope,StudentService){
   var id = $stateParams.id;
    $scope.student = {name:"",rollNo:""}
   var isCreate = true;
   if(id){
       isCreate = false;
      // getStudent(); // Traditiona way , making api for getting detail of individual student.
      $scope.student = StudentService.extract(id);
      console.log($scope.student);
   }
//    $scope.name = "";
//    $scope.rollNo = "";
  
   $scope.save = function(){
       if(isCreate){
        StudentService.create($scope.student).then(
        function(response){
         console.log(response);
        },function(response){

        }

        )   
       }else{
           StudentService.update($scope.student,id).then(
               function(response){
               console.log(response);
               },
               function (response){

               }
           )
       }
       console.log($scope.student);
   }
   function getStudent(){
       StudentService.get(id).then(
          function(student){
          console.log(student);
          },
          function(){

          }

       )
   }
}