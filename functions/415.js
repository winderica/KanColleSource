const function415 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(7),
        r = i(409),
        s = i(246),
        a = function () {
            function t(t) {
                this._o = t, this._alert = this._initAlert()
            }
            return Object.defineProperty(t.prototype, "id", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_no", -1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "title", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_title")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "description", {
                get: function () {
                    return o.ObjUtil.getString(this._o, "api_detail")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "category", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_category", 1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "fuel", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_get_material");
                    return null == t || t.length < 1 ? 0 : t[0]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ammo", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_get_material");
                    return null == t || t.length < 2 ? 0 : t[1]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "steel", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_get_material");
                    return null == t || t.length < 3 ? 0 : t[2]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "baux", {
                get: function () {
                    var t = o.ObjUtil.getNumArray(this._o, "api_get_material");
                    return null == t || t.length < 4 ? 0 : t[3]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "progress", {
                get: function () {
                    var t = o.ObjUtil.getNumber(this._o, "api_progress_flag_", -1);
                    return -1 == t ? this._getRawProgress() : t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "type", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_type")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "status", {
                get: function () {
                    var t = o.ObjUtil.getNumber(this._o, "api_state_", -1);
                    return -1 == t ? this._getRawStatus() : t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "hasVoiceID", {
                get: function () {
                    return o.ObjUtil.getNumber(this._o, "api_voice_id", 0) > 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "voiceID", {
                get: function () {
                    switch (o.ObjUtil.getNumber(this._o, "api_no", -1)) {
                        case 190:
                            for (var t = void 0, e = void 0, i = 1; i <= n.default.model.deck.getAll().length; i++) {
                                t = 0, e = !1;
                                var r = n.default.model.deck.get(i),
                                    s = r.getCount();
                                if (4 == s) {
                                    for (var a = 0; a < s; a++) switch (r.getShipModel(a).yomi) {
                                        case "\u308f\u304b\u3070":
                                        case "\u306f\u3064\u306f\u308b":
                                        case "\u306f\u3064\u3057\u3082":
                                            t++;
                                            break;
                                        case "\u306d\u306e\u3072":
                                            e = !0
                                    }
                                    if (3 == t && e) break
                                }
                            }
                            return e ? 1101 : o.ObjUtil.getNumber(this._o, "api_voice_id", 0);
                        default:
                            return o.ObjUtil.getNumber(this._o, "api_voice_id", 0)
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "alert", {
                get: function () {
                    return this._alert
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.hasBonus = function () {
                return 0 != o.ObjUtil.getNumber(this._o, "api_bonus_flag")
            }, t.prototype.hasShipBonus = function () {
                return 2 == o.ObjUtil.getNumber(this._o, "api_bonus_flag")
            }, t.prototype.isValid = function () {
                return 0 == o.ObjUtil.getNumber(this._o, "api_invalid_flag")
            }, t.prototype.getNeedMedalCount = function () {
                return o.ObjUtil.getNumber(this._o, "api_lost_badges")
            }, t.prototype.getRewardCandidates = function () {
                var t = o.ObjUtil.getObjectArray(this._o, "api_select_rewards");
                if (null == t) return null;
                for (var e = [], i = 0, n = t; i < n.length; i++) {
                    for (var s = n[i], a = [], _ = 0, l = s; _ < l.length; _++) {
                        var u = l[_];
                        a.push(new r.SelectableRewardModel(u))
                    }
                    e.push(a)
                }
                return e
            }, t.prototype._getRawProgress = function () {
                return o.ObjUtil.getNumber(this._o, "api_progress_flag")
            }, t.prototype._getRawStatus = function () {
                return o.ObjUtil.getNumber(this._o, "api_state")
            }, t.prototype._initAlert = function () {
                if (1 == this.hasShipBonus()) {
                    if (n.default.model.basic.shipMax - n.default.model.ship.num < 1) return 1;
                    if (n.default.model.basic.slotMax - n.default.model.slot.num < 5) return 1
                }
                return 0 == this.isValid() ? 318 == this.id ? 5 : 683 == this.id || 684 == this.id || 685 == this.id || 686 == this.id || 687 == this.id || 620 == this.id || 621 == this.id ? 4 : this.getNeedMedalCount() > 0 ? 4 : s.BUTAI_SAIHENSEI.indexOf(this.id) >= 0 ? 3 : 2 : 0
            }, t
        }();
    e.DutyModel = a
}