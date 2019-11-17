const function908 = function (t, e, i) {
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
    var o = i(0),
        r = i(7),
        s = i(10),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._url = "api_req_kousyou/getship", i.api_kdock_id = e, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "ship", {
                get: function () {
                    return this._ship
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "kDocks", {
                get: function () {
                    return this._kDocks
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._connect = function () {
                this._post_data.api_kdock_id = this.api_kdock_id, t.prototype._connect.call(this)
            }, e.prototype._completedEnd = function () {
                var e = r.ObjUtil.getObject(this._raw_data, "api_ship");
                this._ship = o.default.model.ship.updateData(e);
                var i = r.ObjUtil.getObjectArray(this._raw_data, "api_slotitem");
                o.default.model.slot.addMemData(i), this._kDocks = r.ObjUtil.getObjectArray(this._raw_data, "api_kdock"), t.prototype._completedEnd.call(this)
            }, e
        }(s.APIBase);
    e.GetShipAPI = a
}