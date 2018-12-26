const function77 = function (t, e, i) {
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
        r = i(6),
        s = i(63),
        a = i(1347),
        _ = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                if (this._data = this._record.raw.raigeki, null == this._data) this._endTask();
                else {
                    new s.PhaseEnemyEnter(this._scene, this._record).start(function () {
                        t._scene.view.layer_title.show(6), t._showTelop()
                    })
                }
            }, e.prototype._showTelop = function () {
                var t = this;
                this._scene.view.layer_info2.once("complete", function () {
                    t._ready()
                }), this._scene.view.layer_info2.showCenter(6)
            }, e.prototype._ready = function () {
                for (var t = this._createAttackData_f(), e = this._createAttackData_e(), i = null, n = new Array, r = 0, s = t; r < s.length; r++) {
                    var a = s[r],
                        _ = a.attacker.index;
                    (null == i || i.index > _) && (i = a.attacker);
                    var l = this._scene.view.bannerGroupLayer.getBanner(a.attacker);
                    n.push(l)
                }
                for (var u = 0, c = e; u < c.length; u++) {
                    var a = c[u],
                        l = this._scene.view.bannerGroupLayer.getBanner(a.attacker);
                    n.push(l)
                }
                if (null != i) {
                    var h = i.mst_id.toString();
                    o.default.sound.voice.playAtRandom(h, [15, 16], [50, 50])
                }
                this._move(n, t, e)
            }, e.prototype._move = function (t, e, i) {
                for (var n = this, o = 0; o < t.length; o++) {
                    var r = t[o];
                    0 == o ? r.moveShoot(function () {
                        n._shoot(e, i)
                    }) : r.moveShoot()
                }
                0 == t.length && this._endTask()
            }, e.prototype._shoot = function (t, e) {
                var i = this;
                r.SE.play("112");
                for (var n = 0, o = t; n < o.length; n++) {
                    var s = o[n];
                    this._shootBase(s, 1900, null)
                }
                for (var a = 0, _ = e; a < _.length; a++) {
                    var s = _[a];
                    this._shootBase(s, 1900, null)
                }
                createjs.Tween.get(null).wait(1900).call(function () {
                    i._damageEffect(t, e)
                })
            }, e.prototype._damageEffect = function (t, e) {
                for (var i = this, n = {}, o = 0, r = e; o < r.length; o++) {
                    var s = r[o],
                        a = s.defender.index;
                    if (null == n[a]) n[a] = {
                        damage: s.damage,
                        hit: s.hit,
                        shield: s.shield
                    };
                    else {
                        var _ = n[a];
                        _.damage += s.damage, 2 == _.hit || 2 == s.hit ? _.hit = 2 : 1 == _.hit || 1 == s.hit ? _.hit = 1 : _.hit = 0
                    }
                }
                for (var l = {}, u = 0, c = t; u < c.length; u++) {
                    var s = c[u],
                        a = s.defender.index;
                    if (null == l[a]) l[a] = {
                        damage: s.damage,
                        hit: s.hit,
                        shield: s.shield
                    };
                    else {
                        var _ = l[a];
                        _.damage += s.damage, 2 == _.hit || 2 == s.hit ? _.hit = 2 : 1 == _.hit || 1 == s.hit ? _.hit = 1 : _.hit = 0
                    }
                }
                for (var h = 0, p = this._scene.data.model.deck_f.ships; h < p.length; h++) {
                    var d = p[h];
                    if (null != d) {
                        var _ = n[d.index];
                        null != _ && this._damageBase(d, _)
                    }
                }
                if (1 == this._data.hasShield_f()) {
                    var f = this._scene.view.bannerGroupLayer.getBanner(!0, 0);
                    this._scene.view.layer_damage.showShieldAtBanner(f)
                }
                for (var y = 0, m = this._scene.data.model.deck_e.ships; y < m.length; y++) {
                    var d = m[y];
                    if (null != d) {
                        var _ = l[d.index];
                        null != _ && this._damageBase(d, _)
                    }
                }
                if (1 == this._data.hasShield_e()) {
                    var f = this._scene.view.bannerGroupLayer.getBanner(!1, 0);
                    this._scene.view.layer_damage.showShieldAtBanner(f)
                }
                createjs.Tween.get(null).wait(500).call(function () {
                    i._showDamageNumber(n, l)
                })
            }, e.prototype._showDamageNumber = function (t, e) {
                var i = this;
                this._showDamageBase(this._scene.data.model.deck_f.ships, t), this._showDamageBase(this._scene.data.model.deck_e.ships, e), createjs.Tween.get(null).wait(400).call(function () {
                    i._endTask()
                })
            }, e.prototype._endTask = function () {
                var e = this;
                this._scene.view.layer_title.hide(), this._damage_cutin.start(function () {
                    t.prototype._endTask.call(e)
                })
            }, e
        }(a.PhaseRaigekiBase);
    e.PhaseRaigeki = _
}