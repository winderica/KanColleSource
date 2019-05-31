const function207 = function (t, e, i) {
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
    var o = i(303),
        r = i(23),
        s = i(12),
        a = i(644),
        _ = i(9),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg_light = new o.GetBG, e._bg_dark = new o.GetBG, e._particle = new a.BonusInsertParticle, e._card = new u, e._flash = new s.Sprite, e._flash.anchor.set(.5), e._flash.scale.set(0), e.addChild(e._bg_light), e.addChild(e._bg_dark), e.addChild(e._particle), e.addChild(e._card), e.addChild(e._flash), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg_dark", {
                get: function () {
                    return this._bg_dark
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "particle", {
                get: function () {
                    return this._particle
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "card", {
                get: function () {
                    return this._card
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "flash", {
                get: function () {
                    return this._flash
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.preload = function (t) {
                var e = this;
                this._bg_light.initiailzeGetBG1(function () {
                    e._bg_dark.initiailzeGetBG2(function () {
                        null != t && t()
                    })
                })
            }, e.prototype.initialize = function (t) {
                this._card.initialize(t), this._flash.texture = _.COMMON_MISC.getTexture(68)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._bg_light = null, this._bg_dark = null, this._particle.dispose(), this._particle = null, this._card = null, this._flash = null
            }, e
        }(PIXI.Container);
    e.BonusInsert = l;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._content = new PIXI.Sprite, e._content.anchor.set(.5), e.addChild(e._content), e
        }
        return n(e, t), e.prototype.initialize = function (t) {
            this._content.texture = _.COMMON_MISC.getTexture(67), 3 != t && (this._content.scale.y = .7)
        }, e
    }(r.Container)
}