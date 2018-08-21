const function460 = function (t, e, i) {
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
    var o = i(27), r = i(2), s = i(1362), a = i(1366), _ = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._scene = e, n._record = i, n
        }

        return n(e, t), e.prototype._start = function () {
            this._showLight()
        }, e.prototype._showLight = function () {
            var t = this, e = this._scene.view.layer_cutin, i = this._getFlareBanner_f(),
                n = this._getFlareBanner_e(), o = this._createSearchLightTask();
            new s.TaskFlareEffect(e, i, n, o).start(function () {
                t._endTask()
            })
        }, e.prototype._createSearchLightTask = function () {
            var t = this._getShips_f(), e = this._getSearchLightAnimationTask(t), i = this._getShips_e(),
                n = this._getSearchLightAnimationTask(i), r = new o.ParallelTask;
            return r.add(e), r.add(n), r
        }, e.prototype._getSearchLightAnimationTask = function (t) {
            for (var e = 0, i = t; e < i.length; e++) {
                var n = i[e];
                if (null != n && (!(n.hp_now <= 1) && 1 != n.isTaihi() && 1 == n.hasSlotByEquipType(42))) {
                    var o = this._scene.view.bannerGroupLayer.getBanner(n);
                    return new a.TaskSearchLightAnimation(o, !0)
                }
            }
            for (var r = 0, s = t; r < s.length; r++) {
                var n = s[r];
                if (null != n && (!(n.hp_now <= 1) && 1 != n.isTaihi() && 1 == n.hasSlotByEquipType(29))) {
                    var o = this._scene.view.bannerGroupLayer.getBanner(n);
                    return new a.TaskSearchLightAnimation(o, !1)
                }
            }
            return null
        }, e
    }(r.TaskBase);
    e.PhaseLightingBase = _
}