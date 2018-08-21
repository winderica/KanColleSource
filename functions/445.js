const function445 = function (t, e, i) {
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
    var o = i(27), r = i(28), s = i(69), a = i(19), _ = i(40), u = i(6), l = i(136), c = i(175), h = i(441),
        p = i(177), d = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return n(e, t), Object.defineProperty(e.prototype, "data_", {
                get: function () {
                    return this._data
                }, enumerable: !0, configurable: !0
            }), e.prototype._start = function () {
                this._log();
                var t = this._scene.data.model.map_info.isAirRaid();
                this._canvas = new l.AirWarCanvas(t), this._scene.view.layer_content.addChild(this._canvas), this._createPlanes(this._data.plane_from_f, this._ships_f), this._createPlanes(this._data.plane_from_e, this._ships_e), this._startAircraftFlightAnimation(), this._startMainTask()
            }, e.prototype._log = function () {
            }, e.prototype._startMainTask = function () {
                var t = this, e = new o.ParallelTask, i = createjs.Tween.get(null).call(u.SE.play, ["114"]).wait(3450);
                e.add((new a.TweenTask).addTween(i)), e.add(new s.FuncTask(function () {
                    t._fireDogFight()
                }, 750)), e.add(new s.FuncTask(function () {
                    t._showTaikuCutin()
                }, 900)), e.add(new s.FuncTask(function () {
                    t._damageAtStage1()
                }, 1050)), e.add(new s.FuncTask(function () {
                    t._antiAircraft()
                }, 1200)), e.add(new s.FuncTask(function () {
                    t._damageAtStage2()
                }, 1350)), e.add((new r.SerialTask).add(new _.WaitTask(1700)).add((new o.ParallelTask).add(new p.TaskAirWarTorpedo(this._scene, this._data, this._canvas.planes_f, this._ships_e)).add(new p.TaskAirWarTorpedo(this._scene, this._data, this._canvas.planes_e, this._ships_f)))), e.add(new s.FuncTask(function () {
                    t._showBakuExplosion()
                }, 2950)), e.add(new s.FuncTask(function () {
                    t._showDamage()
                }, 3300)), e.add(new s.FuncTask(function () {
                    t._showDamageNumber()
                }, 3600)), this._main_task = e, this._main_task.start(function () {
                })
            }, e.prototype._showSeikuResult = function () {
                var t = this._scene.view.layer_content;
                new h.TaskAirWarShowSeiku(t, this.data_.seiku).start()
            }, e
        }(c.TaskAircraftFlightBase);
    e.TaskAirWar = d
}