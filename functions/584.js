const function584 = function (t, e, i) {
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
    var o = i(0), r = i(11), s = function (t) {
        function e(e, i, n) {
            void 0 === n && (n = !1);
            var o = t.call(this) || this;
            return o._url = "api_req_mission/result", o._deck_id = e, o._result_model = i, o._debug = n, o
        }

        return n(e, t), e.prototype._connect = function () {
            this._post_data.api_deck_id = this._deck_id, t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            var e = o.default.model.deck.get(this._deck_id), i = e.expedition.expedition_id;
            this._result_model.setData(this._raw_data, i), t.prototype._completedEnd.call(this)
        }, e
    }(r.APIBase);
    e.ExpeditionResultAPI = s
}