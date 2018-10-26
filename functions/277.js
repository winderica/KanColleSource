const function277 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(0), r = i(18), s = i(10), a = i(7), _ = function (t) {
        function e(e) {
            void 0 === e && (e = !1);
            var i = t.call(this) || this;
            return i._url = "api_port/port", i._debug = e, i
        }

        return n(e, t), e.prototype._connect = function () {
            this._post_data.api_sort_key = 5, this._post_data.spi_sort_order = 2, this._post_data.api_port = this._createKey(o.default.model.basic.member_id), t.prototype._connect.call(this)
        }, e.prototype._completedEnd = function () {
            var e = o.default.model.basic;
            e.setUserData(a.ObjUtil.getObject(this._raw_data, "api_basic")), e.setPortBGMID(a.ObjUtil.getNumber(this._raw_data, "api_p_bgm_id")), e.setDutyExcutableCount(a.ObjUtil.getNumber(this._raw_data, "api_parallel_quest_count")), e.setDestroyShipSlotType(a.ObjUtil.getNumber(this._raw_data, "api_dest_ship_slot")), e.setEventData(a.ObjUtil.getObject(this._raw_data, "api_event_object")), o.default.model.deck.setData(a.ObjUtil.getObjectArray(this._raw_data, "api_deck_port")), o.default.model.deck.combined.__update__(a.ObjUtil.getNumber(this._raw_data, "api_combined_flag")), o.default.model.log.setData(a.ObjUtil.getObjectArray(this._raw_data, "api_log")), o.default.model.ship.setData(a.ObjUtil.getObjectArray(this._raw_data, "api_ship")), o.default.model.useItem.setMaterialData(a.ObjUtil.getObjectArray(this._raw_data, "api_material")), o.default.model.ndock.setData(a.ObjUtil.getObjectArray(this._raw_data, "api_ndock"));
            var i = o.default.model.slot, n = a.ObjUtil.getObject(this._raw_data, "api_plane_info");
            if (null != n) {
                var r = a.ObjUtil.getNumArray(n, "api_base_convert_slot");
                null != r ? i.setAirUnitRelocation(r) : i.setAirUnitRelocation(null);
                var s = a.ObjUtil.getObjectArray(n, "api_unset_slot");
                if (null != s) for (var _ = 0, u = s; _ < u.length; _++) {
                    var l = u[_], c = a.ObjUtil.getNumber(l, "api_type3No"),
                        h = a.ObjUtil.getNumArray(l, "api_slot_list");
                    i.updateUnsetData(c, h)
                }
            } else i.setAirUnitRelocation(null);
            t.prototype._completedEnd.call(this)
        }, e.prototype._getSeed = function (t) {
            return r.PORT_API_SEED[t % 10]
        }, e.prototype._createKey = function (t) {
            var e = this._getSeed(t), i = Math.floor(Date.now() / 1e3),
                n = 1e3 * (Math.floor(9 * Math.random()) + 1) + t % 1e3, o = Math.floor(8999 * Math.random()) + 1e3,
                r = Math.floor(32767 * Math.random()) + 32768, s = Math.floor(10 * Math.random()),
                a = Math.floor(10 * Math.random()), _ = Math.floor(10 * Math.random()),
                u = parseInt(t.toString().substr(0, 4)), l = (4132653 + r) * (u + 1e3) - i + (1875979 + 9 * r),
                c = l - t, h = c * e, p = n.toString() + h.toString() + o.toString();
            p = s.toString() + p;
            var d = p.substr(0, 8), f = p.substr(8);
            return p = d + a + f, d = p.substr(0, 18), f = p.substr(18), (p = d + _ + f) + r.toString()
        }, e
    }(s.APIBase);
    e.PortAPI = _
}