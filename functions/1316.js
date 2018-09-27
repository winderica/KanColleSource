const function1316 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(17), a = i(173), _ = i(89), u = i(1317), l = i(1318), c = i(1319), h = i(1362),
        p = i(1398), d = i(1399), f = i(1400), y = i(1401), v = i(1402), g = i(1403), m = (i(1404), function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._log = null, i._scene = e, i
            }

            return n(e, t), e.prototype._start = function () {
                var t = this._scene.data.getFirstRecord();
                "day" == t.phase ? this._combatDay(t) : this._combatNight(t)
            }, e.prototype._combatDay = function (t) {
                var e, i = this, n = this._scene.data.model.deck_f, o = this._scene.data.model.deck_e;
                0 == n.isCombined() ? e = 1 == o.isCombined() ? new p.PhaseDay_06vs12(this._scene, t, !1) : new c.PhaseDay(this._scene, t, !1) : e = this._createDayPhaseCombinedDeck(t);
                e.start(function () {
                    i._scene.shutter2.once("closed", function () {
                        i._judgement(t)
                    }), i._scene.shutter2.close()
                })
            }, e.prototype._createDayPhaseCombinedDeck = function (t) {
                var e = this._scene.data.model.deck_f, i = this._scene.data.model.deck_e, n = i.isCombined();
                return 2 == e.type ? 0 == n ? new v.PhaseDay_Suijo(this._scene, t, !1) : new y.PhaseDay_Suijo_vs12(this._scene, t, !1) : 0 == n ? new f.PhaseDay_Kido(this._scene, t, !1) : new d.PhaseDay_Kido_vs12(this._scene, t, !1)
            }, e.prototype._judgement = function (t) {
                var e = this;
                if (t.raw.isNightBattle()) {
                    var i = new g.TaskGoNightBattleSelect(this._scene);
                    i.start(function () {
                        0 == i.result ? (1 == o.default.sound.bgm.playing && o.default.sound.bgm.fadeOut(500), e._endTask()) : e._dayToNight()
                    })
                } else this._endTask()
            }, e.prototype._dayToNight = function () {
                var t, e = this;
                t = 1 == this._scene.data.model.isPractice() ? new l.APIPracticeDayToNight(this._scene.data) : new u.APIBattleDayToNight(this._scene.data), t.start(function () {
                    var t = 0;
                    if (1 == e._scene.data.model.isPractice()) t = 2; else {
                        var i = e._scene.data.model.map_info.area_id, n = e._scene.data.model.map_info.map_no,
                            r = e._scene.data.model.map_info.isBoss();
                        t = o.default.model.mst_bgm.getCombatBGM(i, n, !0, r)
                    }
                    o.default.sound.bgm.playBattleBGM(t), e._loadResource()
                })
            }, e.prototype._loadResource = function () {
                var t = this, e = new s.UIImageLoader("battle");
                e.add("battle_night.json"), e.add("battle_telop_sp.json"), e.load(function () {
                    var e = o.default.settings.renderer;
                    e.plugins.prepare.upload(a.BATTLE_NIGHT.getTexture(0).baseTexture, function () {
                        e.plugins.prepare.upload(_.BATTLE_TELOP_SP.getTexture(0).baseTexture, function () {
                            var e = t._scene.data.getLastRecord();
                            t._combatNight(e)
                        })
                    })
                })
            }, e.prototype._combatNight = function (t) {
                var e = this;
                new h.PhaseNight(this._scene, t, !0).start(function () {
                    e._endTask()
                })
            }, e.prototype._endTask = function () {
                this._scene = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase));
    e.TaskMain = m
}