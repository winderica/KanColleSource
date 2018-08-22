const function1424 = function (t, e, i) {
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
    var o = i(0), r = i(29), s = i(148), a = i(149), _ = i(15), u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._img = new PIXI.Sprite, e._icon = new s.BannerIcon, e._soot = new a.BannerSoot, e.addChild(e._img), e.addChild(e._icon), e.addChild(e._soot), e
        }

        return n(e, t), e.prototype.initialize = function (t, e, i, n, o) {
            this._mst_id = t, this._updateState(e, i), this._taihi = n, this._icon.initialize(o), this._updateImage(), this._updateIcon(e, i)
        }, e.prototype.update = function (t, e) {
            this._updateState(t, e), this._updateImage(), this._updateIcon(t, e)
        }, e.prototype._updateState = function (t, e) {
            t <= 0 ? this._damaged = 2 : r.ShipUtil.isDamaged(t, e) ? this._damaged = 1 : this._damaged = 0
        }, e.prototype._updateImage = function () {
            if (this._mst_id < 0) switch (this._mst_id) {
                case-1:
                    this._img.texture = _.BATTLE_MAIN.getTexture(0);
                    break;
                case-2:
                    this._img.texture = _.BATTLE_MAIN.getTexture(1);
                    break;
                case-3:
                    this._img.texture = _.BATTLE_MAIN.getTexture(2)
            } else switch (this._damaged) {
                case 0:
                    this._img.texture = o.default.resources.getShip(this._mst_id, !1, "banner");
                    break;
                case 1:
                    this._img.texture = o.default.resources.getShip(this._mst_id, !0, "banner");
                    break;
                case 2:
                    this._img.texture = o.default.resources.getShip(this._mst_id, !0, "banner_g")
            }
        }, e.prototype._updateIcon = function (t, e) {
            if (0 == this._taihi) {
                var i = r.ShipUtil.getDamageType(t, e);
                this._icon.setDamagedIcon(i), this._soot.update(i)
            } else this._icon.setTaihiIcon()
        }, e
    }(PIXI.Container);
    e.BannerImage = u
}