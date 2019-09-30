const function686 = function (t, e, i) {
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
    var o = i(213),
        r = i(21),
        s = function (t) {
            function e() {
                var e = r.COMMON_MAIN.getTexture(15);
                return t.call(this, e) || this
            }
            return n(e, t), e.prototype.dispose = function () {
                this.cacheAsBitmap = !1, t.prototype.dispose.call(this)
            }, e.prototype.update = function (t, e, i, n, o, r, s, a, _, l, u, c) {
                this.cacheAsBitmap = !1, this._sokuryoku.update(o), this._textHp.text = t.toString(), this._textSoukou.text = e.toString(), this._textKaihi.text = i.toString(), this._textTousai.text = n.toString(), this._shatei.update(r), this._textKaryoku.text = s.toString(), this._textRaisou.text = a.toString(), this._textTaiku.text = _.toString(), this._textTaisen.text = l.toString(), this._textSakuteki.text = u.toString(), this._textLucky.text = c.toString(), this.cacheAsBitmap = !0, this._sokuryoku.position.set(113 - Math.floor(this._sokuryoku.width / 2), 143), this._shatei.position.set(113 - Math.floor(this._shatei.width / 2), 177)
            }, e.prototype._alignment = function () {
                this._textHp.position.set(137, 3), this._textSoukou.position.set(137, 38), this._textKaihi.position.set(137, 72), this._textTousai.position.set(137, 107), this._sokuryoku.position.set(116, 143), this._shatei.position.set(116, 177), this._textKaryoku.position.set(285, 3), this._textRaisou.position.set(285, 38), this._textTaiku.position.set(285, 72), this._textTaisen.position.set(285, 107), this._textSakuteki.position.set(285, 141), this._textLucky.position.set(285, 176)
            }, e
        }(o.ShipParameterViewBase);
    e.ShipParameterView = s
}