const function91 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(173), a = i(1318), _ = i(1322), u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene = e, i._chuha_ships = new Array, i._taiha_ships = new Array, i._gouchin_ships = new Array, i
        }

        return n(e, t), e.prototype._notifyGauge = function (t, e, i, n) {
            if (0 != this._scene.view.layer_gauge.hasGauge() && 1 != t && 0 == e) {
                var o = this._scene.view.layer_gauge, r = o.now, s = this._scene.data.model.gauge_type;
                if (2 == s) {
                    var a = Math.max(0, r - n);
                    o.update(a)
                } else 1 == s && r > 0 && n >= i && o.update(r - 1)
            }
        }, e.prototype.causeDamage = function (t, e) {
            if (null != t) {
                var i = t.hp_now;
                t.causeDamage(e), this._registerDamageEvents(t, e), this._notifyGauge(t.friend, t.index, i, e)
            }
        }, e.prototype.causeDoubleDamage1st = function (t, e) {
            if (null != t) {
                var i = t.hp_now;
                t.causeDamage(e), this._notifyGauge(t.friend, t.index, i, e)
            }
        }, e.prototype.causeDoubleDamage2nd = function (t, e) {
            if (null != t) {
                var i = t.hp_now;
                t.causeDamage(e, !1), this._registerDamageEvents(t, e), this._notifyGauge(t.friend, t.index, i, e)
            }
        }, e.prototype._registerDamageEvents = function (t, e) {
            if (0 == t.friend) {
                if (t.hp_now > 0 && e > 0) {
                    var i = s.EnemyVoiceConst.getDamagedVoiceIDs(this._scene, t);
                    if (null != i && i.length > 0) {
                        var n = i[Math.floor(Math.random() * i.length)];
                        o.default.sound.voice.play("9998", n)
                    }
                }
                return void(0 == t.index && 0 == t.damageType && this._scene.view.layer_gauge.explode())
            }
            if (!(t.mst_id < 0)) {
                var r = t.damageType_before, a = t.damageType;
                r != a && (75 == a && 100 == r ? 1 == t.friend && o.default.sound.voice.playAtRandom(t.mst_id.toString(), [19, 20], [50, 50]) : 50 == a && 75 == r ? this._chuha_ships.push(t) : 50 == a && 100 == r ? this._chuha_ships.push(t) : 25 == a && 75 == r ? this._taiha_ships.push(t) : 25 == a && 100 == r ? this._taiha_ships.push(t) : 0 == a && this._gouchin_ships.push(t))
            }
        }, e.prototype._start = function () {
            var t = this;
            1 == this._scene.view.layer_gauge.isAnimation() ? createjs.Tween.get(null).wait(500).call(function () {
                t._start()
            }) : this._gouchinCutin()
        }, e.prototype._gouchinCutin = function () {
            var t = this;
            if (this._gouchin_ships.length > 0) {
                this._clearChuhaList(), this._clearTaihaList();
                var e = this._gouchin_ships.shift(), i = e.useRepairItem(), n = this._scene.view.layer_cutin,
                    o = function () {
                        t._scene.view.bannerGroupLayer.getBanner(e).updateHp(e.hp_now)
                    };
                new a.TaskGouchinCutin(n, e.mst_id, i, o).start(function () {
                    t._gouchinCutin()
                })
            } else this._damageCutin()
        }, e.prototype._damageCutin = function () {
            for (var t = this, e = this._scene.view.layer_cutin, i = this._taiha_ships.length > 0, n = this._scene.data.isNight(), o = [], r = 0, s = this._taiha_ships; r < s.length; r++) {
                var a = s[r];
                o.push(a.mst_id)
            }
            this._taiha_ships = Array();
            for (var u = 0, l = this._chuha_ships; u < l.length; u++) {
                var a = l[u];
                o.push(a.mst_id)
            }
            if (this._clearTaihaList(), this._clearTaihaList(), o.length > 0) {
                new _.TaskDamageCutin(e, i, n, o).start(function () {
                    t._endCutin()
                })
            } else this._endCutin()
        }, e.prototype._endCutin = function () {
            this._endTask()
        }, e.prototype._clearTaihaList = function () {
            null != this._taiha_ships && this._taiha_ships.length > 0 && (this._taiha_ships = new Array)
        }, e.prototype._clearChuhaList = function () {
            null != this._chuha_ships && this._chuha_ships.length > 0 && (this._chuha_ships = new Array)
        }, e.prototype._log = function (t, e) {
        }, e
    }(r.TaskBase);
    e.PhaseDamageCutin = u
}