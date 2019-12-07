const function100 = function (t, e, i) {
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
        r = i(2),
        s = i(63),
        a = i(256),
        _ = i(257),
        l = i(258),
        u = i(259),
        c = i(458),
        h = i(261),
        p = i(263),
        d = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._current_index = 0, o._scene = e, o._record = i, o._data = n, o
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                if (null == this._data || null == this._data.list || 0 == this._data.list.length) this._endTask();
                else {
                    new s.PhaseEnemyEnter(this._scene, this._record).start(function () {
                        t._hougekiCycle()
                    })
                }
            }, e.prototype._hougekiCycle = function () {
                if (this._current_index < this._data.list.length) {
                    var t = this._data.list[this._current_index];
                    this._current_index++, this._hougeki(t)
                } else this._endTask()
            }, e.prototype._hougeki = function (t) {
                var e = t.type;
                0 == e ? this._normal(t) : 2 == e ? this._double(t) : this._special(t)
            }, e.prototype._normal = function (t) {
                var e = this,
                    i = this._scene,
                    n = this._getAShip(t.a_index, t.flag),
                    o = this._getDShip(t.d_indexes[0], t.flag);
                if (null != n && null != o) {
                    var r = t.getSlotitem(0),
                        s = t.getDamage(0),
                        c = t.getHitType(0),
                        h = t.isShield(0),
                        d = this._getNormalAttackType(n, o, r),
                        f = this._getDaihatsuEffectType(n, o);
                    if (1 == this._hasRocketEffect(n, o, d)) {
                        var y = new p.PhaseAttackRocket(i, n, o, s, c, h);
                        y.setOptionalEffects(f), y.start(function () {
                            e._hougekiCycle()
                        })
                    } else if (0 == d) {
                        var y = new a.PhaseAttackNormal(i, n, o, r, s, c, h);
                        y.setOptionalEffects(f), y.start(function () {
                            e._hougekiCycle()
                        })
                    } else if (1 == d) {
                        var y = new _.PhaseAttackKansaiki(i, n, o, r, s, c, h);
                        y.setOptionalEffects(f), y.start(function () {
                            e._hougekiCycle()
                        })
                    } else if (2 == d) {
                        var y = new l.PhaseAttackBakurai(i, n, o, r, s, c, h);
                        y.setOptionalEffects(f), y.start(function () {
                            e._hougekiCycle()
                        })
                    } else {
                        if (3 != d) throw new Error;
                        var y = new u.PhaseAttackRaigeki(i, n, o, r, s, c, h);
                        y.setOptionalEffects(f), y.start(function () {
                            e._hougekiCycle()
                        })
                    }
                }
            }, e.prototype._double = function (t) {
                var e = this,
                    i = this._getAShip(t.a_index, t.flag),
                    n = this._getDShip(t.d_indexes[0], t.flag),
                    o = t.getSlotitem(0),
                    r = t.getDamage(0),
                    s = t.getHitType(0),
                    a = t.isShield(0),
                    _ = this._getDShip(t.d_indexes[1], t.flag),
                    l = t.getSlotitem(1),
                    u = t.getDamage(1),
                    c = t.getHitType(1),
                    p = t.isShield(1);
                new h.PhaseAttackDouble(this._scene, i, n, o, r, s, a, _, l, u, c, p).start(function () {
                    e._hougekiCycle()
                })
            }, e.prototype._special = function (t) {
                var e = this,
                    i = this._getAShip(t.a_index, t.flag),
                    n = this._getDShip(t.d_indexes[0], t.flag);
                if (null != i && null != n) {
                    var o = t.getSlotitem(0),
                        r = t.getSlotitem(1),
                        s = t.getSlotitem(2),
                        a = t.getDamage(0),
                        _ = t.getHitType(0),
                        l = t.isShield(0);
                    new c.PhaseAttackDanchaku(this._scene, t.type, i, n, o, r, s, a, _, l).start(function () {
                        e._hougekiCycle()
                    })
                }
            }, e.prototype._getAShip = function (t, e) {
                return 0 == e ? this._scene.data.model.deck_f.ships[t] : this._scene.data.model.deck_e.ships[t]
            }, e.prototype._getDShip = function (t, e) {
                return 0 == e ? this._scene.data.model.deck_e.ships[t] : this._scene.data.model.deck_f.ships[t]
            }, e.prototype._getNormalAttackType = function (t, e, i) {
                for (var n = 0, r = 0, s = t.slots, a = 0, _ = s; a < _.length; a++) {
                    var l = _[a];
                    if (null != l) {
                        var u = l.equipType;
                        8 == u || 58 == u ? (n++, l.taisen > 0 && r++) : 11 != u && 25 != u || r++
                    }
                }
                var c = t.stype;
                if (352 == t.mst_id) {
                    if (1 == e.isSubMarine()) return r > 0 ? 1 : 2;
                    if (n > 0) return 1
                }
                if (7 == c || 11 == c || 18 == c) return 1;
                if (e.isSubMarine()) return 6 == c || 10 == c || 16 == c || 17 == c ? 1 : 2;
                var h = o.default.model.slot.getMst(i);
                return null == h || 5 != h.equipTypeSp && 32 != h.equipTypeSp ? 0 : 3
            }, e.prototype._hasRocketEffect = function (t, e, i) {
                if (0 == e.isGround()) return !1;
                if (1 == i) return !1;
                for (var n = t.slots, o = 0, r = n; o < r.length; o++) {
                    var s = r[o];
                    if (null != s) {
                        var a = s.mst_id;
                        if (126 == a || 346 == a || 347 == a || 348 == a || 349 == a) return !0
                    }
                }
                return !1
            }, e.prototype._getDaihatsuEffectType = function (t, e) {
                var i = ["\u96e2\u5cf6\u68f2\u59eb", "\u7832\u53f0\u5c0f\u9b3c", "\u96c6\u7a4d\u5730\u68f2\u59eb", "\u96c6\u7a4d\u5730\u68f2\u59eb-\u58ca", "\u6cca\u5730\u6c34\u9b3c \u30d0\u30ab\u30f3\u30b9mode", "\u96c6\u7a4d\u5730\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode", "\u96c6\u7a4d\u5730\u68f2\u59eb \u30d0\u30ab\u30f3\u30b9mode-\u58ca", "\u98db\u884c\u5834\u59eb"];
                if (t.hasSlot(355) && i.indexOf(e.name) >= 0) return 6;
                if (t.hasSlot(193) && i.indexOf(e.name) >= 0) return 2;
                if (t.hasSlot(166) && i.indexOf(e.name) >= 0) return 3;
                if (t.hasSlot(167))
                    if (t.isSubMarine()) {
                        if (e.isGround()) return 4
                    } else if (i.indexOf(e.name) >= 0) return 4;
                return 0
            }, e.prototype._log = function (t, e, i, n, o) {}, e.prototype._getIndex = function (t) {
                var e = this._scene.data.model.deck_f.ships.indexOf(t);
                return e >= 0 ? e : this._scene.data.model.deck_e.ships.indexOf(t)
            }, e
        }(r.TaskBase);
    e.PhaseHougekiOpening = d
}