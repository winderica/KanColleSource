const function911 = function (t, e, i) {
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
        r = i(3),
        s = i(116),
        a = i(1),
        _ = i(226),
        l = i(912),
        u = i(80),
        c = i(913),
        h = i(350),
        p = i(915),
        d = i(916),
        f = i(917),
        y = i(351),
        m = i(919),
        g = i(924);
    d.RewardAnimationMultiSlot;
    var v = i(209),
        b = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.itemMemory = {
                    ammo: 10,
                    fuel: 10,
                    steel: 10,
                    bauxite: 10
                }, e.shipShipPageIndex = 0, e.shipSortKeyType = y.ArsenalSceneMemory.shipSortKeyType, e._hasLimitOver = !1, e._onMouseOverDevelop = function () {
                    e.alertDevelopPopup.visible = e._hasLimitOver
                }, e._onMouseOutDevelop = function () {
                    e.alertDevelopPopup.visible = !1
                }, e._onClickMenuDevelop = function () {
                    if (0 == e._hasLimitOver) {
                        if (e.focusDevelop(), e._materialAmountContainer) return;
                        e._materialAmountContainer = new c.MaterialAmountContainerSlot(e.parent), e._materialAmountContainer.onComplete = e._onCompletePhaseItemConfigureMaterial, e._materialAmountContainer.play(e.itemMemory.fuel, e.itemMemory.ammo, e.itemMemory.steel, e.itemMemory.bauxite)
                    }
                }, e._onCompletePhaseItemConfigureMaterial = function (t) {
                    switch (t) {
                        case c.Result.CANCEL:
                            o.default.view.clickGuard = !0, e._materialAmountContainer.hide(function () {
                                e.focusBuild(), e._materialAmountContainer.dispose(), e._materialAmountContainer = null, o.default.view.clickGuard = !1, _.ArsenalUtil.playVoiceOnBuildComplete()
                            });
                            break;
                        case c.Result.DEVELOP:
                            var i = e._materialAmountContainer.fuel,
                                n = e._materialAmountContainer.ammo,
                                r = e._materialAmountContainer.steel,
                                s = e._materialAmountContainer.bauxite;
                            e.itemMemory.fuel = i, e.itemMemory.ammo = n, e.itemMemory.steel = r, e.itemMemory.bauxite = s;
                            var a = new l.CreateItemAPI(i, n, r, s, !1);
                            o.default.view.clickGuard = !0, a.start(function () {
                                var t = 1 == a.api_create_flag,
                                    i = a.api_slotitem_mstid.pop();
                                e.developAnimation(t, i), o.default.view.clickGuard = !1
                            }), e._materialAmountContainer.dispose(), e._materialAmountContainer = null, e.focusBuild();
                            break;
                        case c.Result.MULTIPLE_DEV:
                            var h = e._materialAmountContainer.fuel,
                                p = e._materialAmountContainer.ammo,
                                d = e._materialAmountContainer.steel,
                                f = e._materialAmountContainer.bauxite;
                            e.itemMemory.fuel = h, e.itemMemory.ammo = p, e.itemMemory.steel = d, e.itemMemory.bauxite = f;
                            var y = new l.CreateItemAPI(h, p, d, f, !0);
                            o.default.view.clickGuard = !0, y.start(function () {
                                var t = 1 == y.api_create_flag,
                                    i = y.api_slotitem_mstid;
                                e.multiple_bg.initiailzeGetBG1(function () {
                                    e.multiple_bg.alpha = 0, o.default.view.overLayer.addChild(e.multiple_bg), createjs.Tween.get(e.multiple_bg).to({
                                        alpha: 1
                                    }, 500).set({
                                        visible: !0
                                    }), e.multiDevelopAnimation(t, i, 0), o.default.view.clickGuard = !1
                                })
                            }), e._materialAmountContainer.dispose(), e._materialAmountContainer = null, e.focusBuild();
                            break;
                        case c.Result.GOTO_STORE:
                            o.default.scene.change(24, new u.ItemSceneModel)
                    }
                }, e.multiDevelopAnimation = function (t, i, n) {
                    var r = !t && n == i.length - 1;
                    if (n > i.length - 1) return void(t && e._rewardResultAnimation(i));
                    var s = new h.ReceiveAnimation(393, !0);
                    o.default.view.overLayer.addChild(s), s.preload(function () {
                        if (i[n] > 0) {
                            var a = o.default.model.slot.getMst(i[n]),
                                l = "",
                                u = o.default.model.slot.getEquipTypeById(a.equipType);
                            l = u.needsDisplayName() ? "\u300c" + u.name + "\u3000" + a.name + "\u300d\u3092\u5165\u624b\u3057\u307e\u3057\u305f\uff01" : "\u300c" + a.name + "\u300d\u3092\u5165\u624b\u3057\u307e\u3057\u305f\uff01";
                            var c = new d.RewardAnimationMultiSlot(!1);
                            c.preload(i[n], l, a.rarity, function () {
                                s.play(function () {
                                    _.ArsenalUtil.playFlagshipVoice(26), s.dispose(), o.default.view.overLayer.removeChild(s), o.default.view.overLayer.addChild(c), c.play(function () {
                                        o.default.view.portMain.updateInfo();
                                        for (var t = _.ArsenalUtil.developLimit(), i = o.default.model.kdock.getAll(), n = 0; n < i.length; n++) {
                                            var r = i[n];
                                            e.onUpdateCondition(r.id, t.forShip, t.forSlot)
                                        }
                                    }, function () {
                                        e.multiDevelopAnimation(t, i, n + 1), c.dispose(), o.default.view.overLayer.removeChild(c)
                                    })
                                })
                            })
                        } else s.play(function () {
                            s.dispose(), o.default.view.overLayer.removeChild(s);
                            var a = new f.RewardAnimationSlotFailed(r);
                            o.default.view.overLayer.addChild(a), r && o.default.view.overLayer.removeChild(e.multiple_bg), a.play(function () {
                                o.default.view.portMain.updateInfo(), a.dispose(), o.default.view.overLayer.removeChild(a), e.multiDevelopAnimation(t, i, n + 1)
                            })
                        })
                    })
                }, e._rewardResultAnimation = function (t) {
                    for (var i = "", n = 0, r = 0; r < t.length; r++)
                        if (!(t[r] <= 0)) {
                            var s = o.default.model.slot.getMst(t[r]),
                                a = o.default.model.slot.getEquipTypeById(s.equipType),
                                l = s.rarity;
                            n < l && (n = l), a.needsDisplayName() ? i += "\u300c" + a.name + "\u3000" + s.name + "\u300d" : i += "\u300c" + s.name + "\u300d", i += "\n"
                        } var u = new d.RewardAnimationMultiSlot(!0);
                    u.preMultiload(t, i, n, function () {
                        _.ArsenalUtil.playFlagshipVoice(26), o.default.view.overLayer.removeChild(e.multiple_bg), o.default.view.overLayer.addChild(u), u.play(function () {}, function () {
                            u.dispose(), o.default.view.overLayer.removeChild(u), _.ArsenalUtil.playVoiceOnBuildComplete()
                        })
                    })
                }, e._onClickMenuShipDisassembly = function () {
                    e.focusShipDisassembly(), o.default.view.clickGuard = !0, e.shipDisassembly && (e.shipDisassembly.dispose(), e.shipDisassembly = null), e.shipDisassembly = new m.ShipDisassemblyContainer(e.parent), e.shipDisassembly.onComplete = function () {
                        e._onCompletePhaseShipDisassembly()
                    }, e.shipDisassembly.start(e.shipSortKeyType, 0)
                }, e._onClickMenuSlotDisassembly = function () {
                    e.focusSlotDisassembly(), e.slotDisassembly && (e.slotDisassembly.dispose(), e.slotDisassembly = null), e.slotDisassembly = new g.SlotDisassemblyContainer(e.parent), e.slotDisassembly.onComplete = function () {
                        e._onCompleteSlotDisassembly()
                    }, e.slotDisassembly.start(0, 0)
                };
                var i = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(95));
                e.iconBuild = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(96));
                var n = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(90));
                e.buttonSlotDisassembly = new s.SimpleButton(r.ARSENAL_MAIN.getTexture(89), r.ARSENAL_MAIN.getTexture(90));
                var p = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(92));
                e.buttonDevelop = new s.SimpleButton(r.ARSENAL_MAIN.getTexture(91), r.ARSENAL_MAIN.getTexture(92));
                var b = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(94));
                e.buttonShipDisassembly = new s.SimpleButton(r.ARSENAL_MAIN.getTexture(93), r.ARSENAL_MAIN.getTexture(94)), e.alertDevelopPopup = new PIXI.Sprite(r.ARSENAL_MAIN.getTexture(70));
                return e.buttonDevelop.on(a.EventType.CLICK, e._onClickMenuDevelop), e.buttonDevelop.onMouseOver = e._onMouseOverDevelop, e.buttonDevelop.onMouseOut = e._onMouseOutDevelop, e.buttonSlotDisassembly.on(a.EventType.CLICK, e._onClickMenuSlotDisassembly), e.buttonShipDisassembly.on(a.EventType.CLICK, e._onClickMenuShipDisassembly), e.iconBuild.anchor.set(.5, 0), i.anchor.set(.5, 0), n.anchor.set(.5, 0), e.buttonSlotDisassembly.anchor.set(.5, 0), p.anchor.set(.5, 0), e.buttonDevelop.anchor.set(.5, 0), b.anchor.set(.5, 0), e.buttonShipDisassembly.anchor.set(.5, 0), e.iconBuild.position.set(342, 201), i.position.set(342, 201), b.position.set(342, 321), e.buttonShipDisassembly.position.set(342, 321), p.position.set(342, 435), e.buttonDevelop.position.set(342, 435), e.alertDevelopPopup.position.set(462, 435), n.position.set(342, 555), e.buttonSlotDisassembly.position.set(342, 555), e.alertDevelopPopup.visible = !1, e.addChild(i, b, p, n, e.iconBuild, e.buttonShipDisassembly, e.buttonDevelop, e.buttonSlotDisassembly, e.alertDevelopPopup), e.multiple_bg = new v.GetBG, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "hasLimitOver", {
                set: function (t) {
                    this._hasLimitOver = t
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.buttonSlotDisassembly.dispose(), this.buttonDevelop.dispose(), this.buttonShipDisassembly.dispose(), this.multiple_bg.dispose(), this.shipDisassembly && this.shipDisassembly.dispose(), this.slotDisassembly && this.slotDisassembly.dispose(), this.onUpdateCondition = null, this.shipShipPageIndex = null, this.shipSortKeyType = null, this.iconBuild = null, this.buttonSlotDisassembly = null, this.buttonDevelop = null, this.buttonShipDisassembly = null, this.alertDevelopPopup = null, this.itemMemory = null, this._hasLimitOver = null, this.shipDisassembly = null, this.slotDisassembly = null, this.multiple_bg = null, this._materialAmountContainer && (this._materialAmountContainer.dispose(), this._materialAmountContainer = null), this.removeChildren()
            }, e.prototype.focusBuild = function () {
                this.iconBuild.visible = !0, this.buttonShipDisassembly.visible = !0, this.buttonDevelop.visible = !0, this.buttonSlotDisassembly.visible = !0
            }, e.prototype.focusShipDisassembly = function () {
                this.iconBuild.visible = !1, this.buttonShipDisassembly.visible = !1, this.buttonDevelop.visible = !0, this.buttonSlotDisassembly.visible = !0
            }, e.prototype.focusDevelop = function () {
                this.iconBuild.visible = !1, this.buttonShipDisassembly.visible = !0, this.buttonDevelop.visible = !1, this.buttonSlotDisassembly.visible = !0
            }, e.prototype.focusSlotDisassembly = function () {
                this.iconBuild.visible = !1, this.buttonShipDisassembly.visible = !0, this.buttonDevelop.visible = !0, this.buttonSlotDisassembly.visible = !1
            }, e.prototype.developAnimation = function (t, e) {
                var i = this,
                    n = new h.ReceiveAnimation(393);
                o.default.view.overLayer.addChild(n), n.preload(function () {
                    if (1 == t) {
                        var r = o.default.model.slot.getMst(e),
                            s = "",
                            a = o.default.model.slot.getEquipTypeById(r.equipType);
                        s = a.needsDisplayName() ? "\u300c" + a.name + "\u3000" + r.name + "\u300d\u3092\u5165\u624b\u3057\u307e\u3057\u305f\uff01" : "\u300c" + r.name + "\u300d\u3092\u5165\u624b\u3057\u307e\u3057\u305f\uff01";
                        var l = new p.RewardAnimationSlot;
                        l.preload(e, s, r.rarity, function () {
                            n.play(function () {
                                _.ArsenalUtil.playFlagshipVoice(26), n.dispose(), o.default.view.overLayer.removeChild(n), o.default.view.overLayer.addChild(l), l.play(function () {
                                    o.default.view.portMain.updateInfo();
                                    for (var t = _.ArsenalUtil.developLimit(), e = o.default.model.kdock.getAll(), n = 0; n < e.length; n++) {
                                        var r = e[n];
                                        i.onUpdateCondition(r.id, t.forShip, t.forSlot)
                                    }
                                }, function () {
                                    l.dispose(), o.default.view.overLayer.removeChild(l), _.ArsenalUtil.playVoiceOnBuildComplete()
                                })
                            })
                        })
                    } else n.play(function () {
                        n.dispose(), o.default.view.overLayer.removeChild(n);
                        var t = new f.RewardAnimationSlotFailed(!0);
                        o.default.view.overLayer.addChild(t), t.play(function () {
                            o.default.view.portMain.updateInfo(), t.dispose(), o.default.view.overLayer.removeChild(t), _.ArsenalUtil.playVoiceOnBuildComplete()
                        })
                    })
                })
            }, e.prototype._onCompletePhaseShipDisassembly = function () {
                var t = this;
                this.shipSortKeyType = this.shipDisassembly.useShipSortKeyType, this.shipShipPageIndex = this.shipDisassembly.pageIndex, o.default.view.clickGuard = !0, this.shipDisassembly.hide(function () {
                    t.focusBuild();
                    for (var e = _.ArsenalUtil.developLimit(), i = o.default.model.kdock.getAll(), n = 0; n < i.length; n++) {
                        var r = i[n];
                        t.onUpdateCondition(r.id, e.forShip, e.forSlot)
                    }
                    o.default.view.clickGuard = !1, _.ArsenalUtil.playVoiceOnBuildComplete(), t.shipDisassembly.dispose(), t.shipDisassembly = null
                })
            }, e.prototype._onCompleteSlotDisassembly = function () {
                var t = this;
                o.default.view.clickGuard = !0, this.slotDisassembly.hide(function () {
                    for (var e = _.ArsenalUtil.developLimit(), i = o.default.model.kdock.getAll(), n = 0; n < i.length; n++) {
                        var r = i[n];
                        t.onUpdateCondition(r.id, e.forShip, e.forSlot)
                    }
                    o.default.view.clickGuard = !1, t.focusBuild(), _.ArsenalUtil.playVoiceOnBuildComplete(), t.slotDisassembly.dispose(), t.slotDisassembly = null
                })
            }, e
        }(PIXI.Container);
    e.MenuLayer = b
}