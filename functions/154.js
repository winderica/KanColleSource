const function154 = function (t, e, i) {
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
    var o = i(9), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.texture = PIXI.Texture.EMPTY, e
        }

        return n(e, t), e.prototype.update = function (t) {
            switch (t) {
                case 1:
                    this.texture = o.COMMON_MISC.getTexture(170);
                    break;
                case 2:
                    this.texture = o.COMMON_MISC.getTexture(171);
                    break;
                case 3:
                    this.texture = o.COMMON_MISC.getTexture(172);
                    break;
                case 4:
                    this.texture = o.COMMON_MISC.getTexture(173);
                    break;
                case 5:
                    this.texture = o.COMMON_MISC.getTexture(174);
                    break;
                case 6:
                    this.texture = o.COMMON_MISC.getTexture(175);
                    break;
                case 7:
                    this.texture = o.COMMON_MISC.getTexture(176);
                    break;
                default:
                    this.texture = PIXI.Texture.EMPTY
            }
        }, e.prototype.dispose = function () {
            this.texture = PIXI.Texture.EMPTY
        }, e
    }(PIXI.Sprite);
    e.AirPlaneLevel = r
}