const function736 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, o = i(5),
        r = i(0),
        s = i(1),
        a = i(28),
        _ = i(8),
        l = i(86),
        u = i(737),
        c = i(6),
        h = i(219),
        p = i(738),
        d = i(739);
    ! function (t) {
        t[t.CANCEL = 0] = "CANCEL", t[t.DETACH = 1] = "DETACH", t[t.CHOICE = 2] = "CHOICE"
    }(n = e.TaskChoiceShipResult || (e.TaskChoiceShipResult = {}));
    var f = function () {
        function t(t) {
            var e = this;
            this.ITEM_NUM = 10, this._onChangePage = function (t) {
                if (e._pageIndex != t) {
                    var i = e.ships.slice(t * e.ITEM_NUM, t * e.ITEM_NUM + e.ITEM_NUM);
                    e._updateShips_(i, e.detachable), h.OrganizeSceneMemory.pageIndex = e._pageIndex = t
                }
            }, this._onClickBackground = function () {
                e.onComplete(n.CANCEL)
            }, this._onClickLock = function (t) {
                r.default.view.clickGuard = !0, new d.ShipLockAPI(!1, t).start(function () {
                    r.default.view.clickGuard = !1, a.ShipUtil.sort(e.ships, e._shipSortKeyType);
                    var i = e.ships.slice(e._pageIndex * e.ITEM_NUM, e._pageIndex * e.ITEM_NUM + e.ITEM_NUM);
                    r.default.model.ship.get(t).isLocked() ? c.SE.play("242") : c.SE.play("255"), e._updateShips_(i, e.detachable)
                })
            }, this._onClickDetach = function () {
                e.onComplete(n.DETACH)
            }, this._onClickItem = function (t) {
                e._memShipId = t, e.onComplete(n.CHOICE)
            }, this._onClickSort = function () {
                var t;
                switch (e._shipSortKeyType) {
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
                e.shipSortButton.update(t), a.ShipUtil.sort(e.ships, t);
                var i = e.ships.slice(e._pageIndex * e.ITEM_NUM, e._pageIndex * e.ITEM_NUM + e.ITEM_NUM);
                e._updateShips_(i, e.detachable), h.OrganizeSceneMemory.shipSortKeyType = e._shipSortKeyType = t
            }, this._onFilter = function (t) {
                var i = r.default.model.ship.getAll();
                a.ShipUtil.sort(i, e._shipSortKeyType), e.ships = a.ShipUtil.filterByShipFilterType(i, t);
                var n = e._calcPageCount(e.ships.length),
                    o = e.ships.slice(0 * e.ITEM_NUM, 0 * e.ITEM_NUM + e.ITEM_NUM);
                h.OrganizeSceneMemory.pageIndex = e._pageIndex = 0, 0 == o.length ? e.pagerView.visible = !1 : (e.pagerView.visible = !0, e.pagerView.init(n), e.pagerView.changePage(0)), e.shipChoiceView.setExistLineUI(o.length), e._updateShips_(o, e.detachable)
            }, this.mainView = t;
            var i = h.OrganizeSceneMemory.filterStatus,
                o = h.OrganizeSceneMemory.japanese;
            this.shipChoiceView = new p.ShipChoiceView(i, o, this._onFilter), this.dialogBackground = new _.AreaBox(.5), this.pagerView = new l.PagerView, this.shipSortButton = new u.ShipSortButton
        }
        return Object.defineProperty(t.prototype, "memShipId", {
            get: function () {
                return this._memShipId
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.start = function (t) {
            var e = (h.OrganizeSceneMemory.pageIndex, h.OrganizeSceneMemory.shipSortKeyType);
            r.default.view.clickGuard = !0, this.dialogBackground.on(s.EventType.CLICK, this._onClickBackground), this.pagerView.onChangePage = this._onChangePage, this.shipChoiceView.onClickLock = this._onClickLock, this.shipChoiceView.onClickItem = this._onClickItem, this.shipChoiceView.onClickDetach = this._onClickDetach, this.shipSortButton.onClick = this._onClickSort, this.shipSortButton.interactive = this.shipSortButton.buttonMode = !0, this.pagerView.position.set(90, 528), this.shipChoiceView.position.set(1200, 138), this.shipSortButton.position.set(592, 41), this.dialogBackground.alpha = 0, this.shipChoiceView.addChild(this.pagerView, this.shipSortButton), this.mainView.addChild(this.dialogBackground, this.shipChoiceView), this.shipSortButton.update(e), this._shipSortKeyType = e, this.detachable = t;
            var i = r.default.model.ship.getAll();
            a.ShipUtil.sort(i, this._shipSortKeyType), this._pageIndex = h.OrganizeSceneMemory.pageIndex, this.ships = a.ShipUtil.filterByShipFilterType(i, this.shipChoiceView.getOnFilter());
            var n = this._calcPageCount(this.ships.length),
                o = this.ships.slice(this._pageIndex * this.ITEM_NUM, this._pageIndex * this.ITEM_NUM + this.ITEM_NUM);
            0 == o.length ? this.pagerView.visible = !1 : (this.pagerView.visible = !0, this.pagerView.init(n), this.pagerView.changePage(this._pageIndex)), this.shipChoiceView.setExistLineUI(o.length), this._updateShips_(o, this.detachable);
            createjs.Tween.get(this.dialogBackground).to({
                alpha: 1
            }, 125), createjs.Tween.get(this.shipChoiceView).to({
                x: 528
            }, 125).call(function () {
                r.default.view.clickGuard = !1
            })
        }, t.prototype._updateShips_ = function (t, e) {
            this.shipChoiceView.hideDetach(), e && this.shipChoiceView.showDetach();
            for (var i = 0; i < this.shipChoiceView.ITEM_NUM; i++) {
                var n = t[i];
                if (n) {
                    var o = r.default.model.deck.isInDeck(n.memID);
                    this.shipChoiceView.update(i, n, o)
                } else this.shipChoiceView.hide(i)
            }
        }, t.prototype.hide = function (t) {
            createjs.Tween.get(this.dialogBackground).to({
                alpha: 1
            }, 125), createjs.Tween.get(this.shipChoiceView).to({
                x: o.default.width
            }, 125).call(function () {
                t()
            })
        }, t.prototype.dispose = function () {
            h.OrganizeSceneMemory.filterStatus = this.shipChoiceView.getFilterStatus(), h.OrganizeSceneMemory.japanese = this.shipChoiceView.isJapanese(), this.dialogBackground.off(s.EventType.CLICK, this._onClickBackground), this.shipChoiceView.dispose(), this.pagerView.dispose(), this.shipSortButton.dispose(), this.mainView.removeChild(this.dialogBackground), this.mainView.removeChild(this.shipChoiceView), this.shipSortButton.onClick = null, this.onComplete = null, this.mainView = null, this.shipChoiceView = null, this.dialogBackground = null, this.pagerView = null, this.shipSortButton = null, this._onChangePage = null, this._onClickBackground = null, this._onClickDetach = null, this._onClickItem = null, this._onClickLock = null, this._onClickSort = null, this.ships = null, this._memShipId = null, this.detachable = null, this._pageIndex = null, this._shipSortKeyType = null
        }, t.prototype._calcPageCount = function (t) {
            var e = 0 == t ? 0 : t / this.ITEM_NUM;
            return e += 0 == t ? 0 : 0 < t % this.ITEM_NUM ? 1 : 0, e = parseInt(e.toString())
        }, t
    }();
    e.TaskChoiceShip = f
}