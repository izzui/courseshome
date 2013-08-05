var CoursesHomeApp = angular.module('CoursesHomeApp', []);

CoursesHomeApp.factory('coursesFactory', function () {
    return new CoursesFactory();
});

var injector = angular.injector(['CoursesHomeApp']);

CoursesHomeApp.factory('coursesHomeModel', function () {
    return new CoursesHome(injector.get('coursesFactory'));
});
