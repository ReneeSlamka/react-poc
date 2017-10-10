import React from 'react';
import ReactDOM from 'react-dom';
import Angular from 'angular';

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('thingy-wrapper')
// );

angular.module('app',[])
       .controller('TestCtrl', function($scope) {
           $scope.titleStr = "This is a test";
       })
       .directive('test', function() {

           return {
               restrict: 'E',
               scope: {
                   phrase: '@'
               },
               template: '<p>{{phrase}}</p>'
           };
       });


angular.element(function() {
    angular.bootstrap(document, ['app']);
});
