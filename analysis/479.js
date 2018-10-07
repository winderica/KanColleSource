// This function is first executed (See ./trunk.js)
const function479 = function (t, e, i) {
    "use strict";

    /*
     * parse url to object
     *
     * interface T {
     *     api_root: '/kcapi';
     *     api_starttime: string; // unix timestamp
     *     api_token: string;
     *     osapi_root: 'osapi.dmm.com';
     *     version: string; // current version
     *     voice_root: '/kcs/sound';
     * }
     */
    function n() {
        var t = {}, e = window.location.search.substring(1);
        if (e.length > 0) for (var i = e.split("&"), n = 0; n < i.length; n++) {
            var o = i[n], r = o.split("=");
            2 == r.length && (t[r[0]] = r[1])
        }
        return t
    }

    // initialize game
    function o() {
        createjs.Ticker.timingMode = createjs.Ticker.TIMEOUT, createjs.Ticker.setFPS(60);
        var t = { antialias: !1, backgroundColor: 0 },
            e = new PIXI.Application(s.default.width, s.default.height, t);
        document.body.appendChild(e.view), e.stage.addChild(r.default.view);
        var i = n();
        i.renderer = e.renderer, new a.AppInitializeTask(i).start()
    }

    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = i(0), s = i(5), a = i(538), _ = { init: o };
    e.default = _
}