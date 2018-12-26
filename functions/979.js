const function979 = function (t, e, i) {
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
        r = i(161),
        s = i(161),
        a = i(29),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._fuelTitle = new PIXI.Sprite, e.addChild(e._fuelTitle), e._ammoTitle = new PIXI.Sprite, e._ammoTitle.x = 141, e.addChild(e._ammoTitle), e._fuelBox = new r.FuelContainer, e._fuelBox.y = 126, e.addChild(e._fuelBox), e._ammoBox = new s.AmmoContainer, e._ammoBox.x = 141, e._ammoBox.y = 126, e.addChild(e._ammoBox), e._fuelText = new o.TextBox(28, 4999235), e._fuelText.y = 84, e.addChild(e._fuelText), e._ammoText = new o.TextBox(28, 4999235), e._ammoText.y = 84, e.addChild(e._ammoText), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._fuelTitle.texture = a.SALLY_COMMON.getTexture(17), this._ammoTitle.texture = a.SALLY_COMMON.getTexture(16)
            }, e.prototype.update = function (t, e) {
                this._fuelText.text = t.toString(), this._fuelText.x = 128 - this._fuelText.width, this._ammoText.text = e.toString(), this._ammoText.x = 269 - this._ammoText.width, this._fuelBox.update(t), this._ammoBox.update(e)
            }, e.prototype.play = function (t, e, i) {
                1 == t ? (this._fuelBox.playSupply(i), 1 == e && this._ammoBox.playSupply(function () {})) : 1 == e ? this._ammoBox.playSupply(i) : i()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._fuelBox.dispose(), this._ammoBox.dispose(), this._fuelText.destroy(), this._ammoText.destroy()
            }, e
        }(PIXI.Container);
    e.TempSupplyBox = _
}