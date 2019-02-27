const function677 = function (t, e, i) {
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
    var o = i(110),
        r = i(311),
        s = i(83),
        a = i(4),
        _ = i(21),
        l = i(9),
        u = i(312),
        c = i(679),
        h = i(313),
        p = i(15),
        d = function (t) {
            function e() {
                var e = t.call(this) || this,
                    i = new PIXI.Sprite;
                i.texture = _.COMMON_MAIN.getTexture(64), i.position.set(0, -37);
                var n = new PIXI.Sprite(_.COMMON_MAIN.getTexture(1));
                n.position.set(22, Math.floor(i.height / 2 - 4)), n.anchor.set(0, .5), i.addChild(n), e.textName = new a.TextBox(25, 5523516), e.textLevel = new a.TextBox(28, 5523516), e.textHp = new a.TextBox(15, 5523516), e.rateView = new s.StarRateView, e.slotItemSlotContainer = new h.SlotItemSlotContainer(5), e.extraSlotItemViewContainer = new h.SlotItemSlotContainer(1), e.hpGaugeView = new o.HpGaugeView, e.shipParameterView = new c.ShipParameterView, e.expGaugeView = new u.ExpGaugeView, e.textExp = new a.TextBox(16, 5523516);
                var d = new PIXI.Sprite(l.COMMON_MISC.getTexture(182));
                e.remodelMaxMedal = new PIXI.Sprite(_.COMMON_MAIN.getTexture(28));
                var f = new PIXI.Sprite(_.COMMON_MAIN.getTexture(65));
                e.shipCard = new r.ShipCard(!0, !0), e.sixSlotMessage = new PIXI.Sprite(_.COMMON_MAIN.getTexture(66));
                var y = new PIXI.Sprite(_.COMMON_MAIN.getTexture(12));
                e.containerName = new PIXI.Container, e.containerName.position.set(42, 23);
                var m = p.CreateRect.gradientLeftToRight(185, 45, .94, .95);
                return e.containerName.mask = m, e.containerName.addChild(e.textName, m), e.textLevel.anchor.x = 1, e.slotItemSlotContainer.position.set(51, 100), e.extraSlotItemViewContainer.position.set(405, 516), d.position.set(229, 30), f.position.set(364, 478), e.shipParameterView.position.set(51, 351), e.hpGaugeView.position.set(43, 72), e.textHp.position.set(152, 68), e.rateView.position.set(228, 72), e.expGaugeView.position.set(451, 481), e.textLevel.position.set(321, 24), e.remodelMaxMedal.position.set(322, 19), e.textExp.position.set(465, 493), e.textExp.anchor.x = 1, e.shipCard.position.set(369, 25), e.sixSlotMessage.position.set(531, 499), e.addChild(y, e.containerName, e.textLevel, e.hpGaugeView, e.textHp, e.expGaugeView, e.rateView, e.slotItemSlotContainer, e.extraSlotItemViewContainer, e.shipParameterView, e.shipCard, f, d, e.textExp, e.sixSlotMessage, e.remodelMaxMedal, i), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren(), this.hpGaugeView.dispose(), this.expGaugeView.dispose(), this.shipParameterView.dispose(), this.slotItemSlotContainer.dispose(), this.rateView.dispose(), this.extraSlotItemViewContainer.dispose(), this.shipCard.dispose(), this.containerName.cacheAsBitmap = !1, this.containerName.removeChildren(), this.containerName.mask = null, this.textName.destroy(), this.textLevel.destroy(), this.textHp.destroy(), this.textExp.destroy(), this.hpGaugeView = null, this.expGaugeView = null, this.shipParameterView = null, this.slotItemSlotContainer = null, this.rateView = null, this.extraSlotItemViewContainer = null, this.shipCard = null, this.textName = null, this.textLevel = null, this.textHp = null, this.textExp = null, this.remodelMaxMedal = null, this.sixSlotMessage = null, this.containerName = null
            }, e.prototype.updateBox1 = function (t, e, i, n, o, r) {
                this.containerName.cacheAsBitmap = !1, this.textName.text = t, this.containerName.cacheAsBitmap = !0, this.textHp.text = i + "/" + n, this.hpGaugeView.update(i, n), this.rateView.update(o), this.textLevel.text = e.toString(), this.remodelMaxMedal.visible = !!r
            }, e.prototype.updateBox2 = function (t, e) {
                this.slotItemSlotContainer.update(t, e, !1)
            }, e.prototype.updateBox3 = function (t, e, i, n, o, r, s, a, _, l, u, c) {
                this.shipParameterView.update(t, e, i, n, o, r, s, a, _, l, u, c)
            }, e.prototype.updateBox4 = function (t, e, i) {
                this.expGaugeView.update(t.expNowRate), this.textExp.text = t.expNextLevel.toString(), i ? (this.extraSlotItemViewContainer.update(t, [e], !0), this.extraSlotItemViewContainer.visible = !0, this.sixSlotMessage.visible = !0) : (this.extraSlotItemViewContainer.visible = !1, this.sixSlotMessage.visible = !1)
            }, e.prototype.updateBox5 = function (t, e) {
                this.shipCard.update(t, e)
            }, e
        }(PIXI.Container);
    e.ShipDetailView = d
}