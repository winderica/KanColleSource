const function774 = function (t, e, i) {
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
        r = i(157),
        s = i(158),
        a = i(60),
        _ = i(4),
        l = i(3),
        u = i(331),
        c = i(52),
        h = i(1),
        p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._mousedown = function (t) {
                    i.mousedown(i._index, t.data.global)
                }, i._mouseover = function () {
                    i.focusItem.alpha = 1
                }, i._mouseout = function () {
                    i.focusItem.alpha = 0, i.onMouseOut()
                }, i._onClickDetach = function () {
                    i.onClickDetach(i._index)
                }, i._mouseup = function () {
                    i.onMouseUp(i._index)
                }, i._index = e, i._background = new PIXI.Sprite(o.COMMON_MAIN.getTexture(45)), i._background.texture = o.COMMON_MAIN.getTexture(45), i.focusItem = new PIXI.Sprite(l.REMODEL_MAIN.getTexture(22)), i.clickAreaSlot = new PIXI.Graphics, i.clickAreaSlot.renderable = !1, i.clickAreaSlot.beginFill(0, 0), i.clickAreaSlot.drawRect(0, 0, c.RemodelConst.DETAIL_LISTITEM.WIDTH, c.RemodelConst.DETAIL_LISTITEM.HEIGHT), i.clickAreaSlot.endFill(), i._textItemName = new _.TextBox(19, 5523516), i._textItemNameMask = new PIXI.Graphics, i._textItemNameMask.beginFill(0), i._textItemNameMask.drawRect(0, 0, 240, 30), i._textItemNameMask.endFill();
                var n = new PIXI.Sprite(o.COMMON_MAIN.getTexture(44));
                return n.position.set(120, -2), i.containerItemName = new PIXI.Container, i.containerItemName.position.set(50, 11), i.containerItemName.mask = i._textItemNameMask, i.containerItemName.addChild(i._textItemName, i._textItemNameMask, n), i.textTousai = new _.TextBox(21, 5523516), i.textTousai.position.set(-2, 23), i.textTousai.anchor.set(1, .5), i.slotItemLevel = new s.SlotItemLevel, i.airPlaneLevel = new r.AirPlaneLevel, i.lockIcon = new PIXI.Sprite(o.COMMON_MAIN.getTexture(42)), i.iconWeapon = new a.IconWeapon, i.detachButton = new u.DetachButton, i.detachButton.onClick = i._onClickDetach, i.detachButton.position.set(292, 15), i.slotItemLevel.position.set(247, 14), i.airPlaneLevel.position.set(219, 3), i.lockIcon.position.set(293, 2), i.focusItem.scale.x = 1, i.focusItem.position.x = -30, i.focusItem.alpha = 0, i.focusItem.visible = !1, i.addChild(i._background, i.containerItemName, i.textTousai, i.slotItemLevel, i.airPlaneLevel, i.lockIcon, i.iconWeapon, i.focusItem, i.clickAreaSlot, i.detachButton), i.clickAreaSlot.interactive = i.clickAreaSlot.buttonMode = !0, i.clickAreaSlot.on(h.EventType.MOUSEDOWN, i._mousedown), i.clickAreaSlot.on(h.EventType.MOUSEUP, i._mouseup), i.clickAreaSlot.on(h.EventType.MOUSEOVER, i._mouseover), i.clickAreaSlot.on(h.EventType.MOUSEOUT, i._mouseout), i
            }
            return n(e, t), e.prototype.update = function (t, e, i, n) {
                this._update_(t.name, t.iconType, t.isPlane(), e, t.skillLevel, t.isLocked(), t.level, i, n)
            }, e.prototype.empty = function (t) {
                this._updateLock(!1), this._updateAirPlane(!1, 0, 0), this._updateSlotItemLevel(0), this._updateIconType(0), this._updateItemName(""), this._updateDetachButton(!1), this._updateFocusItem(t)
            }, e.prototype._update_ = function (t, e, i, n, o, r, s, a, _) {
                this._updateLock(r), this._updateAirPlane(i, n, o), this._updateSlotItemLevel(s), this._updateIconType(e), this._updateItemName(t), this._updateDetachButton(a), this._updateFocusItem(_)
            }, e.prototype._updateDetachButton = function (t) {
                this.detachButton.visible = !1, t && (this.detachButton.visible = !0)
            }, e.prototype._updateFocusItem = function (t) {
                this.focusItem.alpha = 0, this.focusItem.visible = !1, this.clickAreaSlot.interactive = this.clickAreaSlot.buttonMode = !1, t && (this.focusItem.visible = !0, this.clickAreaSlot.interactive = this.clickAreaSlot.buttonMode = !0)
            }, e.prototype._updateItemName = function (t) {
                this.containerItemName.cacheAsBitmap = !1, this._textItemName.text = t, this.containerItemName.cacheAsBitmap = !0
            }, e.prototype._updateLock = function (t) {
                this.lockIcon.visible = !1, t && (this.lockIcon.visible = !0)
            }, e.prototype._updateIconType = function (t) {
                this.iconWeapon.update(t)
            }, e.prototype._updateSlotItemLevel = function (t) {
                this.slotItemLevel.update(t)
            }, e.prototype._updateAirPlane = function (t, e, i) {
                this.textTousai.visible = !1, this.airPlaneLevel.visible = !1, t && (this.textTousai.text = "" + e, this.airPlaneLevel.update(i), this.textTousai.visible = !0, this.airPlaneLevel.visible = !0)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this.clickAreaSlot.off(h.EventType.MOUSEDOWN, this._mousedown), this.clickAreaSlot.off(h.EventType.MOUSEOVER, this._mouseover), this.clickAreaSlot.off(h.EventType.MOUSEOUT, this._mouseout), this.clickAreaSlot.off(h.EventType.MOUSEUP, this._mouseup), this.clickAreaSlot.clear(), this.airPlaneLevel.dispose(), this.slotItemLevel.dispose(), this.iconWeapon.dispose(), this.detachButton.dispose(), this.containerItemName.cacheAsBitmap = !1, this.containerItemName.mask = null, this.containerItemName.removeChildren(), this._textItemName.destroy(), this.textTousai.destroy(), this.mousedown = null, this.onClickDetach = null, this.onMouseUp = null, this.onMouseOut = null, this._background = null, this._textItemNameMask = null, this.focusItem = null, this.detachButton = null, this.containerItemName = null, this.airPlaneLevel = null, this.slotItemLevel = null, this.iconWeapon = null, this.lockIcon = null, this._textItemName = null, this.textTousai = null, this.clickAreaSlot = null
            }, e
        }(PIXI.Container);
    e.SlotItemSlot = p
}