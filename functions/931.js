const function931 = function (t, e, i) {
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
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._url = "api_req_air_corps/set_plane", r._area_id = e, r._airunit_id = i, r._squadron_index = n, r._item_mem_id = o, r
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_area_id = this._area_id, this._post_data.api_base_id = this._airunit_id, this._post_data.api_squadron_id = this._squadron_index + 1, this._post_data.api_item_id = this._item_mem_id, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = "api_after_bauxite";
                if (1 == this._raw_data.hasOwnProperty(e)) {
                    var i = r.ObjUtil.getNumber(this._raw_data, e);
                    o.default.model.useItem.get(34).__setCount__(i), o.default.view.portMain.updateInfo()
                }
                var n = this._area_id,
                    s = this._airunit_id,
                    a = this._squadron_index,
                    _ = r.ObjUtil.getObjectArray(this._raw_data, "api_plane_info"),
                    l = r.ObjUtil.getObject(this._raw_data, "api_distance");
                o.default.model.airunit.updateData(n, s, a, _, l), t.prototype._completedEnd.call(this)
            }, e
        }(s.APIBase);
    e.AirUnitEditAPI = a
}