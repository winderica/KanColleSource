const function225 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = function () {
        function t(t, e, i, n) {
            void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = -1), this._mem_id = 0, this._level = 0, this._mst_id = t, this._mem_id = e, this._level = i, this._sakuteki = n
        }

        return t.convert = function (e) {
            return null == e ? null : new t(e.mstID, e.memID, e.level, e.sakuteki)
        }, t.convertFromMstIDs = function (e) {
            if (null == e) return null;
            for (var i = new Array, n = 0, o = e; n < o.length; n++) {
                var r = o[n];
                r > 0 ? i.push(new t(r)) : i.push(null)
            }
            return i
        }, t.converts = function (e) {
            if (null == e) return null;
            var i = new Array;
            if (null != e) for (var n = 0, o = e; n < o.length; n++) {
                var r = o[n];
                i.push(t.convert(r))
            }
            return i
        }, Object.defineProperty(t.prototype, "mst_id", {
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
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                return n.default.model.slot.getMst(this._mst_id).name
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "iconType", {
            get: function () {
                return n.default.model.slot.getMst(this._mst_id).iconType
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "equipType", {
            get: function () {
                return n.default.model.slot.getMst(this._mst_id).equipType
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "equipTypeSp", {
            get: function () {
                return n.default.model.slot.getMst(this._mst_id).equipTypeSp
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "sakuteki", {
            get: function () {
                return this._sakuteki >= 0 ? this._sakuteki : n.default.model.slot.getMst(this._mst_id).sakuteki
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "taiku", {
            get: function () {
                return n.default.model.slot.getMst(this._mst_id).taiku
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "taisen", {
            get: function () {
                return n.default.model.slot.getMst(this._mst_id).taisen
            }, enumerable: !0, configurable: !0
        }), t.prototype.clone = function () {
            return new t(this._mst_id, this._mem_id, this._level, this._sakuteki)
        }, t
    }();
    e.SlotitemModelReplica = o
}