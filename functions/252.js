const function252 = function (t, e, i) {
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
    var o = i(12),
        r = i(16),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._wave1 = new o.Sprite, e._wave1.scale.set(0), e._wave1.anchor.set(.5), e._wave2 = new o.Sprite, e._wave2.scale.set(0), e._wave2.anchor.set(.5), e.addChild(e._wave1), e.addChild(e._wave2), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._wave1.texture = r.BATTLE_MAIN.getTexture(108), this._wave2.texture = r.BATTLE_MAIN.getTexture(108)
            }, e.prototype.play = function () {
                var t = this;
                createjs.Tween.get(this._wave1).to({
                    scaleX: 1.83,
                    scaleY: 1.83
                }, 233).to({
                    scaleX: 6,
                    scaleY: 6,
                    alpha: 0
                }, 500, createjs.Ease.sineIn), createjs.Tween.get(this._wave2).wait(66).to({
                    scaleX: 1.83,
                    scaleY: 1.83
                }, 233).to({
                    scaleX: 6,
                    scaleY: 6,
                    alpha: 0
                }, 500, createjs.Ease.sineIn).call(function () {
                    t.removeChildren(), null != t.parent && t.parent.removeChild(t)
                })
            }, e
        }(PIXI.Container);
    e.Wave = s
}