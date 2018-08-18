const function321 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(31);
    !function (t) {
        function e() {
            for (var t = new Array, e = 0; e <= 99; e++) t.push(0);
            return t
        }

        function i(t, e, i, n) {
            t[e]++, -1 != s[60].indexOf(e) && t[60]++, -1 != s[53].indexOf(e) && t[53]++, -1 != s[52].indexOf(e) && t[52]++, -1 != s[55].indexOf(e) && t[55]++, -1 != s[51].indexOf(e) && t[51]++, -1 != s[57].indexOf(e) && t[57]++, -1 != s[54].indexOf(e) && t[54]++, -1 != s[59].indexOf(e) && t[59]++, -1 != s[61].indexOf(e) && t[61]++, -1 != s[56].indexOf(e) && t[56]++, -1 != s[58].indexOf(e) && t[58]++, (8 == e || -1 != s[62].indexOf(e) && i >= 4) && t[63]++, -1 != s[62].indexOf(e) && i <= 3 && t[62]++, 7 == e && n > 0 && t[64]++
        }

        function o(e, o, s) {
            for (var _ = [0, 0], u = ["", ""], l = e.getShipList(), c = o.getShipList(), h = 0 == c.indexOf(null), p = t.initArray(), d = t.initArray(), f = 0; f < a; f++) {
                var y = l[f];
                null != y && i(p, y.shipTypeID, n.ShipUtil.getSpeedType(y.speed), y.taisen)
            }
            for (var f = 0; f < a; f++) {
                var v = c[f];
                null != v && i(d, v.shipTypeID, n.ShipUtil.getSpeedType(v.speed), v.taisen)
            }
            if (h) r(_, u, 1, "\u7b2c2\u8266\u968a\u304c\u7a7a\u3067\u3059\u3002"); else {
                if (null != o.expedition) r(_, u, 1, "\u7b2c" + o + "\u8266\u968a\u304c\u9060\u5f81\u4e2d\u3067\u3059\u3002"); else {
                    var g = c[0];
                    switch (s) {
                        case 2:
                        case 1:
                            d[3] < 1 && r(_, u, 1, "\u8efd\u5de1\u6d0b\u8266\u306e\u914d\u5099\u304c\u5fc5\u8981\u3067\u3059\u3002"), d[3] > 1 && r(_, u, 1, "\u8efd\u5de1\u6d0b\u8266\u3092\uff12\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[51] < 2 && r(_, u, 1, "\u99c6\u9010\u8266\uff12\u96bb\u4ee5\u4e0a\u306e\u914d\u5099\u304c\u5fc5\u8981\u3067\u3059\u3002"), d[53] > 0 && d[53] > 2 && r(_, u, 1, "\u91cd\u5de1\u7d1a\u3092\uff13\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[56] > 0 && d[56] > 1 && r(_, u, 1, "\u6c34\u4e0a\u6a5f\u6bcd\u8266\u3092\uff12\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[62] > 0 && r(_, u, 1, "\u4f4e\u901f\u6226\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[63] > 0 && d[63] > 2 && r(_, u, 1, "\u9ad8\u901f\u6226\u8266\u3092\uff13\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[57] > 0 && r(_, u, 1, "\u6b63\u898f\u7a7a\u6bcd\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[7] > 0 && d[7] > 1 && r(_, u, 1, "\u8efd\u7a7a\u6bcd\u3092\uff12\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), 13 == g.shipTypeID ? r(_, u, 1, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002") : 14 == g.shipTypeID && r(_, u, 1, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002");
                            break;
                        case 3:
                            d[2] < 3 && r(_, u, 1, "\u8b66\u6212\u968a\u306f3\u96bb\u4ee5\u4e0a\u306e\u99c6\u9010\u8266\u304c\u5fc5\u8981\u3067\u3059\u3002"), 3 != g.shipTypeID && 21 != g.shipTypeID && r(_, u, 1, "\u8b66\u6212\u968a\u306f\u8efd\u5de1/\u7df4\u5de1\u306e\u65d7\u8266\u304c\u5fc5\u8981\u3067\u3059\u3002"), d[4] > 0 && r(_, u, 1, "\u8b66\u6212\u968a\u306b\u91cd\u96f7\u88c5\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[55] > 0 && r(_, u, 1, "\u8b66\u6212\u968a\u306b\u822a\u7a7a\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[54] > 0 && r(_, u, 1, "\u8b66\u6212\u968a\u306b\u6226\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[61] > 0 && r(_, u, 1, "\u8b66\u6212\u968a\u306b\u6f5c\u6c34\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[16] > 0 && r(_, u, 1, "\u8b66\u6212\u968a\u306b\u6c34\u4e0a\u6a5f\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[17] > 0 && r(_, u, 1, "\u8b66\u6212\u968a\u306b\u63da\u9678\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[19] > 0 && r(_, u, 1, "\u8b66\u6212\u968a\u306b\u5de5\u4f5c\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[20] > 0 && r(_, u, 1, "\u8b66\u6212\u968a\u306b\u6f5c\u6c34\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[22] > 0 && r(_, u, 1, "\u8b66\u6212\u968a\u306b\u88dc\u7d66\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[5] + d[6] > 2 && r(_, u, 1, "\u91cd\u5de1/\u822a\u5de1\u3092\u8a08\uff13\u96bb\u4ee5\u4e0a\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), d[3] + d[21] > 2 && r(_, u, 1, "\u8b66\u6212\u968a\u3078\u306e\u8efd\u5de1\u7d1a\u914d\u5099\u306f\u6700\u5927\uff12\u96bb\uff01")
                    }
                    var m = l[0];
                    switch (s) {
                        case 3:
                            p[60] < 4 && r(_, u, 0, "\u8f38\u9001\u672c\u968a\u306f\u99c6\u9010\u8266\uff14\u96bb\u4ee5\u4e0a\u304c\u5fc5\u8981\u3067\u3059\u3002"), p[4] > 0 && r(_, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u91cd\u96f7\u88c5\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), p[5] > 0 && r(_, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u91cd\u5de1\u6d0b\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), p[57] > 0 && r(_, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u822a\u7a7a\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), p[7] - d[64] > 0 && r(_, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u822a\u7a7a\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), p[59] > 0 && r(_, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u6226\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), p[61] > 0 && r(_, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u6f5c\u6c34\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), p[19] > 0 && r(_, u, 0, "\u8f38\u9001\u672c\u968a\u306b\u5de5\u4f5c\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), p[64] > 1 && r(_, u, 0, "\u8f38\u9001\u672c\u968a\u3078\u306e\u8efd\u7a7a\u6bcd\u914d\u5099\u306f\u6700\u5927\uff11\u96bb\uff01");
                            break;
                        case 1:
                            p[55] < 2 && r(_, u, 0, "\u7a7a\u6bcd\uff12\u96bb\u4ee5\u4e0a\u306e\u914d\u5099\u304c\u5fc5\u8981\u3067\u3059\u3002"), p[55] > 4 && r(_, u, 0, "\u7a7a\u6bcd\uff15\u96bb\u4ee5\u4e0a\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), p[54] > 0 && p[54] > 2 && r(_, u, 0, "\u6226\u8266\uff13\u96bb\u4ee5\u4e0a\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), 13 == m.shipTypeID ? r(_, u, 0, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002") : 14 == m.shipTypeID && r(_, u, 0, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002");
                            break;
                        case 2:
                            p[54] > 4 && r(_, u, 0, "\u6226\u8266\uff15\u96bb\u4ee5\u4e0a\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), p[53] > 4 && r(_, u, 0, "\u91cd\u5de1\u7d1a\uff15\u96bb\u4ee5\u4e0a\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), p[58] < 2 && r(_, u, 0, "\u8907\u6570\u306e\u5de1\u6d0b\u8266\u4ee5\u4e0a\u306e\u8266\u8247\u304c\u5fc5\u8981\u3067\u3059\u3002"), p[57] > 1 && r(_, u, 0, "\u8907\u6570\u306e\u6b63\u898f\u7a7a\u6bcd\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), 1 == p[57] && p[7] > 0 && r(_, u, 0, "\u6b63\u898f\u7a7a\u6bcd\u3092\u542b\u3080\uff12\u96bb\u4ee5\u4e0a\u306e\u822a\u7a7a\u6bcd\u8266\u3092\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), 0 == p[57] && p[7] > 2 && r(_, u, 0, "\uff13\u96bb\u4ee5\u4e0a\u306e\u822a\u7a7a\u6bcd\u8266\u306f\u914d\u5099\u3067\u304d\u307e\u305b\u3093\u3002"), 13 == m.shipTypeID ? r(_, u, 0, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002") : 14 == m.shipTypeID && r(_, u, 0, "\u9023\u5408\u8266\u968a\u65d7\u8266\u306f\u6f5c\u6c34\u8266\u4e0d\u53ef\u3067\u3059\u3002")
                    }
                }
            }
            return "" == u[0] && "" == u[1] ? [!0, "", ""] : [!1, u[0], u[1]]
        }

        function r(t, e, i, n) {
            t[i] < 3 && ("" != e[i] && (e[i] = e[i] + "\n"), e[i] = e[i] + n, t[i]++)
        }

        var s = {};
        s[60] = [1, 2], s[51] = [2], s[52] = [3, 4], s[58] = [3, 4, 5, 6, 8, 9, 10], s[53] = [5, 6], s[54] = [8, 9, 10], s[55] = [7, 11, 18], s[57] = [11, 18], s[56] = [16], s[59] = [8, 9], s[61] = [13, 14], s[62] = [9, 10];
        var a = 6;
        t.initArray = e, t.checkCombinable = o
    }(e.CombineUtil || (e.CombineUtil = {}))
}