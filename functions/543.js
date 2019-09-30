const function543 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(264),
        o = function () {
            function t() {
                this._KEY_VOL_BGM = "vol_bgm", this._KEY_VOL_SE = "vol_se", this._KEY_VOL_VOICE = "vol_voice", this._KEY_V_BELEFT = "v_be_left", this._KEY_V_DUTY = "v_duty"
            }
            return Object.defineProperty(t.prototype, "vol_bgm", {
                get: function () {
                    return this._vol_bgm
                },
                set: function (t) {
                    this._vol_bgm = Math.min(100, Math.max(0, Math.round(t)))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "vol_se", {
                get: function () {
                    return this._vol_se
                },
                set: function (t) {
                    this._vol_se = Math.min(100, Math.max(0, Math.round(t)))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "vol_voice", {
                get: function () {
                    return this._vol_voice
                },
                set: function (t) {
                    this._vol_voice = Math.min(100, Math.max(0, Math.round(t)))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "voice_be_left", {
                get: function () {
                    return this._voice_be_left
                },
                set: function (t) {
                    this._voice_be_left = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "voice_duty", {
                get: function () {
                    return this._voice_duty
                },
                set: function (t) {
                    this._voice_duty = t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.initialize = function () {
                this.vol_bgm = this.__vol_bgm__, this.vol_se = this.__vol_se__, this.vol_voice = this.__vol_voice__, this.voice_be_left = this.__v_beleft__, this.voice_duty = this.__v_duty__
            }, t.prototype.save = function () {
                var t = this.__vol_bgm__;
                t != this.vol_bgm && n.CookieUtil.setItem(this._KEY_VOL_BGM, this.vol_bgm.toString(), 1 / 0), t = this.__vol_se__, t != this.vol_se && n.CookieUtil.setItem(this._KEY_VOL_SE, this.vol_se.toString(), 1 / 0), (t = this.__vol_voice__) != this.vol_voice && n.CookieUtil.setItem(this._KEY_VOL_VOICE, this.vol_voice.toString(), 1 / 0);
                var e = this.__v_beleft__;
                e != this.voice_be_left && n.CookieUtil.setItem(this._KEY_V_BELEFT, this.voice_be_left ? "1" : "0", 1 / 0), (e = this.__v_duty__) != this.voice_duty && n.CookieUtil.setItem(this._KEY_V_DUTY, this.voice_duty ? "1" : "0", 1 / 0)
            }, Object.defineProperty(t.prototype, "_log_string", {
                get: function () {
                    return "bgm:" + this.vol_bgm + " se:" + this.vol_se + " voice:" + this.vol_voice + " \u653e\u7f6e:" + this._voice_be_left + " \u4efb\u52d9:" + this._voice_duty
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "__vol_bgm__", {
                get: function () {
                    return this._getNumValue(this._KEY_VOL_BGM, 30)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "__vol_se__", {
                get: function () {
                    return this._getNumValue(this._KEY_VOL_SE, 40)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "__vol_voice__", {
                get: function () {
                    return this._getNumValue(this._KEY_VOL_VOICE, 60)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "__v_beleft__", {
                get: function () {
                    return this._getBoolValue(this._KEY_V_BELEFT, !0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "__v_duty__", {
                get: function () {
                    return this._getBoolValue(this._KEY_V_DUTY, !0)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype._getNumValue = function (t, e) {
                if (1 == n.CookieUtil.hasItem(t)) {
                    var i = parseInt(n.CookieUtil.getItem(t));
                    if (0 == isNaN(i)) return i
                }
                return e
            }, t.prototype._getBoolValue = function (t, e) {
                return 1 == n.CookieUtil.hasItem(t) ? "1" == n.CookieUtil.getItem(t) : e
            }, t
        }();
    e.OptionModel = o
}