const function243 = function (t, e, i) {
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
    var o = i(20),
        r = function (t) {
            function e(e) {
                void 0 === e && (e = void 0);
                var i = t.call(this) || this;
                return i._img = new PIXI.Sprite, i.addChild(i._img), void 0 != e && i.update(e), i
            }
            return n(e, t), e.prototype.update = function (t) {
                if (-1 == t) return this._img.position.set(-9, -9), void(this._img.texture = o.MAP_COMMON.getTexture(73));
                switch (this._img.position.set(-8, -11), t) {
                    case 0:
                        this._img.texture = o.MAP_COMMON.getTexture(63);
                        break;
                    case 1:
                        this._img.texture = o.MAP_COMMON.getTexture(64);
                        break;
                    case 2:
                        this._img.texture = o.MAP_COMMON.getTexture(65);
                        break;
                    case 3:
                        this._img.texture = o.MAP_COMMON.getTexture(66);
                        break;
                    case 4:
                        this._img.texture = o.MAP_COMMON.getTexture(67);
                        break;
                    case 5:
                        this._img.texture = o.MAP_COMMON.getTexture(68);
                        break;
                    case 6:
                        this._img.texture = o.MAP_COMMON.getTexture(69);
                        break;
                    case 7:
                        this._img.texture = o.MAP_COMMON.getTexture(70);
                        break;
                    case 8:
                        this._img.texture = o.MAP_COMMON.getTexture(71);
                        break;
                    case 9:
                        this._img.texture = o.MAP_COMMON.getTexture(72);
                        break;
                    default:
                        this._img.texture = PIXI.Texture.EMPTY
                }
            }, e
        }(PIXI.Container);
    e.NumericalDisplay = r
}