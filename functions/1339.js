const function1339 = function (t, e, i) {
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
    var o = i(2),
        r = i(23),
        s = i(16),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._layer = e, i._smoke = new _, i._smoke.position.set(75, 46), i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = this._smoke.x - 105,
                    i = this._smoke.y - 12;
                createjs.Tween.get(this._smoke).call(function () {
                    t._layer.addChild(t._smoke)
                }).to({
                    x: e,
                    y: i,
                    alpha: 0,
                    scaleX: 1.5,
                    scaleY: 1.5
                }, 500).call(function () {
                    t._layer.removeChild(t._smoke), t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.AnimAntiAircraftSanshikidan = a;
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite(s.BATTLE_MAIN.getTexture(145)), e._img.position.set(-140, -213), e.addChild(e._img), e
        }
        return n(e, t), e
    }(r.Container)
}