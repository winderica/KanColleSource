const function268 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(24),
        r = i(103),
        s = i(534),
        a = i(17),
        _ = function () {
            function t() {
                this._bgm = new l, this._se = new u, this._voice = new s.VoiceManagerHolder
            }
            return Object.defineProperty(t.prototype, "bgm", {
                get: function () {
                    return this._bgm
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "se", {
                get: function () {
                    return this._se
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "voice", {
                get: function () {
                    return this._voice
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.SoundManager = _;
    var l = function () {
            function t() {
                this._bgm_id = 0, this._bgm = null
            }
            return Object.defineProperty(t.prototype, "bgm_id", {
                get: function () {
                    return this._bgm_id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "playing", {
                get: function () {
                    return null != this._bgm
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.playBattleBGM = function (t, e, i, n) {
                void 0 === e && (e = !0), void 0 === i && (i = 0), void 0 === n && (n = null), this.play(t, e, i, "battle", n)
            }, t.prototype.play = function (t, e, i, s, _) {
                if (void 0 === e && (e = !0), void 0 === i && (i = 0), void 0 === s && (s = "port"), void 0 === _ && (_ = null), (null == this._bgm || this._bgm_id != t) && s) {
                    this.stop(), this._bgm_id = t;
                    var l = n.default.option.vol_bgm / 100;
                    if (0 != l) {
                        var u = o.MathUtil.zeroPadding(t, 3),
                            c = r.SuffixUtil.create(t, "bgm_" + s),
                            h = u + "_" + c,
                            p = n.default.settings.path_root + "resources/bgm/" + s + "/" + h + ".mp3",
                            d = {
                                src: [p],
                                html5: a.HTML5_AUDIO,
                                onend: _
                            };
                        d.autoplay = !0, d.loop = e, i > 0 ? (d.volume = 0, this._bgm = new Howl(d), this._bgm.fade(0, l, i)) : (d.volume = l, this._bgm = new Howl(d))
                    }
                }
            }, t.prototype.stop = function () {
                null != this._bgm && (this._bgm.stop(), this._bgm.unload(), this._bgm = null)
            }, t.prototype.fadeOut = function (t) {
                var e = this;
                if (null != this._bgm && 1 == this._bgm.playing()) {
                    var i = this._bgm.volume();
                    this._bgm.fade(i, 0, t);
                    var n = this._bgm;
                    setTimeout(function () {
                        n.stop(), n.unload(), n == e._bgm && (e._bgm = null)
                    }, t)
                }
            }, t.prototype.changeVolume = function (t) {
                if (null == this._bgm) return !1;
                this._bgm.volume(t / 100)
            }, t
        }(),
        u = function () {
            function t() {}
            return t.prototype.play = function (t) {
                if (0 != n.default.option.vol_se) {
                    var e, i = {
                        src: [t]
                    };
                    i.autoplay = !0, i.volume = n.default.option.vol_se / 100, i.onend = function () {
                        e && (e.unload(), e = null)
                    }, e = new Howl(i)
                }
            }, t
        }()
}