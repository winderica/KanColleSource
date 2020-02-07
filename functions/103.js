const function103 = function (t, e, i) {
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
        r = i(38),
        s = i(2),
        a = i(65),
        _ = i(257),
        u = i(258),
        l = i(259),
        c = i(260),
        h = i(262),
        p = i(462),
        d = i(464),
        f = i(264),
        y = i(466),
        m = i(467),
        g = i(468),
        v = i(469),
        b = i(1425),
        w = i(14),
        x = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._current_index = 0, o._scene = e, o._record = i, o._data = n, o
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                if (null == this._data || null == this._data.list || 0 == this._data.list.length) this._endTask();
                else {
                    new a.PhaseEnemyEnter(this._scene, this._record).start(function () {
                        t._scene.view.layer_title.show(5), t._hougekiCycle()
                    })
                }
            }, e.prototype._hougekiCycle = function () {
                if (this._current_index < this._data.list.length) {
                    var t = this._data.list[this._current_index];
                    this._current_index++, this._hougeki(t)
                } else this._endTask()
            }, e.prototype._hougeki = function (t) {
                var e = t.type;
                0 == e ? this._normal(t) : 2 == e ? this._double(t) : 7 == e ? this._kuboCI(t) : 100 == e ? this._nelson_touch(t) : 101 == e ? this._nagato_cutin(t) : 102 == e ? this._mutsu_cutin(t) : 103 == e ? this._colorado_cutin(t) : 200 == e ? this._zuiunCutin(t) : this._special(t)
            }, e.prototype._normal = function (t) {
                var e = this,
                    i = this._scene,
                    n = this._getAShip(t.a_index, t.flag),
                    o = this._getDShip(t.d_indexes[0], t.flag);
                if (null != n && null != o) {
                    var r = t.getSlotitem(0),
                        s = t.getDamage(0),
                        a = t.getHitType(0),
                        h = t.isShield(0),
                        p = this._getNormalAttackType(n, o, r),
                        d = this._getDaihatsuEffectType(n, o);
                    if (1 == this._hasRocketEffect(n, o, p)) {
                        var y = new f.PhaseAttackRocket(i, n, o, s, a, h);
                        y.setOptionalEffects(d), y.start(function () {
                            e._hougekiCycle()
                        })
                    } else if (i.data.model.map_info.isLongRangeFires()) {
                        var y = new _.PhaseAttackNormal(i, n, o, r, s, a, h);
                        y.setOptionalEffects(d), y.start(function () {
                            e._hougekiCycle()
                        })
                    } else if (0 == p) {
                        var y = new _.PhaseAttackNormal(i, n, o, r, s, a, h);
                        y.setOptionalEffects(d), y.start(function () {
                            e._hougekiCycle()
                        })
                    } else if (1 == p) {
                        var y = new u.PhaseAttackKansaiki(i, n, o, r, s, a, h);
                        y.setOptionalEffects(d), y.start(function () {
                            e._hougekiCycle()
                        })
                    } else if (2 == p) {
                        var y = new l.PhaseAttackBakurai(i, n, o, r, s, a, h);
                        y.setOptionalEffects(d), y.start(function () {
                            e._hougekiCycle()
                        })
                    } else {
                        if (3 != p) throw new Error;
                        var y = new c.PhaseAttackRaigeki(i, n, o, r, s, a, h);
                        y.setOptionalEffects(d), y.start(function () {
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
                    u = t.getSlotitem(1),
                    l = t.getDamage(1),
                    c = t.getHitType(1),
                    p = t.isShield(1);
                new h.PhaseAttackDouble(this._scene, i, n, o, r, s, a, _, u, l, c, p).start(function () {
                    e._hougekiCycle()
                })
            }, e.prototype._kuboCI = function (t) {
                var e = this,
                    i = this._scene,
                    n = this._getAShip(t.a_index, t.flag),
                    o = this._getDShip(t.d_indexes[0], t.flag),
                    r = t.getSlotitem(0),
                    s = t.getSlotitem(1),
                    a = t.getSlotitem(2),
                    _ = t.getDamage(0),
                    u = t.getHitType(0),
                    l = t.isShield(0),
                    c = this._getDaihatsuEffectType(n, o),
                    h = new d.PhaseAttackKuboCutin(i, n, o, r, s, a, _, u, l);
                h.setOptionalEffects(c), h.start(function () {
                    e._hougekiCycle()
                })
            }, e.prototype._nelson_touch = function (t) {
                for (var e = this, i = [], n = 0; n < 3; n++) {
                    var o = this._getDShip(t.d_indexes[n], t.flag);
                    o && i.push(o)
                }
                var r = [t.getDamage(0), t.getDamage(1), t.getDamage(2)],
                    s = [t.getHitType(0), t.getHitType(1), t.getHitType(2)],
                    a = [t.isShield(0), t.isShield(1), t.isShield(2)];
                new y.PhaseNelsonTouch(this._scene, i, r, s, a).start(function () {
                    e._hougekiCycle()
                })
            }, e.prototype._nagato_cutin = function (t) {
                for (var e = this, i = [], n = 0; n < 3; n++) {
                    var o = this._getDShip(t.d_indexes[n], t.flag);
                    o && i.push(o)
                }
                var r = [t.getDamage(0), t.getDamage(1), t.getDamage(2)],
                    s = [t.getHitType(0), t.getHitType(1), t.getHitType(2)],
                    a = [t.isShield(0), t.isShield(1), t.isShield(2)];
                new m.PhaseNagatoAttack(this._scene, i, r, s, a).start(function () {
                    e._hougekiCycle()
                })
            }, e.prototype._mutsu_cutin = function (t) {
                for (var e = this, i = [], n = 0; n < 3; n++) {
                    var o = this._getDShip(t.d_indexes[n], t.flag);
                    o && i.push(o)
                }
                var r = [t.getDamage(0), t.getDamage(1), t.getDamage(2)],
                    s = [t.getHitType(0), t.getHitType(1), t.getHitType(2)],
                    a = [t.isShield(0), t.isShield(1), t.isShield(2)];
                new g.PhaseMutsuAttack(this._scene, i, r, s, a).start(function () {
                    e._hougekiCycle()
                })
            }, e.prototype._colorado_cutin = function (t) {
                for (var e = this, i = [], n = 0; n < 3; n++) {
                    var o = this._getDShip(t.d_indexes[n], t.flag);
                    o && i.push(o)
                }
                var r = [t.getDamage(0), t.getDamage(1), t.getDamage(2)],
                    s = [t.getHitType(0), t.getHitType(1), t.getHitType(2)],
                    a = [t.isShield(0), t.isShield(1), t.isShield(2)];
                new v.PhaseColoradoAttack(this._scene, i, r, s, a).start(function () {
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
                        u = t.isShield(0);
                    new p.PhaseAttackDanchaku(this._scene, t.type, i, n, o, r, s, a, _, u).start(function () {
                        e._hougekiCycle()
                    })
                }
            }, e.prototype._zuiunCutin = function (t) {
                var e = this,
                    i = new w.UIImageLoader("battle");
                i.add("battle_zrk.json"), i.load(function () {
                    var i = e._getAShip(t.a_index, t.flag),
                        n = e._getDShip(t.d_indexes[0], t.flag),
                        o = t.getSlotitem(0),
                        r = t.getSlotitem(2),
                        s = t.getDamage(0),
                        a = t.getHitType(0),
                        _ = t.isShield(0);
                    new b.PhaseZRK(e._scene, i, n, o, r, s, a, _).start(function () {
                        e._hougekiCycle()
                    })
                })
            }, e.prototype._getAShip = function (t, e) {
                return 0 == e ? this._scene.data.model.deck_f.ships[t] : this._scene.data.model.deck_e.ships[t]
            }, e.prototype._getDShip = function (t, e) {
                return 0 == e ? this._scene.data.model.deck_e.ships[t] : this._scene.data.model.deck_f.ships[t]
            }, e.prototype._getNormalAttackType = function (t, e, i) {
                for (var n = 0, s = 0, a = t.slots, _ = 0, u = a; _ < u.length; _++) {
                    var l = u[_];
                    if (null != l) {
                        var c = l.equipType;
                        c == r.EquipType._08_KANJO_KOUGEKIKI || c == r.EquipType._58_FUNSHIKI_KOUGEKIKI ? (n++, l.taisen > 0 && s++) : c != r.EquipType._11_SUIJO_BAKUGEKIKI && c != r.EquipType._25_AUTOGYRO || s++
                    }
                }
                var h = t.stype;
                if (352 == t.mst_id) {
                    if (1 == e.isSubMarine()) return s > 0 ? 1 : 2;
                    if (n > 0) return 1
                }
                if (7 == h || 11 == h || 18 == h) return 1;
                if (e.isSubMarine()) return 6 == h || 10 == h || 16 == h || 17 == h ? 1 : 2;
                var p = o.default.model.slot.getMst(i);
                return null == p || p.equipTypeSp != r.EquipType._05_GYORAI && p.equipTypeSp != r.EquipType._32_SENSUIKAN_GYORAI ? 0 : 3
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
                if (1 == t.hasSlot(355) && 1 == e.isGround()) return 6;
                if (1 == t.hasSlot(230)) return 1 == e.isGround() ? 5 : 0;
                if (1 == t.hasSlot(355) && i.indexOf(e.name) >= 0) return 6;
                if (1 == t.hasSlot(167)) {
                    if (1 == t.isSubMarine()) {
                        if (1 == e.isGround()) return 4
                    } else if (i.indexOf(e.name) >= 0) return 4;
                    return 0
                }
                return 1 == t.hasSlot(166) && i.indexOf(e.name) >= 0 ? 3 : 1 == t.hasSlot(193) && i.indexOf(e.name) >= 0 ? 3 : 1 == t.hasSlot(68) && i.indexOf(e.name) >= 0 ? 3 : 0
            }, e.prototype._log = function (t, e, i, n, o) {}, e.prototype._getIndex = function (t) {
                var e = this._scene.data.model.deck_f.ships.indexOf(t);
                return e >= 0 ? e : this._scene.data.model.deck_e.ships.indexOf(t)
            }, e
        }(s.TaskBase);
    e.PhaseHougeki = x
}