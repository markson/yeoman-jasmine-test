/*global describe, it */
'use strict';

(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
				expect(true).toBe(true);
            });
        });
    });
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
			var title = document.title;
            it('should run here few assertions', function () {
				expect(title).toBe('god');
            });
        });
    });
})();
