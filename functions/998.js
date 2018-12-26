const function998 = function (t, e, i) {
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
    var o = i(41),
        r = i(369),
        s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._getBlackTexture = function () {
                switch (this._type) {
                    case 2:
                        return o.SALLY_EVENT.getTexture(24);
                    case 3:
                        return o.SALLY_EVENT.getTexture(25)
                }
                return PIXI.Texture.EMPTY
            }, e.prototype._setPositions = function () {
                1 == this._type ? (this._key.position.set(216, 104), this._cloud.position.set(230, 137), this._text.position.set(230, 174)) : 2 == this._type ? (this._key.position.set(311, 42), this._cloud.position.set(332, 81), this._text.position.set(333, 152)) : 3 == this._type ? (this._black.position.set(-3, -2), this._key.position.set(311, 11), this._cloud.position.set(332, 56), this._text.position.set(339, 117)) : 4 == this._type && (this._key.position.set(311, 8), this._cloud.position.set(332, 51), this._text.position.set(333, 60))
            }, e
        }(r.MapThumbnailLocked);
    e.EventMapThumbnailLocked = s
}