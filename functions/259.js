const function259 = function (t, e, i) {
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
    var o = i(43),
        r = i(456),
        s = i(147),
        a = i(124),
        _ = i(457),
        l = i(39),
        u = function (t) {
            function e(e, i, n, o, r, a, l, u) {
                void 0 === u && (u = !1);
                var c = t.call(this, e, i, o, r, a, l) || this;
                c._onDamage = function () {
                    1 == c._shield && c._showShield(c._d_banner), c._d_banner.moveAtDamage(c._shield);
                    var t = c._getDamage(c._defender);
                    c._playExplosion(c._d_banner, t), c._playDamageEffect(c._a_banner, c._d_banner, c._defender, t, c._hit, function () {
                        c._complete_flg_damage = !0, c._endTask()
                    })
                }, c._complete_flg_plane = !1, c._complete_flg_damage = !1, c._defender = n, c._yasenkouku = u;
                var h = c._scene.data.isNight();
                return c._cutin = new s.CutinAttack(c._attacker, c._slot, h, !1, !1), c._trio = new _.PlaneTrio(i.friend), c
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
                1 == e ? (this._a_banner = this._scene.view.bannerGroupLayer.getBanner(!0, i), this._d_banner = this._scene.view.bannerGroupLayer.getBanner(!1, n)) : (this._a_banner = this._scene.view.bannerGroupLayer.getBanner(!1, i), this._d_banner = this._scene.view.bannerGroupLayer.getBanner(!0, n)), this._scene.view.layer_cutin.addChild(this._cutin.view), this._cutin.view.once("attack", function () {
                    t._playVoice(), t._createPlanes()
                }), this._cutin.start()
            }, e.prototype._createPlanes = function () {
                var t;
                t = 1 == this._defender.isSubMarine() ? o.PlaneConst.getPlaneType(!0) : o.PlaneConst.getPlaneType(!1);
                for (var e = this._attacker.slots, i = 0, n = e; i < n.length; i++) {
                    var r = n[i];
                    if (null != r && t.indexOf(r.equipTypeSp) >= -0) {
                        var s = r.mst_id;
                        if (this._scene.data.isNight() && "\u30a2\u30fc\u30af\u30ed\u30a4\u30e4\u30eb" == this._attacker.yomi && 0 == this._yasenkouku && 242 != s && 243 != s && 244 != s) continue;
                        var a = this._a_banner.getGlobalPos(!0);
                        this._trio.x = a.x, this._trio.y = a.y, this._trio.addPlane(s)
                    }
                }
                this._attack()
            }, e.prototype._attack = function () {
                var t = this,
                    e = this._scene.view.layer_content,
                    i = this._a_banner,
                    n = this._d_banner;
                new a.TaskDaihatsuEff(e, i, n, this._daihatsu_eff).start();
                var o = n.getGlobalPos(!0);
                new r.TaskPlane(e, this._trio, o, this._onDamage).start(function () {
                    t._complete_flg_plane = !0, t._endTask()
                })
            }, e.prototype._endTask = function () {
                0 != this._complete_flg_plane && 0 != this._complete_flg_damage && t.prototype._endTask.call(this)
            }, e
        }(l.PhaseAttackBase);
    e.PhaseAttackKansaiki = u
}