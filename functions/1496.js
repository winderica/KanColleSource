const function1496 = function (t, e, i) {
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
    var o = i(0),
        r = i(22),
        s = i(29),
        a = i(159),
        _ = i(160),
        u = i(16),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e._icon = new a.BannerIcon, e._soot = new _.BannerSoot, e.addChild(e._img), e.addChild(e._icon), e.addChild(e._soot), e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i, n, o, s, a) {
                if (this._mst_id = t, this._updateState(e, i), this._taihi = n, this._icon.initialize(o), this._combined = s, this._friend = a, this._updateImage(s, a), this._updateIcon(e, i), this._friend && this._combined) {
                    var _ = new PIXI.Graphics;
                    _.beginFill(16711680, .5), _.drawRect(r.BannerSize.W / 2, 0, r.BannerSize.W / 2, r.BannerSize.H), _.endFill(), this._soot.addChild(_), this._soot.mask = _
                }
            }, e.prototype.update = function (t, e) {
                this._updateState(t, e), this._updateImage(this._combined, this._friend), this._updateIcon(t, e)
            }, e.prototype.getAnimationTweens = function (t) {
                var e = this;
                this._combined = !1;
                var i = this._img.texture,
                    n = new PIXI.Sprite(i);
                n.x = this._img.x, n.y = this._img.y;
                var o = this.getChildIndex(this._img);
                this.addChildAt(n, o), this._img.texture = this._getTexture(), this._img.alpha = 0;
                var r = [createjs.Tween.get(this._img).wait(t).to({
                    alpha: 1
                }, 600).call(function () {
                    e.removeChild(n);
                    var t = e._img.mask;
                    t && (t.parent.removeChild(t), e._img.mask = null)
                })];
                if (this._soot.mask) {
                    var s = this._soot.mask;
                    this._soot.removeChild(s), this._soot.mask = null, this._soot.alpha = 0;
                    var a = new _.BannerSoot;
                    a.texture = this._soot.texture, a.addChild(s), a.mask = s, this.addChildAt(a, this.getChildIndex(this._soot)), r.push(createjs.Tween.get(this._soot).wait(t).to({
                        alpha: 1
                    }, 600)), r.push(createjs.Tween.get(a).wait(t).to({
                        alpha: 0
                    }, 600).call(function () {
                        e.removeChild(a)
                    }))
                }
                return r
            }, e.prototype._updateState = function (t, e) {
                t <= 0 ? this._damaged = 2 : s.ShipUtil.isDamaged(t, e) ? this._damaged = 1 : this._damaged = 0
            }, e.prototype._updateImage = function (t, e) {
                if (this._mst_id < 0) switch (this._mst_id) {
                    case -1:
                        this._img.texture = u.BATTLE_MAIN.getTexture(0);
                        break;
                    case -2:
                        this._img.texture = u.BATTLE_MAIN.getTexture(1);
                        break;
                    case -3:
                        this._img.texture = u.BATTLE_MAIN.getTexture(2)
                } else this._img.texture = t ? e ? this._getTextureCombinedFriend() : this._getTextureCombinedEnemy() : this._getTexture()
            }, e.prototype._getTexture = function () {
                if (2 == this._damaged || 1 == this._taihi) return o.default.resources.getShip(this._mst_id, !0, "banner_g");
                var t = 0 != this._damaged;
                return o.default.resources.getShip(this._mst_id, t, "banner")
            }, e.prototype._getTextureCombinedFriend = function () {
                if (2 == this._damaged || 1 == this._taihi) return o.default.resources.getShip(this._mst_id, !0, "banner2_g");
                var t = 0 != this._damaged;
                return o.default.resources.getShip(this._mst_id, t, "banner2")
            }, e.prototype._getTextureCombinedEnemy = function () {
                if (2 == this._damaged || 1 == this._taihi) return o.default.resources.getShip(this._mst_id, !0, "banner3_g");
                var t = 0 != this._damaged;
                return o.default.resources.getShip(this._mst_id, t, "banner3")
            }, e.prototype._updateIcon = function (t, e) {
                if (0 == this._taihi) {
                    var i = s.ShipUtil.getDamageType(t, e);
                    this._icon.setDamagedIcon(i), this._soot.update(i)
                } else this._icon.setTaihiIcon()
            }, e
        }(PIXI.Container);
    e.BannerImage = l
}