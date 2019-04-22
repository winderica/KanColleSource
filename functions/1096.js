const function1096 = function (t, e, i) {
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
            function e(e) {
                var i = t.call(this) || this;
                return i._scene_activate_delegate = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._playBGM()
            }, e.prototype._playBGM = function () {
                o.default.sound.bgm.play(102), this._startScene()
            }, e.prototype._startScene = function () {
                null != this._scene_activate_delegate && this._scene_activate_delegate(), this._endTask()
            }, e
        }(r.TaskBase);
    e.TaskItemSceneInitialize = s
}