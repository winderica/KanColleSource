const function907 = function (t, e, i) {
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
    var o = i(0),
        r = i(1),
        s = i(142),
        a = i(50),
        _ = i(159),
        l = i(60),
        u = i(160),
        c = i(4),
        h = i(21),
        p = i(35),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.ITEM_NUM = 10, e._onClick = function (t) {
                    e.onClickSlot(t)
                };
                var i = new PIXI.Sprite(h.COMMON_MAIN.getTexture(13));
                i.interactive = !0, e.addChild(i);
                var n = new PIXI.Sprite(h.COMMON_MAIN.getTexture(35));
                e.iconEmpty = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(140)), e.listItems = new Array, n.position.set(90, 12), e.addChild(e.iconEmpty, n);
                e.iconEmpty.position.set(93, 58), e.iconEmpty.visible = !1;
                for (var o = 0; o < e.ITEM_NUM; o++) {
                    var r = new y,
                        s = new PIXI.Sprite(h.COMMON_MAIN.getTexture(37));
                    r.onClick = e._onClick, s.position.set(48, 43 + 46 * o + 43), r.position.set(0, 43 + 46 * o), e.addChild(s, r), e.listItems.push(r)
                }
                return e
            }
            return n(e, t), e.prototype.dispose = function () {
                for (var t = 0; t < this.listItems.length; t++) this.listItems[t].dispose(), this.listItems[t] = null;
                this.listItems = null, this.iconEmpty = null, this.onClickSlot = null, this.removeChildren()
            }, e.prototype.update = function (t, e) {
                for (var i = 0; i < this.listItems.length; i++) {
                    var n = this.listItems[i];
                    if (n.visible = !1, !(i >= t.length)) {
                        var r = t[i],
                            s = o.default.model.slot.getMst(r.mstID),
                            _ = a.SlotUtil.genSummaryText(r, "+", "/", !0),
                            l = f.DISABLE;
                        l = r.isLocked() ? f.DISABLE : e.indexOf(r.memID) > -1 ? f.ON : f.OFF, n.update(r.memID, r.iconType, r.name, r.skillLevel, r.level, s.rarity, _, r.isLocked(), l), n.visible = !0
                    }
                }
                this.iconEmpty.visible = !1, 0 == t.length && (this.iconEmpty.visible = !0)
            }, e
        }(PIXI.Container);
    e.SlotDisassemblyChoice = d;
    var f;
    ! function (t) {
        t[t.DISABLE = 0] = "DISABLE", t[t.OFF = 1] = "OFF", t[t.ON = 2] = "ON"
    }(f || (f = {}));
    var y = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick(e.memSlotId)
            }, e._onMouseOver = function () {
                e.containerName.cacheAsBitmap = !1, e.containerSummary.cacheAsBitmap = !1, e.background.visible = !0, e.textRarity.style.fill = e.textSummary.style.fill = e.textName.style.fill = 16777215, e.maskName.texture = h.COMMON_MAIN.getTexture(16), e.maskSummary.texture = h.COMMON_MAIN.getTexture(16), e.containerName.cacheAsBitmap = !0, e.containerSummary.cacheAsBitmap = !0
            }, e._onMouseOut = function () {
                e.containerName.cacheAsBitmap = !1, e.containerSummary.cacheAsBitmap = !1, e.background.visible = !1, e.textRarity.style.fill = e.textSummary.style.fill = e.textName.style.fill = 5523516, e.maskName.texture = h.COMMON_MAIN.getTexture(38), e.maskSummary.texture = h.COMMON_MAIN.getTexture(38), e.containerName.cacheAsBitmap = !0, e.containerSummary.cacheAsBitmap = !0
            }, e.background = new PIXI.Sprite(h.COMMON_MAIN.getTexture(17)), e.clickArea = new PIXI.Graphics, e.iconCheckState = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(12)), e.iconWeapon = new l.IconWeapon, e.airPlaneLevel = new _.AirPlaneLevel, e.textRarity = new c.TextBox(21, 5523516), e.textSummary = new c.TextBox(21, 5523516), e.textName = new c.TextBox(21, 5523516), e.slotItemLevel = new u.SlotItemLevel, e.maskName = new PIXI.Sprite(h.COMMON_MAIN.getTexture(38)), e.maskSummary = new PIXI.Sprite(h.COMMON_MAIN.getTexture(38)), e.iconLock = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(80)), e.maskName.anchor.set(1, 0), e.maskName.position.set(360, 0), e.maskSummary.anchor.set(1, 0), e.maskSummary.position.set(700, 0), e.iconCheckState.position.set(15, 24), e.iconCheckState.anchor.set(0, .5), e.airPlaneLevel.position.set(270, 3), e.textRarity.anchor.x = 0, e.slotItemLevel.position.set(307, 15), e.iconWeapon.position.set(45, 0), e.iconLock.position.set(618, 0), e.background.position.set(90, 0), e.background.scale.x = 1.22, e.background.visible = !1, e.clickArea.beginFill(0, 0), e.clickArea.drawRect(0, 0, 645, 45), e.clickArea.endFill(), e.clickArea.on(r.EventType.CLICK, e._onClick), e.clickArea.on(r.EventType.MOUSEOVER, e._onMouseOver), e.clickArea.on(r.EventType.MOUSEOUT, e._onMouseOut), e.clickArea.interactive = e.clickArea.buttonMode = !0, e.containerSummary = new PIXI.Container, e.containerName = new PIXI.Container, e.containerSummary.position.set(450, 10), e.containerName.position.set(96, 10);
            var i = new PIXI.Graphics;
            i.beginFill(0, 0), i.drawRect(0, 0, 245, 45), i.endFill();
            var n = new PIXI.Graphics;
            return n.beginFill(0, 0), n.drawRect(0, 0, 245, 45), n.endFill(), e.containerSummary.mask = n, e.containerSummary.addChild(e.textSummary, n), e.containerName.mask = i, e.containerName.addChild(e.textName, i), e.addChild(e.background, e.iconCheckState, e.iconWeapon, e.containerName, e.maskName, e.airPlaneLevel, e.slotItemLevel, e.textRarity, e.containerSummary, e.maskSummary, e.iconLock, e.clickArea), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.containerName.mask = null, this.containerSummary.mask = null, this.containerName.cacheAsBitmap = !1, this.containerName.removeChildren(), this.containerSummary.cacheAsBitmap = !1, this.containerSummary.removeChildren(), this.iconWeapon.dispose(), this.airPlaneLevel.dispose(), this.slotItemLevel.dispose(), this.clickArea.clear(), this.clickArea.off(r.EventType.CLICK), this.clickArea.off(r.EventType.MOUSEOVER), this.clickArea.off(r.EventType.MOUSEOUT), this.textRarity.destroy(), this.textSummary.destroy(), this.textName.destroy(), this.onClick = null, this.iconCheckState = null, this.iconWeapon = null, this.textName = null, this.airPlaneLevel = null, this.slotItemLevel = null, this.textRarity = null, this.textSummary = null, this.iconLock = null, this.background = null, this.clickArea = null, this.containerName = null, this.containerSummary = null, this.maskName = null, this.maskSummary = null
        }, e.prototype.update = function (t, e, i, n, o, r, a, _, l) {
            switch (this.containerName.cacheAsBitmap = !1, this.containerSummary.cacheAsBitmap = !1, this.memSlotId = t, this.iconWeapon.update(e), this.textName.text = i, this.airPlaneLevel.update(n), this.slotItemLevel.update(o), this.iconLock.visible = !1, _ && (this.iconLock.visible = !0), this.textRarity.text = s.SlotConst.SLOTITEM_RARITY_NAMES[r], this.textSummary.text = a, l) {
                case f.DISABLE:
                    this.iconCheckState.texture = p.ARSENAL_MAIN.getTexture(12);
                    break;
                case f.OFF:
                    this.iconCheckState.texture = p.ARSENAL_MAIN.getTexture(13);
                    break;
                case f.ON:
                    this.iconCheckState.texture = p.ARSENAL_MAIN.getTexture(14)
            }
            this.textRarity.position.set(391 - Math.floor(this.textRarity.width / 2), 10), this.containerName.cacheAsBitmap = !0, this.containerSummary.cacheAsBitmap = !0
        }, e
    }(PIXI.Container)
}