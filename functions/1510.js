const function1510 = function (t, e, i) {
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
    var o = i(12),
        r = i(9),
        s = i(8),
        a = i(487),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._mst_id = e, i._fish = [], i._waves = [], i._white = new s.AreaBox(1, 16777215), i._flash = new o.Sprite, i._flash.anchor.set(.5), i._flash.scale.set(0), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "white", {
                get: function () {
                    return this._white
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fish", {
                get: function () {
                    return this._fish
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "waves", {
                get: function () {
                    return this._waves
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "flash", {
                get: function () {
                    return this._flash
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                var t;
                t = 68 == this._mst_id ? 4 : 2;
                for (var e = 0; e < 3; e++) {
                    var i = new o.Sprite(a.BATTLE_RESULT_SANMA_FES.getTexture(t));
                    i.visible = !0, i.alpha = 0, i.anchor.set(.5), this._fish.push(i)
                }
                var n = new o.Sprite(a.BATTLE_RESULT_SANMA_FES.getTexture(1));
                n.visible = !0, n.alpha = 0, n.anchor.set(.5);
                var s = new o.Sprite(a.BATTLE_RESULT_SANMA_FES.getTexture(0));
                s.visible = !0, s.alpha = 0, s.anchor.set(.5), this._waves.push(s, n), this._flash.texture = r.COMMON_MISC.getTexture(68), this._flash.visible = !0, this._flash.alpha = 0, this._white.visible = !0, this._white.alpha = 0, this.addChild(this._flash), this.addChild(this._white), this.addChild(this._waves[0], this._fish[2], this._waves[1]), this.addChild(this._fish[0], this._fish[1])
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._fish.map(function (t) {
                    return null
                }), this._fish = null, this._waves.map(function (t) {
                    return null
                }), this._waves = null, this._white = null, this._flash = null
            }, e
        }(PIXI.Container);
    e.BonusInsertWave = _
}