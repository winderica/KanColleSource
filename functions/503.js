const function503 = function (t, e, i) {
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
    var o = i(504),
        r = i(14),
        s = function () {
            function t() {}
            return t.prototype.get = function (t) {
                return 1 == this._map.hasOwnProperty(t.toString()) ? this._map[t] : null
            }, t.prototype.getLimitTime = function (t) {
                switch (t) {
                    case 1:
                        return this._limit_time[0];
                    default:
                        throw new Error
                }
            }, t.prototype.getInArea = function (t, e) {
                var i = [];
                for (var n in this._map) {
                    var o = this._map[n];
                    o.areaID == t && (1 == e && -1 == o.state || i.push(o))
                }
                return i.sort(function (t, e) {
                    return t.mstID - e.mstID
                }), i
            }, t.prototype.getserialID = function () {
                return this._serial_id
            }, Object.defineProperty(t.prototype, "serial_id", {
                set: function (t) {
                    this._serial_id = t
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.ExpeditionModelHolder = s;
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.setMstData = function (t) {
            if (this._map = {}, null != t)
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        n = new o.ExpeditionModelEdit(i),
                        r = n.mstID;
                    if (r > 0) {
                        var s = r.toString();
                        this._map[s] = n
                    }
                }
        }, e.prototype.setData = function (t, e) {
            if (null != this._map && null != t) {
                for (var i in this._map) {
                    var n = this.get(this._map[i].mstID);
                    n.__setState__(-1)
                }
                for (var o = 0, s = t; o < s.length; o++) {
                    var a = s[o],
                        _ = r.ObjUtil.getNumber(a, "api_mission_id");
                    if (_ > 0) {
                        var n = this.get(_);
                        if (null != n) {
                            var l = r.ObjUtil.getNumber(a, "api_state"),
                                u = l;
                            n.__setState__(u)
                        }
                    }
                }
                this._limit_time = e
            }
        }, e
    }(s);
    e.ExpeditionModelHolderEdit = a
}