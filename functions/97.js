const function97 = function (t, e, i) {
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
    var o = i(30),
        r = i(39),
        s = i(253),
        a = i(254),
        _ = i(65),
        l = i(450),
        u = i(1380),
        c = i(185),
        h = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._current_idx = 0, e
            }
            return n(e, t), e.prototype._start = function () {
                this._data = this._record.raw.air_unit, 0 == this._hasPhase() ? this._endTask() : (this._scene.view.layer_title.show(4), this._enterEnemy())
            }, e.prototype._enterEnemy = function () {
                var t = this,
                    e = new o.SerialTask;
                e.add(new _.PhaseEnemyEnter(this._scene, this._record)), e.add(new r.WaitTask(600)), e.start(function () {
                    null == t._scene.data.model.gekimetsu_data ? t._showTelop() : t._beforeAnimation()
                })
            }, e.prototype._showTelop = function () {
                var t = this,
                    e = this._scene.view.layer_info2;
                new u.TaskAirUnitAttackStartTelop(e).start(function () {
                    t._beforeAnimation()
                })
            }, e.prototype._beforeAnimation = function () {
                var t = this,
                    e = this._data[this._current_idx],
                    i = e.getTaikuShipIndex(),
                    n = this._scene.data.model.deck_f.ships[i];
                if (null != n) {
                    var o = n.mst_id,
                        r = n.isDamaged(),
                        s = e.getTaikuSlotMstIDs();
                    this._aaCutin = new a.CutinAntiAircraft(o, r, s), this._aaCutin.preload(function () {
                        t._showTouchPlane(e)
                    })
                } else this._showTouchPlane(e)
            }, e.prototype._showTouchPlane = function (t) {
                var e = this,
                    i = t.getTouchPlaneFriend(),
                    n = t.getTouchPlaneEnemy();
                new c.TaskShowTouchPlane(this._scene, i, n).start(function () {
                    e._animation(t)
                })
            }, e.prototype._animation = function (t) {
                var e = this,
                    i = this._scene.data.model.deck_f.ships,
                    n = this._scene.data.model.deck_e.ships;
                new l.TaskAirUnit(this._scene, t, i, n, this._damage_cutin, this._aaCutin).start(function () {
                    e._afterAnimetion()
                })
            }, e.prototype._afterAnimetion = function () {
                var t = this._scene.view.raderLayer;
                t.rader_e.touch_plane.hide(), t.rader_f.touch_plane.hide(), this._current_idx++, this._current_idx < this._data.length ? this._beforeAnimation() : this._endTask()
            }, e.prototype._endTask = function () {
                var e = this;
                this._scene.view.layer_title.hide(function () {
                    t.prototype._endTask.call(e)
                })
            }, e.prototype._hasPhase = function () {
                return null != this._data && this._data.length > 0
            }, e
        }(s.PhaseAirBase);
    e.PhaseAirUnit = h
}