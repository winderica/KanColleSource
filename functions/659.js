const function659 = function (t, e, i) {
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
            var e = t.call(this) || this, i = new PIXI.Sprite(o.COMMON_MAIN.getTexture(0));
            return i.position.set(195, 10), e.conBg = new PIXI.Sprite(o.COMMON_MAIN.getTexture(14)), e.titBg = new PIXI.Sprite(o.COMMON_MAIN.getTexture(64)), e.titBg.addChild(i), e.addChild(e.conBg), e.addChild(e.titBg), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.conBg = null, this.titBg = null, this.removeChildren()
        }, e.prototype.init = function () {
            this.conBg.position.set(148, 145), this.titBg.position.set(0, 105)
        }, e.prototype.show = function () {
            this.visible = !0
        }, e.prototype.hide = function () {
            this.visible = !1
        }, e
    }(PIXI.Container);
    e.BackgroundLayer = r
}