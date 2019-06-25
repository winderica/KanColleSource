const function1090 = function (t, e, i) {
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
    var o = i(0),
        r = i(17),
        s = i(23),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.update = function (t, e) {
                var i;
                if (553 == t || 554 == t) i = o.default.settings.path_root + "resources/stype/etext/sp001.png?" + r.START_TIME;
                else {
                    8 == e ? e = 9 : 15 == e && (e = 22);
                    var n = s.MathUtil.zeroPadding(e, 3);
                    i = o.default.settings.path_root + "resources/stype/etext/" + n + ".png?" + r.START_TIME
                }
                this.texture = PIXI.Texture.fromImage(i)
            }, e.prototype.dispose = function () {}, e
        }(PIXI.Sprite);
    e.EngStypeView = a
}