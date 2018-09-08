const function278 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(579), r = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.initialize = function () {
            this._skipTween(), null == this._content && (this._content = new s, this._content.initialize(this._getTexture(0), this._getTextureOver(0)), this.addChild(this._content))
        }, e.prototype.dispose = function () {
            this._stopTween(), null != this._content && this._content.dispose(), null != this._content_tmp && this._content_tmp.dispose()
        }, e.prototype.startAnimation = function (t) {
            var e = this;
            this._skipTween(), this._content_tmp = new s, this._content_tmp.initialize(this._getTexture(t), this._getTextureOver(t)), this._content_tmp.alpha = 0, this.addChild(this._content_tmp), this._tween = createjs.Tween.get(this._content_tmp).to({ alpha: 1 }, 600).call(function () {
                e._content.dispose(), e.removeChild(e._content), e._content = e._content_tmp, e._content_tmp = null
            })
        }, e.prototype._stopTween = function () {
            null != this._tween && (this._tween.setPaused(!0), this._tween = null)
        }, e.prototype._skipTween = function () {
            this._stopTween(), null != this._content_tmp && (this._content.dispose(), this.removeChild(this._content), this._content_tmp.alpha = 1, this._content = this._content_tmp, this._content_tmp = null)
        }, e.prototype._getTexture = function (t) {
            return 11 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(4) : 12 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(6) : 13 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(8) : 14 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(12) : 15 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(10) : 31 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(0) : 16 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(14) : o.PORT_SKIN_CIRCLE_2.getTexture(2)
        }, e.prototype._getTextureOver = function (t) {
            return 11 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(5) : 12 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(7) : 13 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(9) : 14 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(13) : 15 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(11) : 31 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(1) : 16 == t ? o.PORT_SKIN_CIRCLE_2.getTexture(15) : o.PORT_SKIN_CIRCLE_2.getTexture(3)
        }, e
    }(PIXI.Container);
    e.CircleContentWithSwitching = r;
    var s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._under = new PIXI.Sprite, e.addChild(e._under), e._over = new PIXI.Sprite, e.addChild(e._over), e
        }

        return n(e, t), e.prototype.initialize = function (t, e) {
            this._under.texture = t, this._over.texture = e, this.pivot.x = Math.round(this._under.width / 2), this.pivot.y = Math.round(this._under.height / 2), this._over.alpha = 0, this._tween = createjs.Tween.get(this._over, { loop: !0 }).to({ alpha: .6 }, 1e3, createjs.Ease.getPowOut(4)).to({ alpha: 0 }, 1e3, createjs.Ease.getPowIn(4))
        }, e.prototype.dispose = function () {
            null != this._tween && this._tween.setPaused(!0), this._tween = null
        }, e
    }(PIXI.Container)
}