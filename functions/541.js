const function541 = function (t, e, i) {
    "use strict";

    function n(t, e) {
        var i = parseInt(t, 10);
        if (1 == isNaN(i)) {
            if ("tutorial" != t) {
                var n = parseInt(e, 10);
                e = u.MathUtil.zeroPadding(n, 3)
            }
            return a.default.settings.path_root + "resources/voice/" + t + "/" + e + ".mp3"
        }
        var o = a.default.settings.voice_root;
        null == o && (o = a.default.settings.path_root + "resources/voice");
        var r = t,
            s = e;
        if (9997 != i && 9998 != i && 9999 != i) {
            var l = a.default.model.ship_graph.get(t);
            if (null == l) return;
            r = l.unique_key;
            var c = _,
                n = parseInt(e);
            s = n <= 53 ? (17 * (i + 7) * c.voice[n - 1] % 99173 + 1e5).toString() : e
        }
        return o + "/kc" + r + "/" + s + ".mp3"
    }

    function o(t, e) {
        var i = parseInt(t, 10);
        if (1 == isNaN(i)) return "1";
        var n = parseInt(e, 10);
        return l.VersionUtil.get(3, i, n)
    }

    function r(t, e) {
        var i = n(t, e);
        if (null == i) return null;
        var r = o(t, e);
        return null == r || "" == r || "1" == r ? i : i + "?version=" + r
    }
    var s = this && this.__extends || function () {
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
    var a = i(0),
        _ = i(265),
        u = i(25),
        l = i(79),
        c = i(542),
        h = function () {
            function t() {
                var t = this;
                this._num_of_simultaneous_playback = 1, this._onVoiceEnd = function (e) {
                    var i = t._voices.indexOf(e);
                    if (-1 != i) {
                        var n = t._voices.splice(i, 1),
                            o = n[0],
                            r = o.cb_onEnd;
                        o.dispose(), null != r && r()
                    }
                }, this._voices = []
            }
            return Object.defineProperty(t.prototype, "num_of_simultaneous_playback", {
                get: function () {
                    return this._num_of_simultaneous_playback
                },
                set: function (t) {
                    this._num_of_simultaneous_playback = t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.preload = function (t, e) {
                if (0 != a.default.option.vol_voice) {
                    var i = r(t, e.toString());
                    if (null != i) {
                        var n = {
                            src: [i]
                        };
                        n.autoplay = !1, n.volume = 0;
                        var o = new Howl(n);
                        o.once("load", function () {
                            o.unload()
                        })
                    }
                }
            }, t.prototype.play = function (t, e, i) {
                if (void 0 === i && (i = null), null == r(t, e.toString())) return null;
                if (this._voices.length >= this._num_of_simultaneous_playback) {
                    var n = this._voices.shift();
                    n.dispose(), n = null
                }
                var o = new p(this._onVoiceEnd, i);
                return this._voices.push(o), o.play(t, e), o
            }, t.prototype.playAtRandom = function (t, e, i, n) {
                void 0 === n && (n = null);
                for (var o = 0, r = 0; r < i.length; r++) o += i[r];
                for (var s = 0, a = Math.random() * o, r = 0; r < i.length; r++)
                    if (s += i[r], a <= s) return this.play(t, e[r], n)
            }, t.prototype.stop = function (t) {
                var e = t,
                    i = this._voices.indexOf(e);
                return -1 != i && (this._voices.splice(i, 1), e.dispose(), !0)
            }, t.prototype.stopAll = function () {
                for (var t = 0, e = this._voices; t < e.length; t++) {
                    e[t].dispose()
                }
                this._voices = []
            }, t
        }();
    e.VoiceManager = h;
    var p = function (t) {
        function e(e, i) {
            void 0 === i && (i = null);
            var n = t.call(this) || this;
            return n._onLoad = function () {
                null != n._howl && n._howl.play()
            }, n._onLoadError = function (t, e) {
                n._cb_onEndToManager && n._cb_onEndToManager(n)
            }, n._onEnd = function (t) {
                n._cb_onEndToManager && n._cb_onEndToManager(n)
            }, n._cb_onEndToManager = e, n._cb_onEnd = i, n
        }
        return s(e, t), Object.defineProperty(e.prototype, "cb_onEnd", {
            get: function () {
                return this._cb_onEnd
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.play = function (t, e) {
            if (this._mst_id = t, this._voice_id = e.toString(), 0 == a.default.option.vol_voice) return void this._cb_onEndToManager(this);
            this._url = r(this._mst_id, this._voice_id);
            var i = {
                src: [this._url]
            };
            i.autoplay = !1, i.volume = a.default.option.vol_voice / 100, i.onload = this._onLoad, i.onloaderror = this._onLoadError, i.onend = this._onEnd, this._howl = new Howl(i)
        }, e.prototype.dispose = function () {
            null != this._howl && (this._howl.stop(), this._howl.unload()), this._howl = null, this._cb_onEndToManager = null, this._cb_onEnd = null
        }, e
    }(c.VoiceModel)
}