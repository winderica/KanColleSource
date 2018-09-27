const function772 = function (t, e, i) {
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
    var o = i(0), r = i(60), s = i(4), a = i(70), _ = i(332), u = i(1), l = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            }, e._onClickDetach = function () {
                e.onClickDetach()
            }, e._onMouseOver = function () {
                e.namePopUp.alpha = 1
            }, e._onMouseOut = function () {
                e.namePopUp.alpha = 0
            };
            var i = new PIXI.Sprite(a.REMODEL_MAIN.getTexture(20)),
                n = new PIXI.Sprite(a.REMODEL_MAIN.getTexture(37)), o = new r.IconWeapon, s = new _.DetachButton,
                l = new c, h = new PIXI.Graphics;
            return o.position.set(6, 6), n.position.set(6, 6), s.position.set(57, 21), l.position.set(33, 63), e.addChild(i, n, o, s, l, h), h.beginFill(0, 0), h.drawRect(0, 0, 57, 57), h.endFill(), h.addListener(u.EventType.CLICK, e._onClick), h.addListener(u.EventType.MOUSEOVER, e._onMouseOver), h.addListener(u.EventType.MOUSEOUT, e._onMouseOut), s.onClick = e._onClickDetach, h.renderable = !1, h.interactive = h.buttonMode = !0, l.visible = !1, e.iconWeapon = o, e.exSlotBg = i, e.iconSlot00 = n, e.namePopUp = l, e.detachButton = s, e.clickArea = h, e
        }

        return n(e, t), e.prototype.update = function (t) {
            this.iconWeapon.update(t.iconType), this.namePopUp.update(t.name), this.detachButton.visible = !0, this.interactive = this.buttonMode = !0, this.namePopUp.visible = !0, this.namePopUp.alpha = 0
        }, e.prototype.clear = function () {
            this.iconWeapon.clear(), this.detachButton.visible = !1, this.interactive = this.buttonMode = !0, this.namePopUp.visible = !1
        }, e.prototype.dispose = function () {
            this.onClick = this._onClick = null, this.onClickDetach = this._onClickDetach = null, this._onMouseOut = null, this._onMouseOver = null, this.interactive = this.buttonMode = !1, this.iconWeapon.dispose(), this.iconWeapon = null, this.exSlotBg.texture = PIXI.Texture.EMPTY, this.exSlotBg = null, this.iconSlot00.texture = PIXI.Texture.EMPTY, this.iconSlot00 = null, this.detachButton.dispose(), this.detachButton = null, this.namePopUp.dispose(), this.namePopUp = null, this.clickArea.removeAllListeners(u.EventType.CLICK), this.clickArea.removeAllListeners(u.EventType.MOUSEOVER), this.clickArea.removeAllListeners(u.EventType.MOUSEOUT), this.clickArea.clear(), this.clickArea = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ExtraSlotItemSlot = l;
    var c = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.TEXT_OFFSET_X = 3, e.TEXT_OFFSET_Y = 5;
            var i = new PIXI.Sprite(o.default.resources.getUIImage("6slot_huki1_l.png", "remodel")),
                n = new PIXI.Sprite(o.default.resources.getUIImage("6slot_huki1_r.png", "remodel")),
                r = new PIXI.Sprite(o.default.resources.getUIImage("6slot_huki1_c.png", "remodel")),
                a = new PIXI.Sprite(o.default.resources.getUIImage("6slot_huki2.png", "remodel")),
                _ = new s.TextBox(18, 5523516);
            return _.anchor.x = i.anchor.x = r.anchor.x = 1, a.position.set(-18.75, 3 - a.height), _.position.set(e.TEXT_OFFSET_X, e.TEXT_OFFSET_Y), e.addChild(i, r, n, _, a), e.left = i, e.center = r, e.right = n, e.textName = _, e.update(""), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.textName.text = "", this.left.texture = PIXI.Texture.EMPTY, this.center.texture = PIXI.Texture.EMPTY, this.right.texture = PIXI.Texture.EMPTY, this.left = null, this.center = null, this.right = null, this.textName = null, this.removeChildren()
        }, e.prototype.update = function (t) {
            this.center.scale.x = 1, this.textName.text = t;
            var e = this.textName.width / this.center.width;
            this.center.scale.x = e, this.right.position.set(0, 0), this.center.position.set(0, 0), this.left.position.set(this.center.x - this.center.width, 0)
        }, e
    }(PIXI.Container)
}