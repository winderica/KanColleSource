const function169 = function (t, e, i) {
    "use strict";

    function n(t) {
        try {
            return o.ITEM_PAYITEMICON.getTextureFromMstID(t)
        } catch (t) {
            return PIXI.Texture.EMPTY
        }
    }

    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(1097);
    e.getPayitemIcon = n
}