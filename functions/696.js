const function696 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(697), o = i(702), r = i(704), s = i(706), a = i(101), _ = i(206), u = i(32), l = i(0),
        c = function () {
            function t(t, e) {
                var i = this;
                this.onCompleteConfirmUseMamiyaIrako = function (t) {
                    switch (t) {
                        case!1:
                            l.default.view.clickGuard = !0, i.taskConfirmUseMamiyaIrako.hide(function () {
                                i.taskConfirmUseMamiyaIrako.dispose(), i.taskConfirmUseMamiyaIrako = null, l.default.view.clickGuard = !1, i.onComplete()
                            });
                            break;
                        case!0:
                            l.default.view.clickGuard = !0;
                            var e = new s.ItemUseCondAPI(!0, i.deckId, i.sweetType), n = new a.UseItemAPI,
                                o = new _.UserShipAPI, r = new u.APIConnector;
                            r.add(e), r.add(n), r.add(o), r.start(i.onCompleteCallAPI)
                    }
                }, this.onCompleteCallAPI = function () {
                    i.taskConfirmUseMamiyaIrako.dispose(), i.taskConfirmUseMamiyaIrako = null, i.taskAnimationMamiyaIrako = new r.TaskAnimationMamiyaIrako(i.OrganizeView), l.default.view.overLayer.addChild(i.taskAnimationMamiyaIrako.mainLayer), i.taskAnimationMamiyaIrako.preLoad(function () {
                        i.taskAnimationMamiyaIrako.play(i.sweetType, function () {
                            i.onWhiteOut()
                        }, function () {
                            i.onCompleteAnimation()
                        })
                    })
                }, this.onCompleteAnimation = function () {
                    l.default.view.overLayer.removeChild(i.taskAnimationMamiyaIrako.mainLayer), i.taskAnimationMamiyaIrako.dispose(), i.taskAnimationMamiyaIrako = null, l.default.view.clickGuard = !1, i.onComplete()
                }, this.mainView = t, this.OrganizeView = e
            }

            return t.prototype.start = function (t) {
                var e = this;
                this.deckId = t, this.taskChoiceMamiyaIrako = new n.TaskChoiceMamiyaIrako(this.mainView), this.taskChoiceMamiyaIrako.onClickBack = function () {
                    l.default.view.clickGuard = !0, e.taskChoiceMamiyaIrako.hide(function () {
                        e.taskChoiceMamiyaIrako.dispose(), e.taskChoiceMamiyaIrako = null, l.default.view.clickGuard = !1, e.onComplete()
                    })
                }, this.taskChoiceMamiyaIrako.onClickUse = function (t) {
                    e.taskChoiceMamiyaIrako.dispose(), e.taskChoiceMamiyaIrako = null, e.taskConfirmUseMamiyaIrako = new o.TaskConfirmUseMamiyaIrako(e.mainView), e.taskConfirmUseMamiyaIrako.onComplete = e.onCompleteConfirmUseMamiyaIrako, e.sweetType = t, e.taskConfirmUseMamiyaIrako.start(t)
                }, this.taskChoiceMamiyaIrako.start(this.deckId)
            }, t.prototype.dispose = function () {
                this.taskChoiceMamiyaIrako && (this.taskChoiceMamiyaIrako.dispose(), this.taskChoiceMamiyaIrako = null), this.taskConfirmUseMamiyaIrako && (this.taskConfirmUseMamiyaIrako.dispose(), this.taskConfirmUseMamiyaIrako = null), this.taskAnimationMamiyaIrako && (this.taskAnimationMamiyaIrako.dispose(), this.taskAnimationMamiyaIrako = null), this.onComplete = null, this.onWhiteOut = null, this.mainView = null, this.deckId = null, this.sweetType = null
            }, t
        }();
    e.TaskMamiyaIrako = c
}