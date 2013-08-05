var CoursesFactory = (function () {
    function CoursesFactory() {
        this.courses = [
            {
                title: "Planet Earth",
                author: "Flavia Coelho",
                topic: "Education",
                thumbUrl: "",
                views: 54,
                rating: 5,
                pubDate: new Date(2012, 1, 13),
                language: "en"
            },
            {
                title: "Photoshop",
                author: "Thiago Coelho",
                topic: "Technology",
                thumbUrl: "",
                views: 1782,
                rating: 4,
                pubDate: new Date(2012, 2, 23),
                language: "pt"
            },
            {
                title: "Autocad 2010",
                author: "Sistema AR",
                topic: "Technology",
                thumbUrl: "",
                views: 20420,
                rating: 4,
                pubDate: new Date(2012, 1, 13),
                language: "pt"
            },
            {
                title: "Jiu Jitsu",
                author: "Roberto Campos",
                topic: "Sports",
                thumbUrl: "",
                views: 1074,
                rating: 3,
                pubDate: new Date(2013, 3, 13),
                language: "pt"
            },
            {
                title: "History of videogames",
                author: "Henrique Rabello",
                topic: "Games",
                thumbUrl: "",
                views: 1229,
                rating: 3,
                pubDate: new Date(2011, 7, 1),
                language: "en"
            },
            {
                title: "Maquiagem para festa",
                author: "Izzui Mulher",
                topic: "Fashion",
                thumbUrl: "",
                views: 1720,
                rating: 4,
                pubDate: new Date(2013, 6, 23),
                language: "pt"
            }
        ];
    }
    CoursesFactory.prototype.findCourses = function (topic, language, sortOrder, page, coursesPerPage) {
        if (typeof topic === "undefined") { topic = "All"; }
        if (typeof language === "undefined") { language = "All languages"; }
        if (typeof sortOrder === "undefined") { sortOrder = "Views"; }
        if (typeof page === "undefined") { page = 1; }
        if (typeof coursesPerPage === "undefined") { coursesPerPage = 3; }
        return this.filter(this.courses, topic, language).sort(this.sortFunction(sortOrder));
    };

    CoursesFactory.prototype.sortBy = function (field, reverse, primer) {
        if (typeof reverse === "undefined") { reverse = false; }
        if (typeof primer === "undefined") { primer = undefined; }
        var key = function (x) {
            return primer ? primer(x[field]) : x[field];
        };

        return function (a, b) {
            var A = key(a), B = key(b);
            return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1, 1][+!reverse];
        };
    };

    CoursesFactory.prototype.sortFunction = function (sortOrder) {
        var sorter;
        switch (sortOrder) {
            case "Date":
                sorter = this.sortBy("pubDate", true);
                break;
            case "Alphabetic":
                sorter = this.sortBy("title");
                break;
            case "Ratings":
                sorter = this.sortBy("rating", true);
                break;
            default:
                sorter = this.sortBy("views", true);
                break;
        }
        return sorter;
    };

    CoursesFactory.prototype.filter = function (courses, topic, language) {
        return courses.filter(function (course) {
            if (topic != "All" && course.topic != topic)
                return false;
            if (language != "All languages" && course.language != language)
                return false;
            return true;
        });
    };
    return CoursesFactory;
})();
