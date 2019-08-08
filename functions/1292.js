const function1292 = function (t, e, i) {
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
    var o = i(11),
        r = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._url = "api_req_map/start_air_base", o._airunit1 = e, o._airunit2 = i, o._airunit3 = n, o
            }
            return n(e, t), e.prototype._connect = function () {
                null != this._airunit1 && this._airunit1.length > 0 && (this._post_data.api_strike_point_1 = this._airunit1.join(",")), null != this._airunit2 && this._airunit2.length > 0 && (this._post_data.api_strike_point_2 = this._airunit2.join(",")), null != this._airunit3 && this._airunit3.length > 0 && (this._post_data.api_strike_point_3 = this._airunit3.join(",")), t.prototype._connect.call(this)
            }, e
        }(o.APIBase);
    e.AirUnitGoAPI = r
}