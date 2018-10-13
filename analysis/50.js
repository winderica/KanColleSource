/*
 * called by `13.js`
 * slot util
 */
const function50 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(139);
    !function (t) {

        // sort equipments
        function e(t, e, i) {
            void 0 === i && (i = !0);
            if (null != t) {
                switch (e) {
                    // sort in default way
                    case 0:
                        t.sort(function (t, e) {
                            if (1 == i) {
                                // equipTypeSp: `api_mst_slotitem_equiptype.api_id`
                                if (t.equipTypeSp < e.equipTypeSp) return -1;
                                if (t.equipTypeSp > e.equipTypeSp) return 1
                            } else {
                                // equipType: different from `api_mst_slotitem_equiptype.api_id`. 大口径主砲（II） is counted into 大口径主砲, 大型電探（II） is counted into 大型電探, 艦上偵察機（II） is counted into 艦上偵察機
                                if (t.equipType < e.equipType) return -1;
                                if (t.equipType > e.equipType) return 1
                            }
                            return t.mstID < e.mstID ? -1 : t.mstID > e.mstID ? 1 : t.memID < e.memID ? -1 : t.memID > e.memID ? 1 : 0
                        });
                        break;
                    // sort by improvement(改修) from high to low(thirdly)
                    case 1:
                        t.sort(function (t, e) {
                            if (1 == i) {
                                if (t.equipTypeSp < e.equipTypeSp) return -1;
                                if (t.equipTypeSp > e.equipTypeSp) return 1
                            } else {
                                if (t.equipType < e.equipType) return -1;
                                if (t.equipType > e.equipType) return 1
                            }
                            return t.mstID < e.mstID ? -1 : t.mstID > e.mstID ? 1 : t.level > e.level ? -1 : t.level < e.level ? 1 : t.memID < e.memID ? -1 : t.memID > e.memID ? 1 : 0
                        });
                        break;
                    // sort by improvement(改修) from low to high(thirdly)
                    case 2:
                        t.sort(function (t, e) {
                            if (1 == i) {
                                if (t.equipTypeSp < e.equipTypeSp) return -1;
                                if (t.equipTypeSp > e.equipTypeSp) return 1
                            } else {
                                if (t.equipType < e.equipType) return -1;
                                if (t.equipType > e.equipType) return 1
                            }
                            return t.mstID < e.mstID ? -1 : t.mstID > e.mstID ? 1 : t.level < e.level ? -1 : t.level > e.level ? 1 : t.memID < e.memID ? -1 : t.memID > e.memID ? 1 : 0
                        });
                        break;
                }
            }
        }

        // filter equipments
        function i(t, e) {
            if (null == t) return null;
            var i;
            if (i = 0 == e || 12 == e ? n.default.model.slot.getEquipTypeAll().map(function (t, e, i) {
                return t.id
            }) : o.SlotConst.FILTERING_CATEGORIES[e].concat(), 12 == e) {
                var r = new Array;
                for (var s in o.SlotConst.FILTERING_CATEGORIES)
                    // the same as r.push(...o.SlotConst.FILTERING_CATEGORIES[s]) in ES6
                    r.push.apply(r, o.SlotConst.FILTERING_CATEGORIES[s]);
                i = i.filter(function (t, e, i) {
                    return -1 == r.indexOf(t)
                })
            }
            return t.filter(function (t, e, n) {
                return -1 != i.indexOf(t.equipTypeSp)
            })
        }

        // equipment data
        function r(t, e, i, n, o) {
            void 0 === o && (o = -1);
            var r = [],
                s = ['火力', '雷装', '対空', '対潜', '爆装', '命中', '回避', '索敵', '装甲'],
                a = t.range, _ = t.equipType;
            n && 1 <= a && r.push("射程 " + ['', '短', '中', '長', '超長'][a]);
            48 == _ && (s[5] = "対爆", s[6] = "迎撃"); // 局地戦闘機
            for (var u = [t.karyoku, t.raisou, t.taiku, t.taisen, t.bakusou, t.meichu, t.kaihi, t.sakuteki, t.soukou], l = 0, c = 0; c < u.length; c++) if (0 != u[c]) {
                var h = e;
                if (u[c] < 0 && (h = e.split("+").join("")), r.push(s[c] + h + u[c]), l++, -1 != o && o <= l) break
            }
            return r.join(i)
        }

        // is enemy equipment
        function s(t) {
            return t > 500
        }

        t.sort = e, t.filter = i, t.genSummaryText = r, t.isEnemyItem = s
    }(e.SlotUtil || (e.SlotUtil = {}))
}