const function508 = function (t, e, i) {
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
    var o = i(509),
        r = i(7),
        s = function () {
            function t() {}
            return t.prototype.getData = function (t) {
                var e = t.toString();
                return 1 == this._map.hasOwnProperty(e) ? this._map[e] : null
            }, t.prototype.getOwnList = function (t) {
                var e = [];
                for (var i in this._map) {
                    var n = this._map[i];
                    n.type == t && 1 == n.has() && e.push(n)
                }
                return e
            }, t.prototype.getOnSaleList = function (t) {
                var e = [];
                for (var i in this._map) {
                    var n = this._map[i];
                    n.type == t && 1 == n.isOnSale() && e.push(n)
                }
                return e.sort(function (t, e) {
                    return t.no > e.no ? 1 : t.no < e.no ? -1 : 0
                }), e
            }, t.prototype.isActive = function (t) {
                var e = this.getData(t);
                return null != e && e.isActive()
            }, t
        }();
    e.FurnitureModelHolder = s;
    var a = function (t) {
        function e() {
            return t.call(this) || this
        }
        return n(e, t), e.prototype.setMstData = function (t) {
            if (this._map = {}, null != t)
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        n = new o.FurnitureModelEdit(i),
                        r = n.mstID;
                    this._map[r] = n
                }
        }, e.prototype.setMemData = function (t) {
            if (null != this._map)
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = r.ObjUtil.getNumber(n, "api_id"),
                        s = this.getData(o);
                    null != s && s.updateHasFlag(!0)
                }
        }, e
    }(s);
    e.FurnitureModelHolderEdit = a
}