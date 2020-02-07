const function875 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(50),
        r = function () {
            function t(t, e, i) {
                var n = this;
                this._onClickYES = function () {
                    n.onComplete(!0)
                }, this._onClickNO = function () {
                    n.onComplete(!1)
                }, i.interactive = !0, i.alpha = 0, e.alpha = 0, e.x = Math.floor(600 - e.width / 2), e.y = Math.floor(360 - e.height / 2 + 27), e.onClickYES = this._onClickYES, e.onClickNO = this._onClickNO, t.addChild(i, e), this.mainView = t, this.background = i, this.useRepairConfirmView = e
            }
            return t.prototype.dispose = function () {
                this.mainView.removeChild(this.background), this.mainView.removeChild(this.useRepairConfirmView), this.useRepairConfirmView = null, this.background = null, this.mainView = null, this._onClickYES = this._onClickNO = null
            }, t.prototype.start = function (t, e) {
                n.default.view.clickGuard = !0;
                var i = n.default.model.ship.get(t);
                this.useRepairConfirmView.update(i, e), this.background.alpha = 0, this.useRepairConfirmView.alpha = 0;
                var r = o.UISettings.DIALOG_FADETIME,
                    s = {
                        alpha: 1
                    };
                createjs.Tween.get(this.background).to(s, r), createjs.Tween.get(this.useRepairConfirmView).to(s, r).call(function () {
                    n.default.view.clickGuard = !1
                })
            }, t.prototype.hide = function (t) {
                var e = o.UISettings.DIALOG_FADETIME,
                    i = {
                        alpha: 0
                    };
                createjs.Tween.get(this.background).to(i, e), createjs.Tween.get(this.useRepairConfirmView).to(i, e).call(function () {
                    n.default.view.clickGuard = !1, t()
                })
            }, t
        }();
    e.PhaseRepairConfirm = r
}