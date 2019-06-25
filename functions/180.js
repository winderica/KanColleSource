const function180 = function (t, e, i) {
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
        r = i(44),
        s = i(2),
        a = i(6),
        _ = i(1345),
        u = i(1352),
        l = i(141),
        c = function (t) {
            function e(e, i, n, o, r, s) {
                var a = t.call(this) || this;
                return a._completeflg_plane = !1, a._complete_show_damage_number = !1, a._scene = e, a._data = i, a._ships_f = n, a._ships_e = o, a._damage_cutin = r, a._aaCutin = s, a._hunshin_danmaku = [], a
            }
            return n(e, t), e.prototype._start = function () {}, e.prototype._log = function () {}, e.prototype._getPlaneType = function () {
                return r.PlaneConst.getPlaneType(!0)
            }, e.prototype._getPlanes = function (t, e) {
                for (var i = this._getPlaneType(), n = [], o = t.slots, r = 0, s = o; r < s.length; r++) {
                    var a = s[r];
                    if (null != a && i.indexOf(a.equipTypeSp) >= -0) {
                        var _ = new l.Plane,
                            u = new PIXI.Point([45, 18, -36][n.length], [18, -27, 38][n.length]);
                        if (_.initialize(a.mst_id, t.friend, e, u), n.push(_), n.length >= 3) break
                    }
                }
                return n
            }, e.prototype._createPlanes = function (t, e) {
                for (var i = 0, n = t; i < n.length; i++) {
                    var o = n[i],
                        r = e[o];
                    if (null != r) {
                        var s = this._scene.view.bannerGroupLayer.getBanner(r),
                            a = s.getGlobalPos(!0);
                        0 == s.entered && (a.x = s.friend ? -240 : 1440);
                        var _ = this._getPlanes(r, a);
                        1 == r.friend ? this._canvas.addPlanes_f(_) : this._canvas.addPlanes_e(_)
                    }
                }
            }, e.prototype._startAircraftFlightAnimation = function () {
                for (var t = this, e = 0, i = this._canvas.planes_f; e < i.length; e++) {
                    var n = i[e];
                    n.startFluctuations()
                }
                for (var o = 0, r = this._canvas.planes_f; o < r.length; o++) {
                    var n = r[o];
                    n.startFluctuations()
                }
                this._canvas.play(function () {
                    for (var e = 0, i = t._canvas.planes_f; e < i.length; e++) {
                        var n = i[e];
                        n.stopFluctuations()
                    }
                    for (var o = 0, r = t._canvas.planes_f; o < r.length; o++) {
                        var n = r[o];
                        n.stopFluctuations()
                    }
                    t._completeflg_plane = !0, t._endTask()
                })
            }, e.prototype._fireDogFight = function () {
                var t = this._data.plane_from_f;
                if (null != t && 0 != t.length) {
                    var e = this._data.plane_from_e;
                    if (null != e && 0 != e.length) {
                        var i = this._canvas.planes_f,
                            n = this.__fireDogFight(i);
                        i = this._canvas.planes_e;
                        var o = this.__fireDogFight(i);
                        (n || o) && a.SE.play("116")
                    }
                }
            }, e.prototype.__fireDogFight = function (t) {
                for (var e = !1, i = 0, n = t; i < n.length; i++) {
                    var s = n[i],
                        a = s.mst_id,
                        _ = o.default.model.slot.getMst(a);
                    null != _ && r.PlaneConst.ATTACKABLE_TYPE.indexOf(_.equipTypeSp) >= 0 && (s.fire(), e = !0)
                }
                return e
            }, e.prototype._showTaikuCutin = function () {
                var t = this;
                null != this._aaCutin && (createjs.Ticker.setPaused(!0), this._aaCutin.init(), this._scene.view.layer_cutin.addChild(this._aaCutin), this._aaCutin.play(function () {
                    t._scene.view.layer_cutin.removeChild(t._aaCutin), createjs.Ticker.setPaused(!1)
                }))
            }, e.prototype._damageAtStage1 = function () {
                var t = this._data.plane_count_f.count,
                    e = this._data.plane_count_f.lost_count_stage1,
                    i = this._canvas.planes_f;
                this._planeDamage(t, e, i), t = this._data.plane_count_e.count, e = this._data.plane_count_e.lost_count_stage1, i = this._canvas.planes_e, this._planeDamage(t, e, i)
            }, e.prototype._planeDamage = function (t, e, i) {
                if (!(t <= 0 || e <= 0)) {
                    e = Math.min(e, t), i = i.concat();
                    for (var n = e / t, o = i.length * n; i.length > 0 && o > 0;) {
                        var r = Math.floor(Math.random() * i.length),
                            s = i[r];
                        if (s.power > 0) {
                            var a = Math.min(o, s.power);
                            o -= a, s.power -= a, 0 == s.power ? s.crash() : s.damage()
                        }
                        i.splice(r, 1)
                    }
                }
            }, e.prototype._antiAircraft = function () {
                var t = this._data.plane_from_e;
                if (null != t && 0 != t.length) {
                    for (var e = [], i = 0, n = this._ships_f; i < n.length; i++) {
                        var o = n[i],
                            r = this._getAntiAircraftAbility(o);
                        if (0 != r) {
                            for (var s = this._data.stage3_f.getDamage(o.index), u = this._canvas.planes_e.concat(), l = null; u.length > 0;) {
                                var c = Math.floor(Math.random() * u.length);
                                if (u[c].power > 0) {
                                    l = u[c];
                                    break
                                }
                                u.splice(c, 1)
                            }
                            var h = new _.TaskAirWarAntiAircraft(this._scene, o, s, r, l);
                            e.push(h)
                        }
                    }
                    if (0 == e.length) {
                        for (var o = this._ships_f[0], s = this._data.stage3_f.getDamage(o.index), u = this._canvas.planes_e.concat(), l = null; u.length > 0;) {
                            var c = Math.floor(Math.random() * u.length);
                            if (u[c].power > 0) {
                                l = u[c];
                                break
                            }
                            u.splice(c, 1)
                        }
                        var h = new _.TaskAirWarAntiAircraft(this._scene, o, s, 1, l);
                        e.push(h)
                    }
                    a.SE.play("116");
                    for (var p = 0, d = e; p < d.length; p++) {
                        var h = d[p];
                        h.start()
                    }
                }
            }, e.prototype._getAntiAircraftAbility = function (t) {
                if (null == t) return 0;
                if (0 == t.damageType) return 0;
                if (1 == t.isTaihi()) return 0;
                var e = t.slots.slice();
                e.push(t.slot_ex);
                for (var i = [], n = [], o = [], r = 0, s = e; r < s.length; r++) {
                    var a = s[r];
                    null != a && (i.push(a.mst_id), n.push(a.equipType), o.push(a.iconType))
                }
                var _ = !1;
                if (i.indexOf(274) >= 0 && this._isHunshinhouShipType(t.stype) && (_ = !0, this._hunshin_danmaku.push(t)), n.indexOf(18) >= 0) return _ ? 6 : 5;
                if (_) return 4;
                if (i.indexOf(51) >= 0) return 3;
                if (o.indexOf(16) >= 0) return 2;
                if (n.indexOf(21) >= 0) return 1;
                for (var u = 0, l = e; u < l.length; u++) {
                    var c = l[u];
                    if (null != c && (11 == c.iconType && c.taiku > 0)) return 1
                }
            }, e.prototype._isHunshinhouShipType = function (t) {
                return 6 == t || (7 == t || (10 == t || (11 == t || (16 == t || 18 == t))))
            }, e.prototype._damageAtStage2 = function () {
                this._showSeikuResult();
                var t = this._data.plane_count_f.count,
                    e = this._data.plane_count_f.lost_count_stage2,
                    i = this._canvas.planes_f;
                this._planeDamage(t, e, i), t = this._data.plane_count_e.count, e = this._data.plane_count_e.lost_count_stage2, i = this._canvas.planes_e, this._planeDamage(t, e, i)
            }, e.prototype._showSeikuResult = function () {}, e.prototype._showBakuExplosion = function () {
                var t = this._data.stage3_f,
                    e = this._bakuExplosion(t);
                t = this._data.stage3_e, 1 == (e = this._bakuExplosion(t) || e) && a.SE.play("104")
            }, e.prototype._bakuExplosion = function (t) {
                var e = t.beBombed(),
                    i = t.beBombedCombined();
                return 1 == e && (1 == t.friend ? this._scene.view.layer_explosion.playExplosions(132, 306) : this._scene.view.layer_explosion.playExplosions(1080, 417)), 1 == i && (1 == t.friend ? this._scene.view.layer_explosion.playExplosions(387, 306) : this._scene.view.layer_explosion.playExplosions(825, 417)), 1 == e || i
            }, e.prototype._showDamage = function () {
                for (var t = this._data.stage3_f, e = 0, i = this._ships_f; e < i.length; e++) {
                    var n = i[e];
                    this._damage(n, t)
                }
                t = this._data.stage3_e;
                for (var o = 0, r = this._ships_e; o < r.length; o++) {
                    var n = r[o];
                    this._damage(n, t)
                }
            }, e.prototype._damage = function (t, e) {
                if (null != t) {
                    var i = t.index,
                        n = e.getRai(i),
                        o = e.getBak(i),
                        r = e.getDamage(i);
                    if (0 == n && (1 == o || r > 0)) {
                        var s = this._scene.view.bannerGroupLayer.getBanner(t),
                            a = e.isShield(i);
                        if (1 == a) {
                            var _ = this._scene.view.bannerGroupLayer.getShieldTargetBanner(s);
                            this._scene.view.layer_damage.showShieldAtBanner(_)
                        }
                        s.moveAtDamage(a)
                    }
                    if (o || n || r > 0) {
                        e.getHitType(i)
                    }
                }
            }, e.prototype._showDamageNumber = function () {
                var t = this,
                    e = this._scene,
                    i = this._data,
                    n = this._damage_cutin,
                    o = this._ships_f,
                    r = this._ships_e;
                new u.TaskAirWarDamageNumber(e, i, n, o, r, this._hunshin_danmaku).start(function () {
                    t._complete_show_damage_number = !0, t._endTask()
                })
            }, e.prototype._endTask = function () {
                0 != this._completeflg_plane && 0 != this._complete_show_damage_number && (this._scene = null, this._data = null, this._ships_f = null, this._ships_e = null, this._damage_cutin = null, null != this._canvas.parent && this._canvas.parent.removeChild(this._canvas), this._canvas.dispose(), this._canvas = null, t.prototype._endTask.call(this))
            }, e
        }(s.TaskBase);
    e.TaskAircraftFlightBase = c
}