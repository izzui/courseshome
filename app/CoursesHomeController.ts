/// <reference path="CoursesHome.ts" />

class CoursesHomeController {

    constructor($scope, $location, coursesHomeModel:CoursesHome) {
        $scope.model = coursesHomeModel;
        $scope.model.updateSearch($location.search());
        $scope.model.coursesRefreshed = (params) => { this.updateLocation($location, params) }
    }

    updateLocation(location, params = {}): void {
        location.search(params);
    }
}


