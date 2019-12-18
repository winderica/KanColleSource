const function628 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t(t, e) {
            this._eff_type = 0, this._direction = 1, this._direction = t, this._eff_type = e, this._items = []
        }
        return Object.defineProperty(t.prototype, "items", {
            get: function () {
                return this._items
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "eff_type", {
            get: function () {
                return this._eff_type
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "direction", {
            get: function () {
                return this._direction
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.addItem = function (t, e, i) {
            void 0 === i && (i = -1), i > 0 ? this._items.push({
                id: t,
                type: e,
                size: i
            }) : this._items.push({
                id: t,
                type: e
            })
        }, t
    }();
    e.ModelChangeMeltIntoModel = n
}