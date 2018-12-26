const function241 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(1216),
        o = function () {
            function t(t) {
                this._supplied = -1, this._use_ration = -1, this._gauge_now = 0, this._gauge_max = 0, this._stage = 1, this.m1 = 0, this._gekimetsu_data = null, this._practice = t, this._map_info = new r, this._ship_info = new s
            }
            return Object.defineProperty(t.prototype, "map_info", {
                get: function () {
                    return this._map_info
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ship_info", {
                get: function () {
                    return this._ship_info
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "flag", {
                get: function () {
                    return this._flag
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "supplied", {
                get: function () {
                    return this._supplied
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "use_ration", {
                get: function () {
                    return this._use_ration
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gauge_now", {
                get: function () {
                    return this._gauge_now
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gauge_max", {
                get: function () {
                    return this._gauge_max
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "stage", {
                get: function () {
                    return this._stage
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gauge_type", {
                get: function () {
                    return this._gauge_type
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "deck_f", {
                get: function () {
                    return this._deck_f
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "deck_e", {
                get: function () {
                    return this._deck_e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "actual_survey_time", {
                get: function () {
                    return this._actual_survey_time
                },
                set: function (t) {
                    this._actual_survey_time = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "prediction_time", {
                get: function () {
                    return this._prediction_time
                },
                set: function (t) {
                    this._prediction_time = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "gekimetsu_data", {
                get: function () {
                    return this._gekimetsu_data
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.updateDeckData = function (t, e) {
                this._deck_f = t, this._deck_e = e
            }, t.prototype.setMapData = function (t, e, i) {
                this._flag = t, this._supplied = e, this._use_ration = i
            }, t.prototype.setMapGaugeInfo = function (t, e, i, n) {
                this._gauge_now = t, this._gauge_max = e, this._gauge_type = i, this._stage = n
            }, t.prototype.setGekimetsuData = function (t) {
                this._gekimetsu_data = t
            }, t.prototype.isPractice = function () {
                return this._practice
            }, t
        }();
    e.BattleSceneModel = o;
    var r = function () {
            function t() {
                this._area_id = 0, this._map_no = 0, this._cell_no = 0, this._boss = !1, this._type = 1
            }
            return Object.defineProperty(t.prototype, "area_id", {
                get: function () {
                    return this._area_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "map_no", {
                get: function () {
                    return this._map_no
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "cell_no", {
                get: function () {
                    return this._cell_no
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.init = function (t, e, i, n, o) {
                this._area_id = t, this._map_no = e, this._cell_no = i, this._boss = n, this._type = o
            }, t.prototype.isBoss = function () {
                return this._boss
            }, t.prototype.isNightStart = function () {
                return 2 == this._type || this.isNightToDayStart()
            }, t.prototype.isNightToDayStart = function () {
                return 3 == this._type || 7 == this._type
            }, t.prototype.isAirBattle = function () {
                return 4 == this._type
            }, t.prototype.isVS12 = function () {
                return 5 == this._type || 7 == this._type
            }, t.prototype.isAirRaid = function () {
                return 6 == this._type
            }, t
        }(),
        s = function () {
            function t() {
                this._list = []
            }
            return t.prototype.add = function (t, e) {
                var i = new n.DeckInstantModel;
                i.addList(t);
                var o = new n.DeckInstantModel;
                o.addList(e);
                var r = {
                    f: i,
                    e: o
                };
                this._list.push(r)
            }, t.prototype.getFirstData = function (t) {
                if (null == this._list) return null;
                if (0 == this._list.length) return null;
                var e = this._list[0];
                return t ? e.f : e.e
            }, t.prototype.getLastData = function (t) {
                if (null == this._list) return null;
                if (0 == this._list.length) return null;
                var e = this._list.length,
                    i = this._list[e - 1];
                return t ? i.f : i.e
            }, t
        }()
}