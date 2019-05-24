const function403 = function (t, e, i) {
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
    var o = i(2),
        r = i(8),
        s = i(1135),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._result = !1, n._onSelected = function (t) {
                    n._result = t, n._dialog.dispose(), n._layer.removeChild(n._dialog), n._layer.removeChild(n._click_guard), n._endTask()
                }, n._layer = e, n._texture = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                this._click_guard = new r.AreaBox(0), this._layer.addChild(this._click_guard), this._dialog = new s.RewardSelectConfirm(this._onSelected), this._dialog.position.set(465, 495), this._dialog.initialize(this._texture), this._layer.addChild(this._dialog), this._dialog.activate()
            }, e.prototype._endTask = function () {
                this._layer = null, this._texture = null, this._click_guard = null, this._dialog = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskRewardSelectConfirm = a
}