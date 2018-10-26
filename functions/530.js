const function530 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(531), o = function () {
        function t() {
            this._manager = new n.VoiceManager, this._additional_managers = {}
        }

        return t.prototype.getNumOfMultiPlay = function () {
            return this._manager.num_of_simultaneous_playback
        }, t.prototype.setNumOfMultiPlay = function (t) {
            this._manager.num_of_simultaneous_playback = t
        }, t.prototype.preload = function (t, e) {
            this._manager.preload(t, e)
        }, t.prototype.play = function (t, e, i, o) {
            void 0 === i && (i = null), void 0 === o && (o = null);
            var r = this._getManager(o);
            return null == r && (r = new n.VoiceManager, this._additional_managers[o] = r), r.play(t, e, i)
        }, t.prototype.playAtRandom = function (t, e, i, o, r) {
            void 0 === o && (o = null), void 0 === r && (r = null);
            var s = this._getManager(r);
            return null == s && (s = new n.VoiceManager, this._additional_managers[r] = s), s.playAtRandom(t, e, i, o)
        }, t.prototype.stop = function (t) {
            if (1 == this._manager.stop(t)) return !0;
            for (var e in this._additional_managers) {
                if (1 == this._additional_managers[e].stop(t)) return !0
            }
            return !1
        }, t.prototype.stopAll = function (t) {
            void 0 === t && (t = null);
            var e = this._getManager(t);
            null != e && e.stopAll()
        }, t.prototype._getManager = function (t) {
            return null == t ? this._manager : 1 == this._additional_managers.hasOwnProperty(t) ? this._additional_managers[t] : null
        }, t
    }();
    e.VoiceManagerHolder = o
}