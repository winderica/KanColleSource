const function1438 = function (t, e, i) {
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
        r = i(2),
        s = i(30),
        a = i(39),
        _ = i(13),
        l = i(54),
        u = i(65),
        c = i(469),
        h = i(470),
        p = i(471),
        d = i(473),
        f = i(474),
        y = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._record = i, n._damage_cutin = new l.PhaseDamageCutin(n._scene), n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this._record.raw.support_air;
                if (null != t) return void this._supportAir(t);
                var e = this._record.raw.support_hou;
                if (null != e) return void this._supportHou(e);
                var i = this._record.raw.support_rai;
                if (null != i) return void this._supportRai(i);
                var n = this._record.raw.support_taisen;
                if (null != n) return void this._supportTaisen(n);
                this._endTask()
            }, e.prototype._supportAir = function (t) {
                var e = this;
                new u.PhaseEnemyEnter(this._scene, this._record).start(function () {
                    e._scene.view.layer_title.show(1);
                    for (var i = e._scene.view.layer_cutin, n = t.getShipList(), r = [], _ = 0, l = n; _ < l.length; _++) {
                        var u = l[_];
                        if (null != u) {
                            var c = o.default.model.ship.get(u.mem_id);
                            null != c ? r.push({
                                mst_id: c.mstID,
                                damaged: u.damaged
                            }) : r.push(null)
                        } else r.push(null)
                    }
                    var h = new s.SerialTask,
                        d = new f.TaskSupportDeckCutin(i, r);
                    h.add(d);
                    var y = r[0].mst_id,
                        g = r[0].damaged;
                    h.add(new m(i, y, g));
                    var v = e._scene.data.model.deck_f.ships,
                        b = e._scene.data.model.deck_e.ships;
                    h.add(new p.TaskSupportAir(e._scene, t, v, b, e._damage_cutin, null)), h.start(function () {
                        e._scene.view.layer_title.hide(function () {
                            new a.WaitTask(800).start(function () {
                                e._endTask()
                            })
                        })
                    })
                })
            }, e.prototype._supportHou = function (t) {
                var e = this;
                new u.PhaseEnemyEnter(this._scene, this._record).start(function () {
                    e._scene.view.layer_title.show(2);
                    for (var i = e._scene.view.layer_cutin, n = t.getShipList(), r = [], _ = 0, l = n; _ < l.length; _++) {
                        var u = l[_];
                        if (null != u) {
                            var h = o.default.model.ship.get(u.mem_id);
                            null != h ? r.push({
                                mst_id: h.mstID,
                                damaged: u.damaged
                            }) : r.push(null)
                        } else r.push(null)
                    }
                    var p = new s.SerialTask,
                        d = new f.TaskSupportDeckCutin(i, r);
                    p.add(d);
                    var y = r[0].mst_id,
                        g = r[0].damaged;
                    p.add(new m(i, y, g)), p.add(new c.PhaseSupportHou(e._scene, t, e._scene.data.model.deck_e.ships)), p.start(function () {
                        e._scene.view.layer_title.hide(function () {
                            new a.WaitTask(800).start(function () {
                                e._endTask()
                            })
                        })
                    })
                })
            }, e.prototype._supportRai = function (t) {
                var e = this;
                new u.PhaseEnemyEnter(this._scene, this._record).start(function () {
                    e._scene.view.layer_title.show(3);
                    for (var i = e._scene.view.layer_cutin, n = t.getShipList(), r = [], _ = 0, l = n; _ < l.length; _++) {
                        var u = l[_];
                        if (null != u) {
                            var c = o.default.model.ship.get(u.mem_id);
                            null != c ? r.push({
                                mst_id: c.mstID,
                                damaged: u.damaged
                            }) : r.push(null)
                        } else r.push(null)
                    }
                    var p = new s.SerialTask,
                        d = new f.TaskSupportDeckCutin(i, r);
                    p.add(d);
                    var y = r[0].mst_id,
                        g = r[0].damaged;
                    p.add(new m(i, y, g)), p.add(new h.PhaseSupportRai(e._scene, t, e._scene.data.model.deck_e.ships)), p.start(function () {
                        e._scene.view.layer_title.hide(function () {
                            new a.WaitTask(800).start(function () {
                                e._endTask()
                            })
                        })
                    })
                })
            }, e.prototype._supportTaisen = function (t) {
                var e = this;
                new u.PhaseEnemyEnter(this._scene, this._record).start(function () {
                    for (var i = e._scene.view.layer_cutin, n = t.getShipList(), r = [], _ = 0, l = n; _ < l.length; _++) {
                        var u = l[_];
                        if (null != u) {
                            var c = o.default.model.ship.get(u.mem_id);
                            null != c ? r.push({
                                mst_id: c.mstID,
                                damaged: u.damaged
                            }) : r.push(null)
                        } else r.push(null)
                    }
                    var h = new s.SerialTask,
                        p = new f.TaskSupportDeckCutin(i, r);
                    h.add(p);
                    var y = r[0].mst_id,
                        g = r[0].damaged;
                    h.add(new m(i, y, g));
                    var v = e._scene.data.model.deck_f.ships,
                        b = e._scene.data.model.deck_e.ships;
                    h.add(new d.TaskSupportTaisen(e._scene, t, v, b, e._damage_cutin, null)), h.start(function () {
                        new a.WaitTask(800).start(function () {
                            e._endTask()
                        })
                    })
                })
            }, e.prototype._endTask = function () {
                var e = this;
                this._damage_cutin.start(function () {
                    e._scene = null, e._record = null, e._damage_cutin = null, t.prototype._endTask.call(e)
                })
            }, e
        }(r.TaskBase);
    e.PhaseSupport = y;
    var m = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._layer = e, o._mst_id = i, o._damaged = n, o
        }
        return n(e, t), e.prototype._start = function () {
            var t = this,
                e = new _.ShipLoader;
            e.add(this._mst_id, this._damaged, "full"), e.load(function () {
                t._show()
            })
        }, e.prototype._show = function () {
            var t = this,
                e = o.default.model.ship_graph.get(this._mst_id).getBattleOffset(this._damaged),
                i = -740 + e.x,
                n = o.default.resources.getShip(this._mst_id, this._damaged, "full");
            this._s = new PIXI.Sprite(n), this._s.x = i, this._s.y = -105 + e.y, this._s.alpha = 0, this._layer.addChild(this._s), createjs.Tween.get(this._s).to({
                x: i + 665,
                alpha: 1
            }, 500).to({
                x: i + 740
            }, 300).call(function () {
                o.default.sound.voice.playAtRandom(t._mst_id.toString(), [16, 17, 18], [33, 33, 34])
            }).wait(300).to({
                x: i + 1070,
                alpha: 0
            }, 500).call(function () {
                t._layer.removeChild(t._s), t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._layer = null, this._s = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase);
    e.TaskFlagShip = m
}