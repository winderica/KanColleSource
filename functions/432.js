const function432 = function (t, e, i) {
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
    var o = i(134),
        r = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                this.texture = this._getTexture(t)
            }, e.prototype._getTexture = function (t) {
                var e = -1;
                return 31 == t ? e = 3 : 32 == t ? e = 9 : 33 == t ? e = 10 : 34 == t ? e = 11 : 2 == t ? e = 4 : 1 == t ? e = 12 : 3 == t ? e = 13 : 4 == t ? e = 8 : 44 == t ? e = 14 : 10 == t ? e = 5 : 11 == t ? e = 6 : 12 == t && (e = 7), e < 0 ? PIXI.Texture.EMPTY : o.SALLY_MAP_PARTS.getTexture(e)
            }, e
        }(PIXI.Sprite);
    e.CompDropItemIcon = r
}