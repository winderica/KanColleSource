const function977 = function (t, e, i) {
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
    var o = i(26),
        r = i(1),
        s = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick()
                }, i._cb_onClick = e, i._flash = new PIXI.Sprite(o.SALLY_AIRUNIT.getTexture(7)), i._flash.position.set(-14, -14), i._flash.alpha = 0, i.addChild(i._flash), i.interactive = !0, i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate(), this._cb_onClick = null, this._flash = null
            }, e.prototype.initialize = function () {
                this.texture = o.SALLY_AIRUNIT.getTexture(6)
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(r.EventType.CLICK, this._onClick), this.playFlash())
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick), this.stopFlash()
            }, e.prototype.playFlash = function () {
                this.stopFlash(), this._tween = createjs.Tween.get(this._flash, {
                    loop: !0
                }), this._tween.to({
                    alpha: 1
                }, 1e3).to({
                    alpha: 0
                }, 1e3)
            }, e.prototype.stopFlash = function () {
                this._tween && (this._tween.setPaused(!0), createjs.Tween.removeTweens(this._flash), this._tween = null, this._flash.alpha = 0)
            }, e
        }(PIXI.Sprite);
    e.AirUnitBtn = s
}