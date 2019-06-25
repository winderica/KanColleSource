const function891 = function (t, e, i) {
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
    var o, r = i(0),
        s = i(1),
        a = i(50),
        _ = i(8),
        u = i(115),
        l = i(4),
        c = i(21),
        h = i(35),
        p = i(88),
        d = i(892);
    ! function (t) {
        t[t.CANCEL = 0] = "CANCEL", t[t.CHANGE_NORMAL = 1] = "CHANGE_NORMAL", t[t.START = 2] = "START"
    }(o = e.Result || (e.Result = {}));
    var f = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClickNormal = function () {
                i.onComplete(o.CHANGE_NORMAL)
            }, i._onClickBuild = function () {
                i.onComplete(o.START)
            }, i._onChangeValue = function () {
                var t = i.fuel,
                    e = i.ammo,
                    n = i.steel,
                    o = i.bauxite,
                    r = i.devKit,
                    s = i.buildKit,
                    a = p.Util.BuildValidation(t, e, n, o, r, s);
                i.update(a)
            }, i._onClickBack = function () {
                i.onComplete(o.CANCEL)
            }, i.mainView = e, i.configureMaterialView_fuel = new d.LargeConfigureMaterialView(31, 1500, 7e3), i.configureMaterialView_ammo = new d.LargeConfigureMaterialView(32, 1500, 7e3), i.configureMaterialView_steel = new d.LargeConfigureMaterialView(33, 2e3, 7e3), i.configureMaterialView_bauxite = new d.LargeConfigureMaterialView(34, 1e3, 7e3), i.btn_kenzou = new u.SimpleButton(h.ARSENAL_MAIN.getTexture(31), h.ARSENAL_MAIN.getTexture(33));
            var n = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(32)),
                r = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(18)),
                f = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(64));
            i.configureMaterialView_fuel.onChangeValue = i._onChangeValue, i.configureMaterialView_ammo.onChangeValue = i._onChangeValue, i.configureMaterialView_steel.onChangeValue = i._onChangeValue, i.configureMaterialView_bauxite.onChangeValue = i._onChangeValue, f.interactive = !0, n.position.set(532, 486), i.btn_kenzou.position.set(532, 486), i.configureMaterialView_fuel.position.set(60, 33), i.configureMaterialView_ammo.position.set(60, 228), i.configureMaterialView_steel.position.set(402, 33), i.configureMaterialView_bauxite.position.set(402, 228), r.position.set(60, 492), i.btn_kenzou.on(s.EventType.CLICK, i._onClickBuild);
            var g = new PIXI.Sprite(c.COMMON_MAIN.getTexture(64));
            g.position.set(0, -37);
            var v = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(5));
            return v.anchor.set(0, .5), v.position.set(22, Math.floor(g.height / 2 - 4)), i.addChild(f, i.configureMaterialView_fuel, i.configureMaterialView_ammo, i.configureMaterialView_steel, i.configureMaterialView_bauxite, n, r), i._buildKitSwitch = new y(i._onChangeValue), i._buildKitSwitch.position.set(229, 427), i.addChild(i._buildKitSwitch), i._devKitSwitch = new m(i._onChangeValue), i._devKitSwitch.position.set(547, 427), i.addChild(i._devKitSwitch), i.textDevKitBefore = new l.TextBox(24, 5523516), i.textDevKitBefore.anchor.x = 1, i.textDevKitBefore.position.set(591, 438), i.addChild(i.textDevKitBefore), i.textDevKitAfter = new l.TextBox(24, 12467003), i.textDevKitAfter.position.set(619, 438), i.addChild(i.textDevKitAfter), i.addChild(i.btn_kenzou), i._btnToNormal = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(37)), i._btnToNormal.interactive = !0, i._btnToNormal.buttonMode = !0, i._btnToNormal.position.set(60, 492), i.addChild(i._btnToNormal), i.addChild(g), i.position.set(1200, 139), g.addChild(v), i.dialogBackground = new _.AreaBox(a.UISettings.DIALOG_BG_ALPHA), i.mainView.addChild(i.dialogBackground), i.mainView.addChild(i), i._btnToNormal.on(s.EventType.CLICK, i._onClickNormal), i.dialogBackground.on(s.EventType.CLICK, i._onClickBack), i
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
                return this._devKitSwitch.value
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "buildKit", {
            get: function () {
                return this._buildKitSwitch.value
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.dispose = function () {
            this.removeChildren(), this._btnToNormal.off(s.EventType.CLICK, this._onClickNormal), this.dialogBackground.off(s.EventType.CLICK, this._onClickBack), this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this), this.configureMaterialView_fuel.dispose(), this.configureMaterialView_ammo.dispose(), this.configureMaterialView_steel.dispose(), this.configureMaterialView_bauxite.dispose(), this._devKitSwitch.dispose(), this._buildKitSwitch.dispose(), this.btn_kenzou.dispose(), this.textDevKitBefore.destroy(), this.textDevKitAfter.destroy(), this.configureMaterialView_fuel = null, this.configureMaterialView_ammo = null, this.configureMaterialView_steel = null, this.configureMaterialView_bauxite = null, this.btn_kenzou = null, this.onComplete = null, this.mainView = null, this.dialogBackground = null, this.textDevKitBefore = null, this.textDevKitAfter = null
        }, e.prototype.initialize = function (t, e, i, n, o, r) {
            this.configureMaterialView_fuel.setAvail(t), this.configureMaterialView_ammo.setAvail(e), this.configureMaterialView_steel.setAvail(i), this.configureMaterialView_bauxite.setAvail(n)
        }, e.prototype.play = function (t, e, i, n, o, s) {
            var a = r.default.model.useItem.get(31).count,
                _ = r.default.model.useItem.get(32).count,
                u = r.default.model.useItem.get(33).count,
                l = r.default.model.useItem.get(34).count,
                c = r.default.model.useItem.get(3).count,
                h = r.default.model.useItem.get(2).count,
                d = p.Util.BuildValidation(t, e, i, n, o, s);
            this.update(d), this.initialize(a, _, u, l, c, h), this.configureMaterialView_fuel.updateValue(t), this.configureMaterialView_ammo.updateValue(e), this.configureMaterialView_steel.updateValue(i), this.configureMaterialView_bauxite.updateValue(n), this._buildKitSwitch.enable = h >= 10, this._buildKitSwitch.update(0), this._devKitSwitch.update(1), this.x = 412
        }, e.prototype.hide = function (t) {
            var e = this,
                i = {
                    progress: 0
                },
                n = createjs.Tween.get(i);
            n.to({
                progress: 1
            }, 250).call(function () {
                e.x = 1200, n.removeAllEventListeners("change"), t()
            }), n.addEventListener("change", function () {
                e.x = 412 + 788 * i.progress, e.dialogBackground.alpha = 1 - i.progress
            }), n.play(null)
        }, e.prototype.update = function (t) {
            this.btn_kenzou.visible = !1, t && (this.btn_kenzou.visible = !0)
        }, e
    }(PIXI.Container);
    e.LargeConfigureMaterialContainer = f;
    var y = function (t) {
            function e(e) {
                var i = t.call(this, h.ARSENAL_MAIN.getTexture(148)) || this;
                return i._enable = !0, i._onClick000 = function () {
                    i.update(0), i._cb_onChange()
                }, i._onClick010 = function () {
                    i.update(10), i._cb_onChange()
                }, i._cb_onChange = null == e ? function () {} : e, i._toggle000 = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(150)), i._toggle000.interactive = !0, i._toggle000.buttonMode = !0, i._toggle000.position.set(6, 13), i.addChild(i._toggle000), i._toggle010 = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(150)), i._toggle010.interactive = !0, i._toggle010.buttonMode = !0, i._toggle010.position.set(84, 13), i.addChild(i._toggle010), i.update(0), i._toggle000.on(s.EventType.CLICK, i._onClick000), i._toggle010.on(s.EventType.CLICK, i._onClick010), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "enable", {
                set: function (t) {
                    this._enable = t, this._enable ? (this._toggle000.buttonMode = 0 != this._value, this._toggle010.buttonMode = 10 != this._value) : (this._value = 0, this._toggle000.buttonMode = !1, this._toggle010.buttonMode = !1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this._value
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this._toggle000.off(s.EventType.CLICK, this._onClick000), this._toggle010.off(s.EventType.CLICK, this._onClick010), this._toggle000 = null, this._toggle010 = null, this._cb_onChange = null, this.removeChildren()
            }, e.prototype.update = function (t) {
                switch (0 == this._enable && (t = 0), this._value = t, this._toggle000.alpha = 0, this._toggle010.alpha = 0, this._toggle000.buttonMode = !0, this._toggle010.buttonMode = !0, t) {
                    case 0:
                        this._toggle000.alpha = 1, this._toggle000.buttonMode = !1;
                        break;
                    case 10:
                        this._toggle010.alpha = 1, this._toggle010.buttonMode = !1
                }
            }, e
        }(PIXI.Sprite),
        m = function (t) {
            function e(e) {
                var i = t.call(this, h.ARSENAL_MAIN.getTexture(149)) || this;
                return i._onClick001 = function () {
                    i.update(1), i._cb_onChange()
                }, i._onClick020 = function () {
                    i.update(20), i._cb_onChange()
                }, i._onClick100 = function () {
                    i.update(100), i._cb_onChange()
                }, i._cb_onChange = null == e ? function () {} : e, i._toggle001 = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(150)), i._toggle001.interactive = !0, i._toggle001.buttonMode = !0, i._toggle001.position.set(0, 13), i.addChild(i._toggle001), i._toggle020 = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(150)), i._toggle020.interactive = !0, i._toggle020.buttonMode = !0, i._toggle020.position.set(54, 13), i.addChild(i._toggle020), i._toggle100 = new PIXI.Sprite(h.ARSENAL_MAIN.getTexture(150)), i._toggle100.interactive = !0, i._toggle100.buttonMode = !0, i._toggle100.position.set(108, 13), i.addChild(i._toggle100), i.update(1), i._toggle001.on(s.EventType.CLICK, i._onClick001), i._toggle020.on(s.EventType.CLICK, i._onClick020), i._toggle100.on(s.EventType.CLICK, i._onClick100), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this._value
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this._toggle001.off(s.EventType.CLICK, this._onClick001), this._toggle020.off(s.EventType.CLICK, this._onClick020), this._toggle100.off(s.EventType.CLICK, this._onClick100), this._toggle001 = null, this._toggle020 = null, this._toggle100 = null, this._cb_onChange = null, this.removeChildren()
            }, e.prototype.update = function (t) {
                switch (this._value = t, this._toggle001.alpha = 0, this._toggle020.alpha = 0, this._toggle100.alpha = 0, this._toggle001.buttonMode = !0, this._toggle020.buttonMode = !0, this._toggle100.buttonMode = !0, t) {
                    case 1:
                        this._toggle001.alpha = 1, this._toggle001.buttonMode = !1;
                        break;
                    case 20:
                        this._toggle020.alpha = 1, this._toggle020.buttonMode = !1;
                        break;
                    case 100:
                        this._toggle100.alpha = 1, this._toggle100.buttonMode = !1
                }
            }, e
        }(PIXI.Sprite)
}