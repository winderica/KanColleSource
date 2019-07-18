const function354 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = function () {
            function t() {}
            return t.killVoice = function () {
                null != t.tween && t.tween.setPaused(!0), null != t.voice && n.default.sound.voice.stop(t.voice), t.tween = null, t.voice = null
            }, t.tween = null, t
        }();
    e.EventOperationVoice = o
}