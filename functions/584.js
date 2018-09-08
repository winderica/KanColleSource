const function584 = function (t, e, i) {
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
    var o = i(585), r = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            this.texture = this._getTexture(t), this.visible = this.texture != PIXI.Texture.EMPTY
        }, e.prototype.clear = function () {
            this.update(-1)
        }, e.prototype._getTexture = function (t) {
            switch (t) {
                case 1:
                    return o.COMMON_EVENT.getTexture(0);
                case 2:
                    return o.COMMON_EVENT.getTexture(1);
                case 3:
                    return o.COMMON_EVENT.getTexture(2);
                case 4:
                    return o.COMMON_EVENT.getTexture(3);
                case 5:
                    return o.COMMON_EVENT.getTexture(4);
                case 6:
                    return o.COMMON_EVENT.getTexture(5);
                default:
                    return PIXI.Texture.EMPTY
            }
        }, e
    }(PIXI.Sprite);
    e.BannerPlate = r
}