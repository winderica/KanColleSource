const function1044 = function (t, e, i) {
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
    var o = i(11), r = i(13), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._view = e, i
        }

        return n(e, t), e.prototype._start = function () {
            this._view = null, r.EditTextBoxUtil.setVisibility(!1), this._endTask()
        }, e
    }(o.TaskBase);
    e.PreFinalizeTask = s;
    var a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene_dispose_delegate = e, i
        }

        return n(e, t), e.prototype._start = function () {
            null != this._scene_dispose_delegate && this._scene_dispose_delegate(), this._view = null, this._endTask()
        }, e
    }(o.TaskBase);
    e.FinalizeTask = a
}