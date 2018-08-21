const function993 = function (t, e, i) {
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
    var o = i(0), r = i(17), s = i(2), a = i(994), _ = i(995), u = function () {
        function t() {
        }

        return t.prototype.getPreLoadTask = function () {
            return this._model = new a.EventSortieConditionModel, new l(this._model)
        }, t.prototype.update = function (t) {
            this._map = t
        }, t.prototype.check = function (t, e) {
            if (this._map.area_id != r.EVENT_AREA_ID) return { result: !0, reason: 0 };
            var i = this._checkCommon();
            return null != i ? i : (i = this._check41(t, e), null != i ? i : { result: !0, reason: 0 })
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
        }, t.prototype._check41 = function (t, e) {
            var i = this._map.mst_id;
            if (411 == i) for (var n = 0, o = e; n < o.length; n++) {
                var r = o[n];
                if (null != r) {
                    var s = r.shipTypeID;
                    if (11 == s || 18 == s) return { result: !1, reason: 39 };
                    if (13 == s || 14 == s) return { result: !1, reason: 39 }
                }
            } else if (415 == i) for (var a = 0, _ = e; a < _.length; a++) {
                var r = _[a];
                if (null != r) {
                    var s = r.shipTypeID;
                    if (8 == s || 9 == s || 10 == s) return { result: !1, reason: 36 };
                    if (7 == s || 11 == s || 18 == s) return { result: !1, reason: 36 }
                }
            } else if (416 == i) for (var u = 0, l = e; u < l.length; u++) {
                var r = l[u];
                if (null != r) {
                    var s = r.shipTypeID;
                    if (9 == s || 10 == s) return { result: !1, reason: 41 };
                    if (7 == s || 11 == s || 18 == s) return { result: !1, reason: 41 }
                }
            }
            var c = this._map.getSelectedOperationType();
            if (3 == c || 4 == c) for (var h = 0, p = e; h < p.length; h++) {
                var r = p[h];
                if (null != r) {
                    var d = r.label;
                    if (411 == i) {
                        if (0 != d && 1 != d) return { result: !1, reason: 19 }
                    } else if (412 == i) {
                        if (0 != d && 2 != d && 3 != d) return { result: !1, reason: 19 }
                    } else if (413 == i) {
                        if (0 != d && 4 != d) return { result: !1, reason: 19 }
                    } else if (414 == i) {
                        if (0 != d && 2 != d && 3 != d) return { result: !1, reason: 19 };
                        if (0 == t && 0 != d && 3 != d) return { result: !1, reason: 40 }
                    } else if (415 == i && 0 != d && 5 != d) return { result: !1, reason: 19 };
                    if (0 != t && 417 != i && (1 == d || 3 == d || 5 == d)) return { result: !1, reason: 38 }
                }
            }
            if (416 == i) {
                var f = this._checkE6Plate(e);
                if (0 == f.result || 0 != f.reason) return f
            }
            return { result: !0, reason: 0 }
        }, t.prototype._checkE6Plate = function (t) {
            for (var e = 0, i = 0, n = 0, o = t; n < o.length; n++) {
                var r = o[n];
                if (null != r) {
                    e++;
                    var s = r.label;
                    if (1 == s) return { result: !1, reason: 19 };
                    if (2 == s) i++; else {
                        if (3 == s) return { result: !1, reason: 19 };
                        if (4 == s) return { result: !1, reason: 19 }
                    }
                }
            }
            return i > 0 && i != e ? { result: !1, reason: 19 } : { result: !0, reason: 0 }
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