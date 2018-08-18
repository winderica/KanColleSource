const function1007 = function (t, e, i) {
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
    var o = i(4), r = i(81), s = i(32), a = i(53), _ = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), Object.defineProperty(e.prototype, "banner", {
            get: function () {
                return this._banner
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            var t = new PIXI.Sprite(a.SALLY_PRACTICE.getTexture(34));
            this._banner = new s.ShipBanner, this._name = new o.TextBox(21, 4999235), this._level = new o.TextBox(22, 4999235), this._star = new r.StarRateView, t.position.set(330, 12), this._name.position.set(243, 0);
            var e = new PIXI.Graphics;
            e.beginFill(0), e.drawRect(0, 0, 117, this._name.height), e.endFill(), this._name.mask = e, this._level.position.set(391, 9), this._level.anchor.set(1, 0), this._star.position.set(295, 40), this.addChild(t), this.addChild(this._banner), this._name.addChild(e), this.addChild(this._name), this.addChild(this._level), this.addChild(this._star)
        }, e.prototype.update = function (t) {
            null == t ? this.visible = !1 : (this._name.text = t.name, this._level.text = t.level.toString(), this._star.update(t.star + 1), this._banner.updateImage(t.id, !1), this.visible = !0)
        }, e.prototype.dispose = function () {
            this._banner.dispose()
        }, e
    }(PIXI.Container);
    e.CompRivalShip = _
}