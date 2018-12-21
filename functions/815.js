const function815 = function (t, e, i) {
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
    var o = i(4), r = i(113), s = i(3), a = i(3), _ = i(333), l = i(86), u = i(816), c = i(817), h = i(818),
        p = i(819), d = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickStart = function () {
                    null != e._cb_onStart && e._cb_onStart()
                }, e._onClickCancel = function () {
                    null != e._cb_onCancel && e._cb_onCancel()
                };
                var i = new PIXI.Sprite(s.COMMON_MAIN.getTexture(12));
                i.interactive = !0, e.addChild(i);
                var n = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(23));
                n.position.set(275, 194), e.addChild(n);
                var d = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(21));
                d.position.set(653, 194), e.addChild(d), e._shipPanelBefore = new c.KaizoDetailShipPanel, e._shipPanelBefore.position.set(35, 218), e.addChild(e._shipPanelBefore), e._shipPanelAfter = new c.KaizoDetailShipPanel, e._shipPanelAfter.position.set(408, 218), e.addChild(e._shipPanelAfter);
                var f = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(26));
                f.position.set(32, 416), e.addChild(f);
                var y = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(24));
                y.position.set(413, 418), e.addChild(y);
                var m = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(27));
                m.position.set(32, 471), e.addChild(m);
                var v = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(25));
                v.position.set(413, 473), e.addChild(v);
                e._textAmmoNow = new o.TextBox(24, 4999235), e._textAmmoNow.anchor.x = 1, e._textAmmoNow.position.set(330, 414), e.addChild(e._textAmmoNow), e._textAmmoNeed = new o.TextBox(24, 4999235), e._textAmmoNeed.anchor.x = 1, e._textAmmoNeed.position.set(700, 414), e.addChild(e._textAmmoNeed), e._textSteelNow = new o.TextBox(24, 4999235), e._textSteelNow.anchor.x = 1, e._textSteelNow.position.set(330, 469), e.addChild(e._textSteelNow), e._textSteelNeed = new o.TextBox(24, 4999235), e._textSteelNeed.anchor.x = 1, e._textSteelNeed.position.set(700, 469), e.addChild(e._textSteelNeed), e._cancelBtn = new _.CancelButton, e._cancelBtn.position.set(516, 507), e._cancelBtn.initialize(e._onClickCancel), e.addChild(e._cancelBtn), e._startBtn = new p.KaizoStartButton, e._startBtn.position.set(732, 489), e._startBtn.initialize(e._onClickStart), e.addChild(e._startBtn);
                var g = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(22));
                return g.position.set(720, 446), e.addChild(g), e._arrow = new r.DownArrowAnimationView, e._arrow.position.set(354, Math.floor(297 + e._arrow.width / 2)), e._arrow.rotation = -90 * Math.PI / 180, e.addChild(e._arrow), e._alertPanel = new h.KaizoRequireItemPanel, e._alertPanel.position.set(723, 215), e.addChild(e._alertPanel), e._alertMessage = new o.TextBox(15, 12467003), e._alertMessage.anchor.set(1, 0), e._alertMessage.position.set(505, 522), e.addChild(e._alertMessage), e._alertOverLimit = new PIXI.Sprite(a.REMODEL_GRADEUP.getTexture(11)), e._alertOverLimit.position.set(680, 405), e._alertOverLimit.visible = !1, e.addChild(e._alertOverLimit), e._header = new u.KaizoDetailHeader, e.addChild(e._header), e._titleBar = new l.TitleBar, e._titleBar.initialize(a.REMODEL_GRADEUP.getTexture(1), 26), e._titleBar.position.set(0, -39), e.addChild(e._titleBar), e
            }

            return n(e, t), e.prototype.activate = function (t, e) {
                this._cb_onStart = t, this._cb_onCancel = e
            }, e.prototype.update = function (t, e, i, n) {
                this._shipPanelBefore.update(t.level, t.name, t.shipTypeName), this._shipPanelBefore.updateStatus(t.karyoku, t.raisou, t.taiku, t.soukou), this._shipPanelAfter.update(t.level), this._shipPanelAfter.updateStatus(), this._textAmmoNow.text = e.getCount(32).toString(), this._textSteelNow.text = e.getCount(33).toString(), this._textAmmoNeed.text = e.getRequire(32).toString(), this._textSteelNeed.text = e.getRequire(33).toString(), this._header.update(t), this._startBtn.update(!1), e.validateAll() && 1 == i && 1 == n && this._startBtn.update(!0);
                var o = e.getRequire(58), r = e.getRequire(65), s = e.getRequire(78), a = e.getRequire(75),
                    _ = e.getRequire(3), l = e.getRequire(2), u = !1;
                if (0 == e.validate(58) ? (this._alertPanel.showAlertLackOfItem(58, o), u = !0) : 0 == e.validate(65) ? (this._alertPanel.showAlertLackOfItem(65, r), u = !0) : 0 == e.validate(75) ? (this._alertPanel.showAlertLackOfItem(75, a), u = !0) : 0 == e.validate(78) ? (this._alertPanel.showAlertLackOfItem(78, s), u = !0) : o > 0 && r > 0 && s > 0 ? this._alertPanel.showMessageThreeItems(58, o, 65, r, 78, s, _, l) : o > 0 && r > 0 ? this._alertPanel.showMessageTwoItems(58, o, 65, r, _, l) : o > 0 && s > 0 && a > 0 ? this._alertPanel.showMessageThreeItems(78, s, 75, a, 58, o, _, l) : o > 0 && s > 0 ? this._alertPanel.showMessageTwoItems(58, o, 78, s, _, l) : o > 0 ? this._alertPanel.showMessageOneItem(58, o, _, l) : s > 0 ? this._alertPanel.showMessageOneItem(78, s, _, l) : _ > 0 || l > 0 ? this._alertPanel.showMessageKits(_, l) : this._alertPanel.hideAll(), this._alertMessage.visible = !1, this._alertOverLimit.visible = !1, 0 == u) {
                    var c = e.validate(32), h = e.validate(33), p = !(l > 0) || e.validate(2),
                        d = !(_ > 0) || e.validate(3), f = c && h, y = p && d;
                    0 == f && 0 == y ? (this._alertMessage.text = "\u6539\u88c5\u306b\u5fc5\u8981\u306a\u8cc7\u6e90\u53ca\u3073\u8cc7\u6750\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059\u3002", this._alertMessage.visible = !0) : 0 == f ? (this._alertMessage.text = "\u6539\u88c5\u306b\u5fc5\u8981\u306a\u8cc7\u6e90\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059\u3002", this._alertMessage.visible = !0) : 0 == y ? (this._alertMessage.text = "\u6539\u88c5\u306b\u5fc5\u8981\u306a\u8cc7\u6750\u304c\u4e0d\u8db3\u3057\u3066\u3044\u307e\u3059\u3002", this._alertMessage.visible = !0) : 0 == n && (this._alertOverLimit.visible = !0)
                }
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._shipPanelBefore.dispose(), this._shipPanelAfter.dispose(), this._cancelBtn.dispose(), this._startBtn.dispose(), this._arrow.dispose(), this._alertPanel.dispose(), this._header.dispose(), this._titleBar.dispose(), this._textAmmoNow.destroy(), this._textSteelNow.destroy(), this._textAmmoNeed.destroy(), this._textSteelNeed.destroy(), this._alertMessage.destroy(), this._cb_onStart = null, this._cb_onCancel = null, this._shipPanelBefore = null, this._shipPanelAfter = null, this._textAmmoNow = null, this._textAmmoNeed = null, this._textSteelNow = null, this._textSteelNeed = null, this._cancelBtn = null, this._startBtn = null, this._arrow = null, this._alertPanel = null, this._alertMessage = null, this._alertOverLimit = null, this._header = null, this._titleBar = null
            }, e
        }(PIXI.Container);
    e.KaizoDetail = d
}