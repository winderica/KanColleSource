const function344 = function (t, e, i) {
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
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.animation = {
                    light: 0
                }, e._onClick = function () {
                    e.onClick()
                }, e._onMouseOver = function () {
                    e.stop(), e.texture = e.textureHover, e.popup.visible = !0
                }, e._onMouseOut = function () {
                    e.play(), e.popup.visible = !1
                };
                var i = o.ARSENAL_MAIN.getTexture(75),
                    n = o.ARSENAL_MAIN.getTexture(76);
                return e.popup = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(67)), e.tween = createjs.Tween.get(e.animation), e.popup.position.set(-346, -37), e.popup.visible = !1, e.tween.to({
                    light: 0
                }), e.tween.to({
                    light: 1
                }, 300), e.tween.to({
                    light: 0
                }, 300), e.tween.loop = !0, e.tween.addEventListener("change", function () {
                    .5 <= e.animation.light ? e.texture = e.textureDefault : e.texture = e.textureHover
                }), e.addChild(e.popup), e.textureDefault = i, e.textureHover = n, e.on(r.EventType.CLICK, e._onClick), e.on(r.EventType.MOUSEOVER, e._onMouseOver), e.on(r.EventType.MOUSEOUT, e._onMouseOut), e.interactive = e.buttonMode = !0, e
            }
            return n(e, t), e.prototype.play = function () {
                this.tween.setPosition(0, createjs.Tween.LOOP), this.tween.setPaused(!1)
            }, e.prototype.stop = function () {
                this.tween.setPaused(!0)
            }, e.prototype.dispose = function () {
                this.removeChildren(), createjs.Tween.removeTweens(this.tween.target), this.onClick = null, this.popup = null, this.textureDefault = null, this.textureHover = null, this.animation = null, this.tween = null
            }, e
        }(PIXI.Sprite);
    e.ShopButton = s
}