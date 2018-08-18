const function144 = function (t, e, i) {
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
    var o = i(0), r = i(7), s = i(31), a = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_ship_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "memID", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                return o.default.model.ship.getMst(this.mstID).name
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "yomi", {
            get: function () {
                return o.default.model.ship.getMst(this.mstID).yomi
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "level", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_lv")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "hpMax", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_maxhp")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "hpNow", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_nowhp")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "tired", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_cond")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "karyoku", {
            get: function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_karyoku");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "soukou", {
            get: function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_soukou");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "raisou", {
            get: function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_raisou");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "kaihi", {
            get: function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_kaihi");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "taiku", {
            get: function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_taiku");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "taisen", {
            get: function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_taisen");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "taisenMin", {
            get: function () {
                return this._taisen[0]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "taisenMax", {
            get: function () {
                return this._taisen[1]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "_taisen", {
            get: function () {
                return r.ObjUtil.getNumArray(this._o, "api_taisen")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "sakuteki", {
            get: function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_sakuteki");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "lucky", {
            get: function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_lucky");
                return null != t && t.length > 0 ? t[0] : 0
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "speed", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_soku")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "speedType", {
            get: function () {
                return s.ShipUtil.getSpeedType(this.speed)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "range", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_leng")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "tousai", {
            get: function () {
                return o.default.model.ship.getMst(this.mstID).tousai
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "taikyu", {
            get: function () {
                return this.hpMax
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "expNextLevel", {
            get: function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_exp");
                return null == t || t.length < 2 ? 0 : t[1]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "expNowRate", {
            get: function () {
                var t = r.ObjUtil.getNumArray(this._o, "api_exp");
                return null == t || t.length < 3 ? 0 : t[2]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "starNum", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_srate") + 1
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "slotNum", {
            get: function () {
                return o.default.model.ship.getMst(this.mstID).slotNum
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "shipTypeID", {
            get: function () {
                return o.default.model.ship.getMst(this.mstID).shipTypeID
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "shipTypeName", {
            get: function () {
                return o.default.model.ship.getMst(this.mstID).shipTypeName
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "fuelNow", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_fuel")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "ammoNow", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_bull")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "fuelMax", {
            get: function () {
                return o.default.model.ship.getMst(this.mstID).fuelMax
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "ammoMax", {
            get: function () {
                return o.default.model.ship.getMst(this.mstID).ammoMax
            }, enumerable: !0, configurable: !0
        }), t.prototype.getClassType = function () {
            return o.default.model.ship.getMst(this.mstID).getClassType()
        }, t.prototype.getFuelForSupply = function () {
            var t = this.fuelMax - this.fuelNow;
            return t = Math.max(0, t), t > 0 && this.isMarriage() && (t = Math.floor(.85 * t), t = Math.max(t, 1)), t
        }, t.prototype.getAmmoForSupply = function () {
            var t = this.ammoMax - this.ammoNow;
            return t = Math.max(0, t), t > 0 && this.isMarriage() && (t = Math.floor(.85 * t), t = Math.max(t, 1)), t
        }, Object.defineProperty(t.prototype, "sortNo", {
            get: function () {
                return o.default.model.ship.getMst(this.mstID).sortNo
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "gradeUpHoug", {
            get: function () {
                return this._kyouka[0]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "gradeUpRaig", {
            get: function () {
                return this._kyouka[1]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "gradeUpTyku", {
            get: function () {
                return this._kyouka[2]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "gradeUpSouk", {
            get: function () {
                return this._kyouka[3]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "gradeUpLuck", {
            get: function () {
                return this._kyouka[4]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "gradeUpTaikyu", {
            get: function () {
                return this._kyouka[5]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "gradeUpTaisen", {
            get: function () {
                return this._kyouka[6]
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "_kyouka", {
            get: function () {
                return r.ObjUtil.getNumArray(this._o, "api_kyouka", [0, 0, 0, 0, 0, 0, 0])
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "label", {
            get: function () {
                return r.ObjUtil.getNumber(this._o, "api_sally_area")
            }, enumerable: !0, configurable: !0
        }), t.prototype.isLocked = function () {
            return 1 == r.ObjUtil.getNumber(this._o, "api_locked")
        }, t.prototype.hasLockedSlotitem = function () {
            return 1 == r.ObjUtil.getNumber(this._o, "api_locked_equip")
        }, t.prototype.getSlotitems = function () {
            for (var t = [], e = r.ObjUtil.getNumArray(this._o, "api_slot"), i = 0; i < this.slotNum; i++) {
                var n = -1;
                null != e && e.length > i && (n = e[i]), n <= 0 ? t.push(null) : t.push(o.default.model.slot.get(n))
            }
            return t
        }, t.prototype.getSlotViewMax = function () {
            var t = r.ObjUtil.getNumber(this._o, "api_slotnum");
            return t > 4 ? t : 4
        }, t.prototype.getSlotitemTousai = function (t) {
            var e = r.ObjUtil.getNumArray(this._o, "api_onslot");
            return null != e && e.length > t ? e[t] : 0
        }, t.prototype.isExtraSlot = function () {
            return 0 != r.ObjUtil.getNumber(this._o, "api_slot_ex")
        }, t.prototype.getSlotitemEx = function () {
            var t = r.ObjUtil.getNumber(this._o, "api_slot_ex");
            return t >= 0 ? o.default.model.slot.get(t) : null
        }, t.prototype.getDamageType = function () {
            return s.ShipUtil.getDamageType(this.hpNow, this.hpMax)
        }, t.prototype.isDamaged = function () {
            return s.ShipUtil.isDamaged(this.hpNow, this.hpMax)
        }, t.prototype.isMarriage = function () {
            return s.ShipUtil.isMarriage(this.level)
        }, t.prototype.isRepair = function () {
            return -1 < o.default.model.ndock.getShipMemIDs().indexOf(this.memID)
        }, t.prototype.getRepairFuel = function () {
            return r.ObjUtil.getNumArray(this._o, "api_ndock_item", [0, 0])[0]
        }, t.prototype.getRepairSteel = function () {
            return r.ObjUtil.getNumArray(this._o, "api_ndock_item", [0, 0])[1]
        }, t.prototype.getRepairTime = function () {
            return r.ObjUtil.getNumber(this._o, "api_ndock_time", 0)
        }, t.prototype.getMaterialForBroken = function (t) {
            var e = o.default.model.ship.getMst(this.mstID).getMaterialForBroken();
            if (1 == t) {
                var i = this.getSlotitems(), n = this.getSlotitemEx();
                i = i.concat(n);
                for (var r = 0, s = i; r < s.length; r++) {
                    var a = s[r];
                    if (null != a) {
                        var _ = o.default.model.slot.getMst(a.mstID);
                        if (null != _) {
                            var u = _.getMaterialsFromBroken();
                            e.fuel += u.fuel, e.ammo += u.ammo, e.steel += u.steel, e.baux += u.baux
                        }
                    }
                }
            }
            return e
        }, Object.defineProperty(t.prototype, "VHP", {
            get: function () {
                return 2
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "VAS", {
            get: function () {
                return 9
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.ShipModel = a;
    var _ = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return n(e, t), e.prototype.__update__ = function (t) {
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
        }, e
    }(a);
    e.ShipModelEdit = _
}