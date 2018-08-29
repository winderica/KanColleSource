/*
 * the function called by `526.js`
 * voice
 */
const function527 = function (t, e, i) {
    "use strict";

    const a = i(0), _ = i(267), u = i(23), l = i(76), c = i(528);

    /*
     * get voice file path
     * `t`: voice type | ship id?
     * `e`: voice id?
     */
    function n(t, e) {
        var i = parseInt(t, 10);
        if (1 == isNaN(i)) {
            if ("tutorial" != t) {
                var n = parseInt(e, 10);
                e = u.MathUtil.zeroPadding(n, 3)
            }
            return a.default.settings.path_root + "resources/voice/" + t + "/" + e + ".mp3"
        }
        // /kcs/sound
        var o = a.default.settings.voice_root;
        null == o && (o = a.default.settings.path_root + "resources/voice");
        var r = t, s = e;
        /*
         * 9997: 決戦ボイス
         * 9998: 深海棲艦ボイス
         * 9999: 各機能ボイス
         */
        if (9997 != i && 9998 != i && 9999 != i) {
            var l = a.default.model.ship_graph.get(t);
            if (null == l) return;
            // ship file name
            r = l.unique_key;
            var c = _, n = parseInt(e);
            /*
             * `i`: shipID 艦固有ID
             * `n`: kind 種類
             * 種類<kind>内容 - from http://nishisonic.xsrv.jp/archives/26
                1	    入手
                2~4	    母港
                5 	    建造完了
                6 	    入渠完了
                7 	    帰投
                8 	    戦績表示
                9~10	改装
                11 	    入渠(小破未満)
                12 	    入渠(中大破)
                13 	    編成
                14 	    出撃
                15~17	攻撃
                18 	    夜戦開始
                19~21	小破
                22 	    中大破
                23 	    轟沈
                24 	    勝利MVP
                25 	    ケッコンカッコカリ
                26 	    図鑑
                27 	    遠征選択時
                28 	    補給
                29 	    ケッコン後母港
                30 	    放置
                31~53	時報0~23時
             */
            s = n <= 53 ? (17 * (i + 7) * c.voice[n - 1] % 99173 + 1e5).toString() : e
        }
        return o + "/kc" + r + "/" + s + ".mp3"
    }

    /*
     * get version
     * `t`: voice type | ship id?
     * `e`: voice id?
     */
    function o(t, e) {
        var i = parseInt(t, 10);
        if (1 == isNaN(i)) return "1";
        var n = parseInt(e, 10);
        // t = 3 -> ship voice
        return l.VersionUtil.get(3, i, n)
    }

    /*
     * concat file path with version
     * `t`: voice type | ship id?
     * `e`: voice id?
     */
    function r(t, e) {
        var i = n(t, e);
        if (null == i) return null;
        var r = o(t, e);
        return null == r || "" == r || "1" == r ? i : i + "?version=" + r
    }

    var s = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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

    Object.defineProperty(e, "__esModule", { value: !0 });

    var h = function () {
        function t() {
            var t = this;
            this._num_of_simultaneous_playback = 1;
            this._onVoiceEnd = function (e) {
                var i = t._voices.indexOf(e);
                if (-1 != i) {
                    // remove `e`
                    var n = t._voices.splice(i, 1);
                    o = n[0];
                    r = o.cb_onEnd;
                    // disable voice
                    o.dispose();
                    // execute callback
                    null != r && r()
                }
            };
            // array of object `p`
            this._voices = []
        }

        // count of musics played simultaneously
        Object.defineProperty(t.prototype, "num_of_simultaneous_playback", {
            get: function () {
                return this._num_of_simultaneous_playback
            }, set: function (t) {
                this._num_of_simultaneous_playback = t
            }, enumerable: !0, configurable: !0
        });
        /*
         * preload voice
         * `t`: voice type | ship id?
         * `e`: voice id?
         */
        t.prototype.preload = function (t, e) {
            // voice volume isn't 0
            if (0 != a.default.option.vol_voice) {
                // get url
                var i = r(t, e.toString());
                if (null != i) {
                    var n = { src: [i] };
                    n.autoplay = false;
                    n.volume = 0;
                    new Howl(n)
                }
            }
        };
        /*
         * add voice to playing list and play it
         * `t`: voice type | ship id?
         * `e`: voice id?
         * `i`: callback on end?
         */
        t.prototype.play = function (t, e, i) {
            undefined === i && (i = null);
            // get url
            if (null == r(t, e.toString()))
                return null;
            if (this._voices.length >= this._num_of_simultaneous_playback) {
                // remove the first item and return it
                var n = this._voices.shift();
                // disable it
                n.dispose();
                n = null
            }
            var o = new p(this._onVoiceEnd, i);
            // add to playing list
            this._voices.push(o);
            // play it
            o.play(t, e);
            return o
        };
        /*
         * play randomly
         * `t`: voice type | ship id?
         * `e`: array of voice id?
         * `i`: possibilities of each voice (max is 100)
         * `n`: callback on end?
         */
        t.prototype.playAtRandom = function (t, e, i, n) {
            void 0 === n && (n = null);
            // `o` is sum of `i`
            for (var o = 0, r = 0; r < i.length; r++)
                o += i[r];
            for (var s = 0, a = Math.random() * o, r = 0; r < i.length; r++) {
                s += i[r];
                // closest smaller value to Math.random() * o
                if (a <= s)
                    return this.play(t, e[r], n)
            }

        };
        // stop one voice
        t.prototype.stop = function (t) {
            var e = t, i = this._voices.indexOf(e);
            return -1 != i && (this._voices.splice(i, 1), e.dispose(), !0)
        };
        // stop all
        t.prototype.stopAll = function () {
            for (var t = 0, e = this._voices; t < e.length; t++) {
                e[t].dispose()
            }
            this._voices = []
        };
        return t
    }();

    e.VoiceManager = h;

    // class p extends c.VoiceModel
    var p = function (t) {
        function e(e, i) {
            void 0 === i && (i = null);
            var n = t.call(this) || this;
            n._onLoad = function () {
                null != n._howl && n._howl.play()
            };
            n._onLoadError = function (t, e) {
                n._cb_onEndToManager(n)
            };
            n._onEnd = function (t) {
                n._cb_onEndToManager(n)
            };
            n._cb_onEndToManager = e;
            n._cb_onEnd = i;
            return n
        }

        s(e, t);
        // getter of callback function
        Object.defineProperty(e.prototype, "cb_onEnd", {
            get: function () {
                return this._cb_onEnd
            }, enumerable: !0, configurable: !0
        });
        // play
        e.prototype.play = function (t, e) {
            this._mst_id = t;
            this._voice_id = e.toString();
            // voice volume is 0
            if (0 == a.default.option.vol_voice)
                // disable it and return undefined
                return void this._cb_onEndToManager(this);
            this._url = r(this._mst_id, this._voice_id);
            // Howl config
            var i = { src: [this._url] };
            i.autoplay = false;
            i.volume = a.default.option.vol_voice / 100;
            i.onload = this._onLoad; // function fires when the sound is loaded.
            i.onloaderror = this._onLoadError; // fires when the sound is unable to load.
            i.onend = this._onEnd; // fires when the sound finishes playing (if it is looping, it'll fire at the end of each loop).
            this._howl = new Howl(i)
        };
        // disable
        e.prototype.dispose = function () {
            null != this._howl && (this._howl.stop(), this._howl.unload());
            this._howl = null;
            this._cb_onEndToManager = null;
            this._cb_onEnd = null;
        };
        return e
    }(c.VoiceModel)
}