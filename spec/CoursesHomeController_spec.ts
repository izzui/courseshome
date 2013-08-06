/// <reference path="../d.ts/DefinitelyTyped/sinon/sinon.d.ts" />
/// <reference path="../d.ts/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../d.ts/DefinitelyTyped/angularjs/angular-mocks.d.ts" />
/// <reference path="../app/CoursesHome.ts" />
/// <reference path="../app/CoursesHomeController.ts" />
/// <reference path="../d.ts/DefinitelyTyped/jasmine/jasmine.d.ts" />

describe("CoursesHome", function() {

    var controller;
    var scope;
    var model;

    beforeEach(module("CoursesHomeApp"));

    beforeEach(inject(function($rootScope, $controller, $location) {
        model = sinon.stub({ updateSearch: function() { } });
        scope = $rootScope.$new();
        controller = $controller("CoursesHomeController",
            { $scope: scope, $location: $location, coursesHomeModel: model });
    }));

    it("updates the search based on the query string", function() {
        expect(scope.model).toBe(model);
        expect(model.updateSearch.calledOnce).toBe(true);
    });

    it("updates the query string based on the search params", function () {
        sinon.spy(controller, "updateLocation");
        model.coursesRefreshed();
        expect(controller.updateLocation.calledOnce).toBe(true);
    });
});