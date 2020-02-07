const function664 = function (t, e, i) {
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
        s = i(6),
        a = i(665),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._pre_scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._playVoice()
            }, e.prototype._playVoice = function () {
                var t = o.default.model.deck.get(1),
                    e = t.getShipModel(0),
                    i = e.mstID.toString();
                if (33 == this._pre_scene || 32 == this._pre_scene) o.default.model.basic.getMFlag2() ? (s.SE.play("215"), o.default.sound.voice.play(i, 26)) : o.default.sound.voice.play(i, 7);
                else if (50 == o.default.model.basic.getTutorialProgress()) o.default.sound.voice.play(i, 26);
                else if (0 == this._pre_scene) o.default.sound.voice.play(i, 1);
                else {
                    var n = Math.random();
                    n <= .4 && (n <= .05 ? o.default.sound.voice.play(i, 4) : n <= .2 ? o.default.sound.voice.play(i, 3) : o.default.sound.voice.play(i, 2))
                }
                this._playBGM()
            }, e.prototype._playBGM = function () {
                var t = o.default.model.basic.port_bgm_id;
                o.default.sound.bgm.play(t), (new a.TaskCombinedAlert).start(), this._endTask()
            }, e
        }(r.TaskBase);
    e.InitializeTask = _
}