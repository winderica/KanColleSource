const function279 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(5), o = i(0), r = i(7), s = function () {
        function t() {
        }

        return t.isAreaHit = function (t, e, i) {
            if (null == t) return !1;
            if (e.x < 0 || e.y < 0 || e.x > n.default.width || e.y > n.default.height) return !1;
            if (e.x < i.x || i.x + i.width < e.x || e.y < i.y || i.y + i.height < e.y) return !1;
            var o = Math.floor(e.x) - i.x, r = Math.floor(e.y) - i.y, s = 4 * (o + i.width * r);
            return !(s + 3 >= t.length) && t[s + 3] > 0
        }, t.getCounterBarTextureName = function (t, e, i) {
            for (var n = 0, r = 0, s = t.shipid; r < s.length; r++) {
                var a = s[r];
                if (a.list.indexOf(e) >= 0) {
                    n = a.group;
                    break
                }
            }
            if (0 == n) for (var _ = o.default.model.ship.getMst(e), u = null == _ ? "" : _.yomi, l = 0, c = t.shipyomi; l < c.length; l++) {
                var a = c[l];
                if (a.list.indexOf(u) >= 0) {
                    n = a.group;
                    break
                }
            }
            for (var h, p = 0, d = t.timetable; p < d.length; p++) {
                var a = d[p];
                if (!(parseInt(a.time.replace(/\//g, "").replace(/ /g, "").replace(/:/g, "")) <= i)) break;
                h = a.list[n] - 1e3
            }
            return 1 == h ? "" : "f230_c052_counterBar_" + h + ".png"
        }, t.getDressingRoomTextureName = function (t, e) {
            for (var i = 1, n = o.default.model.ship.getMst(e), r = null == n ? "" : n.yomi, s = 0, a = t.shipyomi; s < a.length; s++) {
                var _ = a[s];
                if (_.list.indexOf(r) >= 0) {
                    i = _.fileno;
                    break
                }
            }
            if (1 == i) for (var u = null == n ? 0 : n.getClassType(), l = 0, c = t.shipclass; l < c.length; l++) {
                var _ = c[l];
                if (_.list.indexOf(u) >= 0) {
                    i = _.fileno;
                    break
                }
            }
            if (1 == i) for (var h = null == n ? 0 : n.shipTypeID, p = 0, d = t.shiptype; p < d.length; p++) {
                var _ = d[p];
                if (_.list.indexOf(h) >= 0) {
                    i = _.fileno;
                    break
                }
            }
            return "f239_e052_dressingroom_C_" + i + ".png"
        }, t.getSecretaryDeskTextureName = function (t, e) {
            var i = o.default.model.ship.getMst(e);
            if (null == i) return "";
            for (var n = i.getClassType(), r = 1, s = 0, a = t.shipclass; s < a.length; s++) {
                var _ = a[s];
                if (_.list.indexOf(n) >= 0) {
                    r = _.fileno;
                    break
                }
            }
            return "f171_f103_secretary1_B" + r + ".png"
        }, t.getUmbrellarackTextures = function (t, e) {
            for (var i = o.default.model.ship.getMst(e), n = null == i ? "" : i.yomi, s = 3, a = null == i ? 0 : i.shipTypeID, _ = 0, u = t.shiptype; _ < u.length; _++) {
                var l = u[_];
                if (l.list.indexOf(a) >= 0) {
                    s = l.fileno;
                    break
                }
            }
            for (var c, h, p = "f385_e07" + (s - 1) + "_umbrellarack", d = 0, f = t.shipyomi; d < f.length; d++) {
                var l = f[d];
                if (c = l.list.indexOf(n) + 1, s == l.fileno && (h = l.list.length), c > 0) break
            }
            var y = r.ObjUtil.getObjectArray(t.standard, "data"), v = [];
            v.push(p + "_" + s + "_A.png");
            for (var g = 1; g < y.length && !(g > h); g++) v.push(p + "_" + s + "_B" + g + ".png");
            return v
        }, t
    }();
    e.FurnitureUtil = s
}