angular.module("students").filter("custom",function(){

     return function(student, param1, param2){
         total = 0;
         for( k in student.marks){
                total = total + parseInt(student.marks[k]);
         }
        return total
     }
});