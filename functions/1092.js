const function1092 = function (t, e, i) {
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
    var o = i(11), r = i(13), s = i(394), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene_dispose_delegate = e, i
        }

        return n(e, t), e.prototype._start = function () {
            null != this._scene_dispose_delegate && this._scene_dispose_delegate(), r.UIImageLoader.clearMemoryCache("item"), s.AkashiPicture.clearCache(), this._endTask()
        }, e
    }(o.TaskBase);
    e.TaskItemSceneFinalize = a
}