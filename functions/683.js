const function683 = function (t, e, i) {
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
    var o = i(81), r = i(108), s = i(4), a = i(32), _ = i(56), u = i(311), l = function (t) {
        function e() {
            var e = t.call(this) || this, i = _.ORGANIZE_MAIN.getTexture(30);
            e.background = new PIXI.Sprite(i);
            e.textHp = new s.TextBox(15, "white"), e.textLv = new s.TextBox(21, "white"), e.textHougeki = new s.TextBox(15, "white"), e.textTaiku = new s.TextBox(15, "white"), e.textRaigeki = new s.TextBox(15, "white"), e.textSoukou = new s.TextBox(15, "white"), e.shipBanner = new a.ShipBanner, e.rateView = new o.StarRateView, e.hpGaugeView = new r.HpGaugeView, e.expGaugeView = new u.ExpGaugeView, e.textHp.anchor.set(1, 0), e.textHp.position.set(229, 64), e.textLv.anchor.set(1, 0), e.textLv.position.set(237, 20), e.shipBanner.position.set(244, 18), e.textHougeki.anchor.set(1, 0), e.textHougeki.position.set(117, 90), e.textRaigeki.position.set(117, 120), e.textRaigeki.anchor.set(1, 0), e.textTaiku.position.set(232, 90), e.textTaiku.anchor.set(1, 0), e.textSoukou.position.set(232, 120), e.textSoukou.anchor.set(1, 0), e.rateView.position.set(18, 63), e.hpGaugeView.position.set(132, 54), e.expGaugeView.position.set(241, 87), e.containerName = new PIXI.Container;
            var n = new PIXI.Graphics;
            return e.textName = new s.TextBox(35, "white"), n.beginFill(0, 0), n.drawRect(0, 0, 105, 72), n.endFill(), e.containerName.position.set(23, 18), e.containerName.mask = n, e.containerName.addChild(e.textName, n), e.background.interactive = !0, e.addChild(e.background, e.hpGaugeView, e.expGaugeView, e.rateView, e.textHp, e.textLv, e.containerName, e.textHougeki, e.textTaiku, e.textRaigeki, e.textSoukou, e.shipBanner), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.hpGaugeView.dispose(), this.expGaugeView.dispose(), this.rateView.dispose(), this.shipBanner.dispose(), this.containerName.removeChildren(), this.containerName.mask = null, this.containerName = null, this.hpGaugeView = null, this.expGaugeView = null, this.rateView = null, this.shipBanner = null, this.textHp = null, this.textLv = null, this.textName = null, this.textHougeki = null, this.textTaiku = null, this.textRaigeki = null, this.textSoukou = null, this.background = null, this.removeChildren()
        }, e.prototype._updateName_ = function (t, e) {
            this.containerName.cacheAsBitmap = !1, this.textName.style.fill = e ? 16766947 : "white", this.textName.text = t, this.containerName.cacheAsBitmap = !0
        }, e.prototype.update = function (t, e) {
            this.shipBanner.update(t, e), this.shipBanner.updatePlate(t.label), this.textHougeki.text = t.karyoku.toString(), this.textTaiku.text = t.taiku.toString(), this.textRaigeki.text = t.raisou.toString(), this.textSoukou.text = t.soukou.toString(), this._updateName_(t.name, t.isMarriage()), this.textHp.text = t.hpNow + "/" + t.hpMax, this.background.interactive = !0, this.textLv.text = t.level.toString(), this.textHp.text = t.hpNow + "/" + t.hpMax, this.rateView.update(t.starNum), this.hpGaugeView.update(t.hpNow, t.hpMax), this.expGaugeView.update(t.expNowRate)
        }, e
    }(PIXI.Container);
    e.ShipInfo = l
}