const function618 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function () {
            function t(t) {
                var e = this;
                this._enabled_timeSignal = !1, this._timer_handle_timeSignal = -1, this._timer_handle_preload = -1, this._timer_handle_nextTimeSignal = -1, this._onEnd = function () {
                    e._timerBeLeftVoice.enabled_byTimeSignal = !0
                }, this._timerBeLeftVoice = t
            }
            return t.prototype.initialize = function (t) {
                this._mst_id = t;
                var e = n.default.model.ship.getMst(this._mst_id);
                this._enabled_timeSignal = null != e && e.availableTimeSignalVoice, this.reset()
            }, t.prototype.stop = function () {
                -1 != this._timer_handle_timeSignal && (clearInterval(this._timer_handle_timeSignal), this._timer_handle_timeSignal = -1), -1 != this._timer_handle_preload && (clearInterval(this._timer_handle_preload), this._timer_handle_preload = -1), -1 != this._timer_handle_nextTimeSignal && (clearInterval(this._timer_handle_nextTimeSignal), this._timer_handle_nextTimeSignal = -1), this._timerBeLeftVoice.enabled_byTimeSignal = !0
            }, t.prototype.reset = function () {
                var t = this;
                if (this.stop(), 0 != this._enabled_timeSignal) {
                    var e = new Date,
                        i = e.getMinutes(),
                        n = e.getSeconds();
                    this._voicehour = e.getHours(), this._INTERVAL_sec = 60 * (59 - i) + (59 - n), this._INTERVAL_sec < 3599 && ++this._voicehour > 23 && (this._voicehour = 0), this._timer_handle_timeSignal = setTimeout(function () {
                        t._play()
                    }, 1e3 * this._INTERVAL_sec), this._INTERVAL_sec > 1800 ? this._Preload_sec = parseInt(1500 * Math.random() + (this._INTERVAL_sec - 1800) + "") : this._INTERVAL_sec < 300 ? this._Preload_sec = 0 : this._Preload_sec = parseInt(Math.random() * (this._INTERVAL_sec - 300) + ""), this._timer_handle_preload = setTimeout(function () {
                        t._preload()
                    }, 1e3 * this._Preload_sec)
                }
            }, t.prototype._preload = function () {
                n.default.sound.voice.preload(this._mst_id.toString(), this._voicehour + 30)
            }, t.prototype._play = function () {
                var t = this;
                1 == this._enabled_timeSignal && (this._timerBeLeftVoice.enabled_byTimeSignal = !1, n.default.sound.voice.play(this._mst_id.toString(), this._voicehour + 30, this._onEnd), this._timer_handle_nextTimeSignal = setTimeout(function () {
                    t.reset()
                }, 61e3))
            }, t
        }();
    e.TimeSignal = o
}