const function920 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(7),
        o = function () {
            function t() {}
            return Object.defineProperty(t.prototype, "matching_type", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_create_kind", 2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "matching_type_next", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_selected_kind", 2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rivals", {
                get: function () {
                    return this._rivals
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "remain_time", {
                get: function () {
                    return n.ObjUtil.getNumber(this._o, "api_entry_limit", 0)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setData = function (t) {
                this._o = t, this._rivals = new Array;
                var e = n.ObjUtil.getObjectArray(this._o, "api_list");
                if (null == e) this._rivals = [];
                else
                    for (var i = 0, o = e; i < o.length; i++) {
                        var s = o[i],
                            a = new r(s);
                        this._rivals.push(a)
                    }
            }, t
        }();
    e.PracticeAPIModel = o;
    var r = function () {
        function t(t) {
            this._o = t
        }
        return Object.defineProperty(t.prototype, "id", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_enemy_id")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "name", {
            get: function () {
                return n.ObjUtil.getString(this._o, "api_enemy_name")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "level", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_enemy_level")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "rank_name", {
            get: function () {
                return n.ObjUtil.getString(this._o, "api_enemy_rank")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "flag", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_enemy_flag")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "flagShipMstID", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_enemy_flag_ship")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "comment", {
            get: function () {
                return n.ObjUtil.getString(this._o, "api_enemy_comment")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "state", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_state")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "medal_num", {
            get: function () {
                return n.ObjUtil.getNumber(this._o, "api_medals")
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.isNoBattle = function () {
            return 0 == this.state
        }, t
    }();
    e.RivalModel = r
}