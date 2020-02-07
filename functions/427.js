const function427 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(15),
        o = function () {
            function t() {
                this._o = {}
            }
            return Object.defineProperty(t.prototype, "remodel_id", {
                get: function () {
                    return n.ObjUtil.getNumArray(this._o, "api_remodel_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "voice_ship_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_voice_ship_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "voice_id", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_voice_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "after_materials", {
                get: function () {
                    var t = n.ObjUtil.getNumArray(this._o, "api_after_material");
                    for (null == t && (t = []); t.length < 8;) t.push(0);
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "target_slotitem_memid", {
                get: function () {
                    var t = this.getItemObject();
                    return n.ObjUtil.getNumber(t, "api_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "use_slotitem_memids", {
                get: function () {
                    var t = n.ObjUtil.getNumArray(this._o, "api_use_slot_id");
                    return null == t ? [] : t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isSuccess = function () {
                return 1 == n.ObjUtil.getNumber(this._o, "api_remodel_flag")
            }, t.prototype.isChanged = function () {
                var t = n.ObjUtil.getNumArray(this._o, "api_remodel_id");
                return t[0] != t[1]
            }, t.prototype.getItemObject = function () {
                return n.ObjUtil.getObject(this._o, "api_after_slot")
            }, t
        }();
    e.RevampRemodelSlotModel = o
}