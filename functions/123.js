const function123 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    !function (t) {
        function e(t) {
            return PIXI.Texture.fromFrame("battle_result_event_" + t)
        }

        t.getTexture = e
    }(e.BATTLE_RESULT_EVENT || (e.BATTLE_RESULT_EVENT = {}))
}