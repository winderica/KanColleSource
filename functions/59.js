const function59 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    ! function (t) {
        function e(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2)) + 0
        }

        function i(t, e, i, n, o) {
            void 0 === o && (o = null);
            for (var r = new Array, s = n / 100, a = n / s, _ = 0; _ < s; _++) {
                var l = a * (_ + 1) / n;
                null != o && (l = o(l)), r.push({
                    x: (1 - l) * (1 - l) * t.x + 2 * (1 - l) * l * e.x + l * l * i.x,
                    y: (1 - l) * (1 - l) * t.y + 2 * (1 - l) * l * e.y + l * l * i.y,
                    t: a
                })
            }
            return r
        }

        function n(t, e, i, n, o) {
            for (var r = new Array, s = o / 100, a = o / s, _ = 0; _ < s; _++) {
                var l = a * (_ + 1) / o;
                r.push({
                    x: (1 - l) * (1 - l) * (1 - l) * t.x + 3 * (1 - l) * (1 - l) * l * e.x + 3 * (1 - l) * l * l * i.x + l * l * l * n.x,
                    y: (1 - l) * (1 - l) * (1 - l) * t.y + 3 * (1 - l) * (1 - l) * l * e.y + 3 * (1 - l) * l * l * i.y + l * l * l * n.y,
                    t: a
                })
            }
            return r
        }

        function o(e, i, n, o, r, s, a) {
            for (var _ = t.create3BezierPoints(i, n, o, r, s), l = createjs.Tween.get(e, a), u = 0, c = _; u < c.length; u++) {
                var h = c[u];
                l.to({
                    x: h.x,
                    y: h.y
                }, h.t)
            }
            return l
        }

        function r(t, e, i, n, o, r, s, a) {
            void 0 === r && (r = 16711680), void 0 === s && (s = 65280), void 0 === a && (a = 255), t.lineStyle(1, r, .3), t.moveTo(e.x, e.y), t.bezierCurveTo(i.x, i.y, n.x, n.y, o.x, o.y), t.lineStyle(1, s, .3), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.lineStyle(1, a, .3), t.moveTo(o.x, o.y), t.lineTo(n.x, n.y), t.lineStyle(), t.beginFill(s, .3), t.drawCircle(i.x, i.y, 10), t.endFill(), t.beginFill(a, .3), t.drawCircle(n.x, n.y, 10), t.endFill()
        }
        t.signOut = e, t.create2BezierPoints = i, t.create3BezierPoints = n, t.create3BezierTween = o, t.draw3BezierLine = r
    }(e.TweenUtil || (e.TweenUtil = {}))
}