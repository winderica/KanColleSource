const function519 = function (t, e, i) {
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
    var o = i(55),
        r = i(520),
        s = i(521),
        a = i(522),
        _ = function () {
            function t() {}
            return t.prototype.getArea = function (t) {
                return null == this._area_msts ? null : this._area_msts[t]
            }, t.prototype.getMapMst = function (t, e) {
                void 0 === e && (e = -1);
                var i = t;
                return -1 != e && (i = o.MapUtil.toMapID(t, e)), null == this._map_msts || 0 == this._map_msts.hasOwnProperty(i.toString()) ? null : this._map_msts[i]
            }, t.prototype.getMapMsts = function (t) {
                if (null == this._map_msts) return null;
                var e = new Array;
                for (var i in this._map_msts) {
                    var n = this._map_msts[i];
                    n.area_id == t && e.push(n)
                }
                return e.sort(function (t, e) {
                    return t.map_no > e.map_no ? 1 : t.map_no < e.map_no ? -1 : 0
                }), e
            }, t.prototype.getMapMem = function (t) {
                if (null != this._maps && 1 == this._maps.hasOwnProperty(t.toString())) return this._maps[t];
                if (null != this.getMapMst(t)) {
                    var e = new s.MapModelEdit(null);
                    return e.setMstID(t), e
                }
                return null
            }, t.prototype.getMapMems = function (t) {
                for (var e = this.getMapMsts(t), i = [], n = 0, o = e; n < o.length; n++) {
                    var r = o[n],
                        s = r.mst_id,
                        a = this.getMapMem(s);
                    i.push(a)
                }
                return i
            }, t
        }();
    e.MapModelHolder = _;
    var l = function (t) {
        function e() {
            return t.call(this) || this
        }
        return n(e, t), e.prototype.setAreaMst = function (t) {
            if (this._area_msts = {}, null != t)
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = new r.MapAreaModel(n),
                        s = o.mstID;
                    s > 0 && (this._area_msts[s] = o)
                }
        }, e.prototype.setMapMst = function (t) {
            if (this._map_msts = {}, null != t)
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = new a.MapMstModel(n),
                        r = o.mst_id;
                    r > 0 && (this._map_msts[r] = o)
                }
        }, e.prototype.setMapMem = function (t) {
            if (this._maps = {}, null != t)
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = new s.MapModelEdit(n),
                        r = o.mst_id;
                    r > 0 && (this._maps[r] = o)
                }
        }, e
    }(_);
    e.MapModelHolderEdit = l
}