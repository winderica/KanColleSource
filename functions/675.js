const function675 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(5), o = i(0), r = i(1), s = i(31), a = i(8), _ = i(37), u = i(6), l = i(676), c = function () {
        function t(t) {
            var e = this;
            this._onClickBack = function () {
                e.onClickBack()
            }, this.mainView = t, this.dialogBackground = new a.AreaBox(.5), this.shipDetailView = new l.ShipDetailView
        }

        return t.prototype.start = function (t) {
            var e = o.default.model.ship.get(t), i = o.default.model.ship.getMst(e.mstID),
                a = s.ShipUtil.isMaxGradeUp(e, i, !1), _ = o.default.model.deck.isInDeck(e.memID);
            this.dialogBackground.alpha = 0, this.dialogBackground.on(r.EventType.CLICK, this._onClickBack);
            var l = !1;
            if (_) {
                l = null != o.default.model.deck.get(_[0]).expedition
            }
            this.shipDetailView.updateBox1(e.name, e.level, e.hpNow, e.hpMax, e.starNum, a), this.shipDetailView.updateBox2(e, e.getSlotitems()), this.shipDetailView.updateBox3(e.hpMax, e.soukou, e.kaihi, e.tousai, e.speed, e.range, e.karyoku, e.raisou, e.taiku, e.taisen, e.sakuteki, e.lucky), this.shipDetailView.updateBox4(e, e.getSlotitemEx(), e.isExtraSlot()), this.shipDetailView.updateBox5(e, l), this.shipDetailView.position.set(n.default.width, 141), this.mainView.addChild(this.dialogBackground, this.shipDetailView), o.default.view.overLayer.removeChild(this.presetPageChangeButton), this.mainView.addChild(this.shipDetailView), o.default.view.clickGuard = !0, u.SE.play("249");
            createjs.Tween.get(this.dialogBackground).to({ alpha: 1 }, 125), createjs.Tween.get(this.shipDetailView).to({ x: 471 }, 125).call(function () {
                o.default.sound.voice.playAtRandom(e.mstID.toString(), [2, 3], [50, 50]), o.default.view.clickGuard = !1
            })
        }, t.prototype.hide = function (t) {
            _.TaskLoadShipResource.abortBy(this.shipDetailView), o.default.view.clickGuard = !0;
            createjs.Tween.get(this.dialogBackground).to({ alpha: 0 }, 125), createjs.Tween.get(this.shipDetailView).to({ x: n.default.width }, 125).call(function () {
                o.default.view.clickGuard = !1, t()
            })
        }, t.prototype.dispose = function () {
            this.dialogBackground.off(r.EventType.CLICK, this._onClickBack), this.shipDetailView && this.shipDetailView.dispose(), this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this.shipDetailView), this.onClickBack = null, this.dialogBackground = null, this.mainView = null, this.shipDetailView = null, this.presetPageChangeButton = null
        }, t
    }();
    e.TaskShipDetail = c
}