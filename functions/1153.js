const function1153 = function (t, e, i) {
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
    var o = i(31),
        r = i(3),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._light = new PIXI.Sprite, e._light.position.set(-22, -24), e.addChild(e._light), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this._stopTween(), t.prototype.dispose.call(this)
            }, e.prototype._update = function (t) {
                0 == t ? (this.texture = r.ITEM_ILIST.getTexture(10), this._light.texture = r.ITEM_ILIST.getTexture(1)) : (this.texture = r.ITEM_ILIST.getTexture(11), this._light.texture = r.ITEM_ILIST.getTexture(2)), this._stopTween(), this._startTween()
            }, e.prototype._activate = function () {
                this._stopTween(), this._startTween(), t.prototype._activate.call(this)
            }, e.prototype._startTween = function () {
                this._light.alpha = 0, this._tween = createjs.Tween.get(this._light, {
                    loop: !0
                }).to({
                    alpha: 1
                }, 3e3).to({
                    alpha: 0
                }, 3e3)
            }, e.prototype._stopTween = function () {
                null != this._tween && this._tween.setPaused(!0), this._tween = null
            }, e
        }(o.BtnBase);
    e.PickupBtn = s
}