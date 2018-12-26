const function823 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(8),
        r = i(337),
        s = i(52),
        a = i(826),
        _ = i(827),
        l = i(828),
        u = function () {
            function t(t) {
                var e = this;
                this._onClickSign = function () {
                    n.default.view.overLayer.removeChild(e.clickGuardMarriageConfirm), n.default.view.overLayer.addChild(e.clickGuardMarriageConfirm);
                    var t = new a.MarriageAPI(e.memShipId);
                    n.default.view.clickGuard = !0, t.start(function () {
                        n.default.view.clickGuard = !1;
                        var t = new r.MarriageAnimation(n.default.model.ship.get(e.memShipId).mstID);
                        n.default.view.overLayer.addChild(t), t.PreLoad(function () {
                            t.Initialize(), t.Play(!1, function () {
                                n.default.view.overLayer.removeChild(e.marriageConfirm), n.default.view.overLayer.removeChild(e.clickGuardMarriageConfirm), n.default.view.overLayer.removeChild(t), t.Dispose(), n.default.sound.bgm.play(102), e.onUpdateShip(), e.onComplete()
                            })
                        })
                    })
                }, this._onClickConfirmBack = function () {
                    n.default.view.clickGuard = !0, createjs.Tween.get(e.clickGuardMarriageConfirm).to({
                        alpha: 0
                    }, 250), createjs.Tween.get(e.marriageConfirm).to({
                        alpha: 0
                    }, 250).call(function () {
                        n.default.view.clickGuard = !1, n.default.view.overLayer.removeChild(e.clickGuardMarriageConfirm), n.default.view.overLayer.removeChild(e.marriageConfirm), e.onComplete()
                    })
                }, this._onClickAlertBack = function () {
                    n.default.view.clickGuard = !0, createjs.Tween.get(e.clickGuardMarriageConfirm).to({
                        alpha: 0
                    }, 250), createjs.Tween.get(e.marriageAlert).to({
                        alpha: 0
                    }, 250).call(function () {
                        n.default.view.clickGuard = !1, n.default.view.overLayer.removeChild(e.clickGuardMarriageConfirm), n.default.view.overLayer.removeChild(e.marriageAlert), e.onComplete()
                    })
                }, this.mainView = t, this.marriageConfirm = new l.MarriageConfirm(this._onClickSign, this._onClickConfirmBack), this.marriageAlert = new _.MarriageAlert, this.clickGuardMarriageConfirm = new o.AreaBox(.5)
            }
            return t.prototype.start = function (t) {
                var e = n.default.model.useItem.get(s.RemodelConst.MARRIAGE_RING_ITEMID).count;
                this.marriageConfirm.position.set(294, 212), this.marriageAlert.position.set(294, 212), this.clickGuardMarriageConfirm.alpha = 0, this.marriageConfirm.alpha = 0, this.marriageAlert.alpha = 0, 0 < e ? (n.default.view.overLayer.addChild(this.clickGuardMarriageConfirm, this.marriageConfirm), this.marriageConfirm.update(e), n.default.view.clickGuard = !0, createjs.Tween.get(this.clickGuardMarriageConfirm).to({
                    alpha: 1
                }, 250), createjs.Tween.get(this.marriageConfirm).to({
                    alpha: 1
                }, 250).call(function () {
                    n.default.view.clickGuard = !1
                })) : (n.default.view.overLayer.addChild(this.clickGuardMarriageConfirm, this.marriageAlert), this.marriageAlert.onClickBack = this._onClickAlertBack, n.default.view.clickGuard = !0, createjs.Tween.get(this.clickGuardMarriageConfirm).to({
                    alpha: 1
                }, 250), createjs.Tween.get(this.marriageAlert).to({
                    alpha: 1
                }, 250).call(function () {
                    n.default.view.clickGuard = !1
                })), this.memShipId = t
            }, t.prototype.dispose = function () {
                this.marriageAlert.onClickBack = this._onClickAlertBack = null, this.onUpdateShip = null, this.onComplete = null, this.mainView = null, this.marriageConfirm && this.marriageConfirm.dispose(), this.marriageAlert && this.marriageAlert.dispose(), this.marriageConfirm = null, this.marriageAlert = null, this.clickGuardMarriageConfirm = null, this.memShipId = null
            }, t
        }();
    e.TaskMarriage = u
}