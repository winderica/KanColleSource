const function1187 = function (t, e, i) {
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
        r = i(11),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._data = e, n._scene_activate_delegate = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._playBGM()
            }, e.prototype._playBGM = function () {
                o.default.sound.bgm.play(102), this._playVoice()
            }, e.prototype._playVoice = function () {
                1 == o.default.option.voice_duty && (1 == this._data.hasComplete() ? o.default.sound.voice.playAtRandom("9999", [401, 402, 403, 404, 405], [20, 20, 20, 20, 20]) : o.default.sound.voice.playAtRandom("9999", [406, 407], [50, 50])), this._startScene()
            }, e.prototype._startScene = function () {
                null != this._scene_activate_delegate && this._scene_activate_delegate(), this._endTask()
            }, e.prototype._endTask = function () {
                this._data = null, this._scene_activate_delegate = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskDutySceneInitialize = s
}