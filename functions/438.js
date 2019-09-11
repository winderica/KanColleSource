const function438 = function (t, e, i) {
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
        r = i(146),
        s = i(47),
        a = i(50),
        _ = i(1241),
        l = i(1242),
        u = i(1243),
        c = i(1248),
        h = i(1249),
        p = i(1251),
        d = i(1254),
        f = i(1255),
        y = i(1291),
        m = i(1292),
        g = i(1293),
        v = i(1295),
        b = i(1297),
        w = i(440),
        x = i(1299),
        I = i(441),
        T = i(1307),
        O = i(1325),
        C = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._startScene = function () {
                    n._appointAirUnit()
                }, n._battle_cls = e, n._battle_result_cls = i, n._view = new T.ViewMain, n.addChild(n._view), n._resInfo = new u.MapResourceInfo, n._user_select = new c.UserSelectModel, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "model", {
                get: function () {
                    return this._model
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._view
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "resInfo", {
                get: function () {
                    return this._resInfo
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "user_select", {
                get: function () {
                    return this._user_select
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._appointAirUnit = function () {
                var t = this,
                    e = this._model.sortie.map,
                    i = e.availableAirUnitCount,
                    n = e.area_id,
                    r = o.default.model.airunit.getAirUnitList(n),
                    s = o.default.model.airunit.getReadyAirUnitList(n);
                if (null == (s = s.slice(0, i)) || s.length <= 0) return void this._showFlagShip();
                var a = o.default.view.overLayer;
                new x.TaskAirUnitAppointment(a, n, r, s, this._model, this.view.map).start(function () {
                    t._showFlagShip()
                })
            }, e.prototype._showFlagShip = function () {
                var t = this,
                    e = this._model.deck_f.ships,
                    i = e[0],
                    n = i.mst_id,
                    o = i.isDamaged();
                new w.AnimFlagShip(this, n, o).start(function () {
                    t._next(0)
                })
            }, e.prototype._next = function (t) {
                var e = this,
                    i = new f.TaskNextSpot(this, this._model, t, this._battle_cls, this._battle_result_cls);
                i.start(function () {
                    if (i.cell_open) {
                        var n = e._model.sortie.getNextCell();
                        e._endScene(n)
                    } else e._afterMove(i.battle_model, t)
                })
            }, e.prototype._afterMove = function (t, e) {
                var i = this,
                    n = this._model.sortie.getNextCell();
                if (1 == n.isDeadEnd()) {
                    var o = this._model.sortie.area_id,
                        r = this._model.sortie.map_no,
                        s = (n.getM1(), null == t ? 0 : t.m1);
                    if (7 == o && 2 == r && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !0, !0, !0, !1);
                        return void a.start(function () {
                            i._endScene(n)
                        })
                    }
                    if (45 == o && 1 == r && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !1, !0, !0, !0);
                        return void a.start(function () {
                            i._endScene(n)
                        })
                    }
                    if (45 == o && 2 == r && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !0, !0, !0, !1);
                        return void a.start(function () {
                            i._endScene(n)
                        })
                    }
                    if (45 == o && 3 == r && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !0, !0, !0, !1);
                        return void a.start(function () {
                            i._endScene(n)
                        })
                    }
                    if (45 == o && 3 == r && 2 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !1, !0, !0, !1);
                        return void a.start(function () {
                            i._endScene(n)
                        })
                    }
                    if (45 == o && 3 == r && 3 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !1, !0, !0, !1, !0);
                        return void a.start(function () {
                            i._endScene(n)
                        })
                    }
                    if (45 == o && 3 == r && 4 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !1, !0, !0, !1, !1);
                        return void a.start(function () {
                            i._endScene(n)
                        })
                    }
                    this._endScene(n)
                } else null != t ? this._preNextAfterBattle(n, t) : this._preNext(n, t, e)
            }, e.prototype._preNextAfterBattle = function (t, e) {
                var i = this,
                    n = e.deck_f.ships[0],
                    o = 25 == n.damageType || 0 == n.damageType,
                    r = n.hasYouin(),
                    s = n.hasMegami(),
                    a = this._model.sortie.area_id,
                    _ = this._model.sortie.map_no,
                    l = null == e ? 0 : e.m1;
                if (45 == a && 3 == _ && 1 == l) {
                    return void new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !0, !0, !0, !1).start(function () {
                        i._endScene(t)
                    })
                }
                if (45 == a && 3 == _ && 2 == l) {
                    return void new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !1, !0, !0, !1).start(function () {
                        i._endScene(t)
                    })
                }
                if (45 == a && 3 == _ && 3 == l) {
                    return void new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !1, !0, !0, !1, !0).start(function () {
                        i._endScene(t)
                    })
                }
                if (45 == a && 3 == _ && 4 == l) {
                    return void new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !1, !0, !0, !1, !1).start(function () {
                        i._endScene(t)
                    })
                }
                if (1 == o && 0 == r && 0 == s) {
                    var u = e.deck_f.name;
                    return void new v.TaskFlagShipDamaged(this._view, u, n.mst_id).start(function () {
                        i._endScene(t)
                    })
                }
                new O.EscapeTask(this, e).start(function () {
                    for (var n = e.deck_f.ships, a = 0; a < n.length; a++) {
                        var _ = n[a];
                        null != _ && i.model.deck_f.ships[a].initializeTaihi(_.isTaihi())
                    }
                    1 != o || 1 != r && 1 != s ? i._selectGoAhead(t, e) : i._selectTaihaShingun(t, e, r, s)
                })
            }, e.prototype._selectGoAhead = function (t, e) {
                var i = this,
                    n = new y.TaskMarchRetreatSelect(this._view);
                n.start(function () {
                    if (0 == n.result) i._endScene(t);
                    else {
                        var s = i._model.sortie.area_id,
                            a = i._model.sortie.map_no,
                            _ = r.MapConst.getMapBGMID(s, a);
                        1 == _.battle_bgm ? o.default.sound.bgm.playBattleBGM(_.id) : o.default.sound.bgm.play(_.id);
                        var u = i._model.deck_f,
                            c = [u.id];
                        0 != u.type && c.push(u.id_second);
                        var h = i._model.sortie.getNextCell().no;
                        new l.APIShipDeck(c, s, a, h).start(function () {
                            var n = i._model.deck_f.id,
                                r = o.default.model.deck.get(n);
                            i._model.deck_f.updateShipList(r), i._preNext(t, e)
                        })
                    }
                })
            }, e.prototype._selectTaihaShingun = function (t, e, i, n) {
                var s = this,
                    a = new m.TaskTaihaShingunSelect(this._view, i, n);
                a.start(function () {
                    var i = a.result;
                    if (0 == i) s._endScene(t);
                    else {
                        var n = s._model.sortie.area_id,
                            _ = s._model.sortie.map_no,
                            u = r.MapConst.getMapBGMID(n, _);
                        1 == u.battle_bgm ? o.default.sound.bgm.playBattleBGM(u.id) : o.default.sound.bgm.play(u.id);
                        var c = s._model.deck_f,
                            h = [c.id];
                        0 != c.type && h.push(c.id_second);
                        var p = s._model.sortie.getNextCell().no;
                        new l.APIShipDeck(h, n, _, p).start(function () {
                            var n = s._model.deck_f.id,
                                r = o.default.model.deck.get(n);
                            s._model.deck_f.updateShipList(r), s._model.deck_f.ships[0].selectRepairItem(i);
                            s._preNext(t, e, i)
                        })
                    }
                })
            }, e.prototype._preNext = function (t, e, i) {
                var n = this;
                if (void 0 === i && (i = 0), 1 == t.isJunction()) {
                    t.getSelectableRoutes();
                    this._viewNext(e, i, function () {
                        n._view.map.plane_layer.hideAll();
                        var t = new g.TaskBranchRoute(n, n._model);
                        t.start(function () {
                            var e = t.selected_no;
                            new _.APIMapNext(n._model.sortie, i, e).start(function () {
                                n._next(i)
                            })
                        })
                    })
                } else {
                    new _.APIMapNext(this._model.sortie, i).start(function () {
                        n._viewNext(e, i, function () {
                            n._view.map.plane_layer.hideAll(function () {
                                n._next(i)
                            })
                        })
                    })
                }
            }, e.prototype._viewNext = function (t, e, i) {
                var n = this;
                createjs.Tween.get(this._view.shutter).to({
                    alpha: 0
                }, 200), createjs.Tween.get(this._view.map).to({
                    alpha: 1
                }, 200), createjs.Tween.get(this._view.upper).to({
                    alpha: 1
                }, 200), createjs.Tween.get(this._view.gauge_layer).to({
                    alpha: 1
                }, 200), this._view.message_box.text = "", this._view.message_box.activate(function () {
                    n._view.map.enemy_layer.hide(function () {
                        i()
                    })
                })
            }, e.prototype._endScene = function (t) {
                var e = this;
                this._model.sortie.area_id, this._model.sortie.map_no, t.no;
                4 == t.event_id || 5 == t.event_id ? o.default.scene.change(0) : 8 == t.event_id ? o.default.scene.change(0) : (this._view.message_box.deactivate(), createjs.Tween.get(this._view.gauge_layer).to({
                    alpha: 0
                }, 300).call(function () {
                    var t = new a.Shutter;
                    t.initializeDark(), e._view.universal_layer.addChild(t);
                    var i = e._model.sortie.obtained_items;
                    new b.TaskShowMapEndView(t, i).start(function () {
                        o.default.scene.change(0)
                    })
                }))
            }, e.prototype.getPreInitializeTask = function (t, e) {
                return this._model = e, new h.TaskInitPre(this, e)
            }, e.prototype.getInitializeTask = function (t) {
                return this.once("showed", this._startScene), new p.TaskInit(this, this._model)
            }, e.prototype.getFinalizeTask = function () {
                return new d.TaskFinalize(this)
            }, e
        }(s.SceneBase);
    e.MapScene = C
}