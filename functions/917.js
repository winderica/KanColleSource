const function917 = function (t, e, i) {
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
    var o, r = i(5),
        s = i(0),
        a = i(1),
        _ = i(49),
        l = i(8),
        u = i(116),
        c = i(4),
        h = i(21),
        p = i(35),
        d = i(90),
        f = i(345),
        y = i(347),
        m = i(918);
    ! function (t) {
        t[t.CANCEL = 0] = "CANCEL", t[t.DEVELOP = 1] = "DEVELOP", t[t.MULTIPLE_DEV = 2] = "MULTIPLE_DEV", t[t.GOTO_STORE = 3] = "GOTO_STORE"
    }(o = e.Result || (e.Result = {}));
    var g = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i.animation = {
                progress: 0
            }, i._onChangeValue = function () {
                var t = i.fuel,
                    e = i.ammo,
                    n = i.steel,
                    o = i.bauxite,
                    r = i.devKit,
                    s = i.multipleDevToggle.state,
                    a = d.Util.DevelopValidation(t, e, n, o, r, s);
                i.update(a)
            }, i._onClickToggleCB = function () {
                i._onChangeValue();
                var t = i.multipleDevToggle.state;
                i.configureMaterialView_fuel.multiple = t, i.configureMaterialView_ammo.multiple = t, i.configureMaterialView_steel.multiple = t, i.configureMaterialView_bauxite.multiple = t, i.config(i.fuel, i.ammo, i.steel, i.bauxite, i.devKit);
                var e = s.default.model.useItem.get(3).count,
                    n = 1 == t ? 3 : 1;
                0 <= e - n ? (i.textDevKitAfter.style.fill = 5523516, i.textDevKitAfter.text = (e - n).toString()) : (i.textDevKitAfter.style.fill = 12467003, i.textDevKitAfter.text = "0")
            }, i._onClickShop = function () {
                i.onComplete(o.GOTO_STORE)
            }, i._onClickBuild = function () {
                var t = 1 == i.multipleDevToggle.state ? o.MULTIPLE_DEV : o.DEVELOP;
                i.onComplete(t)
            }, i._onClickBackground = function () {
                i.onComplete(o.CANCEL)
            }, i.mainView = e;
            i.multipleDevToggle = new m.MultipleDevelopToggle, i.configureMaterialView_fuel = new f.MaterialAmountView(31, 10, 300), i.configureMaterialView_ammo = new f.MaterialAmountView(32, 10, 300), i.configureMaterialView_steel = new f.MaterialAmountView(33, 10, 300), i.configureMaterialView_bauxite = new f.MaterialAmountView(34, 10, 300), i.btn_kaihatsu = new u.SimpleButton(p.ARSENAL_MAIN.getTexture(25), p.ARSENAL_MAIN.getTexture(27));
            var n = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(26)),
                g = new PIXI.Sprite(h.COMMON_MAIN.getTexture(12)),
                v = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(139)),
                b = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(159)),
                w = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(158)),
                x = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(74)),
                I = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(73));
            i.textDevKitBefore = new c.TextBox(24, 5523516), i.textDevKitAfter = new c.TextBox(24, 12467003), i.shopButton = new y.ShopButton, i.configureMaterialView_fuel.onChangeValue = i._onChangeValue, i.configureMaterialView_ammo.onChangeValue = i._onChangeValue, i.configureMaterialView_steel.onChangeValue = i._onChangeValue, i.configureMaterialView_bauxite.onChangeValue = i._onChangeValue, i.multipleDevToggle.click_cb = i._onClickToggleCB, i.shopButton.onClick = i._onClickShop, i.btn_kaihatsu.on(a.EventType.CLICK, i._onClickBuild), g.interactive = !0, i.textDevKitBefore.anchor.x = 1, i.textDevKitAfter.anchor.x = 0, n.position.set(532, 486), i.btn_kaihatsu.position.set(532, 486), i.textDevKitBefore.position.set(591, 438), i.textDevKitAfter.position.set(619, 438), i.configureMaterialView_fuel.position.set(60, 33), i.configureMaterialView_ammo.position.set(60, 228), i.configureMaterialView_steel.position.set(402, 33), i.configureMaterialView_bauxite.position.set(402, 228), i.multipleDevToggle.position.set(207, 438), x.position.set(394, 441), I.position.set(594, 442), v.position.set(60, 426), b.position.set(424, 442), w.position.set(78, 439), i.shopButton.position.set(473, 496), i.addChild(g, i.configureMaterialView_fuel, i.configureMaterialView_ammo, i.configureMaterialView_steel, i.configureMaterialView_bauxite, v, n, b, w, x, I, i.multipleDevToggle, i.textDevKitBefore, i.textDevKitAfter, i.btn_kaihatsu, i.shopButton), i.shopButton.play();
            var T = new PIXI.Sprite(h.COMMON_MAIN.getTexture(64));
            T.position.set(0, -37);
            var O = new PIXI.Sprite(p.ARSENAL_MAIN.getTexture(7));
            O.anchor.set(0, .5), O.position.set(22, Math.floor(T.height / 2 - 4)), T.addChild(O), i.addChild(T);
            return i.dialogBackground = new l.AreaBox(_.UISettings.DIALOG_BG_ALPHA), i.dialogBackground.alpha = 0, i.dialogBackground.position.set(0, 103), i.dialogBackground.height = r.default.height - 103, i.mainView.addChild(i.dialogBackground), i.mainView.addChild(i), i.position.set(1200, 139), i.dialogBackground.on(a.EventType.CLICK, i._onClickBackground), i
        }
        return n(e, t), Object.defineProperty(e.prototype, "fuel", {
            get: function () {
                return this.configureMaterialView_fuel.value
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "ammo", {
            get: function () {
                return this.configureMaterialView_ammo.value
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "steel", {
            get: function () {
                return this.configureMaterialView_steel.value
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "bauxite", {
            get: function () {
                return this.configureMaterialView_bauxite.value
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "devKit", {
            get: function () {
                return 1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isMultiple", {
            get: function () {
                return this.multipleDevToggle.state
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.dispose = function () {
            this.removeChildren(), this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this), this.dialogBackground.off(a.EventType.CLICK, this._onClickBackground), this.multipleDevToggle.dispose(), this.configureMaterialView_fuel.dispose(), this.configureMaterialView_ammo.dispose(), this.configureMaterialView_steel.dispose(), this.configureMaterialView_bauxite.dispose(), this.btn_kaihatsu.dispose(), this.shopButton.dispose(), this.textDevKitBefore.destroy(), this.textDevKitAfter.destroy(), this.multipleDevToggle = null, this.configureMaterialView_fuel = null, this.configureMaterialView_ammo = null, this.configureMaterialView_steel = null, this.configureMaterialView_bauxite = null, this.btn_kaihatsu = null, this.textDevKitBefore = null, this.textDevKitAfter = null, this.onChangeValue = null, this.shopButton = null, this.mainView = null, this.dialogBackground = null, this.animation = null
        }, e.prototype.initialize = function (t, e, i, n, o) {
            this.configureMaterialView_fuel.setAvail(t), this.configureMaterialView_ammo.setAvail(e), this.configureMaterialView_steel.setAvail(i), this.configureMaterialView_bauxite.setAvail(n), this.textDevKitBefore.text = o.toString(), this.textDevKitAfter.style.fill = 12467003, this.textDevKitAfter.text = "0", 0 <= o - 1 && (this.textDevKitAfter.style.fill = 5523516, this.textDevKitAfter.text = (o - 1).toString()), this.multipleDevToggle.update(!0)
        }, e.prototype.play = function (t, e, i, n) {
            var o = s.default.model.useItem.get(31).count,
                r = s.default.model.useItem.get(32).count,
                a = s.default.model.useItem.get(33).count,
                _ = s.default.model.useItem.get(34).count,
                l = s.default.model.useItem.get(3).count;
            this.multipleDevToggle.changeToggleState(!1), this.initialize(o, r, a, _, l), this.config(t, e, i, n, 1);
            var u = d.Util.DevelopValidation(t, e, i, n, 1, this.multipleDevToggle.state);
            this.update(u), this.onChangeValue = this._onChangeValue, s.default.view.clickGuard = !0, this.show(function () {
                s.default.view.clickGuard = !1
            })
        }, e.prototype.show = function (t) {
            var e = this;
            this.animation.progress = 0;
            var i = createjs.Tween.get(this.animation),
                n = function () {
                    e.x = 1200 - 788 * e.animation.progress, e.dialogBackground.alpha = e.animation.progress
                };
            n(), i.call(function () {
                i.addEventListener("change", n)
            }).to({
                progress: 1
            }, 200).call(function () {
                i.removeAllEventListeners("change"), createjs.Tween.removeTweens(i.target), e.animation.progress = 1, e.dialogBackground.width = 444, n(), t()
            }), i.play(null)
        }, e.prototype.hide = function (t) {
            var e = this;
            this.animation.progress = 0, this.dialogBackground.width = r.default.width;
            var i = createjs.Tween.get(this.animation),
                n = function () {
                    e.x = 1200 - 788 * (1 - e.animation.progress), e.dialogBackground.alpha = 1 - e.animation.progress
                };
            n(), i.call(function () {
                i.addEventListener("change", n)
            }).to({
                progress: 1
            }, 200).call(function () {
                i.removeAllEventListeners("change"), createjs.Tween.removeTweens(i.target), e.animation.progress = 1, n(), t()
            }), i.play(null)
        }, e.prototype.config = function (t, e, i, n, o) {
            this.configureMaterialView_fuel.updateValue(t), this.configureMaterialView_ammo.updateValue(e), this.configureMaterialView_steel.updateValue(i), this.configureMaterialView_bauxite.updateValue(n)
        }, e.prototype.update = function (t) {
            this.btn_kaihatsu.visible = !!t
        }, e
    }(PIXI.Container);
    e.MaterialAmountContainerSlot = g
}