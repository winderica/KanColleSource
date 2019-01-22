const function1011 = function (t, e, i) {
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
        r = i(83),
        s = i(34),
        a = i(14),
        _ = i(54),
        l = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(_.SALLY_PRACTICE.getTexture(34));
                this._banner = new s.ShipBanner, this._name = new o.TextBox(21, 4999235), this._level = new o.TextBox(20, 4999235), this._star = new r.StarRateView, this._container = new PIXI.Container, t.position.set(330, 12);
                var e = a.CreateRect.gradientLeftToRight(95, this._name.height, .85, .9);
                this._container.position.set(243, 0), this._level.position.set(392, 11), this._level.anchor.set(1, 0), this._star.position.set(295, 40), this.addChild(t), this.addChild(this._banner), this.addChild(this._container), this._container.addChild(this._name, e), this._container.mask = e, this.addChild(this._level), this.addChild(this._star)
            }, e.prototype.update = function (t) {
                null == t ? this.visible = !1 : (this._container.cacheAsBitmap = !1, this._name.text = t.name, this._level.text = t.level.toString(), this._star.update(t.star + 1), this._banner.updateImage(t.id, !1), this.visible = !0, this._container.cacheAsBitmap = !0)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._container.cacheAsBitmap = !1, this._container.removeChildren(), this._banner.dispose(), this._star.dispose(), this._name.destroy(), this._level.destroy(), this._container.mask = null, this._name = null, this._level = null, this._star = null, this._container = null
            }, e
        }(PIXI.Container);
    e.CompRivalShip = l
}