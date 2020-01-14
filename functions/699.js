const function699 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    ! function (t) {
        function e(t) {
            try {
                return PIXI.Texture.fromFrame("album_slot3_id_" + t)
            } catch (t) {
                return PIXI.Texture.EMPTY
            }
        }
        t.getTextureFromMstID = e
    }(e.ALBUM_SLOT3 || (e.ALBUM_SLOT3 = {}))
}