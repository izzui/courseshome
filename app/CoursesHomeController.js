var CoursesHomeController = (function () {
    function CoursesHomeController($scope, $location, coursesHomeModel) {
        var _this = this;
        $scope.model = coursesHomeModel;
        $scope.model.updateSearch($location.search());
        $scope.model.coursesRefreshed = function (params) {
            _this.updateLocation($location, params);
        };
    }
    CoursesHomeController.prototype.updateLocation = function (location, params) {
        if (typeof params === "undefined") { params = {}; }
        location.search(params);
    };
    return CoursesHomeController;
})();
