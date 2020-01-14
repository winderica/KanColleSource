const function720 = function (t, e, i) {
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
    var o = i(3),
        r = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = o.ORGANIZE_MAIN.getTexture(31),
                    n = o.ORGANIZE_MAIN.getTexture(32);
                e.frameShutterLeft = new PIXI.Sprite(i), e.frameShutterRight = new PIXI.Sprite(n);
                var r = new PIXI.Graphics,
                    s = new PIXI.Graphics;
                return r.beginFill(0, 1), r.moveTo(0, 15), r.lineTo(15, 0), r.lineTo(247, 0), r.lineTo(247, 157), r.lineTo(13, 157), r.lineTo(0, 142), r.lineTo(0, 15), r.endFill(), s.beginFill(0, 1), s.moveTo(0, 0), s.lineTo(232, 0), s.lineTo(247, 16), s.lineTo(247, 141), s.lineTo(231, 157), s.lineTo(0, 157), s.lineTo(0, 0), s.endFill(), s.x = s.width, e.frameShutterLeft.mask = r, e.frameShutterRight.mask = s, e.frameShutterRight.position.set(e.frameShutterRight.width, 0), e.frameShutterLeft.position.set(0, 0), e.frameShutterRight.position.set(247, 0), e.frameShutterLeft.interactive = !0, e.frameShutterRight.interactive = !0, e.addChild(e.frameShutterLeft, e.frameShutterRight, r, s), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.cacheAsBitmap = !1, this.frameShutterLeft.removeChildren(), this.frameShutterRight.removeChildren(), this.frameShutterLeft.mask = null, this.frameShutterRight.mask = null, this.frameShutterLeft = null, this.frameShutterRight = null, this.removeChildren()
            }, e.prototype.openAnimation = function (t, e) {
                var i = this;
                void 0 === e && (e = 250), this.cacheAsBitmap = !1;
                this.frameShutterLeft.position.x = 0, createjs.Tween.get(this.frameShutterLeft).to({
                    x: -247
                }, e).call(function () {
                    i.cacheAsBitmap = !0, t()
                }), this.frameShutterRight.position.x = 247, createjs.Tween.get(this.frameShutterRight).to({
                    x: 494
                }, e)
            }, e.prototype.closeAnimation = function (t, e) {
                var i = this;
                void 0 === e && (e = 250), this.cacheAsBitmap = !1;
                this.frameShutterLeft.position.x = -247, createjs.Tween.get(this.frameShutterLeft).to({
                    x: 0
                }, e).call(function () {
                    i.cacheAsBitmap = !0, t()
                }), this.frameShutterRight.position.x = 494, createjs.Tween.get(this.frameShutterRight).to({
                    x: 247
                }, e)
            }, e.prototype.open = function () {
                this.cacheAsBitmap = !1, this.frameShutterLeft.x = -247, this.frameShutterRight.x = 494, this.cacheAsBitmap = !0
            }, e.prototype.close = function () {
                this.cacheAsBitmap = !1, this.frameShutterLeft.x = 0, this.frameShutterRight.x = 247, this.cacheAsBitmap = !0
            }, e
        }(PIXI.Container);
    e.ShipSlotShutter = r
}