const function576 = function (t, e, i) {
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
    var o = i(4), r = function (t) {
        function e(e, i, n, r) {
            var s = t.call(this) || this;
            return s._name = new o.TextBox(21, 4204800), s._name.text = "", s._name.position.set(44 + i, 30 * e + 95 + n), s._name.alpha = 1, s._name.mask = r[0], s.addChild(s._name), s._param = new o.TextBox(14, 4204800), s._param.text = "", s._param.style.letterSpacing = -1, s._param.position.set(400 + i, 30 * e + 99 + n), s._param.alpha = 1, s._param.mask = r[1], s.addChild(s._param), s._price = new o.TextBox(22, 13892095), s._price.text = "", s._price.position.set(618 + i, 30 * e + 93 + n), s._price.anchor.set(.5, 0), s._price.alpha = 1, s._price.mask = r[2], s.addChild(s._price), s._btn = new PIXI.Graphics, s._btn.beginFill(43639), s._btn.drawRect(42 + i, 30 * e + 91 + n, 625, 28), s._btn.alpha = .001, s._btn.interactive = !0, s.addChild(s._btn), s
        }

        return n(e, t), Object.defineProperty(e.prototype, "Btn", {
            get: function () {
                return this._btn
            }, enumerable: !0, configurable: !0
        }), e.prototype.playFadeInOut = function (t, e) {
            this._tween = null, this._tween = createjs.Tween.get(this).to({ alpha: 1 - t }, 0).to({ alpha: t }, e)
        }, e.prototype.setText = function (t) {
            this._name.text = t.api_name, this._param.text = t.api_description, this._price.text = t.api_use_coin + ""
        }, e.prototype.dispose = function () {
            this.removeChildren(), this._name.destroy(), this._param.destroy(), this._price.destroy(), this._tween && (this._tween.setPaused(!0), this._tween = null)
        }, e
    }(PIXI.Container);
    e.BGMList = r
}