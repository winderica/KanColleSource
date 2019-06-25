const function64 = function (t, e, i) {
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
    var o = i(247),
        r = i(248),
        s = i(447),
        a = i(183),
        _ = i(449),
        u = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._start = function () {
                this._data = this._record.raw.air_war, 0 == this._hasPhase() ? this._endTask() : this._preload()
            }, e.prototype._preload = function () {
                var t = this,
                    e = this._data.getTaikuShipIndex(),
                    i = this._scene.data.model.deck_f.ships[e];
                if (null != i) {
                    var n = i.mst_id,
                        o = i.isDamaged(),
                        s = this._data.getTaikuSlotMstIDs();
                    this._aaCutin = new r.CutinAntiAircraft(n, o, s), this._aaCutin.preload(function () {
                        t._selectCaptain()
                    })
                } else this._selectCaptain()
            }, e.prototype._selectCaptain = function () {
                var t;
                if (this._data.plane_from_f.length > 0) {
                    var e = this._data.plane_from_f[0];
                    t = this._scene.data.model.deck_f.ships[e]
                }
                var i;
                if (this._data.plane_from_e.length > 0 && 0 == this._scene.data.model.map_info.isAirRaid()) {
                    var e = this._data.plane_from_e[0];
                    i = this._scene.data.model.deck_e.ships[e]
                }
                null != t || null != i ? this._cutin(t, i) : this._showTouchPlane()
            }, e.prototype._cutin = function (t, e) {
                var i = this,
                    n = new s.CutinFunnel;
                n.addCutinFromModel(t, !1), n.addCutinFromModel(e, !1);
                var o = n.view;
                n.preload_task.start(function () {
                    i._scene.view.layer_title.show(4), i._scene.view.layer_cutin.addChild(o), n.start(function () {
                        i._scene.view.layer_cutin.removeChild(o), i._showTouchPlane()
                    })
                })
            }, e.prototype._showTouchPlane = function () {
                var t = this,
                    e = this._data.getTouchPlaneFriend(),
                    i = this._data.getTouchPlaneEnemy();
                new a.TaskShowTouchPlane(this._scene, e, i).start(function () {
                    t._main()
                })
            }, e.prototype._main = function () {
                var t = this,
                    e = this._scene.data.model.deck_f.ships,
                    i = this._scene.data.model.deck_e.ships;
                new _.TaskAirWar(this._scene, this._data, e, i, this._damage_cutin, this._aaCutin).start(function () {
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                var e = this,
                    i = this._scene.view.raderLayer;
                i.rader_e.touch_plane.hide(), i.rader_f.touch_plane.hide(), this._scene.view.layer_title.hide(function () {
                    t.prototype._endTask.call(e)
                })
            }, e.prototype._hasPhase = function () {
                if (null == this._data) return !1;
                if (1 == this._data.stage3_f.hasDamage()) return !0;
                if (1 == this._data.stage3_e.hasDamage()) return !0;
                var t = !1;
                0 == this._record.raw.sakuteki.isSuccess_f() ? t = !0 : 0 == this._data.plane_from_f.length ? t = !0 : 1 == this._scene.data.model.deck_e.isSubmarineAll() && (t = !0);
                var e = !1;
                return 0 == this._record.raw.sakuteki.isSuccess_e() ? e = !0 : 0 == this._data.plane_from_e.length ? e = !0 : 1 == this._scene.data.model.deck_f.isSubmarineAll() && (e = !0), 1 != t || 1 != e
            }, e
        }(o.PhaseAirBase);
    e.PhaseAirWar = u
}