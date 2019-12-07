const function248 = function (t, e, i) {
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
    var o = i(176),
        r = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.texture = 1 == t ? o.SALLY_JIN.getTexture(13) : o.SALLY_JIN.getTexture(12)
            }, e.prototype.initializeForCombinedMain = function (t, e) {
                if (1 == t) switch (e) {
                    case 1:
                        this.texture = o.SALLY_JIN.getTexture(27);
                        break;
                    case 2:
                        this.texture = o.SALLY_JIN.getTexture(31);
                        break;
                    case 3:
                        this.texture = o.SALLY_JIN.getTexture(32);
                        break;
                    default:
                        this.texture = PIXI.Texture.EMPTY
                } else this.texture = o.SALLY_JIN.getTexture(29)
            }, e.prototype.initializeForCombinedSub = function (t) {
                this.texture = 1 == t ? o.SALLY_JIN.getTexture(28) : o.SALLY_JIN.getTexture(30)
            }, e
        }(PIXI.Sprite);
    e.FormationPoint = r
}