var CoursesHome = (function () {
    function CoursesHome(coursesFactory, topic, language, sortOrder, page, coursesPerPage) {
        if (typeof topic === "undefined") { topic = "All"; }
        if (typeof language === "undefined") { language = "All languages"; }
        if (typeof sortOrder === "undefined") { sortOrder = "Views"; }
        if (typeof page === "undefined") { page = 1; }
        if (typeof coursesPerPage === "undefined") { coursesPerPage = 3; }
        var _this = this;
        this.coursesFactory = coursesFactory;
        this.topic = topic;
        this.language = language;
        this.sortOrder = sortOrder;
        this.page = page;
        this.coursesPerPage = coursesPerPage;
        this.languages = ["All languages"];
        this.sortOrders = ["Date", "Views", "Alphabetic", "Ratings"];
        this.topics = ["All", "Games", "Education", "Fashion", "Sports", "Technology"];
        this.pages = [1];
        watch(this, "topic", function () {
            _this.language = "All languages";
            _this.refreshCourses();
            _this.refreshLanguages();
        });
        watch(this, "language", function () {
            _this.refreshCourses();
        });
        watch(this, "sortOrder", function () {
            _this.refreshCourses();
        });
        watch(this, "page", function () {
            _this.refreshCourses(false);
        });

        this.refreshCourses();
        this.refreshLanguages();
    }
    CoursesHome.prototype.refreshCourses = function (resetPage) {
        if (typeof resetPage === "undefined") { resetPage = true; }
        this.coursesList = this.coursesFactory.findCourses(this.topic, this.language, this.sortOrder, this.page, this.coursesPerPage);
        this.coursesPage = this.coursesList.slice((this.page - 1) * this.coursesPerPage, (this.page - 1) * this.coursesPerPage + this.coursesPerPage);
        this.pages = this.pageRange(this.coursesList.length / this.coursesPerPage);
        if (resetPage)
            this.page = 1;
    };

    CoursesHome.prototype.pageRange = function (size) {
        var range = [];
        for (var i = 1; i <= Math.ceil(size); i++) {
            range.push(i);
        }
        return range;
    };

    CoursesHome.prototype.refreshLanguages = function () {
        var languages = { "All languages": true };
        this.coursesList.forEach(function (course) {
            languages[course.language] = true;
        });
        this.languages = Object.keys(languages);
    };
    return CoursesHome;
})();
