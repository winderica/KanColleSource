const function292 = function (t, e, i) {
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
    var o = i(105),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._img.texture = this._getTexture(t), this._img.x = 1 - Math.round(this._img.width / 2), this._img.y = 1 - Math.round(this._img.height / 2), 31 == t && (this._img.x += 21, this._img.y -= 8)
            }, e.prototype._getTexture = function (t) {
                var e;
                if (11 == t) e = 16;
                else if (12 == t) e = 30;
                else if (13 == t) e = 18;
                else if (14 == t) e = 20;
                else if (15 == t) e = 6;
                else {
                    if (31 != t) return PIXI.Texture.EMPTY;
                    e = 22
                }
                return o.PORT_RINGMENU.getTexture(e)
            }, e
        }(PIXI.Container);
    e.RingMenuBtnImgOn = r
}