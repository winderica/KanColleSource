const function311 = function (t, e, i) {
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
            function e(e) {
                void 0 === e && (e = !1);
                var i = t.call(this) || this;
                i._isOldType = e, i._img = new PIXI.Sprite, i.addChild(i._img);
                var n = new PIXI.Graphics;
                return n.beginFill(0), n.drawRect(0, 0, 240, 300), n.endFill(), n.position.set(3, 4), i.addChild(n), i._img.mask = n, i._isOldType && (i._frame = new PIXI.Sprite, i.addChild(i._frame)), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._isOldType ? (this.texture = o.COMMON_MISC.getTexture(52), this._frame.texture = o.COMMON_MISC.getTexture(54)) : this.texture = o.COMMON_MISC.getTexture(53)
            }, e.prototype.update = function (t) {
                this._img.texture = t
            }, e.prototype.clean = function () {
                this._img.texture = PIXI.Texture.EMPTY
            }, e
        }(PIXI.Sprite);
    e.FurnitureThumbnail = r
}