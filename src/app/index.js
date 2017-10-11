import React from 'react';
import ReactDOM from 'react-dom';
import Angular from 'angular';
import PropTypes from 'prop-types';
import { react2angular } from 'react2angular';

class LinkIntegrationTest extends React.Component {
    render() {
        return <p>{this.props.phrase}</p>;
    }
}

class ReactToAngularTest extends React.Component {
    render() {
        return <p>{this.props.phrase}</p>;
    }
}

class ReactTranscludeTest extends React.Component {
    render() {
        return <div>{this.props.transclude}</div>;
    }
}

angular.module('app', [])
        .controller('TestCtrl', function($scope) {
           $scope.titleStr = "This is to test that my Angular controller is working";
           $scope.react2angularStr = "I'm a React component converted to an Angular directive by React2Angular!";
           $scope.transclusionSuccessStr = "WOHOO you got transclusion working!";
        })
        .component('reactToAngularTest', react2angular(ReactToAngularTest, ['phrase']))
        .directive('linkIntegrationWrapper', function() {

           return {
               restrict: 'E',
               scope: {
                   phrase: '@'
               },
               link: function (scope, elem, attrs) {
                 ReactDOM.render(<LinkIntegrationTest phrase={scope.phrase}/>, elem[0]);
               }
           };
        })
        .directive('transcludeTest', function() {
            return {
                restrict: 'E',
                scope: {},
                transclude: true,
                link: function(scope, elem, attrs, controller, transclude) {
                    var content = transclude();
                    ReactDOM.render(<ReactTranscludeTest transclude={content[0].data}/>, elem[0]);
                }
            }
        });


// angular.element(function() {
//     angular.bootstrap(document, ['app']);
// });
