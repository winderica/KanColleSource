const function1416 = function (t, e, i) {
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
        r = i(184),
        s = function (t) {
            function e(e) {
                var i = t.call(this, e) || this;
                return i._initPlaneFrom(), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "airunit_id", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_base_id")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "squadrons", {
                get: function () {
                    var t = [],
                        e = o.ObjUtil.getObjectArray(this._o, "api_squadron_plane");
                    if (null != e)
                        for (var i = 0, n = e; i < n.length; i++) {
                            var r = n[i];
                            t.push({
                                mst_id: o.ObjUtil.getNumber(r, "api_mst_id"),
                                count: o.ObjUtil.getNumber(r, "api_count")
                            })
                        }
                    if (null != (e = o.ObjUtil.getObjectArray(this._o, "api_map_squadron_plane")))
                        for (var s = this.plane_from_f.map(function (t) {
                                return t + 1
                            }), a = 0, _ = s; a < _.length; a++) {
                            var l = _[a];
                            if (e.hasOwnProperty(l.toString()))
                                for (var u = e[l], c = 0, h = u; c < h.length; c++) {
                                    var p = h[c];
                                    t.push({
                                        mst_id: o.ObjUtil.getNumber(p, "api_mst_id"),
                                        count: o.ObjUtil.getNumber(p, "api_count")
                                    })
                                }
                        }
                    return t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "seiku", {
                get: function () {
                    var t = this._stage1;
                    return null == t ? 0 : o.ObjUtil.getNumber(t, "api_disp_seiku")
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(r.AirWarDataBase);
    e.AirUnitData = s
}