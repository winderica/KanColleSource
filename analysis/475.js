// This function is first executed (See ./trunk.js)
const function475 = function (t, e, i) {
    "use strict";

    // parse url to object
    function n() {
        var t = {}, e = window.location.search.substring(1);
        if (e.length > 0) for (var i = e.split("&"), n = 0; n < i.length; n++) {
            var o = i[n], r = o.split("=");
            2 == r.length && (t[r[0]] = r[1])
        }
        return t
    }

    const r = i(0),
        s = i(5),
        a = i(534);

    // In console, choose `index.php`, type `KCS.init.toString()`, then it outputs this function
    function o() {
        createjs.Ticker.timingMode = createjs.Ticker.TIMEOUT, createjs.Ticker.setFPS(60);
        var t = { antialias: true, backgroundColor: 0 },
            e = new PIXI.Application(s.default.width, s.default.height, t);
        document.body.appendChild(e.view), e.stage.addChild(r.default.view);
        var i = n();
        i.renderer = e.renderer, new a.AppInitializeTask(i).start()
    }

    /*
     * Review:
     * `Object.defineProperty`
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
     *
     * In below case, __esModule is not writable, not configurable and not enumerable,
     * which is different from `e.__esModule = true`
     */
    Object.defineProperty(e, "__esModule", { value: true });
    const _ = { init: o };
    e.default = _;
};