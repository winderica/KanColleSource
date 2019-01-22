const function874 = function (t, e, i) {
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
                e.limitShip = !1, e.limitSlot = !1, e._onClick = function () {
                    0 == (e.limitShip || e.limitSlot) && e.onClick()
                }, e._onMouseOver = function () {
                    e.popup.visible = !1, e.limitShip ? e.popup.visible = !0 : e.limitSlot && (e.popup.visible = !0)
                }, e._onMouseOut = function () {
                    e.popup.visible = !1
                }, e.popup = new PIXI.Sprite, e.buttonSprite = new PIXI.Sprite(o.ARSENAL_MAIN.getTexture(41)), e.popup.visible = !1;
                var i = Math.floor(100 - e.buttonSprite.width / 2),
                    n = Math.floor(50 - e.buttonSprite.height / 2);
                return e.area = new PIXI.Graphics, e.area.beginFill(0, 0), e.area.drawRect(-i, -n, 200, 100), e.area.endFill(), e.area.interactive = e.area.buttonMode = !0, e.area.on(r.EventType.CLICK, e._onClick), e.area.on(r.EventType.MOUSEOVER, e._onMouseOver), e.area.on(r.EventType.MOUSEOUT, e._onMouseOut), e.addChild(e.area, e.buttonSprite, e.popup), e
            }
            return n(e, t), e.prototype.updateCondition = function (t, e) {
                this.popup.visible = !1, t ? (this.popup.texture = o.ARSENAL_MAIN.getTexture(2), this.popup.position.set(-61, -90)) : e && (this.popup.texture = o.ARSENAL_MAIN.getTexture(68), this.popup.position.set(49, -33)), this.limitShip = t, this.limitSlot = e
            }, e.prototype.dispose = function () {
                this.area.off(r.EventType.CLICK), this.area.off(r.EventType.MOUSEOVER), this.area.off(r.EventType.MOUSEOUT), this.onClick = null, this.popup = null, this.buttonSprite = null, this.limitShip = null, this.limitSlot = null, this.area = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.SelectButton = s
}