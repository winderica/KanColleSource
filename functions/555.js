const function555 = function (t, e, i) {
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
        r = i(10),
        s = i(7),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._url = "api_start2/getData", e
            }
            return n(e, t), e.prototype._completedEnd = function () {
                o.default.model.const.setData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_const")), o.default.model.shipType.__setData__(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_stype")), o.default.model.shipType.__setEquipTypeExData__(s.ObjUtil.getNumArray(this._raw_data, "api_mst_equip_exslot")), o.default.model.ship.setMstData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_ship")), o.default.model.ship_upgrade.setData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_shipupgrade")), o.default.model.slot.setMstData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_slotitem")), o.default.model.slot.setMstEquipTypeData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_slotitem_equiptype")), o.default.model.furniture_graph.setData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_furnituregraph")), o.default.model.useItem.setMstData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_useitem")), o.default.model.expedition.setMstData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_mission")), o.default.model.map.setAreaMst(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_maparea")), o.default.model.map.setMapMst(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_mapinfo")), o.default.model.mst_bgm.setMstBGMData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_bgm")), o.default.model.mst_bgm.setMapBGMData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_mapbgm")), o.default.model.slot.setExtraEquipShipData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_equip_exslot_ship"));
                var e = o.default.model.payitem;
                e.setData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_payitem")), e.setOrders(s.ObjUtil.getObject(this._raw_data, "api_mst_item_shop")), o.default.model.equip.__initData__(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_equip_ship")), o.default.model.furniture.setMstData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_furniture")), o.default.model.ship_graph.setData(s.ObjUtil.getObjectArray(this._raw_data, "api_mst_shipgraph")), t.prototype._completedEnd.call(this)
            }, e
        }(r.APIBase);
    e.GetDataAPI = a
}