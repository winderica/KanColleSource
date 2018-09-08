const function831 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(49), r = function () {
        function t(t, e, i) {
            var n = this;
            this._onClickYES = function () {
                n.onComplete(!0)
            }, this._onClickNO = function () {
                n.onComplete(!1)
            }, i.interactive = !0, i.alpha = 0, e.alpha = 0, e.x = Math.floor(600 - e.width / 2), e.y = Math.floor(360 - e.height / 2 + 27), t.addChild(i, e), e.onClickYES = this._onClickYES, e.onClickNO = this._onClickNO, this.mainView = t, this.useHiSpeedRepairConfirmView = e, this.background = i
        }

        return t.prototype.start = function (t) {
            n.default.view.clickGuard = !0;
            var e = n.default.model.ndock.get(t), i = n.default.model.ship.get(e.shipMemID),
                r = n.default.model.useItem.get(1).count;
            this.useHiSpeedRepairConfirmView.update(i, r);
            var s = o.UISettings.DIALOG_FADETIME, a = { alpha: 1 };
            createjs.Tween.get(this.background).to(a, s), createjs.Tween.get(this.useHiSpeedRepairConfirmView).to(a, s).call(function () {
                n.default.view.clickGuard = !1
            })
        }, t.prototype.hide = function (t) {
            n.default.view.clickGuard = !0;
            var e = o.UISettings.DIALOG_FADETIME, i = { alpha: 0 };
            createjs.Tween.get(this.background).to(i, e), createjs.Tween.get(this.useHiSpeedRepairConfirmView).to(i, e).call(function () {
                n.default.view.clickGuard = !1, t()
            })
        }, t.prototype.dispose = function () {
            this.mainView.removeChild(this.background), this.mainView.removeChild(this.useHiSpeedRepairConfirmView), this.onComplete = null, this.mainView = null, this.useHiSpeedRepairConfirmView = null, this.background = null
        }, t
    }();
    e.PhaseHiSpeedRepairConfirm = r
}