const function1346 = function (t, e, i) {
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
                return i._layer = e, i._smoke1 = new r.CenteringSprite, i._smoke1.position.set(263, -2), i._smoke2 = new r.CenteringSprite, i._smoke2.position.set(272, 20), i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._smoke1.texture = s.BATTLE_MAIN.getTexture(37), this._smoke1.alpha = 0, this._layer.addChild(this._smoke1), createjs.Tween.get(this._smoke1).to({
                    alpha: 1
                }, 100).to({
                    x: this._smoke1.x - 4,
                    alpha: 0,
                    scaleX: 1.1,
                    scaleY: 1.1
                }, 700), this._smoke2.texture = s.BATTLE_MAIN.getTexture(38), this._smoke2.alpha = 0, this._layer.addChild(this._smoke2), createjs.Tween.get(this._smoke2).wait(200).to({
                    alpha: 1
                }, 100).to({
                    x: this._smoke2.x - 4,
                    alpha: 0,
                    scaleX: 1.1,
                    scaleY: 1.1
                }, 700);
                var e = [s.BATTLE_MAIN.getTexture(86), s.BATTLE_MAIN.getTexture(87), s.BATTLE_MAIN.getTexture(88), s.BATTLE_MAIN.getTexture(89), s.BATTLE_MAIN.getTexture(90), s.BATTLE_MAIN.getTexture(91), s.BATTLE_MAIN.getTexture(92), s.BATTLE_MAIN.getTexture(93), s.BATTLE_MAIN.getTexture(94), s.BATTLE_MAIN.getTexture(95), s.BATTLE_MAIN.getTexture(96), s.BATTLE_MAIN.getTexture(97), s.BATTLE_MAIN.getTexture(98), s.BATTLE_MAIN.getTexture(99), s.BATTLE_MAIN.getTexture(100), s.BATTLE_MAIN.getTexture(101), s.BATTLE_MAIN.getTexture(102), s.BATTLE_MAIN.getTexture(103), s.BATTLE_MAIN.getTexture(104), s.BATTLE_MAIN.getTexture(105), s.BATTLE_MAIN.getTexture(106), s.BATTLE_MAIN.getTexture(107)],
                    i = new PIXI.extras.AnimatedSprite(e);
                i.position.set(252, -27), i.loop = !1, i.animationSpeed = 30 / createjs.Ticker.framerate, this._layer.addChild(i), createjs.Tween.get(null).wait(300).call(function () {
                    i.play(), i.onComplete = function () {
                        i.onComplete = null, t._layer.removeChild(i), t._endTask()
                    }
                })
            }, e
        }(o.TaskBase);
    e.AnimAntiAircraftSanshikidan2 = a
}