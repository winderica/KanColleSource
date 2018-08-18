const function1422 = function (t, e, i) {
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
    var o = i(0), r = i(31), s = i(193), a = i(195), _ = i(15), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite, e._icon = new s.BannerIcon, e._soot = new a.BannerSoot, e.addChild(e._img), e.addChild(e._icon), e.addChild(e._soot), e
        }

        return n(e, t), e.prototype.initialize = function (t, e, i, n, o) {
            this._mst_id = t, this._damaged = r.ShipUtil.isDamaged(e, i), this._taihi = n, this._icon.initialize(o), this._updateImage(), this._updateIcon(e, i)
        }, e.prototype.update = function (t, e) {
            var i = r.ShipUtil.isDamaged(t, e);
            i != this._damaged && (this._damaged = i, this._updateImage()), this._updateIcon(t, e)
        }, e.prototype._updateImage = function () {
            -1 == this._mst_id ? this._img.texture = _.BATTLE_MAIN.getTexture(0) : -2 == this._mst_id ? this._img.texture = _.BATTLE_MAIN.getTexture(1) : -3 == this._mst_id ? this._img.texture = _.BATTLE_MAIN.getTexture(2) : this._img.texture = o.default.resources.getShip(this._mst_id, this._damaged, "banner")
        }, e.prototype._updateIcon = function (t, e) {
            if (0 == this._taihi) {
                var i = r.ShipUtil.getDamageType(t, e);
                this._icon.setDamagedIcon(i), this._soot.update(i), this._grayScale(0 == i)
            } else this._icon.setTaihiIcon(), this._grayScale(!0)
        }, e.prototype._grayScale = function (t) {
            if (1 == t) {
                if (null == this._img.filters) {
                    var e = new PIXI.filters.ColorMatrixFilter;
                    e.greyscale(.33), this._img.filters = [e]
                }
            } else this._img.filters = null
        }, e
    }(PIXI.Container);
    e.BannerImage = u
}