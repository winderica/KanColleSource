const function476 = function (t, e, i) {
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
    var o = i(38),
        r = i(28),
        s = i(2),
        a = i(1434),
        _ = i(1438),
        u = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._record = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._showLight()
            }, e.prototype._showLight = function () {
                var t = this,
                    e = this._scene.view.layer_cutin,
                    i = this._getFlareBanner_f(),
                    n = this._getFlareBanner_e(),
                    o = this._createSearchLightTask();
                new a.TaskFlareEffect(e, i, n, o).start(function () {
                    t._endTask()
                })
            }, e.prototype._createSearchLightTask = function () {
                var t = this._getShips_f(),
                    e = this._getSearchLightAnimationTask(t),
                    i = this._getShips_e(),
                    n = this._getSearchLightAnimationTask(i),
                    o = new r.ParallelTask;
                return o.add(e), o.add(n), o
            }, e.prototype._getSearchLightAnimationTask = function (t) {
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e];
                    if (null != n && (!(n.hp_now <= 1) && 1 != n.isTaihi() && 1 == n.hasSlotByEquipType(o.EquipType._42_LARGE_TANSHOTO))) {
                        var r = this._scene.view.bannerGroupLayer.getBanner(n);
                        return new _.TaskSearchLightAnimation(r, !0)
                    }
                }
                for (var s = 0, a = t; s < a.length; s++) {
                    var n = a[s];
                    if (null != n && (!(n.hp_now <= 1) && 1 != n.isTaihi() && 1 == n.hasSlotByEquipType(o.EquipType._29_TANSHOTO))) {
                        var r = this._scene.view.bannerGroupLayer.getBanner(n);
                        return new _.TaskSearchLightAnimation(r, !1)
                    }
                }
                return null
            }, e
        }(s.TaskBase);
    e.PhaseLightingBase = u
}