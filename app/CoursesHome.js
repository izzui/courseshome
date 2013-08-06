var CoursesHome = (function () {
    function CoursesHome(coursesFactory) {
        var _this = this;
        this.coursesFactory = coursesFactory;
        this.DEFAULTS = {
            topic: "All",
            language: "All languages",
            sortOrder: "Views",
            page: 1,
            coursesPerPage: 3
        };
        this.languages = ["All languages"];
        this.sortOrders = ["Date", "Views", "Alphabetic", "Ratings"];
        this.topics = ["All", "Games", "Education", "Fashion", "Sports", "Technology"];
        this.pages = [1];
        this.topic = this.DEFAULTS["topic"];
        this.language = this.DEFAULTS["language"];
        this.sortOrder = this.DEFAULTS["sortOrder"];
        this.page = this.DEFAULTS["page"];
        this.coursesPerPage = this.DEFAULTS["coursesPerPage"];
        this.coursesRefreshed = function (params) {
        };

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
    }
    CoursesHome.prototype.updateSearch = function (params) {
        WatchJS.noMore = true;
        this.topic = params.topic || this.DEFAULTS["topic"];
        this.language = params.language || this.DEFAULTS["language"];
        this.sortOrder = params.sortOrder || this.DEFAULTS["sortOrder"];
        this.page = params.page || this.DEFAULTS["page"];
        this.coursesPerPage = params.coursesPerPage || this.DEFAULTS["coursesPerPage"];
        this.refreshCourses();
        this.refreshLanguages();
        WatchJS.noMore = false;
    };

    CoursesHome.prototype.refreshCourses = function (resetPage) {
        if (typeof resetPage === "undefined") { resetPage = true; }
        this.coursesList = this.coursesFactory.findCourses(this.topic, this.language, this.sortOrder, this.page, this.coursesPerPage);
        this.coursesPage = this.coursesList.slice((this.page - 1) * this.coursesPerPage, (this.page - 1) * this.coursesPerPage + this.coursesPerPage);
        this.pages = this.pageRange(this.coursesList.length / this.coursesPerPage);
        if (resetPage)
            this.page = 1;
        this.coursesRefreshed({ topic: this.topic, language: this.language, sortOrder: this.sortOrder, page: this.page, coursesPerPage: this.coursesPerPage });
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
