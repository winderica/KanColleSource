const function262 = function (t, e, i) {
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
        s = i(6),
        a = i(463),
        _ = i(1406),
        u = i(1407),
        l = i(1408),
        c = i(40),
        h = function (t) {
            function e(e, i, n, r, c, h, p, d, f, y, m, g) {
                var v = t.call(this, e, i, r, c, h, p) || this;
                v._completeDamageEffect = function () {
                    v._cutin.resume(), v._cutin.view.once("attack", function () {
                        s.SE.play("102"), v._a_banner.attack(function () {
                            v._2ndDamageEffect()
                        })
                    })
                }, v._defender = n, v._defender2 = d, v._slot2 = o.default.model.slot.getMst(f), v._damage2 = y, v._hit2 = m, v._shield2 = g;
                var b = v._scene.data.isNight(),
                    w = Math.floor(4 * Math.random());
                return v._cutin = 0 == w ? new a.CutinDouble1(v._attacker, v._slot, v._slot2, b) : 1 == w ? new _.CutinDouble2(v._attacker, v._slot, v._slot2, b) : 2 == w ? new u.CutinDouble3(v._attacker, v._slot, v._slot2, b) : new l.CutinDouble4(v._attacker, v._slot, v._slot2, b), v
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._cutin.getPreloadTask().start(function () {
                    t._completePreload()
                })
            }, e.prototype._completePreload = function () {
                if (1 == this._scene.data.isNight()) {
                    var t = null != this._slot ? this._slot : this._slot2;
                    if (null != t) {
                        var e = t.equipTypeSp;
                        if (e == r.EquipType._05_GYORAI || e == r.EquipType._32_SENSUIKAN_GYORAI) return void this._doubleR()
                    }
                }
                this._doubleH()
            }, e.prototype._doubleH = function () {
                var t = this,
                    e = this._attacker.friend,
                    i = this._attacker.index,
                    n = this._defender.index,
                    o = this._defender2.index;
                1 == e ? (this._a_banner = this._scene.view.bannerGroupLayer.getBanner(!0, i), this._d_banner1 = this._scene.view.bannerGroupLayer.getBanner(!1, n), this._d_banner2 = this._scene.view.bannerGroupLayer.getBanner(!1, o)) : (this._a_banner = this._scene.view.bannerGroupLayer.getBanner(!1, i), this._d_banner1 = this._scene.view.bannerGroupLayer.getBanner(!0, n), this._d_banner2 = this._scene.view.bannerGroupLayer.getBanner(!0, o)), this._a_banner.moveFront(), 0 == this._shield && this._d_banner1.moveFront(), this._scene.view.layer_cutin.addChild(this._cutin.view), this._cutin.start(), this._cutin.view.once("attack", function () {
                    t._playVoice(), t._attack(t._a_banner, t._d_banner1)
                })
            }, e.prototype._doubleR = function () {}, e.prototype._attack = function (t, e) {
                s.SE.play("102"), t.attack(null), this._damageEffect(t, e)
            }, e.prototype._damageEffect = function (t, e) {
                var i = this;
                1 == this._shield && this._showShield(e);
                var n = this._getDamage(this._defender);
                e.moveAtDamage(this._shield);
                var o = e.getGlobalPos(!0);
                this._scene.view.layer_explosion.playDamageExplosion(o.x, o.y, n, null), this._scene.view.layer_damage.showAtBanner(e, n, this._hit), createjs.Tween.get(this).wait(200).call(function () {
                    i._damage_cutin.causeDoubleDamage1st(i._defender, n), e.updateHp(i._defender.hp_now)
                }).wait(500).call(function () {
                    i._completeDamageEffect()
                })
            }, e.prototype._2ndDamageEffect = function () {
                var t = this,
                    e = this._defender2,
                    i = this._d_banner2,
                    n = this._damage2;
                1 == this._scene.data.model.isPractice() && (n = Math.min(n, e.hp_now - 1));
                var o = this._hit2;
                1 == this._shield2 && this._showShield(i), i.moveAtDamage(this._shield2), this._playExplosion(i, n), this._scene.view.layer_damage.showAtBanner(i, n, o), createjs.Tween.get(this).wait(200).call(function () {
                    t._damage_cutin.causeDoubleDamage2nd(e, n), i.updateHp(e.hp_now)
                }).wait(600).call(function () {
                    t._endTask()
                })
            }, e.prototype._playVoice = function () {
                this._playVoiceNight()
            }, e.prototype._log = function (e) {
                t.prototype._log.call(this, e + ":1");
                var i = "[" + e + ":2] [" + this._attacker.index + "]" + this._attacker.name + "(" + this._attacker.mst_id + ")";
                i += " damage:" + this._damage2 + " ", null != this._slot && (i += " [" + this._slot2.mstID + "]" + this._slot2.name), 2 == this._hit2 ? i += " [CRITICAL]" : 0 == this._hit2 && (i += " [MISS]")
            }, e
        }(c.PhaseAttackBase);
    e.PhaseAttackDouble = h
}