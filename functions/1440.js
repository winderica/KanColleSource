const function1440 = function (t, e, i) {
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
    var o = i(5),
        r = i(22),
        s = i(477),
        a = i(1443),
        _ = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.playTorpedo = function (t, e, i, n) {
                var o = this;
                void 0 === i && (i = 1800), void 0 === n && (n = null);
                var r = new a.Torpedo(1);
                this.addChild(r), r.play(t, e, i, function () {
                    o.removeChild(r), null != n && n()
                })
            }, e.prototype.playTorpedoAtNight = function (t, e, i, n) {
                var o = this;
                void 0 === i && (i = 800), void 0 === n && (n = null);
                var r = new a.Torpedo(2);
                this.addChild(r), r.play(t, e, i, function () {
                    o.removeChild(r), null != n && n()
                })
            }, e.prototype.playAerialTorpedo = function (t, e, i) {
                var n = this;
                void 0 === i && (i = null);
                var o = new a.Torpedo(3);
                this.addChild(o), o.play(t, e, 0, null), o.once("complete", function () {
                    n.removeChild(o), null != i && i()
                })
            }, e.prototype.playAerialTorpedoSuper = function (t, e, i) {
                var n = this;
                void 0 === i && (i = null);
                var o = new a.Torpedo(5);
                this.addChild(o), o.play(t, e, 0, null), o.once("complete", function () {
                    n.removeChild(o), null != i && i()
                })
            }, e.prototype.playAerialTorpedoJet = function (t, e, i) {
                var n = this;
                void 0 === i && (i = null);
                var o = new a.Torpedo(4);
                this.addChild(o), o.play(t, e, 0, function () {
                    n.removeChild(o), null != i && i()
                })
            }, e
        }(s.LayerExplosion);
    e.LayerTorpedo = _;
    ! function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._night = e, i._canvas = new Array, i._createCanvas(!1, !1), i._createCanvas(!0, !1), i._createCanvas(!1, !0), i._createCanvas(!0, !0), i
        }
        n(e, t), e.prototype.getCanvas = function (t, e) {
            return this._night ? this._canvas[0] : this._canvas[(t ? 1 : 0) + (e ? 2 : 0)]
        }, e.prototype._createCanvas = function (t, e) {
            var i = r.BannerSize.W;
            1 == t && (i += .9 * r.BannerSize.W);
            var n = r.BannerSize.W;
            1 == e && (n += .9 * r.BannerSize.W);
            var s = o.default.width - i - n,
                a = new PIXI.Graphics;
            a.beginFill(16711680, .3), a.drawRect(i, 0, s, o.default.height), a.endFill(), this.addChild(a);
            var _ = new PIXI.Container;
            _.mask = a, this.addChild(_), this._canvas.push(_)
        }
    }(PIXI.Container)
}