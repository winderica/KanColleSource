const function412 = function (t, e, i) {
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
    var o = i(10),
        r = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._url = "api_get_member/questlist", o._page_no = e, o._type = i, o._data_holder = n, o
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_page_no = this._page_no, this._post_data.api_tab_id = this._type, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._data_holder.update(this._type, this._raw_data), this._data_holder = null, t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.DutyListAPI = r
}