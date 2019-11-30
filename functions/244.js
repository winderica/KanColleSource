const function244 = function (t, e, i) {
    "use strict";

    function n() {
        return r(e.POSTER_TYPE)
    }

    function o() {
        return r(e.POSTER_TYPE)
    }

    function r(t) {
        return "gd" == t ? new PIXI.Point(108, 12) : "xmas" == t ? new PIXI.Point(104, 3) : "nw" == t ? new PIXI.Point(8, 12) : "happi" == t ? new PIXI.Point(32, 12) : null
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.POSTER_TYPE = "", e.POSTER_KEY_1 = "item_poster_1", e.POSTER_KEY_2 = "item_poster_2", e.getPosterOffsetWelcome = n, e.getPosterOffsetPurchased = o
}