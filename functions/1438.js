const function1438 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t) {
                this._o = t
            }
            return t.prototype.isSuccess_f = function () {
                return this._isSuccess(this._data_f)
            }, t.prototype.isSuccess_e = function () {
                return this._isSuccess(this._data_e)
            }, t.prototype.hasPlane_f = function () {
                return this._hasPlane(this._data_f)
            }, t.prototype.hasPlane_e = function () {
                return this._hasPlane(this._data_e)
            }, t.prototype.hasMikikan_f = function () {
                return this._hasMikikan(this._data_f)
            }, t.prototype.hasMikikan_e = function () {
                return this._hasMikikan(this._data_e)
            }, Object.defineProperty(t.prototype, "_data_f", {
                get: function () {
                    var t = n.ObjUtil.getNumArray(this._o, "api_search");
                    return null != t && t.length > 0 ? t[0] : -1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "_data_e", {
                get: function () {
                    var t = n.ObjUtil.getNumArray(this._o, "api_search");
                    return null != t && t.length > 1 ? t[1] : -1
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._isSuccess = function (t) {
                return 1 == t || 2 == t || 5 == t
            }, t.prototype._hasPlane = function (t) {
                return 1 == t || 2 == t || 3 == t || 4 == t
            }, t.prototype._hasMikikan = function (t) {
                return 2 == t || 3 == t
            }, t
        }();
    e.SakutekiData = o
}