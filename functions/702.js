const function702 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(8), r = i(703), s = function () {
        function t(t) {
            var e = this;
            this._onClickYES = function () {
                e.onComplete(!0)
            }, this._onClickNO = function () {
                e.onComplete(!1)
            }, this.mainView = t, this.dialogBackground = new o.AreaBox(.8), this.useSweetConfirm = new r.UseSweetConfirm
        }

        return t.prototype.start = function (t) {
            this.useSweetConfirm.onClickYES = this._onClickYES, this.useSweetConfirm.onClickNO = this._onClickNO, this.useSweetConfirm.visible = !0, this.dialogBackground.alpha = 1;
            var e = n.default.model.useItem.get(54).count, i = n.default.model.useItem.get(59).count;
            this.useSweetConfirm.update(t, e, i), this.mainView.addChild(this.dialogBackground, this.useSweetConfirm)
        }, t.prototype.hide = function (t) {
            this.useSweetConfirm.visible = !1, createjs.Tween.get(this.dialogBackground).to({ alpha: 0 }, 125).call(function () {
                t()
            })
        }, t.prototype.dispose = function () {
            this.useSweetConfirm.dispose(), this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this.useSweetConfirm), this.dialogBackground = null, this.useSweetConfirm = null, this.mainView = null, this.onComplete = null
        }, t
    }();
    e.TaskConfirmUseMamiyaIrako = s
}