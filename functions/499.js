const function499 = function (t, e, i) {
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
    var o = i(500),
        r = i(15),
        s = function () {
            function t() {}
            return t.prototype.get = function (t) {
                return 1 == this._map.hasOwnProperty(t.toString()) ? this._map[t] : null
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
        }, e.prototype.setData = function (t) {
            if (null != this._map && null != t)
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = r.ObjUtil.getNumber(n, "api_mission_id");
                    if (o > 0) {
                        var s = this.get(o);
                        if (null != s) {
                            var a = r.ObjUtil.getNumber(n, "api_state"),
                                _ = a;
                            s.__setState__(_)
                        }
                    }
                }
        }, e
    }(s);
    e.ExpeditionModelHolderEdit = a
}