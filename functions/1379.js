const function1379 = function (t, e, i) {
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
    var o = i(0), r = i(24), s = i(6), a = i(120), _ = i(43), l = i(1380), u = function (t) {
        function e(e, i, n, r, s, a, _, u, c) {
            var h = t.call(this, e, i, r, _, u, c) || this;
            return h._slot2 = o.default.model.slot.getMst(s), h._slot3 = o.default.model.slot.getMst(a), h._defender = n, h._cutin = new l.CutinSpSRD(i, h._slot, h._slot2, h._slot3), h
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            this._cutin.preload(function () {
                t._completePreload()
            })
        }, e.prototype._completePreload = function () {
            var t, e, i = this._attacker.friend, n = this._attacker.index, o = this._defender.index;
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
                i._shoot(t, e)
            }), this._cutin.view.once("attack", function () {
                i._playVoice()
            })
        }, e.prototype._shoot = function (t, e) {
            var i = this;
            t.moveShoot(function () {
                i._torpedo(t, e)
            })
        }, e.prototype._torpedo = function (t, e) {
            var i = this, n = t.friend ? 1 : -1, o = t.getGlobalPos(!0);
            o.x += r.BannerSize.W / 3 * n;
            var a = e.getGlobalPos(!0);
            a.x -= r.BannerSize.W / 3 * n, s.SE.play("112");
            var _ = this._scene.view.layer_torpedo;
            _.playTorpedoAtNight(o, a, 800, function () {
                _.playTorpedoWaterColumn(e), i._explosion(t, e)
            })
        }, e.prototype._explosion = function (t, e) {
            var i = this, n = e.getGlobalPos(!0);
            createjs.Tween.get(this).wait(300).call(function () {
                i._scene.view.layer_explosion.playExplosionSmall(n.x, n.y), 1 == i._shield && i._showShield(e), e.moveAtDamage(i._shield)
            }).wait(350).call(function () {
                var n = i._getDamage(i._defender);
                i._playExplosion(e, n), i._playDamageEffect(t, e, i._defender, n, i._hit)
            })
        }, e.prototype._playVoice = function () {
            if (this._attacker.friend) {
                var t = this._attacker.mst_id, e = 17;
                432 != t && 353 != t || (e = 917), o.default.sound.voice.play(t.toString(), e)
            }
        }, e.prototype._log = function (t) {
        }, e
    }(_.PhaseAttackBase);
    e.PhaseAttackSpSRD = u
}