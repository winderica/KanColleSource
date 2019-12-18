const function465 = function (t, e, i) {
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
        r = i(2),
        s = i(22),
        a = i(1398),
        _ = i(54),
        l = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this) || this;
                return s._scene = e, s._attackers = [s._scene.data.model.deck_f.ships[0], s._scene.data.model.deck_f.ships[1], s._scene.data.model.deck_f.ships[2]], s._defenders = i, s._hits = o, s._damages = n, s._shields = r, s._damage_cutin = new _.PhaseDamageCutin(e), s._cutin = new a.CutinColoradoAttack(s._attackers), s
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                this._cutin.getPreloadTask().start(function () {
                    t._completePreload()
                })
            }, e.prototype._completePreload = function () {
                for (var t = this, e = this._attackers[0].friend, i = [], n = [], o = 0; o < this._attackers.length; o++) {
                    var r = this._attackers[o].index,
                        s = this._scene.view.bannerGroupLayer.getBanner(!!e, r);
                    i.push(s), s.moveFront()
                }
                for (var o = 0; o < this._defenders.length; o++) {
                    var a = this._defenders[o].index,
                        _ = this._scene.view.bannerGroupLayer.getBanner(!e, a);
                    n.push(_)
                }
                this._scene.view.layer_cutin.addChild(this._cutin.view), this._cutin.start(function () {
                    t._explosion(i, n, 0)
                })
            }, e.prototype._explosion = function (t, e, i) {
                var n = this,
                    o = e[i].getGlobalPos(!0),
                    r = Math.random() * s.BannerSize.W - s.BannerSize.W / 2,
                    a = Math.random() * s.BannerSize.H - s.BannerSize.H / 2,
                    _ = Math.random() * s.BannerSize.W - s.BannerSize.W / 2,
                    l = Math.random() * s.BannerSize.H - s.BannerSize.H / 2;
                createjs.Tween.get(null).wait(200).call(function () {
                    e[i].moveAtDamage(n._shields[i]), n._scene.view.layer_explosion.playDamageExplosion(o.x, o.y, n._damages[i])
                }).wait(150).call(function () {
                    n._scene.view.layer_explosion.playExplosionSmall(o.x + r, o.y + a)
                }).wait(100).call(function () {
                    n._scene.view.layer_explosion.playExplosionSmall(o.x + _, o.y + l, function () {
                        n._attack(t, e, i)
                    })
                })
            }, e.prototype._attack = function (t, e, i) {
                o.SE.play("102"), this._damageEffect(t, e, i)
            }, e.prototype._damageEffect = function (t, e, i) {
                1 == this._shields[i] && this._showShield(e[i]), e[i].moveAtDamage(this._shields[i]), this._playExplosion(e[i], this._damages[i]), this._playDamageEffect(t, e, i)
            }, e.prototype._showShield = function (t) {
                var e = this._scene.view.bannerGroupLayer.getShieldTargetBanner(t);
                this._scene.view.layer_damage.showShieldAtBanner(e)
            }, e.prototype._playExplosion = function (t, e) {
                var i = t.getGlobalPos(!0);
                this._scene.view.layer_explosion.playDamageExplosion(i.x, i.y, e)
            }, e.prototype._playDamageEffect = function (t, e, i) {
                var n = this;
                this._scene.view.layer_damage.showAtBanner(e[i], this._damages[i], this._hits[i]);
                var o = createjs.Tween.get(null);
                o.wait(200), o.call(function () {
                    if (n._damage_cutin.causeDamage(n._defenders[i], n._damages[i]), e[i].updateHp(n._defenders[i].hp_now), i + 1 >= n._defenders.length)
                        for (var o = 0; o < n._attackers.length; o++) t[o].moveDefault()
                }), i + 1 >= this._defenders.length ? (o.wait(1e3), o.call(function () {
                    n._endTask()
                })) : (o.wait(150), o.call(function () {
                    n._explosion(t, e, i + 1)
                }))
            }, e.prototype._endTask = function () {
                var e = this;
                this._damage_cutin.start(function () {
                    t.prototype._endTask.call(e)
                })
            }, e.prototype._log = function (t) {}, e
        }(r.TaskBase);
    e.PhaseColoradoAttack = l
}