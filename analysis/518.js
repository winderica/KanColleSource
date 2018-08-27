/*
 * the function called by `517.js`
 * equipments (api_start2.api_mst_slotitem_equiptype)
 */
const function518 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        // カテゴリID(装備のtype[2]に対応)
        Object.defineProperty(t.prototype, "id", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // カテゴリ名
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                return n.ObjUtil.getString(this._o, "api_name")
            }, enumerable: !0, configurable: !0
        });
        // ?
        t.prototype.needsDisplayName = function () {
            return 1 == n.ObjUtil.getNumber(this._o, "api_show_flg")
        };
        return t
    }();
    e.EquipTypeMstModel = o
}