const function603 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = function () {
        function t() {
            this.INTERVAL = 3e5, this._enabled_029 = !1, this._enabled_129 = !1, this._enabled_byTimeSignal = !0, this._timer_handle = -1
        }

        return Object.defineProperty(t.prototype, "enabled_byTimeSignal", {
            set: function (t) {
                this._enabled_byTimeSignal = t
            }, enumerable: !0, configurable: !0
        }), t.prototype.initialize = function (t, e) {
            this._mst_id = t, this._tired = e;
            var i = n.default.model.ship.getMst(this._mst_id);
            null == i ? this._enabled_029 = this._enabled_129 = !1 : (this._enabled_029 = i.availableBeLeftVoice, this._enabled_129 = i.availableBeLeftVoices), this.reset()
        }, t.prototype.stop = function () {
            -1 != this._timer_handle && (clearInterval(this._timer_handle), this._timer_handle = -1)
        }, t.prototype.reset = function () {
            var t = this;
            this.stop(), 0 == this._enabled_029 && 0 == this._enabled_129 || (this._timer_handle = setInterval(function () {
                t._play()
            }, this.INTERVAL))
        }, t.prototype._play = function () {
            1 == n.default.option.voice_be_left && this._enabled_byTimeSignal && (1 == this._enabled_129 && this._tired >= 50 ? n.default.sound.voice.play(this._mst_id.toString(), 129) : 1 == this._enabled_029 && n.default.sound.voice.play(this._mst_id.toString(), 29))
        }, t
    }();
    e.BeLeftVoiceTimer = o
}