const function166 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(30), r = i(225), s = function () {
        function t(t, e, i, n, o, r, s) {
            void 0 === s && (s = -1), this._karyoku = 0, this._raisou = 0, this._taiku = 0, this._soukou = 0, this._hp_init = 0, this._hp_now = 0, this._hp_max = 0, this._taihi = !1, this._type = t, this._practice = e, this._index = i, this._mst_id = n, this._mem_id = o, this._level = r, this._speed = s, this._slots = []
        }

        return t.convert = function (e, i, n, o) {
            var s = o.mstID, a = o.memID, _ = new t(e, i, n, s, a, o.level, o.speed);
            _.initializeHPInfo(o.hpNow, o.hpMax);
            for (var l = r.SlotitemModelReplica.converts(o.getSlotitems()), u = r.SlotitemModelReplica.convert(o.getSlotitemEx()), c = new Array, h = 0; h < o.slotNum; h++) c.push(o.getSlotitemTousai(h));
            return _.initializeSlots(l, u, c), _.initializeParams(o.karyoku, o.raisou, o.taiku, o.soukou), _
        }, Object.defineProperty(t.prototype, "type", {
            get: function () {
                return this._type
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "friend", {
            get: function () {
                return 0 == this._type || 2 == this._type
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "index", {
            get: function () {
                return this._index
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "mst_id", {
            get: function () {
                return this._mst_id
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "mem_id", {
            get: function () {
                return this._mem_id
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "level", {
            get: function () {
                return this._level
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "karyoku", {
            get: function () {
                return this._karyoku
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "raisou", {
            get: function () {
                return this._raisou
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "taiku", {
            get: function () {
                return this._taiku
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "soukou", {
            get: function () {
                return this._soukou
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "speed", {
            get: function () {
                if (this._speed < 0) {
                    var t = n.default.model.ship.getMst(this.mst_id);
                    return null == t ? 0 : t.speed
                }
                return this._speed
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "hp_init", {
            get: function () {
                return this._hp_init
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "hp_now", {
            get: function () {
                return this._hp_now
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "hp_max", {
            get: function () {
                return this._hp_max
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "slots", {
            get: function () {
                return this._slots
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "slot_ex", {
            get: function () {
                return this._slot_ex
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "damageType", {
            get: function () {
                return o.ShipUtil.getDamageType(this._hp_now, this._hp_max)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "damageType_before", {
            get: function () {
                return this._pre_damage_type
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                var t = n.default.model.ship.getMst(this.mst_id);
                return null == t ? "" : t.name
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "stype", {
            get: function () {
                var t = n.default.model.ship.getMst(this.mst_id);
                return null == t ? -1 : t.shipTypeID
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "stype_name", {
            get: function () {
                var t = n.default.model.ship.getMst(this.mst_id);
                return null == t ? "" : t.shipTypeName
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "yomi", {
            get: function () {
                var t = n.default.model.ship.getMst(this.mst_id);
                return null == t ? "" : t.yomi
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "slotNum", {
            get: function () {
                var t = n.default.model.ship.getMst(this.mst_id);
                return null == t ? 0 : t.slotNum
            }, enumerable: !0, configurable: !0
        }), t.prototype.initializeHPInfo = function (t, e) {
            this._hp_init = t;
            var i = this._practice ? 1 : 0;
            this._hp_now = Math.max(i, t), this._hp_now = Math.floor(this._hp_now), this._hp_max = e, this._pre_damage_type = this.damageType
        }, t.prototype.initializeSlots = function (t, e, i) {
            if (this._slots = t, this._slot_ex = e, this._tousai = i, null != this._slots) {
                var n = this.slotNum;
                this._slots.length > n && this._slots.pop(), this._slots.length < n && this._slots.push(null), null != this._tousai && (this._tousai.length > this._slots.length && this._tousai.pop(), this._tousai.length < this._slots.length && this._tousai.push(0))
            }
        }, t.prototype.initializeParams = function (t, e, i, n) {
            this._karyoku = t, this._raisou = e, this._taiku = i, this._soukou = n
        }, t.prototype.initializeTaihi = function (t) {
            this._taihi = t
        }, t.prototype.isTaihi = function () {
            return this._taihi
        }, t.prototype.isSubMarine = function () {
            return 13 == this.stype || 14 == this.stype
        }, t.prototype.isGround = function () {
            return this.speed <= 0
        }, t.prototype.getTousai = function (t) {
            return null == this._tousai ? 0 : t < this._tousai.length ? this._tousai[t] : 0
        }, t.prototype.isDamaged = function () {
            return o.ShipUtil.isDamaged(this._hp_now, this._hp_max)
        }, t.prototype.isMarriage = function () {
            return o.ShipUtil.isMarriage(this._level)
        }, t.prototype.causeDamage = function (t, e) {
            void 0 === e && (e = !0), 1 == e && (this._pre_damage_type = this.damageType), this._hp_now -= Math.floor(t);
            var i = this._practice ? 1 : 0;
            this._hp_now = Math.max(i, this._hp_now)
        }, t.prototype.updateHpNow = function (t, e) {
            void 0 === e && (e = !0), 1 == e && (this._pre_damage_type = this.damageType), this._hp_now = Math.floor(t);
            var i = this._practice ? 1 : 0;
            this._hp_now = Math.max(i, this._hp_now), this._hp_now = Math.min(this._hp_max, this._hp_now)
        }, t.prototype.hasSlot = function (t, e) {
            void 0 === e && (e = !0);
            for (var i = 0, n = this._slots; i < n.length; i++) {
                var o = n[i];
                if (null != o && o.mst_id == t) return !0
            }
            return !(!e || null == this._slot_ex || this._slot_ex.mst_id != t)
        }, t.prototype.hasSlotByEquipType = function (t, e) {
            void 0 === e && (e = !0);
            for (var i = 0, n = this._slots; i < n.length; i++) {
                var o = n[i];
                if (null != o && o.equipTypeSp == t) return !0
            }
            return !(!e || null == this._slot_ex || this._slot_ex.equipTypeSp != t)
        }, t.prototype.hasYouin = function () {
            return this.hasSlot(42)
        }, t.prototype.hasMegami = function () {
            return this.hasSlot(43)
        }, t.prototype.useReplenishment = function () {
            if (null != this._slot_ex && 146 == this._slot_ex.mst_id) return this._slot_ex = null, !0;
            var t = this._slots;
            if (null == t) return !1;
            for (var e = t.length - 1; e >= 0; e--) {
                var i = t[e];
                if (null != i && 146 == i.mst_id) return this._slots.splice(e, 1), this._slots.push(null), !0
            }
            return !1
        }, t.prototype.useRation = function () {
            return 1 == this._useRation(241) ? 1 == this._useRation(150) ? [241, 150] : [241] : 1 == this._useRation(150) ? 1 == this._useRation(145) ? [145, 150] : [150] : 1 == this._useRation(145) ? [145] : []
        }, t.prototype._useRation = function (t) {
            if (null != this.slot_ex && this.slot_ex.mst_id == t) return this._slot_ex = null, !0;
            var e = this._slots;
            if (null == e) return !1;
            for (var i = e.length - 1; i >= 0; i--) {
                var n = e[i];
                if (null != n && n.mst_id == t) return this._slots.splice(i, 1), this._slots.push(null), !0
            }
            return !1
        }, t.prototype.useRepairItem = function () {
            if (null != this._slot_ex) {
                if (42 == this._slot_ex.mst_id) return this._slot_ex = null, this._repair(1), 1;
                if (43 == this._slot_ex.mst_id) return this._slot_ex = null, this._repair(2), 2
            }
            var t = this._slots;
            if (null == t) return 0;
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if (null != i) {
                    if (42 == i.mst_id) return this._slots.splice(e, 1), this._slots.push(null), this._repair(1), 1;
                    if (43 == i.mst_id) return this._slots.splice(e, 1), this._slots.push(null), this._repair(2), 2
                }
            }
            return 0
        }, t.prototype.selectRepairItem = function (t) {
            var e;
            if (1 == t) e = 42; else {
                if (2 != t) return;
                e = 43
            }
            if (null != this._slot_ex && this._slot_ex.mst_id == e) return this._slot_ex = null, void this._repair(t);
            var i = this._slots;
            if (null != i) for (var n = 0; n < i.length; n++) {
                var o = i[n];
                if (null != o && o.mst_id == e) return this._slots.splice(n, 1), this._slots.push(null), void this._repair(t)
            }
        }, t.prototype.clone = function () {
            var e = new t(this._type, this._practice, this._index, this.mst_id, this.mem_id, this.level, this._speed);
            e.initializeHPInfo(this._hp_now, this._hp_max);
            var i = null;
            if (null != this._slots) {
                i = new Array;
                for (var n = 0, o = this._slots; n < o.length; n++) {
                    var r = o[n];
                    null == r ? i.push(null) : i.push(r.clone())
                }
            }
            var s = null;
            null != this._slot_ex && (s = this._slot_ex.clone());
            var a = null;
            if (null != this._tousai) {
                a = new Array;
                for (var _ = 0, l = this._tousai; _ < l.length; _++) {
                    var u = l[_];
                    a.push(u)
                }
            }
            return e.initializeSlots(i, s, a), e.initializeParams(this._karyoku, this._raisou, this.taiku, this._soukou), e.initializeTaihi(this._taihi), e
        }, t.prototype._repair = function (t) {
            if (1 == t) {
                var e = Math.floor(.2 * this._hp_max);
                this.updateHpNow(e)
            } else 2 == t && this.updateHpNow(this._hp_max)
        }, t.prototype.toString = function () {
            return "[" + this.index + "]" + this.name + "(" + this.mst_id + ")"
        }, t
    }();
    e.ShipModelReplica = s
}