const function1419 = function (t, e, i) {
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
        r = i(187),
        s = function (t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i._initPlaneFrom(), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "squadrons", {
                get: function () {
                    for (var t = [], e = o.ObjUtil.getObjectArray(this._o, "api_air_base_data"), i = 0, n = e; i < n.length; i++) {
                        var r = n[i];
                        t.push({
                            mst_id: o.ObjUtil.getNumber(r, "api_mst_id"),
                            count: o.ObjUtil.getNumber(r, "api_count")
                        })
                    }
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(r.AirWarDataBase);
    e.AirUnitJetData = s
}