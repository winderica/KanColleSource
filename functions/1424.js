const function1424 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t(t) {
                this._list = new Array;
                for (var e = n.ObjUtil.getNumArray(t, "api_at_eflag"), i = n.ObjUtil.getNumArray(t, "api_at_type"), o = n.ObjUtil.getNumArray(t, "api_at_list"), s = n.ObjUtil.getObjectArray(t, "api_df_list"), a = n.ObjUtil.getObjectArray(t, "api_si_list"), _ = n.ObjUtil.getObjectArray(t, "api_cl_list"), l = n.ObjUtil.getObjectArray(t, "api_damage"), u = 0; u < s.length; u++) {
                    var c = e[u],
                        h = i[u],
                        p = o[u],
                        d = s[u],
                        f = a[u],
                        y = _[u],
                        m = l[u],
                        v = new r(c, h, p, d, f, y, m);
                    this._list.push(v)
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
    e.HougekiListData = o;
    var r = function () {
        function t(t, e, i, n, o, r, s) {
            this._flag = t, this._type = e, this._a_index = i, this._d_indexes = n, this._slotitems = o, this._hit_types = r, this._damages = s
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
    e.HougekiData = r
}