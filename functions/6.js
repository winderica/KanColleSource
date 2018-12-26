const function6 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0);
    ! function (t) {
        function e(t) {
            null != t && (t.length <= 0 || n.default.sound.se.play(n.default.settings.path_root + "resources/se/" + t + ".mp3"))
        }
        t.play = e
    }(e.SE || (e.SE = {}))
}