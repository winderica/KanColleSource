const function179 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(23), r = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            this.removeChildren();
            var i = t ? e ? "battle_telop_mes2_f_hbg" : "battle_telop_mes2_f_ybg" : e ? "battle_telop_mes2_e_hbg" : "battle_telop_mes2_e_ybg",
                n = PIXI.Sprite.fromFrame(i);
            n.x = -Math.floor(n.width / 2), n.y = -Math.floor(n.height / 2), this.addChild(n)
        }, e
    }(o.Container);
    e.TelopBG = r
}