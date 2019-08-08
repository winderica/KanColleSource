const function446 = function (t, e, i) {
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
    var o = i(5),
        r = (i(0), i(42)),
        s = i(72),
        a = i(27),
        _ = i(19),
        u = i(29),
        l = i(38),
        c = i(6),
        h = i(1346),
        p = i(141),
        d = i(180),
        f = i(142),
        y = i(182),
        m = i(448),
        g = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._showResult = function () {
                    if (null == e._scene.data.model.gekimetsu_data) {
                        var t = e._scene.view.layer_info2,
                            i = new h.AirUnitAttackResultTelop,
                            n = e._data.plane_count_f.count,
                            o = e._data.plane_count_f.count_stage2;
                        i.play(t, n, o)
                    }
                }, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "data_", {
                get: function () {
                    return this._data
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                this._log();
                var t = this._scene.data.model.map_info.isAirRaid();
                this._canvas = new p.AirWarCanvas(t), this._scene.view.layer_content.addChild(this._canvas), this._createFriendPlanes(), this._createPlanes(this._data.plane_from_e, this._ships_e), this._startAircraftFlightAnimation(), this._startMainTask()
            }, e.prototype._log = function () {}, e.prototype._startMainTask = function () {
                var t = this,
                    e = new a.ParallelTask,
                    i = createjs.Tween.get(null).call(c.SE.play, ["114"]).wait(3450);
                e.add((new _.TweenTask).addTween(i)), e.add(new s.FuncTask(function () {
                    t._showResult(), t._fireDogFight()
                }, 750)), e.add(new s.FuncTask(function () {
                    t._showTaikuCutin()
                }, 900)), e.add(new s.FuncTask(function () {
                    t._damageAtStage1()
                }, 1050)), e.add(new s.FuncTask(function () {
                    t._antiAircraft()
                }, 1200)), e.add(new s.FuncTask(function () {
                    t._damageAtStage2()
                }, 1350)), e.add((new u.SerialTask).add(new l.WaitTask(1700)).add((new a.ParallelTask).add(new y.TaskAirWarTorpedo(this._scene, this._data, this._canvas.planes_f, this._ships_e)).add(new y.TaskAirWarTorpedo(this._scene, this._data, this._canvas.planes_e, this._ships_f)))), e.add(new s.FuncTask(function () {
                    t._showBakuExplosion()
                }, 2950)), e.add(new s.FuncTask(function () {
                    t._showDamage()
                }, 3300)), this._main_task = e, this._main_task.start(function () {
                    t._showDamageNumber()
                })
            }, e.prototype._antiAircraft = function () {
                null == this._scene.data.model.gekimetsu_data && t.prototype._antiAircraft.call(this)
            }, e.prototype._showSeikuResult = function () {
                if (null != this._scene.data.model.gekimetsu_data) {
                    var t = this._scene.view.layer_content;
                    new m.TaskAirWarShowSeiku(t, this.data_.seiku).start()
                }
            }, e.prototype._createFriendPlanes = function () {
                for (var t = (this.data_.airunit_id, this.data_.squadrons.length), e = o.default.height / Math.max(t, 8), i = o.default.height / 2 - e * t / 2, n = [], r = 0; r < t; r++) {
                    var s = this.data_.squadrons[r],
                        a = s.mst_id,
                        _ = new PIXI.Point(-75, i + e * r + .5 * e);
                    if (s.count > 0) {
                        var u = new f.Plane,
                            l = new PIXI.Point(45, 18);
                        u.initialize(a, !0, _, l), n.push(u)
                    }
                    if (s.count > 6) {
                        var u = new f.Plane,
                            l = new PIXI.Point(18, -27);
                        u.initialize(a, !0, _, l), n.push(u)
                    }
                }
                this._canvas.addPlanes_f(n)
            }, e.prototype._getPlaneType = function () {
                return r.PlaneConst.getAirUnitPlaneType()
            }, e
        }(d.TaskAircraftFlightBase);
    e.TaskAirUnit = g
}