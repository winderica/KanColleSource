const function186 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = i(1431),
        r = function () {
            function t(t) {
                this._o = t, this._plane_count_f = new s(!0, this._stage1, this._stage2), this._plane_count_e = new s(!1, this._stage1, this._stage2);
                var e = n.ObjUtil.getObject(t, "api_stage3");
                e = null == e ? {} : e;
                var i = n.ObjUtil.getObject(t, "api_stage3_combined");
                this._stage3_f = new o.AirWarStage3Model(!0, e, i), this._stage3_e = new o.AirWarStage3Model(!1, e, i)
            }
            return Object.defineProperty(t.prototype, "plane_from_f", {
                get: function () {
                    return this._plane_from_f
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "plane_from_e", {
                get: function () {
                    return this._plane_from_e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "plane_count_f", {
                get: function () {
                    return this._plane_count_f
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "plane_count_e", {
                get: function () {
                    return this._plane_count_e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "stage3_f", {
                get: function () {
                    return this._stage3_f
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "stage3_e", {
                get: function () {
                    return this._stage3_e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "_stage1", {
                get: function () {
                    return n.ObjUtil.getObject(this._o, "api_stage1")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "_stage2", {
                get: function () {
                    return n.ObjUtil.getObject(this._o, "api_stage2")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getTouchPlaneFriend = function () {
                if (null == this._stage1) return -1;
                var t = n.ObjUtil.getNumArray(this._stage1, "api_touch_plane");
                return null == t || t.length < 1 ? -1 : t[0]
            }, t.prototype.getTouchPlaneEnemy = function () {
                if (null == this._stage1) return -1;
                var t = n.ObjUtil.getNumArray(this._stage1, "api_touch_plane");
                return null == t || t.length < 2 ? -1 : t[1]
            }, t.prototype.getTaikuShipIndex = function () {
                var t = this._stage2;
                return null == t ? -1 : (t = n.ObjUtil.getObject(t, "api_air_fire"), null == t ? -1 : n.ObjUtil.getNumber(t, "api_idx", -1))
            }, t.prototype.getTaikuSlotMstIDs = function () {
                var t = this._stage2;
                return null == t ? null : (t = n.ObjUtil.getObject(t, "api_air_fire"), null == t ? null : n.ObjUtil.getNumArray(t, "api_use_items"))
            }, t.prototype.hasStage3Data = function () {
                return null != this._o && this._o.hasOwnProperty("api_stage3")
            }, t.prototype._initPlaneFrom = function () {
                var t = n.ObjUtil.getObjectArray(this._o, "api_plane_from");
                if (null == t) this._plane_from_f = [], this._plane_from_e = [];
                else {
                    t.length > 0 && (this._plane_from_f = t[0], null == this._plane_from_f && (this._plane_from_f = [])), t.length > 1 && (this._plane_from_e = t[1], null == this._plane_from_e && (this._plane_from_e = []));
                    for (var e = 0; e < this._plane_from_f.length; e++) this._plane_from_f[e]--;
                    for (var e = 0; e < this._plane_from_e.length; e++) this._plane_from_e[e]--
                }
            }, t
        }();
    e.AirWarDataBase = r;
    var s = function () {
        function t(t, e, i) {
            this._friend = t, this._stage1 = e, this._stage2 = i
        }
        return Object.defineProperty(t.prototype, "count", {
            get: function () {
                var t = this._stage1;
                if (null == t) return 0;
                var e = this._friend ? "api_f_count" : "api_e_count";
                return n.ObjUtil.getNumber(t, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "lost_count_stage1", {
            get: function () {
                var t = this._stage1;
                if (null == t) return 0;
                var e = this._friend ? "api_f_lostcount" : "api_e_lostcount";
                return n.ObjUtil.getNumber(t, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "count_stage1", {
            get: function () {
                return this.count - this.lost_count_stage1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "lost_count_stage2", {
            get: function () {
                var t = this._stage2;
                if (null == t) return 0;
                var e = this._friend ? "api_f_lostcount" : "api_e_lostcount";
                return n.ObjUtil.getNumber(t, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "count_stage2", {
            get: function () {
                return this.count_stage1 - this.lost_count_stage2
            },
            enumerable: !0,
            configurable: !0
        }), t
    }();
    e.PlaneCountData = s
}