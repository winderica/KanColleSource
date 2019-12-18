const function631 = function (t, e, i) {
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
    var o = i(10),
        r = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                var e = -1;
                1 == t ? e = 47 : 2 == t ? e = 46 : 3 == t ? e = 45 : 4 == t ? e = 44 : 5 == t ? e = 43 : 6 == t ? e = 42 : 7 == t ? e = 41 : 8 == t ? e = 40 : 9 == t ? e = 39 : 10 == t && (e = 38), this.visible = !1, -1 != e && (this.texture = o.COMMON_MISC.getTexture(e), this.visible = !0)
            }, e
        }(PIXI.Sprite);
    e.RankIcon = r
}