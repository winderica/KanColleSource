const function689 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(0), o = i(49), r = i(8), s = i(312), a = i(690), _ = i(691), u = i(692), l = i(213), c = function () {
        function t(t) {
            this.mainView = t, this.dialogBackground = new r.AreaBox(o.UISettings.DIALOG_BG_ALPHA), this.combineTypeSelectDialog = new u.CombineTypeSelectDialog, this.combineConfirmDialog = new _.CombineConfirmDialog, this.combineConfirmAlertDialog = new a.CombineConfirmAlertDialog
        }

        return t.prototype.dispose = function () {
            this.combineTypeSelectDialog.dispose(), this.combineConfirmDialog.dispose(), this.combineConfirmAlertDialog.dispose(), this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this.combineConfirmAlertDialog), this.mainView.removeChild(this.combineConfirmDialog), this.mainView.removeChild(this.combineTypeSelectDialog), this.combineTypeSelectDialog.onClickBack = null, this.combineTypeSelectDialog.onClickKido = null, this.combineTypeSelectDialog.onClickSuijo = null, this.combineTypeSelectDialog.onClickYuso = null, this.combineConfirmDialog.onClickNO = null, this.combineConfirmDialog.onClickYES = null, this.combineConfirmAlertDialog.onClickYES = null, this.onCombined = null, this.onComplete = null, this.mainView = null, this.dialogBackground = null, this.combineTypeSelectDialog = null, this.combineConfirmDialog = null, this.combineConfirmAlertDialog = null
        }, t.prototype.start = function () {
            var t = this;
            this.combineTypeSelectDialog.position.set(304, 232), this.combineTypeSelectDialog.update(!0, !0, !0), this.combineTypeSelectDialog.onClickBack = function () {
                t.onComplete()
            }, this.combineConfirmAlertDialog.position.set(216, 186), this.combineTypeSelectDialog.onClickKido = function () {
                t._onClickType(1)
            }, this.combineTypeSelectDialog.onClickSuijo = function () {
                t._onClickType(2)
            }, this.combineTypeSelectDialog.onClickYuso = function () {
                t._onClickType(3)
            }, this.mainView.addChild(this.dialogBackground, this.combineTypeSelectDialog)
        }, t.prototype._onClickType = function (t) {
            var e = this, i = n.default.model.deck.get(1), o = n.default.model.deck.get(2);
            this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this.combineTypeSelectDialog), this.combineConfirmDialog.position.set(171, 186);
            var r = s.CombineUtil.checkCombinable(i, o, t), a = r[0], _ = r[1], u = r[2];
            a ? (this.combineConfirmDialog.updateViewType(t), this.combineConfirmDialog.updateCombineDeck(i, o), this.combineConfirmDialog.onClickNO = function () {
                e.onComplete()
            }, this.combineConfirmDialog.onClickYES = function () {
                n.default.view.clickGuard = !0, new l.CombinedAPI(t).start(function () {
                    e.onCombined(), n.default.view.clickGuard = !1, e.onComplete()
                })
            }, this.mainView.addChild(this.dialogBackground, this.combineConfirmDialog)) : (this.combineConfirmAlertDialog.updateCombineDeck(i, o, _, u), this.combineConfirmAlertDialog.updateViewType(t), this.combineConfirmAlertDialog.onClickYES = function () {
                e.onComplete()
            }, this.mainView.addChild(this.dialogBackground, this.combineConfirmAlertDialog))
        }, t
    }();
    e.TaskCombineTypeSelect = c
}