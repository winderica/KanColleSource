const function750 = function (t, e, i) {
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
    var o = i(3),
        r = i(4),
        s = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new r.TextBox(24, 5523516),
                    n = new r.TextBox(24, 5523516),
                    s = new PIXI.Sprite(o.SUPPLY_MAIN.getTexture(27)),
                    a = new PIXI.Sprite(o.SUPPLY_MAIN.getTexture(28));
                return i.anchor.set(1, 0), n.anchor.set(1, 0), i.position.set(142, 8), n.position.set(300, 8), s.position.set(0, 0), a.position.set(158, 0), e.addChild(i, n, s, a), e.textFuel = i, e.textAmmo = n, e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.textFuel.destroy(), this.textFuel = null, this.textAmmo.destroy(), this.textAmmo = null
            }, e.prototype.update = function (t, e) {
                this.textFuel.text = t.toString(), this.textAmmo.text = e.toString()
            }, e
        }(PIXI.Container);
    e.MaterialCounterView = s
}