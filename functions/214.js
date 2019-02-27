const function214 = function (t, e, i) {
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
                return t.call(this) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                var e = PIXI.Texture.EMPTY;
                switch (t) {
                    case 0:
                        e = o.COMMON_MISC.getTexture(26);
                        break;
                    case 1:
                        e = o.COMMON_MISC.getTexture(27);
                        break;
                    case 2:
                        e = o.COMMON_MISC.getTexture(28);
                        break;
                    case 3:
                        e = o.COMMON_MISC.getTexture(29);
                        break;
                    case 4:
                        e = o.COMMON_MISC.getTexture(30);
                        break;
                    case 5:
                        e = o.COMMON_MISC.getTexture(31);
                        break;
                    case 6:
                        e = o.COMMON_MISC.getTexture(32)
                }
                this.texture = e
            }, e.prototype.dispose = function () {
                this.texture = PIXI.Texture.EMPTY
            }, e
        }(PIXI.Sprite);
    e.DeckIndexEmblem = r
}