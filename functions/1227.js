const function1227 = function (t, e, i) {
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
                void 0 === n && (n = -1);
                var o = t.call(this) || this;
                return o._url = "api_req_map/next", o._model = e, o._repair_item = i, o._next_cell_no = n, o
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_recovery_type = this._repair_item, this._next_cell_no >= 0 && (this._post_data.api_cell_id = this._next_cell_no), t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._model.__add__(this._raw_data), t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.APIMapNext = r
}