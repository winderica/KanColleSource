const function416 = function (t, e, i) {
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
        r = i(412),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._url = "api_req_quest/clearitemget", n._duty_id = e, n._selected_no_list = i, n._result = new a(e), n
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._connect = function () {
                if (this._post_data.api_quest_id = this._duty_id, null != this._selected_no_list && this._selected_no_list.length > 0) {
                    this._post_data.api_select_no = this._selected_no_list[0];
                    for (var e = 1; e < this._selected_no_list.length; e++) this._post_data["api_select_no" + (e + 1)] = this._selected_no_list[e]
                }
                t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._result.initialize(this._raw_data), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.DutyEndAPI = s;
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.initialize = function (t) {
            this._o = t, this._initialize()
        }, e
    }(r.DutyEndModel)
}