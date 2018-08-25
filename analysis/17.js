/*
 * util
 * General info
 */
const function17 = function (t, e, i) {
    "use strict";

    function n(t) {
        for (var i in t) e.hasOwnProperty(i) || (e[i] = t[i])
    }

    Object.defineProperty(e, "__esModule", { value: !0 });
    n(i(26));
    n(i(140));
    n(i(45));
    n(i(260));
    n(i(141));
    e.START_TIME = (new Date).getTime();
    e.RANK_NAME = [ '', '元帥', '大将', '中将', '少将', '大佐', '中佐', '新米中佐', '少佐', '中堅少佐', '新米少佐' ];
    // ?
    e.PORT_API_SEED = [2024, 2887, 9142, 5455, 2801, 4507, 4694, 1823, 4557, 5154];
    // 41: 18冬
    e.EVENT_AREA_ID = 41;
    // 間宮、伊良湖 seasonal CG
    e.MAMIYA_IRAKO_SEASON = 4;
}