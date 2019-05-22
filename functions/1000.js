const function1000 = function (t, e, i) {
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
        a = i(1001),
        _ = i(1002),
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
                if (441 == i)
                    for (var n = [9, 10, 8, 11, 18, 7, 17], o = 0, r = e; o < r.length; o++) {
                        var s = r[o];
                        if (null != s) {
                            var a = s.shipTypeID;
                            if (n.indexOf(a) > -1) return {
                                result: !1,
                                reason: 45
                            }
                        }
                    } else if (442 == i)
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
                if ([3, 4].indexOf(this._map.getSelectedOperationType()) > -1)
                    if (441 == i)
                        for (var u = 0, c = e; u < c.length; u++) {
                            var s = c[u];
                            if (null != s) {
                                var h = s.label;
                                if (0 != h && 1 != h) return {
                                    result: !1,
                                    reason: 19
                                }
                            }
                        } else if (442 == i)
                            for (var p = 0, d = e; p < d.length; p++) {
                                var s = d[p];
                                if (null != s) {
                                    var h = s.label;
                                    if (0 != h && 2 != h) return {
                                        result: !1,
                                        reason: 19
                                    }
                                }
                            } else if (443 == i)
                                for (var f = 0, y = e; f < y.length; f++) {
                                    var s = y[f];
                                    if (null != s) {
                                        var h = s.label;
                                        if (0 != h && 3 != h) return {
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