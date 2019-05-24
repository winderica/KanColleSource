const function840 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(5),
        o = i(0),
        r = i(28),
        s = i(168),
        a = i(841),
        _ = i(3),
        l = i(1),
        u = function () {
            function t(t, e, i, n, o) {
                var a = this;
                this._pageIndex = 0, this._onClickPage = function (t) {
                    if (a._pageIndex != t) {
                        var e = a.ships.slice(t * s.RepairConst.ITEM_IN_COUNT, t * s.RepairConst.ITEM_IN_COUNT + s.RepairConst.ITEM_IN_COUNT);
                        a.repairShipChoiceView.update(e, a.repairingIds), a._pageIndex = t
                    }
                }, this._onClickBack = function () {
                    a.onComplete(!1)
                }, this._onClickListItem = function (t) {
                    a._memShipId = t, a.onComplete(!0)
                }, this._onClickSort = function () {
                    var t;
                    switch (a._shipSortKeyType) {
                        case 1:
                            t = 2;
                            break;
                        case 2:
                            t = 3;
                            break;
                        case 3:
                            t = 4;
                            break;
                        case 4:
                            t = 1
                    }
                    r.ShipUtil.sort(a.ships, t);
                    var e = a.ships.slice(a._pageIndex * s.RepairConst.ITEM_IN_COUNT, a._pageIndex * s.RepairConst.ITEM_IN_COUNT + s.RepairConst.ITEM_IN_COUNT);
                    a.repairShipChoiceView.update(e, a.repairingIds), a.shipSortButton.update(t), a._shipSortKeyType = t
                }, n.onClick = this._onClickSort, i.onChangePage = this._onClickPage, e.onClickListItem = this._onClickListItem, o.interactive = !0, o.addListener(l.EventType.CLICK, this._onClickBack), o.alpha = 0, t.addChild(o, e), e.addChild(i, n), e.position.set(1200, 142), n.position.set(585, 6), i.position.set(69, 528), this.repairShipChoiceView = e, this.shipSortButton = n, this.pagerView = i, this.mainView = t, this.background = o
            }
            return Object.defineProperty(t.prototype, "memShipId", {
                get: function () {
                    return this._memShipId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "pageIndex", {
                get: function () {
                    return this._pageIndex
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "shipSortKeyType", {
                get: function () {
                    return this._shipSortKeyType
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.start = function (t, e) {
                var i = this;
                _.SE.play("249"), o.default.view.clickGuard = !0;
                var n = o.default.model.ndock.getAll(),
                    l = [];
                n.forEach(function (t) {
                    l.push(t.shipMemID)
                });
                var u = o.default.model.ship.getAll(),
                    c = a.RepairUtil.calcPageCount(u.length);
                r.ShipUtil.sort(u, e);
                var h = u.slice(t * s.RepairConst.ITEM_IN_COUNT, t * s.RepairConst.ITEM_IN_COUNT + s.RepairConst.ITEM_IN_COUNT);
                this.repairShipChoiceView.update(h, l), this.shipSortButton.update(e), this.ships = u, this._pageIndex = t, this._shipSortKeyType = e, this.pagerView.init(c), this.pagerView.changePage(t), this.repairingIds = l;
                var p = createjs.Tween.get(this.repairShipChoiceView);
                createjs.Tween.get(this.background).to({
                    alpha: 1
                }, 150).play(null), p.to({
                    x: 532
                }, 150).call(function () {
                    o.default.view.clickGuard = !1, i.background.width = 568
                }).play(null)
            }, t.prototype.hide = function (t) {
                var e = createjs.Tween.get(this.repairShipChoiceView),
                    i = createjs.Tween.get(this.background);
                this.background.width = n.default.width, i.to({
                    alpha: 0
                }, 150).play(null), e.to({
                    x: 1200
                }, 150).call(function () {
                    t()
                }).play(null)
            }, t.prototype.dispose = function () {
                this.mainView.removeChild(this.background), this.mainView.removeChild(this.repairShipChoiceView), this.repairShipChoiceView.removeChild(this.shipSortButton), this.repairShipChoiceView.removeChild(this.pagerView), this.background.removeAllListeners(l.EventType.CLICK), this.onComplete = null, this._memShipId = null, this.repairShipChoiceView = null, this.shipSortButton = null, this.pagerView = null, this.ships = null, this._shipSortKeyType = null, this._pageIndex = null
            }, t
        }();
    e.PhaseRepairShipChoice = u
}