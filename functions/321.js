const function321 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(29);
    ! function (t) {
        function e() {
            for (var t = new Array, e = 0; e <= 99; e++) t.push(0);
            return t
        }

        function i(t, e, i, n) {
            t[e]++, -1 != a[60].indexOf(e) && t[60]++, -1 != a[53].indexOf(e) && t[53]++, -1 != a[52].indexOf(e) && t[52]++, -1 != a[55].indexOf(e) && t[55]++, -1 != a[51].indexOf(e) && t[51]++, -1 != a[57].indexOf(e) && t[57]++, -1 != a[54].indexOf(e) && t[54]++, -1 != a[59].indexOf(e) && t[59]++, -1 != a[61].indexOf(e) && t[61]++, -1 != a[56].indexOf(e) && t[56]++, -1 != a[58].indexOf(e) && t[58]++, 8 != e && (-1 == a[62].indexOf(e) || 1 != i && 0 != i) || t[63]++, -1 == a[62].indexOf(e) || 2 != i && 3 != i && 4 != i || t[62]++, 7 == e && n > 0 && t[64]++
        }

        function r(e, r, a) {
            for (var l = [0, 0], u = ["", ""], c = e.getShipList(), h = r.getShipList(), p = 0 == h.indexOf(null), d = t.initArray(), f = t.initArray(), y = 0; y < _; y++) {
                var m = c[y];
                null != m && i(d, m.shipTypeID, o.ShipUtil.getSpeedType(m.speed), n.default.model.ship.getMst(m.mstID).taisen_base)
            }
            for (var y = 0; y < _; y++) {
                var g = h[y];
                null != g && i(f, g.shipTypeID, o.ShipUtil.getSpeedType(g.speed), n.default.model.ship.getMst(g.mstID).taisen_base)
            }
            if (p) s(l, u, 1, "\u7b2c2\u8266\u968a\u304c\u7a7a\u3067\u3059\u3002");
            else {
                if (null != r.expedition) s(l, u, 1, "\u7b2c" + r + "\u8266\u968a\u304c\u9060\u5f81\u4e2d\u3067\u3059\u3002");
                else {
                    var v = h[0];
                    switch (a) {
                        case 2:
                        case 1:
                            f[3] < 1 && s(l, u, 1, "\u8efd\u5de1\u6d0b\u8266\u306e\u914d\u5099\u304c\u5fc5\u8981\u3067\u3059\u3002"), f[3] > 1 && s(l, u, 1, "\u8efd\u5de1\u6d0b\u8266\u3092\uff12\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[51] < 2 && s(l, u, 1, "\u99c6\u9010\u8266\uff12\u96bb\u4ee5\u4e0a\u306e\u914d\u5099\u304c\u5fc5\u8981\u3067\u3059\u3002"), f[53] > 2 && s(l, u, 1, "\u91cd\u5de1\u7d1a\u3092\uff13\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[56] > 1 && s(l, u, 1, "\u6c34\u4e0a\u6a5f\u6bcd\u8266\u3092\uff12\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[62] > 0 && s(l, u, 1, "\u4f4e\u901f\u6226\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[63] > 2 && s(l, u, 1, "\u9ad8\u901f\u6226\u8266\u3092\uff13\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[57] > 0 && s(l, u, 1, "\u6b63\u898f\u7a7a\u6bcd\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[7] > 1 && s(l, u, 1, "\u8efd\u7a7a\u6bcd\u3092\uff12\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), 13 == v.shipTypeID ? s(l, u, 1, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002") : 14 == v.shipTypeID && s(l, u, 1, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002");
                            break;
                        case 3:
                            f[60] < 3 && s(l, u, 1, "\u8b66\u6212\u968a\u306f3\u96bb\u4ee5\u4e0a\u306e\u99c6\u9010\u7d1a\u304c\u5fc5\u8981\u3067\u3059\u3002"), 3 != v.shipTypeID && 21 != v.shipTypeID && s(l, u, 1, "\u8b66\u6212\u968a\u306f\u8efd\u5de1/\u7df4\u5de1\u306e\u65d7\u8266\u304c\u5fc5\u8981\u3067\u3059\u3002"), f[4] > 0 && s(l, u, 1, "\u8b66\u6212\u968a\u306b\u91cd\u96f7\u88c5\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[55] > 0 && s(l, u, 1, "\u8b66\u6212\u968a\u306b\u822a\u7a7a\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[54] > 0 && s(l, u, 1, "\u8b66\u6212\u968a\u306b\u6226\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[61] > 0 && s(l, u, 1, "\u8b66\u6212\u968a\u306b\u6f5c\u6c34\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[16] > 0 && s(l, u, 1, "\u8b66\u6212\u968a\u306b\u6c34\u4e0a\u6a5f\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[17] > 0 && s(l, u, 1, "\u8b66\u6212\u968a\u306b\u63da\u9678\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[19] > 0 && s(l, u, 1, "\u8b66\u6212\u968a\u306b\u5de5\u4f5c\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[20] > 0 && s(l, u, 1, "\u8b66\u6212\u968a\u306b\u6f5c\u6c34\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[22] > 0 && s(l, u, 1, "\u8b66\u6212\u968a\u306b\u88dc\u7d66\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[5] + f[6] > 2 && s(l, u, 1, "\u91cd\u5de1/\u822a\u5de1\u3092\u8a08\uff13\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), f[3] + f[21] > 2 && s(l, u, 1, "\u8b66\u6212\u968a\u3078\u306e\u8efd\u5de1\u7d1a\u914d\u5099\u306f\u6700\u5927\uff12\u96bb\uff01")
                    }
                    var b = c[0];
                    switch (a) {
                        case 3:
                            d[60] < 4 && s(l, u, 0, "\u8f38\u9001\u672c\u968a\u306f\u99c6\u9010\u7d1a\uff14\u96bb\u4ee5\u4e0a\u304c\u5fc5\u8981\u3067\u3059\u3002"), d[4] > 0 && s(l, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u91cd\u96f7\u88c5\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[5] > 0 && s(l, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u91cd\u5de1\u6d0b\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[57] > 0 && s(l, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u822a\u7a7a\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[7] - d[64] > 0 && s(l, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u822a\u7a7a\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[59] > 0 && s(l, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u6226\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[61] > 0 && s(l, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u6f5c\u6c34\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[19] > 1 && s(l, u, 0, "\u5de5\u4f5c\u8266\u30922\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[64] > 1 && s(l, u, 0, "\u8f38\u9001\u672c\u968a\u3078\u306e\u8efd\u7a7a\u6bcd\u914d\u5099\u306f\u6700\u5927\uff11\u96bb\uff01");
                            break;
                        case 1:
                            d[55] < 2 && s(l, u, 0, "\u7a7a\u6bcd\uff12\u96bb\u4ee5\u4e0a\u306e\u914d\u5099\u304c\u5fc5\u8981\u3067\u3059\u3002"), d[55] > 4 && s(l, u, 0, "\u7a7a\u6bcd\uff15\u96bb\u4ee5\u4e0a\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[54] > 2 && s(l, u, 0, "\u6226\u8266\uff13\u96bb\u4ee5\u4e0a\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), 13 == b.shipTypeID ? s(l, u, 0, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002") : 14 == b.shipTypeID && s(l, u, 0, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002");
                            break;
                        case 2:
                            d[54] > 4 && s(l, u, 0, "\u6226\u8266\uff15\u96bb\u4ee5\u4e0a\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[53] > 4 && s(l, u, 0, "\u91cd\u5de1\u7d1a\uff15\u96bb\u4ee5\u4e0a\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[58] < 2 && s(l, u, 0, "\u8907\u6570\u306e\u5de1\u6d0b\u8266\u4ee5\u4e0a\u306e\u8266\u8247\u304c\u5fc5\u8981\u3067\u3059\u3002"), d[57] > 1 && s(l, u, 0, "\u8907\u6570\u306e\u6b63\u898f\u7a7a\u6bcd\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), 1 == d[57] && d[7] > 0 && s(l, u, 0, "\u6b63\u898f\u7a7a\u6bcd\u3092\u542b\u3080\uff12\u96bb\u4ee5\u4e0a\u306e\u822a\u7a7a\u6bcd\u8266\u3092\u914d\n\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), 0 == d[57] && d[7] > 2 && s(l, u, 0, "\uff13\u96bb\u4ee5\u4e0a\u306e\u822a\u7a7a\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), 13 == b.shipTypeID ? s(l, u, 0, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002") : 14 == b.shipTypeID && s(l, u, 0, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002")
                    }
                }
            }
            return "" == u[0] && "" == u[1] ? [!0, "", ""] : [!1, u[0], u[1]]
        }

        function s(t, e, i, n) {
            t[i] < 3 && ("" != e[i] && (e[i] = e[i] + "\n"), e[i] = e[i] + n, t[i]++)
        }
        var a = {};
        a[60] = [1, 2], a[51] = [2], a[52] = [3, 4], a[58] = [3, 4, 5, 6, 8, 9, 10], a[53] = [5, 6], a[54] = [8, 9, 10], a[55] = [7, 11, 18], a[57] = [11, 18], a[56] = [16], a[59] = [8, 9], a[61] = [13, 14], a[62] = [9, 10];
        var _ = 6;
        t.initArray = e, t.checkCombinable = r
    }(e.CombineUtil || (e.CombineUtil = {}))
}