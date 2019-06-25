const function1277 = function (t, e, i) {
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
    var o = i(244),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._imgs = [], e
            }
            return n(e, t), e.prototype.update = function (t) {
                if (this._imgs = [], t <= 0) {
                    var e = new o.NumericalDisplay(0);
                    this.addChild(e), this._imgs.push(e)
                } else
                    for (; t > 0;) {
                        var i = t % 10,
                            e = new o.NumericalDisplay(i);
                        this.addChild(e), this._imgs.push(e), t = Math.floor(t / 10)
                    }
                var n = new o.NumericalDisplay(-1);
                this.addChild(n), this._imgs.push(n), this._imgs = this._imgs.reverse();
                for (var r = 0, s = 0, a = this._imgs; s < a.length; s++) {
                    var _ = a[s];
                    _.x = r, r += _.width
                }
            }, e
        }(PIXI.Container);
    e.NumericalDisplaySet = r
}