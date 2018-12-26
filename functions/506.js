const function506 = function (t, e, i) {
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
                this._o = t
            }
            return Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "state", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_state", -1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ship_mst_id", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_created_ship_id", 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "complete_time", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_complete_time", 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "fuel", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_item1", 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ammo", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_item2", 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "steel", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_item3", 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "baux", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_item4", 0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "dev_kit", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_item5", 0)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isLargeBuild = function () {
                return (2 == this.state || 3 == this.state) && this.fuel >= 1e3
            }, t
        }();
    e.KDockModel = r;
    var s = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }
        return n(e, t), e.prototype.__open__ = function () {
            -1 == this.state && (this._o.api_state = 0)
        }, e.prototype.__complete__ = function (t) {
            void 0 === t && (t = !1), (t || 2 == this.state) && (this._o.api_state = 3, this._o.api_complete_time = 0, this._o.api_complete_time_str = "")
        }, e
    }(r);
    e.KDockModelEdit = s
}