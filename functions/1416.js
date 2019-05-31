const function1416 = function (t, e, i) {
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
        r = i(2),
        s = i(178),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._record = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "scene", {
                get: function () {
                    return this._scene
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "record", {
                get: function () {
                    return this._record
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                this._scene.view.layer_title.hide(), this._endTouchPlane()
            }, e.prototype._endTouchPlane = function () {
                var t = this._scene.view.raderLayer;
                t.rader_f.touch_plane.hide(), t.rader_e.touch_plane.hide(), this._waitGaugeExplodeAnimation()
            }, e.prototype._waitGaugeExplodeAnimation = function () {
                var t = this;
                1 == this._scene.view.layer_gauge.isAnimation() ? createjs.Tween.get(null).wait(500).call(function () {
                    t._waitGaugeExplodeAnimation()
                }) : this._fadeOutBGM()
            }, e.prototype._fadeOutBGM = function () {
                var t = this,
                    e = this._scene.data.model.map_info.area_id,
                    i = this._scene.data.model.map_info.map_no,
                    n = this._scene.data.model.map_info.isBoss();
                if (1 == o.default.model.mst_bgm.isSameBGM(e, i, n) && 1 == this._record.raw.hasDayBattle()) return void this._playBossLastGasp();
                1 == o.default.sound.bgm.playing ? (o.default.sound.bgm.fadeOut(1200), createjs.Tween.get(this).wait(1200).call(function () {
                    t._playBossLastGasp()
                })) : this._playBossLastGasp()
            }, e.prototype._playBossLastGasp = function () {
                if (o.default.option.vol_voice <= 0) return void this._wait();
                var t = this._scene.data.model.deck_e.ships[0];
                if (0 == (0 == t.damageType && t.hp_init > 0)) return void this._wait();
                var e = this._scene.view.layer_gauge.isExploded(),
                    i = s.EnemyVoiceConst.getLastGaspVoiceID(this._scene, t);
                return e && i > 0 ? void this._playBossVoice(i) : (i = s.EnemyVoiceConst.getSourGrapesVoiceID(this._scene, t)) > 0 ? void this._playBossVoice(i) : void this._wait()
            }, e.prototype._playBossVoice = function (t) {
                var e = this;
                o.default.sound.voice.play("9998", t, function () {
                    e._wait()
                })
            }, e.prototype._wait = function () {
                var t = this;
                createjs.Tween.get(this).wait(1e3).call(function () {
                    t._shutter_close()
                })
            }, e.prototype._shutter_close = function () {
                var t = this;
                this.scene.shutter2.close(), this.scene.shutter2.once("closed", function () {
                    t._endTask()
                })
            }, e
        }(r.TaskBase);
    e.PhaseEnding = a
}