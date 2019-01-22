const function132 = function (t, e, i) {
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
    var o = i(9),
        r = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                switch (t[0]) {
                    case 1:
                        var e = t[1];
                        this.texture = 0 == e ? o.COMMON_MISC.getTexture(71) : o.COMMON_MISC.getTexture(74);
                        break;
                    case 2:
                        this.texture = o.COMMON_MISC.getTexture(77);
                        break;
                    case 3:
                        this.texture = o.COMMON_MISC.getTexture(80);
                        break;
                    case 4:
                        this.texture = o.COMMON_MISC.getTexture(83);
                        break;
                    default:
                        this.texture = PIXI.Texture.EMPTY
                }
            }, e.prototype.dispose = function () {
                this.texture = PIXI.Texture.EMPTY
            }, e
        }(PIXI.Sprite);
    e.ShipInDeckFlag = r
}