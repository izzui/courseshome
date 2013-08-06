/// <reference path="../d.ts/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../d.ts/DefinitelyTyped/angularjs/angular-mocks.d.ts" />
/// <reference path="../app/CoursesHome.ts" />
/// <reference path="../d.ts/DefinitelyTyped/jasmine/jasmine.d.ts" />

describe("CoursesHome", () => {

    var home: CoursesHome;

    beforeEach(() => {
        module('CoursesHomeApp');
        inject((coursesHomeModel) => { this.home = coursesHomeModel });
        this.home.updateSearch({});
    });

    it("return all courses", () => {
        var home = this.home;
        expect(home.coursesList.length).toBe(6);
        expect(home.languages.length).toBe(3);
    });

    it("return only english courses", () => {
        var home = this.home;
        expect(home.coursesList.length).toBe(6);
        home.language = "en";
        expect(home.coursesList.length).toBe(2);
        expect(home.languages.length).toBe(3);
    });

    it("return only Games courses", () => {
        var home = this.home;
        expect(home.coursesList.length).toBe(6);
        home.topic = "Games";
        expect(home.coursesList.length).toBe(1);
        expect(home.languages.length).toBe(2);
    });

    it("return only Technology courses", () => {
        var home = this.home;
        expect(home.coursesList.length).toBe(6);
        home.topic = "Technology";
        expect(home.coursesList.length).toBe(2);
        expect(home.languages.length).toBe(2);
    });

    it("sorts by views", () => {
        var home = this.home;
        expect(home.coursesList.length).toBe(6);
        expect(home.coursesList[0].title).toBe("Autocad 2010");
    });

    it("sorts by date", () => {
        var home = this.home;
        home.sortOrder = "Date";
        expect(home.coursesList.length).toBe(6);
        expect(home.coursesList[0].title).toBe("Maquiagem para festa");
    });

    it("sorts by title", () => {
        var home = this.home;
        home.sortOrder = "Alphabetic";
        expect(home.coursesList.length).toBe(6);
        expect(home.coursesList[0].title).toBe("Autocad 2010");
    });

    it("sorts by rating", () => {
        var home = this.home;
        home.sortOrder = "Ratings";
        expect(home.coursesList.length).toBe(6);
        expect(home.coursesList[0].title).toBe("Planet Earth");
    });

    it("paginates", () => {
        var home:CoursesHome = this.home;
        expect(home.pages).toEqual([1, 2]);
        expect(home.coursesPage.length).toBe(3);
        expect(home.coursesPage[0].title).toBe("Autocad 2010");
        home.page = 2;
        expect(home.coursesPage.length).toBe(3);
        expect(home.coursesPage[0].title).toBe("History of videogames");
    });

});