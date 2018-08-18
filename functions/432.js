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
    var o = i(0), r = i(141), s = i(47), a = i(54), _ = i(1218), u = i(1219), l = i(1220), c = i(1225), h = i(1226),
        p = i(1228), d = i(1231), f = i(1232), y = i(1269), v = i(1270), g = i(1271), m = i(1273), b = i(1275),
        w = i(436), x = i(1277), I = i(1285), T = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._startScene = function () {
                    n._appointAirUnit()
                }, n._battle_cls = e, n._battle_result_cls = i, n._view = new I.ViewMain, n.addChild(n._view), n._resInfo = new l.MapResourceInfo, n._user_select = new c.UserSelectModel, n
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
                var i = this._model.sortie.getNextCell();
                if (1 == i.isDeadEnd()) {
                    var n = this._model.sortie.area_id, o = this._model.sortie.map_no, r = null == t ? 0 : t.m1;
                    39 == n && 2 == o && 1 == r || 39 == n && 3 == o && 1 == r || this._endScene(i)
                } else null != t ? this._preNextAfterBattle(i, t) : this._preNext(i, e)
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
                    if (0 == n.result) i._endScene(t); else {
                        var e = i._model.sortie.area_id, s = i._model.sortie.map_no, a = r.MapConst.getMapBGMID(e, s);
                        1 == a.battle_bgm ? o.default.sound.bgm.playBattleBGM(a.id) : o.default.sound.bgm.play(a.id);
                        var _ = i._model.deck_f, l = [_.id];
                        0 != _.type && l.push(_.id_second);
                        var c = i._model.sortie.getNextCell().no;
                        new u.APIShipDeck(l, e, s, c).start(function () {
                            var e = i._model.deck_f.id, n = o.default.model.deck.get(e);
                            i._model.deck_f.updateShipList(n), i._preNext(t)
                        })
                    }
                })
            }, e.prototype._selectTaihaShingun = function (t, e, i, n) {
                var s = this, a = new v.TaskTaihaShingunSelect(this._view, i, n);
                a.start(function () {
                    var e = a.result;
                    if (0 == e) s._endScene(t); else {
                        var i = s._model.sortie.area_id, n = s._model.sortie.map_no, _ = r.MapConst.getMapBGMID(i, n);
                        1 == _.battle_bgm ? o.default.sound.bgm.playBattleBGM(_.id) : o.default.sound.bgm.play(_.id);
                        var l = s._model.deck_f, c = [l.id];
                        0 != l.type && c.push(l.id_second);
                        var h = s._model.sortie.getNextCell().no;
                        new u.APIShipDeck(c, i, n, h).start(function () {
                            var i = s._model.deck_f.id, n = o.default.model.deck.get(i);
                            s._model.deck_f.updateShipList(n);
                            s._model.deck_f.ships[0].useRepairItem();
                            s._preNext(t, e)
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
    e.MapScene = T
}