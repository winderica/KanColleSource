const function862 = function (t, e, i) {
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
    var o = i(3), r = i(3), s = i(1), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.clickable = !1, i.hasKey = !1, i._onMouseOver = function (t) {
                i.alert_dock_key_sprite.visible = i.confirm_dock_key_sprite.visible = !1, i.hasKey ? i.confirm_dock_key_sprite.visible = !0 : i.alert_dock_key_sprite.visible = !0
            }, i._onClick = function () {
                i.hasKey || o.SE.play("248"), i.onClick()
            }, i._onMouseOut = function (t) {
                i.alert_dock_key_sprite.visible = i.confirm_dock_key_sprite.visible = !1
            }, i.steelFrame_noDock_sprite = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(147)), i.alert_dock_key_sprite = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(71)), i.confirm_dock_key_sprite = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(72)), i.alert_dock_key_sprite.position.set(255, -15), i.confirm_dock_key_sprite.position.set(255, -15), i.alert_dock_key_sprite.visible = i.confirm_dock_key_sprite.visible = !1, i.steelFrame_noDock_sprite.interactive = i.steelFrame_noDock_sprite.buttonMode = !0, i.steelFrame_noDock_sprite.on(s.EventType.MOUSEOVER, i._onMouseOver), i.steelFrame_noDock_sprite.on(s.EventType.MOUSEOUT, i._onMouseOut), i.steelFrame_noDock_sprite.on(s.EventType.CLICK, i._onClick), i.addChild(i.steelFrame_noDock_sprite), e.addChild(i.alert_dock_key_sprite, i.confirm_dock_key_sprite), i.overlayer = e, i
        }

        return n(e, t), e.prototype.update = function (t, e) {
            this.steelFrame_noDock_sprite.interactive = !1, t && (this.steelFrame_noDock_sprite.interactive = !0), this.clickable = t, this.hasKey = e
        }, e.prototype.hidePop = function () {
            this.alert_dock_key_sprite.visible = this.confirm_dock_key_sprite.visible = !1
        }, e.prototype.dispose = function () {
            this.steelFrame_noDock_sprite.removeAllListeners(s.EventType.MOUSEOVER), this.steelFrame_noDock_sprite.removeAllListeners(s.EventType.MOUSEOUT), this.steelFrame_noDock_sprite.removeAllListeners(s.EventType.CLICK), this.overlayer.removeChildren(), this.onClick = null, this.steelFrame_noDock_sprite = null, this.alert_dock_key_sprite = null, this.confirm_dock_key_sprite = null, this.overlayer = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.NoDockView = a
}