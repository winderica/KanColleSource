const function590 = function (t, e, i) {
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
    var o = i(21), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.arrow = new PIXI.Sprite(o.COMMON_MAIN.getTexture(41)), e.lockIcon = new PIXI.Sprite(o.COMMON_MAIN.getTexture(40)), e.lockIcon.x = 9, e.addChild(e.lockIcon), e.addChild(e.arrow), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.lockIcon = null, this.arrow = null
        }, e
    }(PIXI.Container);
    e.BannerLockSlot = r
}