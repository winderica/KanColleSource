const function705 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(8),
        r = i(706),
        s = function () {
            function t(t) {
                var e = this;
                this._onClickBack = function () {
                    e.onClickBack()
                }, this._onClickIrako = function () {
                    e.onClickUse(2)
                }, this._onClickMamiya = function () {
                    e.onClickUse(1)
                }, this._onClickMamiyaAndIrako = function () {
                    e.onClickUse(3)
                }, this.mainView = t, this.sweetsSelectView = new r.SweetsSelectView, this.dialogBackground = new o.AreaBox(.8)
            }
            return t.prototype.dispose = function () {
                this.sweetsSelectView.dispose(), this.mainView.removeChild(this.sweetsSelectView), this.mainView.removeChild(this.dialogBackground), this.sweetsSelectView = null, this.mainView = null, this.dialogBackground = null, this.onClickBack = null, this.onClickUse = null
            }, t.prototype.start = function (t) {
                var e = this;
                this.sweetsSelectView.position.set(147, 267), this.sweetsSelectView.onClickBack = this._onClickBack, this.sweetsSelectView.onClickIrako = this._onClickIrako, this.sweetsSelectView.onClickMamiya = this._onClickMamiya, this.sweetsSelectView.onClickMamiyaAndIrako = this._onClickMamiyaAndIrako;
                for (var i = n.default.model.deck.get(t), o = i.getShipList(), r = n.default.model.useItem.get(54).count, s = n.default.model.useItem.get(59).count, a = !1, _ = 0; _ < o.length; _++) {
                    var l = o[_];
                    l && l.tired < 40 && (a = !0)
                }
                var u = 0 < r && a,
                    c = 0 < s,
                    h = 0 < r && 0 < s;
                this.mainView.addChild(this.dialogBackground, this.sweetsSelectView), this.sweetsSelectView.update(u, c, h), this.dialogBackground.alpha = 0, n.default.view.clickGuard = !0, this.sweetsSelectView.visible = !1, createjs.Tween.get(this.dialogBackground).to({
                    alpha: 1
                }, 125).call(function () {
                    e.sweetsSelectView.visible = !0, n.default.view.clickGuard = !1
                })
            }, t.prototype.hide = function (t) {
                this.sweetsSelectView.visible = !1, createjs.Tween.get(this.dialogBackground).to({
                    alpha: 0
                }, 125).call(function () {
                    t()
                })
            }, t
        }();
    e.TaskChoiceMamiyaIrako = s
}