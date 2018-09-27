const function996 = function (t, e, i) {
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
    var o = i(0), r = i(18), s = i(2), a = i(997), _ = i(998), u = function () {
        function t() {
        }

        return t.prototype.getPreLoadTask = function () {
            return this._model = new a.EventSortieConditionModel, new l(this._model)
        }, t.prototype.update = function (t) {
            this._map = t
        }, t.prototype.check = function (t, e) {
            if (this._map.area_id != r.EVENT_AREA_ID) return { result: !0, reason: 0 };
            var i = this._checkCommon();
            return null != i ? i : (i = this._check(t, e), null != i ? i : { result: !0, reason: 0 })
        }, t.prototype._checkCommon = function () {
            var t = this._model.win_count, e = this._model.lose_count;
            if (0 == t && 0 == e) return { result: !1, reason: 13 };
            if (this._model.win_rate < .75) return { result: !1, reason: 15 };
            var i = o.default.model.basic.shipMax, n = o.default.model.ship.num;
            return i - n < 5 ? {
                result: !1,
                reason: 16
            } : (i = o.default.model.basic.slotMax, n = o.default.model.slot.num, i - n < 20 ? {
                result: !1,
                reason: 17
            } : 0 == this._map.getSelectedOperationType() ? { result: !1, reason: 18 } : null)
        }, t.prototype._check = function (t, e) {
            var i = this._map.mst_id;
            if (421 == i) for (var n = 0, o = e; n < o.length; n++) {
                var r = o[n];
                if (null != r) {
                    var s = r.shipTypeID;
                    if (8 == s || 9 == s || 10 == s) return { result: !1, reason: 42 };
                    if (7 == s || 11 == s || 18 == s) return { result: !1, reason: 42 }
                }
            }
            var a = this._map.getSelectedOperationType();
            if (421 != i || 3 != a && 4 != a) if (422 != i || 3 != a && 4 != a) if (423 != i || 3 != a && 4 != a) if (424 != i || 3 != a && 4 != a) {
                if (425 == i && 4 == a) {
                    var _ = this._map.getGaugeNum();
                    if (1 == _) for (var u = 0, l = e; u < l.length; u++) {
                        var r = l[u];
                        if (null != r) {
                            var c = r.label;
                            if (0 != c && 5 != c) return { result: !1, reason: 19 }
                        }
                    } else if (1 == t) for (var h = 0, p = e; h < p.length; h++) {
                        var r = p[h];
                        if (null != r) {
                            var c = r.label;
                            if (0 != c && 5 != c) return { result: !1, reason: 43 }
                        }
                    } else for (var d = 0, f = e; d < f.length; d++) {
                        var r = f[d];
                        if (null != r) {
                            var c = r.label;
                            if (0 != c && 6 != c) return { result: !1, reason: 44 }
                        }
                    }
                }
            } else for (var y = 0, v = e; y < v.length; y++) {
                var r = v[y];
                if (null != r) {
                    var c = r.label;
                    if (0 != c && 4 != c) return { result: !1, reason: 19 }
                }
            } else for (var g = 0, m = e; g < m.length; g++) {
                var r = m[g];
                if (null != r) {
                    var c = r.label;
                    if (0 != c && 3 != c) return { result: !1, reason: 19 }
                }
            } else for (var b = 0, w = e; b < w.length; b++) {
                var r = w[b];
                if (null != r) {
                    var c = r.label;
                    if (0 != c && 2 != c) return { result: !1, reason: 19 }
                }
            } else for (var x = 0, I = e; x < I.length; x++) {
                var r = I[x];
                if (null != r) {
                    var c = r.label;
                    if (0 != c && 1 != c) return { result: !1, reason: 19 }
                }
            }
            return { result: !0, reason: 0 }
        }, t
    }();
    e.EventSortieCondition = u;
    var l = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onComplete = function () {
                i._endTask()
            }, i._model = e, i
        }

        return n(e, t), e.prototype._start = function () {
            new _.APIEventSortieCondition(this._model).start(this._onComplete)
        }, e.prototype._endTask = function () {
            this._model = null, t.prototype._endTask.call(this)
        }, e
    }(s.TaskBase)
}