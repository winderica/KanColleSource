const function61 = function (t, e, i) {
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
    var o = i(23),
        r = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._img = new PIXI.Sprite, i.addChild(i._img), i.texture = e, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "texture", {
                get: function () {
                    return this._img.texture
                },
                set: function (t) {
                    null == t ? (this._img.texture = PIXI.Texture.EMPTY, this._img.position.set(0)) : (this._img.texture = t, this._img.x = -Math.round(t.width / 2), this._img.y = -Math.round(t.height / 2))
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(o.Container);
    e.CenteringSprite = r
}