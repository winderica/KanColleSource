const function833 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(164);
    !function (t) {
        function e(t) {
            var e = 0 == t ? 0 : t / n.RepairConst.ITEM_IN_COUNT;
            return e += 0 == t ? 0 : 0 < t % n.RepairConst.ITEM_IN_COUNT ? 1 : 0, e = Math.floor(e)
        }

        t.calcPageCount = e
    }(e.RepairUtil || (e.RepairUtil = {}))
}