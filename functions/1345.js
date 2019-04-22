const function1345 = function (t, e, i) {
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
    var o = i(44),
        r = i(27),
        s = i(29),
        a = i(72),
        _ = i(19),
        l = i(40),
        u = i(6),
        c = i(449),
        h = i(442),
        p = i(446),
        d = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._start = function () {
                this._log();
                var t = this._scene.data.model.map_info.isAirRaid();
                this._canvas = new h.AirWarJetCanvas(t), this._scene.view.layer_content.addChild(this._canvas), this._createPlanes(this._data.plane_from_f, this._ships_f), this._createPlanes(this._data.plane_from_e, this._ships_e), this._startAircraftFlightAnimation(), this._startMainTask()
            }, e.prototype._log = function () {}, e.prototype._startMainTask = function () {
                var t = this,
                    e = new r.ParallelTask,
                    i = createjs.Tween.get(null).call(u.SE.play, ["220"]).wait(1700);
                e.add((new _.TweenTask).addTween(i)), e.add(new a.FuncTask(function () {
                    t._fireDogFight()
                }, 350)), e.add(new a.FuncTask(function () {
                    t._showTaikuCutin()
                }, 450)), e.add(new a.FuncTask(function () {
                    t._damageAtStage1()
                }, 500)), e.add(new a.FuncTask(function () {
                    t._antiAircraft()
                }, 600)), e.add(new a.FuncTask(function () {
                    t._damageAtStage2()
                }, 700)), e.add((new s.SerialTask).add(new l.WaitTask(850)).add((new r.ParallelTask).add(new p.TaskAerialTorpedoJet(this._scene, this._data, this._canvas.planes_f, this._ships_e)).add(new p.TaskAerialTorpedoJet(this._scene, this._data, this._canvas.planes_e, this._ships_f)))), e.add(new a.FuncTask(function () {
                    t._showBakuExplosion()
                }, 1500)), e.add(new a.FuncTask(function () {
                    t._showDamage()
                }, 1650)), this._main_task = e, this._main_task.start(function () {
                    t._showDamageNumber()
                })
            }, e.prototype._showSeikuResult = function () {}, e.prototype._getPlaneType = function () {
                return o.PlaneConst.getJetPlaneType()
            }, e
        }(c.TaskAirWar);
    e.TaskAirWarJet = d
}