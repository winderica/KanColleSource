const function1034 = function (t, e, i) {
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
        r = i(227),
        s = i(1035),
        a = i(1041),
        _ = i(32),
        u = i(1047),
        l = i(373),
        c = i(1048),
        h = i(84),
        p = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n._deckInfo = {}, n._lastUpdateTime = 0, n._INTERVAL_UPDATE_TIME = 500, n._onClickSallyMenu = function (t) {
                    n._expeditionStage.compSwitch.deactivate(), n._switch_func(t)
                }, n._onGoExpedition = function (t, e) {
                    if (n._deckSelect.deactivate(), -1 == e) return o.default.view.clickGuard = !0, n._deckSelect.cancelArea.hide(300), createjs.Tween.get(n._expeditionStage.detail).to({
                        x: 694
                    }, 300), void createjs.Tween.get(n._deckSelect.panel).to({
                        x: 1200
                    }, 300).call(function () {
                        n.removeChild(n._deckSelect), n._deckSelect.dispose(), n._deckSelect = null, o.default.view.clickGuard = !1
                    });
                    o.default.view.clickGuard = !0, n._callExpeditionStartAPI(e, t)
                };
                var r = new s.ExpeditionStage(e, n._onClickSallyMenu);
                return r.areaIcons.forEach(function (t) {
                    return t.onClick = function (t) {
                        return n._onClickArea(t)
                    }
                }), r.list.items.forEach(function (t) {
                    t.onClick = function (t) {
                        return n._onClickListItem(t)
                    }
                }), r.nextButton.initialize(function () {
                    n._onClickNext()
                }), r.prevButton.initialize(function () {
                    n._onClickPrev()
                }), r.detail.onClickStart = function (t) {
                    n._onClickStart(t)
                }, r.detail.onClickCancel = function (t) {
                    n._onClickCancel(t)
                }, r.position.set(150, 138), n.addChild(r), n._expeditionStage = r, n._switch_func = i, n
            }
            return n(e, t), e.prototype.initialize = function () {
                this._expeditionStage.interactive = !1, this._expeditionStage.interactiveChildren = !1, this._expeditionStage.list.items.forEach(function (t) {
                    return t.visible = !1
                }), this._expeditionStage.nextButton.visible = !1, this._expeditionStage.prevButton.visible = !1, this._expeditionStage.detail.visible = !1, this._expeditionStage.emptyDetail.visible = !1, this._updateDeckInfo(), this._updateArea(1), this._updateList(0)
            }, e.prototype.activate = function () {
                this._expeditionStage.interactive = !0, this._expeditionStage.interactiveChildren = !0, this._expeditionStage.compSwitch.activate(), this._expeditionStage.nextButton.activate(), this._expeditionStage.prevButton.activate(), this._startCycle()
            }, e.prototype.deactivate = function () {
                this._expeditionStage.interactive = !1, this._expeditionStage.interactiveChildren = !1, this._deckSelect && this._deckSelect.deactivate()
            }, e.prototype.dispose = function () {
                this._stopCycle(), this._deckSelect && (this._deckSelect.dispose(), this._deckSelect = null), this._expeditionStage.dispose(), this._expeditionStage = null, this._area_mst_id = null, this._seekIndex = null, this._requestAnimationFrameID = null, this._switch_func = null, this._deckInfo = null, this._area_expeditions = null, this._lastUpdateTime = null, this._INTERVAL_UPDATE_TIME = null
            }, e.prototype._startCycle = function () {
                this._cycle()
            }, e.prototype._stopCycle = function () {
                cancelAnimationFrame(this._requestAnimationFrameID)
            }, e.prototype._cycle = function () {
                var t = this;
                this._requestAnimationFrameID = requestAnimationFrame(function () {
                    return t._cycle()
                });
                var e = Date.now(),
                    i = e - this._lastUpdateTime;
                this._INTERVAL_UPDATE_TIME < i && this._updateTime(e)
            }, e.prototype._updateTime = function (t) {
                this._expeditionStage.detail && this._expeditionStage.detail.updateInterface(t), this._lastUpdateTime = t
            }, e.prototype._genWinItemInfo = function (t) {
                var e = {
                    rewardRepairKit: !1,
                    rewardDevKit: !1,
                    rewardBuildKit: !1,
                    rewardOtherItem: !1
                };
                return [t.item1_id, t.item2_id].forEach(function (t) {
                    switch (t) {
                        case 0:
                            break;
                        case 1:
                            e.rewardRepairKit = !0;
                            break;
                        case 2:
                            e.rewardBuildKit = !0;
                            break;
                        case 3:
                            e.rewardDevKit = !0;
                            break;
                        default:
                            e.rewardOtherItem = !0
                    }
                }), e
            }, e.prototype._updateDetail = function (t) {
                var e = o.default.model.expedition.get(t),
                    i = this._genWinItemInfo(e);
                this._expeditionStage.emptyDetail.visible = !1, this._expeditionStage.detail.visible = !0;
                var n = e.win_mat_level;
                if (this._expeditionStage.detail.updateMaster(e.mstID, e.name, e.reset_type, e.damage_type, e.sample_fleet, e.time, e.fuel, e.ammo, e.detail, n[0], n[1], n[2], n[3], i.rewardBuildKit, i.rewardRepairKit, i.rewardDevKit, i.rewardOtherItem, e.isCancelable()), this._deckInfo[t]) {
                    var r = this._deckInfo[t],
                        s = o.default.model.deck.get(r),
                        a = s.expedition,
                        _ = new Array;
                    s.getShipList().forEach(function (t) {
                        t && _.push(t.shipTypeID)
                    });
                    var u = s.getShipModel(0);
                    this._expeditionStage.detail.updateMember(a.state, a.complete_unixtime, _, r, s.name, u, !1), this._expeditionStage.detail.updateInterface(Date.now())
                } else {
                    var l = 0 < e.reset_type,
                        c = 2 == e.state,
                        h = !0;
                    l && c && (h = !1), this._expeditionStage.detail.updateMember(0, null, null, null, null, null, h)
                }
            }, e.prototype._updateDeckInfo = function () {
                for (var t = {}, e = o.default.model.deck.getAll(), i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.expedition && (t[n.expedition.expedition_id] = n.mstID)
                }
                this._deckInfo = t
            }, e.prototype._updateList = function (t) {
                for (var e = this._area_expeditions.slice(t, t + this._expeditionStage.list.items.length), i = (Date.now(), this), n = 0; n < this._expeditionStage.list.items.length; n++) ! function (t) {
                    var n = i._expeditionStage.list.items[t];
                    if (n.visible = !1, t < e.length) {
                        var r = null;
                        r = 0 == t ? 0 : t == i._expeditionStage.list.items.length - 1 ? 2 : 1;
                        var s = e[t],
                            a = s.win_mat_level,
                            _ = i._genWinItemInfo(s);
                        n.updateMaster(s.mstID, s.dispID, s.name, s.difficulty, s.time, s.damage_type, s.sample_fleet, s.required_num, a[0], a[1], a[2], a[3], _.rewardBuildKit, _.rewardRepairKit, _.rewardDevKit, _.rewardOtherItem, 0 < s.reset_type);
                        if (i._deckInfo[s.mstID]) {
                            var u = i._deckInfo[s.mstID],
                                l = o.default.model.deck.get(u),
                                c = l.getShipListAll(),
                                h = new Array;
                            c.forEach(function (t) {
                                t && h.push(t.shipTypeID)
                            }), n.updateMember(s.state, u, r)
                        } else n.updateMember(s.state, null, r);
                        n.visible = !0
                    }
                }(n);
                this._expeditionStage.prevButton.visible = !1, 0 < t && (this._expeditionStage.prevButton.visible = !0), this._expeditionStage.nextButton.visible = !1, t + this._expeditionStage.list.items.length < this._area_expeditions.length && (this._expeditionStage.nextButton.visible = !0), this._seekIndex = t
            }, e.prototype._updateArea = function (t) {
                this._area_mst_id != t && (this._expeditionStage.detail.visible = !1, this._expeditionStage.emptyDetail.visible = !0, this._updateAreaFocus(t));
                var e = o.default.model.expedition.getInArea(t, !0);
                this._area_expeditions = e, this._area_mst_id = t
            }, e.prototype._updateAreaFocus = function (t) {
                var e = this;
                this._expeditionStage.areaIcons.forEach(function (i) {
                    var n = i.area_mst_id == t;
                    i.focus(n), n && e._expeditionStage.seekHukidashi(i.x + .5 * i.width - 20)
                })
            }, e.prototype._onClickListItem = function (t) {
                this._updateDetail(t)
            }, e.prototype._onClickStart = function (t) {
                var e = this;
                this._deckSelect = new a.ContainerDeckSelect(this._onGoExpedition);
                var i = o.default.model.deck.getIDs(),
                    n = i.indexOf(1); - 1 != n && i.splice(n, 1);
                var r = o.default.model.deck.isCombined();
                this._deckSelect.initialize(t, i, r), this.addChild(this._deckSelect), this._deckSelect.cancelArea.show(300), createjs.Tween.get(this._expeditionStage.detail.position).to({
                    x: 150
                }, 300), createjs.Tween.get(this._deckSelect.panel).to({
                    x: 493
                }, 300).call(function () {
                    e._deckSelect.activate()
                })
            }, e.prototype._onClickCancel = function (t) {
                var e = this,
                    i = this._deckInfo[t];
                new c.CancelExpeditionTask(i).start(function () {
                    e._updateDeckInfo(), e._updateList(e._seekIndex), e._updateDetail(t)
                })
            }, e.prototype._onClickArea = function (t) {
                this._area_mst_id != t && (this._updateArea(t), this._updateList(0))
            }, e.prototype._onClickNext = function () {
                this._updateList(this._seekIndex + 1)
            }, e.prototype._onClickPrev = function () {
                this._updateList(this._seekIndex - 1)
            }, e.prototype._callExpeditionStartAPI = function (t, e) {
                var i = this,
                    n = o.default.model.deck.get(t).getShipModel(0).mstID;
                o.default.sound.voice.play(n.toString(), 26), (new _.APIConnector).add(new u.ExpeditionStartAPI(e, t)).add(new l.DeckAPI).start(function () {
                    var n = o.default.model.expedition.get(e);
                    0 == n.state && n.__setState__(1), i._closeAnimationDeckInfo(t, e)
                })
            }, e.prototype._closeAnimationDeckInfo = function (t, e) {
                var i = this;
                this._deckSelect.cancelArea.hide(300), createjs.Tween.get(this._expeditionStage.detail).to({
                    x: 694
                }, 300), createjs.Tween.get(this._deckSelect.panel).to({
                    x: 1200
                }, 300).call(function () {
                    i.removeChild(i._deckSelect), i._deckSelect.dispose(), i._deckSelect = null, i._entryAnimationDeck(t, e)
                })
            }, e.prototype._entryAnimationDeck = function (t, e) {
                for (var i, n = this, o = 0; o < this._expeditionStage.list.items.length; o++) {
                    var r = this._expeditionStage.list.items[o];
                    if (r.expedition_mst_id == e) {
                        i = r;
                        break
                    }
                }
                var s = i.genEntryDeckAnimation(t);
                s.execute(function () {
                    s.dispose(), n._updateStartExpeditionInfo(t, e)
                })
            }, e.prototype._updateStartExpeditionInfo = function (t, e) {
                this._updateDeckInfo(), this._updateList(this._seekIndex), this._updateDetail(e), this._showAnimationExpeditionStart(t)
            }, e.prototype._showAnimationExpeditionStart = function (t) {
                var e = o.default.model.deck.get(t);
                new h.TaskExpeditionStartCutin(e.mstID).start(function () {
                    o.default.view.clickGuard = !1
                })
            }, e
        }(r.ViewMainBase);
    e.ViewMain = p
}