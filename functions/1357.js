const function1357 = function (t, e, i) {
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
        r = i(62),
        s = i(16),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._layer = e, i._smoke1 = new r.CenteringSprite, i._smoke1.position.set(309, 32), i._smoke2 = new r.CenteringSprite, i._smoke2.position.set(297, 5), i._smoke3 = new r.CenteringSprite, i._smoke3.position.set(272, 47), i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = s.BATTLE_MAIN.getTexture(36);
                this._smoke1.texture = e, this._smoke2.texture = e, this._smoke3.texture = e, this._smoke1.scale.set(.5), this._smoke1.alpha = 0, this._layer.addChild(this._smoke1), createjs.Tween.get(this._smoke1).to({
                    alpha: .7,
                    scaleX: .7,
                    scaleY: .7
                }, 100).to({
                    x: this._smoke1.x - 12,
                    alpha: 0,
                    scaleX: 1,
                    scaleY: 1
                }, 600).call(function () {
                    t._layer.removeChild(t._smoke1)
                }), this._smoke2.scale.set(.5), this._smoke2.alpha = 0, this._layer.addChild(this._smoke2), createjs.Tween.get(this._smoke2).wait(100).to({
                    alpha: .7,
                    scaleX: .7,
                    scaleY: .7
                }, 100).to({
                    x: this._smoke2.x - 12,
                    alpha: 0,
                    scaleX: 1,
                    scaleY: 1
                }, 600).call(function () {
                    t._layer.removeChild(t._smoke2)
                }), this._smoke3.scale.set(.5), this._smoke3.alpha = 0, this._layer.addChild(this._smoke3), createjs.Tween.get(this._smoke3).wait(300).to({
                    alpha: .7,
                    scaleX: .7,
                    scaleY: .7
                }, 100).to({
                    x: this._smoke3.x - 12,
                    alpha: 0,
                    scaleX: 1,
                    scaleY: 1
                }, 600).call(function () {
                    t._layer.removeChild(t._smoke3), t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.AnimAntiAircraftFunshinKai2 = a
}