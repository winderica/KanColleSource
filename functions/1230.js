const function1230 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t(t) {
            this._hp = t.hp_now, this._slotitem = [];
            var e = t.slots;
            if (null != e)
                for (var i = 0, n = e; i < n.length; i++) {
                    var o = n[i];
                    null != o && this._slotitem.push({
                        mst: o.mst_id,
                        mem: o.mem_id
                    })
                }
            null != t.slot_ex && (this._slotitem_ex = {
                mst: t.slot_ex.mst_id,
                mem: t.slot_ex.mem_id
            })
        }
        return Object.defineProperty(t.prototype, "hp", {
            get: function () {
                return this._hp
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "slotitem", {
            get: function () {
                return this._slotitem
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "slotitem_ex", {
            get: function () {
                return this._slotitem_ex
            },
            enumerable: !0,
            configurable: !0
        }), t
    }();
    e.ShipInstantModel = n
}