const function165 = function (t, e, i) {
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
    var o = i(0),
        r = i(17),
        s = i(704),
        a = i(705),
        _ = i(706),
        l = i(324),
        u = i(325),
        c = i(326);
    ! function (t) {
        function e() {
            switch (r.MAMIYA_IRAKO_SEASON) {
                case 4:
                    i = new m;
                    break;
                case 3:
                    i = new y;
                    break;
                case 2:
                    i = new f;
                    break;
                case 1:
                    i = new d;
                    break;
                default:
                    i = new p
            }
            return i
        }
        t.EXTENDS_MAX = 15, t.MAMIYA_DIALOG_VOICE = [
            [11, 12],
            [50, 50]
        ], t.IRAKO_DIALOG_VOICE = [
            [13, 14],
            [50, 50]
        ], t.MAMIYA_AND_IRAKO_DIALOG_VOICE = [
            [15, 16],
            [50, 50]
        ], t.MAMIYA_MAX_EFFECT = 24, t.MAMIYA_EFFECT_WAIT = 100 * (t.MAMIYA_MAX_EFFECT / 2 - 1) + 400;
        var i = null;
        t.getMamiyaOption = e
    }(e.OrganizeConst || (e.OrganizeConst = {}));
    var h = function () {
        function t() {}
        return t.prototype.playVoiceDialogMamiya = function () {
            o.default.sound.voice.playAtRandom("9999", [11, 12], [50, 50])
        }, t.prototype.playVoiceDialogIrako = function () {
            o.default.sound.voice.playAtRandom("9999", [13, 14], [50, 50])
        }, t.prototype.playVoiceDialogMamiyaIrako = function () {
            o.default.sound.voice.playAtRandom("9999", [15, 16], [50, 50])
        }, t.prototype.playVoiceAnimationMamiya = function () {
            o.default.sound.voice.playAtRandom("9999", [21, 22], [50, 50])
        }, t.prototype.playVoiceAnimationIrako = function () {
            o.default.sound.voice.playAtRandom("9999", [23, 24], [50, 50])
        }, t.prototype.playVoiceAnimationMamiyaIrako = function () {
            o.default.sound.voice.playAtRandom("9999", [25, 26], [50, 50])
        }, t
    }();
    e.MamiyaOption = h;
    var p = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._DIALOG = s.ORGANIZE_HOKYU_DIALOG_DEFAULT, e._ANIMATION = l.ORGANIZE_MAMIYA_ANIMATION_DEFAULT, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "res_info3", {
                get: function () {
                    return this._DIALOG.getTexture(6)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info4", {
                get: function () {
                    return this._DIALOG.getTexture(7)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info5", {
                get: function () {
                    return this._DIALOG.getTexture(8)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info6", {
                get: function () {
                    return this._DIALOG.getTexture(9)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_mamiya", {
                get: function () {
                    return this._DIALOG.getTexture(4)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_mamiya_g", {
                get: function () {
                    return this._DIALOG.getTexture(5)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_irako", {
                get: function () {
                    return this._DIALOG.getTexture(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_irako_g", {
                get: function () {
                    return this._DIALOG.getTexture(1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_m_i", {
                get: function () {
                    return this._DIALOG.getTexture(2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_m_i_g", {
                get: function () {
                    return this._DIALOG.getTexture(3)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_mamiya", {
                get: function () {
                    return this._ANIMATION.getTexture(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_irako", {
                get: function () {
                    return this._ANIMATION.getTexture(1)
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(h),
        d = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._DIALOG = s.ORGANIZE_HOKYU_DIALOG_DEFAULT, e._ANIMATION = l.ORGANIZE_MAMIYA_ANIMATION_DEFAULT, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "res_info3", {
                get: function () {
                    return this._DIALOG.getTexture(6)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info4", {
                get: function () {
                    return this._DIALOG.getTexture(7)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info5", {
                get: function () {
                    return this._DIALOG.getTexture(8)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info6", {
                get: function () {
                    return this._DIALOG.getTexture(9)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_mamiya", {
                get: function () {
                    return this._DIALOG.getTexture(4)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_mamiya_g", {
                get: function () {
                    return this._DIALOG.getTexture(5)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_irako", {
                get: function () {
                    return this._DIALOG.getTexture(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_irako_g", {
                get: function () {
                    return this._DIALOG.getTexture(1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_m_i", {
                get: function () {
                    return this._DIALOG.getTexture(2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_m_i_g", {
                get: function () {
                    return this._DIALOG.getTexture(3)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_mamiya", {
                get: function () {
                    return this._ANIMATION.getTexture(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_irako", {
                get: function () {
                    return this._ANIMATION.getTexture(1)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.playVoiceDialogMamiya = function () {
                o.default.sound.voice.playAtRandom("9999", [27, 12], [50, 50])
            }, e.prototype.playVoiceDialogIrako = function () {
                o.default.sound.voice.playAtRandom("9999", [28, 14], [50, 50])
            }, e
        }(h),
        f = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._DIALOG = a.ORGANIZE_HOKYU_DIALOG_XMAS, e._ANIMATION = u.ORGANIZE_MAMIYA_ANIMATION_XMAS, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "res_info3", {
                get: function () {
                    return this._DIALOG.getTexture(6)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info4", {
                get: function () {
                    return this._DIALOG.getTexture(7)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info5", {
                get: function () {
                    return this._DIALOG.getTexture(8)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info6", {
                get: function () {
                    return this._DIALOG.getTexture(9)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_mamiya", {
                get: function () {
                    return this._DIALOG.getTexture(4)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_mamiya_g", {
                get: function () {
                    return this._DIALOG.getTexture(5)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_irako", {
                get: function () {
                    return this._DIALOG.getTexture(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_irako_g", {
                get: function () {
                    return this._DIALOG.getTexture(1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_m_i", {
                get: function () {
                    return this._DIALOG.getTexture(2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_m_i_g", {
                get: function () {
                    return this._DIALOG.getTexture(3)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_mamiya", {
                get: function () {
                    return this._ANIMATION.getTexture(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_irako", {
                get: function () {
                    return this._ANIMATION.getTexture(1)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.playVoiceDialogMamiya = function () {
                o.default.sound.voice.playAtRandom("9999", [17, 12], [50, 50])
            }, e.prototype.playVoiceDialogIrako = function () {
                o.default.sound.voice.playAtRandom("9999", [18, 14], [50, 50])
            }, e.prototype.playVoiceAnimationMamiyaIrako = function () {
                o.default.sound.voice.playAtRandom("9999", [17, 18], [50, 50])
            }, e
        }(h),
        y = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._DIALOG = s.ORGANIZE_HOKYU_DIALOG_DEFAULT, e._ANIMATION = l.ORGANIZE_MAMIYA_ANIMATION_DEFAULT, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "res_info3", {
                get: function () {
                    return this._DIALOG.getTexture(6)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info4", {
                get: function () {
                    return this._DIALOG.getTexture(7)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info5", {
                get: function () {
                    return this._DIALOG.getTexture(8)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info6", {
                get: function () {
                    return this._DIALOG.getTexture(9)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_mamiya", {
                get: function () {
                    return this._DIALOG.getTexture(4)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_mamiya_g", {
                get: function () {
                    return this._DIALOG.getTexture(5)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_irako", {
                get: function () {
                    return this._DIALOG.getTexture(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_irako_g", {
                get: function () {
                    return this._DIALOG.getTexture(1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_m_i", {
                get: function () {
                    return this._DIALOG.getTexture(2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_m_i_g", {
                get: function () {
                    return this._DIALOG.getTexture(3)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_mamiya", {
                get: function () {
                    return this._ANIMATION.getTexture(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_irako", {
                get: function () {
                    return this._ANIMATION.getTexture(1)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.playVoiceDialogMamiya = function () {
                o.default.sound.voice.playAtRandom("9999", [37, 12], [50, 50])
            }, e.prototype.playVoiceDialogIrako = function () {
                o.default.sound.voice.playAtRandom("9999", [38, 14], [50, 50])
            }, e
        }(h),
        m = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._DIALOG = _.ORGANIZE_HOKYU_DIALOG_SUMMER, e._ANIMATION = c.ORGANIZE_MAMIYA_ANIMATION_SUMMER, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "res_info3", {
                get: function () {
                    return this._DIALOG.getTexture(6)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info4", {
                get: function () {
                    return this._DIALOG.getTexture(7)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info5", {
                get: function () {
                    return this._DIALOG.getTexture(8)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_info6", {
                get: function () {
                    return this._DIALOG.getTexture(9)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_mamiya", {
                get: function () {
                    return this._DIALOG.getTexture(4)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_mamiya_g", {
                get: function () {
                    return this._DIALOG.getTexture(5)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_irako", {
                get: function () {
                    return this._DIALOG.getTexture(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_irako_g", {
                get: function () {
                    return this._DIALOG.getTexture(1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_m_i", {
                get: function () {
                    return this._DIALOG.getTexture(2)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_btn_m_i_g", {
                get: function () {
                    return this._DIALOG.getTexture(3)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_mamiya", {
                get: function () {
                    return this._ANIMATION.getTexture(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "res_irako", {
                get: function () {
                    return this._ANIMATION.getTexture(1)
                },
                enumerable: !0,
                configurable: !0
            }), e
        }(h)
}