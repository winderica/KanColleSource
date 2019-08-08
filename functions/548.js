const function548 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t() {
            this._flg = 1, this._type = 0, this._onUI = !1
        }
        return Object.defineProperty(t.prototype, "flg", {
            get: function () {
                return this._flg
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "type", {
            get: function () {
                return this._type
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "UI", {
            get: function () {
                return this._onUI
            },
            set: function (t) {
                this._onUI = t
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.setData = function (t, e) {
            this._flg = t, this._type = e
        }, t
    }();
    e.FriendlyRequestModel = n
}