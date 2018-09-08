const function678 = function (t, e, i) {
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
    var o = i(283), r = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.__getPositions__ = function () {
            return [[48, 0], [12, 50], [29, 86], [87, 86], [0, 140], [20, 224], [0, 381], [96, 426], [132, 390], [219, 395], [266, 426], [309, 381], [284, 320], [302, 120], [284, 84], [293, 48], [257, 26], [293, 0]]
        }, e
    }(o.BaseKirakira);
    e.CardKirakira = r
}