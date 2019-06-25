const function1030 = function (t, e, i) {
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
        r = i(1031),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._selected_type = e, n._view = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = new r.ChangeMatchingAPI(this._selected_type);
                e.start(function () {
                    t._view.updateMatchingState(e.res_model.isSucceed(), t._selected_type), t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.TaskChangeMatching = s
}