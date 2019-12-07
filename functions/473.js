const function473 = function (t, e, i) {
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
    var o = i(256),
        r = i(257),
        s = i(258),
        a = i(259),
        _ = i(1410),
        l = i(1413),
        u = i(261),
        c = i(1416),
        h = i(1419),
        p = i(1422),
        d = i(1425),
        f = i(460),
        y = i(263),
        m = i(462),
        g = i(463),
        v = i(464),
        b = i(465),
        w = i(1428),
        x = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._current_index = 0, r._scene = e, r._data = i, r._ships_f = n, r._ships_e = o, r
            }
            return n(e, t), e.prototype._start = function () {
                null == this._data || null == this._data.list || 0 == this._data.list.length ? this._endTask() : this._hougekiCycle()
            }, e.prototype._hougekiCycle = function () {
                if (this._current_index < this._data.list.length) {
                    var t = this._data.list[this._current_index];
                    this._current_index++, this._hougeki(t)
                } else this._endTask()
            }, e.prototype._hougeki = function (t) {
                var e = t.type;
                0 == e ? this._normal(t) : 1 == e ? this._double(t) : 6 == e ? this._kuboCI(t) : 100 == e ? this._nelson_touch(t) : 101 == e ? this._nagato_cutin(t) : 102 == e ? this._mutsu_cutin(t) : 103 == e ? this._colorado_cutin(t) : 7 == e ? this._kuchiku_special(t) : 8 == e ? this._kuchiku_special(t) : this._special(t)
            }, e.prototype._normal = function (t) {
                var e = this,
                    i = this._getAShip(t.a_index, t.flag),
                    n = this._getDShip(t.d_indexes[0], t.flag);
                if (null != i && null != n) {
                    var _ = t.getSlotitem(0),
                        l = t.getDamage(0),
                        u = t.getHitType(0),
                        c = t.isShield(0),
                        h = this._getNormalAttackType(i, n, _, t.yasen_kubo),
                        p = this._getDaihatsuEffectType(i, n);
                    if (1 == this._hasRocketEffect(i, n, h)) {
                        var d = new y.PhaseAttackRocket(this._scene, i, n, l, u, c);
                        d.setOptionalEffects(p), d.start(function () {
                            e._hougekiCycle()
                        })
                    } else if (0 == h) {
                        var d = new o.PhaseAttackNormal(this._scene, i, n, _, l, u, c);
                        d.setOptionalEffects(p), d.start(function () {
                            e._hougekiCycle()
                        })
                    } else if (1 == h) {
                        var f = t.yasen_kubo,
                            d = new r.PhaseAttackKansaiki(this._scene, i, n, _, l, u, c, f);
                        d.setOptionalEffects(p), d.start(function () {
                            e._hougekiCycle()
                        })
                    } else if (2 == h) {
                        var d = new s.PhaseAttackBakurai(this._scene, i, n, _, l, u, c);
                        d.setOptionalEffects(p), d.start(function () {
                            e._hougekiCycle()
                        })
                    } else {
                        if (3 != h) throw new Error;
                        var d = new a.PhaseAttackRaigeki(this._scene, i, n, _, l, u, c);
                        d.setOptionalEffects(p), d.start(function () {
                            e._hougekiCycle()
                        })
                    }
                }
            }, e.prototype._double = function (t) {
                var e = this,
                    i = this._getAShip(t.a_index, t.flag),
                    n = this._getDShip(t.d_indexes[0], t.flag),
                    o = this._getDShip(t.d_indexes[1], t.flag),
                    r = t.getSlotitem(0),
                    s = t.getDamage(0),
                    a = t.getHitType(0),
                    _ = t.isShield(0),
                    l = t.getSlotitem(1),
                    c = t.getDamage(1),
                    h = t.getHitType(1),
                    p = t.isShield(1);
                new u.PhaseAttackDouble(this._scene, i, n, r, s, a, _, o, l, c, h, p).start(function () {
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
                    l = t.getHitType(0),
                    u = t.isShield(0),
                    c = this._getDaihatsuEffectType(n, o),
                    h = t.yasen_kubo,
                    p = new f.PhaseAttackKuboCutin(i, n, o, r, s, a, _, l, u, h);
                p.setOptionalEffects(c), p.start(function () {
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
                new m.PhaseNelsonTouch(this._scene, i, r, s, a).start(function () {
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
                new g.PhaseNagatoAttack(this._scene, i, r, s, a).start(function () {
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
                new v.PhaseMutsuAttack(this._scene, i, r, s, a).start(function () {
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
                new b.PhaseColoradoAttack(this._scene, i, r, s, a).start(function () {
                    e._hougekiCycle()
                })
            }, e.prototype._kuchiku_special = function (t) {
                var e = this,
                    i = this._getAShip(t.a_index, t.flag),
                    n = this._getDShip(t.d_indexes[0], t.flag),
                    o = t.getSlotitem(0),
                    r = t.getSlotitem(1),
                    s = t.getSlotitem(2),
                    a = t.getDamage(0),
                    u = t.getHitType(0),
                    c = t.isShield(0),
                    h = t.type;
                if (7 == h) {
                    var p = new l.PhaseAttackSpSRD(this._scene, i, n, o, r, s, a, u, c);
                    p.start(function () {
                        e._hougekiCycle()
                    })
                } else {
                    if (8 != h) throw new Error;
                    var p = new _.PhaseAttackSpRDJ(this._scene, i, n, o, r, s, a, u, c);
                    p.start(function () {
                        e._hougekiCycle()
                    })
                }
            }, e.prototype._special = function (t) {
                var e, i = this,
                    n = this._getAShip(t.a_index, t.flag),
                    o = this._getDShip(t.d_indexes[0], t.flag),
                    r = t.getSlotitem(0),
                    s = t.getSlotitem(1),
                    a = t.getSlotitem(2),
                    _ = t.getHitType(0),
                    l = t.isShield(0),
                    u = t.type;
                if (2 == u) {
                    var f = t.getDamage(0) + t.getDamage(1);
                    e = new c.PhaseAttackSpSR(this._scene, t.type, n, o, r, s, f, _, l)
                } else if (3 == u) {
                    var f = t.getDamage(0) + t.getDamage(1);
                    e = new h.PhaseAttackSpRR(this._scene, t.type, n, o, r, s, f, _, l)
                } else if (4 == u) {
                    var f = t.getDamage(0);
                    e = new p.PhaseAttackSpSSF(this._scene, t.type, n, o, r, s, a, f, _, l)
                } else if (5 == u) {
                    var f = t.getDamage(0);
                    e = new d.PhaseAttackSpSSS(this._scene, t.type, n, o, r, s, a, f, _, l)
                }
                if (null == e) throw new Error;
                e.preload(function () {
                    e.start(function () {
                        i._hougekiCycle()
                    })
                })
            }, e.prototype._getAShip = function (t, e) {
                return 0 == e ? this._ships_f[t] : this._ships_e[t]
            }, e.prototype._getDShip = function (t, e) {
                return 0 == e ? this._ships_e[t] : this._ships_f[t]
            }, e
        }(w.PhaseHougekiBase);
    e.PhaseHougeki = x
}