/*
 * called by `517.js`
 * ship data (api_port/port.api_ship)
 */
const function143 = function (t, e, i) {
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
        r = i(7),
        s = i(31),
        a = function () {
            function t(t) {
                this._o = t
            }

            // 艦船ID
            Object.defineProperty(t.prototype, "mstID", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_ship_id")
                }, enumerable: !0, configurable: !0
            });
            // 艦船固有ID
            Object.defineProperty(t.prototype, "memID", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_id")
                }, enumerable: !0, configurable: !0
            });
            // 艦船名
            Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return o.default.model.ship.getMst(this.mstID).name
                }, enumerable: !0, configurable: !0
            });
            // 艦船名読み
            Object.defineProperty(t.prototype, "yomi", {
                get: function () {
                    return o.default.model.ship.getMst(this.mstID).yomi
                }, enumerable: !0, configurable: !0
            });
            // Lv
            Object.defineProperty(t.prototype, "level", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_lv")
                }, enumerable: !0, configurable: !0
            });
            // 最大HP
            Object.defineProperty(t.prototype, "hpMax", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_maxhp")
                }, enumerable: !0, configurable: !0
            });
            // 現在HP
            Object.defineProperty(t.prototype, "hpNow", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_nowhp")
                }, enumerable: !0, configurable: !0
            });
            // コンディション
            Object.defineProperty(t.prototype, "tired", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_cond")
                }, enumerable: !0, configurable: !0
            });
            // 火力　[0]=現在値(装備込み), [1]=最大値
            Object.defineProperty(t.prototype, "karyoku", {
                get: function () {
                    var t = r.ObjUtil.getNumArray(this._o, "api_karyoku");
                    return null != t && t.length > 0 ? t[0] : 0
                }, enumerable: !0, configurable: !0
            });
            // 装甲
            Object.defineProperty(t.prototype, "soukou", {
                get: function () {
                    var t = r.ObjUtil.getNumArray(this._o, "api_soukou");
                    return null != t && t.length > 0 ? t[0] : 0
                }, enumerable: !0, configurable: !0
            });
            // 雷装
            Object.defineProperty(t.prototype, "raisou", {
                get: function () {
                    var t = r.ObjUtil.getNumArray(this._o, "api_raisou");
                    return null != t && t.length > 0 ? t[0] : 0
                }, enumerable: !0, configurable: !0
            });
            // 回避
            Object.defineProperty(t.prototype, "kaihi", {
                get: function () {
                    var t = r.ObjUtil.getNumArray(this._o, "api_kaihi");
                    return null != t && t.length > 0 ? t[0] : 0
                }, enumerable: !0, configurable: !0
            });
            // 対空
            Object.defineProperty(t.prototype, "taiku", {
                get: function () {
                    var t = r.ObjUtil.getNumArray(this._o, "api_taiku");
                    return null != t && t.length > 0 ? t[0] : 0
                }, enumerable: !0, configurable: !0
            });
            // 対潜(現在値(装備込み))
            Object.defineProperty(t.prototype, "taisen", {
                get: function () {
                    var t = r.ObjUtil.getNumArray(this._o, "api_taisen");
                    return null != t && t.length > 0 ? t[0] : 0
                }, enumerable: !0, configurable: !0
            });
            // 対潜現在値(装備込み)
            Object.defineProperty(t.prototype, "taisenMin", {
                get: function () {
                    return this._taisen[0]
                }, enumerable: !0, configurable: !0
            });
            // 対潜最大値(lv99)
            Object.defineProperty(t.prototype, "taisenMax", {
                get: function () {
                    return this._taisen[1]
                }, enumerable: !0, configurable: !0
            });
            // 対潜
            Object.defineProperty(t.prototype, "_taisen", {
                get: function () {
                    return r.ObjUtil.getNumArray(this._o, "api_taisen")
                }, enumerable: !0, configurable: !0
            });
            // 索敵
            Object.defineProperty(t.prototype, "sakuteki", {
                get: function () {
                    var t = r.ObjUtil.getNumArray(this._o, "api_sakuteki");
                    return null != t && t.length > 0 ? t[0] : 0
                }, enumerable: !0, configurable: !0
            });
            // 運
            Object.defineProperty(t.prototype, "lucky", {
                get: function () {
                    var t = r.ObjUtil.getNumArray(this._o, "api_lucky");
                    return null != t && t.length > 0 ? t[0] : 0
                }, enumerable: !0, configurable: !0
            });
            // 速力　0=基地, 5=低速, 10=高速, 15=高速+, 20=最速
            Object.defineProperty(t.prototype, "speed", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_soku")
                }, enumerable: !0, configurable: !0
            });
            // 速力 convert number to string
            Object.defineProperty(t.prototype, "speedType", {
                get: function () {
                    return s.ShipUtil.getSpeedType(this.speed)
                }, enumerable: !0, configurable: !0
            });
            // 射程
            Object.defineProperty(t.prototype, "range", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_leng")
                }, enumerable: !0, configurable: !0
            });
            // 搭載
            Object.defineProperty(t.prototype, "tousai", {
                get: function () {
                    return o.default.model.ship.getMst(this.mstID).tousai
                }, enumerable: !0, configurable: !0
            });
            // 耐久(最大HP)
            Object.defineProperty(t.prototype, "taikyu", {
                get: function () {
                    return this.hpMax
                }, enumerable: !0, configurable: !0
            });
            // 経験値　[0]=累積, [1]=次のレベルまで, [2]=経験値バー割合
            Object.defineProperty(t.prototype, "expNextLevel", {
                get: function () {
                    var t = r.ObjUtil.getNumArray(this._o, "api_exp");
                    return null == t || t.length < 2 ? 0 : t[1]
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "expNowRate", {
                get: function () {
                    var t = r.ObjUtil.getNumArray(this._o, "api_exp");
                    return null == t || t.length < 3 ? 0 : t[2]
                }, enumerable: !0, configurable: !0
            });
            // 改装☆数
            Object.defineProperty(t.prototype, "starNum", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_srate") + 1
                }, enumerable: !0, configurable: !0
            });
            // スロット数
            Object.defineProperty(t.prototype, "slotNum", {
                get: function () {
                    return o.default.model.ship.getMst(this.mstID).slotNum
                }, enumerable: !0, configurable: !0
            });
            // 艦種id
            Object.defineProperty(t.prototype, "shipTypeID", {
                get: function () {
                    return o.default.model.ship.getMst(this.mstID).shipTypeID
                }, enumerable: !0, configurable: !0
            });
            // 艦種名
            Object.defineProperty(t.prototype, "shipTypeName", {
                get: function () {
                    return o.default.model.ship.getMst(this.mstID).shipTypeName
                }, enumerable: !0, configurable: !0
            });
            // 搭載燃料
            Object.defineProperty(t.prototype, "fuelNow", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_fuel")
                }, enumerable: !0, configurable: !0
            });
            // 搭載弾薬
            Object.defineProperty(t.prototype, "ammoNow", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_bull")
                }, enumerable: !0, configurable: !0
            });
            // 消費燃料
            Object.defineProperty(t.prototype, "fuelMax", {
                get: function () {
                    return o.default.model.ship.getMst(this.mstID).fuelMax
                }, enumerable: !0, configurable: !0
            });
            // 消費弾薬
            Object.defineProperty(t.prototype, "ammoMax", {
                get: function () {
                    return o.default.model.ship.getMst(this.mstID).ammoMax
                }, enumerable: !0, configurable: !0
            });
            // 艦型ID (search `api_ctype` in 74EO's `apilist.txt`)
            t.prototype.getClassType = function () {
                return o.default.model.ship.getMst(this.mstID).getClassType()
            };
            // 補給燃料 (*= 0.85 after marriage)
            t.prototype.getFuelForSupply = function () {
                var t = this.fuelMax - this.fuelNow;
                return t = Math.max(0, t), t > 0 && this.isMarriage() && (t = Math.floor(.85 * t), t = Math.max(t, 1)), t
            };
            // 補給弾薬 (*= 0.85 after marriage)
            t.prototype.getAmmoForSupply = function () {
                var t = this.ammoMax - this.ammoNow;
                return t = Math.max(0, t), t > 0 && this.isMarriage() && (t = Math.floor(.85 * t), t = Math.max(t, 1)), t
            };
            // ソートid (api_sort_id, new in HTML5 version)
            Object.defineProperty(t.prototype, "sortNo", {
                get: function () {
                    return o.default.model.ship.getMst(this.mstID).sortNo
                }, enumerable: !0, configurable: !0
            });
            // 近代化改修 火力
            Object.defineProperty(t.prototype, "gradeUpHoug", {
                get: function () {
                    return this._kyouka[0]
                }, enumerable: !0, configurable: !0
            });
            // 近代化改修 雷装
            Object.defineProperty(t.prototype, "gradeUpRaig", {
                get: function () {
                    return this._kyouka[1]
                }, enumerable: !0, configurable: !0
            });
            // 近代化改修 対空
            Object.defineProperty(t.prototype, "gradeUpTyku", {
                get: function () {
                    return this._kyouka[2]
                }, enumerable: !0, configurable: !0
            });
            // 近代化改修 装甲
            Object.defineProperty(t.prototype, "gradeUpSouk", {
                get: function () {
                    return this._kyouka[3]
                }, enumerable: !0, configurable: !0
            });
            // 近代化改修 運
            Object.defineProperty(t.prototype, "gradeUpLuck", {
                get: function () {
                    return this._kyouka[4]
                }, enumerable: !0, configurable: !0
            });
            // 近代化改修 耐久
            Object.defineProperty(t.prototype, "gradeUpTaikyu", {
                get: function () {
                    return this._kyouka[5]
                }, enumerable: !0, configurable: !0
            });
            // 近代化改修 対潜
            Object.defineProperty(t.prototype, "gradeUpTaisen", {
                get: function () {
                    return this._kyouka[6]
                }, enumerable: !0, configurable: !0
            });
            // 近代化改修状態　[0]=火力, [1]=雷装, [2]=対空, [3]=装甲, [4]=運, [5]=耐久, [6]=対潜
            Object.defineProperty(t.prototype, "_kyouka", {
                get: function () {
                    return r.ObjUtil.getNumArray(this._o, "api_kyouka", [0, 0, 0, 0, 0, 0, 0])
                }, enumerable: !0, configurable: !0
            });
            // 出撃海域　イベント中のみ存在 (札)
            Object.defineProperty(t.prototype, "label", {
                get: function () {
                    return r.ObjUtil.getNumber(this._o, "api_sally_area")
                }, enumerable: !0, configurable: !0
            });
            // 保護ロック有無
            t.prototype.isLocked = function () {
                return 1 == r.ObjUtil.getNumber(this._o, "api_locked")
            };
            // ロックされている装備を装備しているか
            t.prototype.hasLockedSlotitem = function () {
                return 1 == r.ObjUtil.getNumber(this._o, "api_locked_equip")
            };
            // 装備array　-1=空き
            t.prototype.getSlotitems = function () {
                for (var t = [], e = r.ObjUtil.getNumArray(this._o, "api_slot"), i = 0; i < this.slotNum; i++) {
                    var n = -1;
                    null != e && e.length > i && (n = e[i]), n <= 0 ? t.push(null) : t.push(o.default.model.slot.get(n))
                }
                return t
            };
            // スロット数
            t.prototype.getSlotViewMax = function () {
                var t = r.ObjUtil.getNumber(this._o, "api_slotnum");
                return t > 4 ? t : 4
            };
            // 艦載機搭載数
            t.prototype.getSlotitemTousai = function (t) {
                var e = r.ObjUtil.getNumArray(this._o, "api_onslot");
                return null != e && e.length > t ? e[t] : 0
            };
            // 補強スロット 0=未解放, -1=未装備
            t.prototype.isExtraSlot = function () {
                return 0 != r.ObjUtil.getNumber(this._o, "api_slot_ex")
            }, t.prototype.getSlotitemEx = function () {
                var t = r.ObjUtil.getNumber(this._o, "api_slot_ex");
                return t >= 0 ? o.default.model.slot.get(t) : null
            };
            // 小破～撃沈
            t.prototype.getDamageType = function () {
                return s.ShipUtil.getDamageType(this.hpNow, this.hpMax)
            };
            // 中破～撃沈
            t.prototype.isDamaged = function () {
                return s.ShipUtil.isDamaged(this.hpNow, this.hpMax)
            };
            // is 結婚
            t.prototype.isMarriage = function () {
                return s.ShipUtil.isMarriage(this.level)
            };
            // is 入渠
            t.prototype.isRepair = function () {
                return -1 < o.default.model.ndock.getShipMemIDs().indexOf(this.memID)
            };
            // 入渠時の消費資材　[0]=燃料, [1]=鋼材
            t.prototype.getRepairFuel = function () {
                return r.ObjUtil.getNumArray(this._o, "api_ndock_item", [0, 0])[0]
            }, t.prototype.getRepairSteel = function () {
                return r.ObjUtil.getNumArray(this._o, "api_ndock_item", [0, 0])[1]
            };
            // 入渠時間(ミリ秒)
            t.prototype.getRepairTime = function () {
                return r.ObjUtil.getNumber(this._o, "api_ndock_time", 0)
            };
            // 解体資材
            t.prototype.getMaterialForBroken = function (t) {
                var e = o.default.model.ship.getMst(this.mstID).getMaterialForBroken();
                if (1 == t) {
                    // get equipments
                    var i = this.getSlotitems(), n = this.getSlotitemEx();
                    i = i.concat(n);
                    for (var r = 0, s = i; r < s.length; r++) {
                        var a = s[r];
                        if (null != a) {
                            var _ = o.default.model.slot.getMst(a.mstID);
                            if (null != _) {
                                // 廃棄資材
                                var u = _.getMaterialsFromBroken();
                                // 解体資材 = 解体資材 + 廃棄資材
                                e.fuel += u.fuel, e.ammo += u.ammo, e.steel += u.steel, e.baux += u.baux
                            }
                        }
                    }
                }
                return e
            };
            // 海防艦耐久改修
            Object.defineProperty(t.prototype, "VHP", {
                get: function () {
                    return 2
                }, enumerable: !0, configurable: !0
            });
            // 海防艦対潜改修
            Object.defineProperty(t.prototype, "VAS", {
                get: function () {
                    return 9
                }, enumerable: !0, configurable: !0
            });
            return t
        }();
    e.ShipModel = a;
    var _ = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        n(e, t);
        // update state
        e.prototype.__update__ = function (t) {
            this._o = t
        }, e.prototype.__setLocked__ = function (t) {
            this._o.api_locked = t ? 1 : 0
        }, e.prototype.__updateAmmo__ = function (t) {
            this._o.api_bull = t
        }, e.prototype.__updateFuel__ = function (t) {
            this._o.api_fuel = t
        }, e.prototype.__updateOnSlot__ = function (t) {
            this._o.api_onslot = t
        }, e.prototype.__updateSlot__ = function (t, e) {
            this._o.api_slot[t] = e
        }, e.prototype.__updateSlotAll__ = function (t) {
            this._o.api_slot = t
        }, e.prototype.__updateExtraSlot__ = function (t) {
            this._o.api_slot_ex = -1
        }, e.prototype.__updateNowHp__ = function (t) {
            this._o.api_nowhp = t
        }, e.prototype.__updateNDockTime__ = function (t) {
            this._o.api_ndock_time = t
        }, e.prototype.__updateNDockItem__ = function (t) {
            this._o.api_ndock_item = t
        }, e.prototype.__updateCond__ = function (t) {
            this._o.api_cond = t
        };
        return e
    }(a);
    e.ShipModelEdit = _
}