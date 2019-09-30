const function768 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(34),
        r = i(28),
        s = i(21),
        a = i(10),
        _ = i(71),
        l = i(220),
        u = i(166),
        c = i(221),
        h = i(769),
        p = i(770),
        d = i(771),
        f = i(88),
        y = i(772),
        m = i(773),
        g = i(774),
        v = i(775),
        b = i(89),
        w = i(51),
        x = i(137),
        I = i(786),
        T = i(798),
        O = i(816),
        C = i(834),
        P = i(840),
        k = i(138),
        S = i(6),
        M = i(843),
        A = i(844),
        E = i(113),
        j = i(111),
        N = i(845),
        L = i(8),
        B = function () {
            function t(t) {
                var e = this;
                this._onClickExtension = function () {
                    e.taskExtension = new P.TaskExtension(n.default.view.overLayer);
                    var t = function () {
                            e._updateShipDetail_(e.memShipId)
                        },
                        i = function () {
                            e.taskExtension.dispose(), e.taskExtension = null
                        };
                    e.taskExtension.onUpdateShip = t, e.taskExtension.onComplete = i, e.taskExtension.start(e.memShipId)
                }, this._onClickMarriage = function () {
                    n.default.view.clickGuard = !1;
                    var t = function () {
                            switch (e._updateShipDetail_(e.memShipId), e.deckId) {
                                case null:
                                    var t = 0,
                                        i = n.default.model.ship.getAllOther();
                                    r.ShipUtil.sort(i, 1), i = i.reverse(), i.forEach(function (i, n) {
                                        i.memID == e.memShipId && (t = Math.floor(n / w.RemodelConst.ITEM_NUM))
                                    }), e._updateOtherShipSource_(i), e._changeOtherShipPage_(t);
                                    break;
                                default:
                                    e._updateShipSlot_(e.deckId, e.shipInDeckOrigin)
                            }
                        },
                        i = function () {
                            e.taskMarriage.dispose(), e.taskMarriage = null
                        };
                    e.taskMarriage = new C.TaskMarriage(e.mainView), e.taskMarriage.onUpdateShip = t, e.taskMarriage.onComplete = i, e.taskMarriage.start(e.memShipId)
                }, this._onClickKindaika = function () {
                    var t = function () {
                            var t = n.default.model.deck.getIDs(),
                                i = n.default.model.ship.getAllOther();
                            if (r.ShipUtil.sort(i, 1), e._updateOtherShipSource_(i), e._updateDeckSelector_(t, i.length), e._updateShipDetail_(e.memShipId), i = i.reverse(), null == e.deckId) {
                                var o = -1;
                                i.forEach(function (t, i) {
                                    t.memID == e.memShipId && (o = Math.floor(i / w.RemodelConst.ITEM_NUM))
                                }), e.deckSelectView.focusOther(), e._changeOtherShipPage_(o)
                            } else {
                                e._updateShipSlot_(e.deckId, e.shipInDeckOrigin);
                                var s = n.default.model.deck.get(e.deckId),
                                    a = s.isInDeck(e.memShipId),
                                    _ = a - e.shipInDeckOrigin;
                                e.deckCraneFrame.focus(_), e.deckCraneFrame.moveCraneImmidiate(_), e.deckSelectView.focusDeck(e.deckId)
                            }
                        },
                        i = function () {
                            e.taskKindaika.dispose(), e.taskKindaika = null
                        };
                    e.taskKindaika = new T.TaskKindaika(e.mainView), e.taskKindaika.onUpdateShip = t, e.taskKindaika.onComplete = i, e.taskKindaika.start(e.memShipId)
                }, this._onClickKaizoButton = function () {
                    var t = function () {
                        switch (e._updateShipDetail_(e.memShipId), e.deckId) {
                            case null:
                                var t = 0,
                                    i = n.default.model.ship.getAllOther();
                                r.ShipUtil.sort(i, 1), i = i.reverse(), i.forEach(function (i, n) {
                                    i.memID == e.memShipId && (t = Math.floor(n / w.RemodelConst.ITEM_NUM))
                                }), e._updateOtherShipSource_(i), e._changeOtherShipPage_(t);
                                break;
                            default:
                                e._updateShipSlot_(e.deckId, e.shipInDeckOrigin)
                        }
                    };
                    e.taskKaizo = new O.TaskKaizo(e.mainView), e.taskKaizo.start(e.memShipId, t, function () {
                        e.taskKaizo.dispose(), e.taskKaizo = null
                    })
                }, this._onClickExtraSlot = function () {
                    var t = function () {
                            e._updateShipDetail_(e.memShipId)
                        },
                        i = function () {
                            e.taskChoiceSlotItem.dispose(), e.taskChoiceSlotItem = null, k.SceneMemory.slotItemFilter = n, k.SceneMemory.slotItemPage = o, k.SceneMemory.listMode = r
                        },
                        n = k.SceneMemory.slotItemFilter,
                        o = k.SceneMemory.slotItemPage,
                        r = k.SceneMemory.listMode;
                    k.SceneMemory.slotItemFilter = 0, k.SceneMemory.slotItemPage = 0, k.SceneMemory.listMode = x.SlotListMode.UNSET, e.taskChoiceSlotItem = new I.TaskChoiceSlotItem(e.mainView, e.shipDetail), e.taskChoiceSlotItem.onUpdateSlotItem = t, e.taskChoiceSlotItem.onComplete = i, e.taskChoiceSlotItem.start(e.memShipId, -1, e.shipVoice)
                }, this._onClickDetachExtraSlot = function () {
                    var t = e.memShipId,
                        i = new o.APIConnector,
                        r = new c.SlotSetExAPI(t, -1),
                        s = new u.Ship3API(t),
                        a = function () {
                            n.default.view.clickGuard = !1, e._updateShipDetail_(t)
                        };
                    S.SE.play("106"), n.default.view.clickGuard = !0, i.add(r).add(s), i.start(a)
                }, this._onClickDetachAll = function () {
                    var t = e.memShipId,
                        i = new o.APIConnector,
                        r = new h.UnsetSlotAll(t),
                        s = new u.Ship3API(t),
                        a = function () {
                            n.default.view.clickGuard = !1, e._updateShipDetail_(t)
                        };
                    S.SE.play("106"), n.default.view.clickGuard = !0, i.add(r).add(s), i.start(a)
                }, this._onClickDetach = function (t) {
                    var i = e.memShipId,
                        r = new l.SlotSetAPI(i, -1, t),
                        s = new u.Ship3API(i),
                        a = new o.APIConnector;
                    S.SE.play("106");
                    var _ = function () {
                        n.default.view.portMain.updateInfo(), n.default.view.clickGuard = !1, e._updateShipDetail_(i)
                    };
                    n.default.view.clickGuard = !0, a.add(r).add(s), a.start(_)
                }, this._onMouseDownSlot = function (t, i) {
                    var o = e.memShipId,
                        r = n.default.model.ship.get(o),
                        s = r.getSlotitems(),
                        a = n.default.model.deck.isInDeck(r.memID);
                    if (a) {
                        if (n.default.model.deck.get(a[0]).expedition) return
                    }
                    if (!r.isRepair() && (0 != s.length && null != s[t])) {
                        var _ = {
                            x: e.shipDetail.x + e.slotItemSlotBox.x,
                            y: e.shipDetail.y + e.slotItemSlotBox.y
                        };
                        e._slotDragging = new N.SlotItemDragging(_, i, t, e.slotItemSlotBox.slotItemSlots, s, e._onDropSlotItem, e._removeSlotDraggingLayer), n.default.view.overLayer.addChild(e._slotDragging)
                    }
                }, this._removeSlotDraggingLayer = function () {
                    e._slotDragging.dispose(), n.default.view.overLayer.removeChild(e._slotDragging), e._slotDragging = null
                }, this._onMouseOut = function () {
                    e._slotDragging && e._slotDragging.inDraggingEventWaiting() && e._slotDragging.cancel()
                }, this._onMouseUp = function (t) {
                    e._slotDragging && e._slotDragging.inDraggingEventWaiting() && e._slotDragging.cancel(), e._onClickShipDetailSlot(t)
                }, this._onDropSlotItem = function (t, i, o) {
                    if (t != i && !(t < o.length - 1 && null == o[t + 1] && i > t || i >= o.length)) {
                        var r = n.default.model.ship.get(e.memShipId);
                        if ((553 === r.mstID || 554 === r.mstID) && i > -1) {
                            var s = [2, 3],
                                a = o[t].equipType,
                                _ = null == o[i] ? null : o[i].equipType;
                            if (s.indexOf(a) > -1 && i >= 2) return !1;
                            if (s.indexOf(_) > -1 && t >= 2) return !1
                        }
                        i > -1 ? e._changeSlotItem(t, i) : e._removeSlotItem(t)
                    }
                }, this._changeSlotItem = function (t, i) {
                    S.SE.play("240"), e.shipVoice.play(e.memShipId);
                    var o = new L.AreaBox(0);
                    n.default.view.overLayer.addChild(o), new p.SlotExchangeIndexAPI(e.memShipId, t, i).start(function () {
                        n.default.view.portMain.updateInfo(), e._updateShipDetail_(e.memShipId), n.default.view.overLayer.removeChild(o)
                    })
                }, this._removeSlotItem = function (t) {
                    S.SE.play("106");
                    var i = new L.AreaBox(0);
                    n.default.view.overLayer.addChild(i), (new o.APIConnector).add(new l.SlotSetAPI(e.memShipId, -1, t)).add(new u.Ship3API(e.memShipId)).start(function () {
                        n.default.view.portMain.updateInfo(), e._updateShipDetail_(e.memShipId), n.default.view.overLayer.removeChild(i)
                    })
                }, this._onClickShipDetailSlot = function (t) {
                    var i = new I.TaskChoiceSlotItem(e.mainView, e.shipDetail);
                    i.onComplete = function () {
                        e.taskChoiceSlotItem.dispose(), e.taskChoiceSlotItem = null
                    }, i.onUpdateSlotItem = function () {
                        e._updateShipDetail_(e.memShipId)
                    }, e.taskChoiceSlotItem = i, i.start(e.memShipId, t, e.shipVoice)
                }, this._onClickShipSlot = function (t, i) {
                    e.memShipId != i && (e.deckCraneFrame.focus(t), e.deckCraneFrame.moveCrane(t), e._updateShip_(i))
                }, this._onClickOtherListItem = function (t) {
                    e.memShipId != t && e._updateShip_(t)
                }, this._onClickArrowTop = function () {
                    var t = e.shipInDeckOrigin;
                    t--;
                    var i = n.default.model.deck.get(e.deckId),
                        o = i.isInDeck(e.memShipId),
                        r = o - t;
                    if (e.shipSlots.length <= r) {
                        var s = i.getShipMemID(t + (e.shipSlots.length - 1));
                        e._updateShip_(s), r = e.shipSlots.length - 1, o = e.shipSlots.length - 1
                    }
                    e._updateShipSlot_(e.deckId, t), e.deckCraneFrame.focus(r), e.deckCraneFrame.moveCraneImmidiate(r)
                }, this._onClickArrowBottom = function () {
                    var t = e.shipInDeckOrigin;
                    t++;
                    var i = n.default.model.deck.get(e.deckId),
                        o = i.isInDeck(e.memShipId),
                        r = o - t;
                    if (r < 0) {
                        var s = i.getShipMemID(t);
                        e._updateShip_(s), r = 0, o = 0
                    }
                    e._updateShipSlot_(e.deckId, t), e.deckCraneFrame.focus(r), e.deckCraneFrame.moveCraneImmidiate(r)
                }, this._onClickDeckTab = function (t) {
                    if (e.deckId != t) {
                        var i = n.default.model.deck.get(t);
                        e.deckCraneFrame.deFocus(), e.deckCraneFrame.hideCraneImmidiate();
                        var o = -1;
                        0 < i.getCount() && (o = i.getShipMemID(0), e.deckCraneFrame.focus(0), e.deckCraneFrame.insertCrane()), e.shipInDeckOrigin = 0, e._updateShipSlot_(t, e.shipInDeckOrigin), e._updateShip_(o), e._updateDeck_(t)
                    }
                }, this._onClickOtherTab = function () {
                    if (null != e.deckId) {
                        var t = e.otherShips[0].memID;
                        e._updateShip_(t), e._updateDeck_(null), e._changeOtherShipPage_(0)
                    }
                }, this._onClickMiniPager = function (t) {
                    if (e.pageIndex != t) {
                        var i = e.otherShips[t * w.RemodelConst.ITEM_NUM];
                        e._updateShip_(i.memID), e._changeOtherShipPage_(t)
                    }
                }, this.shipInDeckOrigin = 0, this.mainView = t, this.deckSelectView = new d.DeckSelectView, this.select_bg_crane01 = new PIXI.Sprite(_.REMODEL_MAIN.getTexture(43)), this.select_bg_crane02 = new PIXI.Sprite(_.REMODEL_MAIN.getTexture(44)), this.headerKansenSentaku = new f.TitleBar, this.headerKansenSentaku.initialize(s.COMMON_MAIN.getTexture(0), 195), this.shipSlots = new Array;
                for (var i = [
                        [0, 0],
                        [0, 81],
                        [0, 162],
                        [0, 243],
                        [0, 324],
                        [0, 405]
                    ], b = {
                        x: 206,
                        y: 222
                    }, B = 0; B < i.length; B++) {
                    var R = new M.ShipSlot;
                    R.position.x = i[B][0] + b.x, R.position.y = i[B][1] + b.y, this.shipSlots.push(R)
                }
                this.deckCraneFrame = new y.DeckCraneFrame, this.otherBackground = new PIXI.Sprite(s.COMMON_MAIN.getTexture(12)), this.miniPager = new m.MiniPager, this.otherShipList = new g.OtherShipList(10), this.otherShipFrame = new y.OtherShipFrame, this.arrowTopButton = new E.ArrowTopButton, this.arrowBottomButton = new E.ArrowBottomButton, n.default.model.deck.isCombined() && (this.combinedView = new j.CombinedView, this.combinedView.position.set(0, 0)), n.default.model.deck.exist3rdUnit && (this.icon3rdUnit = new PIXI.Sprite(a.COMMON_MISC.getTexture(186))), this.shipDetail = new v.ShipDetail, this.shipDetailEmpty = new v.ShipDetailEmpty, this.kaizoButton = this.shipDetail.kaizoButton, this.kindaikaButton = this.shipDetail.kindaikaButton, this.slotItemSlotBox = this.shipDetail.slotItemSlotBox, this.extraSlotItemSlot = this.shipDetail.extraSlotItemSlot, this.shipCard = this.shipDetail.shipCard, this.detachAllButton = this.shipDetail.detachAllButton, this.shipParameter = this.shipDetail.shipParameter, this.extensionButton = this.shipDetail.extensionButton, this.marriageButton = this.shipDetail.marriageButton, this.kindaikaButton.onClick = this._onClickKindaika, this.kaizoButton.onClick = this._onClickKaizoButton, this.extraSlotItemSlot.onClick = this._onClickExtraSlot, this.extraSlotItemSlot.onClickDetach = this._onClickDetachExtraSlot, this.detachAllButton.onClick = this._onClickDetachAll, this.slotItemSlotBox.mousedown = this._onMouseDownSlot, this.slotItemSlotBox.onMouseUp = this._onMouseUp, this.slotItemSlotBox.onMouseOut = this._onMouseOut, this.slotItemSlotBox.onClickDetach = this._onClickDetach, this.extensionButton.onClick = this._onClickExtension, this.marriageButton.onClick = this._onClickMarriage, this.deckSelectView.onClickDeck = this._onClickDeckTab, this.deckSelectView.onClickOther = this._onClickOtherTab;
                for (var D = 0; D < this.shipSlots.length; D++) this.shipSlots[D].onClick = this._onClickShipSlot;
                this.miniPager.onClick = this._onClickMiniPager, this.otherShipList.onClick = this._onClickOtherListItem, this.arrowTopButton.onClick = this._onClickArrowTop, this.arrowBottomButton.onClick = this._onClickArrowBottom, this.combinedView && (this.combinedView.position.set(197, 150), this.combinedView.activate()), this.icon3rdUnit && this.icon3rdUnit.position.set(282, 139), this.memShipId = null, this.deckId = null, this.pageIndex = null, this.shipVoice = new A.ShipVoice([9, 10, 26])
            }
            return t.prototype.dispose = function () {
                this.taskChoiceSlotItem && this.taskChoiceSlotItem.dispose(), this.taskChoiceSlotItem = null, this.taskKindaika && this.taskKindaika.dispose(), this.taskKindaika = null, this.taskKaizo && this.taskKaizo.dispose(), this.taskKaizo = null, this.taskMarriage && this.taskMarriage.dispose(), this.taskMarriage = null, this.taskExtension && this.taskExtension.dispose(), this.mainView.removeChildren(), this.taskExtension = null, this.kindaikaButton.onClick = this._onClickKindaika = null, this.kaizoButton.onClick = this._onClickKaizoButton = null, this.extraSlotItemSlot.onClick = this._onClickExtraSlot = null, this.extraSlotItemSlot.onClickDetach = this._onClickDetachExtraSlot = null, this.detachAllButton.onClick = this._onClickDetachAll = null, this.slotItemSlotBox.mousedown = this._onMouseDownSlot = null, this.slotItemSlotBox.onClickDetach = this._onClickDetach = null, this.slotItemSlotBox.onMouseUp = this._onMouseUp = null, this.slotItemSlotBox.onMouseOut = this._onMouseOut = null, this.extensionButton.onClick = this._onClickExtension = null, this.marriageButton.onClick = this._onClickMarriage = null, this.deckSelectView.onClickDeck = this._onClickDeckTab = null, this.deckSelectView.onClickOther = this._onClickOtherTab = null;
                for (var t = 0; t < this.shipSlots.length; t++) this.shipSlots[t].onClick = null, this.shipSlots[t].dispose(), this.shipSlots[t] = null;
                this._onClickShipSlot = null, this.miniPager.onClick = this._onClickMiniPager = null, this.otherShipList.onClick = this._onClickOtherListItem = null, this.deckSelectView && this.deckSelectView.dispose(), this.shipDetail && this.shipDetail.dispose(), this.shipDetailEmpty && this.shipDetailEmpty.dispose(), this.simpleSlotItemSlot && this.simpleSlotItemSlot.dispose(), this.headerKansenSentaku && this.headerKansenSentaku.dispose(), this.combinedView && this.combinedView.dispose(), this.deckCraneFrame && this.deckCraneFrame.dispose(), this.otherShipFrame && this.otherShipFrame.dispose(), this.miniPager && this.miniPager.dispose(), this.otherShipList && this.otherShipList.dispose(), this.arrowTopButton && this.arrowTopButton.dispose(), this.arrowBottomButton && this.arrowBottomButton.dispose(), this.mainView = null, this.headerKansenSentaku = null, this.slotItemSlotBox = null, this.kindaikaButton = null, this.kaizoButton = null, this.shipDetail = null, this.shipDetailEmpty = null, this.extraSlotItemSlot = null, this.shipCard = null, this.detachAllButton = null, this.shipParameter = null, this.extensionButton = null, this.marriageButton = null, this.simpleSlotItemSlot = null, this.deckSelectView = null, this.select_bg_crane01 = null, this.select_bg_crane02 = null, this.shipSlots = null, this.deckCraneFrame = null, this.otherBackground = null, this.miniPager = null, this.otherShipList = null, this.otherShipFrame = null, this.memShipId = null, this.deckId = null
            }, t.prototype.start = function (t, e) {
                var i = n.default.model.deck.getIDs(),
                    o = n.default.model.ship.getAllOther();
                r.ShipUtil.sort(o, 1), o = o.reverse(), this._updateOtherShipSource_(o), this._updateDeckSelector_(i, o.length), this._updateShipSlot_(t, this.shipInDeckOrigin), this._updateShip_(e), this._updateDeck_(t), this.deckCraneFrame.focus(0), this.deckCraneFrame.insertCrane()
            }, t.prototype._updateDeck_ = function (t) {
                switch (t) {
                    case null:
                        this.deckSelectView.focusOther(), this._changeOtherLayout_();
                        break;
                    default:
                        this.deckSelectView.focusDeck(t), this._changeDeckLayout_()
                }
                this.deckId = t
            }, t.prototype._updateShip_ = function (t) {
                this._updateEmptyShipDetail_(), -1 != t && this._updateShipDetail_(t), k.SceneMemory.slotItemPage = 0, k.SceneMemory.slotItemFilter = 0, k.SceneMemory.listMode = x.SlotListMode.UNSET, this.memShipId = t
            }, t.prototype._changeOtherShipPage_ = function (t) {
                this.miniPager.focus(t);
                var e = this.otherShips.slice(10 * t, 10 * t + 10);
                this.otherShipList.update(e), this.pageIndex = t
            }, t.prototype._updateOtherShipSource_ = function (t) {
                var e = b.RemodelUtil.calcPageCount(t.length);
                this.miniPager.init(e), this.otherShips = t
            }, t.prototype._updateEmptyShipDetail_ = function () {
                this.shipDetail.visible = !1, this.shipDetailEmpty.visible = !0
            }, t.prototype._updateShipDetail_ = function (t) {
                this.shipDetailEmpty.visible = !1, this.shipDetail.visible = !0;
                var e = n.default.model.ship.get(t),
                    i = n.default.model.ship.getMst(e.mstID),
                    o = r.ShipUtil.isMaxGradeUp(e, i, !1),
                    s = r.ShipUtil.isMaxGradeUp(e, i, !0),
                    a = !1,
                    _ = n.default.model.deck.isInDeck(e.memID);
                if (_) {
                    var l = _[0];
                    a = null != n.default.model.deck.get(l).expedition
                }
                var u = n.default.model.useItem.get(w.RemodelConst.REINFORCEMENT_WORK_ITEMID).count,
                    c = e.isRepair(),
                    h = 0 == a && 0 == c,
                    p = e.getSlotitems(),
                    d = e.isExtraSlot(),
                    f = e.getSlotitemEx(),
                    y = e.level,
                    m = h && 0 == a && 0 == c && 0 == s;
                this.kindaikaButton.update(m);
                var g = h && b.RemodelUtil.canKaizo(e.mstID, e.level);
                this.kaizoButton.update(g), this.shipDetail.update(e.name, y, e.hpNow, e.hpMax, e.starNum, o), this.shipCard.update(e, a), this.shipParameter.update(e.hpMax, e.soukou, e.kaihi, e.tousai, e.speed, e.range, e.karyoku, e.raisou, e.taiku, e.taisen, e.sakuteki, e.lucky), this._updateExtraSlot_(d, f), this._updateExtensionButton_(e, u), this._updateMarriageButton_(y, a, c);
                var v = p.length,
                    x = 0 < v,
                    I = 0 != p.indexOf(null),
                    T = x && 0 == c && 0 == a,
                    O = T && 0 == c && I;
                this._updateSlotItem_(e, p, O, T), this._updateDetachAllButton_(v, O)
            }, t.prototype._changeDeckLayout_ = function () {
                this.mainView.removeChildren(), this.deckSelectView.position.set(204, 159), this.select_bg_crane01.position.set(478, 132), this.shipDetail.position.set(468, 141), this.shipDetailEmpty.position.set(468, 141), this.headerKansenSentaku.position.set(0, 102), this.deckCraneFrame.position.set(174, 143), this.mainView.addChild(this.headerKansenSentaku, this.deckSelectView), this.icon3rdUnit && this.mainView.addChild(this.icon3rdUnit), this.combinedView && this.mainView.addChild(this.combinedView);
                for (var t = 0; t < this.shipSlots.length; t++) this.mainView.addChild(this.shipSlots[t]);
                this.arrowTopButton.position.set(248, 188), this.arrowBottomButton.position.set(248, 653), this.mainView.addChild(this.deckCraneFrame, this.shipDetailEmpty, this.shipDetail), this.mainView.addChild(this.arrowTopButton, this.arrowBottomButton)
            }, t.prototype._changeOtherLayout_ = function () {
                this.mainView.removeChildren(), this.otherBackground.position.set(147, 134), this.miniPager.position.set(173, 672), this.otherShipList.position.set(180, 198), this.otherShipFrame.position.set(174, 143), this.mainView.addChild(this.otherBackground, this.headerKansenSentaku, this.deckSelectView), this.icon3rdUnit && this.mainView.addChild(this.icon3rdUnit), this.combinedView && this.mainView.addChild(this.combinedView), this.mainView.addChild(this.miniPager, this.otherShipList, this.otherShipFrame, this.shipDetail)
            }, t.prototype._updateShipSlot_ = function (t, e) {
                var i = n.default.model.deck.get(t),
                    o = null != i.expedition;
                i.getCount();
                i.getCount() <= this.shipSlots.length && (e = 0);
                for (var r = 0; r < this.shipSlots.length; r++) {
                    var s = e + r,
                        a = null;
                    a = i.getShipModel(s), this.deckCraneFrame.hideEmblem(r), this.shipSlots[r].empty(), a && (this.shipSlots[r].update(r, a, o), this.deckCraneFrame.updateEmblems(r, s))
                }
                this.arrowBottomButton.visible = !1, e + 1 + this.shipSlots.length <= n.default.model.deck.get(t).getCount() && (this.arrowBottomButton.visible = !0), this.arrowTopButton.visible = !1, 0 <= e - 1 && (this.arrowTopButton.visible = !0), this.shipInDeckOrigin = e
            }, t.prototype._updateDeckSelector_ = function (t, e) {
                this.deckSelectView.update(t, e)
            }, t.prototype._updateSlotItem_ = function (t, e, i, n) {
                this.slotItemSlotBox.clean();
                for (var o = 0; o < e.length; o++) {
                    var r = e[o],
                        s = t.getSlotitemTousai(o);
                    this.slotItemSlotBox.update(o, r, s, i, n)
                }
                this.slotItemSlotBox.hide(t.getSlotViewMax())
            }, t.prototype._updateDetachAllButton_ = function (t, e) {
                this.detachAllButton.visible = !1, e && (this.detachAllButton.update(t), this.detachAllButton.visible = !0)
            }, t.prototype._updateExtraSlot_ = function (t, e) {
                this.extraSlotItemSlot.visible = !1, t && (this.extraSlotItemSlot.clear(), e && this.extraSlotItemSlot.update(e), this.extraSlotItemSlot.visible = !0)
            }, t.prototype._updateExtensionButton_ = function (t, e) {
                var i = b.RemodelUtil.testExtensionableExtraslot(t, e);
                this.extensionButton.visible = !1, i && (this.extensionButton.visible = !0)
            }, t.prototype._updateMarriageButton_ = function (t, e, i) {
                this.marriageButton.visible = !1, this.marriageButton.interactiveChildren = this.marriageButton.buttonMode = !1, 99 == t && (this.marriageButton.visible = !0, 0 == e && 0 == i && (this.marriageButton.interactiveChildren = this.marriageButton.buttonMode = !0))
            }, t
        }();
    e.TaskIdleMain = B
}