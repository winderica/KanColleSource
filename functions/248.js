const function248 = function (t, e, i) {
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
    var o = i(6), r = i(138), s = i(119), a = i(43), _ = function (t) {
        function e(e, i, n, o, s, a, _) {
            var l = t.call(this, e, i, o, s, a, _) || this;
            l._defender = n;
            var u = l._scene.data.isNight();
            return l._cutin = new r.CutinAttack(l._attacker, l._slot, u, !0, !0), l
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            this._cutin.getPreloadTask().start(function () {
                t._completePreload()
            })
        }, e.prototype._completePreload = function () {
            var t, e, i = this, n = this._attacker.friend, o = this._attacker.index, r = this._defender.index;
            1 == n ? (t = this._scene.view.bannerGroupLayer.getBanner(!0, o), e = this._scene.view.bannerGroupLayer.getBanner(!1, r)) : (t = this._scene.view.bannerGroupLayer.getBanner(!1, o), e = this._scene.view.bannerGroupLayer.getBanner(!0, r)), t.moveFront(), 0 == this._shield && e.moveFront(), this._cutin.view.once("attack", function () {
                i._playVoice(), i._attack(t, e)
            }), this._scene.view.layer_cutin.addChild(this._cutin.view), this._cutin.start()
        }, e.prototype._attack = function (t, e) {
            var i = this, n = this._scene.view.layer_content;
            new s.TaskDaihatsuEff(n, t, e, this._daihatsu_eff).start();
            var r = 0;
            0 != this._daihatsu_eff && (r = 1300), createjs.Tween.get(null).wait(r).call(function () {
                o.SE.play("102"), t.attack(function () {
                    i._damageEffect(t, e)
                })
            })
        }, e.prototype._damageEffect = function (t, e) {
            1 == this._shield && this._showShield(e), e.moveAtDamage(this._shield);
            var i = this._getDamage(this._defender);
            this._playExplosion(e, i), this._playDamageEffect(t, e, this._defender, i, this._hit)
        }, e
    }(a.PhaseAttackBase);
    e.PhaseAttackNormal = _
}