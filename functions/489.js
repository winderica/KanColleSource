const function489 = function (t, e, i) {
    "use strict";

    function n() {
        var t = {},
            e = window.location.search.substring(1);
        if (e.length > 0)
            for (var i = e.split("&"), n = 0; n < i.length; n++) {
                var o = i[n],
                    r = o.split("=");
                2 == r.length && (t[r[0]] = r[1])
            }
        return t
    }

    function o() {
        createjs.Ticker.timingMode = createjs.Ticker.TIMEOUT, createjs.Ticker.setFPS(60), PIXI.settings.GC_MAX_IDLE = 360, PIXI.settings.GC_MAX_CHECK_COUNT = 180;
        var t = {
                antialias: !1,
                backgroundColor: 0
            },
            e = new PIXI.Application(s.default.width, s.default.height, t);
        document.body.appendChild(e.view), e.stage.addChild(r.default.view);
        var i = n();
        i.renderer = e.renderer, new a.AppInitializeTask(i).start()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(0),
        s = i(5),
        a = i(550),
        _ = {
            init: o
        };
    e.default = _
}