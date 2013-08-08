/// <reference path="../d.ts/DefinitelyTyped/angularjs/angular-mocks.d.ts" />
/// <reference path="../d.ts/DefinitelyTyped/jasmine/jasmine.d.ts" />

describe('selector directive', function () {
    var scope,
        elem,
        directive,
        compiled,
        html;
    
    beforeEach(function () {
        module('CoursesHomeApp');
        html = '<iz-selector collection="model.collection" selector="model.selected"></iz-selector>';
        inject(function ($compile, $rootScope) {
            scope = $rootScope;
            scope.model = { collection: [1, 2, 3], selected: 1 }
            elem = angular.element(html);
            compiled = $compile(elem);
            compiled(scope);
            scope.$digest();
        });
    });

    it('renders collection items', function () {
        expect(elem.text()).toBe(' | 1 | 2 | 3');
    });

    it('selects a item from the collection and updates the model', function () {
        var item = angular.element('a:first', elem);
        item.click();
        expect(scope.model.selected).toBe(2);
    });

});