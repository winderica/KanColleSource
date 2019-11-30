const function733 = function (t, e, i) {
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
    var o = i(9),
        r = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._url = "api_req_member/set_oss_condition", n._filter_status = e, n._japanese = i, n
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_language_type = this._japanese ? 0 : 1;
                for (var e = 0; e < this._filter_status.length; e++) this._post_data["api_oss_items[" + e + "]"] = this._filter_status[e] ? 1 : 0;
                t.prototype._connect.call(this)
            }, e
        }(o.APIBase);
    e.UpdateListStatusAPI = r
}