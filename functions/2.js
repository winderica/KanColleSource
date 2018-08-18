const function2 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = function () {
        function t() {
        }

        return t.prototype.start = function (t, e) {
            this._cb = t, this._cb_failed = e, this._start()
        }, t.prototype._endTask = function (t) {
            void 0 === t && (t = !1), 0 == t ? this._completedEnd() : this._failedEnd()
        }, t.prototype._completedEnd = function () {
            if (null != this._cb) {
                var t = this._cb;
                this._cb = null, this._cb_failed = null, t()
            }
        }, t.prototype._failedEnd = function () {
            var t = null;
            null != this._cb_failed ? t = this._cb_failed : null != this._cb && (t = this._cb), this._cb = null, this._cb_failed = null, null != t && t()
        }, t
    }();
    e.TaskBase = n
}