const function782 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(5),
        o = i(0),
        r = i(50),
        s = i(31),
        a = i(332),
        _ = i(84),
        l = i(6),
        u = i(163),
        c = i(52),
        h = i(162),
        p = i(87),
        d = i(783),
        f = i(784),
        y = i(785),
        m = i(786),
        v = i(787),
        g = i(161),
        b = i(793),
        w = i(218),
        x = i(219),
        I = function () {
            function t(t, e) {
                var i = this;
                this.slotInShipChangeConfirm = null, this._excludeList = [], this._onClickBackArea = function () {
                    o.default.view.clickGuard = !0, i.backArea.width = n.default.width;
                    createjs.Tween.get(i.backArea).to({
                        alpha: 0
                    }, 125), createjs.Tween.get(i.slotItemList).to({
                        x: n.default.width
                    }, 125), createjs.Tween.get(i.shipDetail).to({
                        x: 468
                    }, 125).call(function () {
                        i.mainView.removeChild(i.slotItemList), i.mainView.removeChild(i.backArea), o.default.view.clickGuard = !1, i.onComplete()
                    })
                }, this._onClickDoubleBackAreaLeft = function () {
                    _.TaskLoadSlotResource.abortBy(i.changeConfirm), i.doubleBackArea.width = n.default.width, o.default.view.clickGuard = !0, createjs.Tween.get(i.changeConfirm).to({
                        x: n.default.width
                    }, 62);
                    createjs.Tween.get(i.doubleBackArea).to({
                        alpha: 0
                    }, 125), createjs.Tween.get(i.backArea).to({
                        alpha: 0
                    }, 125), createjs.Tween.get(i.shipDetail).to({
                        x: 468
                    }, 125), createjs.Tween.get(i.slotItemList).to({
                        x: n.default.width
                    }, 125).call(function () {
                        i.mainView.removeChild(i.slotItemList), i.mainView.removeChild(i.changeConfirm), i.mainView.removeChild(i.doubleBackArea), i.mainView.removeChild(i.backArea), o.default.view.clickGuard = !1
                    })
                }, this._onClickDoubleBackAreaRight = function () {
                    _.TaskLoadSlotResource.abortBy(i.changeConfirm), i.doubleBackArea.width = n.default.width, o.default.view.clickGuard = !0;
                    createjs.Tween.get(i.doubleBackArea).to({
                        alpha: 0
                    }, 125), createjs.Tween.get(i.changeConfirm).to({
                        x: n.default.width
                    }, 125).call(function () {
                        i.mainView.removeChild(i.changeConfirm), i.mainView.removeChild(i.doubleBackArea), o.default.view.clickGuard = !1
                    })
                }, this._onClickChangeButton = function () {
                    switch (_.TaskLoadSlotResource.abortBy(i.changeConfirm), i.mode) {
                        case h.SlotListMode.SET:
                            var t = i.memSlotItemId,
                                e = o.default.model.ship.get(i.setList[1]["" + t]),
                                r = o.default.model.ship.get(i.memShipId),
                                a = o.default.model.slot.get(t);
                            return i.changeConfrimFromOtherShip.update(e, r, a), i.changeConfrimFromOtherShip.position.set(225, 188), i.changeConfrimFromOtherShip.activate(), o.default.view.clickGuard = !0, i.slotInShipChangeConfirm = new m.SlotInShipChangeConfirm(i.changeConfrimFromOtherShip), o.default.view.overLayer.addChild(i.slotInShipChangeConfirm), void i.slotInShipChangeConfirm.show(function () {
                                o.default.view.clickGuard = !1
                            });
                        case h.SlotListMode.UNSET:
                            ;
                            o.default.view.clickGuard = !0;
                            var l = void 0;
                            l = i.isEditExtraSlot ? new x.SlotSetExAPI(i.memShipId, i.memSlotItemId) : new w.SlotSetAPI(i.memShipId, i.memSlotItemId, i.slotIndex);
                            var u = new s.APIConnector,
                                c = new g.Ship3API(i.memShipId);
                            u.add(l).add(c).start(function () {
                                i.onUpdateSlotItem(), createjs.Tween.get(i.backArea).to({
                                    alpha: 0
                                }, 125), createjs.Tween.get(i.slotItemList).to({
                                    x: n.default.width
                                }, 125), createjs.Tween.get(i.changeConfirm).to({
                                    x: n.default.width
                                }, 125), createjs.Tween.get(i.doubleBackArea).to({
                                    alpha: 0
                                }, 125), createjs.Tween.get(i.shipDetail).to({
                                    x: 468
                                }, 125).call(function () {
                                    i.mainView.removeChild(i.slotItemList), i.mainView.removeChild(i.changeConfirm), i.mainView.removeChild(i.doubleBackArea), i.mainView.removeChild(i.backArea), o.default.view.clickGuard = !1, i.onComplete()
                                })
                            }), i.shipVoice.play(i.memShipId)
                    }
                }, this._onClickYesOtherShipChange = function () {
                    o.default.view.clickGuard = !0, i.slotInShipChangeConfirm.hide(function () {
                        i.changeConfrimFromOtherShip.deactivate(), i.slotInShipChangeConfirm.dispose(), o.default.view.overLayer.removeChild(i.slotInShipChangeConfirm);
                        for (var t = i.slotIndex, e = i.memShipId, r = i.isEditExtraSlot ? 1 : 0, s = i.memSlotItemId, a = i.setList[1]["" + s], _ = -1, l = 0, u = o.default.model.ship.get(a), c = u.getSlotitems(), h = 0; h < c.length; h++) {
                            var p = c[h];
                            if (p && p.memID == s) {
                                _ = h;
                                break
                            }
                        }
                        if (-1 == _) {
                            var d = u.getSlotitemEx();
                            null != d && d.memID == s && (_ = 0, l = 1)
                        }
                        new b.SlotDepriveAPI(_, r, l, a, t, e).start(function () {
                            i.onUpdateSlotItem(), createjs.Tween.get(i.doubleBackArea).to({
                                alpha: 0
                            }, 125), createjs.Tween.get(i.backArea).to({
                                alpha: 0
                            }, 125), createjs.Tween.get(i.changeConfirm).to({
                                x: n.default.width
                            }, 125), createjs.Tween.get(i.slotItemList).to({
                                x: n.default.width
                            }, 125), createjs.Tween.get(i.shipDetail).to({
                                x: 468
                            }, 125).call(function () {
                                i.mainView.removeChild(i.backArea), i.mainView.removeChild(i.doubleBackArea), i.mainView.removeChild(i.changeConfirm), i.mainView.removeChild(i.slotItemList), o.default.view.clickGuard = !1
                            })
                        }), i.shipVoice.play(i.memShipId)
                    })
                }, this._onClickNoOtherShipChange = function () {
                    o.default.view.clickGuard = !0, i.slotInShipChangeConfirm.hide(function () {
                        i.changeConfrimFromOtherShip.deactivate(), i.slotInShipChangeConfirm.dispose(), o.default.view.overLayer.removeChild(i.slotInShipChangeConfirm), o.default.view.clickGuard = !1
                    })
                }, this._onChangeFilterKeyType = function (t) {
                    i._updateSource_(i.mode, t), i.slotItemList.slotItemFilterView.hideFilterListImmidiate(), i._changePage_(0)
                }, this._onClickChangeListSwitch = function () {
                    switch (l.SE.play("219"), i.mode) {
                        case h.SlotListMode.UNSET:
                            i._initSetList_(i.memShipId, i.isEditExtraSlot, i.slotIndex), i._updateSource_(h.SlotListMode.SET, 0), i._changePage_(0);
                            break;
                        case h.SlotListMode.SET:
                            i._updateSource_(h.SlotListMode.UNSET, 0), i._changePage_(0);
                            break;
                        default:
                            throw Error("unsupported X( " + i.mode)
                    }
                }, this._onClickListItem = function (t, e) {
                    i.mainView.addChild(i.doubleBackArea), i.mainView.addChild(i.changeConfirm), i.changeConfirm.position.set(n.default.width, 141), i.doubleBackArea.alpha = 0;
                    var r = o.default.model.ship.get(i.memShipId),
                        s = -1 == i.slotIndex ? r.getSlotitemEx() : r.getSlotitems()[i.slotIndex],
                        a = o.default.model.slot.get(e);
                    i.changeConfirm.update(s, a), o.default.view.clickGuard = !0, i.memSlotItemId = e, createjs.Tween.get(i.doubleBackArea).to({
                        alpha: 1
                    }, 125), createjs.Tween.get(i.changeConfirm).to({
                        x: 873
                    }, 125).call(function () {
                        i.doubleBackArea.width = 912, o.default.view.clickGuard = !1
                    })
                }, this._onClickLock = function (t, e) {
                    var n = new a.SlotItemLockAPI(e);
                    o.default.view.clickGuard = !0;
                    var r = function () {
                        var n = o.default.model.slot.get(e);
                        n.isLocked() ? l.SE.play("242") : l.SE.play("255");
                        var r = null;
                        i.mode == h.SlotListMode.SET && (r = 15 == u.SceneMemory.slotItemFilter ? o.default.model.ship.get(i.setList_all[1][n.memID.toString()]) : o.default.model.ship.get(i.setList[1][n.memID.toString()])), i._updateListItem_(t, n, r), o.default.view.clickGuard = !1
                    };
                    n.start(r)
                }, this._onChangePage = function (t) {
                    u.SceneMemory.slotItemPage != t && i._changePage_(t)
                }, this.slotItemList = new v.SlotItemList, this.changeConfirm = new y.ChangeConfirm, this.changeConfrimFromOtherShip = new d.ChangeConfirmFromOtherShip, this.backArea = new f.BackArea, this.doubleBackArea = new f.DoubleBackArea, this.slotItemList.pagerView.onChangePage = this._onChangePage, this.slotItemList.onClick = this._onClickListItem, this.slotItemList.onClickLock = this._onClickLock, this.backArea.onClick = this._onClickBackArea, this.doubleBackArea.onClickLeft = this._onClickDoubleBackAreaLeft, this.doubleBackArea.onClickRight = this._onClickDoubleBackAreaRight, this.changeConfirm.onClick = this._onClickChangeButton, this.changeConfrimFromOtherShip.onClickYes = this._onClickYesOtherShipChange, this.changeConfrimFromOtherShip.onClickNo = this._onClickNoOtherShipChange, this.slotItemList.slotItemFilterView.onClick = this._onChangeFilterKeyType, this.slotItemList.changeListSwitch.onClick = this._onClickChangeListSwitch, this.shipDetail = e, this.mainView = t
            }
            return t.prototype.dispose = function () {
                this._onChangePage = null, this._onClickListItem = null, this._onClickLock = null, this.backArea.onClick = this._onClickBackArea = null, this.doubleBackArea.onClickLeft = this._onClickDoubleBackAreaLeft = null, this.doubleBackArea.onClickRight = this._onClickDoubleBackAreaRight = null, this.changeConfirm.onClick = this._onClickChangeButton = null, this.changeConfrimFromOtherShip.onClickYes = this._onClickYesOtherShipChange = null, this.changeConfrimFromOtherShip.onClickNo = this._onClickNoOtherShipChange = null, this._onChangeFilterKeyType = null, this._onClickChangeListSwitch = null, this.slotItemList && this.slotItemList.dispose(), this.changeConfirm && this.changeConfirm.dispose(), this.changeConfrimFromOtherShip && this.changeConfrimFromOtherShip.dispose(), this.backArea && this.backArea.dispose(), this.doubleBackArea && this.doubleBackArea.dispose(), this.onUpdateSlotItem = null, this.onComplete = null, this.memSlotItemId = null, this.memShipId = null, this.slotIndex = null, this.mainView = null, this.shipDetail = null, this.changeConfirm = null, this.backArea = null, this.doubleBackArea = null, this.slotItemList = null, this.sourceSlotItems = null, this.unsetList = null, this.sortieSlotItems = null, this.setList = null, this.mode = null, this.changeConfrimFromOtherShip = null, this.slotInShipChangeConfirm = null
            }, t.prototype._updateSource_ = function (t, e) {
                var i = this._genSource_(t, e);
                this._updateMode_(t), this._updateFilter_(e), this._updatePager_(i), this.sourceSlotItems = i
            }, t.prototype._changePage_ = function (t) {
                var e = this.sourceSlotItems.slice(t * c.RemodelConst.ITEM_NUM, t * c.RemodelConst.ITEM_NUM + c.RemodelConst.ITEM_NUM);
                if (this.slotItemList.clear(), 0 == e.length) this.slotItemList.visibleEmptyText();
                else
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i],
                            r = null;
                        this.mode == h.SlotListMode.SET && (r = 15 == u.SceneMemory.slotItemFilter ? o.default.model.ship.get(this.setList_all[1][n.memID.toString()]) : o.default.model.ship.get(this.setList[1][n.memID.toString()])), this._updateListItem_(i, n, r)
                    }
                this.slotItemList.pagerView.changePage(t), u.SceneMemory.slotItemPage = t
            }, t.prototype._updateListItem_ = function (t, e, i) {
                var n = null,
                    r = !1,
                    s = null,
                    a = !1,
                    _ = !1;
                i ? (n = o.default.model.deck.isInDeck(i.memID)) && (s = o.default.model.deck.get(n[0]), null != s.expedition && (r = !0)) : -1 != this.sortieSlotItems.indexOf(e) && (a = !0);
                var l, u = o.default.model.ship.get(this.memShipId);
                this.isEditExtraSlot || (l = o.default.model.equip.get(u.mstID), (-1 == l.equip_type.indexOf(e.equipTypeSp) || this._excludeList.indexOf(e.equipTypeSp) > -1) && (_ = !0)), this.slotItemList.update(t, e, i, n, r, a, _)
            }, t.prototype.start = function (t, e, i) {
                var r = this;
                o.default.view.clickGuard = !0;
                var s = -1 == e;
                this.shipVoice = i, this._excludeList = this._excludeEquipList(t, e, s), this._initUnSetList_(t, e, s), this._initSortieSlotItems_(), this.mode = u.SceneMemory.listMode, this.slotIndex = e, this.memShipId = t, this.isEditExtraSlot = s, this.mode == h.SlotListMode.SET && this._initSetList_(this.memShipId, this.isEditExtraSlot, this.slotIndex), this._updateSlotItemFilter_(s), this._updateSource_(this.mode, u.SceneMemory.slotItemFilter);
                var a = Math.ceil(this.sourceSlotItems.length / c.RemodelConst.ITEM_NUM);
                a <= u.SceneMemory.slotItemPage && (u.SceneMemory.slotItemPage = a - 1, u.SceneMemory.slotItemPage < 0 && (u.SceneMemory.slotItemPage = 0)), this._changePage_(u.SceneMemory.slotItemPage), this.slotItemList.position.set(n.default.width, 141), this.backArea.alpha = 0, this.mainView.addChild(this.backArea), this.mainView.addChild(this.slotItemList), createjs.Tween.get(this.slotItemList).to({
                    x: 501
                }, 125), createjs.Tween.get(this.backArea).to({
                    alpha: 1
                }, 125), createjs.Tween.get(this.shipDetail).to({
                    x: 147
                }, 125).call(function () {
                    r.backArea.width = 538, o.default.view.clickGuard = !1
                })
            }, t.prototype._updateSlotItemFilter_ = function (t) {
                this.slotItemList.slotItemFilterView.visible = !1, 0 == t && (this.slotItemList.slotItemFilterView.visible = !0)
            }, t.prototype._initSortieSlotItems_ = function () {
                if (!this.sortieSlotItems) {
                    var t = o.default.model.slot.createUnsetList([47, 48, 49]);
                    this.sortieSlotItems = t
                }
            }, t.prototype._initUnSetList_ = function (t, e, i) {
                var n = this;
                if (!this.unsetList) {
                    var r, s, a = o.default.model.ship.get(t),
                        _ = [];
                    if (i) r = p.RemodelUtil.createUnSetListEx(a.mstID, a.shipTypeID);
                    else {
                        var l = o.default.model.equip.get(a.mstID),
                            u = void 0;
                        u = this._excludeList.length > 0 ? l.equip_type.filter(function (t) {
                            return -1 === n._excludeList.indexOf(t)
                        }) : l.equip_type, r = o.default.model.slot.createUnsetList(u), s = o.default.model.slot.createUnsetList_unType(l.equip_type), _ = o.default.model.slot.createUnsetList(l.equip_type)
                    }
                    this.unsetList = r, this.unsetList_all = _.concat(s)
                }
            }, t.prototype._initSetList_ = function (t, e, i) {
                var n = this;
                if (!this.setList) {
                    var r, s, a = o.default.model.ship.get(t),
                        _ = {},
                        l = new Array;
                    if (e ? r = p.RemodelUtil.createSetListEx(a.memID, a.mstID, a.shipTypeID) : (s = o.default.model.equip.get(a.mstID), r = o.default.model.slot.createSetList(s.equip_type)), r[0] = r[0].filter(function (t) {
                            var e = r[1][t.memID] == a.memID;
                            return e && delete r[1][t.memID], 0 == e
                        }), !e) {
                        for (var u = 0; u < r[0].length; u++) l.push(r[0][u]);
                        for (var c in r[1]) {
                            var h = parseInt(c);
                            _[h] = r[1][c]
                        }
                        var d = void 0;
                        d = o.default.model.slot.createSetList_unType(s.equip_type);
                        for (var u = 0; u < d[0].length; u++) l.push(d[0][u]);
                        for (var c in d[1]) {
                            var h = parseInt(c);
                            _[h] = d[1][c]
                        }
                        this.setList_all = [l, _]
                    }
                    this._excludeList.length > 0 && (r[0] = r[0].filter(function (t) {
                        return -1 === n._excludeList.indexOf(t.equipType)
                    })), this.setList = r
                }
            }, t.prototype._excludeEquipList = function (t, e, i) {
                return i ? [] : 553 === o.default.model.ship.get(t).mstID && e >= 2 ? [2, 3] : []
            }, t.prototype._updateMode_ = function (t) {
                switch (this.slotItemList.inUseMarker.visible = !1, t) {
                    case h.SlotListMode.SET:
                        this.slotItemList.listHeader.update(this.slotItemList.listHeader.TYPE_SET), this.slotItemList.changeListSwitch.update(this.slotItemList.changeListSwitch.TYPE_EQUIPS_OTHER), this.slotItemList.inUseMarker.visible = !0;
                        break;
                    case h.SlotListMode.UNSET:
                        this.slotItemList.listHeader.update(this.slotItemList.listHeader.TYPE_UNSET), this.slotItemList.changeListSwitch.update(this.slotItemList.changeListSwitch.TYPE_UNEQUIPS)
                }
                this.mode = t, u.SceneMemory.listMode = t
            }, t.prototype._genSource_ = function (t, e) {
                switch (t) {
                    case h.SlotListMode.SET:
                        return 15 == e ? this._genFilterSlotItems_(t, e, this.setList_all[0]) : this._genFilterSlotItems_(t, e, this.setList[0]);
                    case h.SlotListMode.UNSET:
                        return 15 == e ? this._genFilterSlotItems_(t, e, this.unsetList_all) : this._genFilterSlotItems_(t, e, this.unsetList)
                }
                throw new Error("unsupported XO")
            }, t.prototype._updatePager_ = function (t) {
                var e = p.RemodelUtil.calcPageCount(t.length);
                this.slotItemList.pagerView.init(e)
            }, t.prototype._updateFilter_ = function (t) {
                this.slotItemList.slotItemFilterView.updateFilterType(t), u.SceneMemory.slotItemFilter = t
            }, t.prototype._genFilterSlotItems_ = function (t, e, i) {
                if (0 == e || 15 == e) return r.SlotUtil.sort(i, 0), i;
                if (13 == e) return r.SlotUtil.sort(i, 1), i;
                if (14 == e) return r.SlotUtil.sort(i, 2), i;
                var n = i;
                t != h.SlotListMode.UNSET || 11 != e && 12 != e || (n = i.concat(this.sortieSlotItems));
                var o;
                switch (e) {
                    case 1:
                        o = r.SlotUtil.filter(n, 1);
                        break;
                    case 2:
                        o = r.SlotUtil.filter(n, 2);
                        break;
                    case 3:
                        o = r.SlotUtil.filter(n, 3);
                        break;
                    case 4:
                        o = r.SlotUtil.filter(n, 4);
                        break;
                    case 5:
                        o = r.SlotUtil.filter(n, 5);
                        break;
                    case 6:
                        o = r.SlotUtil.filter(n, 6);
                        break;
                    case 7:
                        o = r.SlotUtil.filter(n, 7);
                        break;
                    case 8:
                        o = r.SlotUtil.filter(n, 8);
                        break;
                    case 9:
                        o = r.SlotUtil.filter(n, 9);
                        break;
                    case 10:
                        o = r.SlotUtil.filter(n, 10);
                        break;
                    case 11:
                        o = r.SlotUtil.filter(n, 11);
                        break;
                    case 12:
                        o = r.SlotUtil.filter(n, 12)
                }
                return r.SlotUtil.sort(o, 0), o
            }, t.prototype._show_ = function () {
                var t = this;
                o.default.view.clickGuard = !0;
                this.slotItemList.position.set(n.default.width, 141), this.backArea.alpha = 0, this.mainView.addChild(this.backArea), this.mainView.addChild(this.slotItemList), createjs.Tween.get(this.slotItemList).to({
                    x: 501
                }, 125), createjs.Tween.get(this.backArea).to({
                    alpha: 1
                }, 125), createjs.Tween.get(this.shipDetail).to({
                    x: 147
                }, 125).call(function () {
                    t.backArea.width = 538, o.default.view.clickGuard = !1
                })
            }, t
        }();
    e.TaskChoiceSlotItem = I
}