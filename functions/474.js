const function474 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t) {
                this._list = [];
                var e = n.ObjUtil.getObjectArray(t, "api_df_list");
                if (null != e)
                    for (var i = n.ObjUtil.getNumArray(t, "api_at_eflag"), o = n.ObjUtil.getNumArray(t, "api_sp_list"), s = n.ObjUtil.getNumArray(t, "api_at_list"), a = n.ObjUtil.getObjectArray(t, "api_si_list"), _ = n.ObjUtil.getObjectArray(t, "api_cl_list"), u = n.ObjUtil.getObjectArray(t, "api_damage"), l = n.ObjUtil.getObjectArray(t, "api_n_mother_list"), c = 0; c < e.length; c++) {
                        var h = i[c],
                            p = o[c],
                            d = s[c],
                            f = e[c],
                            y = a[c],
                            m = _[c],
                            g = u[c],
                            v = 1 == l[c],
                            b = new r(h, p, d, f, y, m, g, v);
                        this._list.push(b)
                    }
            }
            return Object.defineProperty(t.prototype, "list", {
                get: function () {
                    return this._list
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.HougekiListNightData = o;
    var r = function () {
        function t(t, e, i, n, o, r, s, a) {
            this._flag = t, this._type = e, this._a_index = i, this._d_indexes = n, this._slotitems = o, this._hit_types = r, this._damages = s, this._yasen_kubo = a
        }
        return Object.defineProperty(t.prototype, "flag", {
            get: function () {
                return this._flag
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "type", {
            get: function () {
                return this._type
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "a_index", {
            get: function () {
                return this._a_index
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "d_indexes", {
            get: function () {
                return this._d_indexes
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "yasen_kubo", {
            get: function () {
                return this._yasen_kubo
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getSlotitem = function (t) {
            return null == this._slotitems ? -1 : this._slotitems.length <= t ? -1 : this._slotitems[t]
        }, t.prototype.getDamage = function (t) {
            return null == this._damages ? 0 : this._damages.length <= t ? 0 : Math.floor(this._damages[t])
        }, t.prototype.getHitType = function (t) {
            return null == this._hit_types ? 0 : this._hit_types.length <= t ? 0 : this._hit_types[t]
        }, t.prototype.isShield = function (t) {
            return null != this._damages && (!(this._damages.length <= t) && this._damages[t] % 1 > 0)
        }, t
    }();
    e.HougekiNightData = r
}