const function935 = function (t, e, i) {
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
                return o._url = "api_req_air_corps/change_name", o._area_id = e, o._airunit_id = i, o._changed_name = n, o
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_area_id = this._area_id, this._post_data.api_base_id = this._airunit_id, this._post_data.api_name = this._changed_name, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.AirUnitChangeNameAPI = r
}