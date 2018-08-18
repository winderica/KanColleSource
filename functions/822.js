const function822 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = function () {
        function t(t) {
            this._memID = -1, this._counter = 0, this._playList = t
        }

        return t.prototype.play = function (t) {
            var e = this._voiceIndex(t), i = n.default.model.ship.get(t).mstID;
            n.default.sound.voice.play(i.toString(), this._playList[e])
        }, t.prototype._voiceIndex = function (t) {
            return this._memID !== t ? (this._memID = t, this._counter = 0, 0) : ++this._counter % this._playList.length
        }, t
    }();
    e.ShipVoice = o
}