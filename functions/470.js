const function470 = function (t, e, i) {
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
        r = i(72),
        s = i(27),
        a = i(20),
        _ = i(29),
        l = i(38),
        u = i(6),
        c = i(145),
        h = i(181),
        p = i(122),
        d = i(469),
        f = i(182),
        y = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "data_", {
                get: function () {
                    return this._data
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                this._log();
                this._canvas = new c.AirWarCanvas(!1), this._scene.view.layer_content.addChild(this._canvas), this._createFriendPlanes(), this._createPlanes(this._data.plane_from_e, this._ships_e), this._startAircraftFlightAnimation(), this._startMainTask()
            }, e.prototype._log = function () {}, e.prototype._startMainTask = function () {
                var t = this,
                    e = new s.ParallelTask,
                    i = createjs.Tween.get(null).call(u.SE.play, ["114"]).wait(3450);
                e.add((new a.TweenTask).addTween(i)), e.add(new r.FuncTask(function () {
                    t._fireDogFight()
                }, 750)), e.add(new r.FuncTask(function () {
                    t._showTaikuCutin()
                }, 900)), e.add(new r.FuncTask(function () {
                    t._damageAtStage1()
                }, 1050)), e.add(new r.FuncTask(function () {
                    t._antiAircraft()
                }, 1200)), e.add(new r.FuncTask(function () {
                    t._damageAtStage2()
                }, 1350)), e.add((new _.SerialTask).add(new l.WaitTask(1700)).add((new s.ParallelTask).add(new d.TaskAirSupportTorpedo(this._scene, this._data, this._canvas.planes_f, this._ships_e)).add(new f.TaskAirWarTorpedo(this._scene, this._data, this._canvas.planes_e, this._ships_f)))), e.add(new r.FuncTask(function () {
                    t._showBakuExplosion()
                }, 2950)), e.add(new r.FuncTask(function () {
                    t._showDamage()
                }, 3300)), this._main_task = e, this._main_task.start(function () {
                    t._showDamageNumber()
                })
            }, e.prototype._createFriendPlanes = function () {
                for (var t = 0, e = this.data_.getShipList(), i = 0, n = e; i < n.length; i++) {
                    var r = n[i],
                        s = r.mem_id,
                        a = o.default.model.ship.get(s);
                    if (null != a)
                        for (var _ = a.getSlotitems(), l = 0; l < _.length; l++) {
                            var u = _[l];
                            if (null != u) {
                                var c = a.getSlotitemTousai(l);
                                u.taisen > 0 && c > 0 && t++
                            }
                        }
                }
                for (var h = [], l = 0; l < t; l++) {
                    var d = new p.Plane,
                        f = new PIXI.Point(45 * Math.random() - 75 - 23, 360 / t * l + 150 + (45 * Math.random() - 23)),
                        y = new PIXI.Point;
                    d.initialize(16, !0, f, y), h.push(d)
                }
                this._canvas.addPlanes_f(h)
            }, e
        }(h.TaskAircraftFlightBase);
    e.TaskSupportTaisen = y
}