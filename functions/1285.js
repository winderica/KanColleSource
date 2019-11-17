const function1285 = function (t, e, i) {
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
    var o = i(10),
        r = i(7),
        s = i(0),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._url = "api_req_map/anchorage_repair", e
            }
            return n(e, t), Object.defineProperty(e.prototype, "used_ship", {
                get: function () {
                    return this._used_ship
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._connect = function () {
                t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                this._used_ship = r.ObjUtil.getNumber(this._raw_data, "api_used_ship");
                for (var e = r.ObjUtil.getObjectArray(this._raw_data, "api_ship_data"), i = 0, n = e; i < n.length; i++) {
                    var o = n[i];
                    s.default.model.ship.updateData(o)
                }
                t.prototype._completedEnd.call(this)
            }, e
        }(o.APIBase);
    e.APIAnchorageRepair = a
}