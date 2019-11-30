const function382 = function (t, e, i) {
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
    var o = i(15),
        r = i(242),
        s = function (t) {
            function e(e) {
                return t.call(this, e) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "nickname", {
                get: function () {
                    return this._nickname
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "comment", {
                get: function () {
                    return this._comment
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "level", {
                get: function () {
                    return this._level
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "rank", {
                get: function () {
                    return this._rank
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "experience_now", {
                get: function () {
                    return this._experience_now
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "experience_next", {
                get: function () {
                    return this._experience_next
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "warWin", {
                get: function () {
                    return this._war_win
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "warLose", {
                get: function () {
                    return this._war_lose
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "warRate", {
                get: function () {
                    return this._war_rate
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "missionCount", {
                get: function () {
                    return this._mission_count
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "missionSuccess", {
                get: function () {
                    return this._mission_success
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "missionRate", {
                get: function () {
                    return this._mission_rate
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "practiceWin", {
                get: function () {
                    return this._practice_win
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "practiceLose", {
                get: function () {
                    return this._practice_lose
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "practiceRate", {
                get: function () {
                    return this._practice_rate
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "deckNum", {
                get: function () {
                    return this._deck
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "kDockNum", {
                get: function () {
                    return this._kdoc
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "nDockNum", {
                get: function () {
                    return this._ndoc
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shipNum", {
                get: function () {
                    return this._shipNow
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "shipMax", {
                get: function () {
                    return this._shipMax
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slotitemNum", {
                get: function () {
                    return this._slotitemNow
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "slotitemMax", {
                get: function () {
                    return this._slotitemMax
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "furnitureNum", {
                get: function () {
                    return this._furniture
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "materialMax", {
                get: function () {
                    return this._material_max
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.SetAll = function (t) {
                var e;
                this._nickname = o.ObjUtil.getString(t, "api_nickname"), this._comment = o.ObjUtil.getString(t, "api_cmt"), this._level = o.ObjUtil.getNumber(t, "api_level"), this._rank = o.ObjUtil.getNumber(t, "api_rank");
                var i = o.ObjUtil.getNumArray(t, "api_experience");
                this._experience_now = i[0], this._experience_next = i[1], i = null, e = o.ObjUtil.getNumArray(t, "api_war"), this._war_win = o.ObjUtil.getNumber(e, "api_win"), this._war_lose = o.ObjUtil.getNumber(e, "api_lose"), this._war_rate = o.ObjUtil.getString(e, "api_rate"), e = o.ObjUtil.getNumArray(t, "api_mission"), this._mission_count = o.ObjUtil.getNumber(e, "api_count"), this._mission_success = o.ObjUtil.getNumber(e, "api_success"), this._mission_rate = o.ObjUtil.getString(e, "api_rate"), e = o.ObjUtil.getNumArray(t, "api_practice"), this._practice_win = o.ObjUtil.getNumber(e, "api_win"), this._practice_lose = o.ObjUtil.getNumber(e, "api_lose"), this._practice_rate = o.ObjUtil.getString(e, "api_rate"), this._deck = o.ObjUtil.getNumber(t, "api_deck"), this._kdoc = o.ObjUtil.getNumber(t, "api_kdoc"), this._ndoc = o.ObjUtil.getNumber(t, "api_ndoc"), i = o.ObjUtil.getNumArray(t, "api_ship"), this._shipNow = i[0], this._shipMax = i[1], i = null, i = o.ObjUtil.getNumArray(t, "api_slotitem"), this._slotitemNow = i[0], this._slotitemMax = i[1], i = null, this._furniture = o.ObjUtil.getNumber(t, "api_furniture"), this._material_max = o.ObjUtil.getNumber(t, "api_material_max")
            }, e
        }(r.RecordModelBase);
    e.RecordInfoModel = s
}