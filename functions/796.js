const function796 = function (t, e, i) {
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
        r = i(145),
        s = i(45),
        a = i(161),
        _ = i(61),
        l = i(87),
        u = i(162),
        c = i(4),
        h = i(21),
        p = i(71),
        d = i(1),
        f = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.center = 23, i._onClick = function () {
                    i.onClick(i.index, i.memSlotItemId)
                }, i._onClickLock = function () {
                    i.onClickLock(i.index, i.memSlotItemId)
                }, i._onMouseOver = function (t) {
                    t.target != i.clickArea && t.target != i.lockIcon || i.mouseover()
                }, i._onMouseOut = function (t) {
                    t.target != i.clickArea && t.target != i.lockIcon && i.mouseout()
                }, i.index = e, i.iconWeapon = new _.IconWeapon, i.focus = new PIXI.Sprite(h.COMMON_MAIN.getTexture(17)), i.textRare = new c.TextBox(15, 5523516), i.itemSummary = new v(5523516), i.itemSummary.position.set(395, 0), i.shipSummary = new g, i.shipSummary.position.set(306, 0), i.maskName = new PIXI.Sprite(h.COMMON_MAIN.getTexture(38)), i.maskName.position.x = 172, i.slotItemLevel = new u.SlotItemLevel, i.airPlaneLevel = new a.AirPlaneLevel, i.airPlaneLevel.position.set(232, 3), i.slotItemLevel.position.set(260, 13), i.clickArea = new PIXI.Graphics, i.clickArea.beginFill(0, 0), i.clickArea.drawRect(0, 0, i.focus.width + 180, i.focus.height), i.clickArea.endFill(), i.clickArea.on(d.EventType.CLICK, i._onClick), i.clickArea.on(d.EventType.MOUSEOVER, i._onMouseOver), i.clickArea.on(d.EventType.MOUSEOUT, i._onMouseOut), i.clickArea.renderable = !1, i.clickArea.interactive = i.clickArea.buttonMode = !0;
                var n = new PIXI.Graphics;
                n.beginFill(0, 0), n.drawRect(0, 0, 245, 45), n.endFill(), i.textName = new c.TextBox(21, 5523516);
                var o = Math.floor(i.center - i.textName.height / 2);
                return i.containerName = new PIXI.Container, i.containerName.mask = n, i.containerName.position.set(42, o), i.containerName.addChild(i.textName, n), i.lockIcon = new b, i.lockIcon.onClick = i._onClickLock, i.lockIcon.onMouseOut = i._onMouseOut, i.lockIcon.onMouseOver = i._onMouseOver, i.lockIcon.position.x = 603, i.focus.width += 135, i.focus.position.x = 36, i.focus.alpha = 0, i.iconWeapon.position.x = -6, i.overArea = new PIXI.Graphics, i.overArea.beginFill(0, .4), i.overArea.drawRect(0, 0, i.focus.width + 180, i.focus.height), i.overArea.endFill(), i.overArea.x = -25, i.overArea.visible = !1, i.addChild(i.clickArea, i.focus, i.iconWeapon, i.containerName, i.maskName, i.textRare, i.itemSummary, i.shipSummary, i.slotItemLevel, i.airPlaneLevel, i.overArea, i.lockIcon), i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.iconWeapon.dispose(), this.itemSummary.dispose(), this.shipSummary.dispose(), this.slotItemLevel.dispose(), this.airPlaneLevel.dispose(), this.lockIcon.dispose(), this.clickArea.clear(), this.clickArea.off(d.EventType.CLICK), this.clickArea.off(d.EventType.MOUSEOVER), this.clickArea.off(d.EventType.MOUSEOUT), this.containerName.cacheAsBitmap = !1, this.containerName.mask = null, this.containerName.removeChildren(), this.textRare.destroy(), this.textName.destroy(), this.onClick = null, this.onClickLock = null, this.index = null, this.locked = null, this.memSlotItemId = null, this.itemType = null, this.iconWeapon = null, this.itemSummary = null, this.shipSummary = null, this.textName = null, this.textRare = null, this.lockIcon = null, this.focus = null, this.clickArea = null, this.slotItemLevel = null, this.airPlaneLevel = null, this.maskName = null, this.containerName = null
            }, e.prototype.update = function (t, e, i, n, r, s) {
                this.itemType = e ? 1 : r ? 2 : 0;
                var a = o.default.model.slot.getMst(t.mstID).rarity,
                    _ = 2 == this.itemType ? 10263708 : 5523516;
                switch (this.iconWeapon.update(t.iconType), this._updateSkillLevel_(t.skillLevel), this._updateLevel_(t.level), this.containerName.cacheAsBitmap = !1, this.textRare.style.fill = _, this.textName.style.fill = _, this.textName.text = t.name, this.containerName.cacheAsBitmap = !0, this.locked = t.isLocked(), this._updateLock_(), this.itemType) {
                    case 0:
                        this.textRare.visible = !0, this.itemSummary.visible = !0, this.lockIcon.visible = !0, this.shipSummary.visible = !1, this._updateTextRare_(a), this._updateItemSummary_(t, _);
                        break;
                    case 1:
                        this.shipSummary.visible = !0, this.textRare.visible = !1, this.itemSummary.visible = !1, this.lockIcon.visible = !1;
                        var l = e.isRepair();
                        this._updateInteractive_(n), this._updateShipSummary_(e.name, e.level, i, n, l);
                        break;
                    case 2:
                        this.textRare.visible = !0, this.itemSummary.visible = !0, this.lockIcon.visible = !0, this.shipSummary.visible = !1, this._updateTextRare_(a), this._updateItemSummary_(t, _)
                }
                this.unset = s, s ? (this.overArea.visible = !0, this.focus.visible = !1, this.clickArea.interactive = !1) : (this.overArea.visible = !1, this.focus.visible = !0, n || (this.clickArea.interactive = !0)), this.memSlotItemId = t.memID, this.mouseout()
            }, e.prototype._updateItemSummary_ = function (t, e) {
                this.itemSummary.update(t, e)
            }, e.prototype._updateShipSummary_ = function (t, e, i, n, o) {
                this.shipSummary.update(t, e, i, n, o)
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
            }, e.prototype._updateLock_ = function () {
                this.lockIcon.alpha = this.locked ? 1 : 0, this.lockIcon.update(this.locked)
            }, e.prototype._updateInteractive_ = function (t) {
                this.clickArea.interactive = !t
            }, e.prototype.mouseover = function () {
                if (this.focus.alpha = 1, this.lockIcon.alpha = 1, !this.unset) {
                    switch (this.containerName.cacheAsBitmap = !1, this.maskName.texture = h.COMMON_MAIN.getTexture(16), this.itemType) {
                        case 0:
                            this.textRare.style.fill = this.textName.style.fill = 16777215, this.itemSummary.mouseover();
                            break;
                        case 1:
                            this.textName.style.fill = 16774898, this.shipSummary.mouseover();
                            break;
                        case 2:
                            this.textName.style.fill = this.textRare.style.fill = 16774898, this.itemSummary.mouseover()
                    }
                    this.containerName.cacheAsBitmap = !0
                }
            }, e.prototype.mouseout = function () {
                if (this.focus.alpha = 0, this._updateLock_(), !this.unset) {
                    switch (this.containerName.cacheAsBitmap = !1, this.maskName.texture = h.COMMON_MAIN.getTexture(38), this.itemType) {
                        case 0:
                            this.textName.style.fill = this.textRare.style.fill = 5523516, this.itemSummary.mouseout();
                            break;
                        case 1:
                            this.textName.style.fill = 5523516, this.shipSummary.mouseout();
                            break;
                        case 2:
                            this.textName.style.fill = this.textRare.style.fill = 10263708, this.itemSummary.mouseout()
                    }
                    this.containerName.cacheAsBitmap = !0
                }
            }, e
        }(PIXI.Container);
    e.ListItem = f;
    var y;
    ! function (t) {
        t[t.NONE = 0] = "NONE", t[t.TAN = 1] = "TAN", t[t.CHU = 2] = "CHU", t[t.CHO = 3] = "CHO", t[t.CHOCHO = 4] = "CHOCHO"
    }(y || (y = {}));
    var m = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.center = 22, e.textName = new c.TextBox(21, 5523516), e.textLevel = new c.TextBox(18, 5523516), e.textName.position.y = e.center - Math.floor(e.textName.height / 2), e.textLevel.position.y = e.textName.position.y + (e.textName.height - e.textLevel.height), e.addChild(e.textName, e.textLevel), e
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
                this.removeChildren(), this.textName.destroy(), this.textLevel.destroy(), this.cacheAsBitmap = !1, this.textName = null, this.textLevel = null
            }, e
        }(PIXI.Container),
        g = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.center = 23, e.shipInDeckFlag = new l.ShipInDeckFlag, e.textStatus = new c.TextBox(18, 5523516), e.textNameAndLevel = new m, e.maskName = new PIXI.Sprite(h.COMMON_MAIN.getTexture(38)), e.maskName.position.x = 80;
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
                this.removeChildren(), this.textNameAndLevel.removeChildren(), this.shipInDeckFlag.dispose(), this.textNameAndLevel.dispose(), this.textStatus.destroy(), this.repair = null, this.expedition = null, this.defaultTextColor = null, this.stateColor = null, this.textStatus = null, this.shipInDeckFlag = null, this.textNameAndLevel = null, this.maskName = null
            }, e.prototype._updateDeck_ = function (t) {
                this.shipInDeckFlag.visible = !1, t && (this.shipInDeckFlag.update(t), this.shipInDeckFlag.position.y = Math.floor(this.center - this.shipInDeckFlag.height / 2), this.shipInDeckFlag.visible = !0)
            }, e.prototype._updateTextColor_ = function (t, e) {
                var i = 5523516,
                    n = 5523516;
                e ? (i = 13224393, n = 2466210) : t && (n = 6201187), this.defaultTextColor = i, this.stateColor = n
            }, e.prototype._updateState_ = function (t, e) {
                this.textStatus.text = "", this.textStatus.visible = !1, t ? (this.textStatus.text = "\u5165\u6e20\u4e2d", this.textStatus.visible = !0) : e && (this.textStatus.text = "\u9060\u5f81\u4e2d", this.textStatus.visible = !0)
            }, e
        }(PIXI.Container),
        v = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i.defaultColor = e, i.labelShatei = new c.TextBox(15, e), i.textShatei = new c.TextBox(15, e), i.textOtherSpec = new c.TextBox(15, e), i.paraLayer = new PIXI.Container;
                var n = new PIXI.Graphics;
                return n.beginFill(0, 0), n.drawRect(0, 0, 245, 45), n.endFill(), i.paraLayer.mask = n, i.labelShatei.text = "\u5c04\u7a0b ", i.textShatei.visible = !1, i.labelShatei.visible = !1, i.textOtherSpec.visible = !1, i.paraLayer.addChild(i.labelShatei, i.textShatei, i.textOtherSpec), i.maskPara = new PIXI.Sprite(h.COMMON_MAIN.getTexture(38)), i.maskPara.position.x = 160, i.paraLayer.position.y = Math.floor(i.maskPara.height / 2 - i.labelShatei.height / 2), i.addChild(i.paraLayer, i.maskPara), i
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.paraLayer.cacheAsBitmap = !1, this.paraLayer.mask = null, this.paraLayer.removeChildren(), this.labelShatei.destroy(), this.textShatei.destroy(), this.textOtherSpec.destroy(), this.colorMouseOverShatei = null, this.defaultColor = null, this.labelShatei = null, this.textShatei = null, this.textOtherSpec = null, this.maskPara = null, this.paraLayer = null
            }, e.prototype.update = function (t, e) {
                this.paraLayer.cacheAsBitmap = !1, this.labelShatei.visible = !1, this.textShatei.visible = !1, this.labelShatei.style.fill = e, this.textShatei.style.fill = e, this.textOtherSpec.style.fill = e, this.defaultColor = e, this.textOtherSpec.visible = !1;
                var i = s.SlotUtil.genSummaryText(t, "+", "/", !1);
                this.textOtherSpec.visible = !0;
                var n = this.lengthToShatei(t.range);
                if (n == y.NONE) this.textOtherSpec.text = i, this.textOtherSpec.x = 0;
                else {
                    this.textOtherSpec.text = "/" + i;
                    var o = this.shateiToString(n),
                        r = this.shateiToColor(n);
                    this.textShatei.text = o, this.colorMouseOverShatei = this.textShatei.style.fill = r, this.labelShatei.x = 0, this.textShatei.x = this.labelShatei.x + this.labelShatei.width, this.textOtherSpec.x = this.textShatei.x + this.textShatei.width, this.labelShatei.visible = !0, this.textShatei.visible = !0
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
        }(PIXI.Container),
        b = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onClick = function () {
                    e.onClick()
                }, e._onMouseOver = function (t) {
                    e.onMouseOver(t)
                }, e._onMouseOut = function (t) {
                    e.onMouseOut(t)
                }, e.textureLockOn = p.REMODEL_MAIN.getTexture(41), e.textureLockOff = p.REMODEL_MAIN.getTexture(40), e.interactive = e.buttonMode = !0, e.on(d.EventType.CLICK, e._onClick), e.on(d.EventType.MOUSEOVER, e._onMouseOver), e.on(d.EventType.MOUSEOUT, e._onMouseOut), e
            }
            return n(e, t), e.prototype.update = function (t) {
                this.texture = this.textureLockOff, t && (this.texture = this.textureLockOn)
            }, e.prototype.dispose = function () {
                this.off(d.EventType.CLICK), this.off(d.EventType.MOUSEOVER), this.off(d.EventType.MOUSEOUT), this.onClick = null, this.textureLockOff = null, this.textureLockOn = null
            }, e
        }(PIXI.Sprite)
}