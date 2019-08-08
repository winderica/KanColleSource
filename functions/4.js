const function4 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function (t) {
        function e(e, i, n) {
            void 0 === n && (n = "");
            var o = {
                fontFamily: "font_j",
                fontWeight: n,
                fontSize: e,
                fill: i
            };
            return t.call(this, null, o) || this
        }
        return n(e, t), e
    }(PIXI.Text);
    e.TextBox = o
}