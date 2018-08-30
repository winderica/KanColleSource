const function765 = function (t, e, i) {
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
    var o = i(3), r = i(157), s = i(158), a = i(59), _ = i(4), u = i(3), l = i(336), c = i(51), h = i(1),
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
                }, i._index = e, i._background = new PIXI.Sprite(o.COMMON_MAIN.getTexture(45)), i._background.texture = o.COMMON_MAIN.getTexture(45);
                var n = new PIXI.Sprite(u.REMODEL_MAIN.getTexture(22)), p = new PIXI.Graphics;
                p.renderable = !1, p.beginFill(0, 0), p.drawRect(0, 0, c.RemodelConst.DETAIL_LISTITEM.WIDTH, c.RemodelConst.DETAIL_LISTITEM.HEIGHT), p.endFill(), i._textItemName = new _.TextBox(19, 5523516), i._textItemNameMask = new PIXI.Graphics, i._textItemNameMask.beginFill(0), i._textItemNameMask.drawRect(0, 0, 240, 30), i._textItemNameMask.endFill();
                var d = new PIXI.Sprite(o.COMMON_MAIN.getTexture(44));
                d.position.set(120, -2);
                var f = new PIXI.Container;
                f.position.set(50, 11), f.mask = i._textItemNameMask, f.addChild(i._textItemName, i._textItemNameMask, d);
                var y = new _.TextBox(21, 5523516);
                y.position.set(-2, 23), y.anchor.set(1, .5);
                var v = new s.SlotItemLevel, g = new r.AirPlaneLevel,
                    m = new PIXI.Sprite(o.COMMON_MAIN.getTexture(42)), b = new a.IconWeapon, w = new l.DetachButton;
                return w.onClick = i._onClickDetach, w.position.set(292, 15), v.position.set(247, 14), g.position.set(219, 3), m.position.set(293, 2), n.scale.x = 1, n.position.x = -30, n.alpha = 0, n.visible = !1, i.addChild(i._background, f, y, v, g, m, b, n, p, w), i.airPlaneLevel = g, i.slotItemLevel = v, i.lockIcon = m, i.iconWeapon = b, i.textTousai = y, i.detachButton = w, i.clickAreaSlot = p, i.focusItem = n, i.containerItemName = f, i.clickAreaSlot.interactive = i.clickAreaSlot.buttonMode = !0, i.clickAreaSlot.on(h.EventType.MOUSEDOWN, i._mousedown), i.clickAreaSlot.on(h.EventType.MOUSEUP, i._mouseup), i.clickAreaSlot.on(h.EventType.MOUSEOVER, i._mouseover), i.clickAreaSlot.on(h.EventType.MOUSEOUT, i._mouseout), i
            }

            return n(e, t), e.prototype.update = function (t, e, i, n) {
                this._update_(t.name, t.iconType, t.isPlane(), e, t.skillLevel, t.isLocked(), t.level, i, n)
            }, e.prototype.empty = function (t) {
                this._updateLock_(!1), this._updateAirPlane_(!1, 0, 0), this._updateSlotItemLevel_(0), this._updateIconType_(0), this._updateItemName_(""), this._updateDetachButton_(!1), this._updateFocusItem_(t)
            }, e.prototype._update_ = function (t, e, i, n, o, r, s, a, _) {
                this._updateLock_(r), this._updateAirPlane_(i, n, o), this._updateSlotItemLevel_(s), this._updateIconType_(e), this._updateItemName_(t), this._updateDetachButton_(a), this._updateFocusItem_(_)
            }, e.prototype._updateDetachButton_ = function (t) {
                this.detachButton.visible = !1, t && (this.detachButton.visible = !0)
            }, e.prototype._updateFocusItem_ = function (t) {
                this.focusItem.alpha = 0, this.focusItem.visible = !1, this.clickAreaSlot.interactive = this.clickAreaSlot.buttonMode = !1, t && (this.focusItem.visible = !0, this.clickAreaSlot.interactive = this.clickAreaSlot.buttonMode = !0)
            }, e.prototype._updateItemName_ = function (t) {
                this.containerItemName.cacheAsBitmap = !1, this._textItemName.text = t, this.containerItemName.cacheAsBitmap = !0
            }, e.prototype._updateLock_ = function (t) {
                this.lockIcon.visible = !1, t && (this.lockIcon.visible = !0)
            }, e.prototype._updateIconType_ = function (t) {
                this.iconWeapon.update(t)
            }, e.prototype._updateSlotItemLevel_ = function (t) {
                this.slotItemLevel.update(t)
            }, e.prototype._updateAirPlane_ = function (t, e, i) {
                this.textTousai.visible = !1, this.airPlaneLevel.visible = !1, t && (this.textTousai.text = "" + e, this.airPlaneLevel.update(i), this.textTousai.visible = !0, this.airPlaneLevel.visible = !0)
            }, e.prototype.dispose = function () {
                this._background = null, this.clickAreaSlot.off(h.EventType.MOUSEDOWN, this._mousedown), this.clickAreaSlot.off(h.EventType.MOUSEOVER, this._mouseover), this.clickAreaSlot.off(h.EventType.MOUSEOUT, this._mouseout), this.clickAreaSlot.off(h.EventType.MOUSEUP, this._mouseup), this.clickAreaSlot.clear(), this.airPlaneLevel.dispose(), this.slotItemLevel.dispose(), this.iconWeapon.dispose(), this.containerItemName.mask = null, this.containerItemName.removeChildren(), this.containerItemName = null, this.textTousai.text = "", this._onClickDetach = null, this.mousedown = this._mousedown = null, this._mouseover = null, this._mouseout = null, this.lockIcon.texture = PIXI.Texture.EMPTY, this.airPlaneLevel = null, this.slotItemLevel = null, this.iconWeapon = null, this.lockIcon = null, this._textItemName = null, this.textTousai = null, this.clickAreaSlot = null, this.onMouseOut = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.SlotItemSlot = p;
    var d = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.texture = o.COMMON_MAIN.getTexture(46), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.texture = PIXI.Texture.EMPTY, this.removeChildren()
        }, e
    }(PIXI.Sprite);
    e.ClearSlotItemSlot = d
}