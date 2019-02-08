const function1219 = function (t, e, i) {
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
    var o = i(135),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._interval_id = 0, e._bg = new PIXI.Sprite, e._bg.anchor.set(.5, .5), e._hand = new PIXI.Sprite, e._hand.anchor.set(.5, .5), e._light = new PIXI.Sprite, e._light.anchor.set(.5, .5), e.addChild(e._bg), e.addChild(e._hand), e.addChild(e._light), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._bg.texture = o.SALLY_MAP_PARTS.getTexture(15), this._hand.texture = o.SALLY_MAP_PARTS.getTexture(17), this._light.texture = o.SALLY_MAP_PARTS.getTexture(16)
            }, e.prototype.activate = function () {
                this._startMove()
            }, e.prototype.deactivate = function () {
                this._stopMove()
            }, e.prototype.dispose = function () {
                this._stopMove()
            }, e.prototype._startMove = function () {
                var t = this;
                0 == this._interval_id && (this._interval_id = setInterval(function () {
                    t._hand.rotation = (4 * Math.random() - 2) / 180 * Math.PI
                }, 30))
            }, e.prototype._stopMove = function () {
                0 != this._interval_id && clearInterval(this._interval_id), this._interval_id = 0
            }, e
        }(PIXI.Container);
    e.CompCompass = r
}