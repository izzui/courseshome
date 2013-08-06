var _this = this;
describe("CoursesHome", function () {
    var home;

    beforeEach(function () {
        module('CoursesHomeApp');
        inject(function (coursesHomeModel) {
            _this.home = coursesHomeModel;
        });
        _this.home.updateSearch({});
    });

    it("return all courses", function () {
        var home = _this.home;
        expect(home.coursesList.length).toBe(6);
        expect(home.languages.length).toBe(3);
    });

    it("return only english courses", function () {
        var home = _this.home;
        expect(home.coursesList.length).toBe(6);
        home.language = "en";
        expect(home.coursesList.length).toBe(2);
        expect(home.languages.length).toBe(3);
    });

    it("return only Games courses", function () {
        var home = _this.home;
        expect(home.coursesList.length).toBe(6);
        home.topic = "Games";
        expect(home.coursesList.length).toBe(1);
        expect(home.languages.length).toBe(2);
    });

    it("return only Technology courses", function () {
        var home = _this.home;
        expect(home.coursesList.length).toBe(6);
        home.topic = "Technology";
        expect(home.coursesList.length).toBe(2);
        expect(home.languages.length).toBe(2);
    });

    it("sorts by views", function () {
        var home = _this.home;
        expect(home.coursesList.length).toBe(6);
        expect(home.coursesList[0].title).toBe("Autocad 2010");
    });

    it("sorts by date", function () {
        var home = _this.home;
        home.sortOrder = "Date";
        expect(home.coursesList.length).toBe(6);
        expect(home.coursesList[0].title).toBe("Maquiagem para festa");
    });

    it("sorts by title", function () {
        var home = _this.home;
        home.sortOrder = "Alphabetic";
        expect(home.coursesList.length).toBe(6);
        expect(home.coursesList[0].title).toBe("Autocad 2010");
    });

    it("sorts by rating", function () {
        var home = _this.home;
        home.sortOrder = "Ratings";
        expect(home.coursesList.length).toBe(6);
        expect(home.coursesList[0].title).toBe("Planet Earth");
    });

    it("paginates", function () {
        var home = _this.home;
        expect(home.pages).toEqual([1, 2]);
        expect(home.coursesPage.length).toBe(3);
        expect(home.coursesPage[0].title).toBe("Autocad 2010");
        home.page = 2;
        expect(home.coursesPage.length).toBe(3);
        expect(home.coursesPage[0].title).toBe("History of videogames");
    });
});
//@ sourceMappingURL=CoursesHome_spec.js.map
