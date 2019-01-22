const function1438 = function (t, e, i) {
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
    var o = i(24),
        r = i(1439),
        s = i(1440),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.showAtBanner = function (t, e, i, n) {
                void 0 === n && (n = null);
                var o = t.getGlobalPos(!0),
                    r = 1 == t.friend ? o.x + 23 : o.x - 74,
                    s = o.y + 7;
                this.show(r, s, e, i, n)
            }, e.prototype.show = function (t, e, i, n, o) {
                var s = this;
                void 0 === o && (o = null), i <= 0 ? n = 0 : i >= 40 ? n = 2 : i < 15 && 2 == n && (n = 1);
                var a = new r.DamageNumber;
                a.position.set(t, e), a.initialize(i, n), this.addChild(a), a.play(function () {
                    createjs.Tween.get(a).to({
                        alpha: 0
                    }, 230).call(function () {
                        s.removeChild(a), null != o && o()
                    })
                })
            }, e.prototype.showShieldAtBanner = function (t) {
                var e = t.getGlobalPos(!0),
                    i = e.x,
                    n = e.y,
                    r = t.friend;
                1 == r ? i += o.BannerSize.W / 2 + 30 : i -= o.BannerSize.W / 2 + 30, this.showShield(i, n, r)
            }, e.prototype.showShield = function (t, e, i) {
                var n = new s.Shield;
                n.position.set(t, e), n.scale.x = i ? 1 : -1, n.initialize(), this.addChild(n), n.play()
            }, e
        }(PIXI.Container);
    e.LayerDamage = a
}