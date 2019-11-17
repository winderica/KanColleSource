const function461 = function (t, e, i) {
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
        a = i(187),
        _ = i(187),
        l = i(187),
        u = i(187),
        c = i(40),
        h = function (t) {
            function e(e, i, n, r, s, c, h, p, d, f) {
                var y = t.call(this, e, n, s, p, d, f) || this;
                if (y._slot2 = o.default.model.slot.getMst(c), y._slot3 = o.default.model.slot.getMst(h), y._defender = r, 3 == i) y._cutin = new a.CutinDanchaku1(n, y._slot, y._slot2, y._slot3);
                else if (4 == i) y._cutin = new _.CutinDanchaku2(n, y._slot, y._slot2, y._slot3);
                else if (5 == i) y._cutin = new l.CutinDanchaku3(n, y._slot, y._slot2, y._slot3);
                else if (6 == i) y._cutin = new u.CutinDanchaku4(n, y._slot, y._slot2, y._slot3);
                else if (200 == i) y._cutin = new a.CutinDanchaku1(n, y._slot, y._slot2, y._slot3, 1);
                else {
                    if (201 != i) throw new Error;
                    y._cutin = new a.CutinDanchaku1(n, y._slot, y._slot2, y._slot3, 2)
                }
                return y
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
                    s = this._defender.index;
                1 == n ? (t = this._scene.view.bannerGroupLayer.getBanner(!0, o), e = this._scene.view.bannerGroupLayer.getBanner(!1, s)) : (t = this._scene.view.bannerGroupLayer.getBanner(!1, o), e = this._scene.view.bannerGroupLayer.getBanner(!0, s)), t.moveFront(), e.moveFront(), this._scene.view.layer_cutin.addChild(this._cutin.view), this._cutin.start(), this._cutin.view.once("attack", function () {
                    i._playVoice();
                    var n = i._getDamage(i._defender),
                        o = e.getGlobalPos(!0),
                        s = Math.random() * r.BannerSize.W - r.BannerSize.W / 2,
                        a = Math.random() * r.BannerSize.H - r.BannerSize.H / 2,
                        _ = Math.random() * r.BannerSize.W - r.BannerSize.W / 2,
                        l = Math.random() * r.BannerSize.H - r.BannerSize.H / 2;
                    createjs.Tween.get(null).wait(800).call(function () {
                        e.moveAtDamage(i._shield), i._scene.view.layer_explosion.playDamageExplosion(o.x, o.y, n)
                    }).wait(150).call(function () {
                        i._scene.view.layer_explosion.playExplosionSmall(o.x + s, o.y + a)
                    }).wait(100).call(function () {
                        i._scene.view.layer_explosion.playExplosionSmall(o.x + _, o.y + l, function () {
                            i._attack(t, e)
                        })
                    })
                })
            }, e.prototype._attack = function (t, e) {
                var i = this;
                s.SE.play("102"), t.attack(function () {
                    i._damageEffect(t, e)
                })
            }, e.prototype._damageEffect = function (t, e) {
                1 == this._shield && this._showShield(e), e.moveAtDamage(this._shield);
                var i = this._getDamage(this._defender);
                this._playExplosion(e, i), this._playDamageEffect(t, e, this._defender, i, this._hit)
            }, e.prototype._playVoice = function () {
                if (this._attacker.friend) {
                    var t = this._attacker.mst_id;
                    o.default.sound.voice.play(t.toString(), 17)
                }
            }, e.prototype._log = function (t) {}, e
        }(c.PhaseAttackBase);
    e.PhaseAttackDanchaku = h
}