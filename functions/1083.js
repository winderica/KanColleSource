const function1083 = function (t, e, i) {
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
        s = i(171),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._view = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = s.AlbumConst.BGM_ID_FOR_SHIP;
                o.default.sound.bgm.play(t), this._startScene()
            }, e.prototype._startScene = function () {
                this._view.activate(), this._endTask()
            }, e.prototype._endTask = function () {
                this._view = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskSceneInitialize = a
}