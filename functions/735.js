const function735 = function (t, e, i) {
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
        r = i(57),
        s = i(167),
        a = i(58),
        _ = i(17),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickYES = function () {
                    e.onClickYES()
                }, e._onClickNO = function () {
                    e.onClickNO()
                }, e.message = new PIXI.Sprite;
                var i = r.ORGANIZE_MAIN.getTexture(26),
                    n = r.ORGANIZE_MAIN.getTexture(20);
                return e.buttonYes = new a.SimpleButton(i, i), e.buttonNo = new a.SimpleButton(n, n), e.textMamiyaCount = new o.TextBox(25, 5523516), e.textIrakoCount = new o.TextBox(25, 5523516), e.buttonYes.onClick = e._onClickYES, e.buttonNo.onClick = e._onClickNO, e.addChild(e.message, e.buttonYes, e.buttonNo, e.textMamiyaCount, e.textIrakoCount), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.buttonYes.dispose(), this.buttonNo.dispose(), this.textMamiyaCount.destroy(), this.textIrakoCount.destroy(), this.onClickYES = null, this.onClickNO = null, this.message = null, this.buttonYes = null, this.buttonNo = null, this.textMamiyaCount = null, this.textIrakoCount = null
            }, e.prototype.update = function (t, e, i) {
                switch (this.textMamiyaCount.text = e + " \u2192 " + (e - 1), this.textIrakoCount.text = i + " \u2192 " + (i - 1), this.textIrakoCount.visible = this.textMamiyaCount.visible = !1, t) {
                    case 2:
                        switch (s.OrganizeConst.getMamiyaOption().playVoiceDialogIrako(), this.message.texture = s.OrganizeConst.getMamiyaOption().res_info5, this.message.position.set(219, 87), this.buttonYes.position.set(763, 471), this.buttonNo.position.set(540, 471), this.textIrakoCount.visible = !0, this.textIrakoCount.position.set(747, 362), _.MAMIYA_IRAKO_SEASON) {
                            case 4:
                                this.textIrakoCount.position.set(747, 362);
                                break;
                            case 2:
                                this.textIrakoCount.position.set(747, 353);
                                break;
                            default:
                                this.textIrakoCount.position.set(747, 348)
                        }
                        break;
                    case 1:
                        switch (s.OrganizeConst.getMamiyaOption().playVoiceDialogMamiya(), this.message.texture = s.OrganizeConst.getMamiyaOption().res_info3, this.message.position.set(219, 87), this.buttonYes.position.set(763, 471), this.buttonNo.position.set(538, 471), this.textMamiyaCount.visible = !0, _.MAMIYA_IRAKO_SEASON) {
                            case 4:
                                this.textMamiyaCount.position.set(747, 354);
                                break;
                            case 2:
                                this.textMamiyaCount.position.set(747, 357);
                                break;
                            default:
                                this.textMamiyaCount.position.set(747, 340)
                        }
                        break;
                    case 3:
                        switch (s.OrganizeConst.getMamiyaOption().playVoiceDialogMamiyaIrako(), this.message.texture = s.OrganizeConst.getMamiyaOption().res_info6, this.message.position.set(63, 72), this.buttonYes.position.set(630, 471), this.buttonNo.position.set(405, 471), _.MAMIYA_IRAKO_SEASON) {
                            case 4:
                                this.textMamiyaCount.position.set(427, 345), this.textIrakoCount.position.set(654, 345);
                                break;
                            case 2:
                                this.textMamiyaCount.position.set(468, 342), this.textIrakoCount.position.set(694, 342);
                                break;
                            default:
                                this.textMamiyaCount.position.set(487, 340), this.textIrakoCount.position.set(715, 340)
                        }
                        this.textMamiyaCount.visible = !0, this.textIrakoCount.visible = !0
                }
            }, e
        }(PIXI.Container);
    e.UseSweetConfirm = u
}