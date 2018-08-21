const function873 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(1), a = i(49), _ = i(8), u = i(115), l = i(4), c = i(20), h = i(35), p = i(86),
        d = i(874), f = i(346), y = i(348), v = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onMouseOutKenzoOff = function () {
                    i.huki1.visible = !1
                }, i._onMouseOverKenzoOff = function () {
                    i.huki1.visible = !0
                }, i._onChangeValue = function () {
                    var t = i.fuel, e = i.ammo, n = i.steel, o = i.bauxite, r = i.devKit, s = i.buildKit;
                    p.Util.BuildValidation(t, e, n, o, r, s) ? i.update(!0) : i.update(!1)
                }, i._onClickShop = function () {
                    i._cb_onGoToShop()
                }, i._onClickLarge = function () {
                    i._cb_onGoToLargeBuild()
                }, i._onClickBuild = function () {
                    i._cb_onComplete(!0)
                }, i._onClickBack = function () {
                    i._cb_onComplete(!1)
                }, i.mainView = e;
                var n = new PIXI.Sprite(c.COMMON_MAIN.getTexture(12));
                n.interactive = !0, i.addChild(n), i.configureMaterialView_fuel = new f.MaterialAmountView(31, 30, 999), i.configureMaterialView_ammo = new f.MaterialAmountView(32, 30, 999), i.configureMaterialView_steel = new f.MaterialAmountView(33, 30, 999), i.configureMaterialView_bauxite = new f.MaterialAmountView(34, 30, 999), i.highSpeedToggle = new d.HighSpeedToggle, i.btn_great_off = new u.SimpleButton(h.ARSENAL_MAIN.getTexture(18), h.ARSENAL_MAIN.getTexture(18)), i.btn_kenzo = new u.SimpleButton(h.ARSENAL_MAIN.getTexture(31), h.ARSENAL_MAIN.getTexture(33));
                var r = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(32)),
                    v = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(139)),
                    g = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(156)),
                    m = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(153)),
                    b = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(74)),
                    w = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(73));
                i.huki1 = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(66)), i.textDevKitBefore = new l.TextBox(24, 5523516), i.textDevKitAfter = new l.TextBox(24, 5523516), i.shopButton = new y.ShopButton, i.textDevKitBefore.anchor.x = 1, i.textDevKitAfter.anchor.x = 0, r.position.set(532, 486), i.btn_kenzo.position.set(532, 486), i.textDevKitBefore.position.set(591, 438), i.textDevKitAfter.position.set(619, 438), i.configureMaterialView_fuel.position.set(60, 33), i.configureMaterialView_ammo.position.set(60, 228), i.configureMaterialView_steel.position.set(402, 33), i.configureMaterialView_bauxite.position.set(402, 228), i.highSpeedToggle.position.set(207, 435), b.position.set(394, 441), w.position.set(594, 442), v.position.set(60, 426), g.position.set(424, 442), m.position.set(78, 439), i.btn_great_off.position.set(60, 492), i.huki1.position.set(84, 441), i.shopButton.position.set(473, 496), i.configureMaterialView_fuel.onChangeValue = i._onChangeValue, i.configureMaterialView_ammo.onChangeValue = i._onChangeValue, i.configureMaterialView_steel.onChangeValue = i._onChangeValue, i.configureMaterialView_bauxite.onChangeValue = i._onChangeValue, i.shopButton.onClick = i._onClickShop, i.btn_kenzo.on(s.EventType.CLICK, i._onClickBuild), i.btn_great_off.onMouseOut = i._onMouseOutKenzoOff, i.btn_great_off.onMouseOver = i._onMouseOverKenzoOff, i.huki1.visible = !1, i.shopButton.play(), i.addChild(i.configureMaterialView_fuel, i.configureMaterialView_ammo, i.configureMaterialView_steel, i.configureMaterialView_bauxite, v, r, i.btn_great_off, g, m, b, w, i.highSpeedToggle, i.textDevKitBefore, i.textDevKitAfter, i.btn_kenzo), i.btn_great = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(17)), i.btn_great.interactive = !0, i.btn_great.buttonMode = !0, i.btn_great.position.set(60, 492), i.addChild(i.btn_great), i.addChild(i.huki1, i.shopButton);
                var x = new PIXI.Sprite(c.COMMON_MAIN.getTexture(60)),
                    I = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(5));
                i.position.set(1200, 139), i.addChild(x), I.anchor.set(0, .5), I.position.set(22, Math.floor(x.height / 2 - 4)), x.addChild(I), x.position.set(0, -37), x.addChild(I);
                return i.dialogBackground = new _.AreaBox(a.UISettings.DIALOG_BG_ALPHA), i.dialogBackground.alpha = 0, i.dialogBackground.position.set(0, 103), i.dialogBackground.height = o.default.height - 103, i.mainView.addChild(i.dialogBackground), i.mainView.addChild(i), i.btn_great.on(s.EventType.CLICK, i._onClickLarge), i.dialogBackground.on(s.EventType.CLICK, i._onClickBack), i
            }

            return n(e, t), Object.defineProperty(e.prototype, "fuel", {
                get: function () {
                    return this.configureMaterialView_fuel.value
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "ammo", {
                get: function () {
                    return this.configureMaterialView_ammo.value
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "steel", {
                get: function () {
                    return this.configureMaterialView_steel.value
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "bauxite", {
                get: function () {
                    return this.configureMaterialView_bauxite.value
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "buildKit", {
                get: function () {
                    return 1 == this.highSpeedToggle.state ? 1 : 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "devKit", {
                get: function () {
                    return 1
                }, enumerable: !0, configurable: !0
            }), e.prototype.dispose = function () {
                this.btn_great.off(s.EventType.CLICK, this._onClickLarge), this.dialogBackground.off(s.EventType.CLICK, this._onClickBack), this._cb_onComplete = null, this._cb_onGoToLargeBuild = null, this._cb_onGoToShop = null, this.highSpeedToggle.dispose(), this.configureMaterialView_fuel.dispose(), this.configureMaterialView_ammo.dispose(), this.configureMaterialView_steel.dispose(), this.configureMaterialView_bauxite.dispose(), this.btn_great_off.dispose(), this.btn_kenzo.dispose(), this.shopButton.dispose(), this.configureMaterialView_fuel.onChangeValue = this._onChangeValue = null, this.configureMaterialView_ammo.onChangeValue = this._onChangeValue = null, this.configureMaterialView_steel.onChangeValue = this._onChangeValue = null, this.configureMaterialView_bauxite.onChangeValue = this._onChangeValue = null, this.shopButton.onClick = this._onClickShop = null, this.btn_kenzo.onClick = this._onClickBuild = null, this.highSpeedToggle = null, this.configureMaterialView_fuel = null, this.configureMaterialView_ammo = null, this.configureMaterialView_steel = null, this.configureMaterialView_bauxite = null, this.textDevKitBefore = null, this.textDevKitAfter = null, this.btn_great = null, this.btn_kenzo = null, this.shopButton = null, this.btn_great_off.onClick = this.btn_great_off.onMouseOut = this.btn_great_off.onMouseOver = null, this.btn_great_off = null, this.huki1 = null, this.removeChildren(), this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this), this.dialogBackground = null
            }, e.prototype.play = function (t, e, i, n, o, s, a) {
                var _ = this;
                this._cb_onComplete = o, this._cb_onGoToLargeBuild = s, this._cb_onGoToShop = a;
                var u = r.default.model.useItem.get(31).count, l = r.default.model.useItem.get(32).count,
                    c = r.default.model.useItem.get(33).count, h = r.default.model.useItem.get(34).count,
                    d = r.default.model.useItem.get(3).count, f = r.default.model.useItem.get(2).count,
                    y = p.Util.BuildValidation(e.fuel, e.ammo, e.steel, e.baux, 1, e.buildKit), v = 0 < f;
                if (this.configureMaterialView_fuel.setAvail(u), this.configureMaterialView_ammo.setAvail(l), this.configureMaterialView_steel.setAvail(c), this.configureMaterialView_bauxite.setAvail(h), this.textDevKitBefore.text = d.toString(), this.textDevKitAfter.style.fill = 12467003, this.textDevKitAfter.text = "0", 0 <= d - 1 && (this.textDevKitAfter.style.fill = 5523516, this.textDevKitAfter.text = (d - 1).toString()), this.btn_great_off.visible = !1, this.btn_great.visible = !1, n ? this.btn_great.visible = !0 : this.btn_great_off.visible = !0, this.configureMaterialView_fuel.updateValue(e.fuel), this.configureMaterialView_ammo.updateValue(e.ammo), this.configureMaterialView_steel.updateValue(e.steel), this.configureMaterialView_bauxite.updateValue(e.baux), this.highSpeedToggle.changeToggleState(0 < f), this.highSpeedToggle.update(v), 0 == v && this.highSpeedToggle.changeToggleState(!1), this.update(y), i) {
                    r.default.view.clickGuard = !0;
                    var g = { progress: 0 }, m = createjs.Tween.get(g).to({ progress: 1 }, 200).call(function () {
                        _.x = 412, m.removeAllEventListeners("change"), _.dialogBackground.width = 444, r.default.view.clickGuard = !1
                    });
                    m.addEventListener("change", function () {
                        _.x = 1200 - 788 * g.progress, _.dialogBackground.alpha = g.progress
                    }), m.play(null)
                } else this.x = 412;
                this.kDockId = t
            }, e.prototype.hide = function (t) {
                var e = this;
                this.dialogBackground.width = o.default.width;
                var i = { progress: 0 }, n = createjs.Tween.get(i);
                n.to({ progress: 1 }, 200).call(function () {
                    e.x = 1200, n.removeAllEventListeners("change"), createjs.Tween.removeTweens(n.target), t()
                }), n.addEventListener("change", function () {
                    e.x = 412 + 788 * i.progress, e.dialogBackground.alpha = 1 - i.progress
                }), n.play(null)
            }, e.prototype.update = function (t) {
                this.btn_kenzo.visible = !!t
            }, e
        }(PIXI.Container);
    e.MaterialAmountContainerShip = v
}