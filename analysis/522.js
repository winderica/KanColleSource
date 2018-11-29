/*
 * called by `521.js`
 * remodel info (api_start2.api_mst_shipupgrade)
 */
const function522 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t(t) {
            this._o = t
        }

        // 改造レベル
        Object.defineProperty(t.prototype, "required_level", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_upgrade_level")
            }, enumerable: !0, configurable: !0
        });
        // 改造前の艦船ID　0=なし
        Object.defineProperty(t.prototype, "mst_id_before", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_current_ship_id")
            }, enumerable: !0, configurable: !0
        });
        // 改造後の艦船ID
        Object.defineProperty(t.prototype, "mst_id_after", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // 改装設計図　所要枚数
        Object.defineProperty(t.prototype, "blueprint", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_drawing_count")
            }, enumerable: !0, configurable: !0
        });
        // 試製甲板カタパルト　所要個数
        Object.defineProperty(t.prototype, "catapult", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_catapult_count")
            }, enumerable: !0, configurable: !0
        });
        // 戦闘詳報　所要枚数
        Object.defineProperty(t.prototype, "battlereport", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_report_count")
            }, enumerable: !0, configurable: !0
        });
        // 新型砲熕兵装資材(しんがたほうこうへいそうしざい)
        Object.defineProperty(t.prototype, "newkohohesosizai", {
            get: function () {
                // 武蔵改 to 武蔵改二
                return 546 == this.mst_id_after ? 3 : 0
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.ShipUpgradeModel = o
}