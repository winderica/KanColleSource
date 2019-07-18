const function353 = function (t, e, i) {
    "use strict";

    function n(t) {
        return 0 == t ? [47] : 1 == t ? [48] : 2 == t ? [6, 56] : 3 == t ? [7, 8, 57, 58] : 4 == t ? [9, 10, 11, 41, 45, 49, 59, 94] : []
    }

    function o(t) {
        return [9, 10, 41, 49, 59, 94].indexOf(t) >= 0 ? 4 : 18
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getEquipTypes = n, e.getKadouCount = o
}