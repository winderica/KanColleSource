const function377 = function (t, e, i) {
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
    var o = i(42),
        r = i(235),
        s = i(1047),
        a = function (t) {
            function e(e, i, n, o, r) {
                return t.call(this, e, i, n, o, r) || this
            }
            return n(e, t), e.prototype._setPositions = function () {
                1 == this._type ? this._clear.position.set(600, 0) : 2 == this._type ? this._clear.position.set(600, 0) : 3 == this._type && this._clear.position.set(600, 0)
            }, e.prototype._getNoneTexture = function () {
                switch (this._type) {
                    case 2:
                        return o.SALLY_EVENT.getTexture(42);
                    case 3:
                        return o.SALLY_EVENT.getTexture(41)
                }
                return PIXI.Texture.EMPTY
            }, e.prototype._getFocusTexture = function () {
                switch (this._type) {
                    case 1:
                        return o.SALLY_EVENT.getTexture(37);
                    case 2:
                        return o.SALLY_EVENT.getTexture(38);
                    case 3:
                        return o.SALLY_EVENT.getTexture(36)
                }
                return PIXI.Texture.EMPTY
            }, e.prototype._createLock = function () {
                return new s.EventMapThumbnailLocked(this._type)
            }, e
        }(r.MapThumbnail);
    e.EventMapThumbnail = a
}