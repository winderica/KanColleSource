const function998 = function (t, e, i) {
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
        r = i(17),
        s = i(2),
        a = i(999),
        _ = i(1e3),
        l = function () {
            function t() {}
            return t.prototype.getPreLoadTask = function () {
                return this._model = new a.EventSortieConditionModel, new u(this._model)
            }, t.prototype.update = function (t) {
                this._map = t
            }, t.prototype.check = function (t, e) {
                if (this._map.area_id != r.EVENT_AREA_ID) return {
                    result: !0,
                    reason: 0
                };
                var i = this._checkCommon();
                return null != i ? i : (i = this._check(t, e), null != i ? i : {
                    result: !0,
                    reason: 0
                })
            }, t.prototype._checkCommon = function () {
                var t = this._model.win_count,
                    e = this._model.lose_count;
                if (0 == t && 0 == e) return {
                    result: !1,
                    reason: 13
                };
                if (this._model.win_rate < .75) return {
                    result: !1,
                    reason: 15
                };
                var i = o.default.model.basic.shipMax,
                    n = o.default.model.ship.num;
                return i - n < 5 ? {
                    result: !1,
                    reason: 16
                } : (i = o.default.model.basic.slotMax, n = o.default.model.slot.num, i - n < 20 ? {
                    result: !1,
                    reason: 17
                } : 0 == this._map.getSelectedOperationType() ? {
                    result: !1,
                    reason: 18
                } : null)
            }, t.prototype._check = function (t, e) {
                var i = this._map.mst_id;
                if (431 == i)
                    for (var n = 0, o = e; n < o.length; n++) {
                        var r = o[n];
                        if (null != r) {
                            var s = r.shipTypeID;
                            if ([8, 9, 10, 11, 18, 7, 17].indexOf(s) > -1) return {
                                result: !1,
                                reason: 45
                            }
                        }
                    } else if (432 == i)
                        for (var a = 0, _ = e; a < _.length; a++) {
                            var r = _[a];
                            if (null != r) {
                                var s = r.shipTypeID;
                                if ([11, 18].indexOf(s) > -1) return {
                                    result: !1,
                                    reason: 38
                                }
                            }
                        }
                var l = this._map.getSelectedOperationType(),
                    u = [3, 4].indexOf(l) > -1;
                if (431 == i && u)
                    for (var c = 0, h = e; c < h.length; c++) {
                        var r = h[c];
                        if (null != r) {
                            var p = r.label;
                            if (0 != p && 1 != p) return {
                                result: !1,
                                reason: 19
                            }
                        }
                    }
                if (432 == i && u) {
                    if (1 == this._map.getGaugeNum() || [0, 3].indexOf(t) > -1)
                        for (var d = 0, f = e; d < f.length; d++) {
                            var r = f[d];
                            if (null != r) {
                                var p = r.label;
                                if (0 != p && 2 != p) return {
                                    result: !1,
                                    reason: 19
                                }
                            }
                        } else
                            for (var y = 0, m = e; y < m.length; y++) {
                                var r = m[y];
                                if (null != r) {
                                    var p = r.label;
                                    if (0 != p && 3 != p) return {
                                        result: !1,
                                        reason: 19
                                    }
                                }
                            }
                }
                if (433 == i && u)
                    for (var g = 0, v = e; g < v.length; g++) {
                        var r = v[g];
                        if (null != r) {
                            var p = r.label;
                            if (0 != p && 4 != p) return {
                                result: !1,
                                reason: 19
                            }
                        }
                    }
                return {
                    result: !0,
                    reason: 0
                }
            }, t
        }();
    e.EventSortieCondition = l;
    var u = function (t) {
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