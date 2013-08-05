/// <reference path="app.ts" />

CoursesHomeApp.directive('izSelector', () => {
    return {
        replace: true,
        restrict: "E",
        transclude: true,
        template: '<span><strong ng-transclude></strong><span ng-repeat="item in collection" ng-switch="selector == item">' +
        '<a href="#" ng-switch-when="false" ng-click="select(item)">{{item}}</a>' +
        '<span ng-switch-when="true">{{item}}</span> | </span></span>',
        scope: {
            selector: '=',
            collection: '='
        },
        link: (scope, element, attrs) => {
            scope.select = (item) => { scope.selector = item }
        }
    }
});