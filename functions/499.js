const function499 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(7),
        r = function () {
            function t(t) {
                this._o = t, this._state = -1
            }
            return Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return this._state
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "mstID", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "areaID", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_maparea_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "dispID", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_disp_no")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "name", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_name")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "difficulty", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_difficulty")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "detail", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_details")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "time", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_time")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "fuel", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_use_fuel")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ammo", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_use_bull")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "item1_id", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_win_item1");
                    return null != t && t.length > 0 ? t[0] : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "item1_count", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_win_item1");
                    return null != t && t.length > 1 ? t[1] : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "item2_id", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_win_item2");
                    return null != t && t.length > 0 ? t[0] : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "item2_count", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_win_item2");
                    return null != t && t.length > 1 ? t[1] : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "required_num", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_deck_num")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isCancelable = function () {
                return 1 == o.ObjUtil.getNumber(this._o, "api_return_flag")
            }, t.prototype.isSupport = function () {
                return [33, 34, 301, 302].indexOf(this.mstID) >= 0
            }, t
        }();
    e.ExpeditionModel = r;
    var s = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return n(e, t), e.prototype.__setState__ = function (t) {
            this._state = t
        }, e
    }(r);
    e.ExpeditionModelEdit = s
}