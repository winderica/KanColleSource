const function697 = function (t, e, i) {
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
    var o = i(0), r = i(4), s = i(55), a = i(107), _ = i(56), u = i(17), l = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClickYES = function () {
                e.onClickYES()
            }, e._onClickNO = function () {
                e.onClickNO()
            }, e.message = new PIXI.Sprite;
            var i = s.ORGANIZE_MAIN.getTexture(26), n = s.ORGANIZE_MAIN.getTexture(20);
            return e.buttonYes = new _.SimpleButton(i, i), e.buttonNo = new _.SimpleButton(n, n), e.textMamiyaCount = new r.TextBox(25, 5523516), e.textIrakoCount = new r.TextBox(25, 5523516), e.buttonYes.onClick = e._onClickYES, e.buttonNo.onClick = e._onClickNO, e.addChild(e.message, e.buttonYes, e.buttonNo, e.textMamiyaCount, e.textIrakoCount), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.buttonYes.dispose(), this.buttonNo.dispose(), this.onClickYES = null, this.onClickNO = null, this.message = null, this.buttonYes = null, this.buttonNo = null, this.textMamiyaCount = null, this.textIrakoCount = null, this._onClickNO = this._onClickYES = null, this.removeChildren()
        }, e.prototype.update = function (t, e, i) {
            switch (this.textMamiyaCount.text = e + " \u2192 " + (e - 1), this.textIrakoCount.text = i + " \u2192 " + (i - 1), this.textIrakoCount.visible = this.textMamiyaCount.visible = !1, t) {
                case 2:
                    var n = a.OrganizeConst.IRAKO_DIALOG_VOICE;
                    o.default.sound.voice.playAtRandom("9999", n[0], n[1]), this.message.texture = a.OrganizeConst.getMamiyaOption().res_info5, this.message.position.set(219, 87), this.buttonYes.position.set(763, 471), this.buttonNo.position.set(540, 471), this.textIrakoCount.visible = !0, this.textIrakoCount.position.set(747, 354);
                    break;
                case 1:
                    var r = a.OrganizeConst.MAMIYA_DIALOG_VOICE;
                    o.default.sound.voice.playAtRandom("9999", r[0], r[1]), this.message.texture = a.OrganizeConst.getMamiyaOption().res_info3, this.message.position.set(219, 87), this.buttonYes.position.set(763, 471), this.buttonNo.position.set(538, 471), this.textMamiyaCount.position.set(747, 354), this.textMamiyaCount.visible = !0;
                    break;
                case 3:
                    var s = a.OrganizeConst.MAMIYA_AND_IRAKO_DIALOG_VOICE;
                    o.default.sound.voice.playAtRandom("9999", s[0], s[1]), this.message.texture = a.OrganizeConst.getMamiyaOption().res_info6, this.message.position.set(63, 72), this.buttonYes.position.set(630, 471), this.buttonNo.position.set(405, 471);
                    var _ = void 0, l = void 0;
                    switch (u.MAMIYA_IRAKO_SEASON) {
                        case 4:
                            _ = 427, l = 654;
                            break;
                        case 2:
                            _ = 468, l = 694;
                            break;
                        default:
                            _ = 487, l = 715
                    }
                    this.textMamiyaCount.position.set(_, 345), this.textIrakoCount.position.set(l, 345), this.textMamiyaCount.visible = !0, this.textIrakoCount.visible = !0
            }
        }, e
    }(PIXI.Container);
    e.UseSweetConfirm = l
}