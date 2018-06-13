angular.module("students").service("StudentService", function ($http) {
  var student = {};
  var baseurl = "https://api.mlab.com/api/1";
  var database = "/databases/ferrisstateuniversity";
  var collection = "/collections/students";
  var apikey = "?apiKey=EnLB0fOjdslpBOoaLcH9wreO9z7hR8Vy";
  var students = [];
  student.read = function (params) {
    var url = baseurl + database + collection + apikey;
    return $http.get(url).then(
    function(response){
    students = response.data;
    return response.data;
    },
    function(response){

    }
    )
  }
  student.create = function (params) {
    var url = baseurl + database + collection + apikey;
    return $http.post(url,params).then(
    function(response){
    return response.data;
    },
    function(response){

    }
    )
  }
  student.update = function (params,id) {
   var url = baseurl + database + collection + '/' + id + apikey;
    return $http.put(url,params).then(
    function(response){
    var studentIndex = -1;
    for(var i = 0; i < response.data.length; i++){ //[a,b,c,d].splice(2,1) = [a,b,d] //a,b,c,d].splice(2,1,e) = [a,b,e,d]
     if(respose.data[i]._id.$oid == id){
       studentIndex = i
     }
    }
    students.splice(studentIndex,1,response.data);
    console.log(students);
    return response.data;
    },
    function(response){

    }
    )
  }
  student.remove = function (params) {

  }
  student.get = function (id){
    var url = baseurl + database + collection +'/'+ id + apikey;
    return $http.get(url).then(
    function(response){
    return response.data;
    },
    function(response){

    }
    )
  }
  student.extract = function(id){
    var temp = {};
    for (var i=0; i<students.length; i++){
      if(students[i]._id.$oid == id){
        temp = students[i];
      }
    }
    return temp;
  }
  return student;
})