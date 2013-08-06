/// <reference path="CoursesFactory.ts" />
/// <reference path="ICourse.ts" />
/// <reference path="../d.ts/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../d.ts/DefinitelyTyped/watch/watch.d.ts" />

class CoursesHome {

    DEFAULTS = {
        topic: "All", 
        language: "All languages",
        sortOrder: "Views",
        page: 1,
        coursesPerPage: 3
    }

    coursesList: ICourse[];
    coursesPage: ICourse[];
    languages:string[] = ["All languages"];
    sortOrders = [ "Date", "Views", "Alphabetic", "Ratings"];
    topics:string[] = [ "All", "Games", "Education", "Fashion", "Sports", "Technology" ];
    pages: number[] = [ 1 ];
    public topic: string;
    public language: string;
    public sortOrder: string;
    public page: number;
    public coursesPerPage: number;
    public coursesRefreshed: (params: any) => void;

    constructor(public coursesFactory: CoursesFactory) {
        this.topic = this.DEFAULTS["topic"];
        this.language = this.DEFAULTS["language"];
        this.sortOrder = this.DEFAULTS["sortOrder"];
        this.page = this.DEFAULTS["page"];
        this.coursesPerPage = this.DEFAULTS["coursesPerPage"];
        this.coursesRefreshed = (params) => { };

        watch(this, "topic", () => {
            this.language = "All languages";
            this.refreshCourses();
            this.refreshLanguages();
        });
        watch(this, "language", () => { this.refreshCourses(); });
        watch(this, "sortOrder", () => { this.refreshCourses(); });
        watch(this, "page", () => { this.refreshCourses(false) });
    }

    updateSearch(params: any): void {
        WatchJS.noMore = true;
        this.topic = params.topic || this.DEFAULTS["topic"];
        this.language = params.language || this.DEFAULTS["language"];
        this.sortOrder = params.sortOrder || this.DEFAULTS["sortOrder"];
        this.page = params.page || this.DEFAULTS["page"];
        this.coursesPerPage = params.coursesPerPage || this.DEFAULTS["coursesPerPage"];
        this.refreshCourses();
        this.refreshLanguages();
        WatchJS.noMore = false;
    }

    refreshCourses(resetPage:bool = true):void {
        this.coursesList = this.coursesFactory.findCourses(this.topic, this.language, this.sortOrder, this.page, this.coursesPerPage);
        this.coursesPage = this.coursesList.slice((this.page - 1) * this.coursesPerPage, (this.page - 1) * this.coursesPerPage + this.coursesPerPage); 
        this.pages = this.pageRange(this.coursesList.length / this.coursesPerPage);
        if (resetPage) this.page = 1;
        this.coursesRefreshed({ topic: this.topic, language: this.language, sortOrder: this.sortOrder, page: this.page, coursesPerPage: this.coursesPerPage });
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