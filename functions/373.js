const function373 = function (t, e, i) {
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
    var o = i(53),
        r = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.update = function (t) {
                this.visible = !0, 3 == t ? this.texture = o.SALLY_PRACTICE.getTexture(17) : 2 == t ? this.texture = o.SALLY_PRACTICE.getTexture(18) : 1 == t ? this.texture = o.SALLY_PRACTICE.getTexture(16) : this.visible = !1
            }, e
        }(PIXI.Sprite);
    e.CompFlag = r
}