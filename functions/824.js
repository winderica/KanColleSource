const function824 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(8),
        r = i(6),
        s = i(52),
        a = i(825),
        _ = i(826),
        l = function () {
            function t(t) {
                var e = this;
                this._onClickNo = function () {
                    n.default.view.clickGuard = !0;
                    createjs.Tween.get(e.clickGuardConfirm).to({
                        alpha: 0
                    }, 250), createjs.Tween.get(e.extensionConfirm).to({
                        alpha: 0
                    }, 250).call(function () {
                        e.mainView.removeChild(e.clickGuardConfirm), e.mainView.removeChild(e.extensionConfirm), n.default.view.clickGuard = !1, e.onComplete()
                    })
                }, this._onClickYes = function () {
                    n.default.view.clickGuard = !0, new _.OpenExSlotAPI(e.memShipId).start(function () {
                        r.SE.play("203");
                        var t = new o.AreaBox(1, 16777215);
                        t.alpha = 0, e.mainView.addChild(t), createjs.Tween.get(t).to({
                            alpha: 1
                        }, 2e3).call(function () {
                            e.mainView.removeChild(e.clickGuardConfirm), e.mainView.removeChild(e.extensionConfirm), e.onUpdateShip()
                        }).to({
                            alpha: 0
                        }, 1e3).call(function () {
                            e.mainView.removeChild(t), n.default.view.clickGuard = !1, e.onComplete()
                        })
                    })
                }, this.extensionConfirm = new a.ExtensionConfirm(this._onClickYes, this._onClickNo), this.clickGuardConfirm = new o.AreaBox(.5), this.mainView = t
            }
            return t.prototype.start = function (t) {
                n.default.view.clickGuard = !0;
                var e = n.default.model.useItem.get(s.RemodelConst.REINFORCEMENT_WORK_ITEMID).count;
                this.extensionConfirm.alpha = 0, this.clickGuardConfirm.alpha = 0, this.extensionConfirm.position.set(294, 212), this.extensionConfirm.update(e), this.mainView.addChild(this.clickGuardConfirm, this.extensionConfirm), this.memShipId = t;
                createjs.Tween.get(this.clickGuardConfirm).to({
                    alpha: 1
                }, 250), createjs.Tween.get(this.extensionConfirm).to({
                    alpha: 1
                }, 250).call(function () {
                    n.default.view.clickGuard = !1
                })
            }, t.prototype.dispose = function () {
                this.extensionConfirm.dispose(), this.onUpdateShip = null, this.onComplete = null, this.extensionConfirm = null, this.clickGuardConfirm = null, this.mainView = null, this.memShipId = null
            }, t
        }();
    e.TaskExtension = l
}