const function621 = function (t, e, i) {
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
        r = i(9),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._text = new o.TextBox(27, 16777215), e.addChild(e._text), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.texture = r.COMMON_MISC.getTexture(120), this._text.text = t, this._text.x = 615 - Math.round(this._text.width / 2), this._text.y = 159 - Math.round(this._text.height / 2)
            }, e.prototype.changeText = function (t) {
                var e = this;
                createjs.Tween.get(this._text).to({
                    alpha: 0
                }, 200).call(function () {
                    e._startAnimation(t)
                })
            }, e.prototype.dispose = function () {
                this._stopAnimation(), this.removeChildren(), this._text.destroy()
            }, e.prototype._startAnimation = function (t) {
                var e = this;
                null == this._t && null != t && 0 != t.length && (this._message = t, this._text.text = "", this._text.alpha = 1, this._text.x = 246, this._text.y = 87, this._t = createjs.Tween.get(null, {
                    loop: !0
                }).wait(100).call(function () {
                    var t = e._message.substr(0, 1);
                    " " == e._text.text ? e._text.text = t : e._text.text += t, e._message = e._message.substr(1), 0 == e._message.length && e._stopAnimation()
                }))
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Sprite);
    e.ModelChangeMessageBox = s
}