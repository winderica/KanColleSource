const function1280 = function (t, e, i) {
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
    var o = i(0),
        r = i(8),
        s = i(60),
        a = i(81),
        _ = i(208),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new s.RarityBG, e._item = new PIXI.Sprite, e._item.anchor.set(.5), e._particle = new _.BonusParticle, e._message_box = new a.MessageBox, e._message_box.y = 721, e._white = new r.AreaBox(1, 16777215), e.addChild(e._bg), e.addChild(e._item), e.addChild(e._particle), e.addChild(e._message_box), e.addChild(e._white), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "particle", {
                get: function () {
                    return this._particle
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message_box", {
                get: function () {
                    return this._message_box
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "white", {
                get: function () {
                    return this._white
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i) {
                this._item.texture = o.default.resources.getUseitem(t, 1), this._item.position.set(600, 255), 85 == t || 85 == t || 85 == t || 85 == t ? this._message_box.initializeForFood(i) : this._message_box.initializeForUseitem(i, e)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._bg = null, this._item = null, this._particle.dispose(), this._particle = null, this._message_box.dispose(), this._message_box = null, this._white = null
            }, e
        }(PIXI.Container);
    e.BonusUseItem = l
}