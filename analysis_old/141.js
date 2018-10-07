/*
 * the function called by `17.js`
 * map bgm getter
 */
const function141 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = function () {
        function t() {
        }

        t.getMapBGMID = function (t, e) {
            var i = n.default.model.mst_bgm.getMapBGM(t, e);
            return i > 0 ? { id: i, battle_bgm: !0 } : { id: 103, battle_bgm: !1 } // there is no bgm whose id is 103 in api_start2, maybe it is `捷号決戦前夜`?
        };
        return t;
    }();
    e.MapConst = o
}