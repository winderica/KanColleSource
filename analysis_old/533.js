/*
 * the function called by `531.js`
 * content
 */
const function533 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", { value: !0 });
    // class o extends PIXI.Container
    var o = function (t) {
        function e() {
            return t.call(this) || this
        }

        n(e, t);
        // getter
        e.prototype.getContent = function () {
            return this._content
        };
        // setter
        e.prototype.setContent = function (t) {
            null != this._content && this.removeChild(this._content);
            this._content = t;
            null != t && this.addChild(t);
            this.visible = null != this._content
        };
        return e;
    }(PIXI.Container);
    e.ContainerScene = o
}