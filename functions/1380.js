const function1380 = function (t, e, i) {
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
        r = i(22),
        s = i(6),
        a = i(1381),
        _ = i(40),
        u = function (t) {
            function e(e, i, n, s, _, u, l, c) {
                var h = t.call(this, e, i, s, u, l, c) || this;
                h._onCallAttackEffect = function () {
                    var t = h._getDamage(h._defender),
                        e = h._defenderBanner.getGlobalPos(!0),
                        i = Math.random() * r.BannerSize.W - r.BannerSize.W / 2,
                        n = Math.random() * r.BannerSize.H - r.BannerSize.H / 2,
                        o = Math.random() * r.BannerSize.W - r.BannerSize.W / 2,
                        s = Math.random() * r.BannerSize.H - r.BannerSize.H / 2;
                    createjs.Tween.get(null).call(function () {
                        h._defenderBanner.moveAtDamage(h._shield), h._scene.view.layer_explosion.playDamageExplosion(e.x, e.y, t)
                    }).wait(150).call(function () {
                        h._scene.view.layer_explosion.playExplosionSmall(e.x + i, e.y + n)
                    }).wait(100).call(function () {
                        h._scene.view.layer_explosion.playExplosionSmall(e.x + o, e.y + s, function () {
                            h._attack(h._attackerBanner, h._defenderBanner)
                        })
                    })
                }, h._finallize = function () {
                    h._cutin.dispose(), h._cutin = null, h._attackerBanner = null, h._defenderBanner = null, h._endTask()
                };
                var p, d, f = h._slot.mstID,
                    y = o.default.model.slot.getMst(_),
                    m = y.mstID,
                    g = new a.CutinZRK(i, f, m),
                    v = i.friend,
                    b = i.index,
                    w = n.index;
                return v ? (p = e.view.bannerGroupLayer.getBanner(!0, b), d = e.view.bannerGroupLayer.getBanner(!1, w)) : (p = e.view.bannerGroupLayer.getBanner(!1, b), d = e.view.bannerGroupLayer.getBanner(!0, w)), g.onCallAttackEffect = h._onCallAttackEffect, g.onCallAttackVoice = h._playVoice, h._attackerBanner = p, h._defenderBanner = d, h._cutin = g, h._defender = n, h._debug_slot_mst_id3 = _, h
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._cutin.getPreloadTask().start(function () {
                    t._completePreload()
                })
            }, e.prototype._playVoice = function () {
                if (this._attacker.friend) {
                    var t = this._attacker.mst_id;
                    o.default.sound.voice.play(t.toString(), 16)
                }
            }, e.prototype._log = function (t) {}, e.prototype._completePreload = function () {
                this._attackerBanner.moveFront(), this._defenderBanner.moveFront(), this._scene.view.layer_cutin.addChild(this._cutin.view), this._cutin.start()
            }, e.prototype._attack = function (t, e) {
                var i = this;
                s.SE.play("102"), t.attack(function () {
                    i._damageEffect(t, e)
                })
            }, e.prototype._damageEffect = function (t, e) {
                var i = this;
                1 == this._shield && this._showShield(e), e.moveAtDamage(this._shield);
                var n = this._getDamage(this._defender);
                this._playExplosion(e, n), this._playDamageEffect(t, e, this._defender, n, this._hit, function () {
                    return i._finallize()
                })
            }, e
        }(_.PhaseAttackBase);
    e.PhaseZRK = u
}