/*
 * the function called by `479.js`
 * definition of width and height
 */
const function5 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = function () {
        function t() {
        }

        return Object.defineProperty(t, "width", {
            get: function () {
                return this._width
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t, "height", {
            get: function () {
                return this._height
            }, enumerable: !0, configurable: !0
        }), t._width = 1200, t._height = 720, t // 1200 * 720
    }();
    e.default = n
}