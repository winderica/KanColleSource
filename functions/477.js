const function477 = function (t, e, i) {
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
            var e = t.call(this) || this;
            e._MAX_ = 360;
            var i = new PIXI.Graphics;
            return e._draw(i, 0), e.mask = i, e.addChild(i), e._bar = new PIXI.Graphics, e._bar.x = -e._MAX_, e.addChild(e._bar), e
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._draw(this, 16777215), this._draw(this._bar, t)
        }, e.prototype.createTween = function (t, e, i) {
            void 0 === i && (i = 1e3);
            var n = Math.max(t - e, 0), o = 0 == t ? 0 : n / t, r = this._MAX_ * o;
            return r = Math.min(this._MAX_, r), r = Math.max(0, r), createjs.Tween.get(this._bar).to({ x: -this._MAX_ + r }, i)
        }, e.prototype._draw = function (t, e) {
            t.beginFill(e), t.arc(8, 8, 8, Math.PI / 2, Math.PI / 2 * 3), t.arc(353, 8, 8, -Math.PI / 2, Math.PI / 2), t.endFill()
        }, e
    }(PIXI.Graphics);
    e.Gauge = o
}