const function211 = function (t, e, i) {
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
    var o = i(680), r = i(212), s = i(4), a = function (t) {
        function e(e) {
            var i = t.call(this) || this, n = new PIXI.Sprite(e);
            i.addChild(n);
            return i._textHp = new s.TextBox(20, 5523516), i._textHp.anchor.x = 1, i.addChild(i._textHp), i._textSoukou = new s.TextBox(20, 5523516), i._textSoukou.anchor.x = 1, i.addChild(i._textSoukou), i._textKaihi = new s.TextBox(20, 5523516), i._textKaihi.anchor.x = 1, i.addChild(i._textKaihi), i._textTousai = new s.TextBox(20, 5523516), i._textTousai.anchor.x = 1, i.addChild(i._textTousai), i._sokuryoku = new r.ShipSpeedImage, i.addChild(i._sokuryoku), i._shatei = new o.ShateiImage, i.addChild(i._shatei), i._textKaryoku = new s.TextBox(20, 5523516), i._textKaryoku.anchor.x = 1, i.addChild(i._textKaryoku), i._textRaisou = new s.TextBox(20, 5523516), i._textRaisou.anchor.x = 1, i.addChild(i._textRaisou), i._textTaiku = new s.TextBox(20, 5523516), i._textTaiku.anchor.x = 1, i.addChild(i._textTaiku), i._textTaisen = new s.TextBox(20, 5523516), i._textTaisen.anchor.x = 1, i.addChild(i._textTaisen), i._textSakuteki = new s.TextBox(20, 5523516), i._textSakuteki.anchor.x = 1, i.addChild(i._textSakuteki), i._textLucky = new s.TextBox(20, 5523516), i._textLucky.anchor.x = 1, i.addChild(i._textLucky), i._alignment(), i
        }

        return n(e, t), e.prototype.dispose = function () {
            this._sokuryoku.dispose(), this._shatei.dispose(), this.removeChildren()
        }, e
    }(PIXI.Container);
    e.ShipParameterViewBase = a
}