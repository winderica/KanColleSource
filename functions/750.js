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
    var o = i(3), r = i(3), s = function (t) {
        function e() {
            var e = t.call(this) || this, i = new PIXI.Sprite(o.COMMON_MAIN.getTexture(64));
            e.headerSupplyBg = i;
            var n = new PIXI.Sprite(r.SUPPLY_MAIN.getTexture(0));
            return e.headerSupplyText = n, n.position.set(24, 11), e.addChild(i, n), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.headerSupplyBg.texture = PIXI.Texture.EMPTY, this.headerSupplyText.texture = PIXI.Texture.EMPTY, this.headerSupplyBg = null, this.headerSupplyText = null
        }, e
    }(PIXI.Container);
    e.HeaderSupply = s
}