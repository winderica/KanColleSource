const function233 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(42), r = i(229), s = i(990), a = function (t) {
        function e(e, i, n, o, r) {
            return t.call(this, e, i, n, o, r) || this
        }

        return n(e, t), e.prototype._setPositions = function () {
            1 == this._type ? (this._clear.position.set(600, 0), this._focus.x = -2, this._focus.y = -1) : 2 == this._type ? this._clear.position.set(600, 0) : 3 == this._type ? this._clear.position.set(600, 0) : 3 == this._type && this._clear.position.set(612, -6)
        }, e.prototype._getNoneTexture = function () {
            return 1 == this._type ? o.SALLY_EVENT.getTexture(10) : 2 == this._type ? o.SALLY_EVENT.getTexture(10) : 3 == this._type ? o.SALLY_EVENT.getTexture(11) : 3 == this._type ? o.SALLY_EVENT.getTexture(11) : PIXI.Texture.EMPTY
        }, e.prototype._getFocusTexture = function () {
            return 1 == this._type ? o.SALLY_EVENT.getTexture(9) : 2 == this._type ? o.SALLY_EVENT.getTexture(32) : 3 == this._type ? o.SALLY_EVENT.getTexture(33) : 3 == this._type ? o.SALLY_EVENT.getTexture(34) : PIXI.Texture.EMPTY
        }, e.prototype._createLock = function () {
            return new s.EventMapThumbnailLocked(this._type)
        }, e
    }(r.MapThumbnail);
    e.EventMapThumbnail = a
}