/*
 * the function called by `498.js`
 * map
 */
const function502 = function (t, e, i) {
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
    var o = i(0),
        r = i(17),
        s = i(7),
        a = i(265),
        _ = function () {
            function t(t) {
                this._mst_id = 0, this._o = t
            }

            // 海域ID
            Object.defineProperty(t.prototype, "mst_id", {
                get: function () {
                    return null != this._o ? s.ObjUtil.getNumber(this._o, "api_id") : this._mst_id
                }, enumerable: !0, configurable: !0
            });
            // 海域カテゴリID
            Object.defineProperty(t.prototype, "area_id", {
                get: function () {
                    var t = this._mst;
                    return null == t ? 0 : t.area_id
                }, enumerable: !0, configurable: !0
            });
            // 海域カテゴリ内番号
            Object.defineProperty(t.prototype, "map_no", {
                get: function () {
                    var t = this._mst;
                    return null == t ? 0 : t.map_no
                }, enumerable: !0, configurable: !0
            });
            // 海域名
            Object.defineProperty(t.prototype, "name", {
                get: function () {
                    var t = this._mst;
                    return null == t ? "" : t.name
                }, enumerable: !0, configurable: !0
            });
            // 作戦名
            Object.defineProperty(t.prototype, "operation_name", {
                get: function () {
                    var t = this._mst;
                    return null == t ? "" : t.operation_name
                }, enumerable: !0, configurable: !0
            });
            // 作戦情報
            Object.defineProperty(t.prototype, "operation_detail", {
                get: function () {
                    var t = this._mst;
                    return null == t ? "" : t.operation_detail
                }, enumerable: !0, configurable: !0
            });
            // 獲得アイテム
            Object.defineProperty(t.prototype, "item_ids", {
                get: function () {
                    var t = this._mst;
                    return null == t ? [] : t.item_ids
                }, enumerable: !0, configurable: !0
            });
            // 攻略に必要な撃破数 nullあり
            Object.defineProperty(t.prototype, "defeat_required", {
                get: function () {
                    var t = this._mst;
                    return null == t ? 0 : t.defeat_required
                }, enumerable: !0, configurable: !0
            });
            // 出撃艦隊編成フラグ
            t.prototype.getAllowedDeckType = function () {
                var t = this._mst;
                return null == t ? new a.AllowedDeckTypeModel : t.getAllowedDeckType()
            };
            // 撃破回数(未攻略海域に限り存在, イベント海域には存在せず)
            Object.defineProperty(t.prototype, "defeat_count", {
                get: function () {
                    if (null == this._o) return 0;
                    var t = s.ObjUtil.getNumber(this._o, "api_defeat_count", -1);
                    return -1 == t ? this.defeat_required : t
                }, enumerable: !0, configurable: !0
            });
            // ゲージ現在値
            Object.defineProperty(t.prototype, "gauge_now", {
                get: function () {
                    var t = this._evene_data;
                    return s.ObjUtil.getNumber(t, "api_now_maphp")
                }, enumerable: !0, configurable: !0
            });
            // ゲージ最大値
            Object.defineProperty(t.prototype, "gauge_max", {
                get: function () {
                    var t = this._evene_data;
                    return s.ObjUtil.getNumber(t, "api_max_maphp")
                }, enumerable: !0, configurable: !0
            });
            // 2=HPゲージ 3=揚陸(TP)ゲージ　2は複数ゲージ時のみ存在
            Object.defineProperty(t.prototype, "gauge_type", {
                get: function () {
                    var t = this._evene_data;
                    return null == t ? 2 : s.ObjUtil.getNumber(t, "api_gauge_type", 2)
                }, enumerable: !0, configurable: !0
            });
            // 基地航空隊出撃可能数 1以上の時のみ存在
            Object.defineProperty(t.prototype, "availableAirUnitCount", {
                get: function () {
                    return s.ObjUtil.getNumber(this._o, "api_air_base_decks")
                }, enumerable: !0, configurable: !0
            });
            // 攻略フラグ
            t.prototype.isCleared = function () {
                return 1 == s.ObjUtil.getNumber(this._o, "api_cleared")
            };
            // 開放フラグ
            t.prototype.isOpened = function () {
                return null != this._o
            };
            // 作戦難易度 0=未設定, 1=丁, 2=丙, 3=乙, 4=甲
            t.prototype.getSelectedOperationType = function () {
                var t = this._evene_data;
                return null == t ? 0 : s.ObjUtil.getNumber(t, "api_selected_rank", 0)
            };
            // 現在のゲージ段階(ゲージn本目)　1基点　おそらく複数ゲージ時のみ存在
            t.prototype.getGaugeNum = function () {
                var t = this._evene_data;
                return null == t ? 1 : s.ObjUtil.getNumber(t, "api_gauge_num", 1)
            };
            // ?
            t.prototype.hasNextStage = function () {
                var t = this._mst;
                if (null == t) return !1;
                if (t.area_id != r.EVENT_AREA_ID) return !1;
                var e = this.getGaugeNum();
                // maybe 17秋? (because E3 has 3 gauges and E4 has 2 gauges)
                return 3 == this.map_no && e < 3 || 4 == this.map_no && e < 2
            };
            t.prototype._hasGaugeType = function () {
                var t = this._evene_data;
                return null != t && 1 == t.hasOwnProperty("api_gauge_type")
            };
            Object.defineProperty(t.prototype, "_mst", {
                get: function () {
                    return o.default.model.map.getMapMst(this.mst_id)
                }, enumerable: !0, configurable: !0
            });
            // イベント海域のみ存在
            Object.defineProperty(t.prototype, "_evene_data", {
                get: function () {
                    return s.ObjUtil.getObject(this._o, "api_eventmap")
                }, enumerable: !0, configurable: !0
            });
            return t
        }();
    e.MapModel = _;
    var u = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        e.prototype.setMstID = function (t) {
            this._mst_id = t
        };
        e.prototype.changeOperation = function (t, e) {
            var i = this._evene_data;
            if (null != i) {
                if (this.getSelectedOperationType() != t) {
                    i.api_selected_rank = t;
                    i.api_max_maphp = e;
                    i.api_now_maphp = e;
                    /*
                     * 17夏E3/E6
                     * 輸送ゲージ & 戦力ゲージパターン
                     * 輸送ゲージ破壊後、難易度を変更するとゲージは輸送ゲージに戻る
                     */
                    393 == this.mst_id || 396 == this.mst_id
                        ? 2 == this.gauge_type && (i.api_gauge_type = 3)
                        /*
                         * 17春E4は戦力ゲージのみ　???
                         */
                        : 384 == this.mst_id && 1 == this._hasGaugeType() && delete i.api_gauge_type
                }
            }
        };
        return e
    }(_);
    e.MapModelEdit = u
}