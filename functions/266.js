const function266 = function (t, e, i) {
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
        r = i(7),
        s = i(504),
        a = function () {
            function t(t) {
                if (this._o = t, this._expedition = null, null != this._o) {
                    var e = r.ObjUtil.getNumArray(this._o, "api_mission"),
                        i = new s.DeckExpeditionModelEdit(e);
                    i.expedition_id > 0 && (this._expedition = i)
                }
            }
            return Object.defineProperty(t.prototype, "mstID", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return r.ObjUtil.getString(this._o, "api_name")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nameID", {
                get: function () {
                    return r.ObjUtil.getString(this._o, "api_name_id")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.__updateName__ = function (t, e) {
                this._o.api_name = t, this._o.api_name_id = e
            }, Object.defineProperty(t.prototype, "expedition", {
                get: function () {
                    return this._expedition
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getCount = function () {
                return this._getShipMemIDArray().filter(function (t, e, i) {
                    return t >= 0
                }).length
            }, t.prototype.getShipMemID = function (t) {
                var e = this._getShipMemIDArray();
                return null != e && e.length > t ? e[t] : -1
            }, t.prototype.getShipMemIDList = function () {
                return this._getShipMemIDArray().concat().filter(function (t, e, i) {
                    return t > 0
                })
            }, t.prototype.getShipModel = function (t) {
                var e = this.getShipMemID(t);
                return e > 0 ? o.default.model.ship.get(e) : null
            }, t.prototype.getShipList = function () {
                var t = [],
                    e = this._getShipMemIDArray();
                if (null == e) return t;
                for (var i = 0; i < e.length; i++) {
                    var n = e[i],
                        r = o.default.model.ship.get(n);
                    t.push(r)
                }
                return t
            }, t.prototype.getShipListAll = function () {
                var t = o.default.model.deck.combined;
                if (0 == t.isCombined()) return this.getShipList();
                if (t.deck_id_main != this.mstID && t.deck_id_sub != this.mstID) return this.getShipList();
                for (var e = [], i = o.default.model.deck.get(t.deck_id_main), n = i.getShipList(), r = 0, s = n; r < s.length; r++) {
                    var a = s[r];
                    e.push(a)
                }
                for (var _ = o.default.model.deck.get(t.deck_id_sub), u = _.getShipList(), l = 0, c = u; l < c.length; l++) {
                    var a = c[l];
                    e.push(a)
                }
                return e
            }, t.prototype.isInDeck = function (t) {
                return this._getShipMemIDArray().indexOf(t)
            }, t.prototype.getCombinedType = function () {
                return this.isCombined_Main() || this.isCombined_Sub() ? o.default.model.deck.combined.type : 0
            }, t.prototype.isCombined_Main = function () {
                return o.default.model.deck.combined.deck_id_main == this.mstID
            }, t.prototype.isCombined_Sub = function () {
                return o.default.model.deck.combined.deck_id_sub == this.mstID
            }, t.prototype.getSubDeckID = function () {
                return 1 == this.isCombined_Main() ? o.default.model.deck.combined.deck_id_sub : -1
            }, t.prototype.getSubDeckName = function () {
                if (1 == this.isCombined_Main()) {
                    var t = o.default.model.deck.combined.deck_id_sub,
                        e = o.default.model.deck.get(t);
                    return null == e ? "" : e.name
                }
                return ""
            }, t.prototype._getShipMemIDArray = function () {
                return r.ObjUtil.getNumArray(this._o, "api_ship")
            }, t
        }();
    e.DeckModel = a;
    var _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.updateName = function (t, e) {
            this.__updateName__(t, e)
        }, e.prototype.__change__ = function (t, e, i) {
            void 0 === i && (i = !1);
            var n = this._getShipMemIDArray(),
                r = o.default.model.ship.get(e),
                s = o.default.model.deck.isInDeck(r.memID),
                a = null;
            if (null != s) {
                a = o.default.model.deck.get(s[0])._getShipMemIDArray()
            }
            if (null != s) {
                var _ = n[t];
                s[1]; - 1 == _ ? (a.splice(s[1], 1), a.push(-1)) : a[s[1]] = _
            }
            n[t] = r.memID;
            for (var u = n.filter(function (t) {
                    return t > 0
                }), l = 0; l < n.length; l++) l >= u.length ? n[l] = -1 : n[l] = u[l]
        }, e.prototype.__remove__ = function (t, e) {
            void 0 === e && (e = !1);
            var i = this._getShipMemIDArray(),
                n = i.length;
            for (i.splice(t, 1); i.length < n;) i.push(-1)
        }, e.prototype.__removeAll__ = function (t) {
            void 0 === t && (t = !1);
            for (var e = this._getShipMemIDArray(), i = 1; i < e.length; i++) e[i] = -1
        }, e
    }(a);
    e.DeckModelEdit = _
}