const function164 = function (t, e, i) {
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
    var o = i(4),
        r = i(3),
        s = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Container,
                    n = new PIXI.Sprite(r.COMMON_MAIN.getTexture(30)),
                    s = new PIXI.Sprite(r.COMMON_MAIN.getTexture(29)),
                    a = new o.TextBox(20, 1949120),
                    _ = new PIXI.Sprite(r.COMMON_MAIN.getTexture(31));
                return n.width = 18, n.height = 18, s.position.set(17, 3), a.position.set(30, -3), _.position.set(8, -6), i.addChild(n, s, a), e.starLevel = i, e.text = a, e.starMax = _, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.starLevel.removeChildren(), this.text.destroy(), this.starLevel = null, this.text = null, this.starMax = null
            }, e.prototype.update = function (t) {
                this.removeChildren(), 10 <= t ? this.addChild(this.starMax) : 0 < t && (this.addChild(this.starLevel), this.text.text = t.toString())
            }, e
        }(PIXI.Container);
    e.SlotItemLevel = s
}