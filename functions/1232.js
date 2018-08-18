const function1232 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(242), a = i(27), _ = i(1233), u = i(1234), l = i(1235), c = i(1236), h = i(1238),
        p = i(1240), d = i(1241), f = i(1245), y = i(1255), v = i(1256), g = i(1257), m = i(1258), b = i(1260),
        w = i(1262), x = i(1266), I = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this) || this;
                return s._scene = e, s._model = i, s._repair_item = n, s._battle_cls = o, s._battle_result_cls = r, s
            }

            return n(e, t), Object.defineProperty(e.prototype, "battle_model", {
                get: function () {
                    return this._battle_model
                }, enumerable: !0, configurable: !0
            }), e.prototype._start = function () {
                this._next = this._model.sortie.getNextCell(), this._init()
            }, e.prototype._init = function () {
                this._scene.view.message_box.text = "", this._compass()
            }, e.prototype._compass = function () {
                var t = this, e = this._scene.view.map.ship_icon, i = new PIXI.Point(e.x, e.y),
                    n = this._scene.view.map.spotLayer.getSpot(this._next.no), o = new PIXI.Point(n.x, n.y);
                if (1 == this._next.hasCompass()) {
                    this._scene.view.message_box.text = "\u3069\u3053\u306b\u9032\u3080\uff1f";
                    var r = new h.AnimCompass;
                    this._scene.view.addChild(r), r.initialize(this._next.rashin_id), r.Play(i, o, function () {
                        r.Dispose(), t._scene.view.removeChild(r), t._scene.view.message_box.text = "", t._turn(o)
                    })
                } else this._turn(o)
            }, e.prototype._turn = function (t) {
                var e, i = this, n = this._scene.view.map.ship_icon,
                    o = this._scene.resInfo.getShipDirection(this._next.no);
                e = 1 == o ? 1 : 2 == o ? 2 : n.x > t.x ? 1 : n.x < t.x ? 2 : n.direction, n.turn(e, function () {
                    i._jake()
                })
            }, e.prototype._jake = function () {
                var t = this;
                if (this._next.jakeID > 0) {
                    var e = this._scene.view.map.ship_icon, i = new PIXI.Point(0, 0),
                        n = this._scene.view.map.spotLayer.getSpot(this._next.no),
                        o = new PIXI.Point(n.x - e.x, n.y - e.y);
                    new u.AnimPlane(e, i, o).start(function () {
                        t._balloon()
                    })
                } else this._balloon()
            }, e.prototype._balloon = function () {
                var t = this;
                if (0 == this._next.balloonID) this._underwayReplenishment(); else {
                    var e = this._model.deck_f.ships[0], i = e.mst_id;
                    o.default.sound.voice.play(i.toString(), 26);
                    var n = this._scene.view.map.ship_icon, r = this._next.balloonID, s = 1;
                    1 == n.direction && (s = 7);
                    var _ = this._model.sortie.map_id, u = this._next.no;
                    383 == _ && 22 == u ? s = 0 : 372 != _ || 9 != u && 18 != u || (s = 2);
                    var h = new a.ParallelTask;
                    h.add(new c.AnimShowMapEnemy(this._scene, this._model, 500)), h.add(new l.AnimBalloon(n, r, s)), h.start(function () {
                        t._underwayReplenishment()
                    })
                }
            }, e.prototype._underwayReplenishment = function () {
                var t = this;
                new d.TaskConfirmReplenishment(this._scene, this._model).start(function () {
                    t._ration()
                })
            }, e.prototype._ration = function () {
                var t = this;
                new p.TaskConfirmRation(this._scene, this._model).start(function () {
                    t._move()
                })
            }, e.prototype._move = function () {
                var t = this;
                new _.AnimShipMove(this._scene, this._model).start(function () {
                    t._showEnemy()
                })
            }, e.prototype._showEnemy = function () {
                var t = this;
                if (1 == this._scene.view.map.enemy_layer.isDisplaying()) this._gimmick(); else {
                    new c.AnimShowMapEnemy(this._scene, this._model).start(function () {
                        t._gimmick()
                    })
                }
            }, e.prototype._gimmick = function () {
                this._AirRaidBattle()
            }, e.prototype._AirRaidBattle = function () {
                var t = this, e = this._scene.model.sortie.area_id, i = this._scene.model.sortie.map_no,
                    n = this._scene.model.sortie.getNextCell(), r = n.getAirraidDataObject(), s = n.hasBokuAirUnit(),
                    a = this._scene.resInfo, _ = this._scene.view.map.plane_layer, u = o.default.view.overLayer,
                    l = this._scene, c = this._scene.view.map.airbaseLayer;
                new x.AirRaidTask(e, i, r, s, a, _, u, l, c, this._battle_cls).start(function () {
                    t._gimmickAfterAirraid()
                })
            }, e.prototype._gimmickAfterAirraid = function () {
                this._cellEvent()
            }, e.prototype._cellEvent = function () {
                var t, e = this, i = this._model.sortie.area_id, n = this._model.sortie.map_no, o = this._next.no,
                    r = this._next.event_id;
                39 != i || 1 != n || 13 != o && 18 != o ? 2 == r ? t = new v.CellTaskItem(this._scene, this._model) : 3 == r ? t = new y.CellTaskHappening(this._scene, this._model) : 4 == r ? t = this._createCellTaskBattle(!1) : 5 == r ? t = this._createCellTaskBattle(!0) : 6 == r ? t = new g.CellTaskFancy(this._scene, this._model) : 7 == r ? t = new m.CellTaskAirReconnaissance(this._scene, this._model) : 8 == r ? t = new b.CellTaskAnchor(this._scene, this._model) : 9 == r && (t = new w.CellTaskLanding(this._scene, this._model)) : t = new v.CellTaskItem(this._scene, this._model), null != t ? t.start(function () {
                    e._endTask()
                }) : this._endTask()
            }, e.prototype._createCellTaskBattle = function (t) {
                var e = this._model.sortie.getNextCell();
                this._battle_model = new s.BattleSceneModel(!1), this._battle_model.updateDeckData(this._model.deck_f, null);
                var i = this._scene.user_select.supply_on_the_sea, n = this._scene.user_select.ration;
                this._battle_model.setMapData(this._repair_item, i, n);
                var o = this._model.sortie.area_id, r = this._model.sortie.map_no, a = e.no,
                    _ = this._next.event_detail_id;
                this._battle_model.map_info.init(o, r, a, t, _);
                var u = this._model.sortie.map.hasNextStage();
                if (1 == e.hasEventMapData()) {
                    var l = this._model.sortie.getNextCell().gauge_max, c = this._model.sortie.getNextCell().gauge_now,
                        h = (this._model.sortie.getGaugeKey(), this._model.sortie.map.gauge_type),
                        p = this._model.sortie.map.getGaugeNum();
                    this._battle_model.setMapGaugeInfo(c, l, h, p, u)
                } else {
                    var l = this._model.sortie.map.defeat_required, c = l - this._model.sortie.map.defeat_count,
                        h = (this._model.sortie.getGaugeKey(), 1), p = this._model.sortie.map.getGaugeNum();
                    this._battle_model.setMapGaugeInfo(c, l, h, p, u)
                }
                return new f.CellTaskBattle(this._scene, this._battle_model, this._battle_cls, this._battle_result_cls)
            }, e
        }(r.TaskBase);
    e.TaskNextSpot = I
}