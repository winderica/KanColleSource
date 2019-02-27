const function735 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(30),
        a = i(47),
        _ = i(109),
        l = i(31),
        u = i(327),
        c = i(69),
        h = i(218),
        p = i(736),
        d = i(737),
        f = i(738),
        y = i(739),
        m = i(743),
        v = i(746),
        g = i(747),
        b = i(748),
        w = i(749),
        x = i(750),
        I = i(753),
        T = i(157),
        O = i(21),
        C = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.combinedView = null, e._onClickDeck = function (t) {
                    if (e.deckId != t) {
                        if (e.deckId = t, e.viewMode != p.ViewMode.DECK) {
                            var i = e.taskEditSupplyOther.pageIndex;
                            e.memoryOtherPageIndex = i, e.taskEditSupplyOther.dispose(), e.taskEditSupplyOther = null, e._startTaskEditSupplyDeck(t)
                        } else e.taskEditSupplyDeck.changeDeck(t);
                        e.deckSelectView.focusDeck(t), e.viewMode = p.ViewMode.DECK
                    }
                }, e.memoryOtherPageIndex = 0, e._onClickOther = function () {
                    null != e.deckId && e.viewMode != p.ViewMode.OTHER && (e.deckId = null, e.taskEditSupplyDeck.dispose(), e.taskEditSupplyDeck = null, e.layerTaskMain.removeChildren(), e.deckSelectView.focusOther(), e._startTaskEditSupplyOther(), e.viewMode = p.ViewMode.OTHER)
                }, e._onUpdateCheckForDeck = function (t) {
                    var i = e.taskEditSupplyDeck.getSupplyEdit(),
                        n = i.getMemShipIds(),
                        o = h.SupplyUtil.CalcRequireMaterials(n),
                        s = o.ammo,
                        a = o.fuel,
                        _ = r.default.model.useItem.get(31).count,
                        l = r.default.model.useItem.get(32).count,
                        u = s <= l,
                        c = a <= _;
                    e._updateTypeSelectButton(u, c, s, a), e._updateButtonAlls(), t && e._updateShowcase(u, c, s, a)
                }, e._onUpdateCheckFoShowcase = function () {
                    var t = e.taskEditSupplyDeck.getSupplyEdit(),
                        i = t.getMemShipIds(),
                        n = h.SupplyUtil.CalcRequireMaterials(i),
                        o = n.ammo,
                        s = n.fuel,
                        a = r.default.model.useItem.get(31).count,
                        _ = r.default.model.useItem.get(32).count,
                        l = o <= _,
                        u = s <= a;
                    e._updateShowcase(l, u, o, s)
                }, e._onUpdateCheckForOther = function () {
                    var t = e.taskEditSupplyOther.getSupplyEdit(),
                        i = t.getMemShipIds(),
                        n = h.SupplyUtil.CalcRequireMaterials(i),
                        o = n.ammo,
                        s = n.fuel,
                        a = r.default.model.useItem.get(31).count,
                        _ = r.default.model.useItem.get(32).count,
                        l = o <= _,
                        u = s <= a;
                    e._updateShowcase(l, u, o, s), e._updateTypeSelectButton(l, u, o, s), e.supplyTypeSelectButton.updateButton(!1, !1)
                }, e
            }
            return n(e, t), e.prototype.preInitialize = function () {
                this.layerBase = new PIXI.Container, this.con_bg1 = new PIXI.Sprite(O.COMMON_MAIN.getTexture(12)), this.con_bg1.position.set(150, 135), this.con_bg1.alpha = .6, this.layerBase.addChild(this.con_bg1), this.deckSelectView = new v.DeckSelectView, this.deckSelectView.position.set(203, 164), this.layerBase.addChild(this.deckSelectView), this.materialCounterView = new w.MaterialCounterView, this.materialCounterView.position.set(595, 158), this.layerBase.addChild(this.materialCounterView), this.headerMain = new g.HeaderMain, this.headerMain.position.set(0, 102), this.layerBase.addChild(this.headerMain), r.default.model.deck.isCombined() && (this.combinedView = new _.CombinedView, this.combinedView.position.set(196, 155), this.layerBase.addChild(this.combinedView)), this.layerTaskOverlay = new PIXI.Container, this.supplyShowcaseView = new x.SupplyShowcaseView, this.supplyShowcaseView.position.set(900, 135), this.layerTaskOverlay.addChild(this.supplyShowcaseView), this.supplyTypeSelectButton = new I.SupplyTypeSelectButton, this.supplyTypeSelectButton.position.set(18, 506), this.supplyShowcaseView.addChild(this.supplyTypeSelectButton), this.headerSupply = new b.HeaderSupply, this.headerSupply.position.set(900, 102), this.layerTaskOverlay.addChild(this.headerSupply), this.txt_supply = new PIXI.Sprite(T.SUPPLY_MAIN.getTexture(32)), this.layerTaskOverlay.addChild(this.txt_supply), this.layerTaskMain = new PIXI.Container, this.otherShips = r.default.model.ship.getAllOther(), s.ShipUtil.sort(this.otherShips, 1), this.addChild(this.layerBase, this.layerTaskMain, this.layerTaskOverlay)
            }, e.prototype.initialize = function () {
                var t = r.default.model.deck.getAll().length,
                    e = r.default.model.ship.getAllOther(),
                    i = e.length;
                this.deckSelectView.initDeckCount(t), this.deckSelectView.initOtherShipCount(i)
            }, e.prototype._startTaskEditSupplyDeck = function (t) {
                var e = this,
                    i = function () {
                        r.default.view.clickGuard = !0;
                        var t, i = e.taskEditSupplyDeck.getSupplyEdit(),
                            n = i.getMemShipIds();
                        if (1 == n.length) t = r.default.model.ship.get(n[0]).mstID;
                        else {
                            var o = r.default.model.deck.get(e.deckId);
                            if (o.getCount() == n.length) t = o.getShipModel(0).mstID;
                            else {
                                var s = Math.floor(Math.random() * n.length);
                                t = r.default.model.ship.get(n[s]).mstID
                            }
                        }
                        e._CallSupplyAll(n, t, function () {
                            e.taskEditSupplyDeck.updateDeck(e.deckId), r.default.view.clickGuard = !1
                        })
                    },
                    n = function () {
                        e.taskEditSupplyDeck.onMouseOverSupplyAll2(), e._onUpdateCheckFoShowcase()
                    },
                    o = function () {
                        e.taskEditSupplyDeck.onMouseOutSupplyAll2()
                    },
                    s = function () {
                        r.default.view.clickGuard = !0, e.taskEditSupplyDeck.onClickSupplyAll2(), e._onUpdateCheckForDeck(!0);
                        var t, i = e.taskEditSupplyDeck.getSupplyEdit(),
                            n = i.getMemShipIds(),
                            o = r.default.model.deck.get(e.deckId),
                            s = e.getDeckSupllyShip(),
                            a = h.SupplyUtil.CalcRequireMaterials(s);
                        t = 0 == a.ammo && 0 == a.fuel && a.baux > 0 ? r.default.model.ship.get(n[0]).mstID : o.getShipModel(0).mstID, e._CallSupplyAll(n, t, function () {
                            e.taskEditSupplyDeck.updateDeck(e.deckId), r.default.view.clickGuard = !1
                        })
                    },
                    a = function () {
                        r.default.view.clickGuard = !0, e.taskEditSupplyDeck.onClickSupplyBaux();
                        var t = e.taskEditSupplyDeck.getSupplyEdit(),
                            i = t.getMemShipIds(),
                            n = r.default.model.ship.get(i[0]).mstID;
                        e._CallSupplyBaux(i, n, function () {
                            e.taskEditSupplyDeck.updateDeck(e.deckId), r.default.view.clickGuard = !1
                        })
                    },
                    _ = function () {
                        r.default.view.clickGuard = !0;
                        var t = e.taskEditSupplyDeck.getSupplyEdit(),
                            i = t.getMemShipIds();
                        e._CallSupplyFuel(i, function () {
                            e.taskEditSupplyDeck.updateDeck(e.deckId), r.default.view.clickGuard = !1
                        })
                    },
                    l = function () {
                        r.default.view.clickGuard = !0;
                        var t = e.taskEditSupplyDeck.getSupplyEdit(),
                            i = t.getMemShipIds();
                        e._CallSupplyAmmo(i, function () {
                            e.taskEditSupplyDeck.updateDeck(e.deckId), r.default.view.clickGuard = !1
                        })
                    };
                this.taskEditSupplyDeck = new y.TaskEditSupplyDeck(this.layerTaskMain), this.taskEditSupplyDeck.onUpdateSupplyEdit = this._onUpdateCheckForDeck, this.taskEditSupplyDeck.onClickSupplyAll = i, this.supplyTypeSelectButton.onClickAmmo = l, this.supplyTypeSelectButton.onClickFuel = _, this.supplyTypeSelectButton.onClickAll = i, this.supplyTypeSelectButton.onMouseOverAll2 = n, this.supplyTypeSelectButton.onMouseOutAll2 = o, this.supplyTypeSelectButton.onClickAll2 = s, this.supplyTypeSelectButton.onClickBaux = a, this.taskEditSupplyDeck.start(t)
            }, e.prototype._startTaskEditSupplyOther = function () {
                var t = this;
                this.taskEditSupplyOther = new m.TaskEditSupplyOther(this.layerTaskMain), this.taskEditSupplyOther.onUpdateSupplyEdit = this._onUpdateCheckForOther;
                var e = this.taskEditSupplyOther.getSupplyEdit(),
                    i = function () {
                        r.default.view.clickGuard = !0;
                        var i = e.getMemShipIds(),
                            n = r.default.model.ship.get(i[0]).mstID;
                        t._CallSupplyAll(i, n, function () {
                            t.taskEditSupplyOther.reload(), r.default.view.clickGuard = !1
                        })
                    },
                    n = function () {
                        r.default.view.clickGuard = !0;
                        var i = e.getMemShipIds();
                        t._CallSupplyAmmo(i, function () {
                            t.taskEditSupplyOther.reload(), r.default.view.clickGuard = !1
                        })
                    },
                    o = function () {
                        r.default.view.clickGuard = !0;
                        var i = e.getMemShipIds();
                        t._CallSupplyFuel(i, function () {
                            t.taskEditSupplyOther.reload(), r.default.view.clickGuard = !1
                        })
                    };
                this.supplyTypeSelectButton.onClickAll = i, this.supplyTypeSelectButton.onClickAmmo = n, this.supplyTypeSelectButton.onClickFuel = o, this.taskEditSupplyOther.start(this.otherShips, this.memoryOtherPageIndex)
            }, e.prototype.finalize = function () {
                this.taskEditSupplyDeck && this.taskEditSupplyDeck.dispose(), this.taskEditSupplyDeck = null, this.taskEditSupplyOther && this.taskEditSupplyOther.dispose(), this.taskEditSupplyOther = null, this.layerBase.removeChildren(), this.layerTaskMain.removeChildren(), this.layerTaskOverlay.removeChildren(), this.con_bg1 = null, this.deckSelectView.dispose(), this.deckSelectView = null, this.materialCounterView.dispose(), this.materialCounterView = null, this.headerMain.dispose(), this.headerMain = null, this.combinedView && (this.combinedView.dispose(), this.combinedView = null), this.supplyTypeSelectButton.dispose(), this.supplyTypeSelectButton = null, this.supplyShowcaseView.dispose(), this.supplyShowcaseView = null, this.headerSupply.dispose(), this.headerSupply = null, this.txt_supply = null, this.layerBase = null, this.layerTaskMain = null, this.layerTaskOverlay = null, this.otherShips = null, this.removeChildren()
            }, e.prototype.start = function () {
                this.viewMode = p.ViewMode.DECK, this.deckSelectView.onClickDeck = this._onClickDeck, this.deckSelectView.onClickOther = this._onClickOther;
                var t = r.default.model.useItem.get(31).count,
                    e = r.default.model.useItem.get(32).count;
                this.materialCounterView.update(t, e), this.deckSelectView.focusDeck(1), this.deckId = 1, this._startTaskEditSupplyDeck(1), this.combinedView && this.combinedView.activate()
            }, e.prototype.getDeckSupllyShip = function () {
                for (var t = r.default.model.deck.get(this.deckId), e = t.getShipList(), i = [], n = 0; n < e.length; n++) {
                    var o = e[n];
                    if (o) {
                        h.SupplyUtil.CheckRequireSupplyShipAll(o.memID) && i.push(o.memID)
                    }
                }
                return i
            }, e.prototype._animationBauxTelop = function () {
                createjs.Tween.get(this.txt_supply).to({
                    alpha: 0,
                    x: o.default.width,
                    y: 90
                }).to({
                    alpha: 1,
                    x: o.default.width / 2
                }, 1500).to({
                    alpha: 0,
                    x: 525
                }, 1e3)
            }, e.prototype._CallSupplyAll = function (t, e, i) {
                var n = this,
                    o = h.SupplyUtil.CalcRequireMaterials(t),
                    s = r.default.model.useItem.get(32).count;
                0 < o.ammo && o.ammo <= s && this.supplyShowcaseView.playSupplyAmmo(function () {});
                var a = r.default.model.useItem.get(31).count;
                0 < o.fuel && o.fuel <= a && this.supplyShowcaseView.playSupplyFuel(function () {});
                var _ = new l.APIConnector,
                    p = new u.ChargeAPI(3, t);
                _.add(p), 40 == r.default.model.basic.getTutorialProgress() && _.add(new c.UpdateTutorialAPI(50)), _.start(function () {
                    r.default.sound.voice.play(e.toString(), 27);
                    var t = r.default.model.useItem.get(31).count,
                        o = r.default.model.useItem.get(32).count;
                    n.materialCounterView.update(t, o), p.usedBauxite && n._animationBauxTelop(), i()
                })
            }, e.prototype._CallSupplyAmmo = function (t, e) {
                var i = this;
                this.supplyShowcaseView.playSupplyAmmo(function () {});
                var n = new l.APIConnector,
                    o = new u.ChargeAPI(2, t);
                n.add(o), 40 == r.default.model.basic.getTutorialProgress() && n.add(new c.UpdateTutorialAPI(50)), n.start(function () {
                    var t = r.default.model.useItem.get(31).count,
                        n = r.default.model.useItem.get(32).count;
                    i.materialCounterView.update(t, n), o.usedBauxite && i._animationBauxTelop(), e()
                })
            }, e.prototype._CallSupplyFuel = function (t, e) {
                var i = this;
                r.default.view.clickGuard = !0, this.supplyShowcaseView.playSupplyFuel(function () {});
                var n = new l.APIConnector,
                    o = new u.ChargeAPI(1, t);
                n.add(o), 40 == r.default.model.basic.getTutorialProgress() && n.add(new c.UpdateTutorialAPI(50)), n.start(function () {
                    var t = r.default.model.useItem.get(31).count,
                        n = r.default.model.useItem.get(32).count;
                    i.materialCounterView.update(t, n), o.usedBauxite && i._animationBauxTelop(), e()
                })
            }, e.prototype._CallSupplyBaux = function (t, e, i) {
                var n = this;
                r.default.view.clickGuard = !0;
                var o = new l.APIConnector,
                    s = new u.ChargeAPI(0, t);
                o.add(s), 40 == r.default.model.basic.getTutorialProgress() && o.add(new c.UpdateTutorialAPI(50)), o.start(function () {
                    r.default.sound.voice.play(e.toString(), 27), s.usedBauxite && n._animationBauxTelop(), i()
                })
            }, e.prototype._updateTypeSelectButton = function (t, e, i, n) {
                this.supplyTypeSelectButton.update(0 < n && e, 0 < i && t), this.supplyShowcaseView.hideAlert(), 0 == t && 0 == e ? this.supplyShowcaseView.showAlert("\u88dc\u7d66\u306b\u5fc5\u8981\u306a\u71c3\u6599\u30fb\u5f3e\u85ac\u304c\u8db3\u308a\u307e\u305b\u3093") : 0 == e ? this.supplyShowcaseView.showAlert("\u88dc\u7d66\u306b\u5fc5\u8981\u306a\u71c3\u6599\u304c\u8db3\u308a\u307e\u305b\u3093") : 0 == t && this.supplyShowcaseView.showAlert("\u88dc\u7d66\u306b\u5fc5\u8981\u306a\u5f3e\u85ac\u304c\u8db3\u308a\u307e\u305b\u3093")
            }, e.prototype._updateButtonAlls = function () {
                if (null != r.default.model.deck.get(this.deckId).expedition) this.supplyTypeSelectButton.updateButton(!1, !1);
                else {
                    var t = this.getDeckSupllyShip(),
                        e = h.SupplyUtil.CalcRequireMaterials(t),
                        i = e.ammo,
                        n = e.fuel,
                        o = e.baux,
                        s = r.default.model.useItem.get(31).count,
                        a = r.default.model.useItem.get(32).count,
                        _ = r.default.model.useItem.get(34).count,
                        l = 0 < n || 0 < i || 0 < o,
                        u = 0 < o,
                        c = i <= a,
                        p = n <= s,
                        d = o <= _,
                        f = u && d,
                        y = l && p && c && d;
                    this.supplyTypeSelectButton.updateButton(f, y)
                }
            }, e.prototype._updateShowcase = function (t, e, i, n) {
                this.supplyShowcaseView.updateAmmoCount(i, t), this.supplyShowcaseView.updateFuelCount(n, e), this.supplyShowcaseView.playAnimationAmmo(i), this.supplyShowcaseView.playAnimationFuel(n)
            }, e.prototype.getPreInitializeTask = function (t) {
                return new d.PreInitializeTask(this)
            }, e.prototype.getFinalizeTask = function () {
                return new f.FinalizeTask(this)
            }, e
        }(a.SceneBase);
    e.SupplyScene = C
}