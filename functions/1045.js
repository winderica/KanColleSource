const function1045 = function (t, e, i) {
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
        r = i(230),
        s = i(1046),
        a = i(1052),
        _ = i(1058),
        l = i(380),
        u = i(1059),
        c = i(84),
        h = i(379),
        p = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n._deckInfo = {}, n._lastFrameUpdateTimeMS = 0, n._INTERVAL_UPDATE_TIME = 500, n._onClickSallyMenu = function (t) {
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
                }), r.eventAreaIcon.onClick = function (t) {
                    return n._onClickArea(t)
                }, r.list.items.forEach(function (t) {
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
                }), this._expeditionStage.nextButton.visible = !1, this._expeditionStage.prevButton.visible = !1, this._expeditionStage.detail.visible = !1, this._expeditionStage.emptyDetail.visible = !1, this._updateVerificationTime(Date.now()), this._updateDeckInfo(), this._updateArea(1), this._updateList(0)
            }, e.prototype._updateVerificationTime = function (t) {
                this._verificationTimeMS = t
            }, e.prototype.activate = function () {
                this._expeditionStage.interactive = !0, this._expeditionStage.interactiveChildren = !0, this._expeditionStage.compSwitch.activate(), this._expeditionStage.nextButton.activate(), this._expeditionStage.prevButton.activate(), this._startCycle()
            }, e.prototype.deactivate = function () {
                this._expeditionStage.interactive = !1, this._expeditionStage.interactiveChildren = !1, this._deckSelect && this._deckSelect.deactivate(), this._expeditionStage.eventAreaIcon.deactivate()
            }, e.prototype.dispose = function () {
                this._stopCycle(), this._deckSelect && (this._deckSelect.dispose(), this._deckSelect = null), this._expeditionStage.dispose(), this._expeditionStage = null, this._area_mst_id = null, this._pageSeekIndex = null, this._requestAnimationFrameID = null, this._switch_func = null, this._deckInfo = null, this._area_expeditions = null, this._lastFrameUpdateTimeMS = null, this._INTERVAL_UPDATE_TIME = null
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
                    i = e - this._lastFrameUpdateTimeMS;
                this._INTERVAL_UPDATE_TIME < i && this._updateTime(e)
            }, e.prototype._updateTime = function (t) {
                this._expeditionStage.detail && this._expeditionStage.detail.updateInterface(t), this._lastFrameUpdateTimeMS = t
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
                var e = o.default.model.expedition.get(t);
                this._expeditionStage.emptyDetail.visible = !1, this._expeditionStage.detail.visible = !0;
                var i = e.win_mat_level,
                    n = e.isCancelable();
                if (this._expeditionStage.detail.updateMaster(e.mstID, e.name, e.reset_type, e.damage_type, e.time, e.fuel, e.ammo, e.detail, i[0], i[1], i[2], i[3], e.item1_id, e.item1_count, e.item2_id, e.item2_count, n), this._deckInfo[t]) {
                    var r = this._deckInfo[t],
                        s = o.default.model.deck.get(r),
                        a = s.expedition,
                        _ = new Array;
                    s.getShipList().forEach(function (t) {
                        t && _.push(t.shipTypeID)
                    });
                    var l = s.getShipModel(0);
                    this._expeditionStage.detail.updateMember(a.state, a.complete_unixtime, _, r, s.name, l, !1), this._expeditionStage.detail.updateInterface(Date.now())
                } else {
                    var u = 0 < e.reset_type,
                        c = 2 == e.state,
                        p = this._expeditionStage.list.items.some(function (e) {
                            var i = e.expedition_mst_id == t ? e.expeditionStateIcon.viewState : h.ExpeditionState.NONE;
                            return h.ExpeditionState.TIME_OVER_MONTHLY == i
                        }),
                        d = !0;
                    u && (c || p) && (d = !1), this._expeditionStage.detail.updateMember(0, null, null, null, null, null, d)
                }
            }, e.prototype._updateDeckInfo = function () {
                for (var t = {}, e = o.default.model.deck.getAll(), i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.expedition && (t[n.expedition.expedition_id] = n.mstID)
                }
                this._deckInfo = t
            }, e.prototype._updateList = function (t) {
                for (var e = o.default.model.expedition.getLimitTime(1), i = this._area_expeditions.slice(t, t + this._expeditionStage.list.items.length), n = 0; n < this._expeditionStage.list.items.length; n++) {
                    var r = this._expeditionStage.list.items[n];
                    r.visible = !1;
                    if (n < i.length) {
                        var s = null;
                        s = 0 == n ? h.ListType.HEADER : n == this._expeditionStage.list.items.length - 1 ? h.ListType.FOOTER : h.ListType.CENTER;
                        var a = i[n],
                            _ = a.win_mat_level,
                            l = this._genWinItemInfo(a),
                            u = a.sample_fleet.filter(function (t) {
                                return 0 != t
                            }),
                            c = 0 < a.reset_type;
                        r.updateMaster(a.mstID, a.dispID, a.name, a.difficulty, a.time, a.damage_type, u, a.required_num, _[0], _[1], _[2], _[3], l.rewardBuildKit, l.rewardRepairKit, l.rewardDevKit, l.rewardOtherItem, c);
                        var p = this._verificationTimeMS + 60 * a.time * 1e3,
                            d = p > 1e3 * e;
                        if (this._deckInfo[a.mstID]) {
                            var f = this._deckInfo[a.mstID];
                            r.updateMember(a.state, f, s, d)
                        } else r.updateMember(a.state, null, s, d);
                        r.visible = !0
                    }
                }
                this._expeditionStage.prevButton.visible = !1, 0 < t && (this._expeditionStage.prevButton.visible = !0), this._expeditionStage.nextButton.visible = !1, t + this._expeditionStage.list.items.length < this._area_expeditions.length && (this._expeditionStage.nextButton.visible = !0), this._pageSeekIndex = t
            }, e.prototype._updateArea = function (t) {
                var e = this;
                if (this._area_mst_id != t) {
                    this._expeditionStage.detail.visible = !1, this._expeditionStage.emptyDetail.visible = !0, this._expeditionStage.areaIcons.forEach(function (i) {
                        var n = i.area_mst_id == t;
                        i.focus(n), n && e._expeditionStage.seekHukidashi(i.x + .5 * i.width - 20)
                    });
                    var i = this._expeditionStage.eventAreaIcon.area_id == t;
                    this._expeditionStage.eventAreaIcon.selected = i, 1 == i && this._expeditionStage.seekHukidashi(this._expeditionStage.eventAreaIcon.x + .5 * this._expeditionStage.eventAreaIcon.width - 35)
                }
                var n = o.default.model.expedition.getInArea(t, !0);
                this._area_expeditions = n, this._area_mst_id = t
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
                new u.CancelExpeditionTask(i).start(function () {
                    e._updateDeckInfo(), e._updateList(e._pageSeekIndex), e._updateDetail(t)
                })
            }, e.prototype._onClickArea = function (t) {
                this._area_mst_id != t && (this._updateVerificationTime(Date.now()), this._updateArea(t), this._updateList(0))
            }, e.prototype._onClickNext = function () {
                this._updateList(this._pageSeekIndex + 1)
            }, e.prototype._onClickPrev = function () {
                this._updateList(this._pageSeekIndex - 1)
            }, e.prototype._callExpeditionStartAPI = function (t, e) {
                var i = this,
                    n = new _.ExpeditionStartAPI(e, t);
                n.start(function () {
                    n.expiredFlag ? (i._deckSelect.panel.expiredUpdate(n.expiredFlag), o.default.view.clickGuard = !1, i._deckSelect.activate()) : i._callDeckAPI(t, e)
                })
            }, e.prototype._callDeckAPI = function (t, e) {
                var i = this,
                    n = o.default.model.deck.get(t).getShipModel(0).mstID;
                o.default.sound.voice.play(n.toString(), 26), (new l.DeckAPI).start(function () {
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
                if (null != i) {
                    var s = i.genEntryDeckAnimation(t);
                    s.execute(function () {
                        s.dispose(), n._updateStartExpeditionInfo(t, e)
                    })
                } else this._updateStartExpeditionInfo(t, e)
            }, e.prototype._updateStartExpeditionInfo = function (t, e) {
                this._updateDeckInfo(), this._updateList(this._pageSeekIndex), this._updateDetail(e), this._showAnimationExpeditionStart(t)
            }, e.prototype._showAnimationExpeditionStart = function (t) {
                var e = o.default.model.deck.get(t);
                new c.TaskExpeditionStartCutin(e.mstID).start(function () {
                    o.default.view.clickGuard = !1
                })
            }, e
        }(r.ViewMainBase);
    e.ViewMain = p
}