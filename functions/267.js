const function267 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(23), r = i(101), s = i(529), a = function () {
        function t() {
            this._bgm = new _, this._se = new u, this._voice = new s.VoiceManagerHolder
        }

        return Object.defineProperty(t.prototype, "bgm", {
            get: function () {
                return this._bgm
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "se", {
            get: function () {
                return this._se
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "voice", {
            get: function () {
                return this._voice
            }, enumerable: !0, configurable: !0
        }), t
    }();
    e.SoundManager = a;
    var _ = function () {
        function t() {
            this._bgm_id = 0, this._bgm = null
        }

        return Object.defineProperty(t.prototype, "bgm_id", {
            get: function () {
                return this._bgm_id
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "playing", {
            get: function () {
                return null != this._bgm
            }, enumerable: !0, configurable: !0
        }), t.prototype.playBattleBGM = function (t, e, i, n) {
            void 0 === e && (e = !0), void 0 === i && (i = 0), void 0 === n && (n = null), this.play(t, e, i, "battle", n)
        }, t.prototype.play = function (t, e, i, s, a) {
            if (void 0 === e && (e = !0), void 0 === i && (i = 0), void 0 === s && (s = "port"), void 0 === a && (a = null), (null == this._bgm || this._bgm_id != t) && s) {
                this.stop(), this._bgm_id = t;
                var _ = n.default.option.vol_bgm / 100;
                if (0 != _) {
                    var u = o.MathUtil.zeroPadding(t, 3), l = r.SuffixUtil.create(t, "bgm_" + s), c = u + "_" + l,
                        h = n.default.settings.path_root + "resources/bgm/" + s + "/" + c + ".mp3",
                        p = { src: [h], onend: a };
                    p.autoplay = !0, p.loop = e, i > 0 ? (p.volume = 0, this._bgm = new Howl(p), this._bgm.fade(0, _, i)) : (p.volume = _, this._bgm = new Howl(p))
                }
            }
        }, t.prototype.stop = function () {
            null != this._bgm && (this._bgm.stop(), this._bgm.unload(), this._bgm = null, this._bgm_id = null)
        }, t.prototype.fadeOut = function (t) {
            var e = this;
            if (null != this._bgm && 1 == this._bgm.playing()) {
                var i = this._bgm.volume();
                this._bgm.fade(i, 0, t);
                var n = this._bgm;
                setTimeout(function () {
                    n.stop(), n.unload(), n == e._bgm && (e._bgm = null, e._bgm_id = null)
                }, t)
            }
        }, t.prototype.changeVolume = function (t) {
            if (null == this._bgm) return !1;
            this._bgm.volume(t / 100)
        }, t
    }(), u = function () {
        function t() {
        }

        return t.prototype.play = function (t) {
            if (0 != n.default.option.vol_se) {
                var e, i = { src: [t] };
                i.autoplay = !0, i.volume = n.default.option.vol_se / 100, i.onend = function () {
                    e && (e.unload(), e = null)
                }, e = new Howl(i)
            }
        }, t
    }()
}