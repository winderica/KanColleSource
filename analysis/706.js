const function706 = function (t, e, i) {
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
        function e(e, i, n) {
            void 0 === e && (e = !1);
            var o = t.call(this) || this;
            return o._url = "api_req_member/itemuse_cond", o._debug = e, o.api_deck_id = i, o.api_use_type = n, o
        }

        return n(e, t), e.prototype._connect = function () {
            this._post_data.api_deck_id = this.api_deck_id, this._post_data.api_use_type = this.api_use_type, t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            t.prototype._completedEnd.call(this)
        }, e
    }(o.APIBase);
    e.ItemUseCondAPI = r
}