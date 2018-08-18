const function578 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(13), o = function () {
        function t() {
        }

        return Object.defineProperty(t.prototype, "expedition_id", {
            get: function () {
                return this._expedition_id
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "expedition_name", {
            get: function () {
                return n.ObjUtil.getString(this._o, "api_quest_name")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "result", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_clear_result")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "total_exp", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_get_exp")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "user_level", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_member_lv")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "ship_mem_ids", {
            get: function () {
                return this._ship_mem_ids
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "fuel", {
            get: function () {
                return n.ObjUtil.getNumArray(this._o, "api_get_material")[0]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "ammo", {
            get: function () {
                return n.ObjUtil.getNumArray(this._o, "api_get_material")[1]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "steel", {
            get: function () {
                return n.ObjUtil.getNumArray(this._o, "api_get_material")[2]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "baux", {
            get: function () {
                return n.ObjUtil.getNumArray(this._o, "api_get_material")[3]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "item1", {
            get: function () {
                return this._item1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "item2", {
            get: function () {
                return this._item2
            }, enumerable: !0, configurable: !0
        }), t.prototype.setData = function (t, e) {
            this._o = t, 0 == this._o.hasOwnProperty("api_get_material") ? this._o.api_get_material = [0, 0, 0, 0] : -1 == this._o.api_get_material && (this._o.api_get_material = [0, 0, 0, 0]);
            var i = n.ObjUtil.getNumArray(this._o, "api_ship_id");
            i.length > 0 && -1 == i[0] && (i = i.slice(1)), this._ship_mem_ids = i;
            var o = this._getItemFlags();
            this._item1 = this._createItemModel(o[0], n.ObjUtil.getObject(this._o, "api_get_item1")), this._item2 = this._createItemModel(o[1], n.ObjUtil.getObject(this._o, "api_get_item2"))
        }, t.prototype._getItemFlags = function () {
            var t = n.ObjUtil.getNumArray(this._o, "api_useitem_flag");
            for (null == t && (t = []); t.length < 2;) t.push(0);
            return t
        }, t.prototype._createItemModel = function (t, e) {
            if (null == e) return null;
            var i = n.ObjUtil.getNumber(e, "api_useitem_id"), o = n.ObjUtil.getNumber(e, "api_useitem_count"),
                s = n.ObjUtil.getString(e, "api_useitem_name");
            return o > 0 ? new r(t, i, o, s) : void 0
        }, t
    }();
    e.ExpeditionResultModel = o;
    var r = function () {
        function t(t, e, i, n) {
            this._mstID = 0, this._name = "", 1 == t ? (this._mstID = 1, this._name = "\u9ad8\u901f\u4fee\u5fa9\u6750") : 2 == t ? (this._mstID = 2, this._name = "\u9ad8\u901f\u5efa\u9020\u6750") : 3 == t ? (this._mstID = 3, this._name = "\u958b\u767a\u8cc7\u6750") : 5 == t ? (this._mstID = 44, this._name = "\u5bb6\u5177\u30b3\u30a4\u30f3") : 4 == t && (this._mstID = e, this._name = n), this._count = i
        }

        return Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return this._mstID
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                return this._name
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "count", {
            get: function () {
                return this._count
            }, enumerable: !0, configurable: !0
        }), t
    }()
}