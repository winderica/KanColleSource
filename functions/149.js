const function149 = function (t, e, i) {
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
            return t.call(this) || this
        }

        return n(e, t), e.prototype.update = function (t) {
            25 == t ? (this.texture = o.COMMON_MISC.getTexture(98), this.visible = !0) : 50 == t ? (this.texture = o.COMMON_MISC.getTexture(96), this.visible = !0) : 75 == t ? (this.texture = o.COMMON_MISC.getTexture(97), this.visible = !0) : this.clear()
        }, e.prototype.clear = function () {
            this.texture = PIXI.Texture.EMPTY, this.visible = !1
        }, e
    }(PIXI.Sprite);
    e.BannerSoot = r
}