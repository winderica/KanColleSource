const function1362 = function (t, e, i) {
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
        r = i(448),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e.addChild(e._img), e
            }
            return n(e, t), e.prototype._initialize = function (t, e) {
                if (0 == e) this._img.texture = r.BATTLE_AIRUNIT.getTexture(3);
                else {
                    var i = e / t;
                    if (i < .25) this._img.texture = r.BATTLE_AIRUNIT.getTexture(2);
                    else {
                        if (!(i < .4)) return this._img.texture = PIXI.Texture.EMPTY, !1;
                        this._img.texture = r.BATTLE_AIRUNIT.getTexture(1)
                    }
                }
                return this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2), !0
            }, e.prototype.play = function (t, e, i, n) {
                var r = this;
                return void 0 === n && (n = null), null == t ? void(null != n && n()) : (this.alpha = 0, 0 == this._initialize(e, i) ? void(null != n && n()) : (this.x = o.default.width / 2 + 24, this.y = o.default.height - 90, t.addChild(this), void createjs.Tween.get(this).to({
                    x: o.default.width / 2 + 12,
                    alpha: 1
                }, 300).to({
                    x: o.default.width / 2 - 12
                }, 1500).to({
                    x: o.default.width / 2 - 24,
                    alpha: 0
                }, 300).call(function () {
                    t.removeChild(r), null != n && n()
                })))
            }, e
        }(PIXI.Container);
    e.AirUnitAttackResultTelop = s
}