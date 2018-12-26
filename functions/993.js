const function993 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(230),
        r = i(232),
        s = function (t) {
            function e(e, i, n) {
                for (var r = t.call(this, e) || this, s = 0; s < 4; s++) {
                    var a = new o.MapThumbnail(4, i, n, null, null),
                        _ = s % 2 == 0 ? 188 : 689,
                        l = s < 2 ? 207 : 422;
                    a.position.set(_, l), r.addChild(a), r._maps.push(a)
                }
                return r
            }
            return n(e, t), e
        }(r.LayoutBase);
    e.LayoutMap4 = s
}