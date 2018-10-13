const function47 = function (t, e, i) {
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
    var o = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.getPreInitializeTask = function (t, e) {
            return void 0 === e && (e = null), null
        }, e.prototype.getInitializeTask = function (t) {
            return null
        }, e.prototype.getPreFinalizeTask = function () {
            return null
        }, e.prototype.getFinalizeTask = function () {
            return null
        }, e
    }(PIXI.Container);
    e.SceneBase = o
}