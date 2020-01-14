const function768 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(5),
        o = i(0),
        r = i(1),
        s = i(8),
        a = i(37),
        _ = i(769),
        u = function () {
            function t(t) {
                var e = this;
                this._onClickBackground = function () {
                    e.onComplete(!1)
                }, this._onClickChange = function () {
                    e.onComplete(!0)
                }, this.mainView = t, this.shipChangeConfirm = new _.ShipChangeConfirm, this.dialogBackground = new s.AreaBox(.5)
            }
            return t.prototype.start = function (t, e, i) {
                this.shipChangeConfirm.position.set(1200, 138), this.shipChangeConfirm.onClick = this._onClickChange, this.dialogBackground.alpha = 0, this.dialogBackground.on(r.EventType.CLICK, this._onClickBackground);
                var n = o.default.model.ship.get(i),
                    s = o.default.model.deck.isInDeck(i),
                    a = this.__validationOrganize__(t, e, i),
                    _ = !1;
                if (s) {
                    _ = null != o.default.model.deck.get(s[0]).expedition
                }
                this.shipChangeConfirm.updatePosition(n.getSlotViewMax()), this.shipChangeConfirm.updateBanner(n, _), this.shipChangeConfirm.updateMaterial(n.fuelNow, n.fuelMax, n.ammoNow, n.ammoMax), this.shipChangeConfirm.updateParams(n.karyoku, n.raisou, n.taiku, n.soukou), this.shipChangeConfirm.updateShip(n.mstID, n.isDamaged(), n.name, n.level, n.starNum, n.hpNow, n.hpMax, n.hpNow / n.hpMax), this.shipChangeConfirm.updateSlots(n, n.getSlotitems()), this.shipChangeConfirm.updateChangable(a), this.mainView.addChild(this.dialogBackground, this.shipChangeConfirm), this.toDeckId = t, this.toIndex = e, this.memShipId = i, o.default.view.clickGuard = !0;
                createjs.Tween.get(this.dialogBackground).to({
                    alpha: 1
                }, 125), createjs.Tween.get(this.shipChangeConfirm).to({
                    x: 882
                }, 125).call(function () {
                    o.default.view.clickGuard = !1
                })
            }, t.prototype.hide = function (t) {
                a.TaskLoadShipResource.abortBy(this.shipChangeConfirm);
                createjs.Tween.get(this.dialogBackground).to({
                    alpha: 0
                }, 125), createjs.Tween.get(this.shipChangeConfirm).to({
                    x: n.default.width
                }, 125).call(function () {
                    t()
                })
            }, t.prototype.dispose = function () {
                this.dialogBackground.off(r.EventType.CLICK, this._onClickBackground), this.shipChangeConfirm.dispose(), this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this.shipChangeConfirm), this.shipChangeConfirm.onClick = this._onClickChange = null, this.onComplete = null, this.mainView = null, this.shipChangeConfirm = null, this.dialogBackground = null, this.toDeckId = null, this.toIndex = null, this.memShipId = null, this.deckEditor = null, this.organizable = null
            }, t.prototype.__validationOrganize__ = function (t, e, i) {
                var n = o.default.model.deck.get(t),
                    r = n.getShipModel(e),
                    s = o.default.model.ship.get(i),
                    a = o.default.model.deck.isInDeck(i),
                    _ = null;
                if (a) {
                    var u = a[0];
                    _ = o.default.model.deck.get(u)
                }
                if (null == r && _ && 1 == _.mstID && 1 == _.getCount()) return !1;
                if (null == r && _ && n && _.mstID == n.mstID) return !1;
                if (s && _ && _.expedition) return !1;
                if (s && r && s.memID == r.memID) return !1;
                for (var l = n.getShipList(), c = 0; c < l.length; c++) {
                    var h = l[c];
                    if (s && h && h.yomi == s.yomi && c != e) {
                        if (!_) return !1;
                        if (n.mstID != _.mstID) return !1
                    }
                }
                if (r && s && _)
                    for (var p = _.getShipList(), d = _.isInDeck(s.memID), f = 0; f < p.length; f++) {
                        var y = p[f];
                        if (r && y && y.yomi == r.yomi && n.mstID != _.mstID && f != d) return !1
                    }
                return !0
            }, t
        }();
    e.TaskConfirmChangeShip = u
}