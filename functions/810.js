const function810 = function (t, e, i) {
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
    var o = i(4), r = i(3), s = i(13), a = function (t) {
        function e() {
            var e = t.call(this) || this, i = new PIXI.Sprite(r.REMODEL_GRADEUP.getTexture(10)),
                n = new PIXI.Sprite(r.REMODEL_GRADEUP.getTexture(20));
            n.position.set(204, 23);
            var a = new PIXI.Sprite(r.REMODEL_GRADEUP.getTexture(12));
            a.position.set(164, 143);
            var _ = new PIXI.Sprite(r.REMODEL_GRADEUP.getTexture(13));
            _.position.set(21, 101);
            var u = new PIXI.Sprite(r.REMODEL_GRADEUP.getTexture(14));
            u.position.set(21, 143);
            var l = new PIXI.Sprite(r.REMODEL_GRADEUP.getTexture(15));
            l.position.set(162, 101), e.addChild(i, n, a, _, u, l), e._unknown = new PIXI.Sprite, e._unknown.position.set(27, 18), e.addChild(e._unknown), e._containerName = new PIXI.Container, e._textName = new o.TextBox(36, 4999235), e._textName.position.set(11, 8);
            var c = s.CreateRect.gradientLeftToRight(200, 55, .9, .97);
            e._textName.mask = c, e._containerName.addChild(e._textName, c), e.addChild(e._containerName), e._textShipType = new o.TextBox(22, 4999235), e._textShipType.position.set(14, 60), e.addChild(e._textShipType), e._textLevel = new o.TextBox(29, 4999235), e._textLevel.position.set(231, 16), e.addChild(e._textLevel);
            return e._textKaryoku = new o.TextBox(24, 4999235), e._textKaryoku.position.set(141, 99), e._textKaryoku.anchor.x = 1, e.addChild(e._textKaryoku), e._textRaiso = new o.TextBox(24, 4999235), e._textRaiso.position.set(141, 142), e._textRaiso.anchor.x = 1, e.addChild(e._textRaiso), e._textTaiku = new o.TextBox(24, 4999235), e._textTaiku.position.set(284, 99), e._textTaiku.anchor.x = 1, e.addChild(e._textTaiku), e._textSouko = new o.TextBox(24, 4999235), e._textSouko.position.set(284, 142), e._textSouko.anchor.x = 1, e.addChild(e._textSouko), e
        }

        return n(e, t), e.prototype.update = function (t, e, i) {
            void 0 === e && (e = null), void 0 === i && (i = null), this._textLevel.text = t.toString(), null == e || "" == e ? (this._unknown.texture = r.REMODEL_GRADEUP.getTexture(28), this._unknown.visible = !0, this._textName.visible = !1, this._textShipType.visible = !1) : (this._unknown.visible = !1, this._containerName.cacheAsBitmap = !1, this._textName.text = e, this._containerName.cacheAsBitmap = !0, this._textName.visible = !0, this._textShipType.text = i, this._textShipType.visible = !0)
        }, e.prototype.updateStatus = function (t, e, i, n) {
            void 0 === t && (t = -1), void 0 === e && (e = -1), void 0 === i && (i = -1), void 0 === n && (n = -1), this._textKaryoku.text = t >= 0 ? t.toString() : "??", this._textRaiso.text = e >= 0 ? e.toString() : "??", this._textTaiku.text = i >= 0 ? i.toString() : "??", this._textSouko.text = n >= 0 ? n.toString() : "??"
        }, e.prototype.dispose = function () {
            this._unknown = null, this._containerName = null, this._textName = null, this._textShipType = null, this._textLevel = null, this._textKaryoku = null, this._textRaiso = null, this._textTaiku = null, this._textSouko = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.KaizoDetailShipPanel = a
}