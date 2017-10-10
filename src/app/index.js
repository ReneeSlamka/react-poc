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

class Test extends React.Component {
    render() {
        return <p>{this.props.phrase}</p>;
    }
}

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
               link: function (scope, elem, attrs) {
                 ReactDOM.render(<Test phrase="Blahddd"/>, elem[0]);
               }
           };
       });


angular.element(function() {
    angular.bootstrap(document, ['app']);
});
