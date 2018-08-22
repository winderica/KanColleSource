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
    var o = i(0), r = i(3), s = i(157), a = i(158), _ = i(59), u = i(4), l = i(3), c = i(336), h = i(51), p = i(1),
        d = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._mousedown = function (t) {
                    i.mousedown(i.index, t.data.global)
                }, i._mouseover = function () {
                    i.focusItem.alpha = 1
                }, i._mouseout = function () {
                    i.focusItem.alpha = 0
                }, i._onClickDetach = function () {
                    i.onClickDetach(i.index)
                }, i._mouseup = function () {
                    i.onMouseUp(i.index)
                };
                var n = new PIXI.Sprite(r.COMMON_MAIN.getTexture(41)),
                    d = new PIXI.Sprite(l.REMODEL_MAIN.getTexture(22)), f = new PIXI.Graphics;
                f.renderable = !1, f.beginFill(0, 0), f.drawRect(0, 0, h.RemodelConst.DETAIL_LISTITEM.WIDTH, h.RemodelConst.DETAIL_LISTITEM.HEIGHT), f.endFill();
                var y = new u.TextBox(19, 5523516), v = new PIXI.Sprite(o.default.resources.getUIImage("mask"));
                v.scale.set(-1.95, 1), v.anchor.set(1, 0);
                var g = new PIXI.Container;
                g.position.set(50, 11), g.mask = v, g.addChild(y, v);
                var m = new u.TextBox(21, 5523516);
                m.position.set(-2, 23), m.anchor.set(1, .5);
                var b = new a.SlotItemLevel, w = new s.AirPlaneLevel,
                    x = new PIXI.Sprite(r.COMMON_MAIN.getTexture(39)), I = new _.IconWeapon;
                n.texture = r.COMMON_MAIN.getTexture(41);
                var T = new c.DetachButton;
                return T.onClick = i._onClickDetach, T.position.set(292, 15), b.position.set(247, 14), w.position.set(219, 3), x.position.set(293, 2), d.scale.x = 1, d.position.x = -30, d.alpha = 0, d.visible = !1, i.addChild(n, g, m, b, w, x, I, d, f, T), i.airPlaneLevel = w, i.slotItemLevel = b, i.lockIcon = x, i.iconWeapon = I, i.background = n, i.textItemName = y, i.textTousai = m, i.index = e, i.detachButton = T, i.clickAreaSlot = f, i.focusItem = d, i.containerItemName = g, i.clickAreaSlot.interactive = i.clickAreaSlot.buttonMode = !0, i.clickAreaSlot.on(p.EventType.MOUSEDOWN, i._mousedown), i.clickAreaSlot.on(p.EventType.MOUSEUP, i._mouseup), i.clickAreaSlot.on(p.EventType.MOUSEOVER, i._mouseover), i.clickAreaSlot.on(p.EventType.MOUSEOUT, i._mouseout), i
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
                this.containerItemName.cacheAsBitmap = !1, this.textItemName.text = t, this.containerItemName.cacheAsBitmap = !0
            }, e.prototype._updateLock_ = function (t) {
                this.lockIcon.visible = !1, t && (this.lockIcon.visible = !0)
            }, e.prototype._updateIconType_ = function (t) {
                this.iconWeapon.update(t)
            }, e.prototype._updateSlotItemLevel_ = function (t) {
                this.slotItemLevel.update(t)
            }, e.prototype._updateAirPlane_ = function (t, e, i) {
                this.textTousai.visible = !1, this.airPlaneLevel.visible = !1, t && (this.textTousai.text = "" + e, this.airPlaneLevel.update(i), this.textTousai.visible = !0, this.airPlaneLevel.visible = !0)
            }, e.prototype.dispose = function () {
                this.clickAreaSlot.off(p.EventType.MOUSEDOWN, this._mousedown), this.clickAreaSlot.off(p.EventType.MOUSEOVER, this._mouseover), this.clickAreaSlot.off(p.EventType.MOUSEOUT, this._mouseout), this.clickAreaSlot.off(p.EventType.MOUSEUP, this._mouseup), this.clickAreaSlot.clear(), this.airPlaneLevel.dispose(), this.slotItemLevel.dispose(), this.iconWeapon.dispose(), this.textItemName.removeChildren(), this.textItemName.text = "", this.containerItemName.mask = null, this.containerItemName.removeChildren(), this.containerItemName = null, this.textTousai.text = "", this._onClickDetach = null, this.mousedown = this._mousedown = null, this._mouseover = null, this._mouseout = null, this.lockIcon.texture = PIXI.Texture.EMPTY, this.background.texture = PIXI.Texture.EMPTY, this.airPlaneLevel = null, this.slotItemLevel = null, this.iconWeapon = null, this.lockIcon = null, this.background = null, this.textItemName = null, this.textTousai = null, this.background = null, this.mousedown = null, this._mousedown = null, this._mouseover = null, this._mouseout = null, this.clickAreaSlot = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.SlotItemSlot = d;
    var f = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.texture = r.COMMON_MAIN.getTexture(42), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.texture = PIXI.Texture.EMPTY, this.removeChildren()
        }, e
    }(PIXI.Sprite);
    e.ClearSlotItemSlot = f
}