const function107 = function (t, e, i) {
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
    var o = i(0), r = i(30), s = function (t) {
        function e() {
            var e = t.call(this) || this, i = o.default.resources.getUIImage("hpgauge/hp_gauge_mask.png", "common"),
                n = new PIXI.Sprite(i);
            i = o.default.resources.getUIImage("hpgauge/hp_s_bg2.png", "common");
            var r = new PIXI.Sprite(i), s = new PIXI.Sprite, a = new PIXI.Graphics, _ = new PIXI.Graphics;
            i = o.default.resources.getUIImage("hpgauge/hp_gauge_mask.png", "common");
            var l = new PIXI.Sprite(i);
            s.position.set(-34, -27), s.texture = o.default.resources.getUIImage("hpgauge/hp_s_red_light.png", "common"), s.visible = !1, a.beginFill(16777215), a.drawRect(0, 0, 98, 11), a.endFill();
            var u = new PIXI.Container;
            u.mask = n, u.addChild(a, n), u.cacheAsBitmap = !0;
            var c = new PIXI.Container;
            return c.mask = l, c.addChild(_, l), e.addChild(u, s, c, r), e.spriteRedLight = s, e.graphicsGauge = _, e.containerGaugeBackground = u, e.containerGauge = c, e
        }

        return n(e, t), e.prototype.update = function (t, e) {
            var i = t / e * 100;
            i <= 0 ? i = 0 : 100 <= i && (i = 100), this.updateGauge(i);
            var n = r.ShipUtil.getDamageType(t, e), o = 25 == n, s = 50 == n;
            this.updateTaihaLamp(o || s)
        }, e.prototype.updateTaihaLamp = function (t) {
            if (createjs.Tween.removeTweens(this.spriteRedLight), t) {
                this.spriteRedLight.visible = !0, this.spriteRedLight.alpha = 0;
                var e = createjs.Tween.get(this.spriteRedLight).to({ alpha: .7 }, 1e3).to({ alpha: 0 }, 1e3);
                e.loop = !0, e.play(null)
            } else this.spriteRedLight.visible = !1, this.spriteRedLight.alpha = 0
        }, e.prototype.updateGauge = function (t) {
            var e = 0;
            t < 33.3 ? (e = 255 << 16, e += t / 33.3 * 128 << 8) : t < 66.6 ? (e = 255 << 16, e += 32768, e += (t - 33.3) / 33.3 * 128 << 8) : (e = 255 - (t - 66.6) / 33.3 * 255 << 16, e += 65280), this.containerGauge.cacheAsBitmap = !1, this.graphicsGauge.clear(), this.graphicsGauge.beginFill(e), this.graphicsGauge.drawRect(0, 0, t / 100 * 98, 11), this.graphicsGauge.endFill(), this.containerGauge.cacheAsBitmap = !0
        }, e.prototype.dispose = function () {
            createjs.Tween.removeTweens(this.spriteRedLight), this.containerGauge.cacheAsBitmap = !1, this.containerGauge.mask = null, this.containerGauge.removeChildren(), this.containerGauge = null, this.containerGaugeBackground.cacheAsBitmap = !1, this.containerGaugeBackground.mask = null, this.containerGaugeBackground.removeChildren(), this.containerGaugeBackground = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.HpGaugeView = s
}