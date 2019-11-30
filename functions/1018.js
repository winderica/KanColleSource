const function1018 = function (t, e, i) {
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
    var o = i(237),
        r = i(238),
        s = function (t) {
            function e(e, i, n) {
                for (var o = t.call(this, e, n) || this, s = [3, 5], a = 0; a < s.length; a++) {
                    var _ = new r.EventMapThumbnail(s[a], i, n, o._onMouseOver, o._onMouseOut),
                        l = 207 + 144 * a;
                    _.position.set(501, l), o.addChild(_), o._maps.push(_)
                }
                return o
            }
            return n(e, t), e
        }(o.EventLayoutBase);
    e.LayoutEventMap2ex = s
}