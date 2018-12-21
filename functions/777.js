const function777 = function (t, e, i) {
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
    var o = i(0), r = i(60), s = i(4), a = i(71), _ = i(331), l = i(1), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onClick = function () {
                e.onClick()
            }, e._onClickDetach = function () {
                e.onClickDetach()
            }, e._onMouseOver = function () {
                e.namePopUp.alpha = 1
            }, e._onMouseOut = function () {
                e.namePopUp.alpha = 0
            }, e.exSlotBg = new PIXI.Sprite(a.REMODEL_MAIN.getTexture(20)), e.iconSlot00 = new PIXI.Sprite(a.REMODEL_MAIN.getTexture(37)), e.iconWeapon = new r.IconWeapon, e.detachButton = new _.DetachButton, e.namePopUp = new c, e.clickArea = new PIXI.Graphics, e.iconWeapon.position.set(6, 6), e.iconSlot00.position.set(6, 6), e.detachButton.position.set(57, 21), e.namePopUp.position.set(33, 63), e.addChild(e.exSlotBg, e.iconSlot00, e.iconWeapon, e.detachButton, e.namePopUp, e.clickArea), e.clickArea.beginFill(0, 0), e.clickArea.drawRect(0, 0, 57, 57), e.clickArea.endFill(), e.clickArea.on(l.EventType.CLICK, e._onClick), e.clickArea.on(l.EventType.MOUSEOVER, e._onMouseOver), e.clickArea.on(l.EventType.MOUSEOUT, e._onMouseOut), e.clickArea.renderable = !1, e.clickArea.interactive = e.clickArea.buttonMode = !0, e.detachButton.onClick = e._onClickDetach, e.namePopUp.visible = !1, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.iconWeapon.dispose(), this.detachButton.dispose(), this.namePopUp.dispose(), this.onClick = null, this.onClickDetach = null, this.iconWeapon = null, this.exSlotBg = null, this.iconSlot00 = null, this.detachButton = null, this.namePopUp = null, this.clickArea.off(l.EventType.CLICK), this.clickArea.off(l.EventType.MOUSEOVER), this.clickArea.off(l.EventType.MOUSEOUT), this.clickArea.clear(), this.clickArea = null, this.removeChildren()
        }, e.prototype.update = function (t) {
            this.iconWeapon.update(t.iconType), this.namePopUp.update(t.name), this.detachButton.visible = !0, this.interactive = this.buttonMode = !0, this.namePopUp.visible = !0, this.namePopUp.alpha = 0
        }, e.prototype.clear = function () {
            this.iconWeapon.clear(), this.detachButton.visible = !1, this.interactive = this.buttonMode = !0, this.namePopUp.visible = !1
        }, e
    }(PIXI.Container);
    e.ExtraSlotItemSlot = u;
    var c = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.TEXT_OFFSET_X = 3, e.TEXT_OFFSET_Y = 5, e.left = new PIXI.Sprite(o.default.resources.getUIImage("6slot_huki1_l.png", "remodel")), e.right = new PIXI.Sprite(o.default.resources.getUIImage("6slot_huki1_r.png", "remodel")), e.center = new PIXI.Sprite(o.default.resources.getUIImage("6slot_huki1_c.png", "remodel"));
            var i = new PIXI.Sprite(o.default.resources.getUIImage("6slot_huki2.png", "remodel"));
            return e.textName = new s.TextBox(18, 5523516), e.textName.anchor.x = e.left.anchor.x = e.center.anchor.x = 1, e.textName.position.set(e.TEXT_OFFSET_X, e.TEXT_OFFSET_Y), i.position.set(-18.75, 3 - i.height), e.addChild(e.left, e.center, e.right, e.textName, i), e.update(""), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.textName.destroy(), this.left = null, this.center = null, this.right = null, this.textName = null
        }, e.prototype.update = function (t) {
            this.center.scale.x = 1, this.textName.text = t;
            var e = this.textName.width / this.center.width;
            this.center.scale.x = e, this.right.position.set(0, 0), this.center.position.set(0, 0), this.left.position.set(this.center.x - this.center.width, 0)
        }, e
    }(PIXI.Container)
}