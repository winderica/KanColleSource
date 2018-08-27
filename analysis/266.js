/*
 * the function called by `517.js`
 * equipments (api_get_member/slot_item)
 */
const function266 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(7), r = function () {
        function t(t) {
            this._o = t
        }

        // 装備ID
        Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_slotitem_id")
            }, enumerable: !0, configurable: !0
        });
        // 装備固有ID
        Object.defineProperty(t.prototype, "memID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // 装備名
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? "" : t.name
            }, enumerable: !0, configurable: !0
        });
        // 改修Level
        Object.defineProperty(t.prototype, "level", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_level")
            }, enumerable: !0, configurable: !0
        });
        // ロック有無
        t.prototype.isLocked = function () {
            return 1 == o.ObjUtil.getNumber(this._o, "api_locked")
        };
        // 艦載機熟練度　1以上の時のみ存在
        Object.defineProperty(t.prototype, "skillLevel", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_alv")
            }, enumerable: !0, configurable: !0
        });
        // 装備タイプ - [1]：図鑑表示
        Object.defineProperty(t.prototype, "cardType", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.cardType
            }, enumerable: !0, configurable: !0
        });
        // 装備タイプ - [2]：カテゴリ
        Object.defineProperty(t.prototype, "equipType", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.equipType
            }, enumerable: !0, configurable: !0
        });
        // 装備タイプ - [2]：カテゴリ 転換後
        Object.defineProperty(t.prototype, "equipTypeSp", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.equipTypeSp
            }, enumerable: !0, configurable: !0
        });
        // 装備タイプ - [3]：アイコンID
        Object.defineProperty(t.prototype, "iconType", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.iconType
            }, enumerable: !0, configurable: !0
        });
        // 射程
        Object.defineProperty(t.prototype, "range", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.range
            }, enumerable: !0, configurable: !0
        });
        // 火力
        Object.defineProperty(t.prototype, "karyoku", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.karyoku
            }, enumerable: !0, configurable: !0
        });
        // 雷装
        Object.defineProperty(t.prototype, "raisou", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.raisou
            }, enumerable: !0, configurable: !0
        });
        // 対空
        Object.defineProperty(t.prototype, "taiku", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.taiku
            }, enumerable: !0, configurable: !0
        });
        // 対潜
        Object.defineProperty(t.prototype, "taisen", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.taisen
            }, enumerable: !0, configurable: !0
        });
        // 爆装
        Object.defineProperty(t.prototype, "bakusou", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.bakusou
            }, enumerable: !0, configurable: !0
        });
        // 命中 または 対爆(局地戦闘機の場合)
        Object.defineProperty(t.prototype, "meichu", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.meichu
            }, enumerable: !0, configurable: !0
        });
        // 回避 または 迎撃(局地戦闘機の場合)
        Object.defineProperty(t.prototype, "kaihi", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.kaihi
            }, enumerable: !0, configurable: !0
        });
        // 索敵
        Object.defineProperty(t.prototype, "sakuteki", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.sakuteki
            }, enumerable: !0, configurable: !0
        });
        // 装甲
        Object.defineProperty(t.prototype, "soukou", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.soukou
            }, enumerable: !0, configurable: !0
        });
        // 航空機の航続距離　航空機でない装備には存在しない
        Object.defineProperty(t.prototype, "distance", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.distance
            }, enumerable: !0, configurable: !0
        });
        // 航空機のコスト　航空機でない装備には存在しない
        Object.defineProperty(t.prototype, "cost", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.cost
            }, enumerable: !0, configurable: !0
        });
        t.prototype.__setLocked__ = function (t) {
            this._o.api_locked = t ? 1 : 0
        };
        t.prototype.__updateObject__ = function (t) {
            this._o = t
        };
        t.prototype.isPlane = function () {
            var t = n.default.model.slot.getMst(this.mstID);
            return null != t && t.isPlane()
        };
        return t
    }();
    e.SlotitemModel = r
}