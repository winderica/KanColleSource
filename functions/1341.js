const function1341 = function (t, e, i) {
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
        r = i(12),
        s = i(16),
        a = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._scene = e, o._type = i, o._plane = n, o
            }
            return n(e, t), e.prototype._start = function () {
                null == this._plane ? this._endTask() : 5 == this._type ? this._animSanshiki() : 2 == this._type ? this._animKoukaku() : 3 == this._type ? this._animFunshin() : this._endTask()
            }, e.prototype._animSanshiki = function () {
                var t = this,
                    e = new _(5);
                e.x = this._plane.x, e.y = this._plane.y, this._scene.view.layer_cutin.addChild(e), createjs.Tween.get(e).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100).to({
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                }, 700).call(function () {
                    e.parent.removeChild(e), t._endTask()
                })
            }, e.prototype._animKoukaku = function () {
                var t = this,
                    e = new _(2);
                e.x = this._plane.x, e.y = this._plane.y, this._scene.view.layer_cutin.addChild(e), createjs.Tween.get(e).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100).to({
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                }, 700).call(function () {
                    e.parent.removeChild(e), t._endTask()
                })
            }, e.prototype._animFunshin = function () {
                var t = this,
                    e = new _(3);
                e.position.set(0, -15), this._plane.addChild(e);
                var i = new _(3);
                i.position.set(-15, 0), this._plane.addChild(i);
                var n = new _(3);
                n.position.set(23, 0), this._plane.addChild(n), createjs.Tween.get(e).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100).to({
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                }, 700), createjs.Tween.get(i).wait(100).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100).to({
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                }, 700), createjs.Tween.get(n).wait(200).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100).to({
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 0
                }, 700).call(function () {
                    e.parent.removeChild(e), i.parent.removeChild(i), n.parent.removeChild(n), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._scene = null, this._type = null, this._plane = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskAirWarAntiAircraftExplosion = a;
    var _ = function (t) {
        function e(e) {
            var i, n = t.call(this) || this;
            return 5 == e ? (i = 145, n.anchor.set(.5, .91)) : 2 == e ? (i = 146, n.anchor.set(.5, .85)) : 3 == e && (i = 145, n.anchor.set(.5, .76)), n.texture = s.BATTLE_MAIN.getTexture(i), n.scale.set(0), n
        }
        return n(e, t), e
    }(r.Sprite)
}