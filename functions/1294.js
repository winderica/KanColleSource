const function1294 = function (t, e, i) {
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
    var o = i(20),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._wave1 = new PIXI.Sprite, e._wave1.anchor.set(.5, .5), e._wave1.scale.set(0), e._wave1.alpha = 0, e._wave2 = new PIXI.Sprite, e._wave2.anchor.set(.5, .5), e._wave2.scale.set(0), e._wave2.alpha = 0, e._tweens = new Array(4), e.addChild(e._wave1), e.addChild(e._wave2), e
            }
            return n(e, t), e.prototype.update = function (t) {
                this._wave1.texture = o.MAP_COMMON.getTexture(t), this._wave2.texture = o.MAP_COMMON.getTexture(t)
            }, e.prototype.activate = function () {
                null != this._tweens && this._tweens.length > 0 && null != this._tweens[0] || (this._tweens[0] = createjs.Tween.get(this._wave1, {
                    loop: !0
                }).to({
                    alpha: 1
                }, 900).to({
                    alpha: 0
                }, 400).wait(500), this._tweens[1] = createjs.Tween.get(this._wave1.scale, {
                    loop: !0
                }).to({
                    x: .7,
                    y: .7
                }, 900).to({
                    x: 1,
                    y: 1
                }, 400).wait(500), this._tweens[2] = createjs.Tween.get(this._wave2, {
                    loop: !0
                }).wait(500).to({
                    alpha: 1
                }, 900).to({
                    alpha: 0
                }, 400), this._tweens[3] = createjs.Tween.get(this._wave2.scale, {
                    loop: !0
                }).wait(500).to({
                    x: .7,
                    y: .7
                }, 900).to({
                    x: 1,
                    y: 1
                }, 400))
            }, e.prototype.deactivate = function () {
                this._stopTween()
            }, e.prototype.dispose = function () {
                this._stopTween()
            }, e.prototype._stopTween = function () {
                for (var t = 0; t < this._tweens.length; t++) null != this._tweens[t] && (this._tweens[t].setPaused(!0), this._tweens[t] = null);
                this._wave1.scale.set(0), this._wave1.alpha = 0, this._wave2.scale.set(0), this._wave2.alpha = 0
            }, e
        }(PIXI.Container);
    e.CompShipWave = r
}