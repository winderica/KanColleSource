const function70 = function (t, e, i) {
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
    var o = i(10),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.TO_RADIAN = Math.PI / 180, e.ANGLE = 45 * e.TO_RADIAN, e.ANGLE_SIN = Math.sin(e.ANGLE), e.ANGLE_COS = Math.cos(e.ANGLE), e.run = function () {
                    e._degree += 2, e._degree = (e._degree % 360 + 360) % 360;
                    var t = e._degree * e.TO_RADIAN;
                    e._pos.x = Math.cos(t) * e._radius.x, e._pos.y = Math.sin(t) * e._radius.y, e._ang.x = e._pos.x * e.ANGLE_COS - e._pos.y * e.ANGLE_SIN, e._ang.y = e._pos.x * e.ANGLE_SIN + e._pos.y * e.ANGLE_COS, e._light.position.x = e._center.x + e._ang.x, e._light.position.y = e._center.y + e._ang.y
                }, e._ring = new PIXI.Sprite, e._light = new PIXI.Sprite, e._light.anchor.set(.5), e.addChild(e._light), e.addChild(e._ring), e._degree = 0, e._center = new PIXI.Point(0, 0), e._radius = new PIXI.Point(0, 0), e._pos = new PIXI.Point(0, 0), e._ang = new PIXI.Point(0, 0), e
            }
            return n(e, t), e.prototype.activate = function () {
                null == this._t && (this._ring.alpha = 1, this._light.alpha = 1, this._degree = 0, this._t = createjs.Tween.get(this._ring, {
                    loop: !0
                }), this._t.to({
                    alpha: .2
                }, 1667).to({
                    alpha: 1
                }, 1667).addEventListener("change", this.run))
            }, e.prototype.deactivate = function () {
                null != this._t && (this._t.removeAllEventListeners("change"), this._t.setPaused(!0), createjs.Tween.removeTweens(this._ring), this._t = null)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.deactivate(), this._ring = null, this._light = null, this._center = null, this._radius = null, this._pos = null, this._ang = null, this._degree = null
            }, e
        }(PIXI.Container),
        s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this._center.set(27, 30), this._radius.set(20, 38), this._ring.texture = o.COMMON_MISC.getTexture(158), this._light.texture = o.COMMON_MISC.getTexture(159)
            }, e
        }(r);
    e.RingLarge = s;
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function () {
            this._center.set(23, 24), this._radius.set(18, 35), this._ring.texture = o.COMMON_MISC.getTexture(162), this._light.texture = o.COMMON_MISC.getTexture(163)
        }, e
    }(r);
    e.RingMiddle = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function () {
            this._center.set(15, 15), this._radius.set(8, 22), this._ring.texture = o.COMMON_MISC.getTexture(160), this._light.texture = o.COMMON_MISC.getTexture(161)
        }, e
    }(r);
    e.RingSmall = _
}