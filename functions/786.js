const function786 = function (t, e, i) {
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
    var o = i(0), r = i(139), s = i(50), a = i(155), _ = i(60), u = i(159), l = i(156), c = i(4), h = i(21),
        p = i(70), d = i(1), f = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onClick = function (t, e) {
                    i.onClick(t, e)
                }, i._onClickLock = function (t, e) {
                    i.onClickLock(t, e)
                };
                var n = new v(e), o = new g(e), r = new m(e);
                return n.onClick = i._onClick, o.onClick = i._onClick, o.onClickLock = i._onClickLock, r.onClickLock = i._onClickLock, i.listItemInUse = n, i.listItemDefault = o, i.listItemExtra = r, i
            }

            return n(e, t), e.prototype.update = function (t, e, i, n, o) {
                this.removeChildren(), e ? (this.listItemInUse.update(t, e, i, n), this.addChild(this.listItemInUse)) : o ? (this.listItemExtra.update(t), this.addChild(this.listItemExtra)) : (this.listItemDefault.update(t), this.addChild(this.listItemDefault))
            }, e.prototype.dispose = function () {
                this.onClick = this._onClick = null, this.onClickLock = this._onClickLock = null, this.listItemInUse.dispose(), this.listItemDefault.dispose(), this.listItemExtra.dispose(), this.listItemInUse = null, this.listItemDefault = null, this.listItemExtra = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.ListItem = f;
    var y, v = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClick = function () {
                i.onClick(i.index, i.memSlotItemId)
            }, i._onMouseOver = function (t) {
                i.mouseover()
            }, i._onMouseOut = function (t) {
                i.mouseout()
            }, i.center = 23, i.index = e;
            var n = new _.IconWeapon, o = new PIXI.Sprite(h.COMMON_MAIN.getTexture(17)), r = new PIXI.Graphics,
                s = new PIXI.Container, u = new c.TextBox(21, 5523516), p = new PIXI.Graphics;
            p.beginFill(0, 0), p.drawRect(0, 0, 245, 45), p.endFill(), s.mask = p, s.addChild(u, p), i.maskName = new PIXI.Sprite(h.COMMON_MAIN.getTexture(38)), i.maskName.position.x = 172;
            var f = new l.SlotItemLevel, y = new a.AirPlaneLevel, v = Math.floor(i.center - u.height / 2),
                g = new c.TextBox(15, 5523516), m = new w;
            return n.position.x = -6, r.beginFill(0, 0), r.drawRect(0, 0, o.width + 180, o.height), r.endFill(), r.addListener(d.EventType.CLICK, i._onClick), r.addListener(d.EventType.MOUSEOVER, i._onMouseOver), r.addListener(d.EventType.MOUSEOUT, i._onMouseOut), r.renderable = !1, r.interactive = r.buttonMode = !0, m.position.set(306, 0), y.position.set(232, 3), f.position.set(260, 13), s.position.set(42, v), o.width += 135, o.position.x = 36, o.visible = !1, i.containerName = s, i.textName = u, i.shipSummary = m, i.iconWeapon = n, i.focus = o, i.clickArea = r, i.slotItemLevel = f, i.airPlaneLevel = y, i.addChild(r, o, n, s, i.maskName, g, m, f, y), i
        }

        return n(e, t), e.prototype.update = function (t, e, i, n) {
            var o = e.isRepair(), r = t.iconType;
            this.textName.text = t.name, this.iconWeapon.update(r), this._updateInteractive_(n), this._updateLevel_(t.level), this._updateSkillLevel_(t.skillLevel), this._updateShipSummary_(e.name, e.level, i, n, o), this.memSlotItemId = t.memID, this.mouseout()
        }, e.prototype._updateSkillLevel_ = function (t) {
            this.airPlaneLevel.visible = !1, 0 < t && (this.airPlaneLevel.update(t), this.airPlaneLevel.visible = !0)
        }, e.prototype._updateLevel_ = function (t) {
            this.slotItemLevel.visible = !1, 0 < t && (this.slotItemLevel.update(t), this.slotItemLevel.visible = !0)
        }, e.prototype._updateShipSummary_ = function (t, e, i, n, o) {
            this.shipSummary.update(t, e, i, n, o)
        }, e.prototype._updateInteractive_ = function (t) {
            this.clickArea.interactive = !0, t && (this.clickArea.interactive = !1)
        }, e.prototype.mouseover = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !0, this.maskName.texture = h.COMMON_MAIN.getTexture(16), this.textName.style.fill = 16774898, this.shipSummary.mouseover(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !1, this.maskName.texture = h.COMMON_MAIN.getTexture(38), this.textName.style.fill = 5523516, this.shipSummary.mouseout(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.iconWeapon.dispose(), this.shipSummary.dispose(), this.slotItemLevel.dispose(), this.airPlaneLevel.dispose(), this.containerName.removeChildren(), this.containerName.mask = null, this.textName.text = "", this.focus.texture = PIXI.Texture.EMPTY, this.clickArea.clear(), this.index = null, this.memSlotItemId = null, this._onClick = this.onClick = null, this._onMouseOver = this.mouseover = null, this._onMouseOut = this.mouseout = null, this.iconWeapon = null, this.shipSummary = null, this.textName = null, this.containerName = null, this.maskName = null, this.focus = null, this.clickArea = null, this.slotItemLevel = null, this.airPlaneLevel = null, this.removeChildren()
        }, e
    }(PIXI.Container), g = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClick = function () {
                i.onClick(i.index, i.memSlotItemId)
            }, i._onClickLock = function () {
                i.onClickLock(i.index, i.memSlotItemId)
            }, i._onMouseOver = function (t) {
                t.target != i.clickArea && t.target != i.lockIcon || i.mouseover()
            }, i._onMouseOut = function (t) {
                t.target != i.clickArea && t.target != i.lockIcon && i.mouseout()
            }, i.center = 23, i.index = e;
            var n = new _.IconWeapon, o = new PIXI.Sprite(h.COMMON_MAIN.getTexture(17)), r = new PIXI.Graphics,
                s = new c.TextBox(15, 5523516);
            i.itemSummary = new x(5523516), i.itemSummary.position.set(395, 0);
            var u = new I;
            i.maskName = new PIXI.Sprite(h.COMMON_MAIN.getTexture(38)), i.maskName.position.x = 172;
            var p = new l.SlotItemLevel, f = new a.AirPlaneLevel;
            f.position.set(232, 3), p.position.set(260, 13), r.beginFill(0, 0), r.drawRect(0, 0, o.width + 180, o.height), r.endFill(), r.addListener(d.EventType.CLICK, i._onClick), r.addListener(d.EventType.MOUSEOVER, i._onMouseOver), r.addListener(d.EventType.MOUSEOUT, i._onMouseOut), r.renderable = !1, r.interactive = r.buttonMode = !0;
            var y = new PIXI.Container, v = new c.TextBox(21, 5523516), g = new PIXI.Graphics;
            g.beginFill(0, 0), g.drawRect(0, 0, 245, 45), g.endFill();
            var m = Math.floor(i.center - v.height / 2);
            return y.mask = g, y.position.set(42, m), y.addChild(v, g), u.onClick = i._onClickLock, u.onMouseOut = i._onMouseOut, u.onMouseOver = i._onMouseOver, u.position.x = 603, o.width += 135, o.position.x = 36, o.visible = !1, n.position.x = -6, i.textRare = s, i.iconWeapon = n, i.lockIcon = u, i.focus = o, i.clickArea = r, i.slotItemLevel = p, i.airPlaneLevel = f, i.containerName = y, i.textName = v, i.addChild(r, o, n, y, i.maskName, s, i.itemSummary, u, p, f), i
        }

        return n(e, t), e.prototype.update = function (t) {
            var e = t.isLocked(), i = o.default.model.slot.getMst(t.mstID).rarity;
            this.iconWeapon.update(t.iconType), this.containerName.cacheAsBitmap = !1, this.textName.text = t.name, this.containerName.cacheAsBitmap = !0, this._updateTextRare_(i), this._updateItemSummary_(t), this._updateLock_(e), this._updateSkillLevel_(t.skillLevel), this._updateLevel_(t.level), this.memSlotItemId = t.memID, this.locked = e, this.mouseout()
        }, e.prototype._updateItemSummary_ = function (t) {
            this.itemSummary.update(t)
        }, e.prototype._updateTextRare_ = function (t) {
            var e = r.SlotConst.SLOTITEM_RARITY_NAMES[t];
            this.textRare.text = e;
            var i = Math.floor(338 - this.textRare.width / 2),
                n = Math.floor(this.center - this.textRare.height / 2);
            this.textRare.position.set(i, n)
        }, e.prototype._updateSkillLevel_ = function (t) {
            this.airPlaneLevel.visible = !1, 0 < t && (this.airPlaneLevel.update(t), this.airPlaneLevel.visible = !0)
        }, e.prototype._updateLevel_ = function (t) {
            this.slotItemLevel.visible = !1, 0 < t && (this.slotItemLevel.update(t), this.slotItemLevel.visible = !0)
        }, e.prototype._updateLock_ = function (t) {
            this.lockIcon.alpha = t ? 1 : 0, this.lockIcon.update(t)
        }, e.prototype.mouseover = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !0, this.lockIcon.alpha = 1, this.maskName.texture = h.COMMON_MAIN.getTexture(16), this.textRare.style.fill = this.textName.style.fill = 16777215, this.itemSummary.mouseover(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !1, this.maskName.texture = h.COMMON_MAIN.getTexture(38), this._updateLock_(this.locked), this.textName.style.fill = this.textRare.style.fill = 5523516, this.itemSummary.mouseout(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.iconWeapon.dispose(), this.itemSummary.dispose(), this.slotItemLevel.dispose(), this.airPlaneLevel.dispose(), this.textRare.text = "", this.lockIcon.dispose(), this.focus.texture = PIXI.Texture.EMPTY, this.clickArea.clear(), this.clickArea.removeAllListeners(d.EventType.CLICK), this.clickArea.removeAllListeners(d.EventType.MOUSEOVER), this.clickArea.removeAllListeners(d.EventType.MOUSEOUT), this.containerName.mask = null, this.containerName.removeChildren(), this.textName.text = "", this.maskName.texture = PIXI.Texture.EMPTY, this.index = null, this.locked = null, this.memSlotItemId = null, this._onClick = this.onClick = null, this._onClickLock = this.onClickLock = null, this._onMouseOver = this.mouseover = null, this._onMouseOut = this.mouseout = null, this.iconWeapon = null, this.itemSummary = null, this.textName = null, this.textRare = null, this.lockIcon = null, this.focus = null, this.clickArea = null, this.slotItemLevel = null, this.airPlaneLevel = null, this.maskName = null, this.containerName = null, this.removeChildren()
        }, e
    }(PIXI.Container), m = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClickLock = function () {
                i.onClickLock(i.index, i.memSlotItemId)
            }, i._onMouseOver = function (t) {
                t.target != i.clickArea && t.target != i.lockIcon || i.mouseover()
            }, i._onMouseOut = function (t) {
                t.target != i.clickArea && t.target != i.lockIcon && i.mouseout()
            }, i.center = 23, i.index = e;
            var n = new _.IconWeapon, o = new PIXI.Sprite(h.COMMON_MAIN.getTexture(17)), r = new PIXI.Graphics,
                s = new c.TextBox(15, 10263708);
            i.itemSummary = new x(10263708);
            var u = new I, p = new l.SlotItemLevel, f = new a.AirPlaneLevel;
            i.itemSummary.position.set(395, 0), f.position.set(232, 3), p.position.set(260, 13), n.position.x = -6, r.beginFill(0, 0), r.drawRect(0, 0, o.width + 180, o.height), r.endFill(), r.addListener(d.EventType.MOUSEOVER, i._onMouseOver), r.addListener(d.EventType.MOUSEOUT, i._onMouseOut), r.renderable = !1, r.interactive = r.buttonMode = !0;
            var y = new PIXI.Container, v = new c.TextBox(21, 10263708), g = new PIXI.Graphics;
            g.beginFill(0, 0), g.drawRect(0, 0, 245, 45), g.endFill();
            var m = Math.floor(i.center - v.height / 2);
            return i.maskName = new PIXI.Sprite(h.COMMON_MAIN.getTexture(38)), i.maskName.position.x = 172, y.mask = g, y.addChild(v, g), y.position.set(42, m), u.onClick = i._onClickLock, u.onMouseOut = i._onMouseOut, u.onMouseOver = i._onMouseOver, u.position.x = 603, o.width += 135, o.position.x = 36, o.visible = !1, i.containerName = y, i.textName = v, i.textRare = s, i.iconWeapon = n, i.lockIcon = u, i.focus = o, i.clickArea = r, i.slotItemLevel = p, i.airPlaneLevel = f, i.addChild(r, o, n, y, i.maskName, s, i.itemSummary, u, p, f), i
        }

        return n(e, t), e.prototype.update = function (t) {
            var e = t.isLocked(), i = o.default.model.slot.getMst(t.mstID).rarity;
            this.iconWeapon.update(t.iconType), this.textName.text = t.name, this._updateTextRare_(i), this._updateItemSummary_(t), this._updateLock_(e), this._updateSkillLevel_(t.skillLevel), this._updateLevel_(t.level), this.memSlotItemId = t.memID, this.locked = e, this.mouseout()
        }, e.prototype._updateItemSummary_ = function (t) {
            this.itemSummary.update(t)
        }, e.prototype._updateTextRare_ = function (t) {
            var e = r.SlotConst.SLOTITEM_RARITY_NAMES[t];
            this.textRare.text = e;
            var i = Math.floor(338 - this.textRare.width / 2),
                n = Math.floor(this.center - this.textRare.height / 2);
            this.textRare.position.set(i, n)
        }, e.prototype._updateSkillLevel_ = function (t) {
            this.airPlaneLevel.visible = !1, 0 < t && (this.airPlaneLevel.update(t), this.airPlaneLevel.visible = !0)
        }, e.prototype._updateLevel_ = function (t) {
            this.slotItemLevel.visible = !1, 0 < t && (this.slotItemLevel.update(t), this.slotItemLevel.visible = !0)
        }, e.prototype._updateLock_ = function (t) {
            this.lockIcon.alpha = t ? 1 : 0, this.lockIcon.update(t)
        }, e.prototype.mouseover = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !0, this.lockIcon.alpha = 1, this.maskName.texture = h.COMMON_MAIN.getTexture(16), this.textName.style.fill = this.textRare.style.fill = 16774898, this.itemSummary.mouseover(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !1, this.maskName.texture = h.COMMON_MAIN.getTexture(38), this._updateLock_(this.locked), this.textName.style.fill = this.textRare.style.fill = 10263708, this.itemSummary.mouseout(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.iconWeapon.dispose(), this.itemSummary.dispose(), this.textName.text = "", this.textRare.text = "", this.lockIcon.dispose(), this.focus.texture = PIXI.Texture.EMPTY, this.containerName.mask = null, this.containerName.removeChildren(), this.maskName.texture = PIXI.Texture.EMPTY, this.clickArea.clear(), this.index = null, this.locked = null, this.memSlotItemId = null, this._onClickLock = this.onClickLock = null, this._onMouseOver = this.mouseover = null, this._onMouseOut = this.mouseout = null, this.iconWeapon = null, this.itemSummary = null, this.containerName = null, this.textName = null, this.maskName = null, this.textRare = null, this.lockIcon = null, this.focus = null, this.clickArea = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.TAN = 1] = "TAN", t[t.CHU = 2] = "CHU", t[t.CHO = 3] = "CHO", t[t.CHOCHO = 4] = "CHOCHO"
    }(y || (y = {}));
    var b = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.center = 22;
            var i = new c.TextBox(21, 5523516), n = new c.TextBox(18, 5523516);
            return i.position.y = e.center - Math.floor(i.height / 2), n.position.y = i.position.y + (i.height - n.height), e.addChild(i, n), e.textName = i, e.textLevel = n, e
        }

        return n(e, t), e.prototype.update = function (t, e, i) {
            this.textName.text = t, this.textLevel.text = "(Lv." + e + ")", this.textLevel.position.x = this.textName.width, this._updateTextColor_(i), this.mouseout()
        }, e.prototype._updateTextColor_ = function (t) {
            var e = 5523516;
            t && (e = 10263708), this.defaultTextColor = e
        }, e.prototype.mouseover = function () {
            this.cacheAsBitmap = !1, this.textName.style.fill = this.textLevel.style.fill = 16777215, this.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.cacheAsBitmap = !1, this.textName.style.fill = this.textLevel.style.fill = this.defaultTextColor, this.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.textName = null, this.textLevel = null, this.removeChildren()
        }, e
    }(PIXI.Container), w = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.center = 23, e.shipInDeckFlag = new u.ShipInDeckFlag, e.textStatus = new c.TextBox(18, 5523516), e.textNameAndLevel = new b, e.maskName = new PIXI.Sprite(h.COMMON_MAIN.getTexture(38)), e.maskName.position.x = 80;
            var i = new PIXI.Graphics;
            return i.beginFill(0, 0), i.drawRect(0, 0, 170, 45), i.endFill(), e.textNameAndLevel.mask = i, e.textNameAndLevel.addChild(i), e.shipInDeckFlag.position.x = 188, e.shipInDeckFlag.scale.set(.75, .75), e.textStatus.position.x = 225, e.textStatus.position.y = e.center - Math.floor(e.textStatus.height / 2), e.addChild(e.textNameAndLevel, e.maskName, e.shipInDeckFlag, e.textStatus), e
        }

        return n(e, t), e.prototype.update = function (t, e, i, n, o) {
            this.textNameAndLevel.update(t, e, n), this._updateDeck_(i), this._updateState_(o, n), this._updateTextColor_(o, n), this.mouseout()
        }, e.prototype.mouseover = function () {
            this.textNameAndLevel.cacheAsBitmap = !1, this.textNameAndLevel.mouseover(), this.textStatus.style.fill = 16777215, this.maskName.texture = h.COMMON_MAIN.getTexture(16), this.textNameAndLevel.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.textNameAndLevel.cacheAsBitmap = !1, this.textNameAndLevel.mouseout(), this.textStatus.style.fill = this.stateColor, this.maskName.texture = h.COMMON_MAIN.getTexture(38), this.textNameAndLevel.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.textNameAndLevel.removeChildren(), this.shipInDeckFlag.dispose(), this.textNameAndLevel.dispose(), this.repair = null, this.expedition = null, this.defaultTextColor = null, this.stateColor = null, this.textStatus.text = null, this.shipInDeckFlag = null, this.textNameAndLevel = null, this.maskName = null, this.removeChildren()
        }, e.prototype._updateDeck_ = function (t) {
            this.shipInDeckFlag.visible = !1, t && (this.shipInDeckFlag.update(t), this.shipInDeckFlag.position.y = Math.floor(this.center - this.shipInDeckFlag.height / 2), this.shipInDeckFlag.visible = !0)
        }, e.prototype._updateTextColor_ = function (t, e) {
            var i = 5523516, n = 5523516;
            e ? (i = 13224393, n = 2466210) : t && (n = 6201187), this.defaultTextColor = i, this.stateColor = n
        }, e.prototype._updateState_ = function (t, e) {
            this.textStatus.text = "", this.textStatus.visible = !1, t ? (this.textStatus.text = "\u5165\u6e20\u4e2d", this.textStatus.visible = !0) : e && (this.textStatus.text = "\u9060\u5f81\u4e2d", this.textStatus.visible = !0)
        }, e
    }(PIXI.Container), x = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i.defaultColor = e, i.labelShatei = new c.TextBox(15, e), i.textShatei = new c.TextBox(15, e), i.textOtherSpec = new c.TextBox(15, e), i.paraLayer = new PIXI.Container;
            var n = new PIXI.Graphics;
            return n.beginFill(0, 0), n.drawRect(0, 0, 245, 45), n.endFill(), i.paraLayer.mask = n, i.labelShatei.text = "\u5c04\u7a0b ", i.textShatei.visible = !1, i.labelShatei.visible = !1, i.textOtherSpec.visible = !1, i.paraLayer.addChild(i.labelShatei, i.textShatei, i.textOtherSpec), i.maskPara = new PIXI.Sprite(h.COMMON_MAIN.getTexture(38)), i.maskPara.position.x = 160, i.paraLayer.position.y = Math.floor(i.maskPara.height / 2 - i.labelShatei.height / 2), i.addChild(i.paraLayer, i.maskPara), i
        }

        return n(e, t), e.prototype.dispose = function () {
            this.paraLayer.removeChildren(), this.colorMouseOverShatei = null, this.defaultColor = null, this.labelShatei = null, this.textShatei = null, this.textOtherSpec = null, this.maskPara = null, this.paraLayer = null, this.removeChildren()
        }, e.prototype.update = function (t) {
            this.paraLayer.cacheAsBitmap = !1, this.labelShatei.visible = !1, this.textShatei.visible = !1, this.textOtherSpec.visible = !1;
            var e = s.SlotUtil.genSummaryText(t, "+", "/", !1);
            this.textOtherSpec.visible = !0;
            var i = this.lengthToShatei(t.range);
            if (i == y.NONE) this.textOtherSpec.text = e, this.textOtherSpec.x = 0; else {
                this.textOtherSpec.text = "/" + e;
                var n = this.shateiToString(i), o = this.shateiToColor(i);
                this.textShatei.text = n, this.colorMouseOverShatei = this.textShatei.style.fill = o, this.labelShatei.x = 0, this.textShatei.x = this.labelShatei.x + this.labelShatei.width, this.textOtherSpec.x = this.textShatei.x + this.textShatei.width, this.labelShatei.visible = !0, this.textShatei.visible = !0
            }
            this.paraLayer.cacheAsBitmap = !0
        }, e.prototype.mouseover = function () {
            this.paraLayer.cacheAsBitmap = !1, this.textOtherSpec.style.fill = this.textShatei.style.fill = this.labelShatei.style.fill = 16777215, this.maskPara.texture = h.COMMON_MAIN.getTexture(16), this.paraLayer.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.paraLayer.cacheAsBitmap = !1, this.textOtherSpec.style.fill = this.labelShatei.style.fill = this.defaultColor, this.textShatei.style.fill = this.colorMouseOverShatei, this.maskPara.texture = h.COMMON_MAIN.getTexture(38), this.paraLayer.cacheAsBitmap = !0
        }, e.prototype.lengthToShatei = function (t) {
            switch (t) {
                case 1:
                    return y.TAN;
                case 2:
                    return y.CHU;
                case 3:
                    return y.CHO;
                case 4:
                    return y.CHOCHO
            }
            return y.NONE
        }, e.prototype.shateiToString = function (t) {
            switch (t) {
                case y.TAN:
                    return "\u77ed";
                case y.CHU:
                    return "\u4e2d";
                case y.CHO:
                    return "\u9577";
                case y.CHOCHO:
                    return "\u8d85\u9577"
            }
            throw new Error("un supported")
        }, e.prototype.shateiToColor = function (t) {
            switch (t) {
                case y.TAN:
                    return 33023;
                case y.CHU:
                    return 4246528;
                case y.CHO:
                    return 16744448;
                case y.CHOCHO:
                    return 16711680
            }
            throw new Error("un supported")
        }, e
    }(PIXI.Container), I = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            }, e._onMouseOver = function (t) {
                e.onMouseOver(t)
            }, e._onMouseOut = function (t) {
                e.onMouseOut(t)
            };
            var i = p.REMODEL_MAIN.getTexture(41), n = p.REMODEL_MAIN.getTexture(40);
            return e.interactive = e.buttonMode = !0, e.addListener(d.EventType.CLICK, e._onClick), e.addListener(d.EventType.MOUSEOVER, e._onMouseOver), e.addListener(d.EventType.MOUSEOUT, e._onMouseOut), e.textureLockOn = i, e.textureLockOff = n, e
        }

        return n(e, t), e.prototype.update = function (t) {
            this.texture = this.textureLockOff, t && (this.texture = this.textureLockOn)
        }, e.prototype.dispose = function () {
            this.texture = PIXI.Texture.EMPTY, this.removeAllListeners(d.EventType.CLICK), this.removeAllListeners(d.EventType.MOUSEOVER), this.removeAllListeners(d.EventType.MOUSEOUT), this.onClick = this._onClick = null, this._onMouseOut = null, this._onMouseOver = null, this.textureLockOff = null, this.textureLockOn = null, this.interactive = this.buttonMode = !1
        }, e
    }(PIXI.Sprite)
}