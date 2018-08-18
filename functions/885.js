const function885 = function (t, e, i) {
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
    var o = i(0), r = i(3), s = i(115), a = i(1), _ = i(221), u = i(886), l = i(78), c = i(887), h = i(349),
        p = i(888), d = i(889), f = i(351), y = i(891), v = i(896), g = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.itemMemory = {
                    ammo: 10,
                    fuel: 10,
                    steel: 10,
                    bauxite: 10
                }, e.shipShipPageIndex = 0, e.shipSortKeyType = f.ArsenalSceneMemory.shipSortKeyType, e._hasLimitOver = !1, e._onMouseOverDevelop = function () {
                    e.alertDevelopPopup.visible = e._hasLimitOver
                }, e._onMouseOutDevelop = function () {
                    e.alertDevelopPopup.visible = !1
                }, e._onClickMenuDevelop = function () {
                    if (0 == e._hasLimitOver) {
                        e.focusDevelop();
                        var t = new c.MaterialAmountContainerSlot(e.parent);
                        t.onComplete = function (i) {
                            e._onCompletePhaseItemConfigureMaterial(t, i)
                        }, t.play(e.itemMemory.fuel, e.itemMemory.ammo, e.itemMemory.steel, e.itemMemory.bauxite)
                    }
                }, e._onClickMenuShipDisassembly = function () {
                    e.focusShipDisassembly(), o.default.view.clickGuard = !0;
                    var t = new y.ShipDisassemblyContainer(e.parent);
                    t.onComplete = function () {
                        e._onCompletePhaseShipDisassembly(t)
                    }, t.start(e.shipSortKeyType, 0)
                }, e._onClickMenuSlotDisassembly = function () {
                    e.focusSlotDisassembly();
                    var t = new v.SlotDisassemblyContainer(e.parent);
                    t.onComplete = function () {
                        e._onCompleteSlotDisassembly(t)
                    }, t.start(0, 0)
                };
                var i = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(95));
                e.iconBuild = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(96));
                var n = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(90));
                e.buttonSlotDisassembly = new s.SimpleButton(r.ARSENAL_MAIN.getTexture(89), r.ARSENAL_MAIN.getTexture(90));
                var _ = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(92));
                e.buttonDevelop = new s.SimpleButton(r.ARSENAL_MAIN.getTexture(91), r.ARSENAL_MAIN.getTexture(92));
                var u = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(94));
                e.buttonShipDisassembly = new s.SimpleButton(r.ARSENAL_MAIN.getTexture(93), r.ARSENAL_MAIN.getTexture(94)), e.alertDevelopPopup = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(70));
                return e.buttonDevelop.on(a.EventType.CLICK, e._onClickMenuDevelop), e.buttonDevelop.onMouseOver = e._onMouseOverDevelop, e.buttonDevelop.onMouseOut = e._onMouseOutDevelop, e.buttonSlotDisassembly.on(a.EventType.CLICK, e._onClickMenuSlotDisassembly), e.buttonShipDisassembly.on(a.EventType.CLICK, e._onClickMenuShipDisassembly), e.iconBuild.anchor.set(.5, 0), i.anchor.set(.5, 0), n.anchor.set(.5, 0), e.buttonSlotDisassembly.anchor.set(.5, 0), _.anchor.set(.5, 0), e.buttonDevelop.anchor.set(.5, 0), u.anchor.set(.5, 0), e.buttonShipDisassembly.anchor.set(.5, 0), e.iconBuild.position.set(342, 201), i.position.set(342, 201), u.position.set(342, 321), e.buttonShipDisassembly.position.set(342, 321), _.position.set(342, 435), e.buttonDevelop.position.set(342, 435), e.alertDevelopPopup.position.set(462, 435), n.position.set(342, 555), e.buttonSlotDisassembly.position.set(342, 555), e.alertDevelopPopup.visible = !1, e.addChild(i, u, _, n, e.iconBuild, e.buttonShipDisassembly, e.buttonDevelop, e.buttonSlotDisassembly, e.alertDevelopPopup), e
            }

            return n(e, t), Object.defineProperty(e.prototype, "hasLimitOver", {
                set: function (t) {
                    this._hasLimitOver = t
                }, enumerable: !0, configurable: !0
            }), e.prototype.dispose = function () {
                this.buttonSlotDisassembly.dispose(), this.buttonDevelop.dispose(), this.buttonShipDisassembly.dispose(), this.onUpdateCondition = null, this.iconBuild = null, this.buttonSlotDisassembly = null, this.buttonDevelop = null, this.buttonShipDisassembly = null, this.alertDevelopPopup = null, this.itemMemory = null, this.removeChildren()
            }, e.prototype.focusBuild = function () {
                this.iconBuild.visible = !0, this.buttonShipDisassembly.visible = !0, this.buttonDevelop.visible = !0, this.buttonSlotDisassembly.visible = !0
            }, e.prototype.focusShipDisassembly = function () {
                this.iconBuild.visible = !1, this.buttonShipDisassembly.visible = !1, this.buttonDevelop.visible = !0, this.buttonSlotDisassembly.visible = !0
            }, e.prototype.focusDevelop = function () {
                this.iconBuild.visible = !1, this.buttonShipDisassembly.visible = !0, this.buttonDevelop.visible = !1, this.buttonSlotDisassembly.visible = !0
            }, e.prototype.focusSlotDisassembly = function () {
                this.iconBuild.visible = !1, this.buttonShipDisassembly.visible = !0, this.buttonDevelop.visible = !0, this.buttonSlotDisassembly.visible = !1
            }, e.prototype._onCompletePhaseItemConfigureMaterial = function (t, e) {
                var i = this;
                switch (e) {
                    case c.Result.CANCEL:
                        o.default.view.clickGuard = !0, t.hide(function () {
                            i.focusBuild(), t.dispose(), o.default.view.clickGuard = !1, _.ArsenalUtil.playVoiceOnBuildComplete()
                        });
                        break;
                    case c.Result.DEVELOP:
                        this.itemMemory.fuel = t.fuel, this.itemMemory.ammo = t.ammo, this.itemMemory.steel = t.steel, this.itemMemory.bauxite = t.bauxite;
                        var n = new u.CreateItemAPI(t.fuel, t.ammo, t.steel, t.bauxite);
                        o.default.view.clickGuard = !0, n.start(function () {
                            var t = 1 == n.api_create_flag, e = n.api_slotitem_mstid;
                            i.developAnimation(t, e), o.default.view.clickGuard = !1
                        }), t.dispose(), this.focusBuild();
                        break;
                    case c.Result.GOTO_STORE:
                        o.default.scene.change(24, new l.ItemSceneModel)
                }
            }, e.prototype.developAnimation = function (t, e) {
                var i = this, n = new h.ReceiveAnimation(393);
                o.default.view.overLayer.addChild(n), n.preload(function () {
                    if (1 == t) {
                        var r = o.default.model.slot.getMst(e), s = "",
                            a = o.default.model.slot.getEquipTypeById(r.equipType);
                        s = a.needsDisplayName() ? "\u300c" + a.name + "\u3000" + r.name + "\u300d\u3092\u5165\u624b\u3057\u307e\u3057\u305f\uff01" : "\u300c" + r.name + "\u300d\u3092\u5165\u624b\u3057\u307e\u3057\u305f\uff01";
                        var u = new p.RewardAnimationSlot;
                        u.preload(e, s, r.rarity, function () {
                            n.play(function () {
                                _.ArsenalUtil.playFlagshipVoice(26), n.dispose(), o.default.view.overLayer.removeChild(n), o.default.view.overLayer.addChild(u), u.play(function () {
                                    o.default.view.portMain.updateInfo();
                                    for (var t = _.ArsenalUtil.developLimit(), e = o.default.model.kdock.getAll(), n = 0; n < e.length; n++) {
                                        var r = e[n];
                                        i.onUpdateCondition(r.id, t.forShip, t.forSlot)
                                    }
                                }, function () {
                                    u.dispose(), o.default.view.overLayer.removeChild(u), _.ArsenalUtil.playVoiceOnBuildComplete()
                                })
                            })
                        })
                    } else n.play(function () {
                        n.dispose(), o.default.view.overLayer.removeChild(n);
                        var t = new d.RewardAnimationSlotFailed;
                        o.default.view.overLayer.addChild(t), t.play(function () {
                            o.default.view.portMain.updateInfo(), t.dispose(), o.default.view.overLayer.removeChild(t), _.ArsenalUtil.playVoiceOnBuildComplete()
                        })
                    })
                })
            }, e.prototype._onCompletePhaseShipDisassembly = function (t) {
                var e = this;
                this.shipSortKeyType = t.useShipSortKeyType, this.shipShipPageIndex = t.pageIndex, o.default.view.clickGuard = !0, t.hide(function () {
                    e.focusBuild(), t.dispose();
                    for (var i = _.ArsenalUtil.developLimit(), n = o.default.model.kdock.getAll(), r = 0; r < n.length; r++) {
                        var s = n[r];
                        e.onUpdateCondition(s.id, i.forShip, i.forSlot)
                    }
                    o.default.view.clickGuard = !1, _.ArsenalUtil.playVoiceOnBuildComplete()
                })
            }, e.prototype._onCompleteSlotDisassembly = function (t) {
                var e = this;
                o.default.view.clickGuard = !0, t.hide(function () {
                    for (var i = _.ArsenalUtil.developLimit(), n = o.default.model.kdock.getAll(), r = 0; r < n.length; r++) {
                        var s = n[r];
                        e.onUpdateCondition(s.id, i.forShip, i.forSlot)
                    }
                    t.dispose(), o.default.view.clickGuard = !1, e.focusBuild(), _.ArsenalUtil.playVoiceOnBuildComplete()
                })
            }, e
        }(PIXI.Container);
    e.MenuLayer = g
}