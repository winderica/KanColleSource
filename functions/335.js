const function335 = function (t, e, i) {
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
    var o = i(3),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._light = new PIXI.Sprite(o.COMMON_ANIMATION.getTexture(3)), e._light.position.set(600, 195), e._light.anchor.set(.5, .5), e.addChild(e._light), e._light_place = new PIXI.Sprite(o.COMMON_ANIMATION.getTexture(4)), e._light_place.position.set(600, 360), e._light_place.anchor.set(.5, .5), e.addChild(e._light_place);
                var i = new PIXI.Sprite(o.COMMON_ANIMATION.getTexture(2));
                return i.position.set(509, 276), e.addChild(i), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "light", {
                get: function () {
                    return this._light
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "light_place", {
                get: function () {
                    return this._light_place
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren(), this._light = null, this._light_place = null
            }, e
        }(PIXI.Container);
    e.FailedPenguin = r
}