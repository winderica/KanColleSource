const function432 = function (t, e, i) {
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
    var o = i(0), r = i(139), s = i(47), a = i(51), _ = i(1223), u = i(1224), l = i(1225), c = i(1230), h = i(1231),
        p = i(1233), d = i(1236), f = i(1237), y = i(1274), v = i(1275), g = i(1276), m = i(1278), b = i(1280),
        w = i(436), x = i(1282), I = i(438), T = i(1290), O = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._startScene = function () {
                    n._appointAirUnit()
                }, n._battle_cls = e, n._battle_result_cls = i, n._view = new T.ViewMain, n.addChild(n._view), n._resInfo = new l.MapResourceInfo, n._user_select = new c.UserSelectModel, n
            }

            return n(e, t), Object.defineProperty(e.prototype, "model", {
                get: function () {
                    return this._model
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "view", {
                get: function () {
                    return this._view
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "resInfo", {
                get: function () {
                    return this._resInfo
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "user_select", {
                get: function () {
                    return this._user_select
                }, enumerable: !0, configurable: !0
            }), e.prototype._appointAirUnit = function () {
                var t = this, e = this._model.sortie.map, i = e.availableAirUnitCount, n = e.area_id,
                    r = o.default.model.airunit.getAirUnitList(n), s = o.default.model.airunit.getReadyAirUnitList(n);
                if (null == (s = s.slice(0, i)) || s.length <= 0) return void this._showFlagShip();
                var a = o.default.view.overLayer;
                new x.TaskAirUnitAppointment(a, n, r, s, this._model, this.view.map).start(function () {
                    t._showFlagShip()
                })
            }, e.prototype._showFlagShip = function () {
                var t = this, e = this._model.deck_f.ships, i = e[0], n = i.mst_id, o = i.isDamaged();
                new w.AnimFlagShip(this, n, o).start(function () {
                    t._next(0)
                })
            }, e.prototype._next = function (t) {
                var e = this, i = new f.TaskNextSpot(this, this._model, t, this._battle_cls, this._battle_result_cls);
                i.start(function () {
                    e._gimmick(i.battle_model, t)
                })
            }, e.prototype._gimmick = function (t, e) {
                var i = this._model.sortie.area_id, n = this._model.sortie.map_no;
                this._model.sortie.getNextCell();
                39 == i && 1 == n || this._afterMove(t, e)
            }, e.prototype._afterMove = function (t, e) {
                var i = this, n = this._model.sortie.getNextCell();
                if (1 == n.isDeadEnd()) {
                    var o = this._model.sortie.area_id, r = this._model.sortie.map_no, s = null == t ? 0 : t.m1;
                    if (42 == o && 2 == r && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !0, !0, !0);
                        a.start(function () {
                            i._endScene(n)
                        })
                    } else if (42 == o && 3 == r && 1 == this._model.sortie.map.getGaugeNum() && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !0, !0, !0);
                        a.start(function () {
                            i._endScene(n)
                        })
                    } else if (42 == o && 3 == r && 2 == this._model.sortie.map.getGaugeNum() && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !1, !0, !0, !0);
                        a.start(function () {
                            i._endScene(n)
                        })
                    } else if (42 == o && 4 == r && 1 == this._model.sortie.map.getGaugeNum() && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !0, !0, !0);
                        a.start(function () {
                            i._endScene(n)
                        })
                    } else if (42 == o && 4 == r && 2 == this._model.sortie.map.getGaugeNum() && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !1, !0, !0);
                        a.start(function () {
                            i._endScene(n)
                        })
                    } else if (42 == o && 4 == r && 3 == this._model.sortie.map.getGaugeNum() && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !1, !0, !0);
                        a.start(function () {
                            i._endScene(n)
                        })
                    } else if (42 == o && 5 == r && 1 == this._model.sortie.map.getGaugeNum() && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !0, !0, !0);
                        a.start(function () {
                            i._endScene(n)
                        })
                    } else if (42 == o && 5 == r && 2 == this._model.sortie.map.getGaugeNum() && 1 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !0, !0, !0, !0);
                        a.start(function () {
                            i._endScene(n)
                        })
                    } else if (42 == o && 5 == r && 2 == this._model.sortie.map.getGaugeNum() && 2 == s) {
                        var a = new I.EventTaskCellOpen(this._model.sortie.map_id, this._resInfo, this._view, this._model.sortie.map.getGaugeNum(), !1, !0, !0, !0);
                        a.start(function () {
                            i._endScene(n)
                        })
                    } else this._endScene(n)
                } else null != t ? this._preNextAfterBattle(n, t) : this._preNext(n, e)
            }, e.prototype._preNextAfterBattle = function (t, e) {
                var i = this, n = e.deck_f.ships[0];
                if (25 == n.damageType || 0 == n.damageType) {
                    var o = n.hasYouin(), r = n.hasMegami();
                    if (1 == o || 1 == r) this._selectTaihaShingun(t, e, o, r); else {
                        var s = e.deck_f.name;
                        new m.TaskFlagShipDamaged(this._view, s, n.mst_id).start(function () {
                            i._endScene(t)
                        })
                    }
                } else this._selectGoAhead(t, e)
            }, e.prototype._selectGoAhead = function (t, e) {
                var i = this, n = new y.TaskMarchRetreatSelect(this._view);
                n.start(function () {
                    if (0 == n.result) {
                        var s = i._model.sortie.area_id, a = i._model.sortie.map_no, _ = null == e ? 0 : e.m1;
                        42 == s && 5 == a && 3 == i._model.sortie.map.getGaugeNum() && 1 == _ ? new I.EventTaskCellOpen(i._model.sortie.map_id, i._resInfo, i._view, i._model.sortie.map.getGaugeNum(), !0, !1, !0, !1).start(function () {
                            i._endScene(t)
                        }) : i._endScene(t)
                    } else {
                        var s = i._model.sortie.area_id, a = i._model.sortie.map_no, l = r.MapConst.getMapBGMID(s, a);
                        1 == l.battle_bgm ? o.default.sound.bgm.playBattleBGM(l.id) : o.default.sound.bgm.play(l.id);
                        var c = i._model.deck_f, h = [c.id];
                        0 != c.type && h.push(c.id_second);
                        var p = i._model.sortie.getNextCell().no;
                        new u.APIShipDeck(h, s, a, p).start(function () {
                            var e = i._model.deck_f.id, n = o.default.model.deck.get(e);
                            i._model.deck_f.updateShipList(n), i._preNext(t)
                        })
                    }
                })
            }, e.prototype._selectTaihaShingun = function (t, e, i, n) {
                var s = this, a = new v.TaskTaihaShingunSelect(this._view, i, n);
                a.start(function () {
                    var i = a.result;
                    if (0 == i) s._endScene(t); else {
                        var n = s._model.sortie.area_id, _ = s._model.sortie.map_no, l = r.MapConst.getMapBGMID(n, _);
                        1 == l.battle_bgm ? o.default.sound.bgm.playBattleBGM(l.id) : o.default.sound.bgm.play(l.id);
                        var c = s._model.deck_f, h = [c.id];
                        0 != c.type && h.push(c.id_second);
                        var p = s._model.sortie.getNextCell().no;
                        new u.APIShipDeck(h, n, _, p).start(function () {
                            var r = s._model.deck_f.id, a = o.default.model.deck.get(r);
                            s._model.deck_f.updateShipList(a);
                            var u = (s._model.deck_f.ships[0].useRepairItem(), null == e ? 0 : e.m1);
                            if (42 == n && 5 == _ && 3 == s._model.sortie.map.getGaugeNum() && 1 == u) {
                                new I.EventTaskCellOpen(s._model.sortie.map_id, s._resInfo, s._view, s._model.sortie.map.getGaugeNum(), !0, !1, !0, !1).start(function () {
                                    s._preNext(t, i)
                                })
                            } else s._preNext(t, i)
                        })
                    }
                })
            }, e.prototype._preNext = function (t, e) {
                var i = this;
                if (void 0 === e && (e = 0), 1 == t.isJunction()) {
                    t.getSelectableRoutes();
                    createjs.Tween.get(this._view.shutter).to({ alpha: 0 }, 200), createjs.Tween.get(this._view.map).to({ alpha: 1 }, 200), createjs.Tween.get(this._view.upper).to({ alpha: 1 }, 200), createjs.Tween.get(this._view.gauge_layer).to({ alpha: 1 }, 200), this._view.message_box.text = "", this._view.message_box.activate(function () {
                        i._view.map.enemy_layer.hide(function () {
                            i._view.map.plane_layer.hideAll();
                            var t = new g.TaskBranchRoute(i, i._model);
                            t.start(function () {
                                var n = t.selected_no;
                                new _.APIMapNext(i._model.sortie, e, n).start(function () {
                                    i._next(e)
                                })
                            })
                        })
                    })
                } else {
                    new _.APIMapNext(this._model.sortie, e).start(function () {
                        createjs.Tween.get(i._view.shutter).to({ alpha: 0 }, 200), createjs.Tween.get(i._view.map).to({ alpha: 1 }, 200), createjs.Tween.get(i._view.upper).to({ alpha: 1 }, 200), createjs.Tween.get(i._view.gauge_layer).to({ alpha: 1 }, 200), i._view.message_box.text = "", i._view.message_box.activate(function () {
                            i._view.map.enemy_layer.hide(function () {
                                i._view.map.plane_layer.hideAll(function () {
                                    i._next(e)
                                })
                            })
                        })
                    })
                }
            }, e.prototype._endScene = function (t) {
                var e = this, i = this._model.sortie.area_id, n = this._model.sortie.map_no, r = t.no;
                39 != i || 1 != n || 13 != r && 18 != r ? 4 == t.event_id || 5 == t.event_id ? o.default.scene.change(0) : 8 == t.event_id ? o.default.scene.change(0) : (this._view.message_box.deactivate(), createjs.Tween.get(this._view.gauge_layer).to({ alpha: 0 }, 300).call(function () {
                    var t = new a.Shutter;
                    t.initializeDark(), e._view.universal_layer.addChild(t);
                    var i = e._model.sortie.obtained_items;
                    new b.TaskShowMapEndView(t, i).start(function () {
                        o.default.scene.change(0)
                    })
                })) : (this._view.message_box.deactivate(), createjs.Tween.get(this._view.gauge_layer).to({ alpha: 0 }, 300).call(function () {
                    var t = new a.Shutter;
                    t.initializeDark(), e._view.universal_layer.addChild(t), t.close(), t.once("closed", function () {
                        createjs.Tween.get(null).wait(1e3).call(function () {
                            o.default.scene.change(0)
                        })
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
    e.MapScene = O
}