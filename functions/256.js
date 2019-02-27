const function256 = function (t, e, i) {
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
    var o = i(22),
        r = i(27),
        s = i(141),
        a = i(121),
        _ = i(1351),
        l = i(1352),
        u = i(43),
        c = function (t) {
            function e(e, i, n, l, u, c) {
                var h = t.call(this, e, i, -1, l, u, c) || this;
                h._fire = function (t, e) {
                    var i = h._scene.view.layer_content,
                        n = t.getGlobalPos(),
                        s = 1;
                    1 == t.friend ? n.x += o.BannerSize.W / 2 : (n.x -= o.BannerSize.W / 2, s = -1);
                    var l = new _.TaskRocketFire(i, n.x, n.y, s, 0);
                    if (0 == h._daihatsu_eff) l.start(function () {
                        h._impact(t, e)
                    });
                    else {
                        var u = new a.TaskDaihatsuEff(i, t, e, h._daihatsu_eff),
                            c = new r.ParallelTask;
                        c.add(l), c.add(u), c.start(function () {
                            h._impact(t, e)
                        })
                    }
                }, h._defender = n;
                var p = h._scene.data.isNight();
                return h._cutin = new s.CutinAttack(h._attacker, h._slot, p, !0, !0), h
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._cutin.getPreloadTask().start(function () {
                    t._completePreload()
                })
            }, e.prototype._completePreload = function () {
                var t, e, i = this,
                    n = this._attacker.friend,
                    o = this._attacker.index,
                    r = this._defender.index;
                1 == n ? (t = this._scene.view.bannerGroupLayer.getBanner(!0, o), e = this._scene.view.bannerGroupLayer.getBanner(!1, r)) : (t = this._scene.view.bannerGroupLayer.getBanner(!1, o), e = this._scene.view.bannerGroupLayer.getBanner(!0, r)), t.moveFront(), 0 == this._shield && e.moveFront(), this._cutin.view.once("attack", function () {
                    i._playVoice(), i._fire(t, e)
                }), this._scene.view.layer_cutin.addChild(this._cutin.view), this._cutin.start()
            }, e.prototype._impact = function (t, e) {
                var i = this,
                    n = this._scene.view.layer_content,
                    r = e.getGlobalPos();
                1 == e.friend ? r.x += o.BannerSize.W / 2 : r.x -= o.BannerSize.W / 2;
                new l.TaskRocketHit(n, r.x, r.y, 300).start(function () {
                    i._damageEffect(t, e)
                })
            }, e.prototype._damageEffect = function (t, e) {
                var i = this;
                1 == this._shield && this._showShield(e), e.moveAtDamage(this._shield);
                var n = e.getGlobalPos(!0);
                this._scene.view.layer_explosion.playExplosionMiddle(n.x - o.BannerSize.W / 4 * (e.friend ? -1 : 1), n.y), createjs.Tween.get(this).wait(500).call(function () {
                    var n = i._getDamage(i._defender);
                    i._playExplosion(e, n), i._playDamageEffect(t, e, i._defender, n, i._hit)
                })
            }, e
        }(u.PhaseAttackBase);
    e.PhaseAttackRocket = c
}