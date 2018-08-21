const function1485 = function (t, e, i) {
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
    var o = i(0), r = i(29), s = i(29), a = i(194), _ = i(1486), u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._taihi = e, i._img = new PIXI.Sprite, i._icon = new r.BannerIcon, i._soot = new s.BannerSoot, i._smoke = new a.BannerSmoke, i._smoke.visible = !1, i.addChild(i._img), i.addChild(i._icon), i.addChild(i._soot), i.addChild(i._smoke), i
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._img.texture = PIXI.Texture.EMPTY, this._img = null, this._icon = null, this._soot = null, this._smoke.dispose(), this._smoke = null, null != this._coin && (this._coin.dispose(), this._coin = null)
        }, e.prototype.updateTexture = function (t, e) {
            this._img.texture = o.default.resources.getShip(t, e, "banner")
        }, e.prototype.updateIcon = function (t) {
            this._smoke.stop(), this._smoke.play(t), 0 == this._taihi ? (this._setGrayScale(0 == t), this._soot.update(t), this._icon.setDamagedIcon(t)) : (this._setGrayScale(!0), this._soot.clear(), this._icon.setTaihiIcon())
        }, e.prototype.createShowMVPCoinTween = function () {
            return this._coin = new _.MVPCoin, this._coin.position.set(270, 30), this._coin.initialize(), this._coin.activate(), this._coin.alpha = 0, this.addChild(this._coin), createjs.Tween.get(this._coin).to({ alpha: 1 }, 300)
        }, e.prototype._setGrayScale = function (t) {
            if (1 == t) {
                var e = new PIXI.filters.ColorMatrixFilter;
                e.greyscale(.33), this._img.filters = [e]
            } else this._img.filters = null
        }, e
    }(PIXI.Container);
    e.ShipBannerClone = u
}