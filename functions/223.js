const function223 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function () {
            function t() {}
            return t.playVoiceOnBuildComplete = function () {
                n.default.model.kdock.getAll().some(function (t) {
                    return 3 == t.state
                }) && this.playFlagshipVoice(5)
            }, t.playFlagshipVoice = function (t) {
                var e = n.default.model.deck.get(1).getShipList()[0].mstID;
                n.default.sound.voice.play(e.toString(), t)
            }, t.developLimit = function () {
                var t = n.default.model.basic.slotMax - n.default.model.slot.num <= 3;
                return {
                    forShip: n.default.model.basic.shipMax <= n.default.model.ship.num,
                    forSlot: t
                }
            }, t
        }();
    e.ArsenalUtil = o
}