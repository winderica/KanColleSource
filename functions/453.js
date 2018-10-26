const function453 = function (t, e, i) {
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
    var o = i(45), r = i(1353), s = i(1356), a = i(119), _ = i(449), u = i(450), l = i(43), c = function (t) {
        function e(e, i, n, o, a, _, l, c, h, p) {
            void 0 === p && (p = !1);
            var d = t.call(this, e, i, o, l, c, h) || this;
            d._onAttack = function () {
                d._playVoice(), d._createPlanes()
            }, d._onDamaged = function () {
                1 == d._shield && d._showShield(d._d_banner), d._d_banner.moveAtDamage(d._shield);
                var t = d._getDamage(d._defender);
                d._playExplosion(d._d_banner, t), d._playDamageEffect(d._a_banner, d._d_banner, d._defender, t, d._hit, function () {
                    d._complete_flg_damage = !0, d._endTask()
                })
            }, d._complete_flg_plane = !1, d._complete_flg_damage = !1, d._defender = n, d._yasenkouku = p;
            var f = d._scene.data.isNight(), y = d._scene.view.layer_cutin;
            return d._cutin = 0 == f ? new r.CutinKuboDay(y, i, o, a, _) : new s.CutinKuboNight(y, i, o, a, _), d._trio = new u.PlaneTrio(i.friend), d
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            this._cutin.getPreloadTask().start(function () {
                t._completePreload()
            })
        }, e.prototype._completePreload = function () {
            var t = this._attacker.friend, e = this._attacker.index, i = this._defender.index;
            1 == t ? (this._a_banner = this._scene.view.bannerGroupLayer.getBanner(!0, e), this._d_banner = this._scene.view.bannerGroupLayer.getBanner(!1, i)) : (this._a_banner = this._scene.view.bannerGroupLayer.getBanner(!1, e), this._d_banner = this._scene.view.bannerGroupLayer.getBanner(!0, i)), this._cutin.setCallback(this._onAttack), this._cutin.start()
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
            var t = this, e = this._scene.view.layer_content, i = this._a_banner, n = this._d_banner;
            new a.TaskDaihatsuEff(e, i, n, this._daihatsu_eff).start();
            var o = n.getGlobalPos(!0);
            new _.TaskPlane(e, this._trio, o, this._onDamaged).start(function () {
                t._complete_flg_plane = !0, t._endTask()
            })
        }, e.prototype._endTask = function () {
            0 != this._complete_flg_plane && 0 != this._complete_flg_damage && t.prototype._endTask.call(this)
        }, e
    }(l.PhaseAttackBase);
    e.PhaseAttackKuboCutin = c
}