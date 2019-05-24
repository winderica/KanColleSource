const function727 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(0),
        o = i(31),
        r = i(69),
        s = i(215),
        a = i(728),
        _ = i(732),
        l = function () {
            function t(t) {
                var e = this;
                this._onCompleteChoiceShip = function (t) {
                    switch (t) {
                        case a.TaskChoiceShipResult.CHOICE:
                            e.memShipId = e.taskChoiceShip.memShipId, e.taskConfirmChangeShip = new _.TaskConfirmChangeShip(e.mainView), e.taskConfirmChangeShip.onComplete = e._onCompleteComfirm, e.taskConfirmChangeShip.start(e.deckId, e.slotIndex, e.memShipId);
                            break;
                        case a.TaskChoiceShipResult.CANCEL:
                            n.default.view.clickGuard = !0, e.taskChoiceShip.hide(function () {
                                e.taskChoiceShip.dispose(), e.taskChoiceShip = null, n.default.view.clickGuard = !1, e.onComplete()
                            });
                            break;
                        case a.TaskChoiceShipResult.DETACH:
                            n.default.view.clickGuard = !0;
                            var i = new o.APIConnector;
                            i.add(new s.ChangeAPI(!1, e.deckId, e.slotIndex, -1)), 10 == n.default.model.basic.getTutorialProgress() && i.add(new r.UpdateTutorialAPI(20)), i.start(function () {
                                n.default.view.clickGuard = !1, e.onUpdateDeck(), e.onComplete()
                            })
                    }
                }, this._onCompleteComfirm = function (t) {
                    switch (t) {
                        case !0:
                            n.default.view.clickGuard = !0;
                            var i = new o.APIConnector;
                            i.add(new s.ChangeAPI(!1, e.deckId, e.slotIndex, e.memShipId)), 10 == n.default.model.basic.getTutorialProgress() && i.add(new r.UpdateTutorialAPI(20)), i.start(function () {
                                n.default.view.clickGuard = !1, e.onUpdateDeck(), e.taskConfirmChangeShip.hide(function () {
                                    e.taskChoiceShip.dispose(), e.taskChoiceShip = null, e.taskConfirmChangeShip.dispose(), e.taskConfirmChangeShip = null, e.onComplete()
                                }), e.taskChoiceShip.hide(function () {})
                            });
                            break;
                        case !1:
                            n.default.view.clickGuard = !0, e.taskConfirmChangeShip.hide(function () {
                                e.taskConfirmChangeShip.dispose(), e.taskConfirmChangeShip = null, n.default.view.clickGuard = !1
                            })
                    }
                }, this.mainView = t
            }
            return t.prototype.dispose = function () {
                this.taskChoiceShip && this.taskChoiceShip.dispose(), this.taskConfirmChangeShip && this.taskConfirmChangeShip.dispose(), this.taskChoiceShip = null, this.taskConfirmChangeShip = null, this.mainView = null, this.deckId = null, this.memShipId = null, this.slotIndex = null
            }, t.prototype.start = function (t, e) {
                this.deckId = t, this.slotIndex = e;
                var i = n.default.model.deck.get(t),
                    o = !1;
                1 == i.mstID && 1 == i.getCount() ? o = !1 : i.getShipModel(e) && (o = !0), this.taskChoiceShip = new a.TaskChoiceShip(this.mainView), this.taskChoiceShip.onComplete = this._onCompleteChoiceShip, this.taskChoiceShip.start(o)
            }, t
        }();
    e.TaskChangeShip = l
}