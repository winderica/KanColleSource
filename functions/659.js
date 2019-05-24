const function659 = function (t, e, i) {
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
        r = i(6),
        s = i(17),
        a = i(48),
        _ = i(31),
        l = i(69),
        u = i(660),
        c = i(671),
        h = i(705),
        p = i(706),
        d = i(713),
        f = i(215),
        y = i(717),
        m = i(718),
        v = i(719),
        g = i(724),
        b = i(726),
        w = i(727),
        x = i(734),
        I = i(735),
        T = i(8),
        O = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.currentViewMode = null, e._onClickBreakDeck = function () {
                    var t = function () {
                        e.deckLayer.update(), s.COMBINABLE ? e._asyncCheckCombineStateAndRepair(function () {
                            o.default.view.clickGuard = !1
                        }) : o.default.view.clickGuard = !1
                    };
                    e.deckLayer.onBreakDeck(e.deckLayer.deckID, t)
                }, e._onDragging = function (t, i) {
                    var n = new I.ShipDragging(t, i, e.deckLayer.shipSlotDisplayLength, e._inDragging, e._onDrop, function () {
                        o.default.view.overLayer.removeChild(n)
                    });
                    o.default.view.overLayer.addChild(n)
                }, e._inDragging = function (t) {
                    t ? (e.presetButtonLayer.hide(), e.deckLayer.EditNameArea.writable = !1) : (e.presetButtonLayer.show(), e.deckLayer.EditNameArea.writable = !0)
                }, e._onDrop = function (t, i, n) {
                    if (t != i) {
                        var s = o.default.model.deck.get(e.deckLayer.deckID),
                            a = s.getCount();
                        if (1 != a || 1 != s.mstID) {
                            var u = t + e.deckLayer.shipInDeckOrigin,
                                c = i + e.deckLayer.shipInDeckOrigin;
                            if (!(u == a - 1 && i >= t)) {
                                var h = new _.APIConnector;
                                if (10 == o.default.model.basic.getTutorialProgress() && h.add(new l.UpdateTutorialAPI(20)), -1 == i) return h.add(new f.ChangeAPI(!0, s.mstID, u, -1)), void e._removeShip(h, t);
                                var p = o.default.model.ship.get(n);
                                h.add(new f.ChangeAPI(!0, s.mstID, c, n)), r.SE.play("235"), o.default.sound.voice.play(p.mstID.toString(), 13), c >= a && (i = a - e.deckLayer.shipInDeckOrigin - 1), e._changeShipSlot(h, i)
                            }
                        }
                    }
                }, e._removeShip = function (t, i) {
                    var n = new T.AreaBox(0);
                    o.default.view.overLayer.addChild(n), t.start(function () {
                        e.deckLayer.ShipSlotLayer.ShipSlots[i].closeAnimation(function () {
                            e.deckLayer.update(), s.COMBINABLE ? e._asyncCheckCombineStateAndRepair(function () {
                                o.default.view.overLayer.removeChild(n)
                            }) : o.default.view.overLayer.removeChild(n)
                        })
                    })
                }, e._changeShipSlot = function (t, i) {
                    var n = new T.AreaBox(0);
                    o.default.view.overLayer.addChild(n), t.start(function () {
                        var t = function () {
                                return e.deckLayer.update()
                            },
                            r = function () {
                                s.COMBINABLE ? e._asyncCheckCombineStateAndRepair(function () {
                                    o.default.view.overLayer.removeChild(n)
                                }) : o.default.view.overLayer.removeChild(n)
                            };
                        e.deckLayer.ShipSlotLayer.shutterAnimation(i, t, r)
                    })
                }, e._onClickDeckFlag = function (t) {
                    if (e.deckLayer.deckID != t) switch (e.deckLayer.shipInDeckOrigin = 0, e.currentViewMode) {
                        case 0:
                            e.deckLayer.updateDeck(t);
                            break;
                        case 1:
                            e.deckLayer.updateDeckSelector(t), e.presetEditLayer.update(t);
                            break;
                        case 2:
                            e.deckLayer.updateDeckSelector(t), e.presetExpansionLayer.update(t)
                    }
                }, e._onClickShipChange = function (t, i) {
                    e.presetButtonLayer.hide(), e.deckLayer.EditNameArea.writable = !1;
                    var n = o.default.model.deck.get(e.deckLayer.deckID),
                        a = (n.getShipModel(i), n.getCount());
                    e.taskChangeShip = new w.TaskChangeShip(e), e.taskChangeShip.onUpdateDeck = function () {
                        o.default.view.clickGuard = !0;
                        var n = o.default.model.deck.get(e.deckLayer.deckID),
                            _ = n.getShipModel(i),
                            l = n.getCount(),
                            u = e.deckLayer.ShipSlotLayer.ShipSlots[t];
                        l < a ? u.closeAnimation(function () {
                            e.deckLayer.update(), s.COMBINABLE ? e._asyncCheckCombineStateAndRepair(function () {
                                o.default.view.clickGuard = !1
                            }) : o.default.view.clickGuard = !1
                        }) : (r.SE.play("235"), o.default.sound.voice.play(_.mstID.toString(), 13), a < l ? (e.deckLayer.update(), u.close(), u.openAnimation(function () {
                            s.COMBINABLE ? e._asyncCheckCombineStateAndRepair(function () {
                                o.default.view.clickGuard = !1
                            }) : o.default.view.clickGuard = !1
                        })) : u.closeAnimation(function () {
                            e.deckLayer.update(), u.close(), u.openAnimation(function () {
                                s.COMBINABLE ? e._asyncCheckCombineStateAndRepair(function () {
                                    o.default.view.clickGuard = !1
                                }) : o.default.view.clickGuard = !1
                            })
                        }))
                    }, e.taskChangeShip.onComplete = function () {
                        e.presetButtonLayer.show(), e.taskChangeShip.dispose(), e.taskChangeShip = null, e.deckLayer.EditNameArea.writable = !0
                    }, e.taskChangeShip.start(e.deckLayer.deckID, i)
                }, e._onClickShipDetail = function (t) {
                    e.deckLayer.EditNameArea.writable = !1, e.presetButtonLayer.hide(), e.deckLayer.ShipSlotLayer.onShipDetail(t, e, function () {
                        e.deckLayer.EditNameArea.writable = !0, e.presetButtonLayer.show()
                    })
                }, e._onClickPresetChange = function (t) {
                    if (e.currentViewMode != t) {
                        switch (e.currentViewMode) {
                            case 1:
                                e.presetEditLayer.hide();
                                break;
                            case 2:
                                e.presetExpansionLayer.hide()
                        }
                        switch (t) {
                            case 1:
                                e._changeMode(1);
                                var i = o.default.model.deck.get(e.deckLayer.deckID);
                                e.deckLayer.EditNameArea.reload(i.name), e.presetEditLayer.show(e.deckLayer.deckID, e.presetList);
                                break;
                            case 2:
                                e._changeMode(2);
                                var i = o.default.model.deck.get(e.deckLayer.deckID);
                                e.deckLayer.EditNameArea.reload(i.name), e.presetExpansionLayer.show(e.deckLayer.deckID, e.presetList)
                        }
                    }
                }, e._onClickPresetBack = function () {
                    e._changeMode(0), e.deckLayer.update()
                }, e._onClickExpand = function (t) {
                    o.default.view.clickGuard = !0;
                    var i = new y.PresetSelectAPI(t, e.deckLayer.deckID);
                    r.SE.play("240"), i.start(function () {
                        for (var i = o.default.model.deck.get(e.deckLayer.deckID).getShipList(), n = new Array, a = 0; a < e.deckLayer.ShipSlotLayer.ShipSlots.length; a++) {
                            i[a + e.deckLayer.shipInDeckOrigin] && n.push(a)
                        }
                        s.COMBINABLE && o.default.model.deck.isCombined(), r.SE.play("235"), e.presetExpansionLayer.hide(), e.presetList.getPresetDeckData(t).__deleteLostShips__(), e._changeMode(0), e.deckLayer.update();
                        for (var _ = function () {}, l = function () {
                                s.COMBINABLE ? e._asyncCheckCombineStateAndRepair(function () {
                                    o.default.view.clickGuard = !1
                                }) : o.default.view.clickGuard = !1
                            }, a = 0; a < e.deckLayer.ShipSlotLayer.ShipSlots.length; a++) {
                            var u = e.deckLayer.ShipSlotLayer.ShipSlots[a];
                            u.close()
                        }
                        if (0 < n.length) {
                            for (var a = 0; a < n.length; a++) {
                                var c = _;
                                n.indexOf(a) == n.length - 1 && (c = l);
                                var u = e.deckLayer.ShipSlotLayer.ShipSlots[a];
                                u.openAnimation(c)
                            }
                            o.default.sound.voice.play(o.default.model.deck.get(e.deckLayer.deckID).getShipList()[0].mstID.toString(), 13)
                        } else l()
                    })
                }, e
            }
            return n(e, t), e.prototype.getPreInitializeTask = function (t) {
                return new v.PreInitializeTask(this)
            }, e.prototype.getInitializeTask = function (t) {
                return new b.InitializeTask(this)
            }, e.prototype.getPreFinalizeTask = function () {
                return new m.PreFinalizeTask(this)
            }, e.prototype.getFinalizeTask = function () {
                return new g.FinalizeTask(this)
            }, e.prototype.preInitialize = function (t) {
                this.presetList = t, this.backgroundLayer = new u.BackgroundLayer, this.backgroundLayer.init(), this.addChild(this.backgroundLayer), this.deckLayer = new c.DeckLayer(this._onClickDeckFlag), this.deckLayer.init(this._onClickBreakDeck), this.deckLayer.ShipSlotLayer.init(this._onDragging, this._onClickShipChange, this._onClickShipDetail), this.addChild(this.deckLayer), this.deckLayer.updateDeck(1), this.presetExpansionLayer = new d.PresetExpansionLayer(this._onClickPresetBack, this._onClickExpand), this.presetExpansionLayer.hide(), this.addChild(this.presetExpansionLayer), this.presetEditLayer = new p.PresetEditLayer(this._onClickPresetBack), this.presetEditLayer.hide(), this.addChild(this.presetEditLayer), this.presetButtonLayer = new h.PresetButtonLayer, this.presetButtonLayer.position.set(66, 514), this.presetButtonLayer.onClick = this._onClickPresetChange, this.presetButtonLayer.hide(), o.default.view.overLayer.addChild(this.presetButtonLayer), this._changeMode(0)
            }, e.prototype.initialize = function () {
                var t = o.default.model.basic.port_bgm_id;
                o.default.sound.bgm.play(t), this.presetButtonLayer.show(), this.deckLayer.EditNameArea.writable = !0
            }, e.prototype.prefinalize = function () {
                this.presetButtonLayer.hide(), this.deckLayer.EditNameArea.writable = !1
            }, e.prototype.finalize = function () {
                this.taskChangeShip && this.taskChangeShip.dispose(), this.taskChangeShip = null, this.presetEditLayer.dispose(), this.presetEditLayer = null, this.presetExpansionLayer.dispose(), this.presetExpansionLayer = null, this.deckLayer.dispose(), this.deckLayer = null, this.presetButtonLayer.dispose(), this.presetButtonLayer = null, this.backgroundLayer.dispose(), this.backgroundLayer = null, this.presetList = null, this.currentViewMode = null, this.removeChildren()
            }, e.prototype._changeMode = function (t) {
                switch (this.deckLayer.hide(), this.deckLayer.show(t), this.presetButtonLayer.update(t), t) {
                    case 0:
                        this.deckLayer.EditNameArea.writable = !0, this.deckLayer.EditNameArea.editable = !0;
                        break;
                    case 1:
                    case 2:
                        this.deckLayer.EditNameArea.editable = !1, this.deckLayer.EditNameArea.writable = !1
                }
                this.currentViewMode = t
            }, e.prototype._asyncCheckCombineStateAndRepair = function (t) {
                var e = this,
                    i = new x.TaskCheckCombineStateAndRepair(o.default.view.overLayer);
                i.onBroken = function () {
                    e.deckLayer.update()
                }, i.onComplete = function () {
                    i.dispose(), t()
                }, i.start()
            }, e
        }(a.SceneBase);
    e.OrganizeScene = O
}