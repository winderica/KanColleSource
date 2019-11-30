const function1021 = function (t, e, i) {
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
        a = i(1022),
        _ = i(1023),
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
                if (461 == i)
                    for (var n = [11, 18, 7, 8, 9, 10], o = 0, r = e; o < r.length; o++) {
                        var s = r[o];
                        if (null != s) {
                            var a = s.shipTypeID;
                            if (n.indexOf(a) > -1 || "\u3042\u304d\u3064\u307e\u308b" == s.yomi) return {
                                result: !1,
                                reason: 52
                            }
                        }
                    }
                if (464 == i)
                    for (var n = [11, 18], _ = 0, l = e; _ < l.length; _++) {
                        var s = l[_];
                        if (null != s) {
                            var a = s.shipTypeID;
                            if (n.indexOf(a) > -1) return {
                                result: !1,
                                reason: 38
                            }
                        }
                    }
                var u = this._map.getSelectedOperationType(),
                    c = [3, 4].indexOf(u) > -1;
                if (c)
                    if (461 == i)
                        for (var h = 0, p = e; h < p.length; h++) {
                            var s = p[h];
                            if (null != s) {
                                var d = s.label;
                                if (0 != d && 1 != d) return {
                                    result: !1,
                                    reason: 19
                                }
                            }
                        } else if (462 == i)
                            for (var f = 0, y = e; f < y.length; f++) {
                                var s = y[f];
                                if (null != s) {
                                    var d = s.label;
                                    if (0 != d && 2 != d) return {
                                        result: !1,
                                        reason: 19
                                    }
                                }
                            } else if (463 == i)
                                for (var m = 0, g = e; m < g.length; m++) {
                                    var s = g[m];
                                    if (null != s) {
                                        var d = s.label;
                                        if (0 != d && 3 != d) return {
                                            result: !1,
                                            reason: 19
                                        }
                                    }
                                } else if (464 == i)
                                    for (var v = 0, b = e; v < b.length; v++) {
                                        var s = b[v];
                                        if (null != s) {
                                            var d = s.label;
                                            if (0 != d && 4 != d) return {
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