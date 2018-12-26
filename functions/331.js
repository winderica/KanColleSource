const function331 = function (t, e, i) {
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
                }, e.slotIconDelete = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(50)), e.clickArea = new PIXI.Graphics, e.clickArea.beginFill(0, 0), e.clickArea.drawRect(0, 0, 30, 45), e.clickArea.y = -e.clickArea.height / 2 + e.slotIconDelete.height / 2, e.clickArea.endFill(), e.clickArea.renderable = !1, e.addChild(e.clickArea, e.slotIconDelete), e.interactive = e.buttonMode = !0, e.on(r.EventType.CLICK, e._onClick), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.off(r.EventType.CLICK), this.clickArea.clear(), this.slotIconDelete = null, this.clickArea = null, this.onClick = null
            }, e
        }(PIXI.Container);
    e.DetachButton = s
}