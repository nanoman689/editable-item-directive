angular.module('myApp', []).
  directive('makeEditable', function(){
    return {
      templateUrl: 'editMe.html',
      replace: true,
      restrict:'A',
      transclude: true,
      scope: true,
    }
  });
