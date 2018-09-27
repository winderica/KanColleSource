const function521 = function (t, e, i) {
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
    var o = i(0), r = i(522), s = i(262), a = i(523), _ = function () {
        function t() {
        }

        return Object.defineProperty(t.prototype, "num", {
            get: function () {
                var t = 0;
                for (var e in this._map) t++;
                return t
            }, enumerable: !0, configurable: !0
        }), t.prototype.get = function (t) {
            var e = t.toString();
            return null != this._map && 1 == this._map.hasOwnProperty(e) ? this._map[e] : null
        }, t.prototype.delete = function (t) {
            var e = t.toString();
            1 == this._map.hasOwnProperty(e) && delete this._map[e]
        }, t.prototype.getMst = function (t) {
            var e = t.toString();
            return null != this._mapMst && 1 == this._mapMst.hasOwnProperty(e) ? this._mapMst[e] : null
        }, t.prototype.getEquipTypeAll = function () {
            var t = new Array;
            for (var e in this._mapMstEquipType) t.push(this._mapMstEquipType[e]);
            return t
        }, t.prototype.getEquipTypeById = function (t) {
            return this._mapMstEquipType[t.toString()]
        }, t.prototype.getAll = function () {
            var t = new Array;
            for (var e in this._map) t.push(this._map[e]);
            return t
        }, t.prototype.createSetList = function (t, e, i) {
            void 0 === t && (t = null), void 0 === e && (e = null), void 0 === i && (i = -1);
            var n = {}, r = new Array;
            if (null == t) {
                t = new Array;
                for (var s in this._mapMstEquipType) {
                    var a = parseInt(s);
                    t.push(a)
                }
            }
            for (var _ = o.default.model.ship.getAll(), u = -1 != i, l = 0, c = _; l < c.length; l++) {
                var h = c[l];
                if (u) {
                    if (h.memID == i) continue
                }
                for (var p = h.getSlotitems(), d = 0, f = p; d < f.length; d++) {
                    var y = f[d];
                    null != y && (-1 != t.indexOf(y.equipTypeSp) ? (r.push(y), n[y.memID] = h.memID) : null != e && -1 != e.indexOf(y.mstID) && (r.push(y), n[y.memID] = h.memID))
                }
                var v = h.getSlotitemEx();
                null != v && (-1 != t.indexOf(v.equipTypeSp) ? (r.push(v), n[v.memID] = h.memID) : null != e && -1 != e.indexOf(v.mstID) && (r.push(v), n[v.memID] = h.memID))
            }
            return [r, n]
        }, t.prototype.createUnsetListFromMstId = function (t) {
            var e = o.default.model.slot.getMst(t).equipTypeSp, i = o.default.model.slot.createUnsetList([e]),
                n = new Array;
            return i.forEach(function (e) {
                e.mstID == t && n.push(e)
            }), n
        }, t.prototype.createSetListFromMstId = function (t) {
            var e = o.default.model.slot.getMst(t).equipTypeSp, i = o.default.model.slot.createSetList([e]),
                n = new Array, r = {};
            return i[0].forEach(function (e) {
                e.mstID == t && (n.push(e), r[e.memID] = i[1][e.memID])
            }), [n, r]
        }, t.prototype.createUnsetList = function (t, e) {
            void 0 === t && (t = null), void 0 === e && (e = null);
            var i = new Array;
            if (null == t) {
                t = new Array;
                for (var n in this._mapUnset) {
                    var r = parseInt(n);
                    t.push(r)
                }
            }
            for (var s = 0, a = t; s < a.length; s++) {
                var r = a[s], n = r.toString();
                if (1 == this._mapUnset.hasOwnProperty(n)) for (var _ = this._mapUnset[n], u = 0, l = _; u < l.length; u++) {
                    var c = l[u];
                    if (1 == this._map.hasOwnProperty(c.toString())) {
                        var h = this._map[c.toString()];
                        i.push(h)
                    }
                }
            }
            if (null != e) for (var p = 0, d = e; p < d.length; p++) {
                var f = d[p], r = o.default.model.slot.getMst(f).equipTypeSp;
                if (-1 == t.indexOf(r)) {
                    var _ = this._mapUnset[r.toString()];
                    if (null != _) for (var y = 0, v = _; y < v.length; y++) {
                        var c = v[y];
                        if (1 == this._map.hasOwnProperty(c.toString())) {
                            var h = this._map[c.toString()];
                            h.mstID == f && i.push(h)
                        }
                    }
                }
            }
            return i
        }, t.prototype.getExtraEquipShipData = function (t) {
            var e = t.toString(), i = this._extraEquipShips[e];
            return null != i ? i : []
        }, t.prototype.getCount = function (t) {
            var e = 0;
            for (var i in this._map) {
                this._map[i].mstID == t && e++
            }
            return e
        }, t.prototype.getAirUnitRelocation = function () {
            return null == this._airunit_relocation ? [] : this._airunit_relocation.concat()
        }, t
    }();
    e.SlotitemModelHolder = _;
    var u = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.setMemData = function (t) {
            this._map = {}, this.addMemData(t)
        }, e.prototype.addMemData = function (t) {
            if (null != t) for (var e = 0, i = t; e < i.length; e++) {
                var n = i[e], o = new s.SlotitemModel(n), r = o.memID;
                if (r > 0) {
                    var a = r.toString();
                    this._map[a] = o
                }
            }
        }, e.prototype.setMstData = function (t) {
            if (this._mapMst = {}, null != t) for (var e = 0, i = t; e < i.length; e++) {
                var n = i[e], o = new a.SlotitemMstModel(n), r = o.mstID;
                if (r > 0) {
                    var s = r.toString();
                    this._mapMst[s] = o
                }
            }
        }, e.prototype.setMstEquipTypeData = function (t) {
            this._mapMstEquipType = {};
            for (var e = 0, i = t; e < i.length; e++) {
                var n = i[e], o = new r.EquipTypeMstModel(n);
                o.id > 0 && (this._mapMstEquipType[o.id.toString()] = o)
            }
        }, e.prototype.setUnsetData = function (t) {
            this._mapUnset = {};
            for (var e in t) {
                var i = e.match(/api_slottype(\d+)/);
                if (null != i && "number" != typeof t[e]) {
                    var n = t[e];
                    this._mapUnset[i[1]] = n
                }
            }
        }, e.prototype.updateUnsetData = function (t, e) {
            this._mapUnset[t] = e
        }, e.prototype.deleteUnsetData = function (t) {
            for (var e in this._mapUnset) {
                var i = this._mapUnset[e], n = i.indexOf(t);
                if (n >= 0) {
                    i.splice(n, 1);
                    break
                }
            }
        }, e.prototype.setExtraEquipShipData = function (t) {
            var e = {};
            for (var i in t) {
                var n = t[i], o = n.api_slotitem_id, r = n.api_ship_ids;
                for (var s in r) {
                    var a = r[s].toString();
                    null == e[a] && (e[a] = new Array), e[a].push(o)
                }
            }
            this._extraEquipShips = e
        }, e.prototype.setAirUnitRelocation = function (t) {
            null == t && (t = []), this._airunit_relocation = t
        }, e.prototype.addAirUnitRelocation = function (t) {
            null == this._airunit_relocation && (this._airunit_relocation = []), this._airunit_relocation.push(t)
        }, e
    }(_);
    e.SlotitemModelHolderEdit = u
}