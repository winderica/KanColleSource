const function1504 = function (t, e, i) {
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
    var o = i(1505),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._banners = [], e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._resetBanners();
                var e = 0;
                e = 7 == t.length ? 0 : 68;
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (null == n) return;
                    var r = new o.ShipBannerClone(n.isTaihi());
                    r.y = e + 68 * i, r.alpha = 0, this._banners.push(r);
                    var s = n.mst_id,
                        a = n.hp_now,
                        _ = n.hp_max;
                    r.updateTexture(s, a, _), r.updateIcon(n.damageType, n.isGround()), this.addChild(r)
                }
            }, e.prototype.dispose = function () {
                this._resetBanners(), this._banners = null, this.removeChildren()
            }, e.prototype.createShowTweens = function (t) {
                for (var e = [], i = 0; i < this._banners.length; i++) {
                    var n = this._banners[i];
                    n.y += 30;
                    var o = createjs.Tween.get(n).wait(t + 50 * i).to({
                        y: n.y - 30,
                        alpha: 1
                    }, 150);
                    e.push(o)
                }
                return e
            }, e.prototype.createHideTweens = function (t) {
                for (var e = [], i = 0; i < this._banners.length; i++) {
                    var n = this._banners[i],
                        o = createjs.Tween.get(n).wait(t + 100 * (this._banners.length - 1 - i)).to({
                            y: n.y + 30,
                            alpha: 0
                        }, 200);
                    e.push(o)
                }
                return e
            }, e.prototype.getBanner = function (t) {
                return t >= 0 && null != this._banners && t < this._banners.length ? this._banners[t] : null
            }, e.prototype._resetBanners = function () {
                for (null == this._banners && (this._banners = []); this._banners.length > 0;) {
                    var t = this._banners.pop();
                    null != t.parent && t.parent.removeChild(t), t.dispose()
                }
            }, e
        }(PIXI.Container);
    e.BannerSet = r
}