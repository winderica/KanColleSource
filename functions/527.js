const function527 = function (t, e, i) {
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
        r = i(528),
        s = i(264),
        a = i(529),
        _ = function () {
            function t() {}
            return Object.defineProperty(t.prototype, "num", {
                get: function () {
                    var t = 0;
                    for (var e in this._map) t++;
                    return t
                },
                enumerable: !0,
                configurable: !0
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
                var n = {},
                    r = new Array;
                if (null == t) {
                    t = new Array;
                    for (var s in this._mapMstEquipType) {
                        var a = parseInt(s);
                        t.push(a)
                    }
                }
                for (var _ = o.default.model.ship.getAll(), l = -1 != i, u = 0, c = _; u < c.length; u++) {
                    var h = c[u];
                    if (l) {
                        if (h.memID == i) continue
                    }
                    for (var p = h.getSlotitems(), d = 0, f = p; d < f.length; d++) {
                        var y = f[d];
                        null != y && (-1 != t.indexOf(y.equipTypeSp) ? (r.push(y), n[y.memID] = h.memID) : null != e && -1 != e.indexOf(y.mstID) && (r.push(y), n[y.memID] = h.memID))
                    }
                    var m = h.getSlotitemEx();
                    null != m && (-1 != t.indexOf(m.equipTypeSp) ? (r.push(m), n[m.memID] = h.memID) : null != e && -1 != e.indexOf(m.mstID) && (r.push(m), n[m.memID] = h.memID))
                }
                return [r, n]
            }, t.prototype.createUnsetListFromMstId = function (t) {
                var e = o.default.model.slot.getMst(t).equipTypeSp,
                    i = o.default.model.slot.createUnsetList([e]),
                    n = new Array;
                return i.forEach(function (e) {
                    e.mstID == t && n.push(e)
                }), n
            }, t.prototype.createSetListFromMstId = function (t) {
                var e = o.default.model.slot.getMst(t).equipTypeSp,
                    i = o.default.model.slot.createSetList([e]),
                    n = new Array,
                    r = {};
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
                    var r = a[s],
                        n = r.toString();
                    if (1 == this._mapUnset.hasOwnProperty(n)) {
                        var _ = this._mapUnset[n];
                        if (null == _) continue;
                        for (var l = 0, u = _; l < u.length; l++) {
                            var c = u[l];
                            if (1 == this._map.hasOwnProperty(c.toString())) {
                                var h = this._map[c.toString()];
                                i.push(h)
                            }
                        }
                    }
                }
                if (null != e)
                    for (var p = 0, d = e; p < d.length; p++) {
                        var f = d[p],
                            r = o.default.model.slot.getMst(f).equipTypeSp;
                        if (-1 == t.indexOf(r)) {
                            var _ = this._mapUnset[r.toString()];
                            if (null != _)
                                for (var y = 0, m = _; y < m.length; y++) {
                                    var c = m[y];
                                    if (1 == this._map.hasOwnProperty(c.toString())) {
                                        var h = this._map[c.toString()];
                                        h.mstID == f && i.push(h)
                                    }
                                }
                        }
                    }
                return i
            }, t.prototype.getExtraEquipShipData = function (t) {
                var e = t.toString(),
                    i = this._extraEquipShips[e];
                return null != i ? i : []
            }, t.prototype.getCount = function (t) {
                var e = 0;
                for (var i in this._map) {
                    this._map[i].mstID == t && e++
                }
                return e
            }, t.prototype.getAirUnitRelocation = function () {
                return null == this._airunit_relocation ? [] : this._airunit_relocation.concat()
            }, t.prototype.createUnsetList_unType = function (t) {
                if (!t) return [];
                var e = new Array;
                for (var i in this._mapUnset) {
                    var n = parseInt(i);
                    if (-1 == t.indexOf(n)) {
                        var o = this._mapUnset[i];
                        if (null == o) continue;
                        for (var r = 0, s = o; r < s.length; r++) {
                            var a = s[r];
                            if (1 == this._map.hasOwnProperty(a.toString())) {
                                var _ = this._map[a.toString()];
                                e.push(_)
                            }
                        }
                    }
                }
                return e
            }, t.prototype.createSetList_unType = function (t, e) {
                if (void 0 === e && (e = -1), null == t) return [
                    [], {}
                ];
                for (var i = {}, n = new Array, r = o.default.model.ship.getAll(), s = -1 != e, a = 0, _ = r; a < _.length; a++) {
                    var l = _[a];
                    if (s) {
                        if (l.memID == e) continue
                    }
                    for (var u = l.getSlotitems(), c = 0, h = u; c < h.length; c++) {
                        var p = h[c];
                        null != p && (-1 == t.indexOf(p.equipTypeSp) && (n.push(p), i[p.memID] = l.memID))
                    }
                    var d = l.getSlotitemEx();
                    null != d && -1 == t.indexOf(d.equipTypeSp) && (n.push(d), i[d.memID] = l.memID)
                }
                return [n, i]
            }, t
        }();
    e.SlotitemModelHolder = _;
    var l = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.setMemData = function (t) {
            this._map = {}, this.addMemData(t)
        }, e.prototype.addMemData = function (t) {
            if (null != t)
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = new s.SlotitemModel(n),
                        r = o.memID;
                    if (r > 0) {
                        var a = r.toString();
                        this._map[a] = o
                    }
                }
        }, e.prototype.setMstData = function (t) {
            if (this._mapMst = {}, null != t)
                for (var e = 0, i = t; e < i.length; e++) {
                    var n = i[e],
                        o = new a.SlotitemMstModel(n),
                        r = o.mstID;
                    if (r > 0) {
                        var s = r.toString();
                        this._mapMst[s] = o
                    }
                }
        }, e.prototype.setMstEquipTypeData = function (t) {
            this._mapMstEquipType = {};
            for (var e = 0, i = t; e < i.length; e++) {
                var n = i[e],
                    o = new r.EquipTypeMstModel(n);
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
                var i = this._mapUnset[e],
                    n = i.indexOf(t);
                if (n >= 0) {
                    i.splice(n, 1);
                    break
                }
            }
        }, e.prototype.setExtraEquipShipData = function (t) {
            var e = {};
            for (var i in t) {
                var n = t[i],
                    o = n.api_slotitem_id,
                    r = n.api_ship_ids;
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
    e.SlotitemModelHolderEdit = l
}