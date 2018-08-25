/*
 * the function called by `13.js`
 * serial_id creator
 */
const function264 = function (t, e, i) {
    "use strict";

    function n(t, e, i) {
        var n = (new Date).getTime(), r = Math.floor(n / 1e3);
        e = Math.round(e) % 1e3 + 1e3, i = Math.round(i) % 1e3 + 1e3;
        var s = 1e4 * e + i;
        return s *= o.PORT_API_SEED[t % 10], r.toString() + s.toString()
    }

    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(17);
    e.__create_serial_id__ = n
}