/// <reference path="CoursesFactory.ts" />
/// <reference path="ICourse.ts" />
/// <reference path="../d.ts/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../d.ts/DefinitelyTyped/watch/watch.d.ts" />

class CoursesHome {

    coursesList: ICourse[];
    coursesPage: ICourse[];
    languages:string[] = ["All languages"];
    sortOrders = [ "Date", "Views", "Alphabetic", "Ratings"];
    topics:string[] = [ "All", "Games", "Education", "Fashion", "Sports", "Technology" ];
    pages: number[] = [ 1 ];

    constructor(public coursesFactory:CoursesFactory, public topic:string = "All",
                public language:string = "All languages",
                public sortOrder = "Views",
                public page = 1,
                public coursesPerPage = 3) {
        
        watch(this, "topic", () => {
            this.language = "All languages";
            this.refreshCourses();
            this.refreshLanguages();
        });
        watch(this, "language", () => { this.refreshCourses(); });
        watch(this, "sortOrder", () => { this.refreshCourses(); });
        watch(this, "page", () => { this.refreshCourses(false) });

        this.refreshCourses();
        this.refreshLanguages();
    }

    refreshCourses(resetPage:bool = true):void {
        this.coursesList = this.coursesFactory.findCourses(this.topic, this.language, this.sortOrder, this.page, this.coursesPerPage);
        this.coursesPage = this.coursesList.slice((this.page - 1) * this.coursesPerPage, (this.page - 1) * this.coursesPerPage + this.coursesPerPage); 
        this.pages = this.pageRange(this.coursesList.length / this.coursesPerPage);
        if (resetPage) this.page = 1;
    }

    pageRange(size: number): number[]{
        var range = [];
        for (var i = 1; i <= Math.ceil(size); i++) { range.push(i); }
        return range;
    }

    refreshLanguages():void {
        var languages = { "All languages": true };
        this.coursesList.forEach((course:ICourse) => { languages[course.language] = true });
        this.languages = Object.keys(languages);
    }

}