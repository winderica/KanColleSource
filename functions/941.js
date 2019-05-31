const function941 = function (t, e, i) {
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
        r = i(7),
        s = i(10),
        a = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._url = "api_req_air_corps/supply", o._area_id = e, o._airunit_id = i, o._squadron_ids = n, o
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_area_id = this._area_id, this._post_data.api_base_id = this._airunit_id, this._post_data.api_squadron_id = this._squadron_ids.join(","), t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = r.ObjUtil.getNumber(this._raw_data, "api_after_fuel");
                o.default.model.useItem.get(31).__setCount__(e);
                var i = r.ObjUtil.getNumber(this._raw_data, "api_after_bauxite");
                o.default.model.useItem.get(34).__setCount__(i), o.default.view.portMain.updateInfo();
                var n = r.ObjUtil.getObjectArray(this._raw_data, "api_plane_info"),
                    s = r.ObjUtil.getObject(this._raw_data, "api_distance"),
                    a = this._area_id,
                    _ = this._airunit_id;
                o.default.model.airunit.getAirUnit(a, _).updateSquadronData(n, s), t.prototype._completedEnd.call(this)
            }, e
        }(s.APIBase);
    e.AirUnitSupplyAPI = a
}