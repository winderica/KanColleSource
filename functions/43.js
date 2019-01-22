const function43 = function (t, e, i) {
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
        s = i(179),
        a = i(62),
        _ = function (t) {
            function e(e, i, n, r, s, _) {
                var l = t.call(this) || this;
                return l._scene = e, l._attacker = i, l._slot = o.default.model.slot.getMst(n), l._hit = s, l._damage = r, l._shield = _, l._daihatsu_eff = 0, l._damage_cutin = new a.PhaseDamageCutin(e), l
            }
            return n(e, t), e.prototype.preload = function (t) {
                null != t && t()
            }, e.prototype.setOptionalEffects = function (t) {
                this._daihatsu_eff = t
            }, e.prototype._endTask = function () {
                var e = this;
                this._damage_cutin.start(function () {
                    t.prototype._endTask.call(e)
                })
            }, e.prototype._getDamage = function (t) {
                return 1 == this._scene.data.model.isPractice() ? Math.min(this._damage, t.hp_now - 1) : this._damage
            }, e.prototype._showShield = function (t) {
                var e = this._scene.view.bannerGroupLayer.getShieldTargetBanner(t);
                this._scene.view.layer_damage.showShieldAtBanner(e)
            }, e.prototype._playVoice = function () {
                0 == this._scene.data.isNight() ? this._playVoiceDay() : this._playVoiceNight()
            }, e.prototype._playVoiceDay = function () {
                if (this._attacker.friend) {
                    var t = this._attacker.mst_id,
                        e = this._attacker.stype;
                    7 == e || 11 == e ? o.default.sound.voice.playAtRandom(t.toString(), [16, 18], [50, 50]) : this._attacker.isSubMarine() && 0 != this._daihatsu_eff ? o.default.sound.voice.play(t.toString(), 26) : o.default.sound.voice.playAtRandom(t.toString(), [16, 17], [50, 50])
                } else this._playVoiceEnemy()
            }, e.prototype._playVoiceNight = function () {
                if (this._attacker.friend) {
                    var t = this._attacker.mst_id,
                        e = 17;
                    432 == t || 353 == t ? e = 917 : this._attacker.isSubMarine() && 0 != this._daihatsu_eff && (e = 26), o.default.sound.voice.play(t.toString(), e)
                } else this._playVoiceEnemy()
            }, e.prototype._playVoiceEnemy = function () {
                var t = s.EnemyVoiceConst.getAttackVoiceIDs(this._scene, this._attacker);
                if (null != t && t.length > 0) {
                    var e = t[Math.floor(Math.random() * t.length)];
                    o.default.sound.voice.play("9998", e)
                }
            }, e.prototype._playExplosion = function (t, e) {
                var i = t.getGlobalPos(!0);
                this._scene.view.layer_explosion.playDamageExplosion(i.x, i.y, e)
            }, e.prototype._playDamageEffect = function (t, e, i, n, o, r) {
                var s = this;
                void 0 === r && (r = null), this._scene.view.layer_damage.showAtBanner(e, n, o);
                var a = createjs.Tween.get(null);
                a.wait(200), a.call(function () {
                    s._damage_cutin.causeDamage(i, n), e.updateHp(i.hp_now), t.moveDefault()
                }), a.wait(600), null == r ? a.call(function () {
                    s._endTask()
                }) : a.call(r)
            }, e.prototype._log = function (t) {}, e
        }(r.TaskBase);
    e.PhaseAttackBase = _
}