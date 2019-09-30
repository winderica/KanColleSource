const function646 = function (t, e, i) {
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
        r = i(60),
        s = i(81),
        a = i(209),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new r.RarityBG, e._ship = new PIXI.Sprite, e._particle = new a.BonusParticle, e._message_box = new s.MessageBox, e._message_box.y = 721, e.addChild(e._bg), e.addChild(e._ship), e.addChild(e._particle), e.addChild(e._message_box), e
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
            }), e.prototype.initialize = function (t, e, i, n, r) {
                this._ship.texture = o.default.resources.getShip(t, !1, "full"), this._message_box.initializeForShip(i, e, n), this._ship.x = r.x + 221, this._ship.y = r.y - 59
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._bg = null, this._ship = null, this._particle.dispose(), this._particle = null, this._message_box.dispose(), this._message_box = null
            }, e
        }(PIXI.Container);
    e.BonusShip = _
}