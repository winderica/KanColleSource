const function68 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0);
    ! function (t) {
        function e(t, e, i) {
            void 0 === i && (i = 1);
            var o = "1";
            switch (t) {
                case 0:
                    var r = n.default.model.ship_graph.get(e);
                    null != r && (o = r.version);
                    break;
                case 1:
                    var s = n.default.model.slot.getMst(e);
                    null != s && (o = s.version);
                    break;
                case 3:
                    var r = n.default.model.ship_graph.get(e);
                    null != r && (o = 2 == i || 3 == i ? r.version_voice_boko : r.version_voice);
                    break;
                case 2:
                    var a = n.default.model.furniture.getData(e);
                    null != a && (o = a.version)
            }
            return o
        }

        function i(e, i, n) {
            void 0 === n && (n = 1);
            var o = t.get(e, i, n);
            return "1" != o ? "?version=" + o : ""
        }
        t.get = e, t.getResourceVersion = i
    }(e.VersionUtil || (e.VersionUtil = {}))
}