const function1417 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function () {
            function t(t, e, i, n) {
                void 0 === i && (i = null), void 0 === n && (n = null), this._offset_x = 0, this._offset_y = 0, this._type = t, this._mst_id = e, this._name = n, this._stype = i
            }
            return Object.defineProperty(t.prototype, "type", {
                get: function () {
                    return this._type
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mst_id", {
                get: function () {
                    return this._mst_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "voice_id", {
                get: function () {
                    return this._voice_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "message", {
                get: function () {
                    return this._message
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    if (null != this._name) return this._name;
                    var t = n.default.model.ship.getMst(this._mst_id);
                    return null == t ? "" : t.name
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "stype", {
                get: function () {
                    if (null != this._stype) return this._stype;
                    var t = n.default.model.ship.getMst(this._mst_id);
                    return null == t ? "" : t.shipTypeName
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "offset_x", {
                get: function () {
                    return this._offset_x
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "offset_y", {
                get: function () {
                    return this._offset_y
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setMessage = function (t, e) {
                return this._voice_id = t, this._message = e, this
            }, t.prototype.setOffset = function (t, e) {
                return this._offset_x = t, this._offset_y = e, this
            }, t
        }();
    e.BossModel = o
}