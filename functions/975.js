const function975 = function (t, e, i) {
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
    var o = i(4),
        r = i(26),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._star = new PIXI.Sprite, e._star.position.set(0, 3), e.addChild(e._star), e._plus = new PIXI.Sprite, e._plus.position.set(18, 6), e.addChild(e._plus), e._num = new o.TextBox(19, 3198426), e._num.position.set(30, 0), e.addChild(e._num), e._max = new PIXI.Sprite, e._max.position.set(6, 0), e.addChild(e._max), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._star.visible = !1, this._plus.visible = !1, this._max.visible = !1, this._star.texture = r.SALLY_AIRUNIT.getTexture(45), this._plus.texture = r.SALLY_AIRUNIT.getTexture(44), this._max.texture = r.SALLY_AIRUNIT.getTexture(46)
            }, e.prototype.update = function (t) {
                t <= 0 || t > 10 ? (this._star.visible = !1, this._plus.visible = !1, this._num.text = "", this._max.visible = !1) : 10 == t ? (this._star.visible = !1, this._plus.visible = !1, this._num.text = "", this._max.visible = !0) : (this._star.visible = !0, this._plus.visible = !0, this._num.text = t.toString(), this._max.visible = !1)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._num.destroy()
            }, e
        }(PIXI.Container);
    e.SlotitemLevel = s
}