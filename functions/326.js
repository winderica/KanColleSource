const function326 = function (t, e, i) {
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
    var o = i(9),
        r = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite,
                    n = new PIXI.Sprite;
                return n.position.set(-29, -27), n.alpha = 0, e.addChild(n, i), e.meter = i, e.meterLight = n, e
            }
            return n(e, t), e.prototype.update = function (t, e) {
                this.meter.texture = o.COMMON_MISC.getTexture(121), this.meterLight.texture = o.COMMON_MISC.getTexture(132), null != this.meterLightTween && (this.meterLightTween.setPaused(!0), this.meterLightTween = null);
                var i;
                0 == t ? i = 0 : t == e ? i = 10 : (i = Math.floor(9 * t / e) + 1, 10 < i && (i = 10), i < 0 && (i = 0));
                var n;
                n = 0 == i ? 1 : 10 == i ? 0 : (11 - i) / 11;
                var r = this.getTextureNoProgressImage(i);
                this.meter.texture = o.COMMON_MISC.getTexture(r), this.meterLightTween = createjs.Tween.get(this.meterLight).to({
                    alpha: 0
                }).to({
                    alpha: n
                }, 1e3).to({
                    alpha: 0
                }, 1e3), this.meterLightTween.loop = !0, this.meterLightTween.play(null)
            }, e.prototype.dispose = function () {
                null != this.meterLightTween && this.meterLightTween.setPaused(!0), createjs.Tween.removeTweens(this.meterLight), this.removeChild(this.meter), this.removeChild(this.meterLight), this.meterLightTween = null, this.meter = null, this.meterLight = null
            }, e.prototype.getTextureNoProgressImage = function (t) {
                switch (t) {
                    case 0:
                        return 121;
                    case 1:
                        return 122;
                    case 2:
                        return 124;
                    case 3:
                        return 125;
                    case 4:
                        return 126;
                    case 5:
                        return 127;
                    case 6:
                        return 128;
                    case 7:
                        return 129;
                    case 8:
                        return 130;
                    case 9:
                        return 131;
                    case 10:
                        return 123
                }
            }, e
        }(PIXI.Container);
    e.MaterialMeterView = r
}