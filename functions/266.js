const function266 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(7), r = function () {
        function t(t) {
            this._o = t
        }

        return Object.defineProperty(t.prototype, "mstID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_slotitem_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "memID", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_id")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? "" : t.name
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "level", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_level")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "skillLevel", {
            get: function () {
                return o.ObjUtil.getNumber(this._o, "api_alv")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "cardType", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.cardType
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "equipType", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.equipType
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "equipTypeSp", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.equipTypeSp
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "iconType", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.iconType
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "range", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.range
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "karyoku", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.karyoku
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "raisou", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.raisou
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "taiku", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.taiku
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "taisen", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.taisen
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "bakusou", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.bakusou
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "meichu", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.meichu
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "kaihi", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.kaihi
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "sakuteki", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.sakuteki
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "soukou", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.soukou
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "distance", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.distance
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "cost", {
            get: function () {
                var t = n.default.model.slot.getMst(this.mstID);
                return null == t ? 0 : t.cost
            }, enumerable: !0, configurable: !0
        }), t.prototype.isLocked = function () {
            return 1 == o.ObjUtil.getNumber(this._o, "api_locked")
        }, t.prototype.__setLocked__ = function (t) {
            this._o.api_locked = t ? 1 : 0
        }, t.prototype.__updateObject__ = function (t) {
            this._o = t
        }, t.prototype.isPlane = function () {
            var t = n.default.model.slot.getMst(this.mstID);
            return null != t && t.isPlane()
        }, t
    }();
    e.SlotitemModel = r
}