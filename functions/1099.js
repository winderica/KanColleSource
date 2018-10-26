const function1099 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    !function (t) {
        function e(t) {
            try {
                return PIXI.Texture.fromFrame("item_payitemicon_id_" + t)
            } catch (t) {
                return PIXI.Texture.EMPTY
            }
        }

        t.getTextureFromMstID = e
    }(e.ITEM_PAYITEMICON || (e.ITEM_PAYITEMICON = {}))
}