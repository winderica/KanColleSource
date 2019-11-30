const function1363 = function (t, e, i) {
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
        r = i(24),
        s = i(20),
        a = i(16),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._layer = e, i._smoke1 = new l, i._smoke1.position.set(45, 39), i._smoke2 = new l, i._smoke2.position.set(54, 48), i._smoke3 = new l, i._smoke3.position.set(36, 65), i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = new s.TweenTask;
                e.addTween(this._createTween(this._smoke1, 0)), e.addTween(this._createTween(this._smoke2, 100)), e.addTween(this._createTween(this._smoke3, 400)), e.start(function () {
                    t._endTask()
                })
            }, e.prototype._createTween = function (t, e) {
                var i = this,
                    n = t.x - 105,
                    o = t.y - 8;
                return t.scale.set(0), createjs.Tween.get(t).wait(e).call(function () {
                    i._layer.addChild(t)
                }).to({
                    scaleX: 1,
                    scaleY: 1
                }, 200).to({
                    x: n,
                    y: o,
                    alpha: 0,
                    scaleX: 1.5,
                    scaleY: 1.5
                }, 400).call(function () {
                    i._layer.removeChild(t)
                })
            }, e
        }(o.TaskBase);
    e.AnimAntiAircraftFunshin = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite(a.BATTLE_MAIN.getTexture(150)), e._img.position.set(-32, -42), e.addChild(e._img), e
        }
        return n(e, t), e
    }(r.Container)
}