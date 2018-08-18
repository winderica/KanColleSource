const function781 = function (t, e, i) {
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
    var o = i(0), r = i(140), s = i(101), a = i(50), _ = i(155), u = i(59), l = i(158), c = i(156), h = i(4),
        p = i(20), d = i(68), f = i(1), y = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onClick = function (t, e) {
                    i.onClick(t, e)
                }, i._onClickLock = function (t, e) {
                    i.onClickLock(t, e)
                };
                var n = new g(e), o = new m(e), r = new b(e);
                return n.onClick = i._onClick, o.onClick = i._onClick, o.onClickLock = i._onClickLock, r.onClickLock = i._onClickLock, i.listItemInUse = n, i.listItemDefault = o, i.listItemExtra = r, i
            }

            return n(e, t), e.prototype.update = function (t, e, i, n, o) {
                this.removeChildren(), e ? (this.listItemInUse.update(t, e, i, n), this.addChild(this.listItemInUse)) : o ? (this.listItemExtra.update(t), this.addChild(this.listItemExtra)) : (this.listItemDefault.update(t), this.addChild(this.listItemDefault))
            }, e.prototype.dispose = function () {
                this.onClick = this._onClick = null, this.onClickLock = this._onClickLock = null, this.listItemInUse.dispose(), this.listItemDefault.dispose(), this.listItemExtra.dispose(), this.listItemInUse = null, this.listItemDefault = null, this.listItemExtra = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.ListItem = y;
    var v, g = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClick = function () {
                i.onClick(i.index, i.memSlotItemId)
            }, i._onMouseOver = function (t) {
                i.mouseover()
            }, i._onMouseOut = function (t) {
                i.mouseout()
            }, i.center = 23, i.index = e;
            var n = new u.IconWeapon, r = new PIXI.Sprite(p.COMMON_MAIN.getTexture(15)), s = new PIXI.Graphics,
                a = new PIXI.Container, l = new h.TextBox(21, 5523516),
                d = new PIXI.Sprite(o.default.resources.getUIImage("mask"));
            a.mask = d, a.addChild(l, d);
            var y = new c.SlotItemLevel, v = new _.AirPlaneLevel, g = Math.floor(i.center - l.height / 2),
                m = new h.TextBox(15, 5523516), b = new x;
            return n.position.x = -6, d.scale.x = -1.8, d.anchor.x = 1, d.x = 0, s.beginFill(0, 0), s.drawRect(0, 0, r.width + 180, r.height), s.endFill(), s.addListener(f.EventType.CLICK, i._onClick), s.addListener(f.EventType.MOUSEOVER, i._onMouseOver), s.addListener(f.EventType.MOUSEOUT, i._onMouseOut), s.renderable = !1, s.interactive = s.buttonMode = !0, b.position.set(306, 0), v.position.set(232, 3), y.position.set(260, 13), a.position.set(42, g), r.width += 135, r.position.x = 36, r.visible = !1, i.containerName = a, i.textName = l, i.maskName = d, i.shipSummary = b, i.iconWeapon = n, i.focus = r, i.clickArea = s, i.slotItemLevel = y, i.airPlaneLevel = v, i.addChild(s, r, n, a, m, b, y, v), i
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
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !0, this.textName.style.fill = 16774898, this.shipSummary.mouseover(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !1, this.textName.style.fill = 5523516, this.shipSummary.mouseout(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.iconWeapon.dispose(), this.shipSummary.dispose(), this.slotItemLevel.dispose(), this.airPlaneLevel.dispose(), this.containerName.removeChildren(), this.containerName.mask = null, this.textName.text = "", this.maskName.texture = PIXI.Texture.EMPTY, this.focus.texture = PIXI.Texture.EMPTY, this.clickArea.clear(), this.index = null, this.memSlotItemId = null, this._onClick = this.onClick = null, this._onMouseOver = this.mouseover = null, this._onMouseOut = this.mouseout = null, this.iconWeapon = null, this.shipSummary = null, this.textName = null, this.containerName = null, this.maskName = null, this.focus = null, this.clickArea = null, this.slotItemLevel = null, this.airPlaneLevel = null, this.removeChildren()
        }, e
    }(PIXI.Container), m = function (t) {
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
            var n = new u.IconWeapon, r = new PIXI.Sprite(p.COMMON_MAIN.getTexture(15)), s = new PIXI.Graphics,
                a = new h.TextBox(15, 5523516), l = new I(5523516), d = new T,
                y = new PIXI.Sprite(o.default.resources.getUIImage("mask"));
            y.scale.x = -1.8, y.anchor.x = 1, y.x = 0;
            var v = new c.SlotItemLevel, g = new _.AirPlaneLevel;
            g.position.set(232, 3), v.position.set(260, 13), s.beginFill(0, 0), s.drawRect(0, 0, r.width + 180, r.height), s.endFill(), s.addListener(f.EventType.CLICK, i._onClick), s.addListener(f.EventType.MOUSEOVER, i._onMouseOver), s.addListener(f.EventType.MOUSEOUT, i._onMouseOut), s.renderable = !1, s.interactive = s.buttonMode = !0;
            var m = new PIXI.Container, b = new h.TextBox(21, 5523516), w = Math.floor(i.center - b.height / 2);
            return m.position.set(42, w), m.mask = y, m.addChild(b, y), d.onClick = i._onClickLock, d.onMouseOut = i._onMouseOut, d.onMouseOver = i._onMouseOver, d.position.x = 603, r.width += 135, r.position.x = 36, r.visible = !1, n.position.x = -6, i.itemSummary = l, i.textRare = a, i.iconWeapon = n, i.lockIcon = d, i.focus = r, i.clickArea = s, i.slotItemLevel = v, i.airPlaneLevel = g, i.containerName = m, i.textName = b, i.maskName = y, i.addChild(s, r, n, m, a, l, d, v, g), i
        }

        return n(e, t), e.prototype.update = function (t) {
            var e = t.isLocked(), i = o.default.model.slot.getMst(t.mstID).rarity;
            this.iconWeapon.update(t.iconType), this.containerName.cacheAsBitmap = !1, this.textName.text = t.name, this.containerName.cacheAsBitmap = !0, this._updateTextRare_(i), this._updateItemSummary_(t), this._updateLock_(e), this._updateSkillLevel_(t.skillLevel), this._updateLevel_(t.level), this.memSlotItemId = t.memID, this.locked = e, this.mouseout()
        }, e.prototype._updateItemSummary_ = function (t) {
            this.itemSummary.update(t), this.itemSummary.position.set(395, Math.floor(this.center - this.itemSummary.height / 2))
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
            this.lockIcon.visible = !1, t && (this.lockIcon.visible = !0), this.lockIcon.update(t)
        }, e.prototype.mouseover = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !0, this.lockIcon.visible = !0, this.textRare.style.fill = this.textName.style.fill = 16777215, this.itemSummary.mouseover(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !1, this._updateLock_(this.locked), this.textName.style.fill = this.textRare.style.fill = 5523516, this.itemSummary.mouseout(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.iconWeapon.dispose(), this.itemSummary.dispose(), this.slotItemLevel.dispose(), this.airPlaneLevel.dispose(), this.textRare.text = "", this.lockIcon.dispose(), this.focus.texture = PIXI.Texture.EMPTY, this.clickArea.clear(), this.clickArea.removeAllListeners(f.EventType.CLICK), this.clickArea.removeAllListeners(f.EventType.MOUSEOVER), this.clickArea.removeAllListeners(f.EventType.MOUSEOUT), this.containerName.mask = null, this.containerName.removeChildren(), this.textName.text = "", this.maskName.texture = PIXI.Texture.EMPTY, this.index = null, this.locked = null, this.memSlotItemId = null, this._onClick = this.onClick = null, this._onClickLock = this.onClickLock = null, this._onMouseOver = this.mouseover = null, this._onMouseOut = this.mouseout = null, this.iconWeapon = null, this.itemSummary = null, this.textName = null, this.textRare = null, this.lockIcon = null, this.focus = null, this.clickArea = null, this.slotItemLevel = null, this.airPlaneLevel = null, this.maskName = null, this.containerName = null, this.removeChildren()
        }, e
    }(PIXI.Container), b = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClickLock = function () {
                i.onClickLock(i.index, i.memSlotItemId)
            }, i._onMouseOver = function (t) {
                t.target != i.clickArea && t.target != i.lockIcon || i.mouseover()
            }, i._onMouseOut = function (t) {
                t.target != i.clickArea && t.target != i.lockIcon && i.mouseout()
            }, i.center = 23, i.index = e;
            var n = new u.IconWeapon, r = new PIXI.Sprite(p.COMMON_MAIN.getTexture(15)), s = new PIXI.Graphics,
                a = new h.TextBox(15, 10263708), l = new I(10263708), d = new T, y = new c.SlotItemLevel,
                v = new _.AirPlaneLevel;
            v.position.set(232, 3), y.position.set(260, 13), n.position.x = -6, s.beginFill(0, 0), s.drawRect(0, 0, r.width + 180, r.height), s.endFill(), s.addListener(f.EventType.MOUSEOVER, i._onMouseOver), s.addListener(f.EventType.MOUSEOUT, i._onMouseOut), s.renderable = !1, s.interactive = s.buttonMode = !0;
            var g = new PIXI.Container, m = new h.TextBox(21, 10263708), b = Math.floor(i.center - m.height / 2),
                w = new PIXI.Sprite(o.default.resources.getUIImage("mask"));
            return w.scale.x = -1.8, w.anchor.x = 1, w.x = 0, g.mask = w, g.addChild(m, w), g.position.set(42, b), d.onClick = i._onClickLock, d.onMouseOut = i._onMouseOut, d.onMouseOver = i._onMouseOver, d.position.x = 603, r.width += 135, r.position.x = 36, r.visible = !1, i.containerName = g, i.textName = m, i.maskName = w, i.itemSummary = l, i.textRare = a, i.iconWeapon = n, i.lockIcon = d, i.focus = r, i.clickArea = s, i.slotItemLevel = y, i.airPlaneLevel = v, i.addChild(s, r, n, g, a, l, d, y, v), i
        }

        return n(e, t), e.prototype.update = function (t) {
            var e = t.isLocked(), i = o.default.model.slot.getMst(t.mstID).rarity;
            this.iconWeapon.update(t.iconType), this.textName.text = t.name, this._updateTextRare_(i), this._updateItemSummary_(t), this._updateLock_(e), this._updateSkillLevel_(t.skillLevel), this._updateLevel_(t.level), this.memSlotItemId = t.memID, this.locked = e, this.mouseout()
        }, e.prototype._updateItemSummary_ = function (t) {
            this.itemSummary.update(t), this.itemSummary.position.set(395, Math.floor(this.center - this.itemSummary.height / 2))
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
            this.lockIcon.visible = !1, t && (this.lockIcon.visible = !0), this.lockIcon.update(t)
        }, e.prototype.mouseover = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !0, this.lockIcon.visible = !0, this.textName.style.fill = this.textRare.style.fill = 16774898, this.itemSummary.mouseover(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.containerName.cacheAsBitmap = !1, this.focus.visible = !1, this._updateLock_(this.locked), this.textName.style.fill = this.textRare.style.fill = 10263708, this.itemSummary.mouseout(), this.containerName.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.iconWeapon.dispose(), this.itemSummary.dispose(), this.textName.text = "", this.textRare.text = "", this.lockIcon.dispose(), this.focus.texture = PIXI.Texture.EMPTY, this.containerName.mask = null, this.containerName.removeChildren(), this.maskName.texture = PIXI.Texture.EMPTY, this.clickArea.clear(), this.index = null, this.locked = null, this.memSlotItemId = null, this._onClickLock = this.onClickLock = null, this._onMouseOver = this.mouseover = null, this._onMouseOut = this.mouseout = null, this.iconWeapon = null, this.itemSummary = null, this.containerName = null, this.textName = null, this.maskName = null, this.textRare = null, this.lockIcon = null, this.focus = null, this.clickArea = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.TAN = 1] = "TAN", t[t.CHU = 2] = "CHU", t[t.CHO = 3] = "CHO", t[t.CHOCHO = 4] = "CHOCHO"
    }(v || (v = {}));
    var w = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.center = 22;
            var i = new h.TextBox(21, 5523516), n = new h.TextBox(18, 5523516);
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
            this.textName.text = "", this.textLevel.text = "", this.textName = null, this.textLevel = null, this.removeChildren()
        }, e
    }(PIXI.Container), x = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.center = 23;
            var i = new l.ShipInDeckFlag, n = new h.TextBox(18, 5523516), r = new w,
                s = new PIXI.Sprite(o.default.resources.getUIImage("mask"));
            return s.scale.x = -1.8, s.anchor.x = 1, s.x = 0, r.mask = s, r.addChild(s), i.position.x = 188, i.scale.set(.75, .75), n.position.x = 225, n.position.y = e.center - Math.floor(n.height / 2), e.addChild(r, i, n), e.textNameAndLevel = r, e.shipInDeckFlag = i, e.textStatus = n, e.maskTextNameAndLevel = s, e
        }

        return n(e, t), e.prototype.update = function (t, e, i, n, o) {
            this.textNameAndLevel.update(t, e, n), this._updateDeck_(i), this._updateState_(o, n), this._updateTextColor_(o, n), this.mouseout()
        }, e.prototype.mouseover = function () {
            this.cacheAsBitmap = !1, this.textNameAndLevel.mouseover(), this.textStatus.style.fill = 16777215, this.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.cacheAsBitmap = !1, this.textNameAndLevel.mouseout(), this.textStatus.style.fill = this.stateColor, this.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            this.maskTextNameAndLevel.texture = PIXI.Texture.EMPTY, this.textNameAndLevel.removeChildren(), this.textStatus.text = "", this.shipInDeckFlag.dispose(), this.textNameAndLevel.dispose(), this.repair = null, this.expedition = null, this.defaultTextColor = null, this.stateColor = null, this.maskTextNameAndLevel = null, this.textStatus.text = null, this.shipInDeckFlag = null, this.textNameAndLevel = null, this.removeChildren()
        }, e.prototype._updateDeck_ = function (t) {
            this.shipInDeckFlag.visible = !1, t && (this.shipInDeckFlag.update(t), this.shipInDeckFlag.position.y = Math.floor(this.center - this.shipInDeckFlag.height / 2), this.shipInDeckFlag.visible = !0)
        }, e.prototype._updateTextColor_ = function (t, e) {
            var i = 5523516, n = 5523516;
            e ? (i = 13224393, n = 2466210) : t && (n = 6201187), this.defaultTextColor = i, this.stateColor = n
        }, e.prototype._updateState_ = function (t, e) {
            this.textStatus.text = "", this.textStatus.visible = !1, t ? (this.textStatus.text = "\u5165\u6e20\u4e2d", this.textStatus.visible = !0) : e && (this.textStatus.text = "\u9060\u5f81\u4e2d", this.textStatus.visible = !0)
        }, e
    }(PIXI.Container), I = function (t) {
        function e(e) {
            var i = t.call(this) || this, n = new h.TextBox(15, e), o = new h.TextBox(15, e),
                r = new h.TextBox(15, e);
            n.text = "\u5c04\u7a0b ", o.visible = !1, n.visible = !1, r.visible = !1, i.labelShatei = n, i.textShatei = o, i.textOtherSpec = r, i.addChild(n, o, r), i.defaultColor = e;
            var a = s.CreateRect.gradientLeftToRight(250, 45, .8, .9);
            return i.mask = a, i.addChild(a), i
        }

        return n(e, t), e.prototype.update = function (t) {
            this.cacheAsBitmap = !1, this.labelShatei.visible = !1, this.textShatei.visible = !1, this.textOtherSpec.visible = !1;
            var e = a.SlotUtil.genSummaryText(t, "+", "/", !1);
            this.textOtherSpec.visible = !0;
            var i = this.lengthToShatei(t.range);
            if (i == v.NONE) this.textOtherSpec.text = e, this.textOtherSpec.x = 0; else {
                this.textOtherSpec.text = "/" + e;
                var n = this.shateiToString(i), o = this.shateiToColor(i);
                this.textShatei.text = n, this.colorMouseOverShatei = this.textShatei.style.fill = o, this.labelShatei.x = 0, this.textShatei.x = this.labelShatei.x + this.labelShatei.width, this.textOtherSpec.x = this.textShatei.x + this.textShatei.width, this.labelShatei.visible = !0, this.textShatei.visible = !0
            }
            this.cacheAsBitmap = !0
        }, e.prototype.mouseover = function () {
            this.cacheAsBitmap = !1, this.textOtherSpec.style.fill = this.textShatei.style.fill = this.labelShatei.style.fill = 16777215, this.cacheAsBitmap = !0
        }, e.prototype.mouseout = function () {
            this.cacheAsBitmap = !1, this.textOtherSpec.style.fill = this.labelShatei.style.fill = this.defaultColor, this.textShatei.style.fill = this.colorMouseOverShatei, this.cacheAsBitmap = !0
        }, e.prototype.lengthToShatei = function (t) {
            switch (t) {
                case 1:
                    return v.TAN;
                case 2:
                    return v.CHU;
                case 3:
                    return v.CHO;
                case 4:
                    return v.CHOCHO
            }
            return v.NONE
        }, e.prototype.shateiToString = function (t) {
            switch (t) {
                case v.TAN:
                    return "\u77ed";
                case v.CHU:
                    return "\u4e2d";
                case v.CHO:
                    return "\u9577";
                case v.CHOCHO:
                    return "\u8d85\u9577"
            }
            throw new Error("un supported")
        }, e.prototype.shateiToColor = function (t) {
            switch (t) {
                case v.TAN:
                    return 33023;
                case v.CHU:
                    return 4246528;
                case v.CHO:
                    return 16744448;
                case v.CHOCHO:
                    return 16711680
            }
            throw new Error("un supported")
        }, e.prototype.dispose = function () {
            this.labelShatei.text = "", this.textShatei.text = "", this.textOtherSpec.text = "", this.colorMouseOverShatei = null, this.labelShatei.text = null, this.textShatei.text = null, this.textOtherSpec.text = null, this.removeChildren()
        }, e
    }(PIXI.Container), T = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            }, e._onMouseOver = function (t) {
                e.onMouseOver(t)
            }, e._onMouseOut = function (t) {
                e.onMouseOut(t)
            };
            var i = d.REMODEL_MAIN.getTexture(41), n = d.REMODEL_MAIN.getTexture(40);
            return e.interactive = e.buttonMode = !0, e.addListener(f.EventType.CLICK, e._onClick), e.addListener(f.EventType.MOUSEOVER, e._onMouseOver), e.addListener(f.EventType.MOUSEOUT, e._onMouseOut), e.textureLockOn = i, e.textureLockOff = n, e
        }

        return n(e, t), e.prototype.update = function (t) {
            this.texture = this.textureLockOff, t && (this.texture = this.textureLockOn)
        }, e.prototype.dispose = function () {
            this.texture = PIXI.Texture.EMPTY, this.removeAllListeners(f.EventType.CLICK), this.removeAllListeners(f.EventType.MOUSEOVER), this.removeAllListeners(f.EventType.MOUSEOUT), this.onClick = this._onClick = null, this._onMouseOut = null, this._onMouseOver = null, this.textureLockOff = null, this.textureLockOn = null, this.interactive = this.buttonMode = !1
        }, e
    }(PIXI.Sprite)
}