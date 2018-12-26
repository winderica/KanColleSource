const function251 = function (t, e, i) {
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
    var o = i(6),
        r = i(139),
        s = i(120),
        a = i(43),
        _ = function (t) {
            function e(e, i, n, o, s, a, _) {
                var l = t.call(this, e, i, o, s, a, _) || this;
                l._defender = n;
                var u = l._scene.data.isNight();
                return l._cutin = new r.CutinAttack(l._attacker, l._slot, u, !1, !0), l
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._cutin.getPreloadTask().start(function () {
                    t._completePreload()
                })
            }, e.prototype._completePreload = function () {
                var t = this,
                    e = this._attacker.friend,
                    i = this._attacker.index,
                    n = this._defender.index;
                1 == e ? (this._a_banner = this._scene.view.bannerGroupLayer.getBanner(!0, i), this._d_banner = this._scene.view.bannerGroupLayer.getBanner(!1, n)) : (this._a_banner = this._scene.view.bannerGroupLayer.getBanner(!1, i), this._d_banner = this._scene.view.bannerGroupLayer.getBanner(!0, n)), this._cutin.view.once("attack", function () {
                    t._playVoice(), t._attack()
                }), this._scene.view.layer_cutin.addChild(this._cutin.view), this._cutin.start()
            }, e.prototype._attack = function () {
                var t = this,
                    e = this._scene.view.layer_content,
                    i = this._a_banner,
                    n = this._d_banner;
                new s.TaskDaihatsuEff(e, i, n, this._daihatsu_eff).start(), this._a_banner.moveShoot(function () {
                    o.SE.play("112");
                    var e = t._a_banner.getGlobalPos(!0),
                        i = t._d_banner.getGlobalPos(!0);
                    t._scene.view.layer_torpedo.playTorpedo(e, i, 1900, function () {
                        t._damageEffect(t._a_banner, t._d_banner)
                    })
                })
            }, e.prototype._damageEffect = function (t, e) {
                1 == this._shield && this._showShield(e), e.moveAtDamage(this._shield);
                var i = this._getDamage(this._defender);
                this._playExplosion(e, i), this._playDamageEffect(t, e, this._defender, i, this._hit)
            }, e
        }(a.PhaseAttackBase);
    e.PhaseAttackRaigeki = _
}