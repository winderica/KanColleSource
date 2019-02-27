const function1017 = function (t, e, i) {
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
    var o = i(54),
        r = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this._result = new PIXI.Sprite, this._rank = new PIXI.Sprite, this._rank.position.set(66, 7), this.addChild(this._result), this.addChild(this._rank)
            }, e.prototype.update = function (t) {
                this.visible = !0, 6 == t ? (this._result.texture = o.SALLY_PRACTICE.getTexture(26), this._rank.texture = o.SALLY_PRACTICE.getTexture(25)) : 5 == t ? (this._result.texture = o.SALLY_PRACTICE.getTexture(26), this._rank.texture = o.SALLY_PRACTICE.getTexture(20)) : 4 == t ? (this._result.texture = o.SALLY_PRACTICE.getTexture(26), this._rank.texture = o.SALLY_PRACTICE.getTexture(21)) : 3 == t ? (this._result.texture = o.SALLY_PRACTICE.getTexture(19), this._rank.texture = o.SALLY_PRACTICE.getTexture(22)) : 2 == t ? (this._result.texture = o.SALLY_PRACTICE.getTexture(19), this._rank.texture = o.SALLY_PRACTICE.getTexture(23)) : 1 == t ? (this._result.texture = o.SALLY_PRACTICE.getTexture(19), this._rank.texture = o.SALLY_PRACTICE.getTexture(24)) : this.visible = !1
            }, e.prototype.dispose = function () {}, e
        }(PIXI.Container);
    e.CompRank = r
}