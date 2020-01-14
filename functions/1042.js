const function1042 = function (t, e, i) {
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
    var o = i(375),
        r = i(376),
        s = function (t) {
            function e(e, i, n) {
                var o = t.call(this, e, n) || this,
                    s = new r.EventMapThumbnail(1, i, n, o._onMouseOver, o._onMouseOut);
                return s.position.set(501, 207), o.addChild(s), o._maps.push(s), o
            }
            return n(e, t), e
        }(o.EventLayoutBase);
    e.LayoutEventMap1 = s
}