const function748 = function (t, e, i) {
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
                this.meter.texture = o.COMMON_MISC.getTexture(133), this.meterLight.texture = o.COMMON_MISC.getTexture(145);
                var i;
                0 == t ? i = 0 : t == e ? i = 10 : (i = Math.floor(9 * t / e) + 1, 10 < i && (i = 10), i < 0 && (i = 0));
                this.meter.texture = o.COMMON_MISC.getTexture(this.getResIDProgressImage(i))
            }, e.prototype.getResIDProgressImage = function (t) {
                switch (t) {
                    case 0:
                        return 133;
                    case 1:
                        return 134;
                    case 2:
                        return 136;
                    case 3:
                        return 137;
                    case 4:
                        return 138;
                    case 5:
                        return 139;
                    case 6:
                        return 140;
                    case 7:
                        return 141;
                    case 8:
                        return 142;
                    case 9:
                        return 143;
                    case 10:
                        return 135
                }
            }, e.prototype.dispose = function () {
                this.removeChild(this.meter), this.removeChild(this.meterLight), this.meter = null, this.meterLight = null
            }, e
        }(PIXI.Container);
    e.MaterialMeterViewS = r
}