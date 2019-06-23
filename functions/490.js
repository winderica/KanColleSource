const function490 = function (t, e, i) {
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
    var o = i(17),
        r = i(7),
        s = function () {
            function t() {
                this._skinID = 101
            }
            return Object.defineProperty(t.prototype, "member_id", {
                get: function () {
                    return this._o.api_member_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "firstFlag", {
                get: function () {
                    return 1 != this._o.api_firstflag
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nickName", {
                get: function () {
                    return r.ObjUtil.getString(this._o, "api_nickname")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "level", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_level")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rank", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_rank")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rankName", {
                get: function () {
                    var t = o.RANK_NAME,
                        e = this.rank;
                    return e > 0 && e < t.length ? t[e] : t[0]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "port_bgm_id", {
                get: function () {
                    return this._port_bgm_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "medal_num", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_medals")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "shipMax", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_max_chara")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "slotMax", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_max_slotitem") + 3
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getTutorialProgress = function () {
                return r.ObjUtil.getNumber(this._o, "api_tutorial_progress")
            }, t.prototype.getPortFurnitureMstID = function (t) {
                return this._o.api_furniture[t]
            }, t.prototype.getDutyExecutableCount = function () {
                return this._duty_executable_count
            }, t.prototype.getCFlag = function () {
                return this._c_flag
            }, t.prototype.getComment = function () {
                return r.ObjUtil.getString(this._o, "api_comment")
            }, t.prototype.isLargeBuild = function () {
                return 1 == r.ObjUtil.getNumber(this._o, "api_large_dock")
            }, t.prototype.getExtraSupplyExpedition = function () {
                return null != this._extra_supply && (!(this._extra_supply.length < 1) && 1 == this._extra_supply[0])
            }, t.prototype.getExtraSupplySortie = function () {
                return null != this._extra_supply && (!(this._extra_supply.length < 2) && 1 == this._extra_supply[1])
            }, t.prototype.getFilterStatusOrganizeList = function () {
                return this._filter_status_olist
            }, t.prototype.isJapaneseOrganizeList = function () {
                return this._japanese_olist
            }, t.prototype.getDestroyShipSlotType = function () {
                return this._destroy_ship_slot_type
            }, t.prototype.getUISkinID = function () {
                return this._skinID
            }, t.prototype.getMFlag2 = function () {
                return null != this._event_data && (0 != this._event_data.hasOwnProperty("api_m_flag2") && 1 == this._event_data.api_m_flag2)
            }, t.prototype.getCNum = function () {
                return r.ObjUtil.getNumber(this._event_data, "api_c_num")
            }, t
        }();
    e.BasicModel = s;
    var a = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype.setUserData = function (t) {
            this._o = t
        }, e.prototype.updateTutorialProgress = function (t) {
            null != this._o && (this._o.api_tutorial_progress = t)
        }, e.prototype.updatePortFurnitureMstID = function (t, e) {
            null != this._o && (this._o.api_furniture[t] = e)
        }, e.prototype.setPortBGMID = function (t) {
            this._port_bgm_id = t
        }, e.prototype.setDutyExcutableCount = function (t) {
            this._duty_executable_count = t
        }, e.prototype.getCoinCount = function () {
            return r.ObjUtil.getNumber(this._o, "api_fcoin")
        }, e.prototype.setCoinCount = function (t) {
            null != this._o && (this._o.api_fcoin = t)
        }, e.prototype.setExtraSupplyFlag = function (t) {
            this._extra_supply = t
        }, e.prototype.updateOrganizeListSetting = function (t, e) {
            this._filter_status_olist = t, this._japanese_olist = e
        }, e.prototype.setDestroyShipSlotType = function (t) {
            this._destroy_ship_slot_type = t
        }, e.prototype.setUISkinID = function (t) {
            this._skinID = t
        }, e.prototype.setEventData = function (t) {
            this._event_data = t
        }, e.prototype.setCFlag = function (t) {
            this._c_flag = t
        }, e
    }(s);
    e.BasicModelEdit = a
}