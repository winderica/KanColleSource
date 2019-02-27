const function775 = function (t, e, i) {
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
                return e._onClick = function () {
                    e.onClick()
                }, e._onMouseOver = function () {
                    e.extensionPopUp.alpha = 1
                }, e._onMouseOut = function () {
                    e.extensionPopUp.alpha = 0
                }, e.clickArea = new PIXI.Graphics, e.clickArea.beginFill(0, 0), e.clickArea.drawRect(0, 0, 330, 180), e.clickArea.endFill(), e.clickArea.on(r.EventType.MOUSEOVER, e._onMouseOver), e.clickArea.on(r.EventType.MOUSEOUT, e._onMouseOut), e.clickArea.on(r.EventType.CLICK, e._onClick), e.clickArea.renderable = !1, e.clickArea.interactive = e.clickArea.buttonMode = !0, e.extensionPopUp = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(36)), e.extensionPopUp.alpha = 0, e.extensionPopUp.position.set(113, 0), e.addChild(e.clickArea, e.extensionPopUp), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.clickArea.off(r.EventType.MOUSEOVER), this.clickArea.off(r.EventType.MOUSEOUT), this.clickArea.off(r.EventType.CLICK), this.onClick = null, this.clickArea = null, this.extensionPopUp = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.ExtensionButton = s
}