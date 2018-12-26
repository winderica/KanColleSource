const function1390 = function (t, e, i) {
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
        r = i(24),
        s = i(1391),
        a = i(121),
        _ = i(43),
        l = function (t) {
            function e(e, i, n, r, s, a, _, l, u, c) {
                var h = t.call(this, e, n, s, l, u, c) || this;
                return h._slot2 = o.default.model.slot.getMst(a), h._slot3 = o.default.model.slot.getMst(_), h._defender = r, h
            }
            return n(e, t), e.prototype.preload = function (t) {
                this._cutin = new s.CutinSpSSF, this._cutin.preload(this._attacker, this._slot, this._slot2, this._slot3, t)
            }, e.prototype._start = function () {
                var t, e, i = this._attacker.friend,
                    n = this._attacker.index,
                    o = this._defender.index;
                1 == i ? (t = this._scene.view.bannerGroupLayer.getBanner(!0, n), e = this._scene.view.bannerGroupLayer.getBanner(!1, o)) : (t = this._scene.view.bannerGroupLayer.getBanner(!1, n), e = this._scene.view.bannerGroupLayer.getBanner(!0, o)), this._playPicket(t, e)
            }, e.prototype._playPicket = function (t, e) {
                var i = this;
                if (this._attacker.hasSlot(129, !0)) {
                    var n = new PIXI.Point;
                    n.x = this._attacker.friend ? r.BannerSize.W : 0;
                    var o = new a.Picket;
                    o.position.set(n.x, n.y), o.initialize(), t.addChild(o), o.play(), o.once("complete", function () {
                        i._playCutin(t, e)
                    })
                } else this._playCutin(t, e)
            }, e.prototype._playCutin = function (t, e) {
                var i = this;
                this._scene.view.layer_cutin.addChild(this._cutin.view), this._cutin.start(function () {
                    createjs.Tween.get(i).call(function () {
                        i._damageEffect1(t, e)
                    }).wait(300).call(function () {
                        i._damageEffect2(t, e)
                    }).wait(300).call(function () {
                        i._damageEffect2(t, e)
                    }).wait(800).call(function () {
                        i._damageEffect3(t, e)
                    })
                }), this._cutin.view.once("attack", function () {
                    i._playVoice(), t.moveFront(), e.moveFront()
                })
            }, e.prototype._damageEffect1 = function (t, e) {
                e.moveAtDamage(this._shield);
                var i = e.getGlobalPos(!0),
                    n = this._scene.view.layer_explosion;
                n.playExplosionLarge(i.x, i.y), e.friend ? n.playTorpedoWaterColumnToFriend(i.x + r.BannerSize.W / 3 * 2, i.y) : n.playTorpedoWaterColumnToEnemy(i.x - r.BannerSize.W / 3 * 2, i.y)
            }, e.prototype._damageEffect2 = function (t, e) {
                e.moveAtDamage(this._shield);
                var i = e.getGlobalPos(!0);
                this._scene.view.layer_explosion.playExplosionLarge(i.x, i.y)
            }, e.prototype._damageEffect3 = function (t, e) {
                1 == this._shield && this._showShield(e), e.moveAtDamage(this._shield);
                var i = e.getGlobalPos(!0),
                    n = this._scene.view.layer_explosion;
                n.playExplosionLarge(i.x, i.y), e.friend ? n.playTorpedoWaterColumnToFriend(i.x + r.BannerSize.W / 3 * 2, i.y) : n.playTorpedoWaterColumnToEnemy(i.x - r.BannerSize.W / 3 * 2, i.y);
                var o = this._getDamage(this._defender);
                this._playDamageEffect(t, e, this._defender, o, this._hit)
            }, e.prototype._playVoice = function () {
                if (this._attacker.friend) {
                    var t = this._attacker.mst_id,
                        e = 17;
                    432 != t && 353 != t || (e = 917), o.default.sound.voice.play(t.toString(), e)
                }
            }, e.prototype._log = function (t) {}, e
        }(_.PhaseAttackBase);
    e.PhaseAttackSpSSF = l
}