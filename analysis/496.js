/*
 * the function called by `495.js`
 * expedition (api_start2.api_mst_mission)
 */
const function496 = function (t, e, i) {
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
    var o = i(7), r = function () {
        function t(t) {
            this._o = t, this._state = -1
        }

        // `state`: 達成状況　0=未出撃, 1=未達成, 2=達成済み
        Object.defineProperty(t.prototype, "state", {
            get: function () {
                return this._state
            }, enumerable: !0, configurable: !0
        });
        // api_id: 遠征ID
        Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        });
        // api_maparea_id: 海域カテゴリID
        Object.defineProperty(t.prototype, "areaID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_maparea_id")
            }, enumerable: !0, configurable: !0
        });
        // api_disp_no: 表示上の遠征ID ("A1"のような)
        Object.defineProperty(t.prototype, "dispID", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_disp_no")
            }, enumerable: !0, configurable: !0
        });
        // api_name: 遠征名
        Object.defineProperty(t.prototype, "name", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_name")
            }, enumerable: !0, configurable: !0
        });
        // api_difficulty: 難易度
        Object.defineProperty(t.prototype, "difficulty", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_difficulty")
            }, enumerable: !0, configurable: !0
        });
        // api_details: 遠征詳細
        Object.defineProperty(t.prototype, "detail", {
            get: function () {
                return o.ObjUtil.getString(this._o, "api_details")
            }, enumerable: !0, configurable: !0
        });
        // api_time: 時間　分単位
        Object.defineProperty(t.prototype, "time", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_time")
            }, enumerable: !0, configurable: !0
        });
        // api_use_fuel: 燃料消費割合
        Object.defineProperty(t.prototype, "fuel", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_use_fuel")
            }, enumerable: !0, configurable: !0
        });
        // api_use_bull: 弾薬消費割合
        Object.defineProperty(t.prototype, "ammo", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_use_bull")
            }, enumerable: !0, configurable: !0
        });
        // api_win_item1: 獲得アイテム1　[0]=アイテムID, [1]=入手個数
        Object.defineProperty(t.prototype, "item1_id", {
            get: function () {
                var t = o.ObjUtil.getNumArray(this._o, "api_win_item1");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "item1_count", {
            get: function () {
                var t = o.ObjUtil.getNumArray(this._o, "api_win_item1");
                return null != t && t.length > 1 ? t[1] : 0
            }, enumerable: !0, configurable: !0
        });
        // api_win_item2: 獲得アイテム2
        Object.defineProperty(t.prototype, "item2_id", {
            get: function () {
                var t = o.ObjUtil.getNumArray(this._o, "api_win_item2");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "item2_count", {
            get: function () {
                var t = o.ObjUtil.getNumArray(this._o, "api_win_item2");
                return null != t && t.length > 1 ? t[1] : 0
            }, enumerable: !0, configurable: !0
        });
        // api_deck_num: 必要隻数
        Object.defineProperty(t.prototype, "required_num", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_deck_num")
            }, enumerable: !0, configurable: !0
        });
        // api_return_flag: 遠征中止可否
        t.prototype.isCancelable = function () {
            return 1 == o.ObjUtil.getNumber(this._o, "api_return_flag")
        };
        // is 支援艦隊
        t.prototype.isSupport = function () {
            return [33, 34, 301, 302].indexOf(this.mstID) >= 0
        };
        return t
    }();
    e.ExpeditionModel = r;
    // class s extends r
    var s = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return n(e, t), e.prototype.__setState__ = function (t) {
            this._state = t
        }, e
    }(r);
    e.ExpeditionModelEdit = s
}