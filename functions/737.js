const function737 = function (t, e, i) {
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
    var o = i(1),
        r = i(110),
        s = i(326),
        a = i(32),
        _ = i(83),
        l = i(4),
        u = i(21),
        c = i(9),
        h = i(57),
        p = i(313),
        d = i(15),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._positionType = 0, e.onMouseOver = function () {
                    e.changeButton.texture = u.COMMON_MAIN.getTexture(11)
                }, e.onMouseOut = function () {
                    e.changeButton.texture = u.COMMON_MAIN.getTexture(10)
                }, e.onClickChange = function () {
                    e.onClick()
                };
                var i = new PIXI.Sprite(u.COMMON_MAIN.getTexture(12)),
                    n = new PIXI.Sprite(u.COMMON_MAIN.getTexture(64)),
                    f = h.ORGANIZE_MAIN.getTexture(0),
                    y = new PIXI.Sprite(f),
                    m = new PIXI.Sprite(c.COMMON_MISC.getTexture(182));
                m.name = "img_lv";
                var v = new PIXI.Sprite(u.COMMON_MAIN.getTexture(23));
                v.name = "img_houg";
                var g = new PIXI.Sprite(u.COMMON_MAIN.getTexture(24));
                g.name = "img_raig";
                var b = new PIXI.Sprite(c.COMMON_MISC.getTexture(86));
                b.name = "img_fuel";
                var w = new PIXI.Sprite(c.COMMON_MISC.getTexture(87));
                w.name = "img_ammo";
                var x = new PIXI.Sprite(u.COMMON_MAIN.getTexture(22));
                x.name = "img_souk";
                var I = new PIXI.Sprite(u.COMMON_MAIN.getTexture(25));
                I.name = "img_taik", e.shipBanner = new a.ShipBanner, e.shipBanner.name = "ship", e.starRateView = new _.StarRateView, e.starRateView.name = "rate", e.textLevel = new l.TextBox(30, 5523516), e.textLevel.name = "lv", e.textHp = new l.TextBox(16, 5523516), e.textHp.name = "hp", e.hpGaugeView = new r.HpGaugeView, e.hpGaugeView.name = "gauge";
                e.textHoug = new l.TextBox(23, 5523516), e.textHoug.name = "txt_houg", e.textRaig = new l.TextBox(23, 5523516), e.textRaig.name = "txt_raig", e.textTaiku = new l.TextBox(23, 5523516), e.textTaiku.name = "txt_taiku", e.textSoukou = new l.TextBox(23, 5523516), e.textSoukou.name = "txt_souku", e.fuelMeterView = new s.MaterialMeterView, e.fuelMeterView.name = "fuel", e.ammoMeterView = new s.MaterialMeterView, e.ammoMeterView.name = "ammo", e.slotItemSlotContainer = new p.SlotItemSlotContainer(5, !0), e.slotItemSlotContainer.name = "slot", e.changeButton = new PIXI.Sprite, e.changeButton.on(o.EventType.MOUSEOVER, e.onMouseOver), e.changeButton.on(o.EventType.MOUSEOUT, e.onMouseOut), e.changeButton.on(o.EventType.CLICK, e.onClickChange), y.position.set(22, 10), e.changeButton.position.set(70, 501), e.textHoug.anchor.x = 1, e.textRaig.anchor.x = 1, e.textTaiku.anchor.x = 1, e.textSoukou.anchor.x = 1, n.position.set(0, -34), i.interactive = !0, e.textName = new l.TextBox(27, 5523516), e.textName.name = "txt_name", e.containerName = new PIXI.Container, e.containerName.name = "name";
                var T = d.CreateRect.gradientLeftToRight(180, 42, .5, .98);
                return e.containerName.mask = T, e.containerName.addChild(e.textName, T), n.addChild(y), e.addChild(i, e.starRateView, e.containerName, m, e.textLevel, v, e.textHoug, g, e.textRaig, I, e.textTaiku, x, e.textSoukou, b, e.fuelMeterView, w, e.ammoMeterView, e.hpGaugeView, e.slotItemSlotContainer, e.textHp, e.shipBanner, e.changeButton, n), e._defaultPosition(), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.containerName.cacheAsBitmap = !1, this.containerName.mask = null, this.containerName.removeChildren(), this.fuelMeterView.dispose(), this.ammoMeterView.dispose(), this.hpGaugeView.dispose(), this.shipBanner.dispose(), this.starRateView.dispose(), this.slotItemSlotContainer.dispose(), this.changeButton.off(o.EventType.MOUSEOVER), this.changeButton.off(o.EventType.MOUSEOUT), this.changeButton.off(o.EventType.CLICK), this.textHp.destroy(), this.textLevel.destroy(), this.textHoug.destroy(), this.textRaig.destroy(), this.textTaiku.destroy(), this.textSoukou.destroy(), this.textName.destroy(), this.onClick = null, this.containerName = null, this.fuelMeterView = null, this.ammoMeterView = null, this.hpGaugeView = null, this.shipBanner = null, this.starRateView = null, this.slotItemSlotContainer = null, this.changeButton = null, this.textHp = null, this.textLevel = null, this.textHoug = null, this.textRaig = null, this.textTaiku = null, this.textSoukou = null, this.textName = null, this._positionType = null
            }, e.prototype.updateChangable = function (t) {
                t ? (this.changeButton.texture = u.COMMON_MAIN.getTexture(10), this.changeButton.interactive = !0, this.changeButton.buttonMode = !0) : (this.changeButton.texture = u.COMMON_MAIN.getTexture(9), this.changeButton.interactive = !1, this.changeButton.buttonMode = !1)
            }, e.prototype.updateMaterial = function (t, e, i, n) {
                this.fuelMeterView.update(t, e), this.ammoMeterView.update(i, n)
            }, e.prototype.updateParams = function (t, e, i, n) {
                this.textHoug.text = t.toString(), this.textRaig.text = e.toString(), this.textTaiku.text = i.toString(), this.textSoukou.text = n.toString()
            }, e.prototype.updateShip = function (t, e, i, n, o, r, s, a) {
                this.containerName.cacheAsBitmap = !1, this.textName.text = i, this.textLevel.text = n.toString(), this.starRateView.update(o), this.textHp.text = r + "/" + s, this.hpGaugeView.update(r, s), this.containerName.cacheAsBitmap = !0
            }, e.prototype.updateBanner = function (t, e) {
                this.shipBanner.update(t, e), this.shipBanner.updatePlate(t.label)
            }, e.prototype.updateSlots = function (t, e) {
                this.slotItemSlotContainer.update(t, e, !1)
            }, e.prototype.updatePosition = function (t) {
                var e = 5 === t ? 1 : 0;
                if (this._positionType !== e) {
                    switch (e) {
                        case 0:
                            this._defaultPosition();
                            break;
                        case 1:
                            this._fiveSlotPosition()
                    }
                    this._positionType = e
                }
            }, e.prototype._defaultPosition = function () {
                this.getChildByName("rate").position.set(210, 69);
                var t = this.getChildByName("lv");
                t.style.fontSize = 30, t.position.set(240, 24), this.getChildByName("hp").position.set(137, 69), this.getChildByName("gauge").position.set(33, 75), this.getChildByName("ship").position.set(35, 100), this.getChildByName("img_lv").position.set(210, 33), this.getChildByName("slot").position.set(16, 172);
                var e = this.getChildByName("txt_houg");
                e.style.fontSize = 23, e.position.set(153, 358);
                var i = this.getChildByName("txt_raig");
                i.style.fontSize = 23, i.position.set(153, 393);
                var n = this.getChildByName("txt_taiku");
                n.style.fontSize = 23, n.position.set(153, 430);
                var o = this.getChildByName("txt_souku");
                o.style.fontSize = 23, o.position.set(153, 465);
                this.getChildByName("img_houg").position.set(30, 360), this.getChildByName("img_raig").position.set(30, 396), this.getChildByName("img_taik").position.set(30, 432), this.getChildByName("img_souk").position.set(30, 468), this.getChildByName("img_fuel").position.set(210, 373), this.getChildByName("fuel").position.set(210, 373), this.getChildByName("img_ammo").position.set(210, 448), this.getChildByName("ammo").position.set(210, 448), this.getChildByName("name").position.set(32, 31)
            }, e.prototype._fiveSlotPosition = function () {
                this.getChildByName("rate").position.set(210, 46);
                var t = this.getChildByName("lv");
                t.style.fontSize = 25, t.position.set(260, 13), this.getChildByName("hp").position.set(137, 43), this.getChildByName("gauge").position.set(33, 49), this.getChildByName("ship").position.set(35, 68), this.getChildByName("img_lv").position.set(232, 18), this.getChildByName("slot").position.set(16, 135);
                var e = this.getChildByName("txt_houg");
                e.style.fontSize = 18, e.position.set(163, 377);
                var i = this.getChildByName("txt_raig");
                i.style.fontSize = 18, i.position.set(163, 407);
                var n = this.getChildByName("txt_taiku");
                n.style.fontSize = 18, n.position.set(163, 438);
                var o = this.getChildByName("txt_souku");
                o.style.fontSize = 18, o.position.set(163, 469);
                this.getChildByName("img_houg").position.set(40, 375), this.getChildByName("img_raig").position.set(40, 406), this.getChildByName("img_taik").position.set(40, 436), this.getChildByName("img_souk").position.set(40, 468), this.getChildByName("img_fuel").position.set(200, 373), this.getChildByName("fuel").position.set(200, 373), this.getChildByName("img_ammo").position.set(200, 448), this.getChildByName("ammo").position.set(200, 448), this.getChildByName("name").position.set(32, 12)
            }, e
        }(PIXI.Container);
    e.ShipChangeConfirm = f
}