const function1496 = function (t, e, i) {
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
    var o = i(15),
        r = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.draw = function (t) {
                t = Math.max(t, 0), t = Math.min(t, 1), this.clear();
                var e = o.MathUtil.getColor(t),
                    i = 60 * t;
                this.beginFill(e), this.drawRect(0, 60 - i, 10, i), this.endFill()
            }, e
        }(PIXI.Graphics);
    e.BannerHPBar = r
}