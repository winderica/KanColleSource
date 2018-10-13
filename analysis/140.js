/*
 * called by `17.js`
 * map const
 */
const function140 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = function () {
        function t() {
        }

        // map bgm id getter
        t.getMapBGMID = function (t, e) {
            var i = n.default.model.mst_bgm.getMapBGM(t, e);
            return i > 0 ? { id: i, battle_bgm: !0 } : { id: 103, battle_bgm: !1 }
        };
        return  t
    }();
    e.MapConst = o
}