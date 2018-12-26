const function58 = function (t, e, i) {
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
    var o = i(9),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._gear = new PIXI.Sprite, e._gear.anchor.set(.5), e.addChild(e._gear), e._btn = new PIXI.Sprite, e._btn.anchor.set(.5), e.addChild(e._btn), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._gear.texture = o.COMMON_MISC.getTexture(25), this._btn.texture = this._getContentTexture()
            }, e.prototype.activate = function () {
                null == this._t && (this._t = createjs.Tween.get(this._gear, {
                    loop: !0
                }).to({
                    rotation: 2 * Math.PI
                }, 6e3))
            }, e.prototype.deactivate = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e.prototype._getContentTexture = function () {
                return o.COMMON_MISC.getTexture(24)
            }, e
        }(PIXI.Container);
    e.GearBtnNext = r
}