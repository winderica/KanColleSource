/*
 * the function called by `474.js`
 * configuration of width and height
 */
const function5 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: true });
    // IIFE
    var n = function () {
        function t() {
        }

        Object.defineProperty(t, "width", {
            get: function () {
                return this._width
            }, enumerable: true, configurable: true
        });
        Object.defineProperty(t, "height", {
            get: function () {
                return this._height
            }, enumerable: true, configurable: true
        });
        t._width = 1200;
        t._height = 720;
        return t;
    }();
    e.default = n
};