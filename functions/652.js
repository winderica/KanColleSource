const function652 = function (t, e, i) {
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
        r = i(10),
        s = i(49),
        a = function (t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "model", {
                get: function () {
                    return this._model
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._createContent = function () {
                var t = r.COMMON_MISC.getTexture(147);
                this._img = new PIXI.Sprite(t), this._img.x = -135, this._img.y = -135, this._dialog.container.addChild(this._img), this._text1 = new o.TextBox(25, 16774898), this._text1.text = "\u5927\u578b\u8266\u5efa\u9020\u304c", this._text1.x = -Math.round(this._text1.width / 2), this._text2 = new o.TextBox(25, 16774898), this._text2.text = "\u958b\u653e\u3055\u308c\u307e\u3057\u305f\uff01", this._text2.x = -Math.round(this._text2.width / 2), this._text2.y = this._text1.y + this._text1.height, this._dialog.container.addChild(this._text1), this._dialog.container.addChild(this._text2), this._showDialog()
            }, e.prototype._removeContent = function () {
                this._dialog.container.removeChild(this._img), this._img = null, this._dialog.container.removeChild(this._text1), this._dialog.container.removeChild(this._text2), this._text1.destroy(), this._text1 = null, this._text2.destroy(), this._text2 = null
            }, e
        }(s.TaskRewardDialogBase);
    e.TaskRewardDialogLargeBuild = a
}