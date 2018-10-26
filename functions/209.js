const function209 = function (t, e, i) {
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
    var o = i(681), r = i(210), s = i(4), a = function (t) {
        function e(e) {
            var i = t.call(this) || this, n = new PIXI.Sprite(e);
            i.addChild(n);
            return i._textHp = new s.TextBox(20, 5523516), i._textHp.anchor.x = 1, i.addChild(i._textHp), i._textSoukou = new s.TextBox(20, 5523516), i._textSoukou.anchor.x = 1, i.addChild(i._textSoukou), i._textKaihi = new s.TextBox(20, 5523516), i._textKaihi.anchor.x = 1, i.addChild(i._textKaihi), i._textTousai = new s.TextBox(20, 5523516), i._textTousai.anchor.x = 1, i.addChild(i._textTousai), i._sokuryoku = new r.ShipSpeedImage, i.addChild(i._sokuryoku), i._shatei = new o.ShateiImage, i.addChild(i._shatei), i._textKaryoku = new s.TextBox(20, 5523516), i._textKaryoku.anchor.x = 1, i.addChild(i._textKaryoku), i._textRaisou = new s.TextBox(20, 5523516), i._textRaisou.anchor.x = 1, i.addChild(i._textRaisou), i._textTaiku = new s.TextBox(20, 5523516), i._textTaiku.anchor.x = 1, i.addChild(i._textTaiku), i._textTaisen = new s.TextBox(20, 5523516), i._textTaisen.anchor.x = 1, i.addChild(i._textTaisen), i._textSakuteki = new s.TextBox(20, 5523516), i._textSakuteki.anchor.x = 1, i.addChild(i._textSakuteki), i._textLucky = new s.TextBox(20, 5523516), i._textLucky.anchor.x = 1, i.addChild(i._textLucky), i._alignment(), i
        }

        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._sokuryoku.dispose(), this._shatei.dispose(), this._textHp.destroy(), this._textSoukou.destroy(), this._textKaihi.destroy(), this._textTousai.destroy(), this._textKaryoku.destroy(), this._textRaisou.destroy(), this._textTaiku.destroy(), this._textTaisen.destroy(), this._textSakuteki.destroy(), this._textLucky.destroy(), this._textHp = null, this._textSoukou = null, this._textKaihi = null, this._textTousai = null, this._sokuryoku = null, this._shatei = null, this._textKaryoku = null, this._textRaisou = null, this._textTaiku = null, this._textTaisen = null, this._textSakuteki = null, this._textLucky = null
        }, e
    }(PIXI.Container);
    e.ShipParameterViewBase = a
}