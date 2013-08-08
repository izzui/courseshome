var CoursesHomeApp = angular.module('CoursesHomeApp', []);

CoursesHomeApp.factory('coursesFactory', function () {
    return new CoursesFactory();
});

CoursesHomeApp.factory('coursesHomeModel', function (coursesFactory) {
    return new CoursesHome(coursesFactory);
});
