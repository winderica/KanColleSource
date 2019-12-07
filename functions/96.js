const function96 = function (t, e, i) {
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
    var o = i(451),
        r = i(64),
        s = i(1372),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._start = function () {
                this._data = this._record.raw.air_war_jet, 0 == this._hasPhase() ? this._endTask() : this._preload()
            }, e.prototype._cutin = function (t, e) {
                var i = this,
                    n = new o.CutinFunnel;
                n.addCutinFromModel(t, !0), n.addCutinFromModel(e, !0);
                var r = n.view;
                n.preload_task.start(function () {
                    i._scene.view.layer_cutin.addChild(r), n.start(function () {
                        i._scene.view.layer_cutin.removeChild(r), i._showTouchPlane()
                    })
                })
            }, e.prototype._main = function () {
                var t = this,
                    e = this._scene.data.model.deck_f.ships,
                    i = this._scene.data.model.deck_e.ships;
                new s.TaskAirWarJet(this._scene, this._data, e, i, this._damage_cutin, this._aaCutin).start(function () {
                    t._endTask()
                })
            }, e
        }(r.PhaseAirWar);
    e.PhaseAirWarJet = a
}