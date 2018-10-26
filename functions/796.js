const function796 = function (t, e, i) {
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
    var o = i(209), r = i(126), s = function (t) {
        function e() {
            var e = this, i = r.REMODEL_POWERUP.getTexture(13);
            e = t.call(this, i) || this;
            var n = r.REMODEL_POWERUP.getTexture(22);
            return e._taikyuArrow = new PIXI.Sprite(n), e._taikyuArrow.position.set(106, 8), e._taikyuArrow.visible = !1, e.addChild(e._taikyuArrow), e._taisenArrow = new PIXI.Sprite(n), e._taisenArrow.position.set(245, 110), e._taisenArrow.visible = !1, e.addChild(e._taisenArrow), e._luckyArrow = new PIXI.Sprite(n), e._luckyArrow.position.set(245, 179), e._luckyArrow.visible = !1, e.addChild(e._luckyArrow), e
        }

        return n(e, t), e.prototype.dispose = function () {
            t.prototype.dispose.call(this), this._taikyuArrow = null, this._taisenArrow = null, this._luckyArrow = null
        }, e.prototype.clear = function () {
            this._textHp.text = "", this._textSoukou.text = "", this._textKaihi.text = "", this._textTousai.text = "", this._textKaryoku.text = "", this._textRaisou.text = "", this._textTaiku.text = "", this._textTaisen.text = "", this._textSakuteki.text = "", this._textLucky.text = ""
        }, e.prototype.updateKaryoku = function (t, e) {
            var i = 5523516;
            t != e && (i = 1949120), this._textKaryoku.style.fill = i, this._textKaryoku.text = "" + e
        }, e.prototype.updateRaisou = function (t, e) {
            var i = 5523516;
            t != e && (i = 1949120), this._textRaisou.style.fill = i, this._textRaisou.text = "" + e
        }, e.prototype.updateSoukou = function (t, e) {
            var i = 5523516;
            t != e && (i = 1949120), this._textSoukou.style.fill = i, this._textSoukou.text = "" + e
        }, e.prototype.updateTaiku = function (t, e) {
            var i = 5523516;
            t != e && (i = 1949120), this._textTaiku.style.fill = i, this._textTaiku.text = "" + e
        }, e.prototype.updateLucky = function (t, e, i) {
            this._textLucky.visible = !1, this._luckyArrow.visible = !1;
            var n = 5523516, o = "", r = t != e;
            i ? this._luckyArrow.visible = !0 : r ? (n = 1949120, o = "" + e, this._textLucky.visible = !0) : (o = "" + e, this._textLucky.visible = !0), this._textLucky.style.fill = n, this._textLucky.text = o
        }, e.prototype.updateTaikyu = function (t, e) {
            this._textHp.visible = !1, this._taikyuArrow.visible = !1, e ? this._taikyuArrow.visible = !0 : (this._textHp.visible = !0, this._textHp.text = "" + t)
        }, e.prototype.updateTaisen = function (t, e) {
            this._taisenArrow.visible = !1, this._textTaisen.visible = !1, e ? this._taisenArrow.visible = !0 : (this._textTaisen.visible = !0, this._textTaisen.text = "" + t)
        }, e.prototype.updateCommon = function (t, e, i, n, o, r, s) {
            this._textHp.text = "" + t, this._textKaihi.text = "" + e, this._textTousai.text = "" + i, this._textTaisen.text = "" + r, this._textSakuteki.text = "" + s, this._sokuryoku.update(n), this._shatei.update(o), this._sokuryoku.position.set(111 - Math.floor(this._sokuryoku.width / 2), 142), this._shatei.position.set(110 - Math.floor(this._shatei.width / 2), 175)
        }, e.prototype._alignment = function () {
            this._textHp.position.set(134, 3), this._textSoukou.position.set(134, 38), this._textKaihi.position.set(134, 72), this._textTousai.position.set(134, 107), this._sokuryoku.position.set(111, 143), this._shatei.position.set(111, 177), this._textKaryoku.position.set(273, 3), this._textRaisou.position.set(273, 38), this._textTaiku.position.set(273, 72), this._textTaisen.position.set(273, 106), this._textSakuteki.position.set(273, 139), this._textLucky.position.set(273, 174)
        }, e
    }(o.ShipParameterViewBase);
    e.ShipParameterChecker = s
}