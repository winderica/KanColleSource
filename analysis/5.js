/*
 * the function called by `475.js`
 * configuration of width and height
 */
const function5 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: true });
    /*
     * class represent by IIFE, the same as:
            class n {
                static _width = 1200;
                static _height = 720;
                static get width() {
                    return this._width;
                }
                static get height() {
                    return this._height;
                }
            }
     */
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
        t._width = 1200; // game width
        t._height = 720; // game height
        return t;
    }();
    // `export default n`
    e.default = n
};