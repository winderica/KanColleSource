const function690 = function (t, e, i) {
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
            var o = t.call(this) || this;
            return o._url = "api_req_member/updatedeckname", o.api_deck_id = e, o.api_name = i, o.api_name_id = n, o
        }

        return n(e, t), e.prototype._connect = function () {
            this._post_data.api_deck_id = this.api_deck_id, this._post_data.api_name = this.api_name, this._post_data.api_name_id = this.api_name_id, t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            o.default.model.deck.get(this.api_deck_id).updateName(this.api_name, this.api_name_id), t.prototype._completedEnd.call(this)
        }, e
    }(r.APIBase);
    e.UpdateDeckNameAPI = s
}