const function996 = function (t, e, i) {
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
    var o = i(371),
        r = i(372),
        s = function (t) {
            function e(e, i, n) {
                for (var o = t.call(this, e, n) || this, s = 0; s < 2; s++) {
                    var a = new r.EventMapThumbnail(2, i, n, o._onMouseOver, o._onMouseOut),
                        _ = 207 + 216 * s;
                    a.position.set(501, _), o.addChild(a), o._maps.push(a)
                }
                return o
            }
            return n(e, t), e
        }(o.EventLayoutBase);
    e.LayoutEventMap2 = s
}