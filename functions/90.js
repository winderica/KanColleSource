const function90 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0);
    i(3);
    ! function (t) {
        function e(t, e, i, o, r, s) {
            return !(n.default.model.useItem.get(31).count < t) && (!(n.default.model.useItem.get(32).count < e) && (!(n.default.model.useItem.get(33).count < i) && (!(n.default.model.useItem.get(34).count < o) && (!(n.default.model.useItem.get(3).count < r) && !(n.default.model.useItem.get(2).count < s)))))
        }

        function i(t, e, i, o, r, s) {
            var a = n.default.model.useItem.get(31).count;
            if (s && (t *= 3), a < t) return !1;
            var _ = n.default.model.useItem.get(32).count;
            if (s && (e *= 3), _ < e) return !1;
            var l = n.default.model.useItem.get(33).count;
            if (s && (i *= 3), l < i) return !1;
            var u = n.default.model.useItem.get(34).count;
            if (s && (o *= 3), u < o) return !1;
            var c = n.default.model.useItem.get(3).count;
            return s && (r *= 3), !(c < r)
        }

        function o(t) {
            var e = n.default.model.ship.get(t);
            if (1 == e.isLocked()) return !1;
            if (1 == e.isRepair()) return !1;
            if (e.hasLockedSlotitem()) return !1;
            var i = n.default.model.deck.isInDeck(t);
            if (i) {
                if (1 == i[0] && 0 == i[1]) return !1;
                if (null != n.default.model.deck.get(i[0]).expedition) return !1
            }
            return !0
        }

        function r(t) {
            switch (t) {
                case 0:
                    return 168;
                case 1:
                    return 169;
                case 2:
                    return 170;
                case 3:
                    return 171;
                case 4:
                    return 172;
                case 5:
                    return 173;
                case 6:
                    return 174;
                case 7:
                    return 175;
                case 8:
                    return 176;
                case 9:
                    return 177
            }
            throw new Error("unsupported param:" + t)
        }

        function s(t) {
            switch (t) {
                case 0:
                    return 125;
                case 1:
                    return 126;
                case 2:
                    return 127;
                case 3:
                    return 128;
                case 4:
                    return 129;
                case 5:
                    return 130;
                case 6:
                    return 131;
                case 7:
                    return 132;
                case 8:
                    return 133;
                case 9:
                    return 134
            }
            throw new Error("unsupported param:" + t)
        }
        t.BuildValidation = e, t.DevelopValidation = i, t.ShipDisassemblyValidation = o, t.getWhiteNumberResourceId = r, t.getRedNumberResourceId = s
    }(e.Util || (e.Util = {}))
}