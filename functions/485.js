const function485 = function (t, e, i) {
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
        r = i(486),
        s = function () {
            function t() {
                this._dic = {}
            }
            return t.prototype.getAirUnitList = function (t) {
                var e = this;
                return null == this._dic ? [] : void 0 === t ? Object.keys(this._dic).map(function (t) {
                    return e._dic[parseInt(t)]
                }).reduce(function (t, e) {
                    return t.concat.apply(t, e)
                }) : null == this._dic[t] ? [] : this._dic[t]
            }, t.prototype.getAirUnit = function (t, e) {
                var i = this.getAirUnitList(t);
                if (null == i) return null;
                for (var n = 0, o = i; n < o.length; n++) {
                    var r = o[n];
                    if (r.id == e) return r
                }
                return null
            }, t.prototype.getReadyAirUnitList = function (t) {
                for (var e = [], i = this.getAirUnitList(t), n = 0, o = i; n < o.length; n++) {
                    var r = o[n];
                    1 == r.airUnitState && (0 != r.hasActiveSquadron() && e.push(r))
                }
                return e
            }, t
        }();
    e.AirUnitModelHolder = s;
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.setData = function (t) {
            if (this._dic = {}, null != t)
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = new r.AirUnitModelEdit(n),
                        s = o.area_id;
                    null == this._dic[s] && (this._dic[s] = new Array), this._dic[s].push(o)
                }
        }, e.prototype.addData = function (t) {
            if (null != this._dic) {
                var e = new r.AirUnitModelEdit(t),
                    i = e.area_id;
                null == this._dic[i] && (this._dic[i] = new Array), this._dic[i].push(e)
            }
        }, e.prototype.updateData = function (t, e, i, n, r) {
            var s = this.getAirUnit(t, e),
                a = s.squadrons[i],
                _ = a.state,
                l = a.mem_id;
            s.updateSquadronData(n, r);
            var u = s.squadrons[i];
            if (1 == u.state && o.default.model.slot.deleteUnsetData(u.mem_id), 1 == _) {
                for (var c = !1, h = 0, p = s.squadrons; h < p.length; h++) {
                    var d = p[h];
                    if (1 == d.state && d.mem_id == l) {
                        c = !0;
                        break
                    }
                }
                0 == c && o.default.model.slot.addAirUnitRelocation(l)
            }
        }, e
    }(s);
    e.AirUnitModelHolderEdit = a
}