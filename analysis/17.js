/*
 * util
 * General info
 */
const function17 = function (t, e, i) {
    "use strict";

    function n(t) {
        for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
    }

    Object.defineProperty(e, "__esModule", { value: !0 }),
    n(i(24)),
    n(i(139)),
    n(i(45)),
    n(i(256)),
    n(i(140)),
    e.START_TIME = (new Date).getTime(),
    e.RANK_NAME = [ '', '元帥', '大将', '中将', '少将', '大佐', '中佐', '新米中佐', '少佐', '中堅少佐', '新米少佐' ];
    // api seed
    e.PORT_API_SEED = [4427, 6755, 3264, 7474, 2823, 6304, 6225, 8447, 3219, 4527],
    // can combine fleets
    e.COMBINABLE = !1,
    // event area id
    e.EVENT_AREA_ID = -1,
    // 間宮、伊良湖 seasonal CG id
    e.MAMIYA_IRAKO_SEASON = 0
}