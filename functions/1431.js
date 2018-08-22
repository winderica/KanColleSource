const function1431 = function (t, e, i) {
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
    var o = i(15), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.anchor.set(.5), e.alpha = 0, e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.BATTLE_MAIN.getTexture(111)
        }, e.prototype.play = function () {
            var t = this, e = { a: 0, r: 255, g: 255, b: 255 }, i = function (e) {
                var i = e.target.target;
                t.alpha = i.a;
                var n = (Math.round(i.r) << 16) + (Math.round(i.g) << 8) + Math.round(i.b);
                t.tint = n
            };
            createjs.Tween.get(e, { onChange: i }).to({ a: 1 }, 100).to({ r: 128 }, 100).to({
                r: 255,
                g: 192,
                b: 192
            }, 100).to({ a: 0 }, 100).call(function () {
                null != t.parent && t.parent.removeChild(t)
            })
        }, e
    }(PIXI.Sprite);
    e.Shield = r
}