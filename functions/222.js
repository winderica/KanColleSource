const function222 = function (t, e, i) {
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
    var o = i(3),
        r = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(21)),
                    n = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(22)),
                    r = new PIXI.Sprite(o.REPAIR_MAIN.getTexture(23)),
                    s = new PIXI.Graphics;
                return r.position.set(-22, -25), r.visible = !1, e.addChild(n, s, i, r), e.redLight = r, e.gauge = s, e
            }
            return n(e, t), e.prototype.update = function (t, e) {
                var i = t / e * 100;
                i <= 0 ? i = 0 : 100 <= i && (i = 100), this.updateGauge(i), this.updateBrokenLamp(t / e)
            }, e.prototype.updateBrokenLamp = function (t) {
                null != this.tween && (this.tween.setPaused(!0), this.tween = null);
                var e = .7 * (1 - t);
                this.redLight.visible = !0, this.redLight.alpha = 0, this.tween = createjs.Tween.get(this.redLight), this.tween.to({
                    alpha: e
                }, 1e3).to({
                    alpha: 0
                }, 1e3), this.tween.loop = !0, this.tween.play(null)
            }, e.prototype.updateGauge = function (t) {
                var e = 0;
                t < 33.3 ? (e = 255 << 16, e += t / 33.3 * 128 << 8) : t < 66.6 ? (e = 255 << 16, e += 32768, e += (t - 33.3) / 33.3 * 128 << 8) : (e = 255 - (t - 66.6) / 33.3 * 255 << 16, e += 65280), this.gauge.clear(), this.gauge.beginFill(e), this.gauge.drawRect(0, 0, t / 100 * 237, 10), this.gauge.endFill()
            }, e.prototype.dispose = function () {
                this.removeChild(this.gauge), this.removeChild(this.redLight), null != this.tween && (this.tween.setPaused(!0), createjs.Tween.removeTweens(this.redLight)), this.gauge = null, this.redLight = null, this.tween = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.RepairHpGaugeView = r
}