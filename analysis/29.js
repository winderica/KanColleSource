/*
 * the function called by `13.js`
 * ship util
 */
const function29 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0);
    !function (t) {
        t.isEnemy = e;
        t.getSpeedType = i;
        t.getDamageType = o;
        t.isDamaged = r;
        t.isMarriage = s;
        t.sort = a;
        t.filter = _;
        t.filterByShipFilterType = u;
        t.filterByShipType = l;
        t.getMemIDsInAllDeck = c;
        t.getMemIDsInExpedition = h;
        t.isMaxGradeUp = p;

        // is 深海棲艦
        function e(t) {
            return t > 1500
        }

        // 速力　0=基地, 5=低速, 10=高速, 15=高速+, 20=最速
        function i(t) {
            return t > 15 ? 0 : t > 10 ? 1 : t > 5 ? 2 : t > 0 ? 3 : 4
        }

        // 撃沈小破中破大破
        function o(t, e) {
            var i = 100 * t / e;
            return i <= 0 ? 0 : i <= 25 ? 25 : i <= 50 ? 50 : i <= 75 ? 75 : 100
        }

        // 撃沈小破中破大破
        function r(t, e) {
            var i = o(t, e);
            return 50 == i || 25 == i || 0 == i
        }

        // 結婚
        function s(t) {
            return t >= 100
        }

        // sort
        function a(t, e) {
            null != t && t.sort(function (t, i) {
                if (0 == e)

                    /*
                     * level: high to low
                     * sortNo: low to high
                     *      (BB > CV > CVL > AUX > CA(including 改二航) > CL > DD > DE > SS > LHA > GR > IT > US > UK > FR > RU)
                     *      (last number: 1-未改造 2-改 3-乙/丁改 6-改二 7-改二甲/乙/丁 9-改三(Bismarck))
                     */
                    return t.level > i.level
                        ? 1
                        : t.level < i.level
                            ? -1
                            : t.sortNo < i.sortNo
                                ? 1
                                : t.sortNo > i.sortNo
                                    ? -1
                                    : t.memID < i.memID
                                        ? 1
                                        : t.memID > i.memID
                                            ? -1
                                            : 0;
                if (1 == e) return t.level < i.level ? 1 : t.level > i.level ? -1 : t.sortNo > i.sortNo ? 1 : t.sortNo < i.sortNo ? -1 : t.memID > i.memID ? 1 : t.memID < i.memID ? -1 : 0;
                if (2 == e) return t.sortNo > i.sortNo ? 1 : t.sortNo < i.sortNo ? -1 : t.level < i.level ? 1 : t.level > i.level ? -1 : t.memID > i.memID ? 1 : t.memID < i.memID ? -1 : 0;
                if (3 == e) return t.memID < i.memID ? 1 : t.memID > i.memID ? -1 : 0;
                if (4 == e) {
                    var n = t.hpNow / t.hpMax, o = i.hpNow / i.hpMax;
                    return n > o ? 1 : n < o ? -1 : t.sortNo > i.sortNo ? 1 : t.sortNo < i.sortNo ? -1 : t.memID > i.memID ? 1 : t.memID < i.memID ? -1 : 0
                }
                return 0
            })
        }

        function _(t, e, i) {
            return null == t ? null : t.filter(function (t, n, o) {
                return (1 != e || 1 != t.isLocked() && 1 != t.hasLockedSlotitem()) && !(null != i && i.indexOf(t.memID) >= 0)
            })
        }

        function u(t, e) {
            for (var i = [], n = 0, o = e; n < o.length; n++) {
                var r = o[n];
                0 == r ? (i.push(8), i.push(9), i.push(10), i.push(12)) : 1 == r ? (i.push(7), i.push(11), i.push(18)) : 2 == r ? (i.push(5), i.push(6)) : 3 == r ? (i.push(3), i.push(4), i.push(21)) : 4 == r ? i.push(2) : 5 == r ? i.push(1) : 6 == r ? (i.push(13), i.push(14)) : 7 == r && (i.push(15), i.push(16), i.push(17), i.push(19), i.push(20), i.push(22))
            }
            return l(t, i)
        }

        function l(t, e) {
            return null == t ? null : t.filter(function (t, i, n) {
                var o = t.shipTypeID;
                return e.indexOf(o) >= 0
            })
        }

        function c() {
            for (var t = [], e = n.default.model.deck.getAll(), i = 0, o = e; i < o.length; i++) {
                var r = o[i], s = r.getShipMemIDList();
                t = t.concat(s)
            }
            return t
        }

        function h() {
            for (var t = new Array, e = n.default.model.deck.getAll(), i = 0, o = e; i < o.length; i++) {
                var r = o[i];
                if (null != r.expedition) {
                    var s = r.getShipMemIDList();
                    t = t.concat(s)
                }
            }
            return t
        }

        function p(t, e, i) {
            var n = t.karyoku - (e.hougMin + t.gradeUpHoug), o = t.raisou - (e.raigMin + t.gradeUpRaig),
                r = t.taiku - (e.tykuMin + t.gradeUpTyku), s = t.soukou - (e.soukMin + t.gradeUpSouk),
                a = (t.lucky, e.luckMin, t.gradeUpLuck, e.hougMax + n <= t.karyoku), _ = e.raigMax + o <= t.raisou,
                u = e.tykuMax + r <= t.taiku, l = e.soukMax + s <= t.soukou;
            if (a && _ && u && l) {
                if (!i) return !0;
                var c = 0 == e.luckMax - t.lucky, h = !0;
                t.gradeUpTaikyu < t.VHP && t.taikyu < e.taikyuMax && (h = !1);
                var p = !0;
                0 < t.taisenMax && t.gradeUpTaisen < t.VAS && (p = !1);
                if (c && h && p) return !0
            }
            return !1
        }

    }(e.ShipUtil || (e.ShipUtil = {}))
}
