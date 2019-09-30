const function270 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    ! function (t) {
        function e(t) {
            try {
                return PIXI.Texture.fromFrame("common_itemicons_id_" + t)
            } catch (t) {
                return PIXI.Texture.EMPTY
            }
        }
        t.getTextureFromMstID = e
    }(e.COMMON_ITEMICONS || (e.COMMON_ITEMICONS = {}))
}