/*
 * the function called by `482.js`
 * Admiral info (api_port/port.api_basic)
 */
const function486 = function (t, e, i) {
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
    var o = i(17),
        r = i(7),
        s = function () {
            function t() {
                // _skinID: number; // UI mode(一式、二式 etc)
                this._skinID = 101
            }

            // 提督ID string
            Object.defineProperty(t.prototype, "member_id", {
                get: function () {
                    return this._o.api_member_id
                }, enumerable: !0, configurable: !0
            });
            // ?
            Object.defineProperty(t.prototype, "firstFlag", {
                get: function () {
                    return 1 != this._o.api_firstflag
                }, enumerable: !0, configurable: !0
            });
            // 提督名
            Object.defineProperty(t.prototype, "nickName", {
                get: function () {
                    return r.ObjUtil.getString(this._o, "api_nickname")
                }, enumerable: !0, configurable: !0
            });
            // 艦隊司令部Lv.
            Object.defineProperty(t.prototype, "level", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_level")
                }, enumerable: !0, configurable: !0
            });
            // 階級  1から 元帥, 大将, 中将, 少将, 大佐, 中佐, 新米中佐, 少佐, 中堅少佐, 新米少佐
            Object.defineProperty(t.prototype, "rank", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_rank")
                }, enumerable: !0, configurable: !0
            });
            // convert to rank name
            Object.defineProperty(t.prototype, "rankName", {
                get: function () {
                    var t = o.RANK_NAME, e = this.rank;
                    return e > 0 && e < t.length ? t[e] : t[0]
                }, enumerable: !0, configurable: !0
            });
            // 母港BGM
            Object.defineProperty(t.prototype, "port_bgm_id", {
                get: function () {
                    return this._port_bgm_id
                }, enumerable: !0, configurable: !0
            });
            // 甲種勲章保有数
            Object.defineProperty(t.prototype, "medal_num", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_medals")
                }, enumerable: !0, configurable: !0
            });
            // 最大保有可能艦娘数
            Object.defineProperty(t.prototype, "shipMax", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_max_chara")
                }, enumerable: !0, configurable: !0
            });
            // 最大保有可能装備数
            Object.defineProperty(t.prototype, "slotMax", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_max_slotitem") + 3
                }, enumerable: !0, configurable: !0
            });
            // チュートリアル進捗
            t.prototype.getTutorialProgress = function () {
                return r.ObjUtil.getNumber(this._o, "api_tutorial_progress")
            };
            // 家具
            t.prototype.getPortFurnitureMstID = function (t) {
                return this._o.api_furniture[t]
            };
            // 同時受領可能任務数
            t.prototype.getDutyExecutableCount = function () {
                return this._duty_executable_count
            };
            // 提督コメント
            t.prototype.getComment = function () {
                return r.ObjUtil.getString(this._o, "api_comment")
            };
            // 大型艦建造可否
            t.prototype.isLargeBuild = function () {
                return 1 == r.ObjUtil.getNumber(this._o, "api_large_dock")
            };
            // 遠征臨時補給可否
            t.prototype.getExtraSupplyExpedition = function () {
                return null != this._extra_supply && (!(this._extra_supply.length < 1) && 1 == this._extra_supply[0])
            };
            // 出撃臨時補給可否
            t.prototype.getExtraSupplySortie = function () {
                return null != this._extra_supply && (!(this._extra_supply.length < 2) && 1 == this._extra_supply[1])
            };
            // array of ship type flags, `true` is selected(show ships of this type), length is 8
            t.prototype.getFilterStatusOrganizeList = function () {
                return this._filter_status_olist
            };
            // is ship type shown in Japanese
            t.prototype.isJapaneseOrganizeList = function () {
                return this._japanese_olist
            };
            // ?
            t.prototype.getDestroyShipSlotType = function () {
                return this._destroy_ship_slot_type
            };
            // get UI id
            t.prototype.getUISkinID = function () {
                return this._skinID
            };
            // ギミック解除
            t.prototype.getMFlag2 = function () {
                return null != this._event_data && (0 != this._event_data.hasOwnProperty("api_m_flag2") && 1 == this._event_data.api_m_flag2)
            };
            return t
        }();
    e.BasicModel = s;
    // class a extends s
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        n(e, t);
        // set user data
        e.prototype.setUserData = function (t) {
            this._o = t
        };
        // update tutorial progress
        e.prototype.updateTutorialProgress = function (t) {
            null != this._o && (this._o.api_tutorial_progress = t)
        };
        // update furniture
        e.prototype.updatePortFurnitureMstID = function (t, e) {
            null != this._o && (this._o.api_furniture[t] = e)
        };
        // set BGM
        e.prototype.setPortBGMID = function (t) {
            this._port_bgm_id = t
        };
        // set 同時受領可能任務数
        e.prototype.setDutyExcutableCount = function (t) {
            this._duty_executable_count = t
        };
        // get furniture coins
        e.prototype.getCoinCount = function () {
            // 家具コイン数
            return r.ObjUtil.getNumber(this._o, "api_fcoin")
        };
        // set furniture coins
        e.prototype.setCoinCount = function (t) {
            null != this._o && (this._o.api_fcoin = t)
        };
        // set array of 臨時補給可否, length is 2
        e.prototype.setExtraSupplyFlag = function (t) {
            this._extra_supply = t
        };
        // set status of selection bar in `ship selecting(艦船選択)`
        e.prototype.updateOrganizeListSetting = function (t, e) {
            // array of ship type flags, `true` is selected(show ships of this type), length is 8
            this._filter_status_olist = t;
            // is ship type shown in Japanese
            this._japanese_olist = e
        };
        // ?
        e.prototype.setDestroyShipSlotType = function (t) {
            this._destroy_ship_slot_type = t
        };
        // set UI
        e.prototype.setUISkinID = function (t) {
            this._skinID = t
        };
        // set event data
        e.prototype.setEventData = function (t) {
            this._event_data = t
        };
        return  e
    }(s);
    e.BasicModelEdit = a
}