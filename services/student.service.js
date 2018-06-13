angular.module("students").service("StudentService", function ($http,$q, API, ) {//StudentsFactory
  var student = {};
  var students = []; // temporary variable -> empty with zero student 

  student.read = function (params) {

  var deferred =$q.defer();
    
    var url = API.baseUrl + API.database + API.collection+"/students" + API.key;
    if(!students.length){ //on the first load

              $http.get(url).then(
                  function(response){ //success
                    students = response.data; //storing the data into temporary variable
                    //add the marks
                   // StudentsFactory.addMarks(students)
                    //put total
                    //put rank
                    deferred.resolve(students);
                  },
                  function(response){ //error
                    deferred.reject(response.data);
                  }
              );
    }else{ //on navigation
      deferred.resolve(students); // students is mapped to line no 7 which is equalized to response.data in line 19 on first call
    }
    return deferred.promise;
  }
  student.create = function (params) {
    var url = API.baseUrl + API.database + API.collection+"/students" + API.key;
    
    return $http.post(url,params).then(
    function(response){
    return response.data;
    },
    function(response){

    }
    )
  }
  student.update = function (params,id) {
    var url = API.baseUrl + API.database + API.collection+"/students/"+id + API.key;
    
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
    var url = API.baseUrl + API.database + API.collection+"/students/"+id + API.key;
    
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