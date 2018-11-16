const function1499 = function (t, e, i) {
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
    var o = i(0), r = i(30), s = i(146), a = i(147), _ = i(193), u = i(1500), l = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._taihi = e, i._img = new PIXI.Sprite, i._icon = new s.BannerIcon, i._soot = new a.BannerSoot, i._smoke = new _.BannerSmoke, i._smoke.visible = !1, i.addChild(i._img), i.addChild(i._icon), i.addChild(i._soot), i.addChild(i._smoke), i
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._img.texture = PIXI.Texture.EMPTY, this._img = null, this._icon = null, this._soot = null, this._smoke.dispose(), this._smoke = null, null != this._coin && (this._coin.dispose(), this._coin = null)
        }, e.prototype.updateTexture = function (t, e, i) {
            e <= 0 || 1 == this._taihi ? this._img.texture = o.default.resources.getShip(t, !0, "banner_g") : r.ShipUtil.isDamaged(e, i) ? this._img.texture = o.default.resources.getShip(t, !0, "banner") : this._img.texture = o.default.resources.getShip(t, !1, "banner")
        }, e.prototype.updateIcon = function (t, e) {
            this._smoke.stop(), this._smoke.play(t), 0 == this._taihi ? (this._soot.update(t), this._icon.initialize(e), this._icon.setDamagedIcon(t)) : (this._soot.clear(), this._icon.setTaihiIcon())
        }, e.prototype.createShowMVPCoinTween = function () {
            return this._coin = new u.MVPCoin, this._coin.position.set(270, 30), this._coin.initialize(), this._coin.activate(), this._coin.alpha = 0, this.addChild(this._coin), createjs.Tween.get(this._coin).to({ alpha: 1 }, 300)
        }, e
    }(PIXI.Container);
    e.ShipBannerClone = l
}