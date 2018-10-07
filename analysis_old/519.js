/*
 * the function called by `517.js`
 * equipments (api_start2.api_mst_slotitem)
 */
const function519 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(45),
        o = i(7),
        r = function () {
            function t(t) {
                this._o = t
            }

            // 装備ID
            Object.defineProperty(t.prototype, "mstID", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_id")
                }, enumerable: !0, configurable: !0
            });
            // 装備名
            Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_name")
                }, enumerable: !0, configurable: !0
            });
            // 装備タイプ (see 74EO's `apilist.txt`)
            Object.defineProperty(t.prototype, "cardType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    // [1]：図鑑表示
                    return null == t || t.length < 4 ? -1 : t[1]
                }, enumerable: !0, configurable: !0
            });
            Object.defineProperty(t.prototype, "equipType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    // [2]：カテゴリ
                    return null == t || t.length < 4 ? -1 : t[2]
                }, enumerable: !0, configurable: !0
            });
            Object.defineProperty(t.prototype, "equipTypeSp", {
                get: function () {
                    /*
                     * 装備ID(装備名)                    APIのカテゴリ    実際のカテゴリ
                     * 128(試製51cm連装砲)               3(大口径主砲)    38(大口径主砲(II))
                     * 142(15m二重測距儀＋21号電探改二)    13(大型電探)     93(大型電探(II))
                     * 151(試製景雲(艦偵型))              9(艦上偵察機)    94(艦上偵察機(II))
                     * 281(51cm連装砲)                  3(大口径主砲)    38(大口径主砲(II))
                     */
                    return 128 == this.mstID ? 38 : 142 == this.mstID ? 93 : 151 == this.mstID ? 94 : 281 == this.mstID ? 38 : this.equipType
                }, enumerable: !0, configurable: !0
            });
            Object.defineProperty(t.prototype, "iconType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    // [3]：アイコンID
                    return null == t || t.length < 4 ? -1 : t[3]
                }, enumerable: !0, configurable: !0
            });
            Object.defineProperty(t.prototype, "planeIconType", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_type");
                    // [4]: 航空機カテゴリ
                    return null == t || t.length < 5 ? -1 : t[4]
                }, enumerable: !0, configurable: !0
            });
            // 射程
            Object.defineProperty(t.prototype, "range", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_leng")
                }, enumerable: !0, configurable: !0
            });
            // 火力
            Object.defineProperty(t.prototype, "karyoku", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_houg")
                }, enumerable: !0, configurable: !0
            });
            // 雷装
            Object.defineProperty(t.prototype, "raisou", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_raig")
                }, enumerable: !0, configurable: !0
            });
            // 対空
            Object.defineProperty(t.prototype, "taiku", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_tyku")
                }, enumerable: !0, configurable: !0
            });
            // 対潜
            Object.defineProperty(t.prototype, "taisen", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_tais")
                }, enumerable: !0, configurable: !0
            });
            // 爆装
            Object.defineProperty(t.prototype, "bakusou", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_baku")
                }, enumerable: !0, configurable: !0
            });
            // 命中 または 対爆(局地戦闘機の場合)
            Object.defineProperty(t.prototype, "meichu", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_houm")
                }, enumerable: !0, configurable: !0
            });
            // 回避 または 迎撃(局地戦闘機の場合)
            Object.defineProperty(t.prototype, "kaihi", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_houk")
                }, enumerable: !0, configurable: !0
            });
            // 索敵
            Object.defineProperty(t.prototype, "sakuteki", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_saku")
                }, enumerable: !0, configurable: !0
            });
            // 装甲
            Object.defineProperty(t.prototype, "soukou", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_souk")
                }, enumerable: !0, configurable: !0
            });
            // レアリティ
            Object.defineProperty(t.prototype, "rarity", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_rare", 0)
                }, enumerable: !0, configurable: !0
            });
            // グラフィックバージョン? 2以上のもののみ存在
            Object.defineProperty(t.prototype, "version", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_version", "1")
                }, enumerable: !0, configurable: !0
            });
            // 航空機の航続距離　航空機でない装備には存在しない
            Object.defineProperty(t.prototype, "distance", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_distance")
                }, enumerable: !0, configurable: !0
            });
            // 航空機のコスト　航空機でない装備には存在しない
            Object.defineProperty(t.prototype, "cost", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_cost")
                }, enumerable: !0, configurable: !0
            });
            // is plane
            t.prototype.isPlane = function () {
                return -1 != n.PlaneConst.PLANE.indexOf(this.cardType)
            };
            // 廃棄資材
            t.prototype.getMaterialsFromBroken = function () {
                var t = o.ObjUtil.getNumArray(this._o, "api_broken");
                return { fuel: t[0], ammo: t[1], steel: t[2], baux: t[3] }
            };
            return t
        }();
    e.SlotitemMstModel = r
}