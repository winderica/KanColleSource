const function750 = function (t, e, i) {
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
    var o = i(3), r = function (t) {
        function e() {
            var e = t.call(this) || this, i = new PIXI.Sprite(o.COMMON_MAIN.getTexture(64));
            e.headerMainBg = i;
            var n = new PIXI.Sprite(o.COMMON_MAIN.getTexture(0));
            return e.headerMainText = n, n.position.set(195, 11), e.addChild(i, n), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.headerMainBg.texture = PIXI.Texture.EMPTY, this.headerMainText.texture = PIXI.Texture.EMPTY, this.headerMainBg = null, this.headerMainText = null
        }, e
    }(PIXI.Container);
    e.HeaderMain = r
}