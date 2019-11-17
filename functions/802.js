const function802 = function (t, e, i) {
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
            function e(e, i, n, o, r, s) {
                var a = t.call(this) || this;
                return a._url = "api_req_kaisou/slot_deprive", a.api_unset_idx = e, a.api_set_slot_kind = i, a.api_unset_slot_kind = n, a.api_unset_ship = o, a.api_set_idx = r, a.api_set_ship = s, a
            }
            return n(e, t), e.prototype._connect = function () {
                this._post_data.api_unset_idx = this.api_unset_idx, this._post_data.api_set_slot_kind = this.api_set_slot_kind, this._post_data.api_unset_slot_kind = this.api_unset_slot_kind, this._post_data.api_unset_ship = this.api_unset_ship, this._post_data.api_set_idx = this.api_set_idx, this._post_data.api_set_ship = this.api_set_ship, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = r.ObjUtil.getObject(this._raw_data, "api_ship_data"),
                    i = r.ObjUtil.getObject(e, "api_set_ship"),
                    n = r.ObjUtil.getObject(e, "api_unset_ship"),
                    s = r.ObjUtil.getObject(this._raw_data, "api_unset_list"),
                    a = r.ObjUtil.getNumber(s, "api_type3No"),
                    _ = r.ObjUtil.getNumArray(s, "api_slot_list");
                o.default.model.ship.get(i.api_id).__update__(i), o.default.model.ship.get(n.api_id).__update__(n), o.default.model.slot.updateUnsetData(a, _), this._set_bauxite(), t.prototype._completedEnd.call(this)
            }, e.prototype._set_bauxite = function () {
                if (this._raw_data && this._raw_data.hasOwnProperty("api_bauxite")) {
                    var t = r.ObjUtil.getNumber(this._raw_data, "api_bauxite");
                    o.default.model.useItem.get(34).__setCount__(t)
                }
            }, e
        }(s.APIBase);
    e.SlotDepriveAPI = a
}