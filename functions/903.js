const function903 = function (t, e, i) {
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
        s = i(160),
        a = i(123),
        _ = i(131),
        l = i(212),
        u = i(4),
        c = i(6),
        h = i(21),
        p = i(35),
        d = i(88),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.ITEM_NUM = 10, e._onClick = function (t, i) {
                    e.onClickShip(t, i)
                };
                var i = new PIXI.Sprite(h.COMMON_MAIN.getTexture(12));
                i.interactive = !0, e.addChild(i);
                var n = new PIXI.Sprite(h.COMMON_MAIN.getTexture(39));
                e.listItems = new Array, n.position.set(45, 12), e.addChild(n);
                for (var o = 0; o < e.ITEM_NUM; o++) {
                    var r = new y,
                        s = new PIXI.Sprite(h.COMMON_MAIN.getTexture(37));
                    r.onClick = e._onClick, s.position.set(48, 46 * o + 46 + 43), r.position.set(0, 46 * o + 46), e.addChild(s, r), e.listItems.push(r)
                }
                return e
            }
            return n(e, t), e.prototype.dispose = function () {
                for (var t = 0; t < this.listItems.length; t++) this.listItems[t].dispose(), this.listItems[t] = null;
                this.listItems = null, this._onClick = this.onClickShip = null, this.removeChildren()
            }, e.prototype.update = function (t) {
                for (var e = 0; e < this.listItems.length; e++) {
                    var i = this.listItems[e];
                    if (i.visible = !1, e < t.length) {
                        var n = t[e],
                            r = o.default.model.deck.isInDeck(n.memID),
                            s = 0 == d.Util.ShipDisassemblyValidation(n.memID) ? 1 : 2;
                        i.update(n.memID, n.shipTypeName, n.name, n.level, n.hpMax, n.karyoku, n.raisou, n.taiku, n.speed, n.isLocked(), n.hasLockedSlotitem(), r, s, e), i.visible = !0
                    }
                }
            }, e.prototype.toggleCheckBox = function (t) {
                this.listItems[t].toggleCheckBox()
            }, e
        }(PIXI.Container);
    e.ShipDisassemblyChoice = f;
    var y = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick(e.memShipId, e.arrayIndex)
            }, e._onMouseOver = function () {
                e.containerShipTypeAndName.cacheAsBitmap = !1, e.background.visible = !0, e.textShipType.style.fill = e.textName.style.fill = e.textLevel.style.fill = e.textTaikyu.style.fill = e.textKaryoku.style.fill = e.textRaiso.style.fill = e.textTaiku.style.fill = 16777215, e.containerShipTypeAndName.cacheAsBitmap = !0
            }, e._onMouseOut = function () {
                e.containerShipTypeAndName.cacheAsBitmap = !1, e.background.visible = !1, e.textLevel.style.fill = e.mouseoutColor, e.textShipType.style.fill = e.textName.style.fill = e.textTaikyu.style.fill = e.textKaryoku.style.fill = e.textRaiso.style.fill = e.textTaiku.style.fill = 5523516, e.containerShipTypeAndName.cacheAsBitmap = !0
            };
            e.shipInDeckFlag = new _.ShipInDeckFlag, e.textShipType = new u.TextBox(18, 5523516), e.textName = new u.TextBox(20, 5523516), e.textLevel = new u.TextBox(22, 5523516), e.textTaikyu = new u.TextBox(18, 5523516), e.textKaryoku = new u.TextBox(18, 5523516), e.textRaiso = new u.TextBox(18, 5523516), e.textTaiku = new u.TextBox(18, 5523516), e.iconLockedShip = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(88)), e.iconLockedItem = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(80)), e.shipSpeedImage = new l.ShipSpeedImage, e.background = new PIXI.Sprite(h.COMMON_MAIN.getTexture(17)), e.clickArea = new PIXI.Graphics, e.containerShipTypeAndName = new PIXI.Container, e.iconCheckState = new PIXI.Sprite;
            var i = Math.floor(22.5) + 1,
                n = a.CreateRect.gradientLeftToRight(240, 45, .85, .9);
            return e.shipInDeckFlag.scale.set(.8, .8), e.clickArea.beginFill(0, 0), e.clickArea.drawRect(0, 0, 645, 45), e.clickArea.endFill(), e.clickArea.on(r.EventType.CLICK, e._onClick), e.clickArea.on(r.EventType.MOUSEOVER, e._onMouseOver), e.clickArea.on(r.EventType.MOUSEOUT, e._onMouseOut), e.clickArea.interactive = e.clickArea.buttonMode = !0, e.background.visible = !1, e.iconCheckState.position.set(12, 12), e.containerShipTypeAndName.position.set(79, 0), e.textShipType.anchor.set(0, 0), e.textShipType.position.set(0, Math.floor(i - e.textShipType.height / 2)), e.textName.anchor.set(0, 0), e.textName.position.set(90, Math.floor(i - e.textName.height / 2) + 0), e.textLevel.position.set(336, Math.floor(i - e.textLevel.height / 2)), e.textTaikyu.position.set(393, Math.floor(i - e.textTaikyu.height / 2)), e.textKaryoku.position.set(439, Math.floor(i - e.textKaryoku.height / 2)), e.textRaiso.position.set(486, Math.floor(i - e.textRaiso.height / 2)), e.textTaiku.position.set(531, Math.floor(i - e.textTaiku.height / 2)), e.shipSpeedImage.position.set(540, i), e.iconLockedShip.position.set(591, Math.floor(i - e.iconLockedShip.height / 2)), e.iconLockedItem.position.set(591, Math.floor(i - e.iconLockedItem.height / 2)), e.shipInDeckFlag.position.set(47, i), e.background.position.set(75, 0), e.background.scale.x = 1.05, e.textLevel.anchor.set(1, 0), e.textTaikyu.anchor.set(1, 0), e.textKaryoku.anchor.set(1, 0), e.textRaiso.anchor.set(1, 0), e.textTaiku.anchor.set(1, 0), e.shipSpeedImage.anchor.set(0, .5), e.iconLockedShip.anchor.set(0, 0), e.iconLockedItem.anchor.set(0, 0), e.shipInDeckFlag.anchor.set(0, .5), e.containerShipTypeAndName.mask = n, e.containerShipTypeAndName.addChild(e.textShipType, e.textName), e.addChild(e.background, e.iconCheckState, e.shipInDeckFlag, e.textLevel, e.containerShipTypeAndName, e.textLevel, e.textTaikyu, e.textKaryoku, e.textRaiso, e.textTaiku, e.iconLockedShip, e.iconLockedItem, e.shipSpeedImage, e.clickArea), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.shipInDeckFlag.dispose(), this.containerShipTypeAndName.cacheAsBitmap = !1, this.containerShipTypeAndName.mask = null, this.containerShipTypeAndName.removeChildren(), this.shipSpeedImage.dispose(), this.clickArea.off(r.EventType.CLICK), this.clickArea.off(r.EventType.MOUSEOUT), this.clickArea.off(r.EventType.MOUSEOVER), this.clickArea.clear(), this.textShipType.destroy(), this.textName.destroy(), this.textLevel.destroy(), this.textTaikyu.destroy(), this.textKaryoku.destroy(), this.textRaiso.destroy(), this.textTaiku.destroy(), this.onClick = null, this.shipInDeckFlag = null, this.containerShipTypeAndName = null, this.iconLockedShip = null, this.iconLockedItem = null, this.shipSpeedImage = null, this.background = null, this.clickArea = null, this.textShipType = null, this.textName = null, this.textLevel = null, this.textTaikyu = null, this.textKaryoku = null, this.textRaiso = null, this.textTaiku = null, this.mouseoutColor = null, this.iconCheckState = null, this.checkState = null, this.arrayIndex = null
        }, e.prototype.update = function (t, e, i, n, o, r, a, _, l, u, c, h, d, f) {
            switch (void 0 === h && (h = null), this.arrayIndex = f, this.containerShipTypeAndName.cacheAsBitmap = !1, this.memShipId = t, this.textShipType.text = e + " ", this.textName.text = i, this.textLevel.text = n.toString(), this.textTaikyu.text = o.toString(), this.textKaryoku.text = r.toString(), this.textRaiso.text = a.toString(), this.textTaiku.text = _.toString(), this.shipSpeedImage.update(l), this.textName.position.x = this.textShipType.position.x + this.textShipType.width, this.iconLockedShip.visible = !1, this.iconLockedItem.visible = !1, u ? this.iconLockedShip.visible = !0 : c && (this.iconLockedItem.visible = !0), d) {
                case 1:
                    this.iconCheckState.texture = p.ARSENAL_MAIN.getTexture(12);
                    break;
                case 2:
                    this.iconCheckState.texture = p.ARSENAL_MAIN.getTexture(13);
                    break;
                case 3:
                    this.iconCheckState.texture = p.ARSENAL_MAIN.getTexture(14)
            }
            this.checkState = d, this.textLevel.style.fill = this.mouseoutColor = s.ColorUtil.getLevelColor(n), this.shipInDeckFlag.visible = !1, h && (this.shipInDeckFlag.update(h), this.shipInDeckFlag.visible = !0), this.containerShipTypeAndName.cacheAsBitmap = !0
        }, e.prototype.toggleCheckBox = function () {
            switch (c.SE.play("239"), this.checkState) {
                case 2:
                    this.checkState = 3, this.iconCheckState.texture = p.ARSENAL_MAIN.getTexture(14);
                    break;
                case 3:
                    this.checkState = 2, this.iconCheckState.texture = p.ARSENAL_MAIN.getTexture(13)
            }
        }, e
    }(PIXI.Container)
}