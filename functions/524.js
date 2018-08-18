const function524 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(269), r = function () {
        function t() {
            this._now = 0
        }

        return Object.defineProperty(t.prototype, "now", {
            get: function () {
                return null == this._task ? this._now : this._task.after
            }, enumerable: !0, configurable: !0
        }), t.prototype.isChangingNow = function () {
            return null != this._task
        }, t.prototype.change = function (t, e) {
            var i = this;
            return void 0 === e && (e = null), 1 != this.isChangingNow() && (this._now != t && (this._task = new o.TaskSceneChange(this._now, t, e), this._task.start(function () {
                i._changeComplete()
            }), !0))
        }, t.prototype._changeComplete = function () {
            this._now = this._task.after, this._task = null, n.default.view.getNowScene().emit("showed")
        }, t
    }();
    e.SceneManager = r
}