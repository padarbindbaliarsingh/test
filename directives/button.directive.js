angular.module("students").directive("studentButton",studentButton);

function studentButton(){
    return {
        restrict:"AEC",
        scope:{
            buttonText: '=', // passing data as a controller variable
            onBtnClick: '='
        },
        templateUrl:'./directives/button.directive.tpl.html',
        link:function(scope,element,attribute){//function executed before template rendering
       // scope.buttonText = attribute.buttonText; // passing data as string
        },
        controller:function($scope){//function executed after template rendering
           
        }

    }
}