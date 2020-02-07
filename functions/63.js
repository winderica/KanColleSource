const function63 = function (t, e, i) {
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
    var o = i(139),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._icon = new PIXI.Sprite, e.addChild(e._icon), e
            }
            return n(e, t), e.prototype.update = function (t) {
                this._icon.texture = 0 == t ? PIXI.Texture.EMPTY : o.COMMON_ICON_WEAPON.getTextureFromMstID(t);
                var e = this._getOffset(t);
                this._icon.position.set(e.x, e.y)
            }, e.prototype.clear = function () {
                this._icon.texture = PIXI.Texture.EMPTY
            }, e.prototype.dispose = function () {
                this.clear(), this.removeChild(this._icon), this._icon = null
            }, e.prototype._getOffset = function (t) {
                var e = new PIXI.Point;
                switch (t) {
                    case 0:
                        e.set(0, 0);
                        break;
                    case 1:
                        e.set(-6, -6);
                        break;
                    case 2:
                        e.set(0, -2);
                        break;
                    case 3:
                        e.set(-5, -6);
                        break;
                    case 5:
                        e.set(-4, -5);
                        break;
                    case 6:
                    case 7:
                    case 8:
                        e.set(-3, 0);
                        break;
                    case 9:
                        e.set(-8, -5);
                        break;
                    case 10:
                        e.set(2, 0);
                        break;
                    case 11:
                        e.set(0, 0);
                        break;
                    case 12:
                        e.set(-5, -3);
                        break;
                    case 13:
                        e.set(-6, -6);
                        break;
                    case 14:
                        e.set(-5, -6);
                        break;
                    case 15:
                    case 19:
                        e.set(0, 0);
                        break;
                    case 21:
                        e.set(-3, -3);
                        break;
                    case 22:
                    case 23:
                        e.set(-5, -3);
                        break;
                    case 29:
                        e.set(-6, -5);
                        break;
                    default:
                        e.set(-5, -5)
                }
                return e
            }, e
        }(PIXI.Container);
    e.IconWeapon = r
}