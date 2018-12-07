const function1345 = function (t, e, i) {
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
    var o = i(2), r = i(62), s = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._scene = e, n._record = i, n._damage_cutin = new r.PhaseDamageCutin(e), n
        }

        return n(e, t), e.prototype._createAttackData_f = function () {
            return this._createAttackData(this._scene.data.model.deck_f.ships, this._scene.data.model.deck_e.ships)
        }, e.prototype._createAttackData_e = function () {
            return this._createAttackData(this._scene.data.model.deck_e.ships, this._scene.data.model.deck_f.ships)
        }, e.prototype._createAttackData = function (t, e) {
            for (var i = new Array, n = 0; n < t.length; n++) {
                var o = t[n];
                if (null != o) {
                    var r = o.friend ? this._data.getAttackTo_f(n) : this._data.getAttackTo_e(n);
                    if (!(r < 0)) {
                        var s = {
                            attacker: o,
                            defender: e[r],
                            damage: o.friend ? this._data.getDamage_f(n) : this._data.getDamage_e(n),
                            hit: o.friend ? this._data.getHitType_f(n) : this._data.getHitType_e(n),
                            shield: o.friend ? this._data.isShield_f(n) : this._data.isShield_e(n)
                        };
                        i.push(s)
                    }
                }
            }
            return i
        }, e.prototype._shootBase = function (t, e, i) {
            var n = this._scene.view.bannerGroupLayer.getBanner(t.attacker),
                o = this._scene.view.bannerGroupLayer.getBanner(t.defender), r = n.getGlobalPos(!0),
                s = o.getGlobalPos(!0);
            this._scene.view.layer_torpedo.playTorpedo(r, s, e, function () {
                null != i && i()
            })
        }, e.prototype._damageBase = function (t, e) {
            1 == this._scene.data.model.isPractice() && (e.damage = Math.min(e.damage, t.hp_now - 1));
            var i = this._scene.view.bannerGroupLayer.getBanner(t), n = i.getGlobalPos(!0);
            this._scene.view.layer_torpedo.playTorpedoWaterColumn(i), this._scene.view.layer_explosion.playDamageExplosion(n.x, n.y, e.damage), i.moveAtDamage(e.shield)
        }, e.prototype._showDamageBase = function (t, e) {
            for (var i = 0, n = t; i < n.length; i++) {
                var o = n[i];
                if (null != o) {
                    var r = e[o.index];
                    if (null != r) {
                        var s = this._scene.view.bannerGroupLayer.getBanner(o);
                        this._scene.view.layer_damage.showAtBanner(s, r.damage, r.hit), this._damage_cutin.causeDamage(o, r.damage), s.updateHp(o.hp_now)
                    }
                }
            }
        }, e
    }(o.TaskBase);
    e.PhaseRaigekiBase = s
}