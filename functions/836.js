const function836 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(5),
        o = i(0),
        r = i(112),
        s = i(1),
        a = function () {
            function t(t, e, i) {
                var n = this;
                this._useHiSpeed = !1, this._onClick = function () {
                    n._useHiSpeed = 1 == n.repairShipConfigView.state, n.onComplete(!0)
                }, this._onClickBack = function () {
                    n.onComplete(!1)
                }, i.alpha = 0, i.interactive = !0, i.addListener(s.EventType.CLICK, this._onClickBack), e.position.set(1200, 140), t.addChild(i, e), e.onClick = this._onClick, this.repairShipConfigView = e, this.background = i, this.mainView = t
            }
            return Object.defineProperty(t.prototype, "useHiSpeed", {
                get: function () {
                    return this._useHiSpeed
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.start = function (t) {
                var e = this;
                o.default.view.clickGuard = !0;
                var i = !1,
                    n = o.default.model.ship.get(t),
                    r = o.default.model.useItem.get(33).count,
                    s = o.default.model.useItem.get(31).count,
                    a = n.getRepairSteel() <= r,
                    _ = n.getRepairFuel() <= s,
                    l = o.default.model.deck.isInDeck(t),
                    u = o.default.model.useItem.get(1),
                    c = 0 < u.count,
                    h = o.default.model.ndock.getShipMemIDs(),
                    p = -1 < h.indexOf(t);
                null != l && (i = null != o.default.model.deck.get(l[0]).expedition), this.repairShipConfigView.update(n, a, _, i, p, c);
                var d = createjs.Tween.get(this.repairShipConfigView);
                createjs.Tween.get(this.background).to({
                    alpha: 1
                }, 150).play(null), d.to({
                    x: 855
                }, 150).call(function () {
                    createjs.Tween.removeTweens(e.repairShipConfigView), createjs.Tween.removeTweens(e.background), e.repairShipConfigView.x = 855, e.background.alpha = 1, e.background.width = 887, o.default.view.clickGuard = !1
                }).play(null)
            }, t.prototype.hide = function (t) {
                var e = this;
                r.TaskLoadShipResource.abortBy(this.repairShipConfigView);
                var i = createjs.Tween.get(this.repairShipConfigView),
                    o = createjs.Tween.get(this.background);
                this.background.width = n.default.width, o.to({
                    alpha: 0
                }, 150).play(null), i.to({
                    x: 1200
                }, 150).call(function () {
                    createjs.Tween.removeTweens(e.repairShipConfigView), createjs.Tween.removeTweens(e.background), e.repairShipConfigView.x = 1200, e.background.alpha = 0, t()
                }).play(null)
            }, t.prototype.dispose = function () {
                this.mainView.removeChild(this.background), this.mainView.removeChild(this.repairShipConfigView), this.background.removeAllListeners(s.EventType.CLICK), this.background = null, this.repairShipConfigView = null
            }, t
        }();
    e.PhaseRepairShipConfig = a
}