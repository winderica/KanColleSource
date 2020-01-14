const function218 = function (t, e, i) {
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
    var o = i(29),
        r = i(3),
        s = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.dispose = function () {
                this.texture = PIXI.Texture.EMPTY
            }, e.prototype.update = function (t) {
                switch (o.ShipUtil.getSpeedType(t)) {
                    case 4:
                        this.texture = r.COMMON_MAIN.getTexture(60);
                        break;
                    case 3:
                        this.texture = r.COMMON_MAIN.getTexture(56);
                        break;
                    case 2:
                        this.texture = r.COMMON_MAIN.getTexture(53);
                        break;
                    case 1:
                        this.texture = r.COMMON_MAIN.getTexture(54);
                        break;
                    case 0:
                        this.texture = r.COMMON_MAIN.getTexture(59);
                        break;
                    default:
                        this.texture = PIXI.Texture.EMPTY
                }
            }, e
        }(PIXI.Sprite);
    e.ShipSpeedImage = s
}