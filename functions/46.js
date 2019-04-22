const function46 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(144);
    ! function (t) {
        function e(t, e, i) {
            void 0 === i && (i = !0), null != t && (0 == e ? t.sort(function (t, e) {
                if (1 == i) {
                    if (t.equipTypeSp < e.equipTypeSp) return -1;
                    if (t.equipTypeSp > e.equipTypeSp) return 1
                } else {
                    if (t.equipType < e.equipType) return -1;
                    if (t.equipType > e.equipType) return 1
                }
                return t.mstID < e.mstID ? -1 : t.mstID > e.mstID ? 1 : t.memID < e.memID ? -1 : t.memID > e.memID ? 1 : 0
            }) : 1 == e ? t.sort(function (t, e) {
                if (1 == i) {
                    if (t.equipTypeSp < e.equipTypeSp) return -1;
                    if (t.equipTypeSp > e.equipTypeSp) return 1
                } else {
                    if (t.equipType < e.equipType) return -1;
                    if (t.equipType > e.equipType) return 1
                }
                return t.mstID < e.mstID ? -1 : t.mstID > e.mstID ? 1 : t.level > e.level ? -1 : t.level < e.level ? 1 : t.memID < e.memID ? -1 : t.memID > e.memID ? 1 : 0
            }) : 2 == e && t.sort(function (t, e) {
                if (1 == i) {
                    if (t.equipTypeSp < e.equipTypeSp) return -1;
                    if (t.equipTypeSp > e.equipTypeSp) return 1
                } else {
                    if (t.equipType < e.equipType) return -1;
                    if (t.equipType > e.equipType) return 1
                }
                return t.mstID < e.mstID ? -1 : t.mstID > e.mstID ? 1 : t.level < e.level ? -1 : t.level > e.level ? 1 : t.memID < e.memID ? -1 : t.memID > e.memID ? 1 : 0
            }))
        }

        function i(t, e) {
            if (null == t) return null;
            var i;
            if (i = 0 == e || 12 == e ? n.default.model.slot.getEquipTypeAll().map(function (t, e, i) {
                    return t.id
                }) : o.SlotConst.FILTERING_CATEGORIES[e].concat(), 12 == e) {
                var r = new Array;
                for (var s in o.SlotConst.FILTERING_CATEGORIES) r.push.apply(r, o.SlotConst.FILTERING_CATEGORIES[s]);
                i = i.filter(function (t, e, i) {
                    return -1 == r.indexOf(t)
                })
            }
            return t.filter(function (t, e, n) {
                return -1 != i.indexOf(t.equipTypeSp)
            })
        }

        function r(t, e, i, n, o) {
            void 0 === o && (o = -1);
            var r = [],
                s = ["\u706b\u529b", "\u96f7\u88c5", "\u5bfe\u7a7a", "\u5bfe\u6f5c", "\u7206\u88c5", "\u547d\u4e2d", "\u56de\u907f", "\u7d22\u6575", "\u88c5\u7532"],
                a = t.range,
                _ = t.equipType;
            n && 1 <= a && r.push("\u5c04\u7a0b " + ["", "\u77ed", "\u4e2d", "\u9577", "\u8d85\u9577"][a]), 48 == _ && (s[5] = "\u5bfe\u7206", s[6] = "\u8fce\u6483");
            for (var l = [t.karyoku, t.raisou, t.taiku, t.taisen, t.bakusou, t.meichu, t.kaihi, t.sakuteki, t.soukou], u = 0, c = 0; c < l.length; c++)
                if (0 != l[c]) {
                    var h = e;
                    if (l[c] < 0 && (h = e.split("+").join("")), r.push(s[c] + h + l[c]), u++, -1 != o && o <= u) break
                } return r.join(i)
        }

        function s(t) {
            return t > 500
        }
        t.sort = e, t.filter = i, t.genSummaryText = r, t.isEnemyItem = s
    }(e.SlotUtil || (e.SlotUtil = {}))
}