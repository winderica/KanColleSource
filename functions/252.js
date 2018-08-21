const function252 = function (t, e, i) {
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
    var o = i(45), r = i(448), s = i(139), a = i(122), _ = i(449), u = i(43), l = function (t) {
        function e(e, i, n, o, r, a, u) {
            var l = t.call(this, e, i, o, r, a, u) || this;
            l._onDamage = function () {
                1 == l._shield && l._showShield(l._d_banner), l._d_banner.moveAtDamage(l._shield);
                var t = l._getDamage(l._defender);
                l._playExplosion(l._d_banner, t), l._playDamageEffect(l._a_banner, l._d_banner, l._defender, t, l._hit, function () {
                    l._complete_flg_damage = !0, l._endTask()
                })
            }, l._complete_flg_plane = !1, l._complete_flg_damage = !1, l._defender = n;
            var c = l._scene.data.isNight();
            return l._cutin = new s.CutinAttack(l._attacker, l._slot, c, !1, !1), l._trio = new _.PlaneTrio(i.friend), l
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            this._cutin.getPreloadTask().start(function () {
                t._completePreload()
            })
        }, e.prototype._completePreload = function () {
            var t = this, e = this._attacker.friend, i = this._attacker.index, n = this._defender.index;
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
                    if (this._scene.data.isNight() && "\u30a2\u30fc\u30af\u30ed\u30a4\u30e4\u30eb" == this._attacker.yomi && 242 != s && 243 != s && 244 != s) continue;
                    var a = this._a_banner.getGlobalPos(!0);
                    this._trio.x = a.x, this._trio.y = a.y, this._trio.addPlane(s)
                }
            }
            this._attack()
        }, e.prototype._attack = function () {
            var t = this, e = this._scene.view.layer_content, i = this._a_banner, n = this._d_banner;
            new a.TaskDaihatsuEff(e, i, n, this._daihatsu_eff).start();
            var o = n.getGlobalPos(!0);
            new r.TaskPlane(e, this._trio, o, this._onDamage).start(function () {
                t._complete_flg_plane = !0, t._endTask()
            })
        }, e.prototype._endTask = function () {
            0 != this._complete_flg_plane && 0 != this._complete_flg_damage && t.prototype._endTask.call(this)
        }, e
    }(u.PhaseAttackBase);
    e.PhaseAttackKansaiki = l
}