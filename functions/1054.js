const function1054 = function (t, e, i) {
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
    var o = i(0),
        r = i(9),
        s = i(7),
        a = function (t) {
            function e(e, i) {
                void 0 === i && (i = !1);
                var n = t.call(this) || this;
                return n._url = "api_req_mission/return_instruction", n._deck_id = e, n._debug = i, n
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_deck_id = this._deck_id, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = o.default.model.deck.get(this._deck_id).expedition,
                    i = s.ObjUtil.getNumArray(this._raw_data, "api_mission");
                null == i || e.__update__(i), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.ExpeditionCancelAPI = a
}