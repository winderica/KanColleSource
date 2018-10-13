const function1154 = function (t, e, i) {
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
    var o = i(4), r = i(3), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._text = new o.TextBox(28, 5010027), e._text.anchor.x = 1, e._text.position.set(174, 27), e.addChild(e._text), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = r.ITEM_FSHOP.getTexture(37), this.update(0)
        }, e.prototype.update = function (t) {
            t = Math.max(t, 0), this._text.text = t.toString()
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._text.destroy()
        }, e
    }(PIXI.Sprite);
    e.CoinBox = s
}