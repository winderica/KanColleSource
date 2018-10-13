/*
 * called by `13.js`
 * ship util
 */
const function31 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0);
    !function (t) {

        /*
         * is enemy
         * t: number; // api_id
         */
        function e(t) {
            return t > 1500
        }

        /*
         * 速力
         * t: number; // 0=基地, 5=低速, 10=高速, 15=高速+, 20=最速
         */
        function i(t) {
            return t > 15 ? 0 : t > 10 ? 1 : t > 5 ? 2 : t > 0 ? 3 : 4
        }

        /*
         * damage type (撃沈小破中破大破)
         * t: number; // current HP
         * e: number; // total HP
         */
        function o(t, e) {
            var i = 100 * t / e;
            return i <= 0 ? 0 : i <= 25 ? 25 : i <= 50 ? 50 : i <= 75 ? 75 : 100
        }

        /*
         * is damaged (撃沈中破大破)
         * t: number; // current HP
         * e: number; // total HP
         */
        function r(t, e) {
            var i = o(t, e);
            return 50 == i || 25 == i || 0 == i
        }

        /*
         * is married
         * t: number; // lv
         */
        function s(t) {
            return t >= 100
        }

        /*
         * sort
         * t: Ship[]; // ships
         * e: number; // sort key
         */
        function a(t, e) {
            null != t && t.sort(function (t, i) {
                /*
                 * sort by level (reverse)
                 * level: low to high
                 * sortNo: high to low
                 *      (BB > CV > CVL > AUX > CA(including 改二航) > CL > DD > DE > SS > LHA > GR > IT > US > UK > FR > RU)
                 * memID: high to low
                 */
                if (0 == e) return t.level > i.level ? 1 : t.level < i.level ? -1 : t.sortNo < i.sortNo ? 1 : t.sortNo > i.sortNo ? -1 : t.memID < i.memID ? 1 : t.memID > i.memID ? -1 : 0;
                /*
                 * sort by level
                 * level: high to low
                 * sortNo: low to high
                 * memID: low to high
                 */
                if (1 == e) return t.level < i.level ? 1 : t.level > i.level ? -1 : t.sortNo > i.sortNo ? 1 : t.sortNo < i.sortNo ? -1 : t.memID > i.memID ? 1 : t.memID < i.memID ? -1 : 0;
                /*
                 * sort by type
                 * sortNo: low to high
                 * level: high to low
                 * memID: low to high
                 */
                if (2 == e) return t.sortNo > i.sortNo ? 1 : t.sortNo < i.sortNo ? -1 : t.level < i.level ? 1 : t.level > i.level ? -1 : t.memID > i.memID ? 1 : t.memID < i.memID ? -1 : 0;
                /*
                 * sort by new
                 * memID: high to low
                 */
                if (3 == e) return t.memID < i.memID ? 1 : t.memID > i.memID ? -1 : 0;
                /*
                 * sort by damage
                 * leftHpPercentage: low to high
                 * sortNo: low to high
                 * memID: low to high
                 */
                if (4 == e) {
                    var n = t.hpNow / t.hpMax, o = i.hpNow / i.hpMax;
                    return n > o ? 1 : n < o ? -1 : t.sortNo > i.sortNo ? 1 : t.sortNo < i.sortNo ? -1 : t.memID > i.memID ? 1 : t.memID < i.memID ? -1 : 0
                }
                return 0
            })
        }

        /*
         * filter ships
         * t: Ship[]; // ships
         * e: boolean; // ?
         * i: Ship[]; // ships don't meet the conditions
         */
        function _(t, e, i) {
            return null == t ? null : t.filter(function (t, n, o) {
                return (1 != e || 1 != t.isLocked() && 1 != t.hasLockedSlotitem()) && !(null != i && i.indexOf(t.memID) >= 0)
            })
        }

        /*
         * filter by ship type (new feature in 2.0)
         */
        function u(t, e) {
            for (var i = [], n = 0, o = e; n < o.length; n++) {
                var r = o[n];
                switch (r) {
                    case 0:
                        // 巡洋戦艦 戦艦 航空戦艦 超弩級戦艦
                        i.push(8), i.push(9), i.push(10), i.push(12);
                        break;
                    case 1:
                        // 軽空母 正規空母 装甲空母
                        i.push(7), i.push(11), i.push(18);
                        break;
                    case 2:
                        // 重巡洋艦 航空巡洋艦
                        i.push(5), i.push(6);
                        break;
                    case 3:
                        // 軽巡洋艦 重雷装巡洋艦 練習巡洋艦
                        i.push(3), i.push(4), i.push(21);
                        break;
                    case 4:
                        // 駆逐艦
                        i.push(2);
                        break;
                    case 5:
                        // 海防艦
                        i.push(1);
                        break;
                    case 6:
                        // 潜水艦 潜水空母
                        i.push(13), i.push(14);
                        break;
                    case 7:
                        // 補給艦(敵のほう) 水上機母艦 揚陸艦 工作艦 潜水母艦 補給艦(味方のほう)
                        i.push(15), i.push(16), i.push(17), i.push(19), i.push(20), i.push(22);
                        break;
                }
            }
            return l(t, i)
        }

        // filter by built-in ship type(`api_mst_ship.api_stype`)
        function l(t, e) {
            return null == t ? null : t.filter(function (t, i, n) {
                var o = t.shipTypeID;
                return e.indexOf(o) >= 0
            })
        }

        // get member ids(`api_mst_ship.api_id`) of ships in all fleets
        function c() {
            for (var t = [], e = n.default.model.deck.getAll(), i = 0, o = e; i < o.length; i++) {
                var r = o[i], s = r.getShipMemIDList();
                t = t.concat(s)
            }
            return t
        }

        // get member ids(`api_mst_ship.api_id`) of ships in all fleets in expedition
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

        // is fully-modernized(改修カンスト)
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

        t.isEnemy = e,
        t.getSpeedType = i,
        t.getDamageType = o,
        t.isDamaged = r,
        t.isMarriage = s,
        t.sort = a,
        t.filter = _,
        t.filterByShipFilterType = u,
        t.filterByShipType = l,
        t.getMemIDsInAllDeck = c,
        t.getMemIDsInExpedition = h,
        t.isMaxGradeUp = p
    }(e.ShipUtil || (e.ShipUtil = {}))
}