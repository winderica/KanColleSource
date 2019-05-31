const function773 = function (t, e, i) {
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
    var o = i(212),
        r = i(21),
        s = function (t) {
            function e() {
                var e = r.COMMON_MAIN.getTexture(15);
                return t.call(this, e) || this
            }
            return n(e, t), e.prototype.update = function (t, e, i, n, o, r, s, a, _, l, u, c) {
                this._update_(t, e, i, n, o, r, s, a, _, l, u, c), this._sokuryoku.position.set(113 - Math.floor(this._sokuryoku.width / 2), 143), this._shatei.position.set(113 - Math.floor(this._shatei.width / 2), 177)
            }, e.prototype._update_ = function (t, e, i, n, o, r, s, a, _, l, u, c) {
                this._textHp.text = "" + t, this._textSoukou.text = "" + e, this._textKaihi.text = "" + i, this._textTousai.text = "" + n, this._textKaryoku.text = "" + s, this._textRaisou.text = "" + a, this._textTaiku.text = "" + _, this._textTaisen.text = "" + l, this._textSakuteki.text = "" + u, this._textLucky.text = "" + c, this._sokuryoku.update(o), this._shatei.update(r)
            }, e.prototype._alignment = function () {
                this._textHp.position.set(140, 3), this._textSoukou.position.set(140, 38), this._textKaihi.position.set(140, 72), this._textTousai.position.set(140, 105), this._sokuryoku.position.set(113, 140), this._shatei.position.set(114, 173), this._textKaryoku.position.set(290, 3), this._textRaisou.position.set(290, 38), this._textTaiku.position.set(290, 72), this._textTaisen.position.set(290, 106), this._textSakuteki.position.set(290, 140), this._textLucky.position.set(290, 174)
            }, e
        }(o.ShipParameterViewBase);
    e.ShipParameter = s
}