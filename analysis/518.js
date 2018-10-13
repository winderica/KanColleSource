/*
 * called by `517.js`
 * ship data (api_start2.api_mst_ship)
 */
const function518 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(7), r = function () {
        function t(t) {
            this._o = t
        }

        // 艦娘固有ID
        Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // 艦娘名
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_name")
            }, enumerable: !0, configurable: !0
        });
        // 艦娘名読み
        Object.defineProperty(t.prototype, "yomi", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_yomi")
            }, enumerable: !0, configurable: !0
        });
        // ソートid (api_sort_id, new in HTML5 version)
        Object.defineProperty(t.prototype, "sortNo", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_sort_id")
            }, enumerable: !0, configurable: !0
        });
        // スロット数
        Object.defineProperty(t.prototype, "slotNum", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_slot_num")
            }, enumerable: !0, configurable: !0
        });
        // 艦種ID
        Object.defineProperty(t.prototype, "shipTypeID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_stype", -1)
            }, enumerable: !0, configurable: !0
        });
        // 艦種名
        Object.defineProperty(t.prototype, "shipTypeName", {
            get: function () {
                if (553 == this.mstID) return "\u6539\u88c5\u822a\u7a7a\u6226\u8266";
                if (574 == this.mstID) return "\u8efd(\u822a\u7a7a)\u5de1\u6d0b\u8266";
                var t = n.default.model.shipType.get(this.shipTypeID);
                return null == t ? "" : t.name
            }, enumerable: !0, configurable: !0
        });
        // 消費燃料
        Object.defineProperty(t.prototype, "fuelMax", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_fuel_max")
            }, enumerable: !0, configurable: !0
        });
        // 消費弾薬
        Object.defineProperty(t.prototype, "ammoMax", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_bull_max")
            }, enumerable: !0, configurable: !0
        });
        // 艦載機搭載数
        Object.defineProperty(t.prototype, "tousai", {
            get: function () {
                var t = o.ObjUtil.getNumArray(this._o, "api_maxeq");
                return null == t ? 0 : t.reduce(function (t, e, i, n) {
                    return t + e
                })
            }, enumerable: !0, configurable: !0
        });
        // 速力　0=基地, 5=低速, 10=高速, 15=高速+, 20=最速
        Object.defineProperty(t.prototype, "speed", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_soku")
            }, enumerable: !0, configurable: !0
        });
        // 改装Lv
        Object.defineProperty(t.prototype, "remodeling_level", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_afterlv")
            }, enumerable: !0, configurable: !0
        });
        // 改装弾薬
        Object.defineProperty(t.prototype, "remodeling_ammo", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_afterbull")
            }, enumerable: !0, configurable: !0
        });
        // 改装鋼材
        Object.defineProperty(t.prototype, "remodeling_steel", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_afterfuel")
            }, enumerable: !0, configurable: !0
        });
        // 改装後ID
        Object.defineProperty(t.prototype, "remodeled_mst_id", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_aftershipid")
            }, enumerable: !0, configurable: !0
        });
        // 放置ボイス
        Object.defineProperty(t.prototype, "availableBeLeftVoice", {
            get: function () {
                return (1 & this._voiceFlag) > 0
            }, enumerable: !0, configurable: !0
        });
        // 特殊放置ボイス
        Object.defineProperty(t.prototype, "availableBeLeftVoices", {
            get: function () {
                return (4 & this._voiceFlag) > 0
            }, enumerable: !0, configurable: !0
        });
        // 時報
        Object.defineProperty(t.prototype, "availableTimeSignalVoice", {
            get: function () {
                return (2 & this._voiceFlag) > 0
            }, enumerable: !0, configurable: !0
        });
        // ボイス設定フラグ ビットフラグ; 1=放置ボイス, 2=時報, 4=特殊放置ボイス
        Object.defineProperty(t.prototype, "_voiceFlag", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_voicef")
            }, enumerable: !0, configurable: !0
        });
        // 近代化改修強化値
        Object.defineProperty(t.prototype, "powUp", {
            get: function () {
                var t = o.ObjUtil.getNumArray(this._o, "api_powup");
                return "まるゆ" == this.yomi ? t.push(1) : t.push(0), t
            }, enumerable: !0, configurable: !0
        });
        // 火力最大値
        Object.defineProperty(t.prototype, "hougMax", {
            get: function () {
                return this._houg[1]
            }, enumerable: !0, configurable: !0
        });
        // 火力初期値
        Object.defineProperty(t.prototype, "hougMin", {
            get: function () {
                return this._houg[0]
            }, enumerable: !0, configurable: !0
        });
        // 火力 [0]=初期値, [1]=最大値
        Object.defineProperty(t.prototype, "_houg", {
            get: function () {
                return o.ObjUtil.getNumArray(this._o, "api_houg")
            }, enumerable: !0, configurable: !0
        });
        // 雷装
        Object.defineProperty(t.prototype, "raigMax", {
            get: function () {
                return this._raig[1]
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "raigMin", {
            get: function () {
                return this._raig[0]
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "_raig", {
            get: function () {
                return o.ObjUtil.getNumArray(this._o, "api_raig")
            }, enumerable: !0, configurable: !0
        });
        // 対空
        Object.defineProperty(t.prototype, "tykuMax", {
            get: function () {
                return this._tyku[1]
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "tykuMin", {
            get: function () {
                return this._tyku[0]
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "_tyku", {
            get: function () {
                return o.ObjUtil.getNumArray(this._o, "api_tyku")
            }, enumerable: !0, configurable: !0
        });
        // 装甲
        Object.defineProperty(t.prototype, "soukMax", {
            get: function () {
                return this._souk[1]
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "soukMin", {
            get: function () {
                return this._souk[0]
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "_souk", {
            get: function () {
                return o.ObjUtil.getNumArray(this._o, "api_souk")
            }, enumerable: !0, configurable: !0
        });
        // 運
        Object.defineProperty(t.prototype, "luckMax", {
            get: function () {
                return this._luck[1]
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "luckMin", {
            get: function () {
                return this._luck[0]
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "_luck", {
            get: function () {
                return o.ObjUtil.getNumArray(this._o, "api_luck")
            }, enumerable: !0, configurable: !0
        });
        // 耐久
        Object.defineProperty(t.prototype, "taikyuMin", {
            get: function () {
                return this._taikyu[0]
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "taikyuMax", {
            get: function () {
                return this._taikyu[1]
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t.prototype, "_taikyu", {
            get: function () {
                return o.ObjUtil.getNumArray(this._o, "api_taik")
            }, enumerable: !0, configurable: !0
        });
        // 対潜 [1] [0]=初期値 護衛空母にのみ存在
        Object.defineProperty(t.prototype, "taisen_base", {
            get: function () {
                var t = o.ObjUtil.getNumArray(this._o, "api_tais");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        });
        // レアリティ
        Object.defineProperty(t.prototype, "rarity", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_backs")
            }, enumerable: !0, configurable: !0
        });
        // 建造時間 分単位
        Object.defineProperty(t.prototype, "build_time", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_buildtime")
            }, enumerable: !0, configurable: !0
        });
        // 取得時台詞
        Object.defineProperty(t.prototype, "message_text", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_getmes")
            }, enumerable: !0, configurable: !0
        });
        // 解体資材
        t.prototype.getMaterialForBroken = function () {
            var t = o.ObjUtil.getNumArray(this._o, "api_broken");
            return { fuel: t[0], ammo: t[1], steel: t[2], baux: t[3] }
        };
        // 艦型ID (search `api_ctype` in 74EO's `apilist.txt`)
        t.prototype.getClassType = function () {
            return o.ObjUtil.getNumber(this._o, "api_ctype")
        };
        return t
    }();
    e.ShipMstModel = r
}