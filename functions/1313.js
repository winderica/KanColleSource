const function1313 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(17), o = i(1314), r = function () {
        function t() {
        }

        return t.getBossModel = function (t) {
            var e = t.data.model.map_info.area_id;
            return e == n.EVENT_AREA_ID ? this._getEventBossModel(e, t) : this._getBossModel(e, t)
        }, t._getBossModel = function (t, e) {
            var i = e.data.model.map_info.map_no, n = e.data.model.map_info.isBoss();
            if (6 == t && 4 == i && 1 == n) {
                var r = e.data.model.deck_e.ships[0], s = r.name;
                if ("\u96e2\u5cf6\u68f2\u59eb" == s) return new o.BossModel(r.mst_id, "\u96e2\u5cf6\u57fa\u5730").setMessage("6466810", "\u30b3\u30b3\u30de\u30c7\u2026\u2026\u3002\u30af\u30eb\u30c8\u30ef\u2026\u2026\u30cd\u2026\u2026\u2026\u2026\u3002").setOffset(165, 0)
            }
        }, t._getEventBossModel = function (t, e) {
            var i = (e.data.model.map_info.map_no, e.data.model.map_info.isBoss(), e.data.model.deck_e.ships[0]);
            i.mst_id, i.name, e.data.model.gauge_now, i.hp_now;
            return null
        }, t
    }();
    e.BossConst = r
}