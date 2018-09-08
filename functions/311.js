const function311 = function (t, e, i) {
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
    var o = i(21), r = function (t) {
        function e() {
            var e = t.call(this) || this, i = new PIXI.Sprite(o.COMMON_MAIN.getTexture(21)),
                n = new PIXI.Sprite(o.COMMON_MAIN.getTexture(20));
            return i.x = 3, i.y = 3, i.scale.x = 0, e.addChild(n, i), e.bar = i, e
        }

        return n(e, t), e.prototype.update = function (t) {
            this.bar.scale.x = .01 * t, 1 <= this.bar.scale.x ? this.bar.scale.x = 1 : this.bar.scale.x <= 0 && (this.bar.scale.x = 0)
        }, e.prototype.dispose = function () {
            this.removeChild(this.bar), this.bar = null
        }, e
    }(PIXI.Container);
    e.ExpGaugeView = r
}