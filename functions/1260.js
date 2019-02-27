const function1260 = function (t, e, i) {
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
    var o = i(20),
        r = i(244),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new PIXI.Sprite, e._bg.x = -11, e._bg.y = -128, e.addChild(e._bg), e._label1 = new PIXI.Sprite, e.addChild(e._label1), e._label2 = new PIXI.Sprite, e.addChild(e._label2), e._icon = new PIXI.Sprite, e._icon.anchor.x = 1, e._icon.position.set(44, -80), e.addChild(e._icon), e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                switch (this._bg.texture = o.MAP_COMMON.getTexture(49), 2 == t ? (this._label1.texture = o.MAP_COMMON.getTexture(173), this._label1.position.set(20, -117), this._label2.texture = o.MAP_COMMON.getTexture(175), this._label2.position.set(20, -41)) : 1 == t ? (this._label1.texture = o.MAP_COMMON.getTexture(174), this._label1.position.set(24, -117), this._label2.texture = o.MAP_COMMON.getTexture(175), this._label2.position.set(20, -41)) : (this._label1.texture = o.MAP_COMMON.getTexture(176), this._label1.position.set(11, -86), this._label2.texture = PIXI.Texture.EMPTY), e) {
                    case 2:
                        this._icon.texture = o.MAP_COMMON.getTexture(78);
                        break;
                    case 4:
                        this._icon.texture = o.MAP_COMMON.getTexture(79);
                        break;
                    case 7:
                        this._icon.texture = o.MAP_COMMON.getTexture(80);
                        break;
                    default:
                        this._icon.texture = PIXI.Texture.EMPTY
                }
                if (i > 0) {
                    var n = Math.log(i) * Math.LOG10E + 1;
                    n = Math.floor(n);
                    for (var s = i, a = 0; a < n; a++) {
                        var _ = new r.NumericalDisplay(s % 10);
                        _.x = 77 + n / 2 * _.width - a * _.width, _.y = -60, this.addChild(_), s = Math.floor(s / 10)
                    }
                    var l = new r.NumericalDisplay(-1);
                    l.x = 77 - n / 2 * l.width, l.y = -60, this.addChild(l)
                }
            }, e
        }(PIXI.Container);
    e.AirReconnaissanceBalloon = s
}