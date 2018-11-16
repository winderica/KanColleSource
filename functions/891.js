const function891 = function (t, e, i) {
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
            var e = t.call(this) || this;
            e.bg_0 = new PIXI.Sprite(o.COMMON_MAIN.getTexture(64)), e.bg_1 = new PIXI.Sprite(o.COMMON_MAIN.getTexture(64)), e.bg_0.position.set(0, 102), e.bg_1.position.set(529, 102);
            var i = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(8));
            i.anchor.set(0, .5), i.position.set(198, e.bg_0.height / 2 - 4);
            var n = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(4));
            return n.anchor.set(0, .5), n.position.set(19, e.bg_0.height / 2 - 4), e.bg_0.addChild(i), e.bg_1.addChild(n), e.addChild(e.bg_0), e.addChild(e.bg_1), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.bg_0.removeChildren(), this.bg_1.removeChildren(), this.removeChildren(), this.bg_0 = null, this.bg_1 = null
        }, e
    }(PIXI.Container);
    e.TopBarLayer = r
}