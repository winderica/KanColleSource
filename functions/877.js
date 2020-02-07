const function877 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(5),
        o = i(0),
        r = i(28),
        s = i(172),
        a = i(878),
        _ = i(3),
        u = i(1),
        l = i(346),
        c = function () {
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
                        case 3:
                            t = 4;
                            break;
                        case 4:
                            t = 5;
                            break;
                        case 5:
                            t = 1;
                            break;
                        case 1:
                            t = 2;
                            break;
                        case 2:
                            t = 3
                    }
                    r.ShipUtil.sort(a.ships, t);
                    var e = a.ships.slice(a._pageIndex * s.RepairConst.ITEM_IN_COUNT, a._pageIndex * s.RepairConst.ITEM_IN_COUNT + s.RepairConst.ITEM_IN_COUNT);
                    a.repairShipChoiceView.update(e, a.repairingIds), a.shipSortButton.update(t), a._shipSortKeyType = t, l.RepairSceneMemory.shipSortKeyType = a._shipSortKeyType
                }, n.onClick = this._onClickSort, i.onChangePage = this._onClickPage, e.onClickListItem = this._onClickListItem, o.interactive = !0, o.addListener(u.EventType.CLICK, this._onClickBack), o.alpha = 0, t.addChild(o, e), e.addChild(i, n), e.position.set(1200, 142), n.position.set(585, 6), i.position.set(69, 528), this.repairShipChoiceView = e, this.shipSortButton = n, this.pagerView = i, this.mainView = t, this.background = o
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
                    u = [];
                n.forEach(function (t) {
                    u.push(t.shipMemID)
                });
                var l = o.default.model.ship.getAll(),
                    c = a.RepairUtil.calcPageCount(l.length);
                r.ShipUtil.sort(l, e);
                var h = l.slice(t * s.RepairConst.ITEM_IN_COUNT, t * s.RepairConst.ITEM_IN_COUNT + s.RepairConst.ITEM_IN_COUNT);
                this.repairShipChoiceView.update(h, u), this.shipSortButton.update(e), this.ships = l, this._pageIndex = t, this._shipSortKeyType = e, this.pagerView.init(c), this.pagerView.changePage(t), this.repairingIds = u;
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
                this.mainView.removeChild(this.background), this.mainView.removeChild(this.repairShipChoiceView), this.repairShipChoiceView.removeChild(this.shipSortButton), this.repairShipChoiceView.removeChild(this.pagerView), this.background.removeAllListeners(u.EventType.CLICK), this.onComplete = null, this._memShipId = null, this.repairShipChoiceView = null, this.shipSortButton = null, this.pagerView = null, this.ships = null, this._shipSortKeyType = null, this._pageIndex = null
            }, t
        }();
    e.PhaseRepairShipChoice = c
}