describe("CoursesHome", function () {
    var controller;
    var scope;
    var model;

    beforeEach(module("CoursesHomeApp"));

    beforeEach(inject(function ($rootScope, $controller, $location) {
        model = sinon.stub({ updateSearch: function () {
            } });
        scope = $rootScope.$new();
        controller = $controller("CoursesHomeController", { $scope: scope, $location: $location, coursesHomeModel: model });
    }));

    it("updates the search based on the query string", function () {
        expect(scope.model).toBe(model);
        expect(model.updateSearch.calledOnce).toBe(true);
    });

    it("updates the query string based on the search params", function () {
        sinon.spy(controller, "updateLocation");
        model.coursesRefreshed();
        expect(controller.updateLocation.calledOnce).toBe(true);
    });
});
//@ sourceMappingURL=CoursesHomeController_spec.js.map
