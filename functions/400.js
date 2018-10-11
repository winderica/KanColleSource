const function400 = function (t, e, i) {
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
    var o = i(0), r = i(401), s = i(27), a = i(169), _ = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._layer = e, n._target = i, n
        }

        return n(e, t), e.prototype._start = function () {
            this._connectAPI()
        }, e.prototype._connectAPI = function () {
            var t = this, e = this._target.mstID, i = (o.default.view.overLayer, new r.UseItemUseAPI(e, !1, 0)),
                n = i.result;
            i.start(function () {
                1 == n.hasCaution() ? t._confirm() : (t._result = n, t._endTask())
            })
        }, e.prototype._confirm = function () {
            var t = this, e = this._target.mstID, i = this._layer, n = new a.TaskItemOverflowConfirm(i);
            n.start(function () {
                if (1 == n.result) {
                    var i = new r.UseItemUseAPI(e, !0, 0), o = i.result;
                    i.start(function () {
                        t._result = o, t._endTask()
                    })
                } else t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._layer = null, this._target = null, t.prototype._endTask.call(this)
        }, e
    }(s.TaskWithResult);
    e.TaskUseNormalItem = _
}