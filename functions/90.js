const function90 = function (t, e, i) {
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
    var o = i(28), r = i(40), s = i(248), a = i(249), _ = i(61), u = i(1328), l = i(180), c = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype._start = function () {
            this._data = this._record.raw.air_unit_jet, null == this._data ? this._endTask() : this._preload()
        }, e.prototype._preload = function () {
            var t = this, e = this._data.getTaikuShipIndex(), i = this._scene.data.model.deck_f.ships[e];
            if (null != i) {
                var n = i.mst_id, o = i.isDamaged(), r = this._data.getTaikuSlotMstIDs();
                this._aaCutin = new a.CutinAntiAircraft(n, o, r), this._aaCutin.preload(function () {
                    t._enterEnemy()
                })
            } else this._enterEnemy()
        }, e.prototype._enterEnemy = function () {
            var t = this, e = new o.SerialTask;
            e.add(new _.PhaseEnemyEnter(this._scene, this._record)), e.add(new r.WaitTask(600)), e.start(function () {
                t._showTouchPlane()
            })
        }, e.prototype._showTouchPlane = function () {
            var t = this, e = this._data, i = e.getTouchPlaneFriend(), n = e.getTouchPlaneEnemy();
            new l.TaskShowTouchPlane(this._scene, i, n).start(function () {
                t._animation(e)
            })
        }, e.prototype._animation = function (t) {
            var e = this, i = this._scene.data.model.deck_f.ships, n = this._scene.data.model.deck_e.ships;
            new u.TaskAirUnitJet(this._scene, t, i, n, this._damage_cutin, this._aaCutin).start(function () {
                e._afterAnimetion()
            })
        }, e.prototype._afterAnimetion = function () {
            var t = this._scene.view.raderLayer;
            t.rader_e.touch_plane.hide(), t.rader_f.touch_plane.hide(), this._endTask()
        }, e
    }(s.PhaseAirBase);
    e.PhaseAirUnitJet = c
}