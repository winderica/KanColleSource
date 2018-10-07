/*
 * the function called by `0.js`
 * scene
 */
const function525 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(270), r = function () {
        function t() {
            this._now = 0
        }

        // current scene id
        Object.defineProperty(t.prototype, "now", {
            get: function () {
                return null == this._task ? this._now : this._task.after
            }, enumerable: !0, configurable: !0
        });
        // is changing scene
        t.prototype.isChangingNow = function () {
            return null != this._task
        };
        // change scene (from `this._now` to `t`)
        t.prototype.change = function (t, e) {
            var i = this;
            void 0 === e && (e = null);
            if (1 != this.isChangingNow()) {
                if (this._now != t) {
                    this._task = new o.TaskSceneChange(this._now, t, e);
                    this._task.start(function () {
                        i._changeComplete()
                    });
                    return true
                }
            }
            return false
        };
        // callback
        t.prototype._changeComplete = function () {
            this._now = this._task.after;
            this._task = null;
            n.default.view.getNowScene().emit("showed")
        };
        return t
    }();
    e.SceneManager = r
}