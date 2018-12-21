const function1461 = function (t, e, i) {
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
    var o = i(10), r = function (t) {
        function e(e, i) {
            void 0 === i && (i = !1);
            var n = t.call(this) || this;
            return n._url = "api_req_practice/battle_result", n._data = e, n._debug = i, n
        }

        return n(e, t), e.prototype._connect = function () {
            t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            this._data.setData(this._raw_data), this._data = null, t.prototype._completedEnd.call(this)
        }, e
    }(o.APIBase);
    e.APIPracticeResult = r
}