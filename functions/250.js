const function250 = function (t, e, i) {
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
    var o = i(26), r = i(15), s = i(137), a = i(120), _ = i(43), u = function (t) {
        function e(e, i, n, o, r, a, _) {
            var u = t.call(this, e, i, o, r, a, _) || this;
            u._defender = n;
            var l = u._scene.data.isNight();
            return u._cutin = new s.CutinAttack(u._attacker, u._slot, l, !1, !1), u
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            this._cutin.getPreloadTask().start(function () {
                t._completePreload()
            })
        }, e.prototype._completePreload = function () {
            var t, e, i = this, n = this._attacker.friend, o = this._attacker.index, r = this._defender.index;
            1 == n ? (t = this._scene.view.bannerGroupLayer.getBanner(!0, o), e = this._scene.view.bannerGroupLayer.getBanner(!1, r)) : (t = this._scene.view.bannerGroupLayer.getBanner(!1, o), e = this._scene.view.bannerGroupLayer.getBanner(!0, r)), this._cutin.view.once("attack", function () {
                i._playVoice(), t.moveFront(function () {
                    i._attack(t, e)
                }), 0 == i._shield && e.moveFront()
            }), this._scene.view.layer_cutin.addChild(this._cutin.view), this._cutin.start()
        }, e.prototype._attack = function (t, e) {
            var i = this, n = this._scene.view.layer_content;
            new a.TaskDaihatsuEff(n, t, e, this._daihatsu_eff).start();
            var s = new PIXI.Sprite(r.BATTLE_MAIN.getTexture(60));
            s.anchor.set(.1, 1.05);
            var _ = new PIXI.Sprite(r.BATTLE_MAIN.getTexture(61));
            _.anchor.set(.88, 1.03);
            var u = t.getGlobalPos(), l = e.getGlobalPos();
            1 == t.friend ? (u.x += o.BannerSize.W / 2, l.x -= o.BannerSize.W / 4) : (s.scale.x = -1, u.x -= o.BannerSize.W / 2, _.scale.x = -1, l.x += o.BannerSize.W / 4), s.alpha = 0, _.alpha = 0, s.position.set(u.x, u.y), _.position.set(l.x, l.y), n.addChild(s), n.addChild(_);
            var c = 0;
            0 != this._daihatsu_eff && (c = 1e3), createjs.Tween.get(s).wait(c).to({ alpha: 1 }, 175).to({ alpha: 0 }, 100), createjs.Tween.get(_).wait(c + 350).to({ alpha: 1 }, 250).call(function () {
                i._damageEffect(t, e)
            }).to({ alpha: 0 }, 150).call(function () {
                i._scene.view.layer_content.removeChild(s), i._scene.view.layer_content.removeChild(_)
            })
        }, e.prototype._damageEffect = function (t, e) {
            var i = this;
            1 == this._shield && this._showShield(e), e.moveAtDamage(this._shield);
            var n = e.getGlobalPos(!0), r = this._scene.view.layer_explosion;
            e.friend ? r.playWaterColumnToFriend(n.x + o.BannerSize.W / 2, n.y) : r.playWaterColumnToEnemy(n.x - o.BannerSize.W / 2, n.y), this._scene.view.layer_explosion.playExplosionMiddle(n.x - o.BannerSize.W / 4 * (e.friend ? -1 : 1), n.y), createjs.Tween.get(this).wait(500).call(function () {
                var n = i._getDamage(i._defender);
                i._playExplosion(e, n), i._playDamageEffect(t, e, i._defender, n, i._hit)
            })
        }, e
    }(_.PhaseAttackBase);
    e.PhaseAttackBakurai = u
}