const function592 = function (t, e, i) {
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
            if (this.clear(), t < 20) {
                var e = new PIXI.Sprite(o.COMMON_MISC.getTexture(36)),
                    i = new PIXI.Sprite(o.COMMON_MISC.getTexture(113));
                i.x = Math.floor(e.width - i.width / 2 - 3), i.y = Math.floor(e.height / 2 - i.height / 2), e.x = 240 - e.texture.width, e.addChild(i), this.addChild(e)
            } else if (t < 30) {
                var e = new PIXI.Sprite(o.COMMON_MISC.getTexture(35)),
                    i = new PIXI.Sprite(o.COMMON_MISC.getTexture(112));
                i.x = Math.floor(e.width - i.width / 2), i.y = Math.floor(e.height / 2 - i.height / 2), e.x = 240 - e.texture.width, e.addChild(i), this.addChild(e)
            }
        }, e.prototype.clear = function () {
            this.removeChildren()
        }, e.prototype.dispose = function () {
            this.clear()
        }, e
    }(PIXI.Container);
    e.BannerTired = r
}