const function1426 = function (t, e, i) {
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
    var o = i(17), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.visible = !1, e
        }

        return n(e, t), e.prototype.show = function (t, e) {
            void 0 === t && (t = 16711680), void 0 === e && (e = .5), this._draw(t, e), this.alpha = 1, this.visible = !0
        }, e.prototype.playDamageAnimation = function () {
            var t = this;
            this._stop(), this.alpha = 0, this.visible = !0, this._draw(16711680, .5), this._t = createjs.Tween.get(this).to({ alpha: 1 }, 300).to({ alpha: 0 }, 500).call(function () {
                t.visible = !1, t._t = null
            })
        }, e.prototype.playShieldAnimation = function () {
            var t = this;
            this._stop(), this._draw(16777088, 0), this.alpha = 1, this.visible = !0;
            var e = { r: 255, g: 255, b: 128, a: 0 }, i = function (e) {
                var i = e.target.target, n = (Math.round(i.r) << 16) + (Math.round(i.g) << 8) + Math.round(i.b);
                t._draw(n, i.a)
            };
            this._t = createjs.Tween.get(e, { onChange: i }).to({ a: .75 }, 233).to({
                r: 128,
                g: 255,
                b: 255
            }, 100).to({ r: 255, g: 192, b: 192 }, 100).to({ r: 255, g: 255, b: 255 }, 166).call(function () {
                t.visible = !1, t._t = null
            })
        }, e.prototype._stop = function () {
            null != this._t && (this._t.setPaused(!0), this._t = null)
        }, e.prototype._draw = function (t, e) {
            this.clear(), this.beginFill(t, e), this.drawRect(0, 0, o.BannerSize.W, o.BannerSize.H), this.endFill()
        }, e
    }(PIXI.Graphics);
    e.BannerOverlay = r
}